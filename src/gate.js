/* Zugang zum Privat Layer — TOTP-Login gegen den Worker.

   Hier steht bewusst KEIN Code und kein Geheimnis. Die sechs Ziffern gehen
   an /auth/verify; der Worker prüft sie gegen das TOTP-Secret (Google-
   Authenticator-Stil, rotiert alle 30 s) und setzt bei Erfolg ein
   httpOnly-Session-Cookie, an das JavaScript nicht herankommt. Erst dieses
   Cookie öffnet /private/ — ohne es liefert der Worker den privaten Layer
   gar nicht erst aus. Dieses Skript kann also niemanden hineinlassen, es
   kann nur fragen. */
(function () {
  var gate = document.getElementById('gate');
  if (!gate) return;

  var DEST = gate.getAttribute('data-dest') || '/private/';
  var ins = [].slice.call(gate.querySelectorAll('.gate-code input'));
  var go = gate.querySelector('.gate-go');
  var card = gate.querySelector('.gate-card');
  var sub = card.querySelector('.gate-sub');
  var err = card.querySelector('.gate-err');
  var busy = false;
  var SUB_DEFAULT = sub.textContent;

  function code() {
    return ins
      .map(function (i) {
        return i.value;
      })
      .join('');
  }

  function sync() {
    ins.forEach(function (i) {
      i.classList.toggle('filled', !!i.value);
    });
    go.disabled = busy || code().length < 6;
  }

  function setBusy(state) {
    busy = state;
    go.textContent = state ? 'Checking …' : 'Unlock';
    ins.forEach(function (i) {
      i.disabled = state;
    });
    sync();
  }

  function fail(message) {
    if (message) err.textContent = message;
    gate.classList.remove('bad');
    void card.offsetWidth; // Reflow, damit die Shake-Animation neu startet
    gate.classList.add('bad');
    setTimeout(function () {
      ins.forEach(function (i) {
        i.value = '';
      });
      sync();
      ins[0].focus();
    }, 420);
  }

  function open() {
    gate.hidden = false;
    requestAnimationFrame(function () {
      gate.classList.add('in');
    });
    setTimeout(function () {
      ins[0].focus();
    }, 260);
  }

  function close() {
    gate.classList.remove('in', 'bad', 'ok');
    setTimeout(function () {
      gate.hidden = true;
      ins.forEach(function (i) {
        i.value = '';
      });
      sub.textContent = SUB_DEFAULT;
      sync();
    }, 320);
  }

  function submit() {
    if (busy || code().length < 6) return;
    setBusy(true);
    fetch('/auth/verify', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ code: code() }),
      credentials: 'same-origin',
    })
      .then(function (res) {
        if (res.ok) {
          gate.classList.remove('bad');
          gate.classList.add('ok');
          go.textContent = 'Unlocked';
          setTimeout(function () {
            location.href = DEST;
          }, 480);
          return;
        }
        setBusy(false);
        fail(
          res.status === 401
            ? 'That code is not valid. Use the current code from your authenticator app.'
            : 'Sign-in is unavailable right now. Please try again later.'
        );
      })
      .catch(function () {
        setBusy(false);
        fail('No connection to the server. Check your network and try again.');
      });
  }

  ins.forEach(function (inp, idx) {
    inp.addEventListener('input', function () {
      inp.value = inp.value.replace(/\D/g, '').slice(0, 1);
      sync();
      if (inp.value && idx < 5) ins[idx + 1].focus();
      if (code().length === 6) submit();
    });
    inp.addEventListener('keydown', function (e) {
      if (e.key === 'Backspace' && !inp.value && idx > 0) {
        ins[idx - 1].focus();
        ins[idx - 1].value = '';
        sync();
        e.preventDefault();
      }
      if (e.key === 'ArrowLeft' && idx > 0) {
        ins[idx - 1].focus();
        e.preventDefault();
      }
      if (e.key === 'ArrowRight' && idx < 5) {
        ins[idx + 1].focus();
        e.preventDefault();
      }
      if (e.key === 'Enter') submit();
    });
    inp.addEventListener('paste', function (e) {
      var d = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '').slice(0, 6);
      if (!d) return;
      e.preventDefault();
      d.split('').forEach(function (ch, i) {
        if (ins[i]) ins[i].value = ch;
      });
      sync();
      ins[Math.min(d.length, 5)].focus();
      if (d.length === 6) submit();
    });
  });

  go.addEventListener('click', submit);
  gate.querySelector('.gate-x').addEventListener('click', close);
  gate.querySelector('.gate-back').addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !gate.hidden) close();
  });

  [].slice.call(document.querySelectorAll('.gate-open')).forEach(function (b) {
    b.addEventListener('click', function () {
      // Läuft die Session noch, geht es ohne erneute Code-Eingabe weiter.
      fetch('/auth/check', { credentials: 'same-origin' })
        .then(function (res) {
          if (res.ok) {
            location.href = DEST;
            return;
          }
          open();
        })
        .catch(open);
    });
  });

  // Der Worker schickt abgelaufene /private/-Aufrufe mit ?login=1 hierher zurück.
  if (/[?&]login=1\b/.test(location.search)) {
    sub.textContent = 'Your session expired. Please sign in again.';
    open();
    history.replaceState(null, '', location.pathname);
  }
})();
