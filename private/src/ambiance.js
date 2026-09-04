/* Ambiance-Player — läuft weiter, egal wo man im Privat Layer ist.

   Das Problem, das dieser Aufwand löst: ein <iframe> hört auf zu spielen,
   sobald er aus dem DOM genommen, verschoben oder per `display:none`
   ausgeblendet wird. Genau das passiert aber beim Wechsel auf „Lernecke“
   oder in ein Lernfeld — die Views werden umgeschaltet, und mit ihnen
   verschwände die Ambiance-Karte samt Ton.

   Deshalb hängt der iframe NICHT in der Karte, sondern einmalig direkt am
   <body> in einem fixierten Host. Ist das Dashboard sichtbar, wird der Host
   exakt über den Kartenausschnitt gelegt; sonst wandert er unsichtbar aus
   dem Viewport. Er wird nie entfernt, nie umgehängt, nie display:none —
   also läuft er durch, und eine einmal aufgehobene Stummschaltung bleibt
   aufgehoben.

   Start ist stumm, weil Browser Autoplay mit Ton verbieten. Der Ton-Knopf
   im Player hebt das auf; ab da bleibt es so. */
(function () {
  var VIDEO_ID = 'kR-9AIXWIG4';
  var slot = document.getElementById('yt');
  if (!slot) return;

  var host = null;
  var frame = null;
  var muted = true;
  var playing = true;

  function embedSrc() {
    return (
      'https://www.youtube-nocookie.com/embed/' +
      VIDEO_ID +
      '?autoplay=1&mute=1&loop=1&playlist=' +
      VIDEO_ID +
      '&controls=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1' +
      '&enablejsapi=1&origin=' +
      encodeURIComponent(location.origin)
    );
  }

  function post(func) {
    if (!frame || !frame.contentWindow) return;
    frame.contentWindow.postMessage(JSON.stringify({ event: 'command', func: func, args: [] }), '*');
  }

  /* Host über den Kartenausschnitt legen — bzw. aus dem Bild schieben,
     wenn das Dashboard gerade nicht sichtbar ist. */
  function place() {
    if (!host) return;
    var dash = document.getElementById('v-dash');
    var visible = dash && dash.classList.contains('on') && slot.offsetParent !== null;
    if (!visible) {
      host.style.transform = 'translate(-99999px,0)';
      return;
    }
    var r = slot.getBoundingClientRect();
    host.style.transform = 'translate(' + r.left + 'px,' + r.top + 'px)';
    host.style.width = r.width + 'px';
    host.style.height = r.height + 'px';
  }

  var raf = null;
  function schedulePlace() {
    if (raf) return;
    raf = requestAnimationFrame(function () {
      raf = null;
      place();
    });
  }

  function controls() {
    var bar = document.createElement('div');
    bar.className = 'ambctl';
    bar.innerHTML =
      '<button type="button" data-amb="play" aria-label="Pause">' +
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/></svg></button>' +
      '<button type="button" data-amb="mute" aria-label="Ton einschalten">' +
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 8l5 8M21 8l-5 8" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg></button>';
    host.appendChild(bar);

    bar.addEventListener('click', function (e) {
      var b = e.target.closest('[data-amb]');
      if (!b) return;
      if (b.dataset.amb === 'play') {
        playing = !playing;
        post(playing ? 'playVideo' : 'pauseVideo');
        b.setAttribute('aria-label', playing ? 'Pause' : 'Abspielen');
        b.innerHTML = playing
          ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/></svg>'
          : '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
      } else {
        muted = !muted;
        post(muted ? 'mute' : 'unMute');
        b.setAttribute('aria-label', muted ? 'Ton einschalten' : 'Stummschalten');
        b.innerHTML = muted
          ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 8l5 8M21 8l-5 8" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>'
          : '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>';
      }
    });
  }

  function start() {
    if (host) return;
    host = document.createElement('div');
    host.id = 'ambhost';
    // Fixiert und immer im DOM. Position kommt aus place() per transform,
    // damit kein Layout-Thrash beim Scrollen entsteht.
    host.style.cssText = 'position:fixed;left:0;top:0;width:0;height:0;z-index:5;overflow:hidden;border-radius:11px;background:#18181B';
    document.body.appendChild(host);

    frame = document.createElement('iframe');
    frame.title = 'Ambiance-Loop';
    frame.allow = 'autoplay; encrypted-media';
    frame.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    frame.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0';
    frame.src = embedSrc();
    host.appendChild(frame);

    controls();
    slot.classList.add('running');
    place();
  }

  var cover = document.getElementById('ytgo');
  if (cover) {
    cover.addEventListener('click', function () {
      cover.remove();
      start();
    });
  }

  addEventListener('scroll', schedulePlace, { passive: true });
  addEventListener('resize', schedulePlace, { passive: true });
  // Der Router meldet jeden View-Wechsel — danach steht die Karte woanders
  // (oder gar nicht mehr) und der Host muss neu ausgerichtet werden.
  addEventListener('izure:view', schedulePlace);
  // Aufklappende Karten, Einstellungen, Layoutänderungen: einmal pro Sekunde
  // nachziehen ist billig und deckt alles ab, was kein Event feuert.
  setInterval(schedulePlace, 1000);
})();
