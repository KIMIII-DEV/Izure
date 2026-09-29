/* scripts/build-pruefung.mjs

   Fügt die Prüfungssätze aus content/pruefung/ zu private/src/zp-data.js
   zusammen und prüft sie gegen das Schema. Aufruf: npm run lern
   (läuft dort nach build-lernfelder.mjs mit).

   Inhalte werden NIE in der erzeugten Datei geändert — geändert wird in
   content/pruefung/<satz>.js. Jeder Satz ist ein Nachbau einer echten
   Zwischenprüfung (eigener Wortlaut, eigene Zahlen, gleiche Prüfinhalte,
   Aufgabenarten und Reihenfolge) oder der Izuré-Übungssatz.

   Felder je Aufgabe über das Lernfeld-Schema hinaus:
     tg   Themengebiet 1–4 (fest, nicht aus s abgeleitet)
     g    Konzeptgruppe — zwei Aufgaben derselben Gruppe kommen nie in
          denselben Zufallsbogen (Wiederholer aus mehreren Jahrgängen)
     src  Herkunft, z. B. "ZP F21/27" oder "IZ Übung/12"
     x    optionale Ausgangssituation (Tabelle, Gesetzesauszug …)       */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const SRC = path.join(ROOT, 'content', 'pruefung');
const OUT = path.join(ROOT, 'private', 'src', 'zp-data.js');

/* Reihenfolge = Reihenfolge der Jahrgangs-Auswahl in der Oberfläche. */
const SETS = ['f21', 'h22', 'f24', 'h25', 'f26', 'x6'];

const TYPES = ['mc', 'multi', 'tf', 'cloze', 'type', 'calc', 'order', 'match', 'odd'];
const errors = [], warn = [];
const seen = new Map();
const keyOf = (q) => (q.t || 'mc') + '|' + (q.q || '') + '|' + (q.txt || '');

const sets = [];
for (const f of SETS) {
  const file = path.join(SRC, f + '.js');
  if (!fs.existsSync(file)) { errors.push(`${f}.js fehlt`); continue; }
  sets.push((await import(pathToFileURL(file).href)).default);
}

for (const s of sets) {
  const tag = s.id || '?';
  if (!s.id || !s.name) errors.push(`${tag}: id oder name fehlt`);
  if (!Array.isArray(s.items) || !s.items.length) { errors.push(`${tag}: items fehlt`); continue; }
  if (s.id !== 'X6' && s.items.length !== 60) warn.push(`${tag}: ${s.items.length} Aufgaben statt 60`);

  s.items.forEach((q, i) => {
    const where = `${tag} Aufgabe ${i + 1}`;
    const t = q.t;
    if (!TYPES.includes(t)) errors.push(`${where}: unbekannter Typ "${t}"`);
    if (![1, 2, 3, 4].includes(q.tg)) errors.push(`${where}: tg muss 1–4 sein`);
    for (const f of ['g', 'src', 'q', 'e', 'k', 's'])
      if (!q[f]) errors.push(`${where}: ${f} fehlt`);
    if (q.s && !/^LF[1-5]\b/.test(q.s)) errors.push(`${where}: s muss mit LF1–LF5 beginnen`);

    const key = keyOf(q);
    if (seen.has(key)) errors.push(`${where}: Dublette zu ${seen.get(key)}`);
    else seen.set(key, where);

    if (t === 'mc' || t === 'odd') {
      if (!Array.isArray(q.a) || q.a.length < 3) errors.push(`${where}: mindestens 3 Optionen nötig`);
      if (typeof q.c !== 'number' || q.c < 0 || q.c >= (q.a || []).length) errors.push(`${where}: Lösungsindex ungültig`);
      if (new Set(q.a).size !== (q.a || []).length) errors.push(`${where}: doppelte Antwortoption`);
    }
    if (t === 'multi') {
      if (!Array.isArray(q.cs) || q.cs.length < 2) errors.push(`${where}: multi braucht mindestens 2 richtige`);
      if (q.a && q.a.length > 8) errors.push(`${where}: höchstens 8 Optionen (Kennbuchstaben A–H)`);
      (q.cs || []).forEach(n => { if (n >= (q.a || []).length) errors.push(`${where}: cs-Index außerhalb`); });
      if (new Set(q.a).size !== (q.a || []).length) errors.push(`${where}: doppelte Antwortoption`);
    }
    if ((t === 'type' || t === 'calc') && (!Array.isArray(q.ans) || !q.ans.length))
      errors.push(`${where}: ans fehlt`);
    if (t === 'order' && (!Array.isArray(q.items) || q.items.length < 3))
      errors.push(`${where}: order braucht mindestens 3 Elemente`);
    if (t === 'order' && new Set(q.items).size !== (q.items || []).length)
      errors.push(`${where}: order mit doppelten Elementen ist nicht eindeutig bewertbar`);
    if (t === 'match') {
      /* Anders als im Lernfeld sind wiederkehrende Gegenstücke erlaubt —
         die IHK ordnet z. B. fünf Beispiele drei Kategorien zu. Links muss
         aber jede Zeile eindeutig sein. */
      if (!Array.isArray(q.pairs) || q.pairs.length < 3) errors.push(`${where}: match braucht mindestens 3 Paare`);
      const lefts = (q.pairs || []).map(x => x[0]);
      if (new Set(lefts).size !== lefts.length) errors.push(`${where}: linke Spalte nicht eindeutig`);
      if (new Set((q.pairs || []).map(x => x[1])).size < 2) errors.push(`${where}: nur ein Gegenstück`);
    }
  });
}

/* ── Ausgabe ── */
const ZP = sets.map(s => ({ id: s.id, name: s.name, note: s.note || '', items: s.items }));

const header =
`/* Erzeugt von scripts/build-pruefung.mjs — nicht von Hand ändern.
   Quelle: content/pruefung/{${SETS.join(',')}}.js
   Neu bauen mit: npm run lern

   window.ZP = [{ id, name, note, items }]
   Aufgabe: Lernfeld-Schema + tg (Themengebiet), g (Konzeptgruppe),
            src (Herkunft), x (Ausgangssituation, optional) */\n\n`;

fs.writeFileSync(OUT, header + 'window.ZP = ' + JSON.stringify(ZP, null, 1) + ';\n');

/* ── Report ── */
console.log('── Zwischenprüfung ──');
const tot = { 1: 0, 2: 0, 3: 0, 4: 0 }, types = {};
let n = 0;
ZP.forEach(s => {
  const tg = { 1: 0, 2: 0, 3: 0, 4: 0 };
  s.items.forEach(q => { tg[q.tg]++; tot[q.tg]++; types[q.t] = (types[q.t] || 0) + 1; });
  n += s.items.length;
  console.log(`${s.id.padEnd(4)} ${String(s.items.length).padStart(3)} Aufgaben  TG ${[1, 2, 3, 4].map(t => tg[t]).join('/')}  ${s.name}`);
});
console.log(`Summe ${n} Aufgaben  TG ${[1, 2, 3, 4].map(t => tot[t]).join('/')}  Gruppen ${new Set(ZP.flatMap(s => s.items.map(q => q.g))).size}`);
console.log('Typverteilung:', JSON.stringify(types));

if (warn.length) { console.log('\n── Hinweise ──'); warn.forEach(w => console.log('  · ' + w)); }
if (errors.length) {
  console.log('\n── FEHLER ──');
  errors.forEach(e => console.log('  ✗ ' + e));
  process.exit(1);
}
console.log('\n✓ Schema-Prüfung bestanden → ' + path.relative(ROOT, OUT));
