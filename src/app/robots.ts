import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXTAUTH_URL || "https://chikuglobalsolutions.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/promptempire", "/chiku-fit", "/generate", "/blog", "/ai-systems"],
        disallow: ["/api/", "/dashboard", "/login", "/verify"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
