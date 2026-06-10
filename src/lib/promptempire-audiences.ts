// Source of truth for the /promptempire/for/[audience] segmented landing pages.
// Each entry produces a fully SEO-targeted page that funnels into the bundle.
// Add new audiences here — the dynamic route at /promptempire/for/[slug] picks them up.

export type Audience = {
  slug: string;
  title: string;
  description: string;
  /** H1 on the page. */
  hero: { eyebrow: string; headline: string; sub: string };
  /** "Sound familiar?" pain points specific to this audience. */
  pains: { icon: string; title: string; desc: string }[];
  /** The 5 categories this audience uses most — chosen from the full 10. */
  topCategories: { icon: string; name: string; count: string; desc: string }[];
  /** Real prompts from the library framed for this audience. */
  sampleUseCases: { tag: string; title: string; outcome: string }[];
  /** The "why this audience" bullets that anchor the conversion. */
  whyThis: string[];
};

export const AUDIENCES: Audience[] = [
  {
    slug: "freelancers",
    title: "AI Prompts for Freelancers — 500 Prompts to Win Clients & Run Your Business",
    description:
      "500 ChatGPT prompts built for freelancers: cold outreach, proposals, sales pages, client onboarding, invoices, scope creep scripts. Works with free ChatGPT. $37 one-time.",
    hero: {
      eyebrow: "Built for solo freelancers",
      headline: "Stop billing 3 hours to write one cold email.",
      sub: "500 ChatGPT prompts that handle the writing your freelance business depends on — cold outreach, proposals, onboarding, invoicing, scope-creep replies. Works with free ChatGPT.",
    },
    pains: [
      {
        icon: "📧",
        title: "The cold-email tax",
        desc: "You know outreach grows your pipeline. But the activation energy to write 20 emails is the same as writing 200. You stall at 3.",
      },
      {
        icon: "📝",
        title: "The proposal that takes 2 days",
        desc: "Custom proposals eat your billable hours. By the time you send it, the prospect's moved on or you've under-priced from exhaustion.",
      },
      {
        icon: "💸",
        title: "The scope creep you can't say no to",
        desc: "Every 'one more small thing' steals a Sunday. You don't have the right words to push back without losing the relationship.",
      },
    ],
    topCategories: [
      { icon: "📧", name: "Cold Outreach", count: "60+", desc: "Openers, follow-ups, reply handlers, LinkedIn DMs, dead-lead re-engagement." },
      { icon: "🤝", name: "Client Onboarding", count: "45+", desc: "Proposals, contracts, welcome sequences, intake forms, kickoff agendas." },
      { icon: "📝", name: "Sales Pages", count: "50+", desc: "Service pages, package descriptions, objection handling, FAQ sections." },
      { icon: "🧾", name: "Finance & Admin", count: "50+", desc: "Invoices, late-payment chase, pricing changes, scope-creep replies, net-term negotiation." },
      { icon: "💬", name: "Customer Support", count: "40+", desc: "Refund replies, project hand-offs, win-back sequences, status updates." },
    ],
    sampleUseCases: [
      { tag: "Cold Email", title: "The 'genuine curiosity' opener", outcome: "Books 4–8% reply rates without sounding like every other vendor." },
      { tag: "Proposal", title: "Service proposal in 4 sentences", outcome: "Closes the discovery → proposal gap in one afternoon, not two days." },
      { tag: "Onboarding", title: "Day-1 welcome sequence", outcome: "New clients feel safe — and you get paid the deposit faster." },
      { tag: "Scope Creep", title: "The 'love to, here's the cost' reply", outcome: "Hold the line on scope without losing the relationship." },
      { tag: "Pricing", title: "Rate increase announcement", outcome: "Tell existing clients the price is going up without losing them." },
    ],
    whyThis: [
      "Built specifically for solo operators — no agency-of-20 fluff.",
      "Every prompt is shaped for output you can send the same hour.",
      "Works on free ChatGPT, Claude, or Gemini. No subscription needed.",
      "Bracketed templates — fill in the [BLANK], paste, ship.",
      "Buy once, use forever. No retainer, no upsell, no surprise renewal.",
    ],
  },
  {
    slug: "adhd-entrepreneurs",
    title: "AI Prompts for ADHD Entrepreneurs — 500 Prompts to Beat Decision Paralysis",
    description:
      "500 ChatGPT prompts structured for ADHD brains. Lowers the activation energy on cold email, proposals, content, and admin so you actually ship. Works with free ChatGPT.",
    hero: {
      eyebrow: "Built for ADHD entrepreneurs",
      headline: "The blank screen is the enemy. We removed it.",
      sub: "500 ChatGPT prompts engineered for ADHD brains — each one comes pre-loaded with the role, the constraint, the format, and the failure-mode bans, so the output starts before your executive function has to.",
    },
    pains: [
      {
        icon: "🧠",
        title: "Decision paralysis on every task",
        desc: "Twelve tabs open, none started. The 'where do I start' freeze hits hardest on the highest-impact tasks.",
      },
      {
        icon: "⏳",
        title: "3 hours, one email, sent late",
        desc: "Hyperfocus on the wrong sentence. The client goes to someone else.",
      },
      {
        icon: "🔁",
        title: "Open loops eating your working memory",
        desc: "Half-replied emails, half-written invoices, half-thought-through proposals. Each one is a tax on tomorrow.",
      },
    ],
    topCategories: [
      { icon: "📧", name: "Cold Outreach", count: "60+", desc: "Pre-structured templates — fill the brackets and the email writes itself." },
      { icon: "📱", name: "Social Content", count: "80+", desc: "30-day calendars on tap. No more weekly content panic." },
      { icon: "🤝", name: "Client Onboarding", count: "45+", desc: "Day-1 welcome sequences. Make new clients feel safe without the ADHD overcompensation." },
      { icon: "💬", name: "Customer Support", count: "40+", desc: "Pre-built replies for the inbox you've been avoiding for 6 days." },
      { icon: "📊", name: "SOPs & Systems", count: "55+", desc: "Externalize the steps in your head — so tomorrow's brain doesn't have to rediscover them." },
    ],
    sampleUseCases: [
      { tag: "Triage", title: "The 'what do I do first' prompt", outcome: "Picks ONE thing to do right now — and writes the first 60 seconds for you." },
      { tag: "Inbox", title: "The 6-day-old email reply", outcome: "Turns the email you've been avoiding into a 4-sentence reply you can send." },
      { tag: "Rubber Duck", title: "The decision-paralysis unblocker", outcome: "Reflects your messy thought back as 3 clean options + a recommendation." },
      { tag: "Shrink Task", title: "The 'cut it into pieces' prompt", outcome: "Turns a scary 3-day task into a 5-minute Step 0 you can start now." },
      { tag: "Brain Dump", title: "The externalize-working-memory prompt", outcome: "Paste your messy brain. Get 3 urgent, 3 parked, the rest deleted." },
    ],
    whyThis: [
      "Prompts written to minimize activation energy, not maximize cleverness.",
      "Every template tells the AI what NOT to do — so output doesn't need a cleanup pass.",
      "Pre-built triage, brain-dump, and rubber-duck prompts for the daily stuck moments.",
      "Works on free ChatGPT — no subscription to remember to renew.",
      "Buy once, use forever. Lifetime updates, no email follow-ups asking you to upgrade.",
    ],
  },
];

export function getAudience(slug: string) {
  return AUDIENCES.find((a) => a.slug === slug) ?? null;
}
