/* scripts/build-lernfelder.mjs

   Fügt die fünf Inhaltspakete aus content/lernfelder/ zu private/src/lern-data.js
   zusammen und prüft sie gegen das Schema. Aufruf: npm run lern

   Inhalte werden NIE in der erzeugten Datei geändert — die wird bei jedem
   Build überschrieben. Geändert wird in c1.js bis c5.js (Karten, Aufgaben)
   beziehungsweise themen.js (Themen, Lernfeldnamen). */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const SRC = path.join(ROOT, 'content', 'lernfelder');
const OUT = path.join(ROOT, 'private', 'src', 'lern-data.js');

/* Themen und Lernfeldnamen kommen aus einer eigenen Quelle, nicht aus der
   erzeugten Datei — sonst läge die Wahrheit in dem, was der Build gerade
   überschreibt. */
const load = async (f) => (await import(pathToFileURL(path.join(SRC, f)).href)).default;
const META = await load('themen.js');
const themenOf = (code) => (META[code] || {}).themen || [];

/* Der Rahmenlehrplan-Name hat Vorrang vor dem Arbeitstitel im Inhaltspaket:
   „Informations- und kommunikationstechnische Systeme nutzen“ steht so im
   Zeugnis und im Buch, „Telekommunikation, Datenbanken und Datensicherheit“
   beschreibt zwar denselben Stoff, ist aber nicht die Bezeichnung, nach der
   jemand sucht. */
const nameOf = (code, fallback) => (META[code] || {}).name || fallback || '';

const packs = [];
for (const f of ['c1', 'c2', 'c3', 'c4', 'c5']) packs.push(await load(f + '.js'));


/* ── Validierung ── */
const TYPES = ['mc', 'multi', 'tf', 'cloze', 'type', 'calc', 'order', 'match', 'odd'];
const errors = [], warn = [];
const seen = new Map();

function hash(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return 'i' + (h >>> 0).toString(36);
}

for (const p of packs) {
  const tag = 'LF' + p.code;

  if (!Array.isArray(p.cards)) errors.push(tag + ': cards fehlt');
  if (p.cards.length > 50) errors.push(`${tag}: ${p.cards.length} Karten — Obergrenze ist 50`);
  if (p.cards.length < 45) warn.push(`${tag}: nur ${p.cards.length} Karten`);
  p.cards.forEach((c, i) => {
    if (!c.f || !c.b) errors.push(`${tag} Karte ${i}: f oder b fehlt`);
    if (!c.k) errors.push(`${tag} Karte ${i}: Kategorie fehlt`);
    if (c.b && c.b.length > 320) warn.push(`${tag} Karte ${i}: Rückseite sehr lang (${c.b.length})`);
  });

  if (p.quiz.length < 100) warn.push(`${tag}: nur ${p.quiz.length} Aufgaben`);

  p.quiz.forEach((q, i) => {
    const where = `${tag} Aufgabe ${i}`;
    const t = q.t;
    if (!TYPES.includes(t)) errors.push(`${where}: unbekannter Typ "${t}"`);
    if (!q.k) errors.push(`${where}: Kategorie fehlt`);
    if (!q.e) errors.push(`${where}: Erklärung fehlt`);

    /* Doppelte Fragen über alle Lernfelder hinweg */
    const key = hash((q.q || q.txt || '') + '|' + t);
    if (seen.has(key)) errors.push(`${where}: Dublette zu ${seen.get(key)}`);
    else seen.set(key, where);

    if (t === 'mc' || t === 'odd') {
      if (!Array.isArray(q.a) || q.a.length < 3) errors.push(`${where}: mindestens 3 Optionen nötig`);
      if (typeof q.c !== 'number' || q.c < 0 || q.c >= (q.a || []).length) errors.push(`${where}: Lösungsindex ungültig`);
      if (new Set(q.a).size !== (q.a || []).length) errors.push(`${where}: doppelte Antwortoption`);
    }
    if (t === 'multi') {
      if (!Array.isArray(q.cs) || q.cs.length < 2) errors.push(`${where}: multi braucht mindestens 2 richtige`);
      if (q.cs && q.cs.length === (q.a || []).length) errors.push(`${where}: alle Optionen richtig — keine Aufgabe`);
      (q.cs || []).forEach(n => { if (n >= (q.a || []).length) errors.push(`${where}: cs-Index außerhalb`); });
    }
    if (t === 'tf' && typeof q.v !== 'boolean') errors.push(`${where}: tf braucht v als Boolean`);
    if (t === 'cloze') {
      const n = (q.txt.match(/\{\{\d+\}\}/g) || []).length;
      if (n !== (q.gaps || []).length) errors.push(`${where}: ${n} Platzhalter, aber ${(q.gaps || []).length} Lücken`);
      (q.gaps || []).forEach((g, j) => {
        if (!g.s) errors.push(`${where} Lücke ${j}: Lösung fehlt`);
        if (g.o && g.o.includes(g.s)) errors.push(`${where} Lücke ${j}: Lösung steht auch als Distraktor`);
      });
    }
    if ((t === 'type' || t === 'calc') && (!Array.isArray(q.ans) || !q.ans.length))
      errors.push(`${where}: ans fehlt`);
    if (t === 'order' && (!Array.isArray(q.items) || q.items.length < 3))
      errors.push(`${where}: order braucht mindestens 3 Elemente`);
    if (t === 'match') {
      if (!Array.isArray(q.pairs) || q.pairs.length < 3) errors.push(`${where}: match braucht mindestens 3 Paare`);
      const rights = (q.pairs || []).map(x => x[1]);
      if (new Set(rights).size !== rights.length) errors.push(`${where}: rechte Spalte nicht eindeutig`);
    }
  });
}

/* ── Ausgabe bauen ── */
const LF = packs.map(p => ({
  code: p.code,
  name: nameOf(p.code, p.name),
  themen: themenOf(p.code),
  cards: p.cards,
  quiz: p.quiz
}));

const header =
`/* Erzeugt von scripts/build-lernfelder.mjs — nicht von Hand ändern.
   Quelle: content/lernfelder/c1.js–c5.js (Karten, Aufgaben)
           content/lernfelder/themen.js  (Themen, Lernfeldnamen)
   Neu bauen mit: npm run lern

   window.LF = [{ code, name, themen, cards, quiz }]
   Aufgabentypen: mc · multi · tf · cloze · type · calc · order · match · odd */\n\n`;

fs.writeFileSync(OUT, header + 'window.LF = ' + JSON.stringify(LF, null, 1) + ';\n');

/* ── Report ── */
console.log('── Lernfelder ──');
let tc = 0, tq = 0;
const allTypes = {};
LF.forEach(l => {
  const ty = {};
  l.quiz.forEach(q => { ty[q.t] = (ty[q.t] || 0) + 1; allTypes[q.t] = (allTypes[q.t] || 0) + 1; });
  tc += l.cards.length; tq += l.quiz.length;
  console.log(`LF${l.code}  Karten ${String(l.cards.length).padStart(3)}  Aufgaben ${String(l.quiz.length).padStart(3)}  Themen ${String(l.themen.length).padStart(2)}  ${JSON.stringify(ty)}`);
});
console.log(`Summe  Karten ${tc}  Aufgaben ${tq}`);
console.log('Typverteilung gesamt:', JSON.stringify(allTypes));

if (warn.length) { console.log('\n── Hinweise ──'); warn.forEach(w => console.log('  · ' + w)); }
if (errors.length) {
  console.log('\n── FEHLER ──');
  errors.forEach(e => console.log('  ✗ ' + e));
  process.exit(1);
}
console.log('\n✓ Schema-Prüfung bestanden → ' + path.relative(ROOT, OUT));
