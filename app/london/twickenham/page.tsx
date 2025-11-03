import type { Metadata } from 'next';
import TwickenhamAreaContent from '@/components/areas/twickenham/AreaContent';
import { buildAreaJsonLd } from '@/lib/seo';

const AREA_SLUG = 'twickenham';
const AREA_NAME = 'Twickenham';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Home Extensions & Renovations in ${AREA_NAME} | Extendia`;
  const description = `Extensions, loft conversions, and renovations across ${AREA_NAME}.`;
  return {
    title,
    description,
    alternates: { canonical: `/london/${AREA_SLUG}` },
  };
}

export default function TwickenhamPage() {
  const jsonLd = buildAreaJsonLd({ areaSlug: AREA_SLUG, areaName: AREA_NAME });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <TwickenhamAreaContent />
    </>
  );
}
