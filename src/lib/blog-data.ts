// Blog content source of truth. Add a new post by prepending an object to POSTS.
// The dynamic route src/app/blog/[slug]/page.tsx renders from this array —
// no per-post files. Keep `date` as ISO (YYYY-MM-DD); newest first.

export type BlogSection = {
  heading?: string;
  paras?: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string; // meta description + card excerpt
  date: string; // YYYY-MM-DD
  brand: "PromptEmpire" | "Chiku Fit" | "AI Systems" | "QR Generator" | "Chiku Global";
  accent: string; // tailwind text color class for the brand
  readMins: number;
  videoSrc?: string; // optional ad video served from /public, e.g. /ads/slug.mp4
  body: BlogSection[];
  cta: { label: string; href: string };
};

const ACCENT: Record<BlogPost["brand"], string> = {
  PromptEmpire: "text-violet-400",
  "Chiku Fit": "text-emerald-400",
  "AI Systems": "text-sky-400",
  "QR Generator": "text-amber-400",
  "Chiku Global": "text-white",
};

export const POSTS: BlogPost[] = [
  {
    slug: "5-chatgpt-prompts-that-replace-a-virtual-assistant",
    title: "5 ChatGPT Prompts That Replace a $2,000/Month Virtual Assistant",
    description:
      "The five prompts solopreneurs use to handle email, proposals, content, outreach, and invoicing — without hiring help.",
    date: "2026-06-25",
    brand: "PromptEmpire",
    accent: ACCENT.PromptEmpire,
    readMins: 4,
    body: [
      {
        paras: [
          "Most early-stage founders don't have a time problem — they have a leverage problem. They spend their best hours on $0 tasks: rewriting the same email, drafting proposals from scratch, and staring at a blank content calendar. A good virtual assistant fixes that, but a good VA costs $1,500–$2,500 a month. Here are five prompts that do the same jobs for the price of a coffee.",
        ],
      },
      {
        heading: "1. The Inbox Zero prompt",
        paras: [
          "Paste any email you received and the prompt returns a tight, on-brand reply in your voice. The trick is giving it your tone once and reusing it: \"Reply in 3 sentences, friendly but direct, no filler, sign off as "+'\"'+"[name]\".\" You stop rewriting drafts and start approving them.",
        ],
      },
      {
        heading: "2. The Proposal Machine",
        paras: [
          "Describe the client and the job; get a full scope, deliverables, timeline, and price range in under a minute. The version in the pack also flags what to clarify before you quote, so you don't underprice.",
        ],
      },
      {
        heading: "3. The Content Repurposer",
        paras: [
          "One idea becomes a week of posts across three platforms. Feed it a single insight and it returns a carousel outline, a short-form video hook, and a long-form caption — each native to its platform instead of copy-pasted.",
        ],
      },
      {
        heading: "4. The Cold DM that books calls",
        paras: [
          "The difference between a DM that converts and one that gets ignored is specificity. This prompt forces a personalized first line and a single, low-friction ask — no walls of text, no \"hope you're well.\"",
        ],
      },
      {
        heading: "5. The invoice-up script",
        paras: [
          "A short negotiation script for raising a quote without losing the client. Used on scope creep, it has added a few hundred dollars to projects that would otherwise have been done for free.",
        ],
      },
      {
        heading: "Where to get all 500",
        paras: [
          "These five are a sample. The full PromptEmpire pack is 500 business prompts organized by job — outreach, sales pages, SOPs, content, client ops — so you're never staring at a blank screen. It's $37, or $67 for the bundle with everything.",
        ],
      },
    ],
    cta: { label: "Get the 500-prompt pack — $37", href: "/promptempire" },
  },
  {
    slug: "how-to-bulk-on-7-dollars-a-day",
    title: "How to Bulk on $7 a Day (Without Expensive Supplements)",
    description:
      "A budget bulking blueprint for skinny beginners: 3,400 calories a day on real food, no $80 protein powder required.",
    date: "2026-06-24",
    brand: "Chiku Fit",
    accent: ACCENT["Chiku Fit"],
    readMins: 5,
    videoSrc: "/ads/chiku-fit-bulk-7-day.mp4",
    body: [
      {
        paras: [
          "If you've been \"trying to gain weight for years\" and nothing works, it's almost never genetics. It's that you eat like a bird and call it eating a lot. Building real size is an engineering problem: hit a calorie surplus consistently, lift progressively, and repeat. Here's how to do the nutrition half on about $7 a day.",
        ],
      },
      {
        heading: "Start the day at 900 calories before 9am",
        paras: [
          "Oats, whole milk, and peanut butter. It's cheap, it's fast, and it front-loads your calories so you're not trying to cram 3,400 into dinner. The single biggest reason skinny guys fail to bulk is that they give up around 2,000 calories because they tried to eat it all at night.",
        ],
      },
      {
        heading: "Build meals around cheap staples",
        list: [
          "Rice — the cheapest calorie-dense carb on earth",
          "Whole eggs — protein and fat, often under $0.20 each",
          "Chicken thighs — cheaper and more calorie-dense than breast",
          "Frozen vegetables — micronutrients without the spoilage",
          "Whole milk — a liquid 150 calories you don't have to chew",
        ],
      },
      {
        heading: "Skip the supplement aisle",
        paras: [
          "You do not need an $80 pre-workout or a tub of imported protein to grow. Whole food covers it. The money you save buys more food, which is the thing actually building muscle.",
        ],
      },
      {
        heading: "The part most people get wrong",
        paras: [
          "Consistency beats perfection. Eating 3,200 calories every day for eight weeks builds more than hitting 4,000 twice and quitting. That's exactly what the 8-Week Mass Accelerator is built around — a structured progression plus the grocery math so you know what to buy and what it costs before you go.",
        ],
      },
    ],
    cta: { label: "See the budget bulking guides", href: "/chiku-fit" },
  },
  {
    slug: "dental-practices-miss-38-percent-of-calls",
    title: "Your Dental Practice Misses 38% of Its Calls. Here's the Fix.",
    description:
      "Missed calls are missed patients. How an AI front-desk system recovers the revenue without hiring more staff.",
    date: "2026-06-23",
    brand: "AI Systems",
    accent: ACCENT["AI Systems"],
    readMins: 4,
    body: [
      {
        paras: [
          "The average dental practice misses 35–38% of inbound calls. Each one is a $600–$1,200 patient who just dialed the next office on Google. You don't fix that by working your front desk harder — they're already busy. You fix it with a system that catches the calls they can't.",
        ],
      },
      {
        heading: "What the system actually does",
        list: [
          "Texts back every missed call within 60 seconds, so the patient never reaches a competitor",
          "Books the appointment automatically — no human in the loop",
          "Asks happy patients for a Google review right after their visit",
          "Reactivates patients who haven't been in for 9+ months",
        ],
      },
      {
        heading: "Why it pays for itself fast",
        paras: [
          "Most practices recover the setup cost from the first month of reactivated patients alone. The reactivation campaign mines a list you already own — past patients who simply drifted — which is the cheapest revenue in the building.",
        ],
      },
      {
        heading: "The honest math",
        paras: [
          "If you miss 30 calls a week and even a fifth of them would have booked, that's roughly six lost patients a week. At an average patient value north of $600, the missed-call gap alone is five figures a month. We build the system in about two weeks. Tell us your numbers and we'll send a one-page breakdown of what you're currently leaving on the table.",
        ],
      },
    ],
    cta: { label: "Get a free practice audit", href: "/ai-systems#intake" },
  },
  {
    slug: "qr-menu-that-tells-you-what-sells",
    title: "Build a QR Menu That Tells You What Actually Sells",
    description:
      "Most restaurant QR codes are just a PDF link. With scan analytics, the same sticker becomes a marketing data machine.",
    date: "2026-06-22",
    brand: "QR Generator",
    accent: ACCENT["QR Generator"],
    readMins: 3,
    body: [
      {
        paras: [
          "Most restaurants treat a QR menu as a way to avoid printing. That's leaving the best part on the table. A tracked QR code turns the same sticker into a source of data about your customers — for free.",
        ],
      },
      {
        heading: "What a tracked code tells you",
        list: [
          "Which section or table scans most — where to put your strongest server",
          "Peak scan times — so you staff to real demand, not guesses",
          "Whether the patio sign or the table tent works — use a different code for each and compare",
        ],
      },
      {
        heading: "Beyond the menu",
        paras: [
          "The same idea works on packaging, business cards, window decals, event signage, and receipts. Give each placement its own code and you get a clean ROI story for every spot — instead of wondering which sign is doing the work.",
        ],
      },
      {
        heading: "Start free",
        paras: [
          "Generate a code in seconds, stick it where customers already look, and watch the dashboard fill in. Upgrade when you want the deeper analytics — the free tier is enough to prove it out.",
        ],
      },
    ],
    cta: { label: "Make a free tracked QR code", href: "/generate" },
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}
