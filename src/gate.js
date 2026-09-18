/* ═══ Gate · Zugang zum Private Layer ═══════════════════════════════

   Die Lieferung verglich hier einen Code im Klartext:

       var CODE=(window.MRCFG&&window.MRCFG.accessCode)||'428173';
       if(code()===CODE){ ... localStorage.setItem('mr-layer-unlocked','1') }

   Das ist kein Schutz. Der Code stand im Quelltext, und der Merker lag im
   localStorage — beides mit den Entwicklerwerkzeugen in Sekunden zu lesen
   und zu setzen. Der Private Layer war damit für jeden offen, der einmal
   hinschaut.

   Jetzt gehen die sechs Ziffern an /auth/verify. Der Worker prüft sie
   gegen ein TOTP-Secret (RFC 6238, rotiert alle 30 Sekunden), das nur als
   verschlüsseltes Worker-Secret existiert. Bei Erfolg setzt er ein
   HMAC-signiertes httpOnly-Cookie, an das JavaScript nicht herankommt —
   und erst dieses Cookie öffnet /private/.

   Dieses Skript kann also niemanden hineinlassen. Es kann nur fragen. */
(function () {
  'use strict';

  var gate = document.getElementById('gate');
  if (!gate) return;

  var ins = [].slice.call(gate.querySelectorAll('.gate-code input')),
    go = gate.querySelector('.gate-go'),
    card = gate.querySelector('.gate-card'),
    sub = gate.querySelector('.gate-sub'),
    err = gate.querySelector('.gate-err'),
    lastFocus = null,
    busy = false;

  var SUB_DEFAULT = sub ? sub.textContent : '';
  var ERR_DEFAULT = err ? err.textContent : '';

  function de() {
    return document.documentElement.lang === 'de';
  }
  function t(deText, enText) {
    return de() ? deText : enText;
  }

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
    go.textContent = state ? t('Prüfe …', 'Checking …') : t('Entsperren', 'Unlock');
    ins.forEach(function (i) {
      i.disabled = state;
    });
    sync();
  }

  function fail(message) {
    if (err) err.textContent = message || ERR_DEFAULT;
    gate.classList.remove('bad');
    void card.offsetWidth; // Reflow, sonst startet die Shake-Animation nicht neu
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
    lastFocus = document.activeElement;
    gate.hidden = false;
    requestAnimationFrame(function () {
      gate.classList.add('in');
    });
    setTimeout(function () {
      ins[0].focus();
    }, 260);
  }

  function close(silent) {
    gate.classList.remove('in', 'bad', 'ok');
    setTimeout(function () {
      gate.hidden = true;
      ins.forEach(function (i) {
        i.value = '';
        i.disabled = false;
      });
      busy = false;
      if (sub) sub.textContent = SUB_DEFAULT;
      if (err) err.textContent = ERR_DEFAULT;
      go.textContent = t('Entsperren', 'Unlock');
      sync();
      if (!silent && lastFocus && lastFocus.focus) lastFocus.focus();
    }, 320);
  }

  function submit() {
    if (busy || code().length < 6) return;
    setBusy(true);
    fetch('/auth/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: code() }),
      credentials: 'same-origin',
    })
      .then(function (res) {
        if (res.ok) {
          gate.classList.remove('bad');
          gate.classList.add('ok');
          go.textContent = t('Entsperrt', 'Unlocked');
          setTimeout(function () {
            if (window.MROPEN) window.MROPEN();
            else location.href = '/private/';
          }, 480);
          return;
        }
        setBusy(false);
        fail(
          res.status === 401
            ? t(
                'Dieser Code stimmt nicht. Bitte den aktuellen Code aus der Authenticator-App verwenden.',
                'That code is not valid. Use the current code from your authenticator app.'
              )
            : t(
                'Anmeldung gerade nicht möglich. Bitte später erneut versuchen.',
                'Sign-in is unavailable right now. Please try again later.'
              )
        );
      })
      .catch(function () {
        setBusy(false);
        fail(
          t(
            'Keine Verbindung zum Server. Bitte Netzwerk prüfen.',
            'No connection to the server. Check your network and try again.'
          )
        );
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
  gate.querySelector('.gate-x').addEventListener('click', function () {
    close();
  });
  gate.querySelector('.gate-back').addEventListener('click', function () {
    close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !gate.hidden) close();
  });

  [].slice.call(document.querySelectorAll('.gate-open')).forEach(function (b) {
    b.addEventListener('click', function () {
      // Läuft die Sitzung noch, geht es ohne erneute Eingabe weiter.
      fetch('/auth/check', { credentials: 'same-origin' })
        .then(function (res) {
          if (res.ok) {
            if (window.MROPEN) window.MROPEN();
            else location.href = '/private/';
            return;
          }
          open();
        })
        .catch(open);
    });
  });

  // Abgelaufene /private/-Aufrufe schickt der Worker mit ?login=1 zurück.
  if (/[?&]login=1\b/.test(location.search)) {
    if (sub) sub.textContent = t('Die Sitzung ist abgelaufen. Bitte neu anmelden.', 'Your session expired. Please sign in again.');
    open();
    history.replaceState(null, '', location.pathname);
  }
})();
