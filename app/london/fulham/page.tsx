import type { Metadata } from 'next';
import FulhamAreaContent from '@/components/areas/fulham/AreaContent';
import { buildAreaJsonLd } from '@/lib/seo';

const AREA_SLUG = 'fulham';
const AREA_NAME = 'Fulham';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Home Extensions & Renovations in ${AREA_NAME} | Extendia`;
  const description = `Premium extensions, loft conversions, and renovations in ${AREA_NAME}, London.`;
  return {
    title,
    description,
    alternates: { canonical: `/london/${AREA_SLUG}` },
  };
}

export default function FulhamPage() {
  const jsonLd = buildAreaJsonLd({ areaSlug: AREA_SLUG, areaName: AREA_NAME });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <FulhamAreaContent />
    </>
  );
}
