/* Lernfortschritt.

   Die Lieferung trug den Fortschritt als feste Zahl in den Daten
   (`pct:100`, `state:'abgeschlossen'`). Für eine Vorführung reicht das,
   im Betrieb steht der Balken damit für immer still — egal wie viele
   Karten man tatsächlich durchgeht.

   Hier kommt er aus der tatsächlichen Nutzung: gewusste Karten und richtig
   beantwortete Fragen, pro Lernfeld im localStorage. Das bleibt auf dem
   Gerät und geht an keinen Server.

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

  function pctFor(code) {
    var p = prog[code];
    if (!p) return 0;
    var cards = p.cardsTotal ? p.cardsKnown / p.cardsTotal : 0;
    var quiz = p.quizTotal ? p.quizRight / p.quizTotal : 0;
    // Karten und Quiz zählen gleich viel: Wiedererkennen allein ist noch
    // kein Können, Quiz allein deckt den Stoff nicht ab.
    var parts = (p.cardsTotal ? 1 : 0) + (p.quizTotal ? 1 : 0);
    if (!parts) return 0;
    return Math.max(0, Math.min(100, Math.round(((cards + quiz) / parts) * 100)));
  }

  function stateFor(code) {
    var pct = pctFor(code);
    if (pct >= 100) return 'abgeschlossen';
    if (pct > 0) return 'in Arbeit';
    return prog[code] && prog[code].seen ? 'begonnen' : 'offen';
  }

  function apply() {
    (window.LF || []).forEach(function (lf) {
      lf.pct = pctFor(lf.code);
      lf.state = stateFor(lf.code);
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

    /** Ergebnis einer Quiz- oder Klausurrunde. */
    quiz: function (code, right, total) {
      var p = (prog[code] = prog[code] || {});
      p.quizRight = Math.max(p.quizRight || 0, right);
      p.quizTotal = total;
      p.seen = true;
      write(prog);
      apply();
      dispatchEvent(new CustomEvent('izure:progress', { detail: code }));
    },

    reset: function () {
      prog = {};
      write(prog);
      apply();
      dispatchEvent(new CustomEvent('izure:progress', { detail: null }));
    },
  };

  apply();
})();
