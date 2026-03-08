import type { MetadataRoute } from "next";
import { siteUrl } from "./components/seo";

const routeEntries = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/services", priority: 0.9 },
  { path: "/doctors", priority: 0.8 },
  { path: "/care", priority: 0.8 },
  { path: "/testimonials", priority: 0.8 },
  { path: "/faq", priority: 0.8 },
  { path: "/contact", priority: 0.9 },
  { path: "/book-appointment", priority: 0.9 },
  { path: "/privacy", priority: 0.5 },
  { path: "/terms", priority: 0.5 }
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routeEntries.map((entry) => ({
    url: `${siteUrl}${entry.path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: entry.priority
  }));
}
