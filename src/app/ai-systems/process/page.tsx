import type { Metadata } from "next";
import Link from "next/link";
import { AISystemsNav, AISystemsFooter } from "@/components/AISystemsNav";

export const metadata: Metadata = {
  title: "How We Work — Chiku AI Systems",
  description:
    "From intake to live system in 2-3 weeks. Our process: apply → strategy call → build → optimize. No code, no complexity — just results.",
};

const STEPS = [
  {
    number: "01",
    label: "Apply",
    icon: "📋",
    title: "Tell us about your business",
    desc: "Fill out the 3-minute intake form. We ask about your current volume, biggest growth bottleneck, and what tools you're already using. No tech knowledge required.",
    details: [
      "3-minute intake form — no sales calls to book first",
      "Tell us your industry, current volume, and main bottleneck",
      "List any tools you're already using (or tell us you have none)",
      "We review every submission within 24 hours",
    ],
    time: "3 minutes",
  },
  {
    number: "02",
    label: "Strategy call",
    icon: "📞",
    title: "30-minute strategy call",
    desc: "We jump on a call to map out the exact systems that will move the needle for your business. You'll leave with a specific recommendation and a clear scope before any money changes hands.",
    details: [
      "We review your intake form before the call",
      "Walk through your current workflow and identify the exact gaps",
      "Recommend 1-3 systems in priority order",
      "Present a clear timeline and deliverables",
    ],
    time: "30 minutes",
  },
  {
    number: "03",
    label: "Build",
    icon: "⚙️",
    title: "We build your system in 2-3 weeks",
    desc: "Once you approve the scope, we build. You get a dedicated build channel for updates. We handle every integration, every automation, every piece of copy.",
    details: [
      "System built and integrated with your existing tools",
      "All messaging written and customized to your brand voice",
      "Testing with real scenarios before we hand over",
      "Step-by-step loom walkthrough of everything we built",
    ],
    time: "2-3 weeks",
  },
  {
    number: "04",
    label: "Optimize",
    icon: "📈",
    title: "30-day optimization period",
    desc: "We monitor the system for the first 30 days, make adjustments based on real data, and deliver a performance report. Then we set up the ongoing retainer — or hand it off fully if you prefer.",
    details: [
      "Weekly performance check during the first 30 days",
      "Adjustments based on real conversion data",
      "End-of-month report with results vs. projections",
      "Retainer option: we keep managing + improving indefinitely",
    ],
    time: "30 days",
  },
];

const FAQS = [
  {
    q: "Do I need to be technical to work with you?",
    a: "No. We handle every technical piece — integrations, automations, testing. You'll need to give us access to your existing tools (we'll tell you exactly what), and we handle the rest.",
  },
  {
    q: "What if I don't have any tech tools set up yet?",
    a: "That's fine. We'll recommend the tools that make sense for your budget and build with those. Starting from scratch is often easier than untangling an existing mess.",
  },
  {
    q: "How long does setup actually take?",
    a: "The setup phase is 2-3 weeks from the day you sign and pay. Complex multi-system setups with custom integrations may take an extra week. We'll tell you exactly in the strategy call.",
  },
  {
    q: "What happens if the system isn't performing after 30 days?",
    a: "We investigate. Our systems are built on proven frameworks, but every business is different. If something isn't converting, we dig into the data, adjust, and retest. We don't walk away after delivery.",
  },
  {
    q: "Do I own the system after it's built?",
    a: "Yes. All workflows, sequences, and automations are in your accounts. The retainer is optional — if you want to manage it yourself after the 30-day period, you can. We'll document everything for you.",
  },
  {
    q: "What does the monthly retainer include?",
    a: "Monitoring, optimization, and improvement based on your performance data. Plus access to us for questions, changes, and new automations as your business evolves. See the pricing page for tier specifics.",
  },
];

const GUARANTEES = [
  {
    icon: "⚡",
    title: "Speed guarantee",
    desc: "Your system goes live within the agreed timeline. If we miss it for reasons within our control, we refund one month of retainer.",
  },
  {
    icon: "🎯",
    title: "We scope before we charge",
    desc: "You'll have a full breakdown of deliverables and timeline before we ask for payment. No surprises.",
  },
  {
    icon: "🔓",
    title: "You own everything",
    desc: "The automations, sequences, and integrations all live in your accounts. No hostage situations — cancel anytime.",
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <AISystemsNav active="/ai-systems/process" />

      {/* Hero */}
      <section className="pt-32 pb-14 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">How we work</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            Live system in <span className="text-sky-400">2-3 weeks.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            No 6-month agency timelines. No discovery sprints that lead to a strategy deck. We build, we test, we hand
            over a working system.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="pb-20 px-5">
        <div className="max-w-4xl mx-auto space-y-5">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="bg-white/[0.03] border border-white/8 rounded-2xl p-8 flex flex-col md:flex-row gap-8"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-sky-500/15 text-sky-400 font-extrabold rounded-xl flex items-center justify-center text-xl mb-4">
                  {step.icon}
                </div>
                <div className="text-4xl font-black text-white/10 leading-none">{step.number}</div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs text-sky-400 font-bold uppercase tracking-widest mb-1">{step.label}</p>
                    <h2 className="text-xl font-extrabold text-white">{step.title}</h2>
                  </div>
                  <span className="text-xs font-bold text-gray-500 bg-white/[0.05] border border-white/10 px-3 py-1 rounded-lg whitespace-nowrap ml-4">
                    {step.time}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-5">{step.desc}</p>
                <ul className="space-y-2">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-sky-400 mt-0.5">→</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden md:flex items-center text-gray-700 text-2xl self-center">
                  {/* connector arrow shown via border-t instead */}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 px-5 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">What you can count on</p>
            <h2 className="text-3xl font-extrabold text-white">Our commitments</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {GUARANTEES.map((g) => (
              <div key={g.title} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6">
                <div className="text-3xl mb-4">{g.icon}</div>
                <h3 className="font-extrabold text-white mb-2">{g.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-3">Common questions</p>
            <h2 className="text-3xl font-extrabold text-white">Process FAQs</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white/[0.03] border border-white/8 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-white hover:text-sky-300 transition-colors">
                  {faq.q}
                  <span className="text-gray-500 group-open:text-sky-400 transition-colors text-lg flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 bg-white/[0.015] border-y border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Start with the intake form.</h2>
          <p className="text-gray-400 mb-8">
            3 minutes to tell us about your business. We respond within 24 hours with a recommendation and next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/ai-systems#intake"
              className="bg-sky-600 hover:bg-sky-500 text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              Apply now →
            </Link>
            <Link
              href="/ai-systems/systems"
              className="border border-white/15 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              See the 6 systems
            </Link>
          </div>
        </div>
      </section>

      <AISystemsFooter />
    </main>
  );
}
