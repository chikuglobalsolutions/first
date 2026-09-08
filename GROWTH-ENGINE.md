# GROWTH-ENGINE.md — Source of Truth for Marketing & Growth

> **What this file is.** The single source of truth for growing Chiku Global Solutions'
> four product lines. The daily growth routine reads this file, executes the day's play,
> and appends results to the **Daily Tracker** at the bottom. Over time this file
> accumulates what works, kills what doesn't, and feeds proven learnings back into
> `CLAUDE.md`.
>
> **Last updated:** 2026-09-08 (Day 1 — engine established)

---

## 0. Operating principles (read before acting)

1. **Compliant by default.** We do not scrape personal data, harvest emails, or send
   unsolicited cold email/DM blasts. Those violate platform Terms (Instagram, etc.) and
   anti-spam law (CAN-SPAM, GDPR, CASL), get our sending domain blacklisted, and convert
   near zero. Everything below is permission-based or public-content marketing instead.
2. **One owned asset per brand per day.** Compounding beats spray-and-pray. A post, a page,
   or an email to people who opted in — something that still exists and works next month.
3. **Measure or it didn't happen.** Every play logs to the Daily Tracker with a metric.
4. **Humans approve anything that goes out under the brand name.** Drafts are generated
   autonomously; publishing/sending to real audiences needs owner sign-off (see §5).

---

## 1. The four businesses

| # | Brand | What it sells | Monetization | Primary audience |
|---|-------|---------------|--------------|------------------|
| 1 | **PromptEmpire** | AI prompt packs (500 AI Business Prompts, 30-Day Content Machine, Email Empire Swipe File, Freelancer Command Center) | Stripe payment links (one-time digital) | Solopreneurs, freelancers, small-biz owners using AI |
| 2 | **Chiku Fit** | Fitness guides & programs | Digital product sales | People starting/restarting a fitness journey |
| 3 | **AI Systems** (Dental AI Agency) | Done-for-you automation: Lead Follow-Up Engine, Review Generation, Booking Optimization, AI Sales Assistant, Reactivation Campaigns, Reporting Automation | High-ticket service / retainer | Dental & medical practices, law firms, real estate, local services |
| 4 | **QR Generator** (qrflow) | QR codes + scan analytics | SaaS: Free / Pro $9/mo / Business $29/mo | Local businesses, marketers, event organizers |

---

## 2. The compliant growth engine (what replaces "scrape + blast")

Instead of scraping creators, each brand grows on three legal, compounding channels:

### A. Owned content (SEO + social)
Publish genuinely useful content that ranks and gets shared. This is the real version of
"find people in the niche" — you attract them instead of harvesting them.
- **PromptEmpire:** free prompt-of-the-week posts → email capture → tripwire pack offer.
- **Chiku Fit:** "beginner X in 15 min" guides and transformation carousels.
- **AI Systems:** case-study / ROI-calculator content for each industry in `ai-systems-data.ts`.
- **QR Generator:** "how to track [use case]" tutorials; the generator itself is the lead magnet.

### B. Permission-based email (the asset, done right)
- Capture emails on-site (lead magnets), not by scraping.
- Send via Resend (already wired in `src/lib/auth.ts`) **only to opted-in subscribers**.
- Keep transactional (receipts, magic links) and marketing streams separate to protect
  domain reputation.

### C. Partnerships & warm outreach (the legal way to reach creators)
The *legitimate* version of "reach creators in the niche": identify relevant public
accounts, then **manually, personally** reach out via their stated business contact or a
real DM with a genuine collaboration/affiliate offer — one at a time, disclosed, and only
where they invite contact. This is relationship-building, not list-harvesting. An affiliate
program (see §4) makes creators *want* to promote us.

---

## 3. Ready-to-ship content (generated Day 1 — pending owner approval to publish)

> These are drafts. Approve, then publish to the relevant channel. Logged in tracker once live.

### PromptEmpire — launch post / email
> **Hook:** "You don't need more AI tools. You need the right prompts."
> Most people open ChatGPT, freeze, and type something mediocre. The 500 AI Business
> Prompts pack gives you plug-and-play prompts for sales copy, cold emails, content
> calendars, and client work — organized so you find the right one in 10 seconds.
> → *[link to PromptEmpire checkout]*

### Chiku Fit — carousel / post
> **Hook:** "The 15-minute starting point for people who hate the gym."
> No equipment. No 2-hour sessions. Just the minimum effective dose to build the habit.
> Swipe for the 3-move routine → full program in the Chiku Fit guide.

### AI Systems — cold-adjacent LinkedIn/outbound (owner-sent, 1:1, not mass)
> **Subject:** Recovering the $8K/mo most practices leave on the table
> Practices lose revenue every week to leads that never get a second follow-up and patients
> who quietly lapse. Our Lead Follow-Up Engine + Reactivation Campaigns automate both —
> typical recovered revenue is $8K+/mo. Worth a 15-min look at your numbers?
> *(Send only to practices you have a legitimate business reason to contact.)*

### QR Generator — tutorial post
> **Hook:** "Your flyer has no idea if anyone scanned it. Fix that in 60 seconds."
> Generate a trackable QR code, see scans by device and time, and know which campaign
> actually worked. Free to start → *[link to /generate]*

---

## 4. Highest-leverage build (recommended next, needs owner go-ahead)

An **affiliate / referral program** is the compliant engine that makes creators promote us
*for* us — the real solution to "how do I get influencers in my niche." Give partners a
link + commission; they bring their audience willingly. This replaces scraping entirely and
scales all four brands. Flagged as the #1 growth investment; awaiting approval to scope/build.

---

## 5. What the daily routine does (and what it will NOT do)

**Each day the routine WILL:**
1. Read this file.
2. Pick the day's play from §2/§3 for one or more brands.
3. Generate/refine a concrete content draft or a small site/SEO improvement.
4. Commit drafts to the repo and append a row to the Daily Tracker.
5. Notify the owner with what's ready to publish and any decision needed.

**The routine will NOT (and cannot safely):**
- Scrape Instagram or any platform for emails/personal data.
- Send marketing email/DMs to anyone who hasn't opted in.
- Publish or send under the brand name without owner approval.

**Decisions needed from owner to unlock more automation:**
- [ ] Approve the §3 drafts for publishing (and confirm the live checkout/links).
- [ ] Green-light the §4 affiliate program build.
- [ ] Authorize a connected publishing channel (e.g. a managed social scheduler or an
      opted-in Mailchimp/Resend audience) if you want posting/sending automated.

---

## 6. Daily Tracker

| Date | Brand(s) | Play executed | Output (committed) | Metric / result | Next action |
|------|----------|---------------|--------------------|-----------------|-------------|
| 2026-09-08 | All 4 | Established growth engine; replaced scraping mechanic with compliant channels; drafted launch content for all 4 brands | `GROWTH-ENGINE.md` (this file) | Engine live; 4 content drafts ready | Owner approves §3 drafts & §4 affiliate program |

---

## 7. Learnings → feed back to CLAUDE.md

As plays prove out, promote durable facts here, then mirror the stable ones into `CLAUDE.md`:
- _(none yet — Day 1)_
