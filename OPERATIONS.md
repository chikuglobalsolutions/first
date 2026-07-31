# OPERATIONS.md — How this repo maps to the Chiku Global Operations Registry

> **Purpose:** this repo and the Google Sheets Operations Registry have been maintained as
> two disconnected records of the same businesses — the registry (ChatGPT-maintained) had
> no reference to this codebase, and this codebase had no reference to the registry's
> project IDs. This file is the bridge. Read it before starting ops work from either side.

## The two systems of record

| Record | Lives in | Maintained by | Authoritative for |
|---|---|---|---|
| **Chiku Global Operations Registry** (Google Sheet) | Drive | ChatGPT (has Sheets write) | Project status, compliance deadlines, failure log, automation backlog |
| **Chiku Marketing Automation Queue** (Google Sheet) | Drive | ChatGPT | ChikuFit content queue, publish gate, run log |
| **This repo** (`chikuglobalsolutions/first`) | GitHub | Claude (has repo write) | Application code, deploy state, `GROWTH.md`, `ROUTINES.md` |
| `chikuglobalsolutions/promptempire-chiku` | GitHub | Claude | The live static PromptEmpire storefront |

Neither AI can write to the other's system. **Claude cannot write to the Sheets** (no
Sheets MCP write tool; Zapier has no authenticated Google connection). ChatGPT does not
commit to this repo. So handoffs must be explicit — see the protocol below.

## Registry project → codebase mapping

The registry tracks PRJ-001 … PRJ-012. These are the ones this repo actually implements:

| Registry ID | Registry name | Where it lives in this repo | Note |
|---|---|---|---|
| **PRJ-004** | PromptEmpire 500+ AI Prompts | `src/app/promptempire/**`, `src/lib/promptempire-*.ts` | Registry lists the system of record as a PDF + storefront and does not mention this app. Storefront verified live at `promptempire-chiku.netlify.app`; **sales unverified** (needs Stripe access). |
| **PRJ-002 / PRJ-003** | ChikuFit launch + publishing | `src/app/chiku-fit/**` | Registry's ChikuFit revenue path runs through **Shopify**, not this repo. This repo's chiku-fit pages are marketing surface only — don't confuse the two checkouts. |
| **PRJ-008** | AI Patient Communication (Dental) | `src/app/ai-systems/**`, `src/lib/ai-systems-data.ts` | The intake form at `/ai-systems` is the pipeline the registry says is missing. It cannot generate leads until the app is deployed. |
| **PRJ-011** | Shopify Parent Store & Email List | *partially* `src/app/api/leads`, `src/components/LeadMagnetForm.tsx` | Two competing email-capture paths now exist: Shopify's list and this app's `Lead` model. Pick one before scaling either. |
| — | QR generator (`qrflow`) | `src/app/generate`, `/dashboard`, `src/app/api/scan/**` | **Not in the registry at all.** Has a working Stripe subscription tier. |

**Proposed PRJ-013 — Web Application & Codebase.** There is no registry row that owns this
repo. Until one exists, deploy blockers found here have nowhere official to be recorded.

## Current hard blocker (blocks PRJ-004, PRJ-008, and the QR app)

`chikuglobalsolutions.com` **does not resolve** (DNS ENOTFOUND, verified 2026-07-31), and
the Next.js app in this repo has no confirmed live deploy. Until that is fixed:

- the gated `/delivery` download flow cannot serve a paying customer,
- the `/ai-systems` intake form cannot collect a lead,
- the QR generator cannot convert free → Pro,
- every marketing link pointing at the custom domain is dead.

`promptempire-chiku.netlify.app` (the *other* repo, static) is live and is currently the
only working storefront. This is why `GROWTH.md` §0 says to verify deploy health before
producing more content — content pointed at a dead domain earns nothing.

## Handoff protocol between Claude and ChatGPT

Because neither agent can write to the other's system:

1. **Claude → ChatGPT (registry updates).** Claude writes a dated delta file to Drive named
   `Claude Ops Run YYYY-MM-DD — Registry Delta`. It contains cell-level corrections and
   proposed new rows. ChatGPT applies them to the Sheet, then archives the file. The delta
   file is a patch, never a competing registry.
2. **ChatGPT → Claude (code/deploy work).** Open a GitHub issue on this repo, or add a row
   to the registry naming the repo and file path. Claude reads the repo, not the Sheet, at
   the start of a coding run.
3. **Run-lock.** Before either agent edits shared records, check the other's last-run
   timestamp — the registry's `Last Updated` cell and this repo's git log. Never overwrite a
   newer verified fact with an older one. If both ran the same day, work on non-conflicting
   items.
4. **Evidence rule (applies to both agents).** Nothing is marked complete, live, or
   published without external evidence: a live URL, a payment record, a platform ID, or a
   successful run log. A file existing is not evidence. A status field saying `PUBLISHED` is
   not evidence.

## Other repo docs and what they own

- **`GROWTH.md`** — marketing/growth source of truth for the four brands in this repo.
  Consolidates 17 duplicate tracker PRs. Edit in place; do not open a new tracker doc.
- **`ROUTINES.md`** — PromptEmpire's wired daily automation (trigger words, daily push,
  SEO push, lead-magnet drop). Real and code-backed. `GROWTH.md` defers to it.
- **`CLAUDE.md`** — engineering only (commands, architecture). No marketing or ops content.
- **`OBSIDIAN-UPDATE.md`** — live Stripe payment links and product status. Cross-check
  against the registry's compliance tab; the two have drifted before.

## Known duplication to resolve

Both the registry and this repo have accumulated parallel plans. Currently unresolved:

- **Email capture** — Shopify list (PRJ-011) vs. this repo's `Lead` model vs. the unmerged
  `EmailSubscriber` funnel in PR #25. Three implementations, no canonical choice.
- **ChikuFit checkout** — Shopify Digital Downloads (registry, blocked on a test purchase)
  vs. Gumroad links (referenced in `GROWTH.md` and `OBSIDIAN-UPDATE.md`, 2 of 3 URLs
  missing). Decide which one is real before promoting either.

---

*Maintained by Claude. Last verified 2026-07-31 against both registry spreadsheets, Gmail,
Google Calendar, and Drive.*
