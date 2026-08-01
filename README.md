# Personal Portfolio

A creative-studio style portfolio built with **Next.js 15 (App Router)** and **TypeScript**.

Design direction is modelled on [saki-creative-studio.com](https://saki-creative-studio.com/) —
the layout system, the 3D image sphere, the works carousel and the glass UI language are
reimplemented from scratch in React/TypeScript. All copy, artwork and identity in this
repository are placeholders: **replace them with your own before publishing.**

---

## Features

| | |
|---|---|
| **Home** | Images arranged on a rotating 3D ring, driven by wheel / drag, with a pointer-parallax tilt and a full-width marquee wordmark drifting behind it. |
| **Works** | Horizontal carousel ring with category filtering. Cards past ~80° fade out and leave the tab order. |
| **Project detail** | Sticky copy column beside an independently scrolling image column; collapses to a single column on mobile. |
| **About** | Full-height portrait beside a scrolling column — bio, credentials, experience, skills grid, numbered process, CTA. Scroll-reveal via `IntersectionObserver`. |
| **Contact** | Validated form → `/api/contact` with honeypot, rate limiting and optional Resend delivery. |
| **Chrome** | Drifting ambient orbs + shooting stars, custom glass cursor, glass menu, animated light/dark toggle with no flash on load. |
| **i18n** | Japanese / English under `/[lang]`, with `Accept-Language` detection and `hreflang` alternates. Every visible string is translated, so switching language changes the whole page. |
| **SEO** | Per-locale metadata, Open Graph, Twitter cards, JSON-LD, `sitemap.xml`, `robots.txt`. |
| **A11y** | Skip link, focus management on the menu, `prefers-reduced-motion` handling throughout, `inert` on the closed nav panel. |

---

## Getting started

```bash
npm install
npm run placeholders   # writes the placeholder SVG artwork into /public/images
npm run dev            # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # tsc --noEmit
npm run lint       # eslint

npm run dev:turbo    # dev via Turbopack   — see "Turbopack on Windows" below
npm run build:turbo  # build via Turbopack
```

### Turbopack on Windows

`dev` and `build` deliberately use the **webpack** builder. Turbopack writes its
manifests by renaming a temp file over the target, and on Windows an on-access
virus scanner can still hold that file open — which surfaces as:

```
Error: EBUSY: resource busy or locked, rename
'.next\dev\server\server-reference-manifest.json.tmp.xxxx' -> '...json'
```

Turbopack is meaningfully faster, so it is worth re-enabling. Add a Defender
exclusion for the project folder — **in an Administrator PowerShell**:

```powershell
Add-MpPreference -ExclusionPath "E:\Working\Github\personal-portfolio"
```

Then use `npm run dev:turbo` / `npm run build:turbo`. If those run clean, you can
swap the `dev` and `build` scripts back to `next dev` / `next build`.

This is purely a local-machine issue — Turbopack is fine on Linux and on Vercel,
so nothing here affects deployment.

---

## Making it yours

Everything you need to edit lives in `src/content/` — no component changes required.

| File | What it controls |
|---|---|
| [src/content/site.ts](src/content/site.ts) | Name, tagline, description, email, social links, the eight home-page images. |
| [src/content/profile.ts](src/content/profile.ts) | The entire ABOUT page — headline, bio, credentials, experience, skills, process, CTA. |
| [src/content/works.ts](src/content/works.ts) | Categories and projects. Each project generates a ring card **and** its detail page. |
| [src/content/formOptions.ts](src/content/formOptions.ts) | Contact form select options. |
| [src/content/privacy.ts](src/content/privacy.ts) | Privacy policy sections. |
| [src/i18n/dictionaries.ts](src/i18n/dictionaries.ts) | Every piece of UI chrome text, in both languages. |

Content strings are typed as `Localized` (`{ ja, en }`), so TypeScript tells you when a
translation is missing — including the navigation labels, section headings and the display
headline, which are all genuinely translated rather than left in English.

Product and brand names (`Figma`, `React`, the studio name itself) are deliberately identical
in both languages, since they are proper nouns.

### Adding or removing a language

Add the code to `LOCALES` in [src/i18n/config.ts](src/i18n/config.ts) along with its entry in
`LOCALE_LABELS` / `LOCALE_HREFLANG` / `LOCALE_OG`. TypeScript will then flag every content
object that is missing the new translation, so nothing can silently fall back to the wrong
language. Routing, the language switcher, `sitemap.xml` and the `hreflang` tags all derive
from that one array.

### Adding a project

Append an entry to `projects` in [src/content/works.ts](src/content/works.ts). The `slug`
becomes the URL (`/ja/works/your-slug`), `categoryKey` must match a `CATEGORIES` key, and
`order` controls its position in the ring.

### Swapping the artwork

Drop your files into `public/images/` and point the paths in `site.ts` / `works.ts` /
`profile.ts` at them. Square or portrait crops read best on the home ring; landscape
works best for project thumbnails.

The 3D ring and carousel use plain `<img>` on purpose — they sit inside a transform chain
that is rewritten every frame, so `next/image`'s wrapper would only get in the way.
Static images elsewhere are fine to migrate to `next/image` once you have real raster assets.

### Colours and type

Design tokens are the two `:root` blocks at the top of
[src/app/globals.css](src/app/globals.css) — one for light, one for dark. Change
`--bg`, `--ink`, the `--orb-*` colours and the two font stacks and the whole site follows.

The display font falls back through Didot → Bodoni → Georgia. To use a licensed display
face, add an `@font-face` rule and put it first in `--display-font`.

---

## Contact form delivery

Out of the box `/api/contact` validates the submission and logs it — the form works
immediately in development without any configuration.

To deliver real email, copy `.env.example` to `.env.local` and set:

```
CONTACT_TO=you@example.com
RESEND_API_KEY=re_...
RESEND_FROM=Portfolio <hello@your-domain.com>
```

Both `CONTACT_TO` and `RESEND_API_KEY` must be present before the route attempts delivery.
Swapping [Resend](https://resend.com) for another provider is a single `fetch` call in
[src/app/api/contact/route.ts](src/app/api/contact/route.ts).

The built-in rate limiter is per-instance and in-memory. On serverless hosting, put a
shared limiter (Upstash, Vercel KV) in front of the route for real protection.

---

## Deployment

Designed for Vercel — push the repo, import it, and set `NEXT_PUBLIC_SITE_URL` plus the
contact variables in the project settings.

The app uses middleware (for locale detection) and a route handler (for the form), so a
fully static export is not supported as-is. To host statically, remove
`src/middleware.ts` and `src/app/api/`, point the form at a third-party endpoint, and add
`output: "export"` to `next.config.ts`.

---

## Project structure

```
src/
  app/
    [lang]/              # root layout + all pages, one segment per locale
      layout.tsx         #   renders <html lang> — see note below
      works/[slug]/      #   generated project detail pages
      [...unmatched]/    #   claims unknown URLs so the localised 404 renders
      not-found.tsx      #   404 inside the locale layout
    not-found.tsx        # 404 for URLs matching no route (own document)
    api/contact/         # form endpoint
    globals.css          # design tokens + every component style
    sitemap.ts robots.ts
  components/            # Shell, header/footer, sphere, ring, cursor, ambient bg
  content/               # ← all editable content lives here
  i18n/                  # locale config + dictionaries
  proxy.ts               # redirects un-prefixed paths to a locale
scripts/
  generate-placeholders.mjs
```

### Why the root layout lives under `[lang]`

Putting it there is what lets `<html lang="ja">` / `<html lang="en">` be
**server-rendered** per locale. A static layout above the segment could not read
the locale without either `headers()` — which opts every page out of static
generation — or a script that patches `lang` after load.

The cost is that `app/not-found.tsx` has no layout above it, so it emits its own
`<html>`/`<body>`. Little reaches it: the proxy prefixes every request with a
locale, so unknown paths land on `[lang]/[...unmatched]` and are answered by
`[lang]/not-found.tsx` inside the normal layout.

One Next.js 16 behaviour worth knowing: **not-found boundaries are not
server-rendered.** The response carries the correct `404` status and the markup
in its streamed payload, but the HTML body is empty until React hydrates. This is
framework behaviour, not something this repo's structure causes — it was verified
across every arrangement. It does not affect SEO (404s are `noindex`) and is
invisible to anyone with JavaScript enabled.

---

## Licence

Code is yours to use. The design language is inspired by a third-party site — keep your own
content, artwork and identity so the result is genuinely yours.
