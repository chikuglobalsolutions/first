import type { Metadata } from "next";
import Link from "next/link";
import { PromptEmpireNav, PromptEmpireFooter } from "@/components/PromptEmpireNav";

export const metadata: Metadata = {
  title: "FAQ — PromptEmpire | 500 AI Business Prompts",
  description:
    "Answers to every question about the 500 AI Business Prompts library — what's inside, how it works, who it's for, ADHD-friendliness, refunds, and more.",
};

const FAQ_SECTIONS = [
  {
    title: "The product",
    items: [
      {
        q: "What exactly do I get?",
        a: "A PDF with 500 prompts organized into 10 business categories, plus a Notion template you can duplicate in one click. Both delivered to your email instantly after purchase. You can read them on any device.",
      },
      {
        q: "Are these prompts really 'done-for-you' or do I need to customize them?",
        a: "They're fill-in-the-blank. Most prompts have 2–4 variables you swap in (your business, your customer, your offer). Then you paste into ChatGPT and get usable output in one shot. No prompt engineering required.",
      },
      {
        q: "What's the difference between the 3 tiers?",
        a: "$37: Just the 500 prompts. $47: Adds the Freelancer Command Center (proposals, contracts, client onboarding workspace). $67: Empire Bundle — everything above + agency-scale prompts, white-label templates, and priority support. Most people pick the Bundle because the value-per-dollar jumps significantly.",
      },
      {
        q: "Can I see what's inside before buying?",
        a: "Yes. We made a free preview with 10 real prompts you can copy and use right now. No email signup required.",
      },
    ],
  },
  {
    title: "AI tools",
    items: [
      {
        q: "Do I need a paid AI subscription like ChatGPT Plus?",
        a: "No. Every prompt is designed to work with the free tier of ChatGPT, Claude, or Gemini. No paid plan required.",
      },
      {
        q: "Which AI tool works best?",
        a: "ChatGPT (free or paid) handles most prompts beautifully. Claude is often better for long-form writing like sales pages. Gemini works for quick tasks. The prompts are written to work across all of them.",
      },
      {
        q: "Will these prompts still work in 6 months when AI tools update?",
        a: "Yes. The prompts are written using durable patterns, not exploit tricks. They get better as models improve, not worse. Plus you get lifetime updates if we ever need to refresh anything.",
      },
    ],
  },
  {
    title: "Who it's for",
    items: [
      {
        q: "Will this work for my niche?",
        a: "Almost certainly. The 10 categories cover the universal tasks any business needs: outreach, sales pages, content, support, etc. Most prompts have a niche slot you fill in (e.g., 'I sell [SERVICE] to [CUSTOMER TYPE]'). It's been used for freelancing, e-commerce, coaching, consulting, agencies, SaaS, local services, and more.",
      },
      {
        q: "I have ADHD. Will this actually work for me?",
        a: "Yes — it was specifically built for you. Aku (the founder) has ADHD and designed every prompt to eliminate decision fatigue: clear inputs, clear outputs, no setup, no 'figure it out yourself.' Copy, paste, ship.",
      },
      {
        q: "I'm a complete beginner. Is this too advanced?",
        a: "It's actually easier as a beginner. There's nothing to unlearn. You don't need to know 'good' prompts vs 'bad' prompts — every prompt in the pack is already optimized.",
      },
      {
        q: "I'm an experienced freelancer. Will I learn anything new?",
        a: "Probably not new concepts — but you'll save hours. Experienced operators usually get the most ROI because the prompts replace work they already do well, just slowly.",
      },
    ],
  },
  {
    title: "Delivery & ownership",
    items: [
      {
        q: "How fast do I get the files?",
        a: "Instantly. The moment Stripe confirms payment, you get an email with the download link and the Notion template. If you don't see it within 60 seconds, check spam — and email us if it's missing.",
      },
      {
        q: "Can I use these for client work?",
        a: "Yes. You can use the outputs from these prompts in any client project. You just can't resell the prompts themselves as your own product.",
      },
      {
        q: "Do I have to install anything?",
        a: "No. It's a PDF and a Notion link. Works on any device with no setup.",
      },
      {
        q: "Will I get updates?",
        a: "Yes — lifetime updates included for everyone, every tier. New prompts and refreshes get added periodically and you keep access.",
      },
    ],
  },
  {
    title: "Refunds & support",
    items: [
      {
        q: "What's the refund policy?",
        a: "14-day, no-questions-asked. Email chikuglobalsolutions@gmail.com and you'll get a full refund the same day. No friction, no upsell.",
      },
      {
        q: "What if my download link doesn't work?",
        a: "Email chikuglobalsolutions@gmail.com with your order email and we'll resend manually within hours.",
      },
      {
        q: "Who answers support emails?",
        a: "Aku, the founder. Every email goes to a real human (the same one who built the product). No ticket system, no bots.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <PromptEmpireNav active="/promptempire/faq" />

      <section className="pt-32 pb-14 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            Every question, answered.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Can&apos;t find your answer here? Email{" "}
            <a href="mailto:chikuglobalsolutions@gmail.com" className="text-violet-400 hover:text-violet-300 underline">
              chikuglobalsolutions@gmail.com
            </a>
            {" "}— responses within 24 hours.
          </p>
        </div>
      </section>

      <section className="pb-20 px-5">
        <div className="max-w-3xl mx-auto space-y-12">
          {FAQ_SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-6">{section.title}</h2>
              <div className="space-y-0 bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden">
                {section.items.map((item, i) => (
                  <details key={item.q} className={`group ${i !== 0 ? "border-t border-white/5" : ""}`}>
                    <summary className="px-6 py-5 cursor-pointer flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                      <h3 className="font-bold text-white text-base">{item.q}</h3>
                      <span className="text-violet-400 text-xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">{item.a}</div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-5 bg-white/[0.015] border-t border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to grab it?</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a href="https://buy.stripe.com/7sI8wR50Kf2adoI28X" className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
              Get the Empire Bundle — $67
            </a>
            <Link href="/promptempire" className="border border-white/15 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              See all pricing options
            </Link>
          </div>
        </div>
      </section>

      <PromptEmpireFooter />
    </main>
  );
}
