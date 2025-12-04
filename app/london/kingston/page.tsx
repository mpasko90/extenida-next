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
      <section className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-10 px-4 md:px-0 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Related links</h2>
        <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-700 dark:text-slate-300">
          <div>
            <h3 className="font-medium mb-2">Popular services in Kingston</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><a href="/services/home-extensions">Home extensions</a></li>
              <li><a href="/services/loft-conversions">Loft conversions</a></li>
              <li><a href="/services/kitchen-renovations">Kitchen renovations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">See recent projects</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><a href="/portfolio/house-extension-hampton">House extension Hampton</a></li>
              <li><a href="/portfolio/house-extension-twickenham">House extension Twickenham</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
          Interested in a project in Kingston? <a href="/contact" className="underline">Contact Extendia</a> to arrange a consultation.
        </p>
      </section>
    </>
  );
}
