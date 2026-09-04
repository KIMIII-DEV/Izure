/* Cookie-Hinweis, Reichweitenmessung und Bot-Prüfung.

   Reihenfolge und Haltung:

   • Ohne Zustimmung wird KEIN Analyse-Skript geladen. Der Banner blockiert
     nichts Technisches — Login-Cookie und Bot-Prüfung sind notwendig und
     laufen unabhängig davon (§ 25 Abs. 2 TDDDG).
   • „Ablehnen“ ist gleichwertig und genauso schnell erreichbar wie
     „Zustimmen“. Keine Dark Patterns, keine Vorauswahl.
   • Die Entscheidung liegt im localStorage, nicht in einem Cookie — sie
     verlässt das Gerät nie.
   • Die Bot-Prüfung (Cloudflare Turnstile) läuft nur, wenn der Worker sie
     konfiguriert meldet. Fehlt die Konfiguration, bleibt die Seite normal
     benutzbar, statt Besucher auszusperren. */
(function () {
  var KEY = 'izure.consent';
  var store = {
    get: function () {
      try {
        return localStorage.getItem(KEY);
      } catch (e) {
        return null;
      }
    },
    set: function (v) {
      try {
        localStorage.setItem(KEY, v);
      } catch (e) {
        /* Privater Modus o. Ä. — dann eben nur für diese Sitzung. */
      }
    },
  };

  /* ── Reichweitenmessung ───────────────────────────────────────────
     Bewusst als eine Stelle: hier wird das Skript eingehängt, sobald
     (und nur wenn) zugestimmt wurde. Solange kein Anbieter eingetragen
     ist, passiert nichts — der Zustimmungsweg steht aber und muss beim
     Einrichten nicht neu gebaut werden. Empfehlung: ein Anbieter ohne
     personenbezogene Profile (Plausible, Fathom, Cloudflare Web
     Analytics), dann bleibt die Datenschutzerklärung kurz. */
  var ANALYTICS = {
    src: '', // z. B. 'https://plausible.io/js/script.js'
    attrs: {}, // z. B. {'data-domain': 'izu-re.com'}
  };
  var analyticsLoaded = false;

  function loadAnalytics() {
    if (analyticsLoaded || !ANALYTICS.src) return;
    analyticsLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.defer = true;
    s.src = ANALYTICS.src;
    Object.keys(ANALYTICS.attrs).forEach(function (k) {
      s.setAttribute(k, ANALYTICS.attrs[k]);
    });
    document.head.appendChild(s);
  }

  /* ── Banner ─────────────────────────────────────────────────────── */
  function banner() {
    var el = document.createElement('div');
    el.className = 'cc';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Cookie settings');
    el.innerHTML =
      '<p>This site uses only what it needs to work. Optional analytics — anonymous visit counts — ' +
      'run solely with your consent. <a href="/privacy">Privacy policy</a></p>' +
      '<div class="cc-btns">' +
      '<button type="button" class="cc-b ghost" data-cc="deny">Decline</button>' +
      '<button type="button" class="cc-b" data-cc="allow">Accept</button>' +
      '</div>';
    document.body.appendChild(el);
    requestAnimationFrame(function () {
      el.classList.add('in');
    });
    el.addEventListener('click', function (e) {
      var b = e.target.closest('[data-cc]');
      if (!b) return;
      store.set(b.dataset.cc === 'allow' ? 'granted' : 'denied');
      if (b.dataset.cc === 'allow') loadAnalytics();
      el.classList.remove('in');
      setTimeout(function () {
        el.remove();
      }, 320);
    });
  }

  var decision = store.get();
  if (decision === 'granted') loadAnalytics();
  else if (decision !== 'denied') setTimeout(banner, 900);

  // Fußzeilen-Link „Cookie settings“ — Einwilligung jederzeit widerrufbar.
  [].slice.call(document.querySelectorAll('[data-cc-open]')).forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault();
      if (document.querySelector('.cc')) return;
      banner();
    });
  });

  /* ── Bot-Prüfung (Cloudflare Turnstile) ──────────────────────────
     Der Worker sagt, ob sie eingerichtet ist. Ist sie es, wird das
     Widget unsichtbar ausgeführt und der Token einmal gegen /api/human
     eingelöst; danach merkt ein kurzlebiges Cookie das Ergebnis. Läuft
     etwas schief, bleibt die Seite bedienbar — ein Bot-Schutz, der echte
     Besucher aussperrt, wäre der schlechtere Fehler. */
  fetch('/api/config', { credentials: 'same-origin' })
    .then(function (r) {
      return r.ok ? r.json() : null;
    })
    .then(function (cfg) {
      if (!cfg || !cfg.botCheck || !cfg.turnstileSiteKey) return;
      if (document.cookie.indexOf('izure_human=') > -1) return;

      var host = document.createElement('div');
      host.id = 'ts-host';
      host.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.appendChild(host);

      window.__tsReady = function () {
        window.turnstile.render(host, {
          sitekey: cfg.turnstileSiteKey,
          appearance: 'interaction-only',
          callback: function (token) {
            fetch('/api/human', {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify({ token: token }),
              credentials: 'same-origin',
            }).catch(function () {});
          },
        });
      };

      var s = document.createElement('script');
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=__tsReady&render=explicit';
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    })
    .catch(function () {
      /* Kein Worker erreichbar (z. B. `vite dev`) — dann eben ohne. */
    });
})();

/* Sprunglink: unter 1180px ist die Desktop-Hülle ausgeblendet und #main
   damit kein erreichbares Ziel — dort zeigt der Link auf die Mobilseite. */
(function () {
  var link = document.querySelector('[data-skip]');
  if (!link) return;
  function retarget() {
    var desktopVisible = !!document.getElementById('main').offsetParent;
    link.setAttribute('href', desktopVisible ? '#main' : '#mobile');
  }
  retarget();
  addEventListener('resize', retarget, { passive: true });
})();
