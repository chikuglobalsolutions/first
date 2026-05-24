const features = [
  {
    icon: "⚡",
    title: "Instant generation",
    desc: "Create a QR code in under 2 seconds. No account needed for the free tier.",
  },
  {
    icon: "📊",
    title: "Real-time analytics",
    desc: "See exactly how many times your QR was scanned, where, and on what device.",
  },
  {
    icon: "🎨",
    title: "Custom branding",
    desc: "Match your brand with custom colors, gradients, and logo overlays.",
  },
  {
    icon: "🔗",
    title: "Dynamic QR codes",
    desc: "Change the destination URL at any time — the QR code stays the same.",
  },
  {
    icon: "📥",
    title: "High-res download",
    desc: "Export as PNG, SVG, or PDF — ready for print at any size.",
  },
  {
    icon: "🔒",
    title: "Always reliable",
    desc: "99.9% uptime SLA. Your QR codes keep working even while you sleep.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Everything you need to grow
          </h2>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">
            One tool. From side hustle to full-time income.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
