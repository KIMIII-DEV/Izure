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
private/src/lern-data.js    Lernfelder 1–5: Themen, Flashcards, Quiz
private/src/progress.js     Lernfortschritt (lokal)
private/src/news.js         gemeinsame Quelle für beide Nachrichtenflächen
private/src/widgets.js      Kalender, Tag/Jahr, Motivation, Wetter, Nachrichten
private/src/v2.js           Punchy, Wetter-Ansicht, Nachrichten-Ansicht
private/src/v2-shell.js     Router, Dashboard, Pomodoro, Ambiance, Einstellungen
private/src/practice.js     Flashcards, Quiz, Klausur

graph/                      Wissens-Vault als Markdown (siehe unten)
scripts/build-graph.mjs     graph/ → graph/META/graph.json + graph-data.js

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

Aus der Vorgängerversion übernommen: **5 Lernfelder, 108 Themen,
528 Flashcards, 299 Quizfragen** (Kaufleute für Dialogmarketing).

Offene und Zuordnungsfragen der Altversion haben keine Antwortoptionen und
lassen sich im Quiz nicht darstellen — sie sind als zusätzliche Flashcards
übernommen, damit kein Inhalt verloren geht.

Der Fortschritt ergibt sich aus der tatsächlichen Nutzung (gewusste Karten,
richtige Antworten) und liegt im `localStorage` — er verlässt das Gerät
nicht. Ebenso die Oberflächeneinstellungen.

## Entwickeln

```bash
npm install
npm run dev        # nur statische Seiten
npm run cf:dev     # mit Worker (Login/APIs), DEV_BYPASS aktiv
npm run graph      # Vault neu einlesen
npm run build
```

## Bekannte Grenzen

- **Punchy (K.I.)** ist eine gestaltete Fläche mit aufgezeichneten
  Verläufen, kein angebundenes Modell — das Eingabefeld ist deaktiviert und
  die Fläche sagt das auch.
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
