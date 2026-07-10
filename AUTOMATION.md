# AUTOMATION.md — connecting the site to Buffer, Zapier & Make

This is the setup guide for the automation layer. The **code side is done** — the
site fires structured events you can hang any automation off of. What's left is
account-level setup that only you can do (it needs your logins and, for the social
accounts, real identity/phone verification).

> **Ground rule (same as `MARKETING.md`):** everything here is opt-in and organic.
> We schedule *our own* content and react to *our own* signups. We do not auto-create
> throwaway accounts, auto-DM, auto-follow, or scrape — those break platform ToS and
> get accounts banned.

---

## What the code already does

`src/lib/automation.ts` POSTs a JSON event to a single webhook URL
(`AUTOMATION_WEBHOOK_URL`) whenever one of these happens:

| Event | Fired from | Payload |
|---|---|---|
| `subscriber.created` | `POST /api/subscribe` | email, brand, source, name |
| `subscriber.unsubscribed` | `GET /api/unsubscribe` | email |
| `intake.submitted` | `POST /api/intake` | businessName, businessType, contactEmail, contactName, preferredPlan |

Every event also includes `event`, `source`, and `occurredAt`. It's best-effort:
if the webhook is down or unset, signups and intake still work.

That one webhook is the bridge. Point it at Zapier or Make, and from there you can
run *anything* without touching the codebase again.

---

## Step 1 — Create the social accounts (manual, ~10 min each)

This part has to be you. Create/claim the handles you want on Instagram, TikTok,
X, LinkedIn, Facebook, Pinterest, YouTube — whichever fit each brand (see
`MARKETING.md` §1 for which platforms suit which brand). Use a password manager and
turn on 2FA. **Do not** use a tool/bot to register these — it's against every
platform's ToS and gets the accounts flagged immediately.

Suggested handles per brand are in `MARKETING.md`. Keep bios pointing to the brand
page (e.g. `chikuglobalsolutions.com/promptempire`) with the free lead magnet as the
hook.

## Step 2 — Connect Buffer (scheduling)

1. Sign in to **Buffer** and connect each social account from Step 1 as a channel.
2. Assign each channel to the right brand queue.
3. Bulk-load the starter content: open `content/buffer-queue.md`, and in Buffer's
   composer paste the posts for a brand into its channel. Set a posting schedule
   (the suggested cadence is in that file and in `MARKETING.md` §3).
4. That's your baseline. Refill weekly from `content/<brand>/launch-pack.md`.

> No Buffer connector is available in this session, so I can't push to Buffer for
> you — but the content is written and formatted so loading it is a copy/paste.

## Step 3 — Wire the webhook to Zapier (or Make)

**Zapier**
1. Create a new Zap. Trigger: **Webhooks by Zapier → Catch Hook**. Copy the custom
   webhook URL it gives you.
2. Put that URL in your production env as `AUTOMATION_WEBHOOK_URL` and redeploy.
3. Do a test signup on the site — Zapier will capture the sample event.
4. Add actions. Common ones:
   - **New subscriber → Mailchimp**: add/update subscriber (belt-and-suspenders; the
     app already syncs, so use this only if you prefer Zapier to own it).
   - **New subscriber → Google Sheets**: append a row (simple master list / backup).
   - **New subscriber → Slack/Email**: notify you.
   - **Intake submitted → Slack + Google Sheet + a task in your PM tool**: hot leads.
5. Filter by the `brand` or `event` field if you want per-brand routing.

**Make.com** (if you prefer it)
1. New scenario → module **Webhooks → Custom webhook** → Add → copy the URL.
2. Set it as `AUTOMATION_WEBHOOK_URL`, redeploy, run a test signup so Make learns the
   data structure.
3. Add downstream modules (Buffer, Sheets, Slack, Airtable, etc.).

### A note on "auto-post to social from a signup"
Buffer's public API for programmatic posting is limited, so the reliable pattern is:
**you schedule content in Buffer** (Step 2), and **Zapier/Make handles event-driven
reactions** (Step 3) — new lead → notify/route/log. Trying to auto-generate and
auto-publish social posts with no human in the loop is how brands end up posting
garbage or tripping spam filters; keep a human approving the queue.

---

## Quick test checklist

- [ ] `AUTOMATION_WEBHOOK_URL` set in prod, redeployed
- [ ] Test signup → event shows up in Zapier/Make
- [ ] Buffer channels connected, first week of `buffer-queue.md` scheduled
- [ ] Intake form test → lead lands wherever you routed it
- [ ] Resend domain verified so the welcome email actually sends (see `MARKETING.md` §8)
