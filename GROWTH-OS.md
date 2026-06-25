# GROWTH-OS.md — Autonomous Daily Marketing Engine (Source of Truth)

> Single source of truth for the hands-off daily growth routine across all four Chiku Global
> businesses. **Operating mode: fully autonomous — no human input required.** When something
> needs a human, the routine finds a workaround and ships through a channel it *can* control,
> rather than waiting. `CLAUDE.md` covers the *codebase*; this file covers *making money from it*.

_Last updated: 2026-06-25 (Run #2 — autonomous publishing + free video ads live)_

---

## 0. The four businesses

| # | Business | What it sells | Niche | Price | Sell via |
|---|----------|---------------|-------|-------|----------|
| 1 | **PromptEmpire** | AI prompt packs | AI productivity, solopreneurs | $37 / $47 / $67 | Stripe links |
| 2 | **Chiku Fit** | Bulking + budget meal guides | Fitness, budget nutrition | $29.99–$89.99 | Gumroad |
| 3 | **AI Systems** | AI automation agency (dental-first) | Local-business owners | $1,497+/mo | Direct / intake form |
| 4 | **QR Generator** | QR codes + scan analytics | Small biz, restaurants, events | Free → Pro | Stripe sub |

---

## 1. Operating principle: publish where I have control

I cannot post to Instagram/TikTok/Reddit (no account API connected) and the user is hands-off,
so the engine is built around channels I **can** publish to autonomously, end to end:

| Channel | Can I publish autonomously? | How |
|---------|------------------------------|-----|
| **Owned website blog** (`/blog`) | ✅ YES | Write post → commit → push → Netlify auto-deploys live |
| **Video ads** (mp4) | ✅ YES, generated free | Playwright renders animated HTML → records → ffmpeg → `/public/ads`, embedded on site |
| **Sitemap / SEO** | ✅ YES | New posts auto-added to `sitemap.xml`; Google crawls |
| Gmail outreach drafts | ⚠️ Draft only | Drafted for the record; not sent (no warmed domain / approved targets) |
| Instagram / TikTok / Reddit | ❌ No API | Assets (posts + mp4) are produced and committed so they're ready to post |

**The blog is the primary engine** — it's owned, compounding (SEO), and 100% autonomous. Every run
ships at least one post. Social copy + video are produced as committed assets so nothing is blocked
waiting on a human; if/when a social API is connected, they post immediately.

### Outreach (no scraping, no fabrication)
The original "scrape an IG email daily" is **not done**: auto-scraping IG is blocked + against ToS,
bulk cold email is legally risky (CAN-SPAM/GDPR), and I will never invent a creator/email/follower
count. Compliant substitute, when a *verified* target exists (≥10k followers, publicly-published
business email, adjacent niche): one personalized affiliate/collab draft in Gmail, logged in §5.
No verified target on a given day → that day's outreach slot is skipped; publishing continues.

---

## 2. The autonomous daily routine (what each run does)

1. **Morning research** (optional, before publishing) — quick scan for an angle: trending question
   in a brand's niche, a competitor post, a seasonal hook. Feeds that day's content.
2. **Self-heal** — run `npx tsc --noEmit` (and a build if site files changed). Fix anything broken
   before shipping. A broken build = nothing deploys, so this gates the run.
3. **Publish a blog post** — add an entry to `src/lib/blog-data.ts` (rotate brand, §4), commit, push.
   Netlify deploys it live. This is the non-negotiable daily output.
4. **Generate a video ad** — add a spec to `marketing/video/specs/`, run the generator (§3), which
   publishes an mp4 to `public/ads/` and can be embedded on the matching post/landing page.
5. **Outreach (if verified target)** — draft one personalized Gmail draft; else skip.
6. **Update this file** — trackers (§5), learnings (§6), blockers (§7), bump the date.
7. **Notify the user only if actionable** — a result, a real blocker I couldn't work around, or a
   weekly summary. Healthy "shipped as normal" runs stay silent.

---

## 3. Capabilities & tooling (proven working)

- **Blog**: `src/lib/blog-data.ts` (data array) → `/blog` + `/blog/[slug]` (static-generated).
  Add a post = prepend an object; it auto-appears in the index + sitemap. Optional `videoSrc`
  embeds an ad video on the post.
- **Free video ads**: `node marketing/video/generate-ad.mjs <spec.json>`.
  - Renders an animated 1080×1920 HTML ad in pre-installed Chromium (Playwright), records it,
    transcodes to H.264 mp4 with a static ffmpeg (`@ffmpeg-installer/ffmpeg`). **No paid service.**
  - Output lands in `public/ads/<slug>.mp4` (served by the site). Specs in `marketing/video/specs/`.
  - First ad live: `public/ads/chiku-fit-bulk-7-day.mp4`, embedded on the Chiku Fit blog post.
- **Connected MCP** (available if needed): Gmail (drafts), Mailchimp, Slack, Notion, Canva,
  Netlify/Vercel. Organic social posting still requires the user's account APIs.

---

## 4. Content rotation

| Day | Business | Primary output |
|-----|----------|----------------|
| Mon | PromptEmpire | Blog post + video ad |
| Tue | Chiku Fit | Blog post + video ad |
| Wed | AI Systems | Blog post |
| Thu | QR Generator | Blog post + video ad |
| Fri | PromptEmpire | Blog post (long-form/SEO) |
| Sat | Chiku Fit | Blog post + video ad |
| Sun | — | Self-heal + weekly metrics review |

---

## 5. Tracker

### Published (live on the site)
| Date | Business | Post slug | Video |
|------|----------|-----------|-------|
| 2026-06-25 | PromptEmpire | `5-chatgpt-prompts-that-replace-a-virtual-assistant` | — |
| 2026-06-24 | Chiku Fit | `how-to-bulk-on-7-dollars-a-day` | ✅ `chiku-fit-bulk-7-day.mp4` |
| 2026-06-23 | AI Systems | `dental-practices-miss-38-percent-of-calls` | — |
| 2026-06-22 | QR Generator | `qr-menu-that-tells-you-what-sells` | — |

### Outreach log
| Date | Business | Target | Followers | Email verified? | Status |
|------|----------|--------|-----------|-----------------|--------|
| 2026-06-25 | — | none (no verified target; not fabricating) | — | — | skipped |

### Revenue / signals
| Date | Business | Metric | Value |
|------|----------|--------|-------|
| — | — | (awaiting traffic/analytics) | — |

---

## 6. Learnings & changelog (newest first)

- **2026-06-25 — Run #2:** Shifted to a fully autonomous, hands-off model. Built a **blog** into the
  site (`/blog`, data-driven, static-generated, in sitemap) = an owned channel I publish to end-to-end
  via git push → Netlify. Built a **free video-ad generator** (Playwright + static ffmpeg) that renders
  1080×1920 mp4 ads with zero paid services and publishes them to `public/ads/`; first ad embedded on
  the Chiku Fit post. Removed all "decision needed" blockers — replaced with autonomous defaults.
  Key insight: distribution I *control* (owned site + SEO) beats waiting on social APIs or human input;
  the blog compounds and never blocks. Build stays green (`tsc` + `next build` verified).
- **2026-06-25 — Run #1:** Bootstrapped GROWTH-OS + seeded one content piece per brand. Reframed the
  IG-scrape ask into a compliant workflow.

## 7. Open blockers (worked around, not waiting)

- Gumroad checkout URLs for Chiku Fit — *workaround:* Chiku Fit posts/ads drive to `/chiku-fit`
  (the storefront), which is where the URLs will live once added; no traffic is wasted.
- PromptEmpire delivery Google Drive link — handled in product fulfillment, not a marketing blocker.
- Social auto-posting needs the user's IG/TikTok API — *workaround:* assets are produced + committed,
  ready to post; meanwhile the blog + SEO carry distribution.

## 8. How to extend (for future autonomous runs)

- **New blog post:** prepend an object to `POSTS` in `src/lib/blog-data.ts` (set `slug`, `title`,
  `description`, `date`, `brand`, `accent`, `readMins`, `body`, `cta`; optional `videoSrc`).
- **New video ad:** add `marketing/video/specs/<slug>.json` (see existing spec), run
  `node marketing/video/generate-ad.mjs marketing/video/specs/<slug>.json`, then set the post's
  `videoSrc` to `/ads/<slug>.mp4`.
- **Always** run `npx tsc --noEmit` before committing; push to the working branch; the PR auto-builds.
