'use client';

import Link from 'next/link';
import { PageLayout } from '@/components/layout';

// A simple human-readable sitemap page. This is separate from the XML sitemap.

const coreServices = [
  'architectural-design','home-extensions','loft-conversions','basement-conversions','kitchen-renovations'
];
const additionalServices = [
  'bathroom-renovations','structural-engineering','project-management','planning-permission','interior-fit-out'
];
const areas = ['wimbledon','kingston','richmond','surbiton','putney','twickenham'];

export default function HumanSitemapPage() {
  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-br from-extendia-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Site <span className="text-extendia-accent">Map</span></h1>
          <p className="text-xl text-blue-100">Quick access to our key pages, services and local area guides.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-semibold text-lg mb-3 text-extendia-accent">Core Services</h2>
            <ul className="space-y-2 text-sm">
              {coreServices.map(s => (
                <li key={s}><Link className="hover:underline" href={`/services/${s}`}>{formatSlug(s)}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-3 text-extendia-accent">Additional Services</h2>
            <ul className="space-y-2 text-sm">
              {additionalServices.map(s => (
                <li key={s}><Link className="hover:underline" href={`/services/${s}`}>{formatSlug(s)}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-3 text-extendia-accent">Areas</h2>
            <ul className="space-y-2 text-sm">
              {areas.map(a => (
                <li key={a}><Link className="hover:underline" href={`/areas/${a}`}>{formatSlug(a)}</Link></li>
              ))}
              <li><Link className="hover:underline" href="/areas">All Areas</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-3 text-extendia-accent">Company</h2>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li><Link className="hover:underline" href="/about">About</Link></li>
              <li><Link className="hover:underline" href="/portfolio">Portfolio</Link></li>
              <li><Link className="hover:underline" href="/contact">Contact</Link></li>
              {/* Blog removed */}
              <li><Link className="hover:underline" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="hover:underline" href="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function formatSlug(slug: string) {
  return slug.replace(/-/g,' ').replace(/\b\w/g, c => c.toUpperCase());
}
