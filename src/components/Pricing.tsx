import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: 0,
    desc: "Perfect to get started",
    features: [
      "5 QR codes",
      "PNG download",
      "Basic black & white",
      "Community support",
    ],
    cta: "Start for free",
    href: "/generate",
    highlight: false,
  },
  {
    name: "Pro",
    price: 9,
    desc: "For creators & small businesses",
    features: [
      "500 QR codes",
      "Real-time scan analytics",
      "Custom colors & logo",
      "SVG + PDF export",
      "Dynamic (editable) QR codes",
      "Priority email support",
    ],
    cta: "Start Pro — $9/mo",
    href: "/api/stripe/checkout?plan=pro",
    highlight: true,
  },
  {
    name: "Business",
    price: 29,
    desc: "For teams & agencies",
    features: [
      "Unlimited QR codes",
      "Team collaboration",
      "API access",
      "White-label export",
      "Advanced analytics & CSV export",
      "Dedicated support",
    ],
    cta: "Start Business — $29/mo",
    href: "/api/stripe/checkout?plan=business",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-500">
            Start free. Upgrade when you need more.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-brand-600 text-white shadow-2xl shadow-brand-200 scale-105"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.highlight && (
                <div className="text-xs font-bold uppercase tracking-widest mb-4 text-brand-100">
                  Most popular
                </div>
              )}
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? "text-brand-100" : "text-gray-500"}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-5xl font-extrabold ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                  ${plan.price}
                </span>
                <span className={`text-sm ml-1 ${plan.highlight ? "text-brand-100" : "text-gray-500"}`}>
                  /month
                </span>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-brand-100" : "text-brand-500"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlight ? "text-brand-50" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`text-center font-semibold py-3 rounded-xl transition-colors ${
                  plan.highlight
                    ? "bg-white text-brand-600 hover:bg-brand-50"
                    : "bg-brand-600 text-white hover:bg-brand-700"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-gray-400">
          All paid plans include a 14-day money-back guarantee. No questions asked.
        </p>
      </div>
    </section>
  );
}
