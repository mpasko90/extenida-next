import type { Metadata } from 'next';
import HammersmithAreaContent from '@/components/areas/hammersmith/AreaContent';
import { buildAreaJsonLd } from '@/lib/seo';

const AREA_SLUG = 'hammersmith';
const AREA_NAME = 'Hammersmith';

export async function generateMetadata(): Promise<Metadata> {
  const title = `Home Extensions & Renovations in ${AREA_NAME} | Extendia`;
  const description = `Expert extensions, loft conversions, and refurbishments in ${AREA_NAME}, London.`;
  return {
    title,
    description,
    alternates: { canonical: `/london/${AREA_SLUG}` },
  };
}

export default function HammersmithPage() {
  const jsonLd = buildAreaJsonLd({ areaSlug: AREA_SLUG, areaName: AREA_NAME });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <HammersmithAreaContent />
    </>
  );
}
