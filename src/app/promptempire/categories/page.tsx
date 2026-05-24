import type { Metadata } from "next";
import Link from "next/link";
import { PromptEmpireNav, PromptEmpireFooter } from "@/components/PromptEmpireNav";

export const metadata: Metadata = {
  title: "All 10 Categories — 500 Prompts Library | PromptEmpire",
  description:
    "Explore all 10 categories in the 500 AI Business Prompts library: cold outreach, sales pages, content, SOPs, support, research, finance, launch sequences, lead gen, and onboarding.",
};

const CATEGORIES = [
  {
    slug: "cold-outreach",
    icon: "📧",
    name: "Cold Outreach",
    count: 60,
    summary: "Email and DM sequences that book calls without sounding like every other vendor.",
    formats: ["Cold email v1 (the curiosity opener)", "Cold email v2 (the value-first opener)", "LinkedIn DM sequences", "Follow-up cadences (touches 2–8)", "Reply handlers for objections", "Re-engagement sequences for dead leads"],
    color: "violet",
  },
  {
    slug: "sales-pages",
    icon: "📝",
    name: "Sales Pages",
    count: 50,
    summary: "Persuasive page copy for any offer — from $9 ebooks to $25K consulting engagements.",
    formats: ["Hero sections (5 frameworks)", "Problem agitation blocks", "Offer stack & value justification", "Testimonial integration patterns", "FAQ sections that handle objections", "Order bumps and upsells"],
    color: "violet",
  },
  {
    slug: "content",
    icon: "📱",
    name: "Social Content",
    count: 80,
    summary: "30-day calendars, viral hook frameworks, and platform-specific posts for any niche.",
    formats: ["30-day content calendars (any niche)", "Twitter/X thread frameworks", "LinkedIn long-form posts", "Instagram caption formulas", "TikTok/Reels scripts", "Newsletter post templates"],
    color: "violet",
  },
  {
    slug: "client-onboarding",
    icon: "🤝",
    name: "Client Onboarding",
    count: 45,
    summary: "Proposals, contracts, welcome sequences — the docs that make new clients feel safe.",
    formats: ["Proposal templates (3 service types)", "Contract & SOW boilerplate", "Welcome email sequences (7-day)", "Intake forms by service type", "Kickoff call agendas", "First-week deliverable templates"],
    color: "violet",
  },
  {
    slug: "sops-systems",
    icon: "📊",
    name: "SOPs & Systems",
    count: 55,
    summary: "Document every process in your business so it stops living in your head.",
    formats: ["SOP framework (any process)", "Hiring & training docs", "Quality assurance checklists", "Project management templates", "Reporting templates (weekly/monthly)", "Operations dashboards"],
    color: "violet",
  },
  {
    slug: "customer-support",
    icon: "💬",
    name: "Customer Support",
    count: 40,
    summary: "Handle objections, FAQs, refund requests, and escalations without sounding corporate.",
    formats: ["Refund request responses", "FAQ libraries by industry", "Escalation handling scripts", "Win-back outreach", "Bug/issue acknowledgments", "Feature request replies"],
    color: "violet",
  },
  {
    slug: "research-strategy",
    icon: "🔍",
    name: "Research & Strategy",
    count: 70,
    summary: "Market research, competitor analysis, positioning, and strategic decisions on tap.",
    formats: ["Competitor deep-dive frameworks", "Market sizing prompts", "Customer interview guides", "Positioning statement builders", "Pricing strategy analyzers", "Brand audit prompts"],
    color: "violet",
  },
  {
    slug: "finance-admin",
    icon: "🧾",
    name: "Finance & Admin",
    count: 50,
    summary: "Invoice language, pricing strategy, scope-creep scripts, and money conversations.",
    formats: ["Invoice line items", "Late payment follow-ups", "Pricing change announcements", "Scope creep handlers", "Net-terms negotiation", "Tax preparation checklists"],
    color: "violet",
  },
  {
    slug: "launch-sequences",
    icon: "📣",
    name: "Launch Sequences",
    count: 35,
    summary: "Pre-launch, launch day, and post-launch email funnels that move product.",
    formats: ["Pre-launch teaser sequence (7-day)", "Launch day email cadence", "Cart open / cart close", "Last-chance scarcity emails", "Launch debrief templates", "Post-launch nurture sequences"],
    color: "violet",
  },
  {
    slug: "lead-generation",
    icon: "🎯",
    name: "Lead Generation",
    count: 65,
    summary: "Opt-in copy, lead magnets, nurture sequences — everything to turn strangers into leads.",
    formats: ["Lead magnet ideation prompts", "Opt-in page copy", "Thank you page sequences", "Welcome series (5-7 emails)", "Newsletter content frameworks", "Webinar / workshop scripts"],
    color: "violet",
  },
];

const STRIPE_BUNDLE = "https://buy.stripe.com/7sI8wR50Kf2adoI28X";

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <PromptEmpireNav active="/promptempire/categories" />

      <section className="pt-32 pb-14 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">All 10 categories</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            500 prompts. <span className="text-violet-400">10 business categories.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Browse what&apos;s actually in the library. Every category covers the exact tasks you do every week as a freelancer or business owner.
          </p>
        </div>
      </section>

      <section className="pb-20 px-5">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {CATEGORIES.map((cat) => (
            <div key={cat.slug} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 flex flex-col hover:border-violet-500/30 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-xs font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 rounded-full">
                  {cat.count} prompts
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-white mb-2">{cat.name}</h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{cat.summary}</p>
              <div className="space-y-1 mb-5">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Includes</p>
                {cat.formats.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-gray-400">
                    <span className="text-violet-500 mt-0.5">→</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-5 bg-white/[0.015] border-y border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            All 500. One payment.
          </h2>
          <p className="text-gray-400 mb-8">
            10 categories. PDF + Notion template. Lifetime updates. Works with free ChatGPT.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={STRIPE_BUNDLE} className="bg-violet-600 hover:bg-violet-500 text-white font-extrabold text-lg px-8 py-4 rounded-xl transition-colors">
              Get the Empire Bundle — $67 →
            </a>
            <Link href="/promptempire/preview" className="border border-white/15 hover:border-white/30 text-white font-semibold text-base px-6 py-4 rounded-xl transition-colors">
              See 10 free samples first
            </Link>
          </div>
        </div>
      </section>

      <PromptEmpireFooter />
    </main>
  );
}
