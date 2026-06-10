// Source of truth for the PromptEmpire blog.
// Posts are SEO-targeted around buying-intent keywords for the 500 AI Business Prompts pack.
// Add new entries here — both the index (/promptempire/blog) and the slug route
// (/promptempire/blog/[slug]) render from this list, so new posts ship with one change.

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO date — used for the visible byline and lastModified in the sitemap. */
  date: string;
  /** Category shown as a chip on cards + post header. */
  category: string;
  /** ~8-12 minute pillar posts. Reading time is derived from `body` word count. */
  body: PostBlock[];
  /** Optional FAQ block rendered with schema.org FAQPage JSON-LD. */
  faq?: { q: string; a: string }[];
};

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "code"; label?: string; text: string }
  | { type: "cta"; text: string };

export const POSTS: Post[] = [
  {
    slug: "chatgpt-prompts-for-cold-email",
    title: "12 ChatGPT prompts for cold email that actually book replies (2026)",
    description:
      "12 battle-tested ChatGPT cold email prompts — opener, value-first, follow-ups, reply handlers, re-engagement — with copy-paste templates and a 5-step send checklist.",
    date: "2026-06-09",
    category: "Cold Outreach",
    body: [
      {
        type: "p",
        text: "Most cold email prompts you find online are designed to impress an AI demo, not to book a reply. The prompts below are the ones that actually move pipeline for freelancers, agencies, and SaaS founders sending to cold lists in 2026. Every one is structured the way ChatGPT (and Claude/Gemini) handle best: give it a role, a constraint, a structure, and one specific output.",
      },
      {
        type: "p",
        text: "These are the exact patterns inside the 500 AI Business Prompts pack — pulled out so you can run them today, in any free AI tier, and start booking replies tomorrow.",
      },
      { type: "h2", text: "What separates a cold-email prompt that works from one that doesn't" },
      {
        type: "ul",
        items: [
          "It names the recipient role and the company context — generic prompts produce generic emails.",
          "It constrains tone and length — every word past sentence four is overhead.",
          "It demands a low-friction ask — the goal is a reply, not a signed contract.",
          "It bans the words that scream AI: 'revolutionize', 'leverage', 'unlock', 'in today's fast-paced'.",
        ],
      },
      { type: "h2", text: "Prompt 1 — The 'genuine curiosity' opener" },
      {
        type: "p",
        text: "Books 4–8% reply rates because it doesn't smell like a pitch. Use this for warm-ish prospects you found via a podcast, post, or recent announcement.",
      },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `Write a 4-sentence cold email to [PROSPECT NAME], who is the [TITLE] at [COMPANY].
Structure:
1. Open by referencing one specific thing they posted/said recently about [TOPIC]
2. Briefly explain how I help companies like theirs solve [SPECIFIC PROBLEM]
3. Mention one concrete result I delivered for a similar company
4. End with a low-friction ask: "Would it be helpful if I sent over a 90-second video showing exactly how this would work for [COMPANY]?"
Tone: confident peer, not desperate vendor. No exclamation marks. No "I hope this finds you well."`,
      },
      { type: "h2", text: "Prompt 2 — The 'value-first' opener" },
      {
        type: "p",
        text: "Use this for fully cold lists where you have no warm thread. The trade is concrete value up front in exchange for the read.",
      },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `Write a 5-sentence cold email to [TITLE] at [COMPANY TYPE]. The first sentence is a one-line, concrete insight about [THEIR INDUSTRY] that they probably do not know.
The second sentence connects that insight to a real problem it causes them.
The third sentence is one sentence about how I solve that problem.
The fourth sentence offers a 1-page audit (free) showing them exactly where they're losing money on this.
The fifth sentence asks for one word back: "audit?" or "no thanks."
Tone: direct, expert peer. No fluff.`,
      },
      { type: "h2", text: "Prompt 3 — Subject line generator that actually gets opened" },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `Generate 10 cold-email subject lines for an outreach to [TITLE] at [COMPANY] about [TOPIC]. Constraints:
- Max 5 words each
- No clickbait, no all-caps, no emojis
- Half should sound like an internal coworker subject (e.g. "quick q on [topic]")
- Half should reference a specific outcome (e.g. "3 missed [thing] last quarter")
- None can include the words "opportunity", "partnership", "circle back", "synergy"
Output as a plain numbered list.`,
      },
      { type: "h2", text: "Prompt 4 — Follow-up #2 (the 'still curious?' nudge)" },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `Write follow-up email #2 (sent 4 days after the first) for the cold sequence above. Constraints:
- 3 sentences max
- Sentence 1: one-line context reminder (no apology for emailing again)
- Sentence 2: one new piece of useful info — a stat, a result, or a tactic that would be useful even if they never reply
- Sentence 3: a yes/no question they can answer in 5 seconds
Do NOT use the phrases "bumping this up", "circling back", "just following up".`,
      },
      { type: "h2", text: "Prompt 5 — Follow-up #3 (the 'breakup' close)" },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `Write the final follow-up email (sent 8 days after the first) for the sequence above. This is the breakup email.
- 4 sentences
- Sentence 1: acknowledge their timing might be off
- Sentence 2: name the specific cost of inaction (in their terms)
- Sentence 3: offer one final, low-friction door — "if it's a no for now, here's [ONE USEFUL THING I'll share with no reply needed]"
- Sentence 4: make it clear you won't follow up again
Tone: gracious, not passive aggressive. Calm authority.`,
      },
      { type: "h2", text: "Prompt 6 — Reply handler: 'we already use [competitor]'" },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `A cold-email prospect replied: "Thanks but we already use [COMPETITOR]."
Write a 4-sentence response that:
1. Validates [COMPETITOR] without disparaging them
2. Asks one specific question about the part of their workflow [COMPETITOR] handles worst (you should NAME it specifically based on what [COMPETITOR] is weak at)
3. Offers a concrete data point that's only relevant if my answer to (2) is "yes that's a problem for us"
4. Suggests a 15-minute look, not a "demo"
No defensive language. No "we're better because…"`,
      },
      { type: "h2", text: "Prompt 7 — Reply handler: 'send me more info'" },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `A cold-email prospect replied: "Sounds interesting — can you send more info?"
This is the riskiest reply: 80% of people who say this never reply to attachments.
Write a 3-sentence response that:
1. Acknowledges what they're really asking (do they trust me enough to spend 15 minutes)
2. Offers a 4-minute Loom (or PDF) walkthrough scoped to ONE specific outcome relevant to [THEIR COMPANY]
3. Asks one clarifying question that tells me which version to send
Tone: peer, not eager-to-please. No "happy to send anything you'd like!"`,
      },
      { type: "h2", text: "Prompt 8 — The case-study-as-email" },
      {
        type: "p",
        text: "Best used as touch 3 or as a re-engagement email to dead leads. It's a story, not a pitch.",
      },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `Write a 130-word email to [TITLE] at [COMPANY TYPE] in the format of a mini case study.
- Sentence 1: name a [COMPANY TYPE] that had [STARTING PROBLEM]
- Sentences 2-3: name 2-3 specific things they tried that didn't work
- Sentences 4-5: name what worked, in plain words
- Sentence 6: name the outcome with a number
- Sentence 7: ask if they'd want to see what we did, in 1 page
Do NOT mention my company until sentence 7. Voice: conversational, not "Inc. Magazine".`,
      },
      { type: "h2", text: "Prompt 9 — Re-engagement: 'hey, still relevant?'" },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `Write a 3-sentence re-engagement email to a cold-list prospect I emailed [N MONTHS] ago who never replied. The new context is: [NEW STAT, RESULT, OR PRODUCT CHANGE THAT IS GENUINELY USEFUL].
- Sentence 1: acknowledge it's been a while, no apology
- Sentence 2: share the new info as if you'd share it with a peer (no pitch)
- Sentence 3: ask whether the original problem [PROBLEM] is still relevant — yes/no
The reader should be able to reply with one word.`,
      },
      { type: "h2", text: "Prompt 10 — LinkedIn connect message that mirrors the email" },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `Write a 280-character LinkedIn connection request to [TITLE] at [COMPANY] that mirrors this cold email I'm sending: [PASTE YOUR EMAIL].
- No "I'd love to connect" or "would love to add you to my network"
- Reference ONE specific thing from their profile
- Name the topic of the email so they know what's coming
- End with a one-line ask: "Open to a brief look?"`,
      },
      { type: "h2", text: "Prompt 11 — Personalization research (5 lines per prospect, in 30 seconds)" },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `You're my SDR researcher. For each prospect I paste below, output exactly 5 bullets — each bullet is a single fact I can reference in a cold email.
Bullets must be:
1. Something they personally posted/said in the last 90 days (not their company news)
2. A specific decision they're known for
3. A team or hire signal
4. A funding/revenue signal
5. A pet peeve, hot take, or opinion they've shared
Skip if any of the above are not findable. Keep each bullet to one sentence. No fluff.
Prospect: [PASTE LINKEDIN URL OR NAME + COMPANY]`,
      },
      { type: "h2", text: "Prompt 12 — Pre-send sanity check" },
      {
        type: "p",
        text: "Run this on every email before you send to a cold list. It catches the AI-flavored mistakes that tank reply rates.",
      },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `Audit this cold email for the following failure modes:
1. Generic openers ("I hope this finds you well", "I came across your profile")
2. AI tells: "leverage", "unlock", "revolutionize", "in today's fast-paced", "as a"
3. More than 1 CTA
4. Longer than 6 sentences
5. Vague claims with no numbers
6. A close that asks for too much (a meeting before a reply)
Output: a clean rewrite that fixes all issues, plus a one-line note on what you changed.
Email: [PASTE EMAIL]`,
      },
      { type: "h2", text: "The 5-step send checklist (use before every batch)" },
      {
        type: "ol",
        items: [
          "Warm the sending domain — at least 14 days of healthy traffic before cold sends.",
          "Cap the daily volume per sending address at 30–50 sends in the first 30 days.",
          "Validate the list against a hard-bounce service (every cold send pings your sender rep).",
          "Send between Tue–Thu, 8:30am–11am in the recipient's time zone.",
          "Reply to your own send within 4 hours if it's missed — bottom of the inbox is the same as the trash.",
        ],
      },
      { type: "h2", text: "What's inside the full 500-prompt pack" },
      {
        type: "p",
        text: "The cold outreach category alone has 60+ prompts: openers (8 frameworks), follow-ups (cadences 2–8), reply handlers for the 9 most common objections, LinkedIn DM sequences, dead-lead re-engagement, and SDR research templates. The rest of the pack covers sales pages, content, SOPs, support, finance, launches, and lead gen — 500 total, organized for copy-paste-ship.",
      },
      { type: "cta", text: "Get the full 500-prompt pack" },
    ],
    faq: [
      {
        q: "Do these ChatGPT prompts work in the free tier?",
        a: "Yes. Every prompt above runs in free ChatGPT, Claude, or Gemini. You do not need a paid ChatGPT Plus subscription.",
      },
      {
        q: "How do I personalize the bracket placeholders?",
        a: "Fill in [PROSPECT NAME], [TITLE], [COMPANY], [TOPIC], etc. before pasting. The brackets are deliberate — they force you to do the 30 seconds of research that makes the email feel hand-written.",
      },
      {
        q: "How many prompts are in the full library?",
        a: "500 — across 10 business categories (cold outreach, sales pages, content, client onboarding, SOPs, customer support, research, finance, launch sequences, and lead generation).",
      },
    ],
  },
  {
    slug: "do-you-need-chatgpt-plus",
    title: "Do you really need ChatGPT Plus in 2026? An honest breakdown for solopreneurs",
    description:
      "A side-by-side look at free ChatGPT vs ChatGPT Plus for solopreneurs and freelancers in 2026 — what you actually get for $20/mo, when it's worth it, and the prompts that close most of the gap.",
    date: "2026-06-09",
    category: "Tools",
    body: [
      {
        type: "p",
        text: "Short answer: most solopreneurs do not need ChatGPT Plus to run their business in 2026. The free tier already gives you the model that writes cold emails, sales pages, content calendars, and SOPs at a quality that closes clients. The real gap is not the model — it's the prompts you bring to it.",
      },
      {
        type: "p",
        text: "Here's the honest breakdown of what $20/month actually buys you, where it's worth it, and where it isn't.",
      },
      { type: "h2", text: "What ChatGPT Plus gives you over free in 2026" },
      {
        type: "ul",
        items: [
          "Higher message caps on the flagship model (you can run more long jobs back-to-back).",
          "Priority access during peak times (no 'try again later' on a Monday morning).",
          "Faster image generation and longer file uploads.",
          "Custom GPTs you can share with a team.",
          "Voice mode with lower latency.",
        ],
      },
      { type: "h2", text: "What free ChatGPT already covers for a solopreneur" },
      {
        type: "ul",
        items: [
          "Long-form copy: sales pages, landing pages, emails, ad scripts.",
          "Research & summaries: competitor analysis, market sizing, positioning.",
          "Content production: 30-day calendars, threads, captions, scripts.",
          "Operations: SOPs, hiring briefs, JD writing, project briefs.",
          "Customer support: refund replies, FAQ answers, escalation handling.",
        ],
      },
      { type: "h2", text: "The real test: does your business actually hit the message cap?" },
      {
        type: "p",
        text: "Most solopreneurs use ChatGPT in short bursts — write a cold email, write a follow-up, draft a sales page, draft a calendar. None of that pushes the free cap on its own. The people who genuinely need Plus are:",
      },
      {
        type: "ul",
        items: [
          "Content agencies generating 30+ pieces a day for clients.",
          "Operators running long-context research jobs (data analysis, document review).",
          "Teams that need shared Custom GPTs as part of their delivery.",
          "Folks who depend on the voice mode for hands-free work.",
        ],
      },
      { type: "h2", text: "Where Plus is genuinely worth $20/mo" },
      {
        type: "p",
        text: "If you're running 4+ hours of AI-assisted work per day, hit message caps weekly, or use file uploads to handle long PDFs, Plus pays for itself in time saved. Otherwise, you're paying $240/year for capacity you won't use.",
      },
      { type: "h2", text: "Where Plus is not worth it for a solopreneur" },
      {
        type: "ul",
        items: [
          "You write 5–10 short prompts a day → free covers it.",
          "You're not on the platform for hours at a stretch → free covers it.",
          "You don't need image generation in your workflow → free covers it.",
          "You're not building Custom GPTs to share with a team → free covers it.",
        ],
      },
      { type: "h2", text: "The bigger lever: better prompts close 90% of the gap" },
      {
        type: "p",
        text: "Most of the difference between 'mediocre ChatGPT output' and 'this could be a billable deliverable' comes from prompt structure, not the model tier. A free-tier model with a well-structured, role-defined, output-formatted prompt will outperform Plus with a vague 'write me a cold email' every time.",
      },
      {
        type: "p",
        text: "Patterns that close the gap on free ChatGPT:",
      },
      {
        type: "ol",
        items: [
          "Give the model a role: 'You are a B2B SaaS copywriter who has shipped 200 cold sequences.'",
          "Give it the constraint: '4 sentences max, no exclamation marks, ban the words leverage and unlock.'",
          "Give it the output format: 'Output as a plain numbered list — no preamble.'",
          "Give it the failure modes: 'Do not write a generic opener. Do not write a 'hope this finds you well' sentence.'",
          "Give it the audience: '[ROLE] at [COMPANY TYPE], reads ~3 emails before a coffee.'",
        ],
      },
      { type: "h2", text: "A working example: same model, two prompts, two outputs" },
      { type: "h3", text: "Weak prompt (what most people type):" },
      {
        type: "quote",
        text: "Write me a cold email to a dentist about my AI agency.",
      },
      { type: "h3", text: "Strong prompt (same free model):" },
      {
        type: "code",
        label: "Paste into free ChatGPT",
        text: `You are a B2B copywriter who has written 150+ cold emails for AI agencies into the dental vertical.
Write a 4-sentence cold email to the practice owner of a 2–4 chair private dental practice in the US.
Sentence 1: reference the specific cost of a missed evening call to a private practice (use a real number, e.g. average new-patient lifetime value).
Sentence 2: name what we do in 12 words or less.
Sentence 3: one concrete result from a similar 3-chair practice.
Sentence 4: ask whether they'd like to see a 90-second walkthrough — yes/no.
Constraints:
- No exclamation marks.
- Do not use the words "revolutionize", "leverage", "unlock", "as a".
- Do not say "I hope this finds you well".
- Voice: peer, not vendor.`,
      },
      {
        type: "p",
        text: "Same model. Wildly different output. Better prompts beat better models — and they're free.",
      },
      { type: "h2", text: "TL;DR" },
      {
        type: "ul",
        items: [
          "Free ChatGPT is enough for 90% of solopreneur copy and ops work in 2026.",
          "Plus is worth it if you hit caps weekly, run long-context jobs, or rely on voice/Custom GPTs.",
          "Better prompts produce a bigger output lift than a better model.",
          "If you're going to invest $20/mo somewhere, invest it in a structured prompt library you can reuse — that's where the leverage is.",
        ],
      },
      { type: "h2", text: "What this means for your AI spend" },
      {
        type: "p",
        text: "If you're not hitting caps, skip the $240/year and put the money toward a once-paid prompt library you'll use 500 different ways. The 500 AI Business Prompts pack is built for exactly this audience: solopreneurs and freelancers who want pro-level output from a free model, with no subscription.",
      },
      { type: "cta", text: "See the 500-pack — once paid, used forever" },
    ],
    faq: [
      {
        q: "Will free ChatGPT really write a good cold email?",
        a: "With a well-structured prompt, yes — easily. The prompts in the 500-pack are designed to produce billable-quality output on the free tier.",
      },
      {
        q: "What does ChatGPT Plus give me that free does not?",
        a: "Higher message caps, priority access at peak times, faster image generation, longer file uploads, Custom GPTs you can share, and lower-latency voice mode.",
      },
      {
        q: "If I'm already paying for Plus, will I still benefit from a prompt library?",
        a: "Yes — the prompt structure does most of the work. A Plus subscription with weak prompts produces weak output. The library gives you the patterns.",
      },
    ],
  },
  {
    slug: "ai-prompts-for-adhd-entrepreneurs",
    title: "AI prompts for ADHD entrepreneurs: a starter pack to beat decision paralysis",
    description:
      "Practical ChatGPT prompts for entrepreneurs with ADHD — for the 9am 'where do I start' freeze, the 3pm task-switching crash, and the open-loop pile-up that kills momentum.",
    date: "2026-06-09",
    category: "ADHD",
    body: [
      {
        type: "p",
        text: "If you have ADHD and you run your own business, the blank screen isn't a productivity problem — it's a starting-energy problem. AI prompts won't fix executive function, but the right ones can take the activation cost of a task down from 'three hours of avoiding it' to 'open ChatGPT, paste, edit, send'.",
      },
      {
        type: "p",
        text: "This is a starter pack of the prompts that have helped me, and a few hundred other ADHD entrepreneurs who've bought the 500-pack, ship more of the small daily things without the meltdown.",
      },
      { type: "h2", text: "Why ADHD makes generic prompts almost useless" },
      {
        type: "p",
        text: "A typical 'write me a cold email' prompt requires you to know what you want before you've started thinking. That's the opposite of how ADHD brains generate. The prompts below all do the same thing: they give your brain a structured rail to ride, so the output starts before the executive function has to engage.",
      },
      { type: "h2", text: "Prompt 1 — The 'what should I do first' triage" },
      {
        type: "p",
        text: "Open this when you sit down at 9am and feel the freeze. It's not a planning prompt — it's a 'pick one thing for me' prompt.",
      },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `I have ADHD. I am at my desk and frozen. Here is everything on my plate right now — paste of email subjects, Slack pings, todos, client deadlines, and personal stuff:
[PASTE EVERYTHING. MESSY IS FINE.]

Do the following:
1. Pick the ONE thing I should do first. Just one. The criteria: highest dollar impact AND lowest activation energy.
2. Write the first 60 seconds of doing it for me. Literally: "Open X. Click Y. Type Z."
3. Tell me what I do with everything else — defer, delegate, delete. Be ruthless. Pick for me.
4. Tell me when (specific time today) I should look at the deferred pile next.
Do not write a plan. Do not write headlines. Just do the steps above in plain language.`,
      },
      { type: "h2", text: "Prompt 2 — The 'one-screen email' prompt" },
      {
        type: "p",
        text: "ADHD inbox dread is real. This prompt turns the worst email in the pile into a 4-sentence reply you can send and close the loop.",
      },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `I have ADHD and I've been avoiding this email for [N] days. Here it is:
[PASTE EMAIL]

Write a 4-sentence reply for me that:
1. Acknowledges what they're asking for without apologizing for the delay
2. Answers the core question or makes one concrete next move
3. Names what I'll do next and by when (give me a date)
4. Closes the loop — no "let me know!"
The reply must be sendable as-is. No "[insert detail]" placeholders. Make assumptions if needed.`,
      },
      { type: "h2", text: "Prompt 3 — The 'rubber duck' before a hard decision" },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `I have ADHD and I'm stuck on a decision. Here it is in plain words:
[DESCRIBE THE DECISION IN ONE MESSY PARAGRAPH]

Be my rubber duck. Specifically:
1. Reflect the decision back to me in 2 sentences, in cleaner language than I used.
2. Name the 3 actual options on the table (not the 12 my brain is generating).
3. For each option, give me: the cost in money, the cost in time, the cost in energy.
4. Tell me what additional info I'd need to choose — and what the default is if I don't get that info in 48 hours.
5. Recommend one. Be opinionated. I will push back if I disagree.`,
      },
      { type: "h2", text: "Prompt 4 — The 'one open loop a day' closer" },
      {
        type: "p",
        text: "Open loops are the ADHD tax. This prompt picks one and closes it.",
      },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `Here is my list of open loops (stuff I started and didn't finish). Paste:
[PASTE THE LIST]

For ONE loop today, do the following:
1. Pick the loop with the highest "you'll feel relief when it's done" score.
2. Write the next action for it in plain words — one sentence, starts with a verb.
3. Write the message I need to send to whoever's on the other end (client, vendor, IRS, whoever). Make it sendable as-is.
4. Tell me what to do with the rest of the list — defer, delegate, delete. Pick for each.`,
      },
      { type: "h2", text: "Prompt 5 — The 3pm 'I have 90 minutes left' prompt" },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `I have ADHD and it's 3pm. I have ~90 minutes of focus left in the tank. Here's what I haven't done today:
[PASTE]

Pick ONE thing to do with the remaining 90 minutes. Criteria:
- Must produce a finished, shippable thing (not "make progress on" something).
- Must be high enough impact that it's worth the last 90 minutes.
- Must be small enough that I can actually finish it.
Output: the chosen task in one line, then literally the first 3 steps in order, starting with a verb each.
Then tell me which 2 things on the list I should defer to tomorrow — and which 1 I should kill entirely.`,
      },
      { type: "h2", text: "Prompt 6 — The 'shrink the scary task' prompt" },
      {
        type: "p",
        text: "When a task is big enough to trigger avoidance, this prompt cuts it into pieces that fit your working memory.",
      },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `I have ADHD and I've been avoiding this task for [N] days because it's too big and I don't know where to start:
[DESCRIBE THE TASK]

Cut it into pieces. Specifically:
1. Name the smallest possible "Step 0" — something that takes under 5 minutes and doesn't require any decisions. (e.g. "Open the document and type the heading.")
2. List Steps 1–7 in order. Each step must be doable in under 30 minutes. Each step must result in a tangible output (a file, a sent email, a paragraph).
3. Tell me which step is the hardest, so I can save it for when I have focus.
4. Tell me which steps I can do badly on the first pass and clean up later.
The goal is to make Step 0 so small that there's no excuse not to start.`,
      },
      { type: "h2", text: "Prompt 7 — The 'externalize my working memory' brain dump" },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `Here's my brain right now. It's a mess. I'll paste, you'll organize:
[PASTE EVERYTHING — tasks, ideas, worries, half-thoughts, reminders. No structure.]

Output:
1. Top 3 things that ARE actually urgent (define: deadline in <48h or money on the line)
2. Top 3 ideas worth keeping but parking — give them a 1-week review date
3. Anything I can delete without checking back. Be aggressive.
4. Anything I should delegate. Name the person if I gave you context.
5. One thing I should do RIGHT NOW for 10 minutes.`,
      },
      { type: "h2", text: "How to use these prompts without making them another open loop" },
      {
        type: "ol",
        items: [
          "Save them in your Notes app, named what they DO (not what they ARE).",
          "Pick ONE prompt to use today. Not three. One.",
          "Use the same prompt at the same time of day for a week — make it muscle memory.",
          "If a prompt's output isn't usable, edit the prompt, not your behavior.",
          "When you find a prompt that consistently unblocks a specific task, lock it in and stop looking for a better one.",
        ],
      },
      { type: "h2", text: "What's in the full pack" },
      {
        type: "p",
        text: "The 500 AI Business Prompts pack is built specifically with ADHD entrepreneurs in mind — every prompt has the role, the constraints, the output format, and the failure-mode bans pre-loaded, so you can copy, paste, and get usable output without the executive function tax. 10 categories. Works on free ChatGPT, Claude, or Gemini. Buy once, use forever.",
      },
      { type: "cta", text: "Get the 500-pack — built for ADHD brains" },
    ],
    faq: [
      {
        q: "Do I need a paid ChatGPT plan to run these?",
        a: "No. All of these prompts run in free ChatGPT, Claude, or Gemini.",
      },
      {
        q: "Will these actually help if my ADHD is severe?",
        a: "These prompts reduce activation cost — they make it easier to start a task. They are not a substitute for the systems, meds, or therapy that handle the underlying executive function. They're a tool that fits between you and the blank page.",
      },
      {
        q: "What if a prompt's output doesn't fit my situation?",
        a: "Edit the brackets to fit. The prompts are designed as templates — you fill in the specifics. If a prompt consistently misfires, edit the constraints to match your business.",
      },
    ],
  },
  {
    slug: "30-day-content-calendar-with-chatgpt",
    title: "The 30-day content calendar formula every freelancer should steal",
    description:
      "A repeatable ChatGPT prompt + 7-bucket framework that produces a full 30-day content calendar for any niche in under 5 minutes — with hooks, CTAs, and posting schedule.",
    date: "2026-06-09",
    category: "Content",
    body: [
      {
        type: "p",
        text: "Most freelancers stall on content because they think the bottleneck is creativity. It isn't — it's structure. With the right structure, you can produce a full 30-day content calendar in under 5 minutes using free ChatGPT, then spend your creativity on the 1-2 posts a week that actually need it.",
      },
      {
        type: "p",
        text: "This is the exact 7-bucket framework and prompt I use to crank out a month of content for my own brand and for ghostwriting clients. It's also a sample of how the prompts in the 500-pack are structured.",
      },
      { type: "h2", text: "The 7-bucket framework (the spine of the calendar)" },
      {
        type: "p",
        text: "Every 7-day week breaks into 7 content jobs. You rotate them week-to-week so your feed has variety, and your audience always knows what kind of post is coming.",
      },
      {
        type: "ol",
        items: [
          "Educational — teach one concrete concept. (Day 1, 8, 15, 22, 29)",
          "Story — a personal anecdote that illustrates a lesson. (Day 2, 9, 16, 23, 30)",
          "Promotional — a soft pitch for your offer. (Day 3, 10, 17, 24)",
          "Engagement — a question that invites replies. (Day 4, 11, 18, 25)",
          "Repurpose — your best performer from a previous month. (Day 5, 12, 19, 26)",
          "Contrarian — a hot take that names something the industry gets wrong. (Day 6, 13, 20, 27)",
          "Behind-the-scenes — process, tools, day-in-the-life. (Day 7, 14, 21, 28)",
        ],
      },
      { type: "h2", text: "The full prompt — copy, paste, run" },
      {
        type: "code",
        label: "Paste into free ChatGPT",
        text: `You are a senior content strategist who has built 300+ social media calendars.

Create a 30-day content calendar for [NICHE] on [PLATFORM] (e.g. X/Twitter, LinkedIn, Instagram, TikTok). My brand voice is: [DESCRIBE IN 1 SENTENCE — e.g. "direct, no-fluff, peer expert"].

Structure:
- Days 1, 8, 15, 22, 29: Educational post (teach one concept)
- Days 2, 9, 16, 23, 30: Story post (personal anecdote → lesson)
- Days 3, 10, 17, 24: Promotional post (soft pitch for [OFFER])
- Days 4, 11, 18, 25: Engagement question
- Days 5, 12, 19, 26: Repurposed top performer (placeholder)
- Days 6, 13, 20, 27: Contrarian / hot take
- Days 7, 14, 21, 28: Behind-the-scenes / process

For each day, output exactly:
- Day #
- Bucket
- Post title (≤8 words)
- Hook (2-sentence opener, written ready-to-post)
- Body framework (3 bullets of what the post should cover — not full copy)
- CTA (1 line, specific action)

Tone constraints:
- No "🚨" or hype emojis at the start of any post.
- No "thread 🧵" unless the bucket is Educational.
- No "let me know what you think" closers.

Output as a clean numbered list, one day per block.`,
      },
      { type: "h2", text: "How to actually use the output (the part most people skip)" },
      {
        type: "ol",
        items: [
          "Pick the 4–5 days that genuinely hook you. Those are the ones you write deeply.",
          "For the other 25 days, use the hook + framework as-is — edit only what's wrong.",
          "Batch-write all the Educational posts on one day, all the Stories on another. Same brain mode, faster output.",
          "Schedule everything in a queue (Buffer, Typefully, Hypefury — pick one). Don't ad-lib publishes.",
          "At end of month, look at top 3 performers. Those are your Day 5/12/19/26 repurposes next month.",
        ],
      },
      { type: "h2", text: "The follow-up prompts (these are where the calendar starts paying)" },
      { type: "h3", text: "Turn one calendar day into a full post" },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `Take this calendar day and write the full post, ready to publish:
[PASTE THE DAY BLOCK FROM THE CALENDAR ABOVE]

Constraints:
- Match [PLATFORM]'s format — character limits, structure, line breaks.
- Open with the hook as-is, but tighten it.
- Use the body framework as the spine — flesh it out with specifics, examples, numbers.
- End with the CTA — no extra "thanks for reading".
- One emoji max, and only if it earns its place.
- Reading level: 6th grade. Cut every word that doesn't carry.`,
      },
      { type: "h3", text: "Turn a top performer into a thread / carousel / video script" },
      {
        type: "code",
        label: "Paste into ChatGPT",
        text: `Repurpose this top-performing post into 3 formats:
[PASTE THE POST]

1. A 7-tweet thread (X/Twitter). Each tweet < 240 chars. Tweet 1 = hook, tweet 7 = CTA.
2. An 8-slide LinkedIn carousel outline (slide title + 1 line per slide).
3. A 60-second video script (10 lines max, hooks in line 1, CTA in line 10).

For each, name the angle that's different from the original post — don't just chop it up.`,
      },
      { type: "h2", text: "Common mistakes that kill content calendars before they ship" },
      {
        type: "ul",
        items: [
          "Trying to write all 30 posts in one sitting. Generate the calendar in one sitting; write in batches.",
          "Treating every day as equal weight. Your Educational and Story posts will carry the month — invest there.",
          "Skipping the repurpose days. Those are free engagement — past you already did the work.",
          "Editing the calendar more than once before posting anything. The calendar is a draft, not a contract.",
          "Posting the AI output as-is. ChatGPT writes the spine; you give it the voice. The 5 minutes of editing is the entire job.",
        ],
      },
      { type: "h2", text: "What's in the full pack" },
      {
        type: "p",
        text: "The content category in the 500-pack has 80+ prompts: 30-day calendars (every platform), thread frameworks, carousel scripts, TikTok hooks, newsletter formats, repurpose chains, and viral hook libraries. Plus 9 other categories — cold outreach, sales pages, SOPs, support, research, finance, launches, lead gen, and onboarding.",
      },
      { type: "cta", text: "Get the 500-pack and ship your next month in an hour" },
    ],
    faq: [
      {
        q: "How long does it take to generate a 30-day calendar with this prompt?",
        a: "About 90 seconds to generate, plus 5–10 minutes to skim and pick the days you'll write deeply.",
      },
      {
        q: "Can I use this prompt for clients?",
        a: "Yes — the 500-pack license lets you use the prompts for client work. Generate one calendar per client per month, charge for the strategy + writing.",
      },
      {
        q: "Does this work for every platform?",
        a: "The 7-bucket framework works on any platform. The post format (length, hooks, structure) needs to match the platform — the follow-up prompt above adapts the output per platform.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug) ?? null;
}

export function readingMinutes(post: Post) {
  const words = post.body.reduce((acc, b) => {
    if (b.type === "p" || b.type === "quote" || b.type === "h2" || b.type === "h3" || b.type === "cta") {
      return acc + b.text.split(/\s+/).length;
    }
    if (b.type === "ul" || b.type === "ol") {
      return acc + b.items.join(" ").split(/\s+/).length;
    }
    if (b.type === "code") {
      return acc + b.text.split(/\s+/).length;
    }
    return acc;
  }, 0);
  return Math.max(3, Math.round(words / 220));
}
