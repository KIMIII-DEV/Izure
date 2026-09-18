# Lernfelder — Inhalt bearbeiten

Hier liegen Karten und Aufgaben der Lernecke. Die Datei, die der Private
Layer lädt (`private/src/lern-data.js`), wird daraus **erzeugt** und bei
jedem Build überschrieben — Änderungen darin sind beim nächsten
`npm run build` weg.

```
c1.js … c5.js   Karten und Aufgaben je Lernfeld
themen.js       Themen des Lernen-Tabs + amtliche Lernfeldnamen
```

Nach jeder Änderung:

```bash
npm run lern          # baut neu und prüft das Schema
npm run test:learn    # prüft die Mechanik gegen den Inhalt
```

`npm run lern` bricht mit Exit 1 ab, wenn etwas nicht stimmt. Geprüft wird
unter anderem: Lösungsindex im gültigen Bereich, doppelte Antwortoptionen,
Mehrfachauswahl mit ausschließlich richtigen Optionen, Zuordnungen mit
mehrdeutiger rechter Spalte, Lückenzahl gegen Platzhalterzahl, Distraktor
identisch mit der Lösung, mehr als 50 Karten je Feld, Dubletten über alle
Lernfelder hinweg.

## Aufbau einer Karte

```js
{ f:"Vorderseite — die Frage",
  b:"Rückseite — die Antwort",
  k:"Kategorie" }
```

## Aufbau einer Aufgabe

Gemeinsame Felder: `t` (Typ), `q` (Frage), `e` (Erklärung, Pflicht),
`k` (Kategorie, Pflicht), `d` (`easy` | `medium` | `hard`), `s` (Fundstelle).

| Typ | Zusätzlich | Bedeutung |
|---|---|---|
| `mc` | `a:[…]`, `c:n` | Einfachauswahl, `c` ist der Index der Lösung |
| `odd` | `a:[…]`, `c:n` | Ausreißer finden — sonst wie `mc` |
| `multi` | `a:[…]`, `cs:[n,…]` | Mehrfachauswahl, mindestens zwei richtige |
| `tf` | `v:true\|false` | Wahr oder falsch |
| `cloze` | `txt:"… {{1}} …"`, `gaps:[{s,o}]` | Lückentext; `s` ist die Lösung, `o` die Distraktoren |
| `type` | `ans:[…]`, `hint`, `unit` | Freie Eingabe; jeder Eintrag in `ans` gilt |
| `calc` | `ans:[…]`, `hint`, `unit` | Rechenaufgabe; Zahlen werden tolerant verglichen |
| `order` | `items:[…]` | Reihenfolge — `items` steht bereits richtig |
| `match` | `pairs:[[links,rechts],…]` | Zuordnung; die rechte Spalte muss eindeutig sein |

Optionen und Distraktoren werden bei **jedem** Aufruf neu gemischt. Die
Reihenfolge in der Quelldatei ist also egal — man kann sich keine Position
merken.

## Was beim Umformulieren passiert

Jede Aufgabe bekommt ihre Kennung aus dem Fragetext. Wird eine Frage
umformuliert, ist sie für die Mechanik eine neue Aufgabe und startet wieder
bei Box 0. Das ist so gewollt: eine andere Frage ist ein anderer Abruf.
Reine Tippfehlerkorrekturen also nur, wenn der Neustart in Kauf genommen
werden soll.
