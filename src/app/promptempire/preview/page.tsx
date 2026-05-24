import type { Metadata } from "next";
import Link from "next/link";
import { PromptEmpireNav, PromptEmpireFooter } from "@/components/PromptEmpireNav";

export const metadata: Metadata = {
  title: "Free Prompt Preview — Try 10 Prompts From the 500-Pack | PromptEmpire",
  description:
    "Try 10 real prompts from the 500 AI Business Prompts library before you buy. Cold email, sales pages, content, SOPs — copy, paste, and run them in ChatGPT right now.",
};

const SAMPLE_PROMPTS = [
  {
    category: "Cold Outreach",
    tag: "EMAIL",
    title: "The 'Genuine Curiosity' Cold Email",
    description: "Books 4–8% reply rates because it doesn't smell like a pitch.",
    prompt: `Write a 4-sentence cold email to [PROSPECT NAME], who is the [TITLE] at [COMPANY]. The email should:
1. Open by referencing one specific thing they posted/said recently about [TOPIC]
2. Briefly explain how I help companies like theirs solve [SPECIFIC PROBLEM]
3. Mention one concrete result I delivered for a similar company
4. End with a low-friction ask: "Would it be helpful if I sent over a 90-second video showing exactly how this would work for [COMPANY]?"
Tone: confident peer, not desperate vendor. No exclamation marks.`,
  },
  {
    category: "Sales Pages",
    tag: "COPY",
    title: "Above-the-fold conversion hook",
    description: "The hero section that decides whether visitors scroll or leave.",
    prompt: `Write an above-the-fold section for a sales page selling [PRODUCT] to [TARGET CUSTOMER]. Include:
1. A 6-9 word headline that names the outcome the customer most wants
2. A subheadline that names the specific mechanism we use to deliver it (1 sentence)
3. 3 micro-bullets that hit the 3 biggest objections this customer has before buying
4. A primary CTA button ("Get [PRODUCT] — $[PRICE]") and a smaller text link below it ("See what's inside")
Voice: clear, confident, zero hype. Avoid the words: "revolutionize," "unlock," "transform."`,
  },
  {
    category: "Content",
    tag: "SOCIAL",
    title: "30-Day Content Calendar Generator",
    description: "A full month of posts based on your niche and brand voice — in 30 seconds.",
    prompt: `Create a 30-day content calendar for [NICHE] on [PLATFORM]. Structure:
- Days 1, 8, 15, 22, 29: Educational post (teach 1 concept)
- Days 2, 9, 16, 23, 30: Story post (personal anecdote that illustrates a lesson)
- Days 3, 10, 17, 24: Promotional post (soft pitch for [PRODUCT/SERVICE])
- Days 4, 11, 18, 25: Engagement question
- Days 5, 12, 19, 26: Repurposed top performer
- Days 6, 13, 20, 27: Industry hot take / contrarian view
- Days 7, 14, 21, 28: Behind-the-scenes / process post
For each day, output: post title, 2-sentence hook, primary CTA.`,
  },
  {
    category: "Client Onboarding",
    tag: "SOP",
    title: "The 'Frictionless First Week' onboarding sequence",
    description: "Get new clients from signed contract to first win in 7 days.",
    prompt: `Write a complete client onboarding sequence for [SERVICE/AGENCY] selling [SERVICE TYPE] to [CLIENT TYPE]. Output:
1. The welcome email (sent 5 minutes after contract signing) — set expectations + what happens next
2. The intake form questions (10 questions max, ordered from easiest to hardest)
3. Day 2 email: "What you'll see this week"
4. Day 4 email: First small win / quick deliverable
5. Day 7 email: 30-day roadmap walkthrough
For each touchpoint: subject line + 3-paragraph body.`,
  },
  {
    category: "SOPs & Systems",
    tag: "PROCESS",
    title: "Document any business process",
    description: "Turn the steps in your head into a repeatable SOP your team can execute.",
    prompt: `I run [TYPE OF BUSINESS]. The process I want to document is: [DESCRIBE THE PROCESS IN ONE SENTENCE].
Create a standard operating procedure (SOP) that:
1. Names the goal of the process in one sentence
2. Lists the inputs required to begin
3. Lists the outputs produced when complete
4. Names the role responsible
5. Provides numbered steps with a quality check after each step
6. Includes common failure modes and how to fix each
7. Includes a "definition of done" checklist
Format: clean markdown a new hire could execute on day 1 without asking questions.`,
  },
  {
    category: "Customer Support",
    tag: "REPLY",
    title: "The 'Genuine Refund Recovery' Reply",
    description: "Turn refund requests into retained customers or graceful exits.",
    prompt: `A customer just emailed asking for a refund on [PRODUCT/SERVICE] after [TIME PERIOD]. Their stated reason: [REASON].
Write a 5-sentence response that:
1. Acknowledges their frustration without defensiveness
2. Asks one specific question about what they expected vs got
3. Offers a clear, concrete way to make it right (extension, swap, custom help)
4. If they still want the refund, makes it painless and confirms timing
5. Ends with no guilt, no upsell, no defensiveness
Voice: human, calm, not corporate.`,
  },
  {
    category: "Research & Strategy",
    tag: "ANALYSIS",
    title: "Competitor positioning analysis",
    description: "Find the gaps in your competitor's offer that you can exploit.",
    prompt: `Analyze the positioning of [COMPETITOR NAME] who sells [PRODUCT/SERVICE] to [MARKET]. Their website is [URL]. Output:
1. Their core promise (in their own words)
2. The customer's they're built for (be specific)
3. Their pricing strategy and what it signals
4. 3 gaps in their offer that a smaller competitor could exploit
5. 3 ways to differentiate against them without competing on price
6. The single positioning statement I should use to be perceived as a better fit for [MY TARGET CUSTOMER]
Be ruthless. No fluff.`,
  },
  {
    category: "Finance & Admin",
    tag: "PRICING",
    title: "Service pricing strategy generator",
    description: "Price your services for the income you actually want — not what feels safe.",
    prompt: `I'm a [PROFESSION] who sells [SERVICE] to [CUSTOMER TYPE]. I want to make [INCOME GOAL]/month working [HOURS] hours per week.
1. Calculate the price I'd need to charge per [DELIVERABLE] to hit that target
2. Suggest 3 pricing models (hourly, project, retainer) and which fits this best
3. Write a pricing page that justifies that price with value language, not effort language
4. Give me 3 objection-handling responses for "that's too expensive"
5. Tell me the 3 things I'd need to remove from my offer if I wanted to charge half as much (and why I shouldn't)`,
  },
  {
    category: "Launch Sequences",
    tag: "EMAIL",
    title: "5-day launch email sequence",
    description: "Turn an email list into product revenue in 5 days.",
    prompt: `Write a 5-email launch sequence for [PRODUCT] launching on [DATE] at [PRICE]. Audience: [DESCRIBE LIST].
- Email 1 (Day -3): Story-led teaser, no product mention
- Email 2 (Day -1): Reveal the product and what it solves
- Email 3 (Launch day morning): Open cart, 3 reasons to buy now
- Email 4 (Launch day evening): Social proof + objection handling
- Email 5 (Last 6 hours): Scarcity close
For each email: subject line + preview text + 200-word body + CTA.`,
  },
  {
    category: "Lead Generation",
    tag: "MAGNET",
    title: "Lead magnet that actually converts",
    description: "An opt-in your audience will actually trade their email for.",
    prompt: `I sell [PRODUCT/SERVICE] to [CUSTOMER]. The most painful problem they face that I solve is [PROBLEM].
Create:
1. A lead magnet title that promises a specific outcome in a short time period
2. The 1-page outline of what's inside (5-7 sections max)
3. A 3-sentence opt-in copy block that names the problem, names the solution, names the format
4. The thank-you page copy (1 paragraph) that delivers the file and sets up the next email
5. Email 1 of the welcome sequence (sent immediately after download)`,
  },
];

const STRIPE_BUNDLE = "https://buy.stripe.com/7sI8wR50Kf2adoI28X";

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <PromptEmpireNav active="/promptempire/preview" />

      <section className="pt-32 pb-14 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/25 text-violet-400 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            10 Free Sample Prompts · No signup
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            Try 10 real prompts from the 500-pack.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            These are 10 actual prompts from the library. Copy them, paste them into ChatGPT (or Claude/Gemini),
            fill in the bracketed parts, and see for yourself.
          </p>
        </div>
      </section>

      <section className="pb-20 px-5">
        <div className="max-w-3xl mx-auto space-y-5">
          {SAMPLE_PROMPTS.map((p, i) => (
            <div key={p.title} className="bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden">
              <div className="px-6 pt-6 pb-4 flex flex-wrap items-start justify-between gap-3 border-b border-white/5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-full">{p.tag}</span>
                    <span className="text-xs text-gray-500 font-medium">{p.category}</span>
                  </div>
                  <h2 className="text-lg font-extrabold text-white">
                    {String(i + 1).padStart(2, "0")}. {p.title}
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">{p.description}</p>
                </div>
              </div>
              <div className="px-6 py-5 bg-gray-950">
                <pre className="text-xs leading-relaxed text-gray-300 font-mono whitespace-pre-wrap">
                  {p.prompt}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-5 bg-white/[0.015] border-y border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">
            You just saw 10. The library has 490 more.
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Get the full 500 for $37.
          </h2>
          <p className="text-gray-400 mb-8">
            10 categories. PDF + Notion template. Works with free ChatGPT. Lifetime updates.
          </p>
          <a
            href={STRIPE_BUNDLE}
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-lg px-8 py-4 rounded-xl transition-all shadow-2xl shadow-violet-900/60"
          >
            Get the Empire Bundle — $67 →
          </a>
          <p className="mt-4 text-xs text-gray-500">
            Or:{" "}
            <Link href="/promptempire#pricing" className="text-violet-400 hover:text-violet-300 underline">
              see all 3 pricing options
            </Link>
          </p>
        </div>
      </section>

      <PromptEmpireFooter />
    </main>
  );
}
