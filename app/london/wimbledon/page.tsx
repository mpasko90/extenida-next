import type { Metadata } from 'next';
import WimbledonAreaContent from '@/components/areas/wimbledon/AreaContent';
import { buildAreaJsonLd } from '@/lib/seo';

const AREA_SLUG = 'wimbledon';
const AREA_NAME = 'Wimbledon';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Home Extensions & Renovations in ${AREA_NAME} | Extendia`;
  const description = `Design & build extensions, loft conversions, and renovations in ${AREA_NAME}, London. Trusted local team.`;
  return {
    title,
    description,
    alternates: { canonical: `/london/${AREA_SLUG}` },
  };
}

export default function WimbledonPage() {
  const jsonLd = buildAreaJsonLd({ areaSlug: AREA_SLUG, areaName: AREA_NAME });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <WimbledonAreaContent />
    </>
  );
}
