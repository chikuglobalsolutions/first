import { MetadataRoute } from "next";
import { SYSTEMS, INDUSTRIES } from "@/lib/ai-systems-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXTAUTH_URL || "https://chikuglobalsolutions.com";
  const now = new Date();

  // Top-level + brand hub pages
  const staticPaths: {
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly";
  }[] = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/about", priority: 0.5, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.5, changeFrequency: "monthly" },

    // PromptEmpire
    { path: "/promptempire", priority: 0.9, changeFrequency: "weekly" },
    { path: "/promptempire/about", priority: 0.5, changeFrequency: "monthly" },
    { path: "/promptempire/categories", priority: 0.7, changeFrequency: "weekly" },
    { path: "/promptempire/preview", priority: 0.7, changeFrequency: "monthly" },
    { path: "/promptempire/faq", priority: 0.5, changeFrequency: "monthly" },

    // Chiku Fit
    { path: "/chiku-fit", priority: 0.9, changeFrequency: "weekly" },
    { path: "/chiku-fit/about", priority: 0.5, changeFrequency: "monthly" },
    { path: "/chiku-fit/programs", priority: 0.8, changeFrequency: "weekly" },
    { path: "/chiku-fit/nutrition", priority: 0.7, changeFrequency: "weekly" },
    { path: "/chiku-fit/faq", priority: 0.5, changeFrequency: "monthly" },

    // AI Systems (Dental AI agency)
    { path: "/ai-systems", priority: 0.9, changeFrequency: "weekly" },
    { path: "/ai-systems/about", priority: 0.5, changeFrequency: "monthly" },
    { path: "/ai-systems/process", priority: 0.6, changeFrequency: "monthly" },
    { path: "/ai-systems/systems", priority: 0.7, changeFrequency: "weekly" },
    { path: "/ai-systems/industries", priority: 0.7, changeFrequency: "weekly" },

    // QR generator (product origin)
    { path: "/generate", priority: 0.7, changeFrequency: "weekly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })
  );

  // Dynamic AI-Systems detail pages, generated from the content source of truth
  const systemEntries: MetadataRoute.Sitemap = SYSTEMS.map((s) => ({
    url: `${base}/ai-systems/systems/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const industryEntries: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${base}/ai-systems/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...systemEntries, ...industryEntries];
}
