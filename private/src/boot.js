/* Start des Private Layers.

   In der Lieferung war der Layer ein Overlay in der öffentlichen Seite und
   `PVROOT` eine globale Variable, die ganz oben im gemeinsamen Skriptblock
   gesetzt wurde. Als eigenes Dokument braucht er dieselbe Variable — die
   nachfolgenden Module (v2-shell, practice, widgets) greifen darauf zu, um
   Farbe, Dichte und Dark Mode am `#pv`-Element zu setzen statt am `<body>`.
   Genau deshalb färbt der Dark Mode des Private Layers den Public Layer
   nicht mit. */
var PVROOT = document.getElementById('pv');
window.PVROOT = PVROOT;

/* Abmelden. Der Worker löscht das Sitzungs-Cookie; danach kommt man ohne
   neuen Code aus der Authenticator-App nicht wieder herein. Ohne diesen
   Weg bliebe die Sitzung zwölf Stunden offen, auch auf fremden Geräten. */
window.MRLOGOUT = function () {
  fetch('/auth/logout', { credentials: 'same-origin' })
    .catch(function () {})
    .then(function () {
      location.href = '/';
    });
};
