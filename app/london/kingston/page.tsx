import type { Metadata } from 'next';
import KingstonAreaContent from '@/components/areas/kingston/AreaContent';
import { buildAreaJsonLd } from '@/lib/seo';

const AREA_SLUG = 'kingston';
const AREA_NAME = 'Kingston';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Home Extensions & Renovations in ${AREA_NAME} | Extendia`;
  const description = `Design & build extensions, loft conversions, and renovations in ${AREA_NAME}, London.`;
  return {
    title,
    description,
    alternates: { canonical: `/london/${AREA_SLUG}` },
  };
}

export default function KingstonPage() {
  const jsonLd = buildAreaJsonLd({ areaSlug: AREA_SLUG, areaName: AREA_NAME });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <KingstonAreaContent />
    </>
  );
}
