import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { portfolioProjects } from "@/data/portfolio";

/**
 * Generate XML sitemap (served at /sitemap.xml) for Search Engines.
 * Includes top-level pages, service pages, area pages, service+area combos, and portfolio detail pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://extendia.co.uk";

  // Core static routes
  const staticRoutes = ["/", "/about", "/contact", "/portfolio", "/privacy", "/terms", "/areas", "/services", "/sitemap"].map(
    (path) => ({ url: new URL(path, siteUrl).toString() })
  );

  // Service listing pages
  const serviceRoutes = services.map((s) => ({ url: new URL(`/services/${s.slug}`, siteUrl).toString() }));

  // Area pages (mirror human sitemap list)
  const areas = ["wimbledon", "kingston", "richmond", "surbiton", "putney", "twickenham"];
  const areaRoutes = areas.map((a) => ({ url: new URL(`/areas/${a}`, siteUrl).toString() }));

  // Service + Area combinations (common landing pages for local SEO)
  const serviceAreaCombos = services.flatMap((s) =>
    areas.map((a) => ({ url: new URL(`/services/${s.slug}/${a}`, siteUrl).toString() }))
  );

  // Portfolio detail pages
  const portfolioRoutes = portfolioProjects.map((p) => ({ url: new URL(`/portfolio/${p.slug}`, siteUrl).toString() }));

  // Some legacy/alternate paths that exist in the app tree
  const legacy = ["/services/house-extensions", "/services/house-extensions/Kingston", "/services/house-extensions/Richmond"].map(
    (p) => ({ url: new URL(p, siteUrl).toString() })
  );

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...areaRoutes,
    ...serviceAreaCombos,
    ...portfolioRoutes,
    ...legacy,
  ];
}
