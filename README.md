# Izuré

The new design for Izuré, replacing what was previously shipped from
`lernplattform_kommunikation`. Two layers, one Vite project:

- **Public layer** (`/`) — the marketing/portfolio site, open to anyone.
- **Private layer** (`/private/`) — the dashboard behind the access gate:
  learning corner (flashcards/quiz/exam), widgets (calendar, weather, news,
  Pomodoro), and settings. Reachable by unlocking the gate on the public
  layer, or directly at `/private/` during development.

## Stack

Static HTML/CSS/JS served through Vite as a two-entry multi-page app (no
framework runtime needed for either layer yet — both are hand-built,
absolutely-positioned layouts). `vite.config.js` builds both `index.html`
and `private/index.html` as separate entries.

```
index.html              public layer entry point
src/style.css            public layer: fonts, desktop layout (#page, scaled 1920px design),
                          motion/animation styles, mobile layout (<1180px), gate styles
src/motion.js             scroll reveals, hero typewriter, award hovers, FAQ accordion,
                          testimonial switcher, nav toggle
src/gate.js               "Private Layer" access-code gate (see caveat below)

private/index.html        private layer entry point
private/src/lernecke-data.js  Lernfeld content: topics, flashcards, quiz/exam pools
private/src/widgets.js        calendar, day/year progress, weather, news widgets
private/src/shell.js          shell, dashboard wiring, settings (theme, accent, density…)
private/src/lernfeld.js       flashcards/quiz/exam interaction logic
src/private-style.css     private layer: shell, dashboard, widgets, settings, Lernfeld styles

public/images/            photos & icons (both layers share this folder)
public/fonts/             Domine + Space Grotesk subsets (self-hosted, woff/woff2)
```

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/ (dist/index.html + dist/private/index.html)
npm run preview
```

## Known placeholders

- **The gate is not real authentication.** `src/gate.js` checks a 6-digit
  code against a **hardcoded client-side value** (`428173`) and, once
  unlocked, redirects to `/private/`. Anyone can read the code out of the
  shipped JS or just navigate to `/private/` directly — there's no server
  enforcing access. Replace this with a real auth flow (server-verified
  session/token) before anything sensitive lives behind it.
- **Marco (the "K.I" widget) is UI-only.** The dashboard card is wired up
  visually but has no backing assistant yet — the input is disabled and the
  card says so ("Wird später gebaut").
- **Weather, news, and some dashboard numbers are static/mocked data**,
  not live feeds — useful for shaping the UI, not yet functional.

## Origin

Both layers were delivered as offline-exported HTML bundles (fonts/images
inline as base64, markup as a self-unpacking template script). The assets
and markup here were extracted from those bundles and rewritten to
reference real files instead of runtime-generated blob URLs, so the site
builds and serves normally.
