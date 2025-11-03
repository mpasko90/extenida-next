import type { Metadata } from 'next';
import SurreyAreaContent from '@/components/areas/surrey/AreaContent';
import { buildAreaJsonLd } from '@/lib/seo';

const AREA_SLUG = 'surrey';
const AREA_NAME = 'Surrey';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Home Extensions & Renovations in ${AREA_NAME} | Extendia`;
  const description = `Extensions, loft conversions, and renovations across ${AREA_NAME}.`;
  return {
    title,
    description,
    alternates: { canonical: `/london/${AREA_SLUG}` },
  };
}

export default function SurreyPage() {
  const jsonLd = buildAreaJsonLd({ areaSlug: AREA_SLUG, areaName: AREA_NAME });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <SurreyAreaContent />
    </>
  );
}
