/* Kontaktformular.

   Bisher stand an beiden Formularen `onsubmit="return false"` — sie sahen
   benutzbar aus, haben aber nichts getan. Wer sie ausgefüllt und auf
   „Submit“ geklickt hat, bekam keine Rückmeldung und die Nachricht kam nie
   an. Das ist die schlechteste Sorte Fehler: er sieht nach Erfolg aus.

   Hier wird daraus ein vorbereiteter E-Mail-Entwurf. Kein Server, keine
   Datenbank, keine gespeicherten Anfragen — die Nachricht geht direkt aus
   dem Mailprogramm der Besucherin an info@izu-re.com. Sobald ein
   Mailversand-Dienst eingerichtet ist, muss nur `send()` getauscht werden;
   Validierung und Rückmeldung bleiben.

   Validiert wird beim Absenden, nicht bei jedem Tastendruck: eine
   Fehlermeldung, während man noch tippt, ist Bevormundung. */
(function () {
  var TO = 'info@izu-re.com';

  function valid(email) {
    // Bewusst großzügig: gültige Adressen abzulehnen ist schlimmer, als eine
    // ungültige durchzulassen — den Rest merkt das Mailprogramm.
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  }

  function setup(form) {
    var inputs = [].slice.call(form.querySelectorAll('input'));
    var textarea = form.querySelector('textarea');
    var submit = form.querySelector('.submit');
    if (!submit || inputs.length < 2) return;

    var nameEl = inputs[0];
    var mailEl = inputs[1];

    // Pflichtfelder auch technisch als solche kennzeichnen (Screenreader).
    nameEl.setAttribute('required', '');
    mailEl.setAttribute('required', '');
    mailEl.setAttribute('autocomplete', 'email');
    nameEl.setAttribute('autocomplete', 'name');

    var note = document.createElement('p');
    note.className = 'formnote';
    note.setAttribute('role', 'status');
    note.setAttribute('aria-live', 'polite');
    submit.parentNode.insertBefore(note, submit.nextSibling);

    function say(msg, kind) {
      note.textContent = msg;
      note.className = 'formnote' + (kind ? ' ' + kind : '');
    }

    function ready() {
      var ok = nameEl.value.trim() && mailEl.value.trim();
      submit.disabled = !ok;
      submit.classList.toggle('on', !!ok);
    }
    inputs.forEach(function (i) {
      i.addEventListener('input', ready);
    });
    ready();

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!nameEl.value.trim()) {
        say('Please add your name so I know who I’m replying to.', 'bad');
        nameEl.focus();
        return;
      }
      if (!valid(mailEl.value)) {
        say('That email address looks incomplete — I’d have no way to reply.', 'bad');
        mailEl.focus();
        return;
      }

      send(nameEl.value.trim(), mailEl.value.trim(), textarea ? textarea.value.trim() : '');
      say('Opening your email app with the message ready to send.', 'ok');
    });

    function send(name, mail, message) {
      var subject = 'Project enquiry — ' + name;
      var body =
        'Name: ' + name + '\n' + 'Email: ' + mail + '\n\n' + (message || '(no message)') + '\n';
      location.href = 'mailto:' + TO + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    }
  }

  [].slice.call(document.querySelectorAll('form')).forEach(function (f) {
    // Das alte Inline-`return false` würde den Submit abfangen, bevor der
    // Handler greift — und es verträgt sich nicht mit einer strengen CSP.
    f.removeAttribute('onsubmit');
    // Ohne `novalidate` fängt die Browserprüfung bei type="email" den Submit
    // ab, bevor der eigene Handler läuft: die Besucherin sähe dann mal einen
    // Browser-Tooltip, mal die Meldung der Seite. Eine Prüfung, eine Sprache
    // — die Regeln unten sind dieselben, die der Browser anwenden würde.
    f.setAttribute('novalidate', '');
    setup(f);
  });
})();
