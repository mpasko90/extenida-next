import type { Metadata } from 'next';
import SurbitonAreaContent from '@/components/areas/surbiton/AreaContent';
import { buildAreaJsonLd } from '@/lib/seo';

const AREA_SLUG = 'surbiton';
const AREA_NAME = 'Surbiton';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Home Extensions & Renovations in ${AREA_NAME} | Extendia`;
  const description = `Extensions, loft conversions, and renovations in ${AREA_NAME}, London.`;
  return {
    title,
    description,
    alternates: { canonical: `/london/${AREA_SLUG}` },
  };
}

export default function SurbitonPage() {
  const jsonLd = buildAreaJsonLd({ areaSlug: AREA_SLUG, areaName: AREA_NAME });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <SurbitonAreaContent />
    </>
  );
}
