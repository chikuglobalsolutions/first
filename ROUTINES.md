# Autonomous routines — Chiku Global Solutions

> The list of routines Claude Code can run on this repo without further instructions.
> The goal is the same as every other file in the company: **ship something that produces
> revenue every single day**.

## Trigger words

When the operator says any of these, run the matching routine:

| Trigger | Routine | What it does |
|---------|---------|--------------|
| "run the daily push" / "daily push" | [Daily push](#daily-push) | Ships one revenue-driving change + one marketing push |
| "weekly review" / "weekly push" | [Weekly review](#weekly-review) | Audits the week's pushes, kills what isn't working, doubles down on what is |
| "new SEO post" / "blog push" | [SEO blog push](#seo-blog-push) | Adds a new SEO-targeted blog post to `src/lib/promptempire-posts.ts` |
| "cold outreach batch" | [Cold outreach batch](#cold-outreach-batch) | Generates 25 personalized cold email drafts for a target vertical |
| "lead magnet drop" | [Lead magnet drop](#lead-magnet-drop) | Ships a free downloadable asset + opt-in path that grows the email list |
| "conversion audit" | [Conversion audit](#conversion-audit) | Reviews the top-of-funnel pages and ships at least one CRO change |

## Daily push

**Cadence:** every working day.
**Time budget:** 60–90 minutes of Claude time.
**Definition of done:** at least one merged PR + one ready-to-post marketing file.

Steps:

1. Pull `claude/funny-babbage-vhzvw4` and check `marketing/_LOG.md` for what shipped yesterday.
2. Pick **one** of these revenue levers — don't try to do all four:
   - **SEO blog post.** Add a new entry to `src/lib/promptempire-posts.ts`. Each post must
     target a buying-intent keyword (e.g. "chatgpt prompts for [task]", "[tool] vs [tool]",
     "ai prompts for [audience]").
   - **Conversion change.** Add a testimonial slot, urgency element, or trust badge to a
     top-of-funnel page. Measure baseline first via logs in `marketing/_LOG.md`.
   - **New product page.** Add a comparison page (`/promptempire/vs/[competitor]`) or
     use-case page (`/promptempire/for/[audience]`).
   - **Free lead magnet.** Ship a downloadable to `public/downloads/` + an opt-in flow.
3. Write the marketing collateral: `marketing/PUSH-YYYY-MM-DD.md` with **at least** one
   Reddit post, one X thread, one LinkedIn post, and one cold email — all using today's
   ship as the angle.
4. Update `marketing/_LOG.md` with placeholder rows for the day's sends.
5. Type-check, commit, push to `claude/funny-babbage-vhzvw4`, open a draft PR.

## Weekly review

**Cadence:** Mondays.
**Time budget:** 30 minutes.
**Definition of done:** the week's worst channel is paused, the best is doubled, and one
new experiment is queued.

Steps:

1. Read the last 7 days of `marketing/_LOG.md`.
2. Compute "channel-hours → sales attributed". Sort.
3. Pause the bottom channel for the week ahead (note it in `marketing/_LOG.md`).
4. Queue 2x volume on the top channel.
5. Pick one new experiment (a new sub, a new format, a new offer) and add it to next week's
   `PUSH-YYYY-MM-DD.md`.

## SEO blog push

Use when there's clear search demand we're not capturing.

Steps:

1. Pick a target query. Good shapes:
   - `chatgpt prompts for [task]`
   - `[tool] vs [tool]`
   - `ai prompts for [audience]`
   - `how to [task] with chatgpt`
   - `[task] template`
2. Add one entry to `POSTS` in `src/lib/promptempire-posts.ts`. Min: 1,500 words, ≥3 H2s,
   ≥1 FAQ block, ≥1 CTA block.
3. Sitemap and nav update automatically (`/promptempire/blog/[slug]` is data-driven).
4. Add one internal link to the new post from at least one existing PromptEmpire page.

## Cold outreach batch

Use when revenue is flat and we need pipeline.

Steps:

1. Pick a vertical (e.g. dental practices, marketing agencies, ADHD coaches).
2. Generate 25 prospect rows with: name, role, company, one personalization hook.
3. Write 3 message variants for the sequence (touch 1, touch 2, touch 3) using the cold
   outreach prompts in the 500-pack.
4. Save as `marketing/COLD-BATCH-YYYY-MM-DD.md`. Do **not** send via Claude — the operator
   sends from their own inbox to preserve domain reputation.

## Lead magnet drop

Use when we need to grow the email list more than we need direct sales today.

Steps:

1. Pick a high-utility, narrow asset (e.g. "10 cold email prompts that booked replies last
   month", "30-day content calendar PDF", "freelancer pricing calculator").
2. Generate the PDF or template. Store in `public/downloads/`.
3. Add an opt-in CTA to the most-trafficked page (currently `/promptempire/preview`).
4. Wire it to `/api/leads` (build the route if it doesn't exist; persist email + source).
5. Write the welcome email + the 3-touch nurture sequence in `marketing/NURTURE-[name].md`.

## Conversion audit

Use when traffic is OK but conversion is mediocre.

Steps:

1. List the top 5 most-trafficked pages (use Netlify Analytics or check sitemap priorities).
2. For each, identify the single weakest conversion element (no above-the-fold CTA, no
   social proof, no urgency, friction in checkout, etc.).
3. Pick the **one** page where a fix would compound most (usually `/promptempire`).
4. Ship the fix. Note before/after in `marketing/_LOG.md`.

## Guardrails

- Never push to `main`. Always to `claude/funny-babbage-vhzvw4`.
- Always type-check (`npx tsc --noEmit`) before committing.
- Never block on operator input for content choices — pick the angle, ship, log it, move on.
- Never hold a "perfect" piece of content — daily mediocre beats weekly excellent.
- Always update `marketing/_LOG.md` when shipping marketing collateral.
