import Link from "next/link";

const SUB_LINKS = [
  { href: "/ai-systems", label: "Overview" },
  { href: "/ai-systems/systems", label: "Systems" },
  { href: "/ai-systems/industries", label: "Industries" },
  { href: "/ai-systems/process", label: "Process" },
  { href: "/ai-systems/about", label: "About" },
];

export function AISystemsNav({ active }: { active: string }) {
  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-xs text-gray-500 hover:text-gray-300 transition-colors font-medium">
              Chiku Global Solutions
            </Link>
            <span className="text-white/20 text-sm">›</span>
            <Link href="/ai-systems" className="font-extrabold text-white tracking-tight text-sm">Chiku AI Systems</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/promptempire" className="text-xs text-gray-400 hover:text-white transition-colors hidden md:block">PromptEmpire</Link>
            <Link href="/chiku-fit" className="text-xs text-gray-400 hover:text-white transition-colors hidden md:block">Chiku Fit</Link>
            <Link
              href="/ai-systems#intake"
              className="text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white px-5 py-2 rounded-lg transition-colors"
            >
              Apply Now →
            </Link>
          </div>
        </div>
      </nav>

      <nav className="fixed top-14 inset-x-0 z-40 bg-gray-950/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 h-11 flex items-center gap-1 overflow-x-auto">
          {SUB_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                active === link.href || (link.href !== "/ai-systems" && active.startsWith(link.href))
                  ? "bg-sky-500/15 text-sky-300"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export function AISystemsFooter() {
  return (
    <footer className="py-10 px-5 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
        <div>
          <span className="text-gray-400 font-bold">Chiku AI Systems</span>
          {" · "}A service of{" "}
          <Link href="/" className="text-gray-400 hover:text-white font-semibold transition-colors">
            Chiku Global Solutions LLC
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/ai-systems" className="hover:text-gray-400 transition-colors">Overview</Link>
          <Link href="/ai-systems/systems" className="hover:text-gray-400 transition-colors">Systems</Link>
          <Link href="/ai-systems/industries" className="hover:text-gray-400 transition-colors">Industries</Link>
          <Link href="/ai-systems/process" className="hover:text-gray-400 transition-colors">Process</Link>
          <Link href="/ai-systems/about" className="hover:text-gray-400 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
        </div>
        <p>© {new Date().getFullYear()} Chiku Global Solutions LLC</p>
      </div>
    </footer>
  );
}
