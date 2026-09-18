/* Lernfortschritt.

   Die Lieferung trug den Fortschritt als feste Zahl in den Daten
   (`pct:100`, `state:'abgeschlossen'`). Für eine Vorführung reicht das,
   im Betrieb steht der Balken damit für immer still — egal wie viele
   Karten man tatsächlich durchgeht.

   Hier kommt er aus der tatsächlichen Nutzung, und zwar aus zwei Quellen
   mit unterschiedlicher Aussagekraft:

   - Karten: bester Durchlauf je Lernfeld, gespeichert unter dem Schlüssel
     dieser Datei. Wiedererkennen ist ein weicher Nachweis, deshalb zählt
     der beste Versuch.
   - Aufgaben: der Anteil, den window.LEARN als „sitzt“ führt — drei
     richtige Abrufe in drei verschiedenen Runden. Das ist ein Zustand,
     kein Punktestand: wer eine Aufgabe später falsch beantwortet, verliert
     sie wieder. Ein Prozentwert, der nur steigen kann, ist keine Auskunft
     über den Wissensstand.

   Der Aufgabenanteil wird bewusst NICHT hier gespeichert, sondern bei
   jedem Zeichnen frisch aus LEARN gelesen. Eine Kopie davon hätte sich
   nach einem Neuladen von der Wahrheit im Item-Zustand unterscheiden
   können — und dann stünden zwei Zahlen für dieselbe Sache.

   Alles bleibt im localStorage auf dem Gerät und geht an keinen Server.

   Läuft vor v2-shell.js, weil die Dashboard-Karte `pct` beim Zeichnen
   liest. */
(function () {
  'use strict';

  var KEY = 'izure.privat.progress';

  function read() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || '{}');
    } catch (e) {
      return {};
    }
  }
  function write(v) {
    try {
      localStorage.setItem(KEY, JSON.stringify(v));
    } catch (e) {
      /* Privater Modus — dann gilt es nur für diese Sitzung. */
    }
  }

  var prog = read();

  /** Aufgabenanteil direkt aus dem Item-Zustand — die einzige Quelle. */
  function quizShare(lf) {
    if (!window.LEARN || !window.LEARN.stats || !lf || !lf.quiz || !lf.quiz.length) return null;
    var st = window.LEARN.stats(lf.code, lf.quiz);
    if (!st.total) return null;
    return { share: st.mastered / st.total, touched: !!(st.sessions || st.mastered || st.shaky) };
  }

  function pctFor(lf) {
    var p = prog[lf.code] || {};
    var q = quizShare(lf);
    var cards = p.cardsTotal ? p.cardsKnown / p.cardsTotal : null;
    // Karten und Aufgaben zählen gleich viel: Wiedererkennen allein ist noch
    // kein Können, Aufgaben allein decken den Stoff nicht ab. Eine Seite, die
    // noch nie berührt wurde, zieht den Schnitt nicht nach unten — sonst
    // stünde nach einem perfekten Kartendurchlauf 50 %.
    var vals = [];
    if (cards !== null) vals.push(cards);
    if (q && q.touched) vals.push(q.share);
    if (!vals.length) return 0;
    var sum = vals.reduce(function (a, b) { return a + b; }, 0);
    return Math.max(0, Math.min(100, Math.round((sum / vals.length) * 100)));
  }

  function stateFor(lf, pct) {
    if (pct >= 100) return 'abgeschlossen';
    if (pct > 0) return 'in Arbeit';
    var q = quizShare(lf);
    return (prog[lf.code] && prog[lf.code].seen) || (q && q.touched) ? 'begonnen' : 'offen';
  }

  function apply() {
    (window.LF || []).forEach(function (lf) {
      lf.pct = pctFor(lf);
      lf.state = stateFor(lf, lf.pct);
    });
  }

  window.PROGRESS = {
    apply: apply,

    /** Ergebnis eines vollständigen Flashcard-Durchlaufs. */
    cards: function (code, known, total) {
      var p = (prog[code] = prog[code] || {});
      // Der beste Durchlauf zählt. Ein schwacher Tag soll nicht löschen,
      // was vorher schon saß.
      p.cardsKnown = Math.max(p.cardsKnown || 0, known);
      p.cardsTotal = total;
      p.seen = true;
      write(prog);
      apply();
      dispatchEvent(new CustomEvent('izure:progress', { detail: code }));
    },

    /** Nach einer Quiz- oder Klausurrunde neu zeichnen. Gespeichert wird
        hier nichts: den Aufgabenstand führt window.LEARN, und apply() liest
        ihn von dort. Die Parameter bleiben aus Bequemlichkeit stehen, damit
        der Aufruf an der Aufrufstelle lesbar ist. */
    quiz: function (code) {
      var p = (prog[code] = prog[code] || {});
      p.seen = true;
      write(prog);
      apply();
      dispatchEvent(new CustomEvent('izure:progress', { detail: code }));
    },

    reset: function () {
      prog = {};
      write(prog);
      // Der Item-Zustand gehört zum selben Fortschritt. Bliebe er stehen,
      // stünde der Balken auf 0 und die Aufgaben wären trotzdem alle als
      // „sitzt“ geführt — zwei Wahrheiten über dieselbe Sache.
      if (window.LEARN && window.LEARN.reset) window.LEARN.reset();
      apply();
      dispatchEvent(new CustomEvent('izure:progress', { detail: null }));
    },

    /** Neu berechnen und zeichnen. */
    sync: apply,
  };

  apply();
})();
