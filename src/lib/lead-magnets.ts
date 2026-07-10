// Lead magnets — the free deliverables promised by the NewsletterSignup forms.
// Each brand's opt-in promises one of these; the welcome email links to
// `/free/<slug>`, which renders the content below. Single source of truth so
// the page and the email never drift.

export type Brand = "promptempire" | "chiku-fit" | "ai-systems" | "qr" | "chiku";

export type LeadMagnetSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export type LeadMagnet = {
  slug: string;
  brand: Brand;
  emoji: string;
  title: string;
  subtitle: string;
  intro: string;
  sections: LeadMagnetSection[];
  cta: { label: string; href: string; note?: string };
};

export const LEAD_MAGNETS: LeadMagnet[] = [
  {
    slug: "promptempire-starter-10",
    brand: "promptempire",
    emoji: "⚡",
    title: "10 Free Business Prompts",
    subtitle: "A starter pack from PromptEmpire — works with free ChatGPT.",
    intro:
      "Copy any prompt, paste it into ChatGPT (free tier is fine), and fill in the [brackets]. These are 10 of the exact prompts our customers use to skip the blank page and get a first draft in seconds.",
    sections: [
      {
        heading: "The 10 prompts",
        items: [
          "**Cold email that gets replies:** \"Write a 90-word cold email to a [type of business] owner. Lead with a specific problem they likely have around [problem]. One sentence on how [my offer] fixes it. End with a low-friction question, not a hard pitch. Casual, no buzzwords.\"",
          "**Sales page first draft:** \"Write a long-form sales page for [product] that sells for [$price]. Audience: [who]. Use this structure: hook → the problem → why the usual fixes fail → my solution → what's inside → proof → offer → FAQ → final CTA. Punchy sentences, grade-6 reading level.\"",
          "**Irresistible offer builder:** \"I sell [product] for [$price]. Give me 5 ways to make the offer more valuable without dropping the price — bonuses, guarantees, payment terms, scarcity, and framing. Rank them by likely impact.\"",
          "**Client onboarding email:** \"Write a warm onboarding email for a new [type] client who just paid. Cover: what happens next, what I need from them, timeline, and how to reach me. Reassuring and organized, under 200 words.\"",
          "**Objection crusher:** \"List the top 7 reasons someone would hesitate to buy [product], and for each give a one-paragraph response I can use in sales chats or on the page. Honest, not pushy.\"",
          "**Content-to-cash repurposer:** \"Take this idea: [paste idea]. Turn it into a 40-second short-form video script (with on-screen text cues), a 5-tweet thread, and a LinkedIn post. Keep my voice: [describe voice].\"",
          "**SOP writer:** \"Write a step-by-step SOP for [recurring task] that a new hire could follow with zero context. Number the steps, flag where mistakes usually happen, and add a 'done when…' checklist at the end.\"",
          "**Pricing/positioning gut-check:** \"Here's my offer: [describe]. Act as a skeptical buyer in [niche]. Tell me what's confusing, what feels overpriced, and what would make you trust it enough to buy.\"",
          "**Lead magnet idea machine:** \"Give me 10 free lead-magnet ideas for [audience] that I could make in under an hour and that naturally lead into buying [product]. For each, one line on why it converts.\"",
          "**Weekly plan for a scattered brain:** \"I have these tasks: [dump them]. Group them, tell me the 3 that actually move revenue, and lay out a realistic Mon–Fri plan assuming I have ~2 focused hours a day. Be blunt about what to drop.\"",
        ],
      },
      {
        heading: "How to get the most out of them",
        items: [
          "Always replace every [bracket] — the specifics are what make the output good.",
          "If the first answer is generic, reply with \"make it more specific and less generic, add concrete detail.\"",
          "Save the ones that work in a notes doc so you stop rewriting them.",
        ],
      },
    ],
    cta: {
      label: "See the full 500-prompt packs →",
      href: "/promptempire",
      note: "Liked these 10? The full library covers cold outreach, sales, delivery, and ops — buy once, own forever.",
    },
  },
  {
    slug: "broke-bulk-grocery-list",
    brand: "chiku-fit",
    emoji: "🛒",
    title: "The Broke Bulk Grocery List",
    subtitle: "Hit your protein for muscle growth on under $50/week.",
    intro:
      "You don't need $200/week or fancy supplements to grow. This is a real, cheap grocery list built around cost-per-gram-of-protein. Prices are rough US averages — adjust to your store. Aim for ~0.7–1g of protein per pound of bodyweight per day.",
    sections: [
      {
        heading: "Protein anchors (buy these first)",
        items: [
          "Eggs — ~$3 / dozen · 72g protein/dozen · the cheapest complete protein there is",
          "Whole chicken or leg quarters — ~$1–1.50/lb · way cheaper than breast",
          "Canned tuna / sardines — ~$1 / can · 20–25g each, zero prep",
          "Dried lentils & black beans — ~$1.50 / lb bag · protein + carbs + fiber in one",
          "Peanut butter — ~$3 / jar · calorie-dense for hardgainers who struggle to eat enough",
          "Milk (whole) — ~$3–4 / gallon · 8g protein per cup and easy extra calories",
          "Greek yogurt (tub, not cups) — ~$4 / large tub · buying the tub is half the price per gram",
        ],
      },
      {
        heading: "Cheap carbs & calories (the growth fuel)",
        items: [
          "Oats (large canister) — ~$3 · breakfast for two weeks",
          "Rice (big bag) — ~$5 / 5lb · pennies per meal",
          "Potatoes — ~$4 / 5lb bag · filling and cheap",
          "Frozen mixed veg — ~$1–2 / bag · vitamins without the spoilage",
          "Bananas — ~$0.50/lb · pre/post-workout carbs",
        ],
      },
      {
        heading: "A sample $45 week",
        body:
          "2 dozen eggs ($6), 5lb leg quarters ($7), 6 cans tuna ($6), 1 tub Greek yogurt ($4), 2 bags lentils ($3), 1 jar peanut butter ($3), 1 gallon milk ($4), oats ($3), 5lb rice ($5), 5lb potatoes ($4). ≈ $45, ~130g+ protein/day if you eat it all. Add a second gallon of milk if you're struggling to gain.",
      },
      {
        heading: "3 rules that matter more than the list",
        items: [
          "Eat in a slight surplus — if the scale isn't moving up over 2 weeks, add 300 calories (usually another cup of milk + PB).",
          "Buy in bulk, cook in batches — prep protein for 3 days at once so 'no time' never becomes 'no food.'",
          "Protein at every meal — spread it out, don't cram it all into dinner.",
        ],
      },
    ],
    cta: {
      label: "Get the 8-Week Mass Accelerator →",
      href: "/chiku-fit",
      note: "Want the full training program + meal plans built around this? That's the 8-Week Mass Accelerator.",
    },
  },
  {
    slug: "ai-automation-checklist",
    brand: "ai-systems",
    emoji: "✅",
    title: "The 12-Point AI Automation Checklist",
    subtitle: "For service businesses losing revenue to slow, manual follow-up.",
    intro:
      "Most local service businesses don't have a lead problem — they have a follow-up problem. Leads go cold, reviews never get asked for, no-shows pile up. Score yourself on these 12 points. Every 'no' is money you're leaving on the table.",
    sections: [
      {
        heading: "Lead response & follow-up",
        items: [
          "New leads get a first response in under 5 minutes, automatically — even after hours.",
          "Every lead that doesn't book gets a follow-up sequence (not one text and done).",
          "You can see, in one place, which leads never got contacted.",
          "Missed calls trigger an automatic text back within seconds.",
        ],
      },
      {
        heading: "Bookings & no-shows",
        items: [
          "Clients can self-book without phone tag.",
          "Automated reminders go out before every appointment (text + email).",
          "No-shows get an automatic 'want to rebook?' message.",
        ],
      },
      {
        heading: "Reviews & reputation",
        items: [
          "Every happy client gets an automatic review request at the right moment.",
          "You're generating new reviews every week without anyone remembering to ask.",
        ],
      },
      {
        heading: "Ops & visibility",
        items: [
          "Repetitive admin (intake, data entry, FAQs) is handled by AI, not staff.",
          "You get a weekly snapshot of leads, bookings, and revenue without building it by hand.",
          "One system connects your forms, calendar, and messaging — not five disconnected tools.",
        ],
      },
      {
        heading: "How to score it",
        body:
          "10–12 yes: you're ahead of nearly everyone in your industry. 6–9: solid, but you're losing a few leads a week to gaps. 5 or fewer: automating even 3 of these usually pays for itself inside a month.",
      },
    ],
    cta: {
      label: "Get a free automation plan →",
      href: "/ai-systems",
      note: "Want us to build the ones you scored 'no' on? Tell us your business and we'll map a plan — done-for-you, results in 30 days.",
    },
  },
];

const BY_SLUG = new Map(LEAD_MAGNETS.map((m) => [m.slug, m]));
const BY_BRAND = new Map(LEAD_MAGNETS.map((m) => [m.brand, m]));

export function getLeadMagnet(slug: string): LeadMagnet | undefined {
  return BY_SLUG.get(slug);
}

export function getLeadMagnetForBrand(brand: string): LeadMagnet | undefined {
  return BY_BRAND.get(brand as Brand);
}
