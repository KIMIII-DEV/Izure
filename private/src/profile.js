/* Name und Lernfortschritt — beides lokal, beides ohne Server.

   Beim ersten Betreten fragt der Layer einmal nach dem Namen; danach steht
   er in der Begrüßung und lässt sich in den Einstellungen ändern. Der Name
   wird ausschließlich im localStorage abgelegt und nie übertragen — er ist
   Beschriftung, keine Identität. Die Anmeldung passiert vorher über den
   TOTP-Login im Worker.

   Der Fortschritt pro Lernfeld kommt aus der tatsächlichen Nutzung
   (gewusste Karten, richtig beantwortete Quizfragen) statt aus einer fest
   eingetragenen Zahl. window.PROGRESS ist die gemeinsame Schnittstelle:
   lernfeld.js meldet Ergebnisse, shell.js zeichnet damit die Balken. */
(function () {
  var NAME_KEY = 'izure.privat.name';
  var PROG_KEY = 'izure.privat.progress';

  function read(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* Privater Modus: dann gilt es eben nur für diese Sitzung. */
    }
  }

  /* ── Name ───────────────────────────────────────────────────────── */
  var name = read(NAME_KEY, '');

  function firstName(full) {
    return String(full || '').trim().split(/\s+/)[0] || '';
  }

  function paintName() {
    var h = document.querySelector('#v-dash .hi h1');
    if (h) h.textContent = name ? 'Willkommen zurück, ' + firstName(name) + '.' : 'Willkommen zurück.';
    var field = document.getElementById('setname');
    if (field && field.value !== name) field.value = name;
  }

  window.PROFILE = {
    get name() {
      return name;
    },
    set: function (value) {
      name = String(value || '').trim().slice(0, 60);
      write(NAME_KEY, name);
      paintName();
    },
  };

  /* Erstbesuch: einmal fragen. Bewusst ein eigener Dialog statt prompt() —
     prompt() blockiert den Renderer und sieht auf dem Handy kaputt aus. */
  function askName() {
    var wrap = document.createElement('div');
    wrap.className = 'namegate';
    wrap.innerHTML =
      '<div class="namecard" role="dialog" aria-modal="true" aria-labelledby="ng-t">' +
      '<h2 id="ng-t">Willkommen im Privat Layer.</h2>' +
      '<p>Wie sollen wir dich nennen? Der Name steht nur in der Begrüßung und bleibt auf diesem Gerät.</p>' +
      '<form><label class="sr" for="ng-i">Dein Name</label>' +
      '<input id="ng-i" type="text" autocomplete="given-name" maxlength="60" placeholder="Vorname" required>' +
      '<button class="btn" type="submit">Weiter</button></form>' +
      '<button type="button" class="ng-skip">Später festlegen</button>' +
      '</div>';
    document.body.appendChild(wrap);
    requestAnimationFrame(function () {
      wrap.classList.add('in');
    });
    var input = wrap.querySelector('#ng-i');
    setTimeout(function () {
      input.focus();
    }, 260);

    function done(value) {
      if (value) window.PROFILE.set(value);
      else write(NAME_KEY, '');
      wrap.classList.remove('in');
      setTimeout(function () {
        wrap.remove();
      }, 320);
    }
    wrap.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      done(input.value);
    });
    wrap.querySelector('.ng-skip').addEventListener('click', function () {
      done('');
    });
  }

  /* ── Fortschritt ────────────────────────────────────────────────── */
  var prog = read(PROG_KEY, {});

  function pctFor(code) {
    var p = prog[code];
    if (!p) return 0;
    var cards = p.cardsTotal ? p.cardsKnown / p.cardsTotal : 0;
    var quiz = p.quizTotal ? p.quizRight / p.quizTotal : 0;
    // Karten und Quiz zählen gleich viel: Wiedererkennen allein ist noch
    // kein Können, Quiz allein deckt den Stoff nicht ab.
    var both = (p.cardsTotal ? 1 : 0) + (p.quizTotal ? 1 : 0);
    if (!both) return 0;
    return Math.max(0, Math.min(100, Math.round(((cards + quiz) / both) * 100)));
  }

  function stateFor(code) {
    var pct = pctFor(code);
    if (pct >= 100) return 'abgeschlossen';
    if (pct > 0) return prog[code] && prog[code].seen ? 'in Arbeit' : 'begonnen';
    return 'offen';
  }

  window.PROGRESS = {
    /** Aktuellen Stand in window.LF spiegeln, damit alle Ansichten ihn sehen. */
    apply: function () {
      (window.LF || []).forEach(function (lf) {
        lf.pct = pctFor(lf.code);
        lf.state = stateFor(lf.code);
      });
    },
    /** Ergebnis eines Flashcard-Durchlaufs. */
    cards: function (code, known, total) {
      var p = (prog[code] = prog[code] || {});
      p.cardsKnown = Math.max(p.cardsKnown || 0, known);
      p.cardsTotal = total;
      p.seen = true;
      write(PROG_KEY, prog);
      this.apply();
      dispatchEvent(new CustomEvent('izure:progress', { detail: code }));
    },
    /** Ergebnis einer Quiz- oder Klausurrunde. */
    quiz: function (code, right, total) {
      var p = (prog[code] = prog[code] || {});
      p.quizRight = Math.max(p.quizRight || 0, right);
      p.quizTotal = total;
      p.seen = true;
      write(PROG_KEY, prog);
      this.apply();
      dispatchEvent(new CustomEvent('izure:progress', { detail: code }));
    },
    reset: function () {
      prog = {};
      write(PROG_KEY, prog);
      this.apply();
      dispatchEvent(new CustomEvent('izure:progress', { detail: null }));
    },
  };

  window.PROGRESS.apply();

  document.addEventListener('DOMContentLoaded', function () {
    paintName();
    // Nie gefragt (Schlüssel fehlt ganz) → einmal fragen. Wer „später“
    // gewählt hat, hat einen leeren String und wird nicht erneut behelligt.
    var asked = false;
    try {
      asked = localStorage.getItem(NAME_KEY) !== null;
    } catch (e) {
      asked = true;
    }
    if (!asked) setTimeout(askName, 700);
  });

  window.ASK_NAME = askName;
})();
