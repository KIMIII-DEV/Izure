# Izuré

Zwei Layer, ein Cloudflare Worker. Ersetzt die Vorgängerversion
(`lernplattform_kommunikation`).

- **Public Layer** (`/`) — Portfolio- und Marketingseite, offen für alle.
- **Private Layer** (`/private/`) — Dashboard mit Lernecke (Flashcards,
  Quiz, Klausur), Widgets (Kalender, Wetter, Nachrichten, Pomodoro) und
  Einstellungen. Erreichbar nur nach Anmeldung.

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
  öffentlichen `/assets/`.
- `/api/weather` und `/api/news` verlangen dieselbe Sitzung.

Dazu kommen CSP mit Nonce, HSTS, `X-Frame-Options`, `noindex` auf dem
privaten Layer und ein optionaler Turnstile-Bot-Check.

## Stack

Statisches HTML/CSS/JS, gebaut mit Vite als mehrseitige Anwendung,
ausgeliefert von einem Cloudflare Worker. Kein Framework-Runtime — beide
Layer sind handgebaute, absolut positionierte Layouts.

```
index.html                 Public Layer
privacy.html               Datenschutzerklärung (DSGVO)
terms.html                 Nutzungsbedingungen
imprint.html               Impressum — Anschrift vor Livegang ausfüllen
404.html                   Fehlerseite

src/style.css              Public Layer: Desktop (skaliertes 1920er Layout)
                            + eigenes Mobil-Layout unter 1180 px
src/page.css               Textseiten (Recht, 404)
src/motion.js              Scroll-Reveals, Typewriter, FAQ, Testimonials, Navigation
src/gate.js                Login-Dialog → /auth/verify
src/consent.js             Cookie-Hinweis, Analytics-Einbindung, Turnstile
src/contact.js             Kontaktformular: Prüfung + Versand

private/index.html         Private Layer
private/src/lernecke-data.js  Lernfelder 1–5: Themen, Flashcards, Quiz
private/src/lernfeld.js       Flashcards, Quiz, Klausur
private/src/shell.js          Router, Dashboard, Einstellungen
private/src/widgets.js        Kalender, Tag/Jahr, Wetter, Nachrichten
private/src/profile.js        Name + Lernfortschritt (lokal)
private/src/ambiance.js       dauerhafter Ambiance-Player
src/private-style.css      Private Layer, drei Oberflächen (hell/warm/dunkel)

worker/index.ts            Zugang, Sicherheits-Header, API-Proxys
wrangler.jsonc             Cloudflare-Konfiguration
public/                    Bilder, Schriften, robots.txt, sitemap.xml
```

## Inhalte der Lernecke

Aus der Vorgängerversion übernommen: **5 Lernfelder, 108 Themen,
528 Flashcards, 299 Quizfragen** (Kaufleute für Dialogmarketing).

Offene und Zuordnungsfragen der Altversion haben keine Antwortoptionen und
lassen sich im Quiz nicht darstellen — sie sind als zusätzliche Flashcards
übernommen, damit kein Inhalt verloren geht.

Der Fortschritt ergibt sich aus der tatsächlichen Nutzung (gewusste Karten,
richtige Antworten) und liegt im `localStorage` — er verlässt das Gerät
nicht. Ebenso der angezeigte Name und die Oberflächen­einstellungen.

## Entwickeln

```bash
npm install
npm run dev        # nur statische Seiten
npm run cf:dev     # mit Worker (Login/APIs), DEV_BYPASS aktiv
npm run build
```

## Bekannte Grenzen

- **Marco (K.I.)** ist eine gestaltete Platzhalterkarte ohne Funktion — das
  Eingabefeld ist deaktiviert und die Karte sagt das auch.
- **Kundenlogos**: gezeigt werden Wortmarken. Fremde Logos gehören ihren
  Inhabern und werden hier nicht nachgebaut; wer sie zeigen darf, legt sie
  unter `public/images/brands/<slug>.svg` ab und trägt den Slug in
  `BRAND_LOGOS` ein (siehe `index.html`).
- **Kontaktformular** öffnet das Mailprogramm mit vorbereiteter Nachricht.
  Es gibt keinen Server, der Anfragen speichert — bewusst, das erspart eine
  Auftragsverarbeitung. Für echten Serverversand genügt es, `send()` in
  `src/contact.js` zu ersetzen.
- **Wetter und Nachrichten** kommen live über den Worker (Open-Meteo,
  tagesschau-RSS). Schlägt der Abruf fehl, sagt die Karte das, statt alte
  oder erfundene Werte zu zeigen.
