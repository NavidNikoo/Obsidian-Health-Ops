import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  const routes = [
    "",
    "/services",
    "/services/behavioral-health-billing",
    "/pricing",
    "/privacy-policy",
    "/about",
    "/resources",
    "/faq",
    "/contact",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
