---
title: "Rebuilt"
date: "2026-07-28"
summary: "New site, and a note on why the old one sat untouched for three years."
---

The previous version of this site was a Next.js page I put up in 2023 and never
touched again. Three lines about myself and two links. It still listed a church
I no longer attend.

That's the normal failure mode for a personal site: you build it once, at the
exact moment you have the least to say, and then the cost of updating it exceeds
the benefit forever after.

So this one is built around the assumption that I'll change.

## How it works

All the copy lives in a single file — `lib/site.js`. Editing this site means
editing strings in one place and pushing. Posts are markdown files in
`content/posts/`; drop one in and it appears.

The `/now` page exists for the same reason. It's a low-stakes place to record
what season I'm in, which is the part of a personal site that actually goes
stale.

## Why bother at all

I spend my working hours inside a core banking platform older than I am,
translating between it and services that expect a JSON response in under two
hundred milliseconds. It's specific work, and there aren't many people who do
it. A site is where I put the parts of that down in public.

The rest of it — the stump grinder, the barbell app, the kids' memory work
tool — those are here because they're true, not because they make a coherent
brand.
