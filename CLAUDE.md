# michaelberea.com

Personal site for Michael Berea — software engineer (credit union core banking),
owner of Badger Stump Grinding, writer. Kenosha, Wisconsin.

Rebuilt July 2026, replacing a 2023 placeholder page.

## Stack

Next.js 14 App Router · static export (`output: 'export'`) · deployed to Netlify
from GitHub `michaelberea/michaelbereanextsite`, branch `master`.

```bash
npm install
npm run dev      # localhost:3000
npm run build    # static output to out/
```

Push to `master` triggers the Netlify build. Domain and DNS are on Netlify
(NS1 nameservers) — nothing about DNS should ever need to change.

## Hard constraints

- **Static export only.** No server components that fetch at runtime, no route
  handlers, no middleware, no `next/image` optimization (`unoptimized: true`).
- **Do not use `next/font`.** It requires network access at build time and has
  caused build failures. Fonts load via `<link>` to Google Fonts in
  `app/layout.js`. Keep it that way.
- **`optimizeFonts: false`** in `next.config.js` — leave it.
- **No `@netlify/plugin-nextjs`.** Static export produces a plain folder; the
  runtime plugin conflicts with it.
- `trailingSlash: true`, so internal links need the trailing slash: `/work/`.

## File map

| What | Where |
|---|---|
| All page copy, projects, roles, contact links | `lib/site.js` |
| Blog posts (markdown + frontmatter) | `content/posts/*.md` |
| Post loading, sorting, draft filtering | `lib/posts.js` |
| Design tokens, every style rule | `app/globals.css` |
| Nav items, metadata, font `<link>` | `app/layout.js` |
| Static assets (currently empty) | `public/` |

Content edits should almost always be `lib/site.js` or a markdown file — not
component files. That separation is deliberate; preserve it.

## Design system

Palette is Kenosha harbor — limestone paper, slate ink, oxidized copper accent,
brass on dark bands. Tokens live in `:root` in `app/globals.css`.

```
--ink #16212b   --paper #e9eae5   --paper-raised #f4f4f0
--slate #5a6b78 --patina #2f6b5c  --brass #b98a2e
```

Type: **Libre Franklin** (display, 700–800, tight tracking) / **Newsreader**
(body serif) / **IBM Plex Mono** (labels, eyebrows, metadata — always uppercase,
letter-spaced ~0.16em).

Libre Franklin has **no width axis**. Never add `font-variation-settings: "wdth"`.

### Rules to hold

- One accent color doing real work. Patina for links and interactive states,
  brass only on dark bands. Don't introduce a third.
- Hairline rules (`--rule`) separate sections. No card shadows, no border-radius
  anywhere. The design is flat and ruled on purpose.
- Motion is minimal: staggered `.rise` on page load, `.sweep` on the masthead
  rule, padding shift on entry hover. Nothing else. `prefers-reduced-motion` is
  fully handled — keep it that way.
- Body copy is capped at `--measure` (34rem). Don't let prose run full width.
- The **manifest** (the harbor-board list under the name) is the signature
  element. It's what makes the page memorable. Don't dilute it.

### Voice

Plain, direct, specific. Concrete nouns over abstractions. No marketing
register, no "passionate about," no em-dash-heavy throat-clearing. If a
sentence could appear on any engineer's site, it's wrong. Michael's own
phrasing beats polished template language every time — when in doubt, keep his.

## Open tasks

- [ ] **Photos.** The masthead slot is built (`.portrait` in `globals.css`,
      beside the manifest, grayscale + multiply already applied in CSS).
      `public/portrait.jpg` is a generated placeholder — shoot one
      environmental portrait (garage / Nighthawk / stump grinder) at 4:5,
      drop it in at the same path, and update `portrait.alt` in `lib/site.js`.
      Hand it a normal color photo; the CSS does the treatment. Skip project
      screenshots — they read as filler.
- [x] **OG image** — `public/og.jpg`, 1200×630, name in Libre Franklin 800 on
      `--ink` with a brass eyebrow and a mono footer rule. Wired into
      `metadata.openGraph.images` and `twitter.images` in `app/layout.js`.
- [ ] **Favicon** — `public/favicon.ico` plus an apple-touch-icon.
- [ ] `site.email` in `lib/site.js` is a placeholder. Set it or drop the
      contact entry.
- [ ] Several `projects[].href` values are empty strings — fill or leave (empty
      renders as non-clickable, which is handled).
- [ ] `site.church.url` is empty (CrossWay Community Church).
- [ ] `content/posts/legacy-seam.md` is a stub with `draft: true`. Finish or
      delete.
- [ ] `public/` is empty so git never committed it. It'll appear with the first
      asset.

## Deliberate decisions — don't undo without asking

- No analytics. If added, it should be something cookie-free.
- No newsletter signup, no social embeds, no CMS.
- Nothing about political ambitions or job searching appears on the site.
- Kids are referenced in the manifest but never named or pictured. The site is
  fully indexed (sitemap + robots), so this is a privacy call, not an oversight.
