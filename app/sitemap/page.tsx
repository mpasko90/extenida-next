import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HTML Sitemap | Extendia',
  description:
    'Browse all key Extendia pages including services, London areas, portfolio projects and contact information.',
  alternates: { canonical: '/sitemap' },
};

export default function HtmlSitemapPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">HTML Sitemap</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
          Quick overview of the main pages on the Extendia website.
        </p>
      </header>

      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 className="font-semibold text-lg mb-3">Core pages</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/london">London Areas</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/journey">Your Journey</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">Services</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/services/home-extensions">Home Extensions</Link></li>
            <li><Link href="/services/loft-conversions">Loft Conversions</Link></li>
            <li><Link href="/services/kitchen-renovations">Kitchen Renovations</Link></li>
            <li><Link href="/services/bathroom-renovations">Bathroom Renovations</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">London areas</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/london/wimbledon">Wimbledon</Link></li>
            <li><Link href="/london/kingston">Kingston</Link></li>
            <li><Link href="/london/putney">Putney</Link></li>
            <li><Link href="/london/richmond">Richmond</Link></li>
            <li><Link href="/london/surbiton">Surbiton</Link></li>
            <li><Link href="/london/twickenham">Twickenham</Link></li>
            <li><Link href="/london/wandsworth">Wandsworth</Link></li>
            <li><Link href="/london/fulham">Fulham</Link></li>
            <li><Link href="/london/hammersmith">Hammersmith</Link></li>
            <li><Link href="/london/surrey">Surrey</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">Portfolio samples</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/portfolio/house-extension-and-full-ground-floor-refurbishment-walton-on-thames">Walton-on-Thames Extension & Refurbishment</Link></li>
            <li><Link href="/portfolio/house-extension-hampton">House Extension Hampton</Link></li>
            <li><Link href="/portfolio/house-extension-twickenham">House Extension Twickenham</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">Legal</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
