# Wissensgraph

Ein Ordner voller Markdown-Dateien. Mehr ist es nicht — und das ist der
Punkt: es gibt keine Datenbank, kein Exportformat, keinen Anbieter. Jede
Notiz ist eine Textdatei, die sich in Obsidian, im Editor, auf GitHub oder
von einem Agenten lesen und schreiben lässt.

```
graph/
├── RAW/     Alles rein. Unsortiert, unvollständig, egal.
├── SORT/    Einsortiert. Unterordner frei wählbar.
└── META/    Schema und der erzeugte Index.
```

## Die drei Ordner

**RAW** ist der Eingang. Hier landet, was einem einfällt, ohne dass man
vorher über Ablage nachdenken muss — genau dafür ist er da. Eine Notiz in
RAW ist gleichwertig: sie taucht im Graphen auf, ist durchsuchbar und darf
Verweise haben. Sie ist nur noch nicht eingeordnet.

**SORT** ist das gepflegte Wissen. Die Unterordner sind frei: `wissen/`,
`projekte/`, `menschen/` sind ein Anfang, keine Vorgabe. Wer eine neue
Ebene braucht, legt sie an — der Build findet jede `.md` in jeder Tiefe.

**META** enthält das Schema (`schema.md`), das Schreibprotokoll
(`activity.json`) und den erzeugten Index (`graph.json`). Hier stehen keine
Notizen.

Der Weg ist RAW → SORT. Eine Datei verschieben heisst: `git mv`. Der Pfad
in der Ansicht ändert sich dabei nicht, weil er ohne den Stammordner
gebildet wird — `RAW/idee.md` und `SORT/ideen/idee.md` erscheinen beide als
`/idee.md` bzw. `/ideen/idee.md`. Verweise brechen also nicht, wenn etwas
einsortiert wird.

## Eine Notiz

```markdown
---
id: spaced-repetition
type: Fähigkeit
provenance: FACT
confidence: 0.88
source: maurice
created: "2025-12-03"
updated: "2026-08-19"
tags:
  - methodik
  - karten
related:
  - id: lernplattform
    rel: verwendet
---

Wiederholung in wachsenden Abständen. In der Lernplattform als
Kartenstapel pro Lernfeld umgesetzt.
```

Pflicht ist nur `id`. Alles andere hat Vorgaben (`type: Notiz`,
`provenance: FACT`, `confidence: 1`). Eine Datei ohne Frontmatter wird
übersprungen und beim Bauen gemeldet — sie verschwindet nicht still.

`id` ist der Name im Graphen und muss eindeutig sein. Die Felder erklärt
[META/schema.md](META/schema.md).

## Verweise

`related` erzeugt die Kanten. Ein Verweis auf etwas, das es noch nicht
gibt, ist erlaubt: der Build meldet ihn als Hinweis und lässt die Kante
weg. So kann man auf eine Notiz zeigen, die noch geschrieben wird, ohne
dass der Build bricht.

Kanten sind ungerichtet entgegengenommen, aber einmal gezählt: steht die
Beziehung auf beiden Seiten, entsteht trotzdem nur eine Kante.

## Bauen

```bash
npm run graph
```

Das liest `RAW/` und `SORT/` und schreibt:

- `META/graph.json` — der ganze Graph in einer Datei, für Punchy, Claude
  oder jedes andere Werkzeug, das nicht 30 Dateien einzeln öffnen will.
- `../private/src/graph-data.js` — dieselben Daten für die Ansicht im
  Private Layer.

Läuft automatisch bei `npm run build`. Beide Ausgaben sind erzeugt und
gehören nicht von Hand bearbeitet.

## Wer hier schreiben darf

Claude und Punchy lesen und schreiben diese Dateien direkt — das ist der
Zweck der Ablage. Für maschinelle Änderungen gilt:

- Eine Notiz pro Datei, `id` nie nachträglich ändern (sonst brechen alle
  Verweise darauf).
- `updated` mitpflegen.
- `provenance` ehrlich setzen: `INFERENCE` für Abgeleitetes, `HYPOTHESIS`
  für Unbestätigtes. Nicht alles ist `FACT`.
- Widersprüche als `CONFLICT` markieren und **beide** Notizen stehen
  lassen, statt eine zu überschreiben. Der Graph zeigt den Widerspruch —
  das ist eine Information, kein Fehler.
- Jede Schreibaktion in `META/activity.json` begründen.

## Achtung: dieses Repo ist öffentlich

`KIMIII-DEV/Izure` steht auf **public**. Alles in diesem Ordner ist damit
auf github.com für jeden lesbar — auch wenn die Website den Graphen nur
nach Login zeigt.

Die Website ist dicht: der Worker liefert `/private/` und damit auch die
Graph-Daten nur mit gültiger Sitzung aus. Das schützt aber nur den Weg über
die Website, nicht den über GitHub.

Wer hier persönliche Notizen ablegen will, hat drei Wege:

1. Repo auf **private** stellen (Settings → General → Danger Zone). Der
   Cloudflare-Deploy funktioniert damit weiter.
2. Das Vault in ein eigenes privates Repo legen und beim Bauen
   hereinziehen (Submodule oder Checkout-Schritt).
3. Nur Unverfängliches hier ablegen.

Bis dahin gilt: was in `graph/` liegt, ist öffentlich.
