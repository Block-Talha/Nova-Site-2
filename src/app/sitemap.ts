import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://novasync.io",
      lastModified: new Date("2026-03-31"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
