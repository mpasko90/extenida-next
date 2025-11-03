import type { Metadata } from 'next';
import PutneyAreaContent from '@/components/areas/putney/AreaContent';
import { buildAreaJsonLd } from '@/lib/seo';

const AREA_SLUG = 'putney';
const AREA_NAME = 'Putney';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Home Extensions & Renovations in ${AREA_NAME} | Extendia`;
  const description = `Design & build extensions, loft conversions, and renovations in ${AREA_NAME}, London. Trusted local team.`;
  return {
    title,
    description,
    alternates: { canonical: `/london/${AREA_SLUG}` },
  };
}

export default function PutneyPage() {
  const jsonLd = buildAreaJsonLd({ areaSlug: AREA_SLUG, areaName: AREA_NAME });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <PutneyAreaContent />
    </>
  );
}
