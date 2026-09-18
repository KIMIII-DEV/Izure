# Schema

Die Felder im Frontmatter jeder Notiz. Nur `id` ist Pflicht.

| Feld | Pflicht | Vorgabe | Bedeutung |
| --- | --- | --- | --- |
| `id` | ja | — | Eindeutiger Name im Graphen. Kleinbuchstaben, Bindestriche. Nie nachträglich ändern. |
| `type` | nein | `Notiz` | Art des Knotens, siehe unten. Bestimmt Farbe und Symbol. |
| `provenance` | nein | `FACT` | Woher das Wissen stammt, siehe unten. Bestimmt Darstellung und Gewicht. |
| `confidence` | nein | `1` | 0 bis 1. Wie sicher ist das? Fließt in die Knotengröße ein. |
| `source` | nein | `maurice` | Wer es eingetragen hat: `maurice` oder `punchy`. |
| `created` | nein | — | `YYYY-MM-DD`, in Anführungszeichen. |
| `updated` | nein | = `created` | `YYYY-MM-DD`. Bei jeder Änderung mitziehen. |
| `tags` | nein | `[]` | Liste freier Schlagwörter. |
| `related` | nein | `[]` | Liste aus `id` + `rel`. Erzeugt die Kanten. |

## Typen

Der Typ ist frei wählbar — ein unbekannter Typ bekommt eine neutrale
Farbe und fällt nicht aus dem Graphen. Diese hier sind gestaltet:

`Person` · `Ort` · `Projekt` · `Dokument` · `Notiz` · `Erinnerung` ·
`Unternehmen` · `Idee` · `Interesse` · `Aufgabe` · `Termin` · `Ereignis` ·
`Konzept` · `Fähigkeit` · `Medium` · `Webseite` · `Entscheidung`

## Provenance

Das ist das ehrlichste Feld im Schema, und das wichtigste. Es trennt, was
jemand weiß, von dem, was eine Maschine vermutet.

| Wert | Wofür | Darstellung |
| --- | --- | --- |
| `FACT` | Belegt, nachprüfbar. | Voll, durchgezogener Ring |
| `MEMORY` | Selbst erinnert, nicht belegt. | Voll, warmer Ring |
| `INFERENCE` | Von Punchy abgeleitet. Kein Beleg, nur Schluss. | Gedämpft, gestrichelt |
| `HYPOTHESIS` | Vermutung, noch offen. | Gedämpft, gepunktet |
| `CONFLICT` | Widerspricht einer anderen Notiz. | Voll, roter Ring |

`INFERENCE` und `HYPOTHESIS` erscheinen bewusst blasser. Eine Ableitung
soll im Graphen nicht so aussehen wie eine Tatsache.

## Widersprüche

Zwei Notizen können einander widersprechen — jemand notiert im Februar
einen frühen Schlafrhythmus und im August, dass nachts am besten gelernt
wird. Beides war wahr, zu seiner Zeit.

Der Umgang damit: beide Notizen bleiben, beide bekommen
`provenance: CONFLICT`, und eine verweist mit `rel: widerspricht` auf die
andere. Der Graph zeichnet die Kante rot. Nichts wird überschrieben.

Wer stattdessen die ältere Notiz löscht, verliert die Information, dass
sich etwas geändert hat — und das ist meist das Interessantere.

## Beziehungen

Frei wählbar. In Gebrauch sind:

`gehört zu` · `verwandt mit` · `erstellt von` · `erwähnt` · `basiert auf` ·
`folgt auf` · `widerspricht` · `unterstützt` · `verwendet` ·
`befindet sich in` · `arbeitet mit` · `interessiert sich für` ·
`entstanden aus` · `erinnert an`

Eine Beziehung wird einmal notiert, nicht auf beiden Seiten. Steht sie
doppelt, entsteht trotzdem nur eine Kante.

Zeigt `related` auf eine `id`, die es nicht gibt, meldet der Build das als
Hinweis und lässt die Kante weg. Der Build bricht deswegen nicht ab —
Vorwärtsverweise auf noch ungeschriebene Notizen sind erlaubt.

## activity.json

Das Schreibprotokoll. Jeder Eintrag begründet eine Änderung am Graphen:

```json
{
  "kind": "node",
  "target": "aufgabe-lf03",
  "reason": "Fortschritt in Lernfeld 03 seit acht Tagen unverändert — Aufgabe abgeleitet.",
  "at": "2026-09-05T20:15:00Z"
}
```

`kind` ist `node`, `edge` oder `update`. `external: true` markiert
Änderungen, die von außen kamen (etwa ein Repo-Sync).

Der Punkt des Protokolls: eine Maschine, die still in fremde Notizen
schreibt, ist nicht nachvollziehbar. Wer später liest, soll sehen, warum
ein Knoten da ist.

## graph.json

Erzeugt von `npm run graph`, nicht von Hand ändern. Enthält alle Knoten
mit Text, alle aufgelösten Kanten und die Zählung nach RAW/SORT — gedacht
als eine Datei, die ein Agent am Stück lesen kann.
