/* IZURÉ Cloudflare Worker — statische Seiten + TOTP-Login + API-Proxys.

   Der Worker ist die einzige Stelle, an der Zugang entschieden wird:

   • Public Layer (/) ist offen, optional hinter einem Turnstile-Bot-Check.
   • Private Layer (/private/*) wird NUR mit gültigem Session-Cookie
     ausgeliefert. Ohne Cookie kommt der Browser nicht an das HTML, das CSS
     oder die Skripte heran — die Prüfung passiert vor `ASSETS.fetch`, nicht
     im Client. Das ist der Unterschied zu einem Code-Feld im JavaScript:
     dort steht der Code im Bundle und jeder kann ihn lesen.
   • Der Login ist TOTP (Google-Authenticator-Stil, RFC 6238): 6-stelliger
     Code, rotiert alle 30 Sekunden, geprüft gegen ein Secret, das nur als
     verschlüsseltes Worker-Secret existiert (TOTP_SECRET) und nie im Repo
     steht. Bei Erfolg setzt der Worker ein HMAC-signiertes, httpOnly-
     Session-Cookie (12h) — kein Server-State nötig, und JavaScript im
     Browser kommt an das Cookie nicht heran.

   Base32/HOTP sind aus der Vorgängerversion übernommen und dort gegen die
   Testvektoren aus RFC 4648 bzw. RFC 4226 verifiziert worden.

   Zusätzlich liefert der Worker echte Daten für den Privat Layer:
   /api/weather (Open-Meteo) und /api/news (tagesschau-RSS). Beide laufen
   serverseitig — im Browser also keine CORS-Probleme und keine fremden
   Tracker. */

interface Env {
  ASSETS: Fetcher;
  /** Setzt Login + Bot-Check außer Kraft — nur für `wrangler dev`. */
  DEV_BYPASS?: string;
  /** Base32-Secret für TOTP, gesetzt als verschlüsseltes Worker-Secret. */
  TOTP_SECRET?: string;
  /** Turnstile (Bot-Check). Beide Werte optional: fehlen sie, läuft die
   *  Seite ohne Bot-Check, statt Besucher auszusperren. */
  TURNSTILE_SECRET?: string;
  TURNSTILE_SITEKEY?: string;
}

const SESSION_COOKIE = 'izure_session';
const HUMAN_COOKIE = 'izure_human';
const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12h
const HUMAN_TTL_MS = 24 * 60 * 60 * 1000; // 24h
const TOTP_STEP_SECONDS = 30;
const TOTP_WINDOW = 1; // ±1 Schritt (±30s) toleriert Uhr-Drift der Auth-App

const NO_STORE = { 'cache-control': 'no-store' };

// ---------- Base32 (RFC 4648) ----------
const BASE32_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

function base32Decode(input: string): Uint8Array {
  const clean = input.toUpperCase().replace(/[^A-Z2-7]/g, '');
  let bits = '';
  for (const char of clean) {
    const val = BASE32_ALPHABET.indexOf(char);
    if (val === -1) continue;
    bits += val.toString(2).padStart(5, '0');
  }
  const bytes = new Uint8Array(Math.floor(bits.length / 8));
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(bits.slice(i * 8, i * 8 + 8), 2);
  }
  return bytes;
}

// ---------- TOTP / HOTP (RFC 6238 / RFC 4226) ----------
async function hotp(keyBytes: Uint8Array, counter: number): Promise<string> {
  const counterBytes = new ArrayBuffer(8);
  const view = new DataView(counterBytes);
  view.setUint32(0, Math.floor(counter / 2 ** 32));
  view.setUint32(4, counter >>> 0);
  const key = await crypto.subtle.importKey('raw', keyBytes, { name: 'HMAC', hash: 'SHA-1' }, false, ['sign']);
  const sig = new Uint8Array(await crypto.subtle.sign('HMAC', key, counterBytes));
  const offset = sig[sig.length - 1] & 0x0f;
  const binCode =
    ((sig[offset] & 0x7f) << 24) | ((sig[offset + 1] & 0xff) << 16) | ((sig[offset + 2] & 0xff) << 8) | (sig[offset + 3] & 0xff);
  return (binCode % 1_000_000).toString().padStart(6, '0');
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

async function verifyTotp(secretB32: string, code: string): Promise<boolean> {
  if (!/^\d{6}$/.test(code)) return false;
  const keyBytes = base32Decode(secretB32);
  if (keyBytes.length === 0) return false;
  const counter = Math.floor(Date.now() / 1000 / TOTP_STEP_SECONDS);
  for (let drift = -TOTP_WINDOW; drift <= TOTP_WINDOW; drift++) {
    const candidate = await hotp(keyBytes, counter + drift);
    if (timingSafeEqual(candidate, code)) return true;
  }
  return false;
}

// ---------- Signierte Cookies (HMAC, kein Server-State nötig) ----------
function toBase64(bytes: Uint8Array): string {
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
}

async function macKey(env: Env, scope: string): Promise<CryptoKey> {
  const material = new TextEncoder().encode(`${env.TOTP_SECRET || 'dev-only-insecure'}::${scope}`);
  const digest = await crypto.subtle.digest('SHA-256', material);
  return crypto.subtle.importKey('raw', digest, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}

async function issueCookie(env: Env, name: string, scope: string, ttlMs: number): Promise<string> {
  const payloadB64 = btoa(JSON.stringify({ exp: Date.now() + ttlMs }));
  const key = await macKey(env, scope);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payloadB64));
  const token = `${payloadB64}.${toBase64(new Uint8Array(sig))}`;
  return `${name}=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${Math.floor(ttlMs / 1000)}`;
}

function clearCookie(name: string): string {
  return `${name}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`;
}

async function verifyCookie(request: Request, env: Env, name: string, scope: string): Promise<boolean> {
  const cookieHeader = request.headers.get('Cookie') || '';
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  if (!match) return false;
  const [payloadB64, sigB64] = match[1].split('.');
  if (!payloadB64 || !sigB64) return false;
  try {
    const key = await macKey(env, scope);
    const sigBytes = Uint8Array.from(atob(sigB64), (c) => c.charCodeAt(0));
    const valid = await crypto.subtle.verify('HMAC', key, sigBytes, new TextEncoder().encode(payloadB64));
    if (!valid) return false;
    const payload = JSON.parse(atob(payloadB64));
    return typeof payload.exp === 'number' && payload.exp > Date.now();
  } catch {
    return false;
  }
}

// ---------- Turnstile (Bot-Check) ----------
async function verifyTurnstile(env: Env, token: string, ip: string | null): Promise<boolean> {
  if (!env.TURNSTILE_SECRET || !token) return false;
  const form = new FormData();
  form.append('secret', env.TURNSTILE_SECRET);
  form.append('response', token);
  if (ip) form.append('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form });
  const data = (await res.json().catch(() => null)) as { success?: boolean } | null;
  return data?.success === true;
}

// ---------- Wetter (Open-Meteo, keine API-Keys, keine Tracker) ----------
const HAMBURG = { lat: 53.5511, lon: 9.9937 };

async function weather(): Promise<Response> {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${HAMBURG.lat}&longitude=${HAMBURG.lon}` +
    '&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,precipitation' +
    '&hourly=temperature_2m,weather_code,precipitation_probability' +
    '&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max' +
    '&timezone=Europe%2FBerlin&forecast_days=6';
  const upstream = await fetch(url, { cf: { cacheTtl: 600, cacheEverything: true } });
  if (!upstream.ok) return Response.json({ error: 'weather upstream failed' }, { status: 502, headers: NO_STORE });
  return Response.json(await upstream.json(), { headers: { 'cache-control': 'public, max-age=600' } });
}

// ---------- Nachrichten (tagesschau-RSS → JSON) ----------
const FEEDS: Record<string, string> = {
  welt: 'https://www.tagesschau.de/xml/rss2_ausland',
  politik: 'https://www.tagesschau.de/xml/rss2_inland',
  wirtschaft: 'https://www.tagesschau.de/wirtschaft/index~rss2.xml',
  technik: 'https://www.tagesschau.de/thema/digitales/index~rss2.xml',
};

function decodeEntities(s: string): string {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .trim();
}

function pickTag(item: string, tag: string): string {
  const m = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return m ? decodeEntities(m[1]) : '';
}

async function news(topic: string): Promise<Response> {
  const feed = FEEDS[topic] || FEEDS.welt;
  const upstream = await fetch(feed, {
    headers: { 'user-agent': 'izure-privat-layer/1.0 (+https://izu-re.com)' },
    cf: { cacheTtl: 600, cacheEverything: true },
  });
  if (!upstream.ok) return Response.json({ error: 'news upstream failed' }, { status: 502, headers: NO_STORE });
  const xml = await upstream.text();
  const items = [...xml.matchAll(/<item[\s\S]*?<\/item>/g)].slice(0, 8).map((m) => ({
    title: pickTag(m[0], 'title'),
    summary: pickTag(m[0], 'description'),
    link: pickTag(m[0], 'link'),
    date: pickTag(m[0], 'pubDate'),
  }));
  return Response.json({ topic, source: 'tagesschau.de', items }, { headers: { 'cache-control': 'public, max-age=600' } });
}

// ---------- Sicherheits-Header ----------
/* Content-Security-Policy: erlaubt genau das, was die Seite wirklich nutzt.

   Eigene Skripte und Stile liegen auf derselben Herkunft; Turnstile
   (Bot-Check) und die YouTube-Einbettung im Ambiance-Bereich sind die
   einzigen Fremdquellen. 'unsafe-inline' bleibt für Stile nötig, weil das
   Layout aus dem Design-Export zu Hunderten inline-`style`-Attribute
   verwendet — das ließe sich nur mit einem vollständigen Umbau des
   Markups auflösen. Skripte laufen ohne 'unsafe-inline': das Seitenskript
   steht zwar inline, wird aber über einen Nonce freigegeben. */
function csp(nonce: string): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' https://challenges.cloudflare.com`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self' https://challenges.cloudflare.com",
    "frame-src https://www.youtube-nocookie.com https://challenges.cloudflare.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self' mailto:",
    "object-src 'none'",
    'upgrade-insecure-requests',
  ].join('; ');
}

function harden(res: Response, isPrivate: boolean, nonce?: string): Response {
  const out = new Response(res.body, res);
  out.headers.set('x-content-type-options', 'nosniff');
  out.headers.set('referrer-policy', 'strict-origin-when-cross-origin');
  out.headers.set('x-frame-options', 'DENY');
  out.headers.set('permissions-policy', 'geolocation=(), microphone=(), camera=(), payment=()');
  out.headers.set('strict-transport-security', 'max-age=31536000; includeSubDomains');
  if (nonce) {
    out.headers.set('content-security-policy', csp(nonce));
    // Der Nonce steht im HTML-Körper UND im Header — beide müssen aus
    // derselben Auslieferung stammen. Dürfte der Browser das HTML
    // zwischenspeichern, käme nach einem 304 der alte Körper mit dem alten
    // Nonce zum neuen Header: die CSP würde dann das eigene Seitenskript
    // blockieren. Deshalb wird HTML nicht zwischengespeichert (das ETag
    // muss mit weg, sonst revalidiert der Browser trotzdem dagegen).
    out.headers.delete('etag');
    out.headers.set('cache-control', 'no-store');
  }
  if (isPrivate) {
    // Der private Layer darf nirgends zwischengespeichert oder indexiert werden.
    out.headers.set('cache-control', 'private, no-store');
    out.headers.set('x-robots-tag', 'noindex, nofollow, noarchive');
  }
  return out;
}

/* HTML mit Nonce ausliefern.

   Das Seitenskript des Public Layers steht inline im HTML (es skaliert das
   Layout, bevor der erste Frame steht — ausgelagert und deferred gäbe es
   ein sichtbares Springen). Damit die CSP trotzdem ohne 'unsafe-inline'
   auskommt, bekommt jedes Inline-Skript pro Auslieferung einen frischen
   Nonce. HTMLRewriter arbeitet dabei streamend, es wird nichts gepuffert. */
async function serveAsset(request: Request, env: Env, isPrivate: boolean): Promise<Response> {
  const res = await env.ASSETS.fetch(request);
  const type = res.headers.get('content-type') || '';
  if (!type.includes('text/html')) return harden(res, isPrivate);

  const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))));
  const rewritten = new HTMLRewriter()
    .on('script', {
      element(el) {
        if (!el.hasAttribute('src')) el.setAttribute('nonce', nonce);
      },
    })
    .transform(res);
  return harden(rewritten, isPrivate, nonce);
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    const devBypass = env.DEV_BYPASS === '1';
    const hasSession = async () => devBypass || (await verifyCookie(request, env, SESSION_COOKIE, 'izure-session-v1'));

    // ── Öffentliche Konfiguration (der Sitekey ist absichtlich öffentlich) ──
    if (path === '/api/config') {
      return Response.json(
        {
          turnstileSiteKey: env.TURNSTILE_SITEKEY || null,
          botCheck: Boolean(env.TURNSTILE_SECRET && env.TURNSTILE_SITEKEY),
          loginConfigured: Boolean(env.TOTP_SECRET) || devBypass,
        },
        { headers: NO_STORE }
      );
    }

    // ── Bot-Check: Turnstile-Token einlösen ──
    if (path === '/api/human' && request.method === 'POST') {
      const body = (await request.json().catch(() => null)) as { token?: string } | null;
      const ok = devBypass || (await verifyTurnstile(env, (body?.token || '').trim(), request.headers.get('cf-connecting-ip')));
      if (!ok) return Response.json({ ok: false }, { status: 403, headers: NO_STORE });
      return Response.json(
        { ok: true },
        { headers: { 'set-cookie': await issueCookie(env, HUMAN_COOKIE, 'izure-human-v1', HUMAN_TTL_MS), ...NO_STORE } }
      );
    }

    // ── Login: TOTP-Code prüfen → Session-Cookie ──
    if (path === '/auth/verify' && request.method === 'POST') {
      let ok = devBypass;
      if (!ok && env.TOTP_SECRET) {
        const body = (await request.json().catch(() => null)) as { code?: string } | null;
        ok = await verifyTotp(env.TOTP_SECRET, (body?.code || '').trim());
      }
      if (!ok) return Response.json({ ok: false }, { status: 401, headers: NO_STORE });
      return Response.json(
        { ok: true },
        { headers: { 'set-cookie': await issueCookie(env, SESSION_COOKIE, 'izure-session-v1', SESSION_TTL_MS), ...NO_STORE } }
      );
    }

    if (path === '/auth/check') {
      const ok = await hasSession();
      return Response.json({ ok, configured: Boolean(env.TOTP_SECRET) }, { status: ok ? 200 : 401, headers: NO_STORE });
    }

    if (path === '/auth/logout') {
      return new Response(null, { status: 204, headers: { 'set-cookie': clearCookie(SESSION_COOKIE), ...NO_STORE } });
    }

    // ── Zero Trust: /private/* nur mit gültiger Session ──
    // Gilt für ALLES unter /private/ — HTML, CSS, Skripte, Daten. Ohne
    // gültiges Cookie verlässt kein Byte des privaten Layers den Worker.
    if (path === '/private' || path.startsWith('/private/')) {
      if (!(await hasSession())) {
        const wantsHtml = (request.headers.get('accept') || '').includes('text/html');
        if (wantsHtml) return new Response(null, { status: 302, headers: { location: '/?login=1', ...NO_STORE } });
        return Response.json({ ok: false, error: 'unauthorized' }, { status: 401, headers: NO_STORE });
      }
      return serveAsset(request, env, true);
    }

    // ── Datenquellen für den Privat Layer (nur mit Session) ──
    if (path === '/api/weather' || path === '/api/news') {
      if (!(await hasSession())) return Response.json({ ok: false, error: 'unauthorized' }, { status: 401, headers: NO_STORE });
      try {
        return harden(path === '/api/weather' ? await weather() : await news(url.searchParams.get('topic') || 'welt'), true);
      } catch {
        return Response.json({ error: 'upstream failed' }, { status: 502, headers: NO_STORE });
      }
    }

    return serveAsset(request, env, false);
  },
} satisfies ExportedHandler<Env>;
