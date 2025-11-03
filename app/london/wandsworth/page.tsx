import type { Metadata } from 'next';
import WandsworthAreaContent from '@/components/areas/wandsworth/AreaContent';
import { buildAreaJsonLd } from '@/lib/seo';

const AREA_SLUG = 'wandsworth';
const AREA_NAME = 'Wandsworth';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Home Extensions & Renovations in ${AREA_NAME} | Extendia`;
  const description = `Extensions, loft conversions, and renovations in ${AREA_NAME}, London.`;
  return {
    title,
    description,
    alternates: { canonical: `/london/${AREA_SLUG}` },
  };
}

export default function WandsworthPage() {
  const jsonLd = buildAreaJsonLd({ areaSlug: AREA_SLUG, areaName: AREA_NAME });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <WandsworthAreaContent />
    </>
  );
}
