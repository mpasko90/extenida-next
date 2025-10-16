import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { companyInfo } from '@/lib/companyInfo';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PageProps { params: Promise<{ service: string }> }

export function generateStaticParams() {
  return services.map(s => ({ service: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service } = await params;
  const svc = getServiceBySlug(service);
  if (!svc) return { title: 'Service Not Found | Extendia' };
  const title = svc.seoTitle || `${svc.name} | Extendia`;
  const description = svc.seoDescription || svc.description;
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { card: 'summary_large_image', title, description },
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: svc.name,
        description,
        provider: { '@type': 'Organization', name: companyInfo.name, telephone: companyInfo.phone.international, email: companyInfo.email, url: 'https://extendia.co.uk' },
        areaServed: 'London',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'GBP',
          lowPrice: svc.averagePrice.min,
          highPrice: svc.averagePrice.max
        }
      })
    }
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { service } = await params;
  const svc = getServiceBySlug(service);
  if (!svc) notFound();

  const priceRange = `£${svc.averagePrice.min.toLocaleString()} – £${svc.averagePrice.max.toLocaleString()}`;
  const duration = `${svc.duration.min}–${svc.duration.max} ${svc.duration.unit}`;

  return (
    <main className="container mx-auto py-16 space-y-16 px-4">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-slate-50">{svc.name}</h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-6">{svc.heroTagline}</p>
        <div className="flex flex-wrap gap-3 justify-center text-sm">
          <span className="inline-flex px-4 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Price Range: {priceRange}</span>
          <span className="inline-flex px-4 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Typical Duration: {duration}</span>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-5xl mx-auto">
        <div className="prose dark:prose-invert max-w-none">
          <p>{svc.longDescription}</p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto">
  <h2 className="text-2xl font-semibold mb-6">What&apos;s Included</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {svc.features.map(f => (
            <Card key={f} className="p-5" variant="accent">
              <h3 className="font-medium mb-2">{f}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Delivered with compliance and quality assurance.</p>
            </Card>
          ))}
        </div>
      </section>

      {svc.benefits && (
        <section className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300 list-disc list-inside">
              {svc.benefits.map(b => <li key={b}>{b}</li>)}
            </ul>
        </section>
      )}

      {svc.process && (
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Delivery Process</h2>
          <ol className="space-y-4">
            {svc.process.map(p => (
              <li key={p.step} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                <h3 className="font-medium mb-1">{p.step}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{p.detail}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {svc.faqs && (
        <section className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">FAQs</h2>
          <div className="space-y-4">
            {svc.faqs.map(faq => (
              <details key={faq.q} className="group border border-slate-200 dark:border-slate-700 rounded-lg p-4 bg-white dark:bg-slate-900">
                <summary className="cursor-pointer font-medium text-slate-800 dark:text-slate-200 flex justify-between items-center">
                  {faq.q}
                  <span className="text-slate-500 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-5xl mx-auto">
        <Card className="p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700" variant="highlight">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-50">Ready to discuss {svc.name.toLowerCase()}?</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">Book a consultation – we&apos;ll assess feasibility, outline options and provide a transparent starting cost band.</p>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <Button asChild><a href="/contact">Request Quote</a></Button>
            <Button variant="outline" asChild><a href={`tel:${companyInfo.phone.international}`}>Call {companyInfo.phone.display}</a></Button>
          </div>
        </Card>
      </section>
    </main>
  );
}
