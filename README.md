# Izuré — Public Layer

The public-facing marketing/portfolio site for Izuré. This replaces the design
previously shipped from `lernplattform_kommunikation`.

## Stack

Static HTML/CSS/JS served through Vite (no framework runtime needed for this
layer — the page is a hand-built, absolutely-positioned layout with two full
breakpoints: a scaled 1920px desktop layout in `#page`, and a separate
flow-based `#mobile` layout shown under 1180px).

```
index.html         entry point
src/style.css       fonts, desktop layout, motion/animation styles, mobile layout, gate styles
src/motion.js       scroll reveals, hero typewriter, award hovers, FAQ accordion, testimonial switcher, nav toggle
src/gate.js         "Private Layer" access-code gate (see caveat below)
public/images/      photos & icons
public/fonts/       Domine + Space Grotesk subsets (self-hosted, woff/woff2)
```

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview
```

## Known placeholder: the "Private Layer" gate

`src/gate.js` implements a 6-digit code entry UI (`#gate`) that currently
checks against a **hardcoded client-side code** (`428173`) and, once
unlocked, redirects to `Private Layer.html` (or just shows an "unlocked"
message if that destination doesn't exist yet). This is **not real
authentication** — anyone can read the code out of the shipped JS. It's a
placeholder from the original design export, intended to gate access to the
private layer that hasn't been built yet.

When the private layer is built, replace this with a real auth flow
(server-verified session/token) rather than hardening the client-side check.

## Origin

This design was delivered as an offline-exported HTML bundle (fonts/images
inline as base64, template as an unpacking script). The assets and markup
here were extracted from that bundle and rewritten to reference real files
instead of runtime-generated blob URLs, so the site can be served/built
normally.
