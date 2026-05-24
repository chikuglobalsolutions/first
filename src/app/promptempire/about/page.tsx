import type { Metadata } from "next";
import Link from "next/link";
import { PromptEmpireNav, PromptEmpireFooter } from "@/components/PromptEmpireNav";

export const metadata: Metadata = {
  title: "About PromptEmpire — Built by an ADHD Founder, For ADHD Founders",
  description:
    "The story behind PromptEmpire — how Aku Nwabeke built 500 AI prompts specifically to eliminate the blank-page paralysis that destroys ADHD productivity.",
};

export default function PromptEmpireAboutPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <PromptEmpireNav active="/promptempire/about" />

      <section className="pt-32 pb-14 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">About PromptEmpire</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Built for the brain that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
              freezes at &quot;just write the email.&quot;
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            PromptEmpire didn&apos;t start as a product. It started as a survival kit.
          </p>
        </div>
      </section>

      <section className="py-12 px-5">
        <div className="max-w-3xl mx-auto space-y-6 text-gray-300 leading-relaxed text-lg">
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4">The problem nobody talks about</h2>
            <p>
              Most business advice assumes you can sit down, focus, and execute a multi-step plan.
              For founders with ADHD, that single assumption is where everything breaks.
            </p>
            <p className="mt-4">
              The plan is fine. The motivation is real. The skill is there.
              But the moment it&apos;s time to actually write the cold email or the sales page or the SOP —
              the brain hits a wall. You open a blank doc. You stare. You check your phone.
              Two hours pass. Nothing ships.
            </p>
          </div>

          <div className="bg-white/[0.03] border-l-4 border-violet-500 rounded-r-xl p-6 my-8 italic text-violet-100/80">
            <p>
              &quot;I lost more years to executive function than to lack of talent or strategy.
              Every business I built stalled at the same place: the part where you have to start writing something from scratch.&quot;
            </p>
            <p className="text-sm text-gray-500 mt-3 not-italic">— Aku Nwabeke, founder</p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4">The realization</h2>
            <p>
              The blank page is the bottleneck. Eliminate the blank page, eliminate the bottleneck.
            </p>
            <p className="mt-4">
              AI tools like ChatGPT had quietly solved the writing problem — but only if you knew exactly what to prompt.
              Most ADHD founders don&apos;t. They open ChatGPT, ask &quot;write me a cold email,&quot; get something generic,
              tweak it for an hour, and still ship something mediocre.
            </p>
            <p className="mt-4">
              The fix wasn&apos;t better AI. It was better prompts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4">What we built</h2>
            <p>
              500 prompts, organized by what you actually do in a business: cold outreach, sales pages, content,
              SOPs, support, research, finance, launch sequences, lead gen, and client onboarding.
            </p>
            <p className="mt-4">
              Every prompt is structured the same way: name the inputs, name the output format,
              eliminate decision points. Open the PDF, find the task, copy the prompt, paste into ChatGPT,
              fill in 2–3 blanks. Done in under 5 minutes.
            </p>
            <p className="mt-4">
              No setup. No tutorials. No &quot;learn prompt engineering first.&quot;
              The whole point is that you don&apos;t have to learn anything new.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4">Who it&apos;s really for</h2>
            <p>
              We say it&apos;s built for ADHD founders, and it is. But it also works for:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-400">
              <li>Freelancers who hate writing proposals</li>
              <li>Agency owners who need to document SOPs they&apos;ve been carrying in their head</li>
              <li>Solopreneurs who can&apos;t afford a $5K/mo copywriter</li>
              <li>Anyone who&apos;s ever lost an entire afternoon to a blank screen</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4">Why it&apos;s priced where it is</h2>
            <p>
              We could charge $297 for this. People do — for less.
            </p>
            <p className="mt-4">
              But PromptEmpire is the entry point to Chiku Global Solutions. Most buyers eventually look at
              <Link href="/ai-systems" className="text-violet-400 hover:text-violet-300 underline mx-1">our AI Systems agency</Link>
              for done-for-you work. Starting at $37 means anyone can become a customer — and the ones who need more, find their way.
            </p>
            <p className="mt-4">
              <span className="text-white font-bold">Buy once, own forever, lifetime updates included.</span>
              {" "}If you ever want a refund within 14 days, email and you&apos;ll get it the same day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-5 border-t border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Stop reading. Start shipping.</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a href="https://buy.stripe.com/7sI8wR50Kf2adoI28X" className="bg-violet-600 hover:bg-violet-500 text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
              Get the Empire Bundle — $67
            </a>
            <Link href="/promptempire/preview" className="border border-white/15 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              Try 10 free prompts first
            </Link>
          </div>
        </div>
      </section>

      <PromptEmpireFooter />
    </main>
  );
}
