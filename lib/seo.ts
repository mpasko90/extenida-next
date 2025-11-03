/**
 * JSON-LD helpers for area pages under /london/[area].
 *
 * These utilities generate typed Schema.org objects for:
 * - BreadcrumbList: Home > London > Area
 * - LocalBusiness: Company details, tailored with the current area
 *
 * Usage in a Server Component page (app/london/[area]/page.tsx):
 *
 * import { buildAreaJsonLd } from '@/lib/seo'
 *
 * export default async function Page({ params }: { params: { area: string } }) {
 *   const areaSlug = params.area;
 *   const areaName = toTitleCase(areaSlug.replace(/-/g, ' '));
 *   const jsonLd = buildAreaJsonLd({ areaSlug, areaName });
 *
 *   return (
 *     <>
 *       <script
 *         type="application/ld+json"
 *         dangerouslySetInnerHTML={{ __html: jsonLd }}
 *       />
 *     </>
 *   );
 * }
 */

import { companyInfo } from '@/lib/companyInfo';

// Minimal types to keep helpers ergonomic; not exhaustive schema coverage
type WithContext<T> = T & { '@context': 'https://schema.org' };

type BreadcrumbList = WithContext<{
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}>;

type PostalAddress = {
  '@type': 'PostalAddress';
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
};

type LocalBusiness = WithContext<{
  '@type': 'LocalBusiness';
  name: string;
  url: string;
  email?: string;
  telephone?: string;
  address?: PostalAddress;
  areaServed?: { '@type': 'AdministrativeArea' | 'City'; name: string } | string;
}>;

export function ensureNoTrailingSlash(url: string): string {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

export function toTitleCase(input: string): string {
  return input
    .toLowerCase()
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0]?.toUpperCase() + w.slice(1))
    .join(' ');
}

export function canonicalizeSlug(input: string): string {
  return input.trim().toLowerCase().replace(/\s+/g, '-');
}

interface AreaParams {
  areaSlug: string; // lowercase, hyphenated
  areaName: string; // human-readable (e.g., "Wimbledon")
  siteUrl?: string; // defaults to companyInfo.website
}

export function buildBreadcrumbList({ areaSlug, areaName, siteUrl }: AreaParams): BreadcrumbList {
  const base = ensureNoTrailingSlash(siteUrl ?? companyInfo.website);
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: base,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'London',
        item: `${base}/london`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: areaName,
        item: `${base}/london/${areaSlug}`,
      },
    ],
  };
}

export function buildLocalBusiness({ areaName, siteUrl }: { areaName: string; siteUrl?: string }): LocalBusiness {
  const base = ensureNoTrailingSlash(siteUrl ?? companyInfo.website);
  const { registeredOffice } = companyInfo;
  const address: PostalAddress = {
    '@type': 'PostalAddress',
    // Keep registered office street for legitimacy, but localise to area per SEO acceptance
    streetAddress: [registeredOffice.line1, registeredOffice.line2].filter(Boolean).join(', '),
    addressLocality: areaName, // Acceptance: Area name as locality (e.g., "Putney")
    addressRegion: 'London',   // Acceptance: Region is London
    addressCountry: 'GB',
    postalCode: registeredOffice.postcode,
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: companyInfo.name,
    url: base,
    email: companyInfo.email,
    telephone: companyInfo.phone?.international,
    address,
    // Tailor to area page for SEO clarity
    areaServed: { '@type': 'City', name: `London - ${areaName}` },
  };
}

/**
 * Returns a pretty-printed JSON string representing an array of JSON-LD nodes
 * including BreadcrumbList and LocalBusiness for the given area.
 */
export function buildAreaJsonLd(params: AreaParams): string {
  const { areaSlug, areaName } = params;
  const slug = canonicalizeSlug(areaSlug);
  const name = areaName || toTitleCase(slug.replace(/-/g, ' '));

  const nodes = [
    buildBreadcrumbList({ ...params, areaSlug: slug, areaName: name }),
    buildLocalBusiness({ areaName: name, siteUrl: params.siteUrl }),
  ];
  return JSON.stringify(nodes, null, 2);
}

export type { BreadcrumbList, LocalBusiness };
