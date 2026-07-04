export type GTA6Article = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  category: "News Roundup" | "Guide" | "Analysis";
  excerpt: string;
  readMinutes: number;
  sections: { heading: string; paragraphs: string[] }[];
  sources: { label: string; url: string }[];
};

export type GTA6Product = {
  id: string;
  name: string;
  price: string;
  badge: string | null;
  highlight: boolean;
  desc: string;
  features: string[];
  cta: string;
  // Paste the Stripe payment link to make a product buyable.
  // While null, the card renders a waitlist CTA instead of a checkout button.
  href: string | null;
};

export const WAITLIST_MAILTO =
  "mailto:chikuglobalsolutions@gmail.com?subject=GTA%206%20Hub%20Waitlist";

export const PRODUCTS: GTA6Product[] = [
  {
    id: "cash-blueprint",
    name: "GTA Online Cash Blueprint 2026",
    price: "$14.99",
    badge: "Available First",
    highlight: false,
    desc: "The fastest legit money-making methods in GTA Online right now — ranked by $/hour, updated for the 2026 meta.",
    features: [
      "Every top method ranked by cash per hour",
      "Solo-friendly routes — no crew required",
      "Heist prep checklists that cut setup time in half",
      "Passive-income business tier list",
      "Updated for the current GTA Online patch",
    ],
    cta: "Get the Blueprint",
    href: null,
  },
  {
    id: "day-one",
    name: "GTA 6 Day-One Domination Guide",
    price: "$19.99",
    badge: "Launch Week Delivery",
    highlight: true,
    desc: "Everything to master in your first 48 hours of GTA 6 — delivered to your inbox launch week, built from day-one play.",
    features: [
      "First-48-hours priority roadmap",
      "Early money-making methods as they're discovered",
      "Best PS5 settings for performance vs fidelity",
      "Map and activity unlock order",
      "Free updates through launch month",
    ],
    cta: "Join the waitlist",
    href: null,
  },
  {
    id: "launch-bundle",
    name: "GTA 6 Launch Bundle",
    price: "$29.99",
    badge: "Best Value",
    highlight: false,
    desc: "The full stack: Cash Blueprint now, Day-One Guide at launch, plus the 100% completion tracker.",
    features: [
      "GTA Online Cash Blueprint 2026 (instant)",
      "Day-One Domination Guide (launch week)",
      "100% completion tracker spreadsheet",
      "All launch-month guide updates free",
      "Priority email support",
    ],
    cta: "Join the waitlist",
    href: null,
  },
];

export const ARTICLES: GTA6Article[] = [
  {
    slug: "gta-6-weekly-roundup-july-4-2026",
    title:
      "GTA 6 Weekly Roundup (July 4, 2026): Trailer 3 Window, Record Preorders, and the Disc Situation",
    date: "2026-07-04",
    category: "News Roundup",
    excerpt:
      "Preorders are live and PS5 is dominating 8-to-1, Trailer 3 is expected mid-July, and physical boxes won't have a disc at launch. Everything that happened this week in GTA 6.",
    readMinutes: 6,
    sections: [
      {
        heading: "The release date is locked: November 19, 2026",
        paragraphs: [
          "After the delay from the original May 26 window, Rockstar has GTA 6 locked in for Thursday, November 19, 2026 on PlayStation 5 and Xbox Series X|S. There has been no wobble on that date since the announcement — Take-Two's messaging through June and the marketing ramp both point to this one sticking.",
          "Notably, there is still no confirmed PC version. If GTA 5's rollout is any guide, PC players are likely waiting a year or more after the console launch — so a PS5 or Series X is the only way to play in 2026.",
        ],
      },
      {
        heading: "Preorders are live — and PS5 is crushing Xbox 8 to 1",
        paragraphs: [
          "Preorders opened June 25 across the Rockstar Store, PlayStation Store, Xbox Store, Amazon, and GameStop. Early affiliate data shows PS5 preorders outselling Xbox roughly 8 to 1, and the game immediately took the #1 spot on the PlayStation Store.",
          "Two editions are on offer: the Standard Edition at $79.99 and the Ultimate Edition at $99.99 with extra in-game content. Every preorder placed before November 20 gets the Vintage Vice City Pack of in-game items regardless of edition — the bonus rewards ordering early, not spending more.",
        ],
      },
      {
        heading: "Physical copies won't have a disc at launch",
        paragraphs: [
          "The launch-day retail box ships with a download code rather than a Blu-ray disc — a decision that has collectors and preservation-minded players vocally unhappy, and drew mainstream coverage over the $80 base price to boot.",
          "Rockstar has clarified that proper disc versions will follow \"months\" after launch, with reporting pointing to December as the earliest window. If a real disc matters to you — for resale, collection, or preservation — the play is to skip the launch box and wait for the disc pressing.",
        ],
      },
      {
        heading: "Preload starts November 12",
        paragraphs: [
          "Digital preload begins November 12, one week before launch. Given GTA 5's install sizes and modern open-world games regularly clearing 100GB+, clear space on your PS5's SSD early — launch night servers and download queues will be brutal.",
        ],
      },
      {
        heading: "Trailer 3 watch: mid-July is the window",
        paragraphs: [
          "There's no confirmed date for Trailer 3, but the strongest speculation points to mid-July, timed near the World Cup final for maximum audience. Rockstar's marketing beats have historically landed adjacent to huge cultural moments, so the logic tracks. We'll break the trailer down frame-by-frame here the week it drops.",
        ],
      },
      {
        heading: "Meanwhile in GTA Online: the Kortz Center Heist",
        paragraphs: [
          "Rockstar isn't letting GTA Online coast to the finish line. The Kortz Center Heist arrives in July as this summer's major content update — a new heist at the Getty-inspired Kortz Center. If you're stacking money in Online before GTA 6 (or grinding one last time with your crew), this is the update to plan around.",
        ],
      },
    ],
    sources: [
      {
        label: "Rockstar Games Newswire — GTA VI launching November 19, 2026",
        url: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
      },
      {
        label: "Fortune — GTA 6 price and missing disc controversy",
        url: "https://fortune.com/2026/06/25/gta-6-release-date-price-no-disc-rockstar-games/",
      },
      {
        label: "GamesRadar+ — GTA 6: everything we know",
        url: "https://www.gamesradar.com/gta-6-guide/",
      },
      {
        label: "Screen Rant — GTA 6 release date, preorders, editions",
        url: "https://screenrant.com/gta-6-release-date-preorders-price-trailers-editions/",
      },
      {
        label: "CBR — GTA 5's major July update before GTA 6",
        url: "https://www.cbr.com/grand-theft-auto-5-official-new-update-before-gta-6-july-2026/",
      },
    ],
  },
];

export function getArticle(slug: string): GTA6Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function sortedArticles(): GTA6Article[] {
  return [...ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1));
}
