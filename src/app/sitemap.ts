import { MetadataRoute } from "next";
import { POSTS } from "@/lib/promptempire-posts";
import { AUDIENCES } from "@/lib/promptempire-audiences";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXTAUTH_URL || "https://chikuglobalsolutions.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },

    // PromptEmpire
    { url: `${base}/promptempire`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/promptempire/preview`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/promptempire/categories`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/promptempire/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/promptempire/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/promptempire/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Other brands
    { url: `${base}/chiku-fit`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ai-systems`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/generate`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${base}/promptempire/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const audienceRoutes: MetadataRoute.Sitemap = AUDIENCES.map((a) => ({
    url: `${base}/promptempire/for/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...blogRoutes, ...audienceRoutes];
}
