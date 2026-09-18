/* ── private/news.js ── */
/* Nachrichten · eine Quelle für beide Flächen.

   Die Lieferung zeigte an zwei Stellen eine feste Rubrikenliste mit dem
   Hinweis „Noch keine Live-Artikel“. Das war ehrlich, aber eben auch
   nichts weiter als eine Überschriftensammlung.

   Jetzt kommen die Meldungen vom Worker-Endpunkt /api/news, der den
   tagesschau-RSS serverseitig holt und in JSON übersetzt. Serverseitig
   deshalb, weil der Feed keine CORS-Header schickt — aus dem Browser
   heraus wäre er gar nicht lesbar — und weil die Anfrage so hinter der
   Sitzung liegt: niemand sieht von aussen, welche Rubriken hier gelesen
   werden.

   Dieses Modul hält die Antworten zehn Minuten im Speicher. Dashboard-
   Karte und Nachrichten-Ansicht teilen sich dadurch eine Abfrage statt
   zwei, und der Wechsel zwischen den Rubriken lädt nicht jedes Mal neu. */
window.NEWS = (function () {
  'use strict';

  var TTL = 10 * 60 * 1000,
    cache = {},
    inflight = {};

  var TOPICS = [
    ['welt', 'Welt'],
    ['politik', 'Politik'],
    ['wirtschaft', 'Wirtschaft'],
    ['technik', 'Technik'],
  ];

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* Der Worker liefert Titel und Text als reinen Text — Markup ist dort
     schon entfernt. Trotzdem wird hier maskiert: die Inhalte stammen von
     einem fremden Server, und ein Titel, der zufällig spitze Klammern
     enthält, darf niemals als Markup im Dokument landen. */

  function load(topic) {
    var now = Date.now(),
      hit = cache[topic];
    if (hit && now - hit.at < TTL) return Promise.resolve(hit.data);
    if (inflight[topic]) return inflight[topic];

    inflight[topic] = fetch('/api/news?topic=' + encodeURIComponent(topic), {
      credentials: 'same-origin',
    })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(function (data) {
        if (!data || !data.items || !data.items.length) throw new Error('keine Meldungen');
        cache[topic] = { at: Date.now(), data: data };
        delete inflight[topic];
        return data;
      })
      .catch(function (err) {
        delete inflight[topic];
        throw err;
      });

    return inflight[topic];
  }

  /* „vor 12 Minuten“ statt „Thu, 18 Sep 2026 07:14:00 +0200“. Ungültige
     Datumsangaben geben einen leeren String zurück, damit die Zeile im
     Zweifel schlicht fehlt statt „Invalid Date“ anzuzeigen. */
  function rel(value) {
    var d = new Date(value);
    if (isNaN(d.getTime())) return '';
    var min = Math.round((Date.now() - d.getTime()) / 60000);
    if (min < 1) return 'gerade eben';
    if (min < 60) return 'vor ' + min + ' Minute' + (min === 1 ? '' : 'n');
    var h = Math.round(min / 60);
    if (h < 24) return 'vor ' + h + ' Stunde' + (h === 1 ? '' : 'n');
    var days = Math.round(h / 24);
    if (days === 1) return 'gestern';
    if (days < 7) return 'vor ' + days + ' Tagen';
    return d.toLocaleDateString('de-DE', { day: '2-digit', month: 'long' });
  }

  function clock(value) {
    var d = value ? new Date(value) : new Date();
    if (isNaN(d.getTime())) d = new Date();
    var p = function (n) {
      return n < 10 ? '0' + n : '' + n;
    };
    return p(d.getHours()) + ':' + p(d.getMinutes());
  }

  /* Ein Satz, der erklärt, was gerade nicht geht — statt einer leeren
     Fläche oder, schlimmer, alter Meldungen aus dem Cache ohne Hinweis. */
  function failText(err) {
    var msg = String((err && err.message) || err || '');
    if (/HTTP 401/.test(msg)) return 'Die Sitzung ist abgelaufen. Bitte neu anmelden.';
    if (/HTTP 5|keine Meldungen/.test(msg)) return 'Die tagesschau antwortet gerade nicht. Später erneut versuchen.';
    return 'Keine Verbindung zur Nachrichtenquelle.';
  }

  return { load: load, rel: rel, clock: clock, esc: esc, failText: failText, TOPICS: TOPICS };
})();
