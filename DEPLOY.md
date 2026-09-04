# Deploy auf Cloudflare (izu-re.com)

Die Seite läuft als **Cloudflare Worker mit Static Assets**. Der Worker
entscheidet vor jeder Auslieferung, wer was sehen darf — der private Layer
verlässt den Server ohne gültige Sitzung überhaupt nicht.

```
Besucher ──► Worker ──┬─ /                 öffentlich
                      ├─ /privacy /terms /imprint  öffentlich
                      ├─ /auth/*           Login (TOTP)
                      ├─ /api/config       Bot-Check-Konfiguration
                      ├─ /api/human        Turnstile einlösen
                      ├─ /api/weather      Open-Meteo (nur mit Sitzung)
                      ├─ /api/news         tagesschau-RSS (nur mit Sitzung)
                      └─ /private/**       NUR mit gültiger Sitzung
```

---

## 1) Einmalig: Worker mit dem Repo verbinden

Dashboard → **Workers & Pages → Create → Import a repository** → GitHub
verbinden → `KIMIII-DEV/Izure` → Branch `main`.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Danach deployt jeder Push automatisch.

## 2) TOTP-Secret erzeugen (Pflicht)

Das Secret ist der einzige Schlüssel zum privaten Layer. Ohne gesetztes
Secret kommt **niemand** hinein — auch nicht mit richtigem Code; der Worker
lehnt dann jede Anmeldung ab. Das ist Absicht: lieber verschlossen als
versehentlich offen.

```bash
node -e "
const { webcrypto: c } = require('node:crypto');
const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
const b = c.getRandomValues(new Uint8Array(20));
let bits=''; for (const x of b) bits += x.toString(2).padStart(8,'0');
let out=''; for (let i=0;i<bits.length;i+=5) out += A[parseInt(bits.slice(i,i+5).padEnd(5,'0'),2)];
console.log(out);
"
```

Dashboard → **Workers & Pages → izure → Settings → Variables and secrets
→ Add → Type: Secret**

| Name | Wert |
| --- | --- |
| `TOTP_SECRET` | der oben erzeugte Base32-String |

**Nie committen, nie in Screenshots.** Wer das Secret hat, kann gültige
Codes berechnen.

## 3) Authenticator-App einrichten

Google Authenticator, Authy, 1Password o. Ä. → **„Setup-Schlüssel manuell
eingeben“**:

- Kontoname: `IZURÉ`
- Schlüssel: der `TOTP_SECRET`-Wert
- Typ: **Zeitbasiert** (SHA1, 6 Stellen, 30 Sekunden — überall Standard)

Die App zeigt danach den 6-stelligen Code, der im Login-Dialog auf der
Startseite eingegeben wird („Private Layer“ im Seitenfuß).

## 4) Optional: Bot-Check (Cloudflare Turnstile)

Ohne diese beiden Werte läuft die Seite ganz normal, nur ohne Bot-Prüfung —
ein Bot-Schutz, der echte Besucher aussperrt, wäre der schlechtere Fehler.

Dashboard → **Turnstile → Add site** → Domain `izu-re.com`, Widget-Modus
`Managed`. Danach:

| Name | Typ | Wert |
| --- | --- | --- |
| `TURNSTILE_SITEKEY` | Variable (nicht geheim) | Site Key |
| `TURNSTILE_SECRET` | Secret | Secret Key |

Der Sitekey ist öffentlich und wird über `/api/config` an die Seite
gegeben — er muss nicht ins Repo.

## 5) Deployen

```bash
npm install
npm run cf:deploy
```

## Lokal entwickeln

```bash
npm run dev        # nur die statischen Seiten (kein Login, keine APIs)
npm run cf:dev     # Worker inklusive Login/APIs, DEV_BYPASS=1
```

`npm run cf:dev` setzt `DEV_BYPASS:1`: Login und Bot-Check sind dann
abgeschaltet, `/private/` steht offen. **Nur lokal** — die Variable gehört
niemals in die Produktionsumgebung.

Login lokal echt testen (statt Bypass):

```bash
npx wrangler dev --var DEV_BYPASS:0 --var TOTP_SECRET:<dein-test-secret>
```

---

## Vor dem Livegang

- [ ] `TOTP_SECRET` gesetzt und Authenticator-App eingerichtet
- [ ] **`imprint.html` ausfüllen** — Anschrift und Telefonnummer sind nach
      § 5 DDG Pflicht und stehen dort noch als Platzhalter. Ohne sie ist die
      Seite abmahnfähig.
- [ ] Domain `izu-re.com` und `www.izu-re.com` als Custom Domain verbunden
      (steht in `wrangler.jsonc`)
- [ ] Falls Reichweitenmessung gewünscht: Anbieter in `src/consent.js`
      unter `ANALYTICS` eintragen (Abschnitt 9 der Datenschutzerklärung
      passt dann automatisch, weil sie den Einwilligungsvorbehalt bereits
      beschreibt)
- [ ] Optional: Kundenlogos als `public/images/brands/<slug>.svg` ablegen und
      den Slug in `BRAND_LOGOS` (in `index.html`) eintragen
