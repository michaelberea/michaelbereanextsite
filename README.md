# michaelberea.com

Next.js 14 (App Router), static export, deployed to Netlify.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site lands in out/
```

## Editing

| What                     | Where                          |
|--------------------------|--------------------------------|
| All page copy, projects, roles, links | `lib/site.js`     |
| Blog posts               | `content/posts/*.md`           |
| Colors, type, spacing    | `app/globals.css` (`:root`)    |
| Nav items                | `app/layout.js` (`NAV`)        |

New post = new markdown file:

```markdown
---
title: "Post title"
date: "2026-08-01"
summary: "One line for the index page."
draft: false
---

Body in markdown.
```

Set `draft: true` to keep it out of the build.

## Deploying to Netlify

The domain is already on Netlify DNS (NS1 nameservers), so nothing about
DNS changes.

1. Push this to a GitHub repo.
2. In Netlify: **Site configuration → Build & deploy → Link to a different
   repository**, point the existing `michaelberea.com` site at the new repo.
3. Build settings come from `netlify.toml` — command `npm run build`,
   publish directory `out`. Netlify should read these automatically.
4. Deploy. Domain and SSL carry over untouched.

If you'd rather test first, create a *new* Netlify site from the repo, check
the `*.netlify.app` preview URL, then move the custom domain over when you're
happy.

## Before you go live

- [ ] Set a real address for `site.email` in `lib/site.js`, or delete that contact entry
- [ ] Add `public/og.jpg` (1200×630) and a `public/favicon.ico`
- [ ] Add the CrossWay URL in `site.church.url`
- [ ] Fill in the empty `href` fields on projects in `lib/site.js`
- [ ] Delete or finish `content/posts/legacy-seam.md` (currently a draft)
- [ ] Delete the committed `out/` directory — it's here so you can eyeball the
      build; it's already in `.gitignore`
