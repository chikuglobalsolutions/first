// Maps PromptEmpire products to the PDFs included with each purchase.
// Used by /delivery (server component) and /api/delivery/download/[product]
// to gate downloads to what the Stripe Checkout Session actually paid for.
//
// Matching is by Stripe product name (case-insensitive, substring). The
// names mirror the seed catalog in src/app/api/admin/seed-stripe/route.ts.
// If you rename a product in Stripe, add an alias here.

export type PdfKey =
  | "500-ai-business-prompts"
  | "freelancer-command-center"
  | "30-day-content-machine"
  | "email-empire-swipe-file";

export type PromptEmpireProduct = {
  key: string;
  name: string;
  aliases: string[]; // lowercase substrings that identify the same product
  includes: PdfKey[];
};

export const PROMPTEMPIRE_PRODUCTS: PromptEmpireProduct[] = [
  {
    key: "pe_500_prompts",
    name: "500 AI Business Prompts",
    aliases: ["500 ai business prompts", "500 prompts", "prompt pack"],
    includes: ["500-ai-business-prompts"],
  },
  {
    key: "pe_freelancer_command_center",
    name: "Freelancer Command Center",
    aliases: ["freelancer command center", "command center"],
    // Per the product description: "Includes 500 Prompts pack."
    includes: ["500-ai-business-prompts", "freelancer-command-center"],
  },
  {
    key: "pe_empire_bundle",
    name: "Empire Bundle",
    aliases: ["empire bundle", "full bundle", "the empire"],
    // Per description: "The full PromptEmpire stack."
    includes: [
      "500-ai-business-prompts",
      "freelancer-command-center",
      "30-day-content-machine",
      "email-empire-swipe-file",
    ],
  },
];

export const PDF_FILES: Record<PdfKey, { filename: string; displayName: string }> = {
  "500-ai-business-prompts": {
    filename: "500-ai-business-prompts.pdf",
    displayName: "500 AI Business Prompts.pdf",
  },
  "freelancer-command-center": {
    filename: "freelancer-command-center.pdf",
    displayName: "Freelancer Command Center.pdf",
  },
  "30-day-content-machine": {
    filename: "30-day-content-machine.pdf",
    displayName: "30-Day Content Machine.pdf",
  },
  "email-empire-swipe-file": {
    filename: "email-empire-swipe-file.pdf",
    displayName: "Email Empire Swipe File.pdf",
  },
};

export function matchProductByName(name: string): PromptEmpireProduct | null {
  const needle = name.trim().toLowerCase();
  return (
    PROMPTEMPIRE_PRODUCTS.find((p) =>
      p.aliases.some((a) => needle.includes(a))
    ) ?? null
  );
}

// Aggregate every PDF unlocked by a set of purchased product names.
export function pdfsForProductNames(names: string[]): PdfKey[] {
  const unlocked = new Set<PdfKey>();
  for (const name of names) {
    const product = matchProductByName(name);
    if (!product) continue;
    for (const pdf of product.includes) unlocked.add(pdf);
  }
  return Array.from(unlocked);
}
