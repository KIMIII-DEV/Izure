# Izuré

Zwei Layer, ein Cloudflare Worker. Ersetzt die Vorgängerversion
(`lernplattform_kommunikation`).

- **Public Layer** (`/`) — Portfolio- und Marketingseite, offen für alle.
  Datenschutz, Nutzungsbedingungen und Impressum liegen als eigene
  Abschnitte in derselben Seite und werden über `#privacy`, `#terms` und
  `#imprint` eingeblendet.
- **Private Layer** (`/private/`) — eigenes Dokument, eigene Bundles.
  Dashboard mit Lernecke (Themen, Flashcards, Quiz, Klausur),
  Wissensgraph, Wetter, Nachrichten, Pomodoro, Ambiance und Einstellungen.
  Erreichbar nur nach Anmeldung.

Deploy, Secrets und Authenticator-Einrichtung: **[DEPLOY.md](DEPLOY.md)**

## Zugang

Der private Layer ist **serverseitig** geschützt, nicht im Browser:

- Anmeldung per **TOTP** (Google-Authenticator-Stil, RFC 6238) — 6-stelliger
  Code, rotiert alle 30 Sekunden, geprüft gegen ein Secret, das nur als
  verschlüsseltes Worker-Secret existiert und nie im Repo steht.
- Bei Erfolg setzt der Worker ein HMAC-signiertes, `HttpOnly`-Cookie (12 h).
  JavaScript im Browser kommt an dieses Cookie nicht heran.
- **Alles** unter `/private/` — HTML, CSS, Skripte, sämtliche Lerninhalte —
  wird ohne gültiges Cookie gar nicht erst ausgeliefert. Auch die
  gebündelten Dateien liegen deshalb unter `/private/assets/` und nicht im
  öffentlichen `/assets/`; dafür sorgt `vite.config.js`.
- `/api/weather` und `/api/news` verlangen dieselbe Sitzung.

Dazu kommen CSP mit Nonce, HSTS, `X-Frame-Options`, `noindex` auf dem
privaten Layer und ein optionaler Turnstile-Bot-Check.

## Stack

Statisches HTML/CSS/JS, gebaut mit Vite als mehrseitige Anwendung,
ausgeliefert von einem Cloudflare Worker. Kein Framework-Runtime.

```
index.html                  Public Layer inkl. Datenschutz, AGB, Impressum
404.html                    Fehlerseite

src/public.css              Public Layer, Desktop + Mobil
src/fonts.css               Schriftbindungen
src/shell.js                Sprache, Marken-Laufband, Cookie-Einwilligung,
                             Kontaktformular, Rechtsabschnitte
src/gate.js                 Login-Dialog → /auth/verify
src/motion.js               Scroll-Reveals, Typewriter, Navigation

private/index.html          Private Layer (eigenes Dokument)
private/private.css         Oberfläche des Private Layers
private/src/boot.js         Wurzelelement, Abmelden
private/src/graph-data.js   erzeugt aus graph/ — nicht von Hand ändern
private/src/graph-core.js   Graph: Modell, Kanten, Suche
private/src/graph-view.js   Graph: Darstellung, Detailfläche
private/src/lern-data.js    erzeugt aus content/lernfelder/ — nicht ändern
private/src/learn.js        Lernmechanik: Auswahl, Mischung, Bewertung, Leitner
private/src/items.js        Darstellung einer Aufgabe — alle neun Typen
private/src/pruefung.js     Zwischenprüfung: Themengebiete, Bogen, Bewertung
private/src/pruefung-ui.js  Zwischenprüfung: Start, Bogen, Auswertung
private/src/progress.js     Lernfortschritt (lokal)
private/src/news.js         gemeinsame Quelle für beide Nachrichtenflächen
private/src/widgets.js      Kalender, Tag/Jahr, Motivation, Wetter, Nachrichten
private/src/v2.js           Punchy, Wetter-Ansicht, Nachrichten-Ansicht
private/src/v2-shell.js     Router, Dashboard, Pomodoro, Ambiance, Einstellungen
private/src/practice.js     Themen, Flashcards, Quiz

content/lernfelder/         Karten und Aufgaben als bearbeitbare Quellen
graph/                      Wissens-Vault als Markdown (siehe unten)
scripts/build-lernfelder.mjs  content/lernfelder/ → private/src/lern-data.js
scripts/build-graph.mjs     graph/ → graph/META/graph.json + graph-data.js
scripts/test-learn.mjs      Funktionstests der Lernmechanik
scripts/test-pruefung.mjs   Funktionstests der Zwischenprüfung

worker/index.ts             Zugang, Sicherheits-Header, API-Proxys
wrangler.jsonc              Cloudflare-Konfiguration
public/                     Bilder, Schriften, robots.txt, sitemap.xml, og.png
```

## Der Wissensgraph ist ein Ordner

`graph/` ist ein Markdown-Vault im Obsidian-Stil: eine Datei je Notiz,
YAML-Frontmatter oben, Fliesstext darunter. Damit lässt sich der Bestand
mit jedem Editor, mit Obsidian und maschinell lesen — auch ausserhalb
dieser Seite.

```
graph/RAW/     alles Neue kommt hier rein, ungeordnet
graph/SORT/    sortierter Bestand, Unterordner frei erweiterbar
graph/META/    schema.md (Format), activity.json (Protokoll),
               graph.json (erzeugt)
```

`npm run graph` liest beide Stufen, prüft Frontmatter und Verweise und
schreibt `graph/META/graph.json` sowie `private/src/graph-data.js`. Der
Build ruft das automatisch auf. Eine Notiz von `RAW/` nach `SORT/` zu
verschieben ändert ihren Pfad in der Ansicht nicht — Verweise bleiben
darum beim Sortieren heil.

Details und das Feldschema stehen in [`graph/README.md`](graph/README.md).

> **Dieses Repository ist öffentlich.** Der Worker schützt den Graphen im
> Browser, GitHub zeigt `graph/` aber jedem. Was dort steht, ist damit
> veröffentlicht. `graph/README.md` nennt drei Wege, das zu ändern.

## Inhalte der Lernecke

**5 Lernfelder, 108 Themen, 250 Flashcards, 606 Aufgaben** (Kaufleute für
Dialogmarketing). Bearbeitet wird in [`content/lernfelder/`](content/lernfelder/README.md),
gebaut mit `npm run lern`.

Neun Aufgabentypen statt nur Einfachauswahl: `mc`, `multi`, `tf`, `cloze`
(Lückentext), `type` (freie Eingabe), `calc` (Rechnen), `order`
(Reihenfolge), `match` (Zuordnung), `odd` (Ausreißer finden). Offene und
Zuordnungsfragen mussten früher als Flashcards mitlaufen, weil das Quiz sie
nicht darstellen konnte — dafür gibt es jetzt eigene Typen. Das ist der
Grund, warum die Kartenzahl von 528 auf 250 gesunken und die Aufgabenzahl
von 299 auf 606 gestiegen ist: derselbe Stoff, in der passenden Form.

### Warum man sich hier nichts auswendig merken kann

Drei Mechaniken in `private/src/learn.js`:

1. **Pool-Rotation.** Eine Runde zieht 25 Aufgaben aus 107–161. Die
   Überschneidung zweier aufeinanderfolgender Runden liegt im Test bei
   2 bis 5 von 25.
2. **Mischen auf drei Ebenen.** Die Auswahl ist gewichtet, die Reihenfolge
   verschachtelt Kategorien und Typen, und die Antwortoptionen werden bei
   *jedem* Aufruf neu gemischt — die Lösung landet über 40 Aufrufe auf allen
   Positionen.
3. **Zustand statt Punktestand.** Jede Aufgabe hat eine eigene Leitner-Box
   (0/1/3/7/21/60 Tage). Sie gilt erst als gelernt, wenn sie in **drei
   verschiedenen Sitzungen** richtig beantwortet wurde; dreimal richtig in
   derselben Runde zählt einmal.

Dazu: bis zu 40 % einer Runde sind reservierte Plätze für falsch
beantwortete oder fällige Aufgaben — ohne diese Reservierung geht ein
einzelner Fehler im Pool unter. Und vor dem Prüfen fragt die Oberfläche nach
der eigenen Einschätzung (geraten / unsicher / sicher); wer „sicher" wählt
und danebenliegt, bekommt die Aufgabe bevorzugt zurück.

Der Fortschrittsbalken zeigt den Anteil der Aufgaben, die in diesem Sinne
sitzen, gemittelt mit dem besten Kartendurchlauf. Er kann fallen. Das ist
Absicht: ein Wert, der nur steigt, sagt nichts über den Wissensstand.

Alles liegt im `localStorage` (`izure.learn.v3` für den Aufgabenzustand,
`izure.privat.progress` für die Karten, `izure.pruefung.v1` für den
Prüfungsverlauf) und verlässt das Gerät nicht — ein Gerätewechsel bedeutet,
von vorn anzufangen.

## Die Zwischenprüfung

Eine Prüfung über alle Lernfelder, nicht mehr eine Klausur je Feld — so wie
die echte Zwischenprüfung auch quer liegt. Grundlage ist der Anhang „Die
Zwischenprüfung" im Lehrbuch *Ausbildung im Dialogmarketing*.

| Vorgabe | Wert | Quelle |
|---|---|---|
| Aufgabenform | programmierte Fragen | Lehrbuch |
| Zeit | höchstens 120 Minuten | Lehrbuch |
| Stoff | 1. Ausbildungsjahr, vier Themengebiete | Lehrbuch |
| Notenschlüssel | 92 / 81 / 67 / 50 / 30 Punkte | Lehrbuch |
| Aufgabenzahl | 60 | Probezwischenprüfungen |
| Verteilung auf die Themengebiete | 15 / 15 / 15 / 15 | **Annahme** |

Die Verteilung ist der einzige offene Punkt: sie ist nirgends belegt. Im Code
steht sie als Annahme und lässt sich über `PRUEFUNG.build({ quota })` ändern.
Die genaue Aufschlüsselung steht laut Lehrbuch im AKA-Prüfungskatalog.

| TG | Themengebiet | Kapitel | Pool |
|---|---|---|---:|
| 1 | Leistungsangebote im Dialogmarketing | LF2 Kap. 1–2 | 89 |
| 2 | Kommunikationsprozesse | LF3 Kap. 1–6 · LF5 Kap. 1–8 (ohne Kap. 2) | 209 |
| 3 | Arbeits- und Aufgabengestaltung | LF1 1.1 und Kap. 4–6 · LF4 Kap. 1–6 · LF5 Kap. 2 | 163 |
| 4 | Wirtschafts- und Sozialkunde | LF1 1.2–1.4, Kap. 2, Kap. 3 | 94 |

LF5 Kapitel 2 nennt das Buch doppelt; es zählt hier zu TG 3, weil der
Fragenkomplex „Datenbanken, Datenschutz und Datensicherheit" es ausdrücklich
aufführt. LF2 Kapitel 3 ist nicht prüfungsrelevant — seine Aufgaben bleiben
im Quiz, kommen aber nicht in die Prüfung.

Wie sie sich verhält:

- **Nur gebundene Aufgaben.** Freie Texteingabe fällt heraus. Rechenaufgaben
  werden in Auswahlform überführt; die falschen Optionen bilden typische
  Rechenfehler ab. Lässt sich kein sauberes Quartett bilden, fällt die
  Aufgabe heraus, statt geraten zu werden.
- **Kein Feedback während der Prüfung.** Jede Aufgabe ist anspringbar und
  markierbar, eine Tempoanzeige vergleicht laufend Soll und Ist. Bei 0:00
  wird automatisch abgegeben.
- **Ein Neuladen übersteht sie** — Antworten, Markierungen und Uhr stehen
  danach wie vorher.
- **Rotation.** Die Aufgaben der letzten Prüfung sind gesperrt, die der
  vorletzten nachrangig. Sechs Prüfungen hintereinander nutzen über 300
  verschiedene Aufgaben.
- **Formate.** Vollprüfung (60 / 120 min), halbe Prüfung (30 / 60),
  Kurzrunde (12 / 24). Immer zwei Minuten je Aufgabe.
- **Auswertung.** Punkte, Note, Ergebnis je Themengebiet, schwächste
  Kategorien, Zeitverbrauch und jeder Fehler mit Lösung, Erklärung und
  Fundstelle.

Für „sehr gut" braucht es 92 Punkte, bei 60 Aufgaben also 56 richtige —
höchstens vier Fehler. Gerundet wird nicht: 55 von 60 sind 91,7 Punkte und
damit „gut". Ob die IHK beim Umrechnen aufrundet, ist nicht belegt, und ein
Trainingswerkzeug soll im Zweifel nicht zugunsten des Prüflings rechnen.

## Entwickeln

```bash
npm install
npm run dev        # nur statische Seiten
npm run cf:dev     # mit Worker (Login/APIs), DEV_BYPASS aktiv
npm run lern       # Karten und Aufgaben neu bauen, Schema prüfen
npm run graph      # Vault neu einlesen
npm test           # Funktionstests: Lernmechanik und Zwischenprüfung
npm run build
```

## Bekannte Grenzen

- **Punchy (K.I.)** ist eine gestaltete Fläche mit aufgezeichneten
  Verläufen, kein angebundenes Modell — das Eingabefeld ist deaktiviert und
  die Fläche sagt das auch.
- **Der Prüfungszuschnitt** (Teile, Gewichtung, zugelassene Aufgabenformate)
  ist nicht bestätigt. Die Schwierigkeitsangabe `d` je Aufgabe ist deshalb
  gleichmäßig gestreut und nicht am echten Prüfungsprofil ausgerichtet.
- **Kundenlogos**: gezeigt werden Wortmarken (`BRANDS` in `src/shell.js`).
  Fremde Logos gehören ihren Inhabern und werden hier nicht nachgebaut.
- **Kontaktformular** (`src/motion.js`, Abschnitt 11) prüft die Eingaben und
  öffnet dann das Mailprogramm mit fertiger Nachricht. Es gibt keinen Server,
  der Anfragen entgegennimmt oder speichert — bewusst, das erspart eine
  Auftragsverarbeitung. Die Lieferung täuschte an dieser Stelle einen
  Versand nur vor; das ist ersetzt.
- **Wetter und Nachrichten** kommen live über den Worker (Open-Meteo,
  tagesschau-RSS). Schlägt der Abruf fehl, sagen Karte und Ansicht das,
  statt alte oder erfundene Werte zu zeigen.
- **Impressum und Datenschutz** enthalten noch Platzhalter (gelb markiert,
  `<mark class="todo">`). Siehe Checkliste in DEPLOY.md.
