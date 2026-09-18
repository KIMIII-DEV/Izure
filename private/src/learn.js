/* ── private/learn.js ── */
/* Lernmechanik. Reine Logik, kein DOM — lädt vor practice.js.

   Warum es diese Datei gibt
   -------------------------
   Der alte Quiz-Tab hat pro Lernfeld immer denselben Fragenblock in derselben
   Reihenfolge gezeigt. Nach drei Durchläufen merkt man sich die Position der
   richtigen Antwort statt der Sache. Dagegen drei Mechaniken:

   1. Pool-Rotation   — 125 Items pro Lernfeld, 25 pro Sitzung.
   2. Durchmischung   — Itemauswahl gewichtet, Reihenfolge interleaved,
                        Antwortoptionen bei jedem Aufruf neu gemischt.
   3. Item-Zustand    — Leitner-Boxen + Successive Relearning: ein Item gilt
                        erst nach 3 korrekten Abrufen in DREI VERSCHIEDENEN
                        Sitzungen als gelernt (Rawson/Dunlosky).

   Zusätzlich: falsch beantwortete Items mit hoher Selbsteinschätzung werden
   bevorzugt wiedergeholt (Hypercorrection-Effekt). */

window.LEARN = (function () {
  'use strict';

  var KEY = 'izure.learn.v3';
  var DAY = 86400000;

  /* Leitner-Intervalle in Tagen, Index = Box */
  var BOX_DAYS = [0, 1, 3, 7, 21, 60];
  var MASTER_HITS = 3;      // korrekte Abrufe in getrennten Sitzungen
  var SESSION_SIZE = 25;    // gezogene Items pro Runde

  /* ─────────── Persistenz ─────────── */

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch (e) { return {}; }
  }
  function save(db) {
    try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) {}
  }
  function bucket(db, lf) {
    if (!db[lf]) db[lf] = { items: {}, sess: 0, log: [] };
    return db[lf];
  }

  /* Stabile ID aus dem Fragetext — überlebt Umsortieren der Inhaltsdatei,
     ändert sich aber, wenn die Frage inhaltlich umformuliert wird. Das ist
     gewollt: eine umformulierte Frage ist ein neues Item. */
  function idOf(item) {
    var src = (item.q || item.txt || '') + '|' + (item.t || 'mc');
    var h = 5381, i;
    for (i = 0; i < src.length; i++) h = ((h << 5) + h + src.charCodeAt(i)) | 0;
    return 'i' + (h >>> 0).toString(36);
  }

  /* ─────────── Zufall ─────────── */

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i];
      a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ─────────── Auswahlgewichte ───────────
     Höheres Gewicht = höhere Ziehwahrscheinlichkeit. */

  function weight(st, now) {
    if (!st) return 100;                                  // nie gesehen
    if (st.wrong) return st.conf >= 2 ? 220 : 150;        // Hypercorrection
    if (st.hits >= MASTER_HITS && st.due > now) return 4; // sitzt, nicht fällig
    if (st.due <= now) {
      var over = Math.floor((now - st.due) / DAY);
      return 80 + Math.min(over * 6, 60);                 // überfällig
    }
    return 18;                                            // im Intervall
  }

  /* Gewichtete Ziehung ohne Zurücklegen */
  function drawWeighted(cands, n) {
    var pool = cands.slice(), out = [];
    while (out.length < n && pool.length) {
      var sum = 0, i;
      for (i = 0; i < pool.length; i++) sum += pool[i].w;
      var r = Math.random() * sum, acc = 0, pick = pool.length - 1;
      for (i = 0; i < pool.length; i++) {
        acc += pool[i].w;
        if (r <= acc) { pick = i; break; }
      }
      out.push(pool[pick].item);
      pool.splice(pick, 1);
    }
    return out;
  }

  /* ─────────── Interleaving ───────────
     Brunmair & Richter 2019: Verschachteln wirkt vor allem bei verwechselbaren
     Kategorien. Wir vermeiden gleiche Kategorie UND gleichen Aufgabentyp
     direkt hintereinander, soweit der Bestand das hergibt. */

  function interleave(list) {
    var out = [], rest = list.slice(), guard = 0;
    while (rest.length) {
      var prev = out[out.length - 1], idx = 0, i;
      if (prev) {
        for (i = 0; i < rest.length; i++) {
          if (rest[i].k !== prev.k && rest[i].t !== prev.t) { idx = i; break; }
          if (rest[i].k !== prev.k) { idx = i; }
        }
      }
      out.push(rest[idx]);
      rest.splice(idx, 1);
      if (++guard > 2000) break;
    }
    return out;
  }

  /* ─────────── Item für die Anzeige aufbereiten ───────────
     Optionen werden bei JEDEM Aufruf neu gemischt, der Lösungsindex
     mitgeführt. Positionsgedächtnis läuft damit ins Leere. */

  function present(item) {
    var v = { id: idOf(item), t: item.t || 'mc', k: item.k, d: item.d,
              s: item.s, e: item.e, q: item.q };

    if (v.t === 'mc' || v.t === 'odd') {
      var pairs = item.a.map(function (txt, n) { return { txt: txt, ok: n === item.c }; });
      shuffle(pairs);
      v.a = pairs.map(function (p) { return p.txt; });
      v.c = pairs.findIndex(function (p) { return p.ok; });

    } else if (v.t === 'multi') {
      var mp = item.a.map(function (txt, n) { return { txt: txt, ok: item.cs.indexOf(n) > -1 }; });
      shuffle(mp);
      v.a = mp.map(function (p) { return p.txt; });
      v.cs = [];
      mp.forEach(function (p, n) { if (p.ok) v.cs.push(n); });

    } else if (v.t === 'tf') {
      v.v = item.v;

    } else if (v.t === 'cloze') {
      v.txt = item.txt;
      v.gaps = item.gaps.map(function (g) {
        var opts = [g.s].concat(g.o || []);
        shuffle(opts);
        return { s: g.s, o: opts, free: !g.o || !g.o.length };
      });

    } else if (v.t === 'type' || v.t === 'calc') {
      v.ans = item.ans;
      v.unit = item.unit || '';
      v.hint = item.hint || '';

    } else if (v.t === 'order') {
      v.items = item.items.slice();
      v.mix = shuffle(item.items.slice());
      if (v.mix.join('|') === v.items.join('|') && v.mix.length > 2) {
        v.mix.push(v.mix.shift());
      }

    } else if (v.t === 'match') {
      v.left = item.pairs.map(function (p) { return p[0]; });
      v.right = shuffle(item.pairs.map(function (p) { return p[1]; }));
      v.sol = item.pairs.map(function (p) { return p[1]; });
    }
    return v;
  }

  /* ─────────── Session bauen ─────────── */

  /* Ein Item hat Vorrang, wenn es zuletzt falsch war oder fällig ist und
     noch nicht sitzt. Solche Items bekommen reservierte Plätze — nicht nur
     ein höheres Gewicht. Sonst geht ein einzelner Fehler im Rauschen eines
     großen Pools unter und käme rein zufällig zurück. */
  function isPriority(st, now) {
    if (!st) return false;
    if (st.wrong) return true;
    return st.due <= now && st.hits < MASTER_HITS;
  }

  var PRIO_SHARE = 0.4;   // höchstens 40 % einer Runde sind Wiederholungen

  function buildSession(lf, pool, n) {
    n = n || SESSION_SIZE;
    n = Math.min(n, pool.length);

    var db = load(), b = bucket(db, lf), now = Date.now();
    var prio = [], rest = [];

    pool.forEach(function (item) {
      var st = b.items[idOf(item)];
      var entry = { item: item, w: weight(st, now) };
      (isPriority(st, now) ? prio : rest).push(entry);
    });

    /* Fehler zuerst, dann überfällig — innerhalb der Gruppe gewichtet gezogen */
    var slots = Math.min(prio.length, Math.max(1, Math.ceil(n * PRIO_SHARE)));
    var picked = prio.length ? drawWeighted(prio, slots) : [];

    /* Rest auffüllen; reicht der Restpool nicht, weitere Vorrang-Items nehmen */
    picked = picked.concat(drawWeighted(rest, n - picked.length));
    if (picked.length < n && prio.length > slots) {
      var used = picked;
      picked = picked.concat(drawWeighted(
        prio.filter(function (p) { return used.indexOf(p.item) === -1; }),
        n - picked.length));
    }

    return interleave(picked).map(present);
  }

  /* ─────────── Antwort bewerten ───────────
     Gibt {ok, detail} zurück. Die Bewertung lebt hier und nicht im Renderer,
     damit sie testbar bleibt. */

  function norm(s) {
    return String(s).toLowerCase().trim()
      .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
      .replace(/[.,;:!?"'`´]/g, '')
      .replace(/\s+/g, ' ');
  }

  function grade(view, answer) {
    var t = view.t, i;

    if (t === 'mc' || t === 'odd') return { ok: answer === view.c };

    if (t === 'tf') return { ok: answer === view.v };

    if (t === 'multi') {
      var got = (answer || []).slice().sort().join(','),
          exp = view.cs.slice().sort().join(',');
      return { ok: got === exp };
    }

    if (t === 'cloze') {
      var per = view.gaps.map(function (g, n) {
        return norm((answer || [])[n] || '') === norm(g.s);
      });
      return { ok: per.every(Boolean), detail: per };
    }

    if (t === 'type' || t === 'calc') {
      var a = norm(answer);
      var hit = view.ans.some(function (acc) {
        var na = norm(acc);
        if (na === a) return true;
        /* Zahlen tolerant: 6,7 == 6.7 == 6.70 */
        var x = parseFloat(String(acc).replace(',', '.')),
            y = parseFloat(String(answer).replace(',', '.'));
        return !isNaN(x) && !isNaN(y) && Math.abs(x - y) < 0.051;
      });
      return { ok: hit };
    }

    if (t === 'order') {
      var same = (answer || []).join('|') === view.items.join('|');
      return { ok: same };
    }

    if (t === 'match') {
      var perM = view.sol.map(function (r, n) { return (answer || [])[n] === r; });
      return { ok: perM.every(Boolean), detail: perM };
    }

    return { ok: false };
  }

  /* ─────────── Ergebnis verbuchen ───────────
     conf: 0 = geraten, 1 = unsicher, 2 = sicher. Optional; wird für die
     Kalibrierung und den Hypercorrection-Bonus ausgewertet. */

  function record(lf, view, ok, conf) {
    var db = load(), b = bucket(db, lf), now = Date.now();
    var st = b.items[view.id] || { box: 0, hits: 0, seen: 0, due: 0, wrong: false, conf: 1, lastSess: -1 };

    st.seen++;
    st.conf = typeof conf === 'number' ? conf : 1;

    if (ok) {
      /* Successive Relearning: nur ein Treffer je Sitzung zählt auf hits */
      if (st.lastSess !== b.sess) st.hits++;
      st.box = Math.min(st.box + 1, BOX_DAYS.length - 1);
      st.wrong = false;
    } else {
      st.hits = 0;
      st.box = 0;
      st.wrong = true;
    }
    st.lastSess = b.sess;
    st.due = now + BOX_DAYS[st.box] * DAY;
    b.items[view.id] = st;

    /* Kalibrierung: sicher + falsch ist das teuerste Muster */
    if (!ok && st.conf >= 2) b.log.push({ id: view.id, at: now, k: view.k });
    if (b.log.length > 200) b.log = b.log.slice(-200);

    save(db);
    return st;
  }

  function endSession(lf) {
    var db = load(), b = bucket(db, lf);
    b.sess++;
    save(db);
    return b.sess;
  }

  /* ─────────── Kennzahlen ─────────── */

  function stats(lf, pool) {
    var db = load(), b = bucket(db, lf), now = Date.now();
    var mastered = 0, due = 0, fresh = 0, shaky = 0;
    pool.forEach(function (item) {
      var st = b.items[idOf(item)];
      if (!st) { fresh++; return; }
      if (st.wrong) shaky++;
      if (st.hits >= MASTER_HITS) mastered++;
      if (st.due <= now) due++;
    });
    return {
      total: pool.length, mastered: mastered, due: due, fresh: fresh,
      shaky: shaky, sessions: b.sess,
      pct: pool.length ? Math.round(mastered / pool.length * 100) : 0,
      /* Überschätzung: Anteil der „sicher" beantworteten Fehler */
      overconfident: b.log.length
    };
  }

  function reset(lf) {
    var db = load();
    if (lf) delete db[lf]; else db = {};
    save(db);
  }

  return {
    SESSION_SIZE: SESSION_SIZE,
    MASTER_HITS: MASTER_HITS,
    buildSession: buildSession,
    present: present,
    grade: grade,
    record: record,
    endSession: endSession,
    stats: stats,
    reset: reset,
    idOf: idOf,
    _shuffle: shuffle,
    _interleave: interleave
  };
})();
