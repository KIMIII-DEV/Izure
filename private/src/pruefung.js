/* ── private/pruefung.js ── */
/* Zwischenprüfung Kaufmann/-frau für Dialogmarketing.
   Reine Logik, kein DOM — wie learn.js, damit die Mechanik ohne Browser
   prüfbar bleibt (npm run test:pruefung). Stellt window.PRUEFUNG bereit.

   Grundlage (Lehrbuch „Ausbildung im Dialogmarketing", Anhang Die Zwischenprüfung):
   · programmierte Fragen, maximal 120 Minuten
   · vier Themengebiete, Inhalte des 1. Ausbildungsjahres
   · Teilnahme ist Zulassungsvoraussetzung zur Abschlussprüfung (§ 43 BBiG)

   Aufgabenpool: window.ZP aus content/pruefung/ (scripts/build-pruefung.mjs)
   — fünf nachgebaute Originalprüfungen (F21, H22, F24, H25, F26; Herbst 2023
   war mit Herbst 2022 identisch) und der Izuré-Übungssatz. Belegt aus den
   Originalen: 60 Aufgaben in 120 Minuten, Aufgabenarten Einfachauswahl,
   Mehrfachauswahl (2 aus 6 / 3 aus 7), offene Rechen- und Datumseingabe,
   Reihenfolge und Zuordnung. Die Verteilung auf die Themengebiete wird aus
   den 300 Originalaufgaben abgeleitet (quota), nicht mehr angenommen.

   Fehlt window.ZP, fällt die Prüfung auf den alten Pool aus den
   Lernfeld-Aufgaben zurück (Rechenaufgaben dann als Auswahl).          */

(function (w) {
  'use strict';

  var KEY = 'izure.pruefung.v1';
  var MINUTES = 120;
  var COUNT = 60;

  /* ── Themengebiete laut Buchtabelle ──────────────────────────────── */

  var TG = [
    { n: 1, t: 'Leistungsangebote im Dialogmarketing',
      k: ['Dienstleistungsangebot'],
      q: 'LF2 / Kapitel 1–2' },
    { n: 2, t: 'Kommunikationsprozesse',
      k: ['Sprachliche und schriftliche Kommunikation', 'Kundenbetreuung und Kundenbindung'],
      q: 'LF3 / Kapitel 1–6 · LF5 / Kapitel 1–8' },
    { n: 3, t: 'Arbeits- und Aufgabengestaltung',
      k: ['Arbeitsorganisation, Kooperation, Teamarbeit', 'Software, Netze und Dienste',
          'Datenbanken, Datenschutz und Datensicherheit'],
      q: 'LF1 / 1.1 und Kapitel 4–6 · LF4 / Kapitel 1–6 · LF5 / Kapitel 2' },
    { n: 4, t: 'Wirtschafts- und Sozialkunde',
      k: ['Stellung, Rechtsform und Struktur des Ausbildungsbetriebes',
          'Berufsbildung, arbeits-, sozial- und tarifrechtliche Vorschriften',
          'Sicherheit und Gesundheitsschutz bei der Arbeit', 'Umweltschutz'],
      q: 'LF1 / 1.2–1.4, Kapitel 2, Kapitel 3' }
  ];

  /* Ordnet eine Aufgabe über ihren Kapitelverweis einem Themengebiet zu.
     null heißt: liegt außerhalb des Prüfungsstoffs (etwa LF2 Kapitel 3). */
  function themengebiet(s) {
    if (!s) return null;
    var m = /^LF(\d)\s+(.*)$/.exec(s);
    if (!m) return null;
    var lf = +m[1], ch = m[2], top = parseInt(ch, 10) || 0;

    if (lf === 2) return top <= 2 ? 1 : null;
    if (lf === 3) return 2;
    if (lf === 4) return 3;
    if (lf === 5) return top === 2 ? 3 : 2;
    if (lf === 1) {
      if (/^1\.1/.test(ch) || /^VUCA/i.test(ch) || top >= 4) return 3;
      return 4;
    }
    return null;
  }

  /* ── Programmierte Fragen ─────────────────────────────────────────
     Die Zwischenprüfung besteht aus gebundenen Aufgaben. Freie Eingabe
     (Typ "type") fällt deshalb heraus. Rechenaufgaben bleiben drin, werden
     aber in Auswahlform überführt — so wie sie in der Prüfung auch
     erscheinen.                                                        */

  var CLOSED = ['mc', 'multi', 'tf', 'odd', 'cloze', 'match', 'order', 'calc'];

  function num(s) {
    var v = parseFloat(String(s).replace(/\./g, '').replace(',', '.').replace(/[^\d.\-]/g, ''));
    return isFinite(v) ? v : null;
  }
  function fmt(v, dec) {
    return v.toFixed(dec).replace('.', ',');
  }

  /* Wandelt eine Rechenaufgabe in eine Auswahlaufgabe. Die Distraktoren
     bilden typische Rechenfehler ab: Zehnerfehler, Kehrwert der Quote,
     Verdopplung, Bezugsgrößenfehler. Lässt sich kein sauberes Quartett
     bilden, fällt die Aufgabe aus der Prüfung heraus statt geraten zu
     werden — lieber eine Aufgabe weniger als eine unsaubere. */
  function calcToMC(item) {
    var v = num(item.ans[0]);
    if (v === null || v === 0) return null;
    var dec = /[.,]/.test(item.ans[0]) ? (item.ans[0].split(/[.,]/)[1] || '').length : 0;
    if (dec > 2) dec = 2;

    var seen = {}, out = [];
    seen[fmt(v, dec)] = 1;
    // Autorenseitige Distraktoren (typische Rechenfehler) haben Vorrang.
    if (Array.isArray(item.o)) {
      item.o.forEach(function (x) {
        var s = String(x).trim();
        if (out.length < 3 && s && !seen[s] && s !== String(item.ans[0]).trim()) { seen[s] = 1; out.push(s); }
      });
    }
    var cand = [v * 10, v / 10, v * 2, v / 2, 100 - v, v * 1.5];
    for (var i = 0; i < cand.length && out.length < 3; i++) {
      var c = cand[i];
      if (!isFinite(c) || c <= 0) continue;
      if (Math.abs(c) > 1e9) continue;
      var s = fmt(c, dec);
      if (seen[s]) continue;
      seen[s] = 1; out.push(s);
    }
    if (out.length < 3) return null;

    var unit = item.unit ? ' ' + item.unit : '';
    var opts = out.concat([fmt(v, dec)]).map(function (x) { return x + unit; });
    return {
      t: 'mc', q: item.q, a: opts, c: opts.length - 1,
      e: item.e, k: item.k, d: item.d, s: item.s, _calc: true
    };
  }

  /* ── Pool ─────────────────────────────────────────────────────────── */

  /* Alter Pool aus den Lernfeld-Aufgaben — nur noch Rückfall. */
  function poolLF(LF) {
    var out = [];
    (LF || w.LF || []).forEach(function (lf) {
      (lf.quiz || []).forEach(function (q) {
        var t = themengebiet(q.s);
        if (!t) return;
        if (CLOSED.indexOf(q.t) === -1) return;
        var item = q;
        if (q.t === 'calc') { item = calcToMC(q); if (!item) return; }
        out.push({ tg: t, lf: lf.code, g: null, set: null, item: item });
      });
    });
    return out;
  }

  /* Prüfungspool: jede Aufgabe trägt ihr Themengebiet (tg) und ihre
     Konzeptgruppe (g) selbst. Offene Rechen- und Datumsaufgaben bleiben
     offen — so stehen sie auch im Prüfungsheft. */
  function poolZP(ZP) {
    var out = [];
    (ZP || w.ZP || []).forEach(function (set) {
      (set.items || []).forEach(function (q, i) {
        var lf = /^LF(\d)/.exec(q.s || '');
        out.push({ tg: q.tg || themengebiet(q.s), lf: lf ? '0' + lf[1] : null,
                   g: q.g || null, set: set.id, pos: i, item: q });
      });
    });
    return out;
  }

  function hasZP(opts) {
    var z = (opts && opts.ZP) || w.ZP;
    return !!(z && z.length) && !(opts && opts.source === 'lf');
  }

  function pool(opts) {
    /* Alte Signatur pool(LF-Array) bleibt gültig. */
    if (Array.isArray(opts)) return poolLF(opts);
    opts = opts || {};
    return hasZP(opts) ? poolZP(opts.ZP) : poolLF(opts.LF);
  }

  function coverage(opts) {
    var p = pool(opts), c = { 1: 0, 2: 0, 3: 0, 4: 0 };
    p.forEach(function (x) { if (c[x.tg] !== undefined) c[x.tg]++; });
    return c;
  }

  /* Die Jahrgänge für die Auswahl „Originalprüfung nachschreiben“. */
  function sets(ZP) {
    return (ZP || w.ZP || []).map(function (s) {
      return { id: s.id, name: s.name, note: s.note, n: s.items.length };
    });
  }

  /* ── Zustand ──────────────────────────────────────────────────────── */

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(d) {
    try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {}
  }
  function history() { return (load().runs || []); }
  function reset() { save({}); clearLive(); }

  /* Laufende Prüfung überlebt ein Neuladen der Seite. */
  var LIVE = 'izure.pruefung.live';
  function saveLive(run) {
    try { localStorage.setItem(LIVE, JSON.stringify(run)); } catch (e) {}
  }
  function loadLive() {
    try {
      var r = JSON.parse(localStorage.getItem(LIVE));
      if (!r || !r.items) return null;
      /* Abgelaufene Prüfungen nicht wiederbeleben */
      if (Date.now() - r.started > r.minutes * 60000 + 5 * 60000) { clearLive(); return null; }
      return r;
    } catch (e) { return null; }
  }
  function clearLive() { try { localStorage.removeItem(LIVE); } catch (e) {} }

  /* ── Zusammenstellung ─────────────────────────────────────────────── */

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* Verteilung auf die Themengebiete — abgeleitet aus den Original-
     prüfungen im Pool (alle Aufgaben mit src „ZP …“), per Hare-Niemeyer
     auf n Plätze gerundet. Bei 300 Originalaufgaben (36/73/101/90) ergibt
     das für 60 Aufgaben 7/15/20/18. Ohne Originale: Gleichverteilung. */
  function weights(ZP) {
    var c = { 1: 0, 2: 0, 3: 0, 4: 0 }, any = 0;
    (ZP || w.ZP || []).forEach(function (s) {
      (s.items || []).forEach(function (q) {
        if (/^ZP /.test(q.src || '') && c[q.tg] !== undefined) { c[q.tg]++; any++; }
      });
    });
    return any ? c : { 1: 1, 2: 1, 3: 1, 4: 1 };
  }

  function quota(n, ZP) {
    var wt = weights(ZP), sum = wt[1] + wt[2] + wt[3] + wt[4], q = {}, rest = [], used = 0;
    [1, 2, 3, 4].forEach(function (t) {
      var exact = n * wt[t] / sum;
      q[t] = Math.floor(exact); used += q[t];
      rest.push({ t: t, r: exact - q[t] });
    });
    rest.sort(function (a, b) { return b.r - a.r || a.t - b.t; });
    for (var i = 0; used < n; i++, used++) q[rest[i % 4].t]++;
    return q;
  }

  /* Rotation: Aufgaben der letzten Prüfung werden gesperrt, die der
     vorletzten nur nachrangig gezogen. Der kleinste Topf (TG 1, rund 44
     Aufgaben) trägt bei 7 Plätzen je Bogen gut fünf Bögen ohne Wiederholung. */
  /* Stabiler Schlüssel je Aufgabe. Lückentexte tragen in q nur einen
     Kurztitel, deshalb gehört der Lückentext selbst mit hinein. */
  function keyOf(item) {
    return (item.t || 'mc') + '|' + (item.q || '') + '|' + (item.txt || '');
  }

  /* Zieht n Aufgaben: erst frische, dann die der vorletzten Runde, zuletzt
     die der letzten. Innerhalb eines Bogens kommt jede Konzeptgruppe (g)
     höchstens einmal vor — sonst stünde dieselbe Wiederholer-Frage aus zwei
     Jahrgängen im selben Bogen. Reicht der Pool dafür nicht, wird die
     Gruppensperre als Letztes gelockert. */
  function draw(cands, n, blocked, stale, groups) {
    var fresh = [], old = [], used = [];
    cands.forEach(function (x) {
      var id = keyOf(x.item);
      if (blocked[id]) { used.push(x); return; }
      (stale[id] ? old : fresh).push(x);
    });
    var take = [];
    function fill(list, strict) {
      for (var i = 0; i < list.length && take.length < n; i++) {
        var x = list[i];
        if (take.indexOf(x) > -1) continue;
        if (strict && x.g && groups[x.g]) continue;
        take.push(x); if (x.g) groups[x.g] = 1;
      }
    }
    fresh = shuffle(fresh); old = shuffle(old); used = shuffle(used);
    fill(fresh, true); fill(old, true); fill(used, true);
    fill(fresh, false); fill(old, false); fill(used, false);
    return take;
  }

  function view(x, i) {
    var v = w.LEARN ? w.LEARN.present(x.item) : x.item;
    v.tg = x.tg; v.lf = x.lf; v.nr = i + 1; v.key = keyOf(x.item);
    v.spent = 0; v.answer = null; v.marked = false;
    return v;
  }

  /* opts: n, minutes, quota, set (Jahrgang, z. B. 'F21'), source ('lf'),
     ZP / LF (Daten für Tests). */
  function build(opts) {
    opts = opts || {};

    /* Originalprüfung nachschreiben: ganzer Satz in Originalreihenfolge,
       ohne Rotation. Zeit: 2 Minuten je Aufgabe wie im Original. */
    if (opts.set) {
      var z = (opts.ZP || w.ZP || []).filter(function (s) { return s.id === opts.set; })[0];
      if (!z) throw new Error('Unbekannter Prüfungssatz: ' + opts.set);
      var ps = poolZP([z]);
      return {
        started: Date.now(), set: z.id, name: z.name,
        minutes: opts.minutes || Math.round(ps.length * MINUTES / COUNT),
        items: ps.map(view)
      };
    }

    var n = opts.n || COUNT;
    var p = pool(opts);
    var runs = history();
    var blocked = {}, stale = {}, groups = {};
    (runs[runs.length - 1] || { ids: [] }).ids.forEach(function (i) { blocked[i] = 1; });
    (runs[runs.length - 2] || { ids: [] }).ids.forEach(function (i) { stale[i] = 1; });

    var q = opts.quota || (hasZP(opts) ? quota(n, opts.ZP)
                                       : quota(n, [{ items: [] }]));
    var sheet = [];
    [1, 2, 3, 4].forEach(function (t) {
      var c = p.filter(function (x) { return x.tg === t; });
      /* Wie im Prüfungsheft: Themengebiet 1 bis 4 nacheinander, innerhalb
         des Gebiets gemischt. */
      draw(c, q[t], blocked, stale, groups).forEach(function (x) { sheet.push(x); });
    });

    return {
      started: Date.now(),
      minutes: opts.minutes || MINUTES,
      items: sheet.map(view)
    };
  }

  /* ── Bewertung ────────────────────────────────────────────────────── */

  /* IHK-Notenschlüssel laut Buchtabelle. */
  var SCALE = [
    { min: 92, note: 1, t: 'sehr gut' },
    { min: 81, note: 2, t: 'gut' },
    { min: 67, note: 3, t: 'befriedigend' },
    { min: 50, note: 4, t: 'ausreichend' },
    { min: 30, note: 5, t: 'mangelhaft' },
    { min: 0,  note: 6, t: 'ungenügend' }
  ];

  function noteFor(punkte) {
    for (var i = 0; i < SCALE.length; i++) if (punkte >= SCALE[i].min) return SCALE[i];
    return SCALE[SCALE.length - 1];
  }

  /* Wie viele richtige Antworten es für ein Notenband braucht. */
  function needed(note, n) {
    var band = SCALE.filter(function (s) { return s.note === note; })[0];
    return Math.ceil(band.min * (n || COUNT) / 100);
  }

  function grade(run) {
    var n = run.items.length, right = 0;
    var perTG = { 1: [0, 0], 2: [0, 0], 3: [0, 0], 4: [0, 0] }, perK = {}, wrong = [];

    /* Was als „keine Antwort“ gilt, entscheidet sich hier und nicht in der
       Oberfläche: ein leeres Feld, eine leere Auswahl und gar keine Eingabe
       sind dasselbe. Sonst hinge die Statistik davon ab, welchen Leerwert
       der jeweilige Aufgabentyp zufällig hinterlässt. */
    var leer = function (a) {
      if (a === null || a === undefined || a === '') return true;
      if (Array.isArray(a)) return !a.length || !a.every(function (x) { return String(x).trim() !== ''; });
      return false;
    };

    run.items.forEach(function (v) {
      var ok = !leer(v.answer) && w.LEARN.grade(v, v.answer).ok;
      if (ok) right++; else wrong.push(v);
      perTG[v.tg][1]++; if (ok) perTG[v.tg][0]++;
      var k = v.k; if (!perK[k]) perK[k] = [0, 0];
      perK[k][1]++; if (ok) perK[k][0]++;
    });

    /* Bewertet wird mit dem exakten Wert. Ob die IHK beim Umrechnen auf die
       100-Punkte-Skala rundet, ist in den Unterlagen nicht belegt — ein
       Trainingswerkzeug soll im Zweifel nicht zugunsten des Prüflings runden.
       55 von 60 sind 91,7 Punkte und damit „gut", nicht „sehr gut". */
    var exakt = right * 100 / n;
    var punkte = Math.floor(exakt * 10) / 10;
    var note = noteFor(exakt);
    var unanswered = run.items.filter(function (v) { return leer(v.answer); }).length;

    /* Schwächste Kategorien — nur solche mit mindestens zwei Aufgaben,
       sonst ist ein einzelner Fehler schon ein 0-Prozent-Thema. */
    var schwach = Object.keys(perK)
      .filter(function (k) { return perK[k][1] >= 2 && perK[k][0] < perK[k][1]; })
      .map(function (k) { return { k: k, r: perK[k][0], n: perK[k][1], p: perK[k][0] / perK[k][1] }; })
      .sort(function (a, b) { return a.p - b.p || b.n - a.n; })
      .slice(0, 5);

    var used = Math.round((Date.now() - run.started) / 1000);

    var res = {
      right: right, total: n, punkte: punkte, note: note,
      unanswered: unanswered, wrong: wrong, perTG: perTG, schwach: schwach,
      seconds: used, perQuestion: Math.round(used / n),
      budget: Math.round(run.minutes * 60 / n),
      zielSehrGut: needed(1, n)
    };

    var db = load();
    db.runs = (db.runs || []).concat([{
      at: Date.now(), punkte: punkte, note: note.note, right: right, total: n,
      seconds: used, set: run.set || null,
      ids: run.items.map(function (v) { return v.key; })
    }]).slice(-12);
    save(db);
    clearLive();

    return res;
  }

  w.PRUEFUNG = {
    TG: TG, SCALE: SCALE, MINUTES: MINUTES, COUNT: COUNT,
    themengebiet: themengebiet,
    pool: pool, coverage: coverage, quota: quota, sets: sets,
    build: build, grade: grade, noteFor: noteFor, needed: needed,
    history: history, reset: reset,
    saveLive: saveLive, loadLive: loadLive, clearLive: clearLive, keyOf: keyOf
  };

})(typeof window !== 'undefined' ? window : this);
