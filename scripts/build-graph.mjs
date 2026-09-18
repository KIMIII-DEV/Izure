#!/usr/bin/env node
/**
 * Liest das Vault unter graph/ und erzeugt daraus zwei Dinge:
 *
 *   graph/META/graph.json      — Nodes, Kanten und Ordnerbaum als eine Datei.
 *                                Dafür gedacht, dass Punchy oder Claude den
 *                                Graphen lesen können, ohne 30 Markdown-Dateien
 *                                einzeln zu öffnen.
 *   private/src/graph-data.js  — dieselben Daten als window.MARCO_REPO für die
 *                                Ansicht im Private Layer.
 *
 * Warum ein Build-Schritt und kein Laden zur Laufzeit: die Graph-Ansicht
 * erwartet die Daten synchron beim Start (graph-view.js liest MARCO_REPO in
 * der ersten Zeile). Ein fetch() käme zu spät. Ausserdem liegen die Notizen
 * damit nie einzeln im Netz — der Worker liefert nur das fertige Bundle
 * unterhalb von /private/ aus, und das auch nur mit gültiger Sitzung.
 *
 * Aufruf:  node scripts/build-graph.mjs
 * Läuft automatisch vor jedem `npm run build`.
 */
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'node:fs';
import { join, relative, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const VAULT = join(ROOT, 'graph');
const SCAN = ['RAW', 'SORT']; // META enthält Schema und Ausgabe, keine Notizen

/* ── Frontmatter lesen ─────────────────────────────────────────────
   Bewusst ein kleiner eigener Parser statt einer YAML-Bibliothek: das
   Vault nutzt eine feste, flache Struktur (Skalare, eine Liste von Tags,
   eine Liste von {id, rel}). Eine Abhängigkeit mehr wäre hier teurer als
   diese dreissig Zeilen. Alles, was nicht in dieses Schema passt, meldet
   der Build als Warnung, statt es still zu verschlucken. */
function parseFrontmatter(text, where, warn) {
  if (!text.startsWith('---')) {
    warn(`${where}: kein Frontmatter — Datei wird übersprungen`);
    return null;
  }
  const end = text.indexOf('\n---', 3);
  if (end === -1) {
    warn(`${where}: Frontmatter nicht geschlossen — Datei wird übersprungen`);
    return null;
  }
  const head = text.slice(3, end).trim();
  const body = text.slice(end + 4).trim();

  const fm = {};
  let list = null; // 'tags' | 'related'
  let pending = null; // offenes {id, rel}

  const unquote = (v) => {
    v = v.trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      return v.slice(1, -1).replace(/\\"/g, '"');
    }
    return v;
  };
  const coerce = (v) => {
    const s = unquote(v);
    if (/^-?\d+(\.\d+)?$/.test(s)) return parseFloat(s);
    if (s === 'true') return true;
    if (s === 'false') return false;
    return s;
  };

  for (const raw of head.split('\n')) {
    const line = raw.replace(/\s+$/, '');
    if (!line.trim() || line.trim().startsWith('#')) continue;

    const indented = /^\s+/.test(line);
    const t = line.trim();

    if (!indented) {
      const m = t.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
      if (!m) {
        warn(`${where}: Zeile nicht verstanden — ${t}`);
        continue;
      }
      if (pending) {
        fm.related.push(pending);
        pending = null;
      }
      const [, key, value] = m;
      if (value === '') {
        list = key;
        fm[key] = [];
      } else {
        list = null;
        fm[key] = coerce(value);
      }
      continue;
    }

    // eingerückt: gehört zur laufenden Liste
    if (!list) {
      warn(`${where}: eingerückte Zeile ohne Liste — ${t}`);
      continue;
    }
    if (list === 'tags') {
      if (t.startsWith('- ')) fm.tags.push(coerce(t.slice(2)));
      continue;
    }
    if (list === 'related') {
      const item = t.startsWith('- ') ? t.slice(2) : t;
      const m = item.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
      if (!m) continue;
      if (t.startsWith('- ')) {
        if (pending) fm.related.push(pending);
        pending = {};
      }
      if (!pending) pending = {};
      pending[m[1]] = coerce(m[2]);
    }
  }
  if (pending) fm.related.push(pending);

  return { frontmatter: fm, body };
}

/* ── Vault durchlaufen ─────────────────────────────────────────── */
function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir).sort()) {
    if (name.startsWith('.')) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (name.endsWith('.md') && name !== 'README.md') out.push(full);
  }
  return out;
}

const warnings = [];
const warn = (m) => warnings.push(m);

const files = [];
for (const top of SCAN) {
  for (const full of walk(join(VAULT, top))) {
    const rel = '/' + relative(VAULT, full).split(sep).join('/');
    const parsed = parseFrontmatter(readFileSync(full, 'utf8'), rel, warn);
    if (!parsed) continue;
    const fm = parsed.frontmatter;
    if (!fm.id) {
      warn(`${rel}: kein "id" im Frontmatter — Datei wird übersprungen`);
      continue;
    }
    files.push({
      // Der Pfad, den die Ansicht zeigt, bleibt ohne den Stammordner:
      // /SORT/wissen/lernen.md -> /wissen/lernen.md. Das hält die Ansicht
      // unabhängig davon, ob eine Notiz noch in RAW liegt oder schon
      // einsortiert ist.
      path: rel.replace(/^\/(RAW|SORT)/, ''),
      vaultPath: rel,
      stage: rel.startsWith('/RAW') ? 'RAW' : 'SORT',
      frontmatter: {
        id: fm.id,
        type: fm.type || 'Notiz',
        provenance: fm.provenance || 'FACT',
        confidence: typeof fm.confidence === 'number' ? fm.confidence : 1,
        source: fm.source || 'maurice',
        created: fm.created || '',
        updated: fm.updated || fm.created || '',
        tags: fm.tags || [],
        related: (fm.related || []).filter((r) => r && r.id && r.rel),
      },
      body: parsed.body,
    });
  }
}

/* ── Prüfen, was der Graph nicht auflösen kann ─────────────────── */
const ids = new Set(files.map((f) => f.frontmatter.id));
const dupes = new Set();
const seen = new Set();
for (const f of files) {
  if (seen.has(f.frontmatter.id)) dupes.add(f.frontmatter.id);
  seen.add(f.frontmatter.id);
}
for (const id of dupes) warn(`id "${id}" kommt mehrfach vor — die Kanten werden mehrdeutig`);

let dangling = 0;
for (const f of files) {
  for (const r of f.frontmatter.related) {
    if (!ids.has(r.id)) {
      dangling++;
      warn(`${f.vaultPath}: verweist auf "${r.id}", das es (noch) nicht gibt`);
    }
  }
}

/* ── Kanten ableiten ───────────────────────────────────────────── */
const links = [];
const keys = new Set();
for (const f of files) {
  for (const r of f.frontmatter.related) {
    if (!ids.has(r.id)) continue;
    const a = f.frontmatter.id;
    const key = [a, r.id].sort().join('|') + '|' + r.rel;
    if (keys.has(key)) continue;
    keys.add(key);
    links.push({ source: a, target: r.id, rel: r.rel });
  }
}

/* ── Ausgabe ───────────────────────────────────────────────────── */
const activityPath = join(VAULT, 'META', 'activity.json');
const activity = existsSync(activityPath) ? JSON.parse(readFileSync(activityPath, 'utf8')) : [];

const graph = {
  // Nur das Datum, keine Uhrzeit: mit voller Zeitmarke änderte sich die
  // Datei bei jedem Build, und jeder Commit trüge eine Scheinänderung.
  generated: new Date().toISOString().slice(0, 10),
  counts: {
    notes: files.length,
    links: links.length,
    raw: files.filter((f) => f.stage === 'RAW').length,
    sorted: files.filter((f) => f.stage === 'SORT').length,
  },
  nodes: files.map((f) => ({
    id: f.frontmatter.id,
    type: f.frontmatter.type,
    provenance: f.frontmatter.provenance,
    confidence: f.frontmatter.confidence,
    tags: f.frontmatter.tags,
    path: f.vaultPath,
    stage: f.stage,
    updated: f.frontmatter.updated,
    body: f.body,
  })),
  links,
};

mkdirSync(join(VAULT, 'META'), { recursive: true });
writeFileSync(join(VAULT, 'META', 'graph.json'), JSON.stringify(graph, null, 1) + '\n');

const banner = `/* Erzeugt von scripts/build-graph.mjs — nicht von Hand ändern.
   Quelle sind die Markdown-Dateien unter graph/RAW und graph/SORT.
   Neu bauen mit: npm run graph */\n`;
mkdirSync(join(ROOT, 'private', 'src'), { recursive: true });
writeFileSync(
  join(ROOT, 'private', 'src', 'graph-data.js'),
  banner +
    'window.MARCO_REPO=' +
    JSON.stringify(files.map(({ path, frontmatter, body }) => ({ path, frontmatter, body }))) +
    ';\n' +
    'window.MARCO_ACTIVITY=' +
    JSON.stringify(activity) +
    ';\n'
);

console.log(
  `graph: ${files.length} Notizen (${graph.counts.raw} RAW, ${graph.counts.sorted} SORT), ` +
    `${links.length} Kanten`
);
if (warnings.length) {
  console.log(`\n${warnings.length} Hinweis(e):`);
  for (const w of warnings.slice(0, 20)) console.log('  · ' + w);
  if (warnings.length > 20) console.log(`  … und ${warnings.length - 20} weitere`);
  if (dangling) {
    console.log(
      '\nOffene Verweise sind kein Fehler — eine Notiz darf auf etwas zeigen,\n' +
        'das noch in RAW liegt oder noch geschrieben wird. Sie tauchen nur\n' +
        'nicht als Kante im Graphen auf.'
    );
  }
}
