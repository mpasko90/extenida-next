import { NextResponse } from 'next/server';
import { services } from '@/data/services';
import { portfolioProjects } from '@/data/portfolio';

/**
 * Explicit sitemap route handler to ensure stable generation in production.
 * Returns application/xml with absolute URLs based on NEXT_PUBLIC_SITE_URL (fallback: https://extendia.co.uk).
 */
export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://extendia.co.uk';

  const urls: string[] = [];

  // Static routes
  const staticRoutes = ['/', '/about', '/contact', '/portfolio', '/privacy', '/terms', '/london', '/services'];
  urls.push(...staticRoutes.map((p) => new URL(p, siteUrl).toString()));

  // Service listing pages
  urls.push(...services.map((s) => new URL(`/services/${s.slug}`, siteUrl).toString()));

  // Areas
  const areas = ['wimbledon','kingston','richmond','surbiton','putney','twickenham','wandsworth','fulham','hammersmith','surrey'];
  urls.push(...areas.map((a) => new URL(`/london/${a}`, siteUrl).toString()));

  // Service+Area combos
  for (const s of services) {
    for (const a of areas) {
      urls.push(new URL(`/services/${s.slug}/${a}`, siteUrl).toString());
    }
  }

  // Portfolio detail pages
  urls.push(...portfolioProjects.map((p) => new URL(`/portfolio/${p.slug}`, siteUrl).toString()));

  // Legacy/alternate paths that exist in the app tree
  urls.push(
    new URL('/services/house-extensions', siteUrl).toString(),
    new URL('/services/house-extensions/Kingston', siteUrl).toString(),
    new URL('/services/house-extensions/Richmond', siteUrl).toString(),
  );

  const items = Array.from(new Set(urls)).map((u) => `  <url><loc>${u}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>`;

  return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
