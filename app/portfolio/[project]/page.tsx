import type { Metadata } from 'next';
import { getProjects, getProjectBySlug } from '@/data';
import { VirtualTourEmbed } from '@/components/portfolio/VirtualTourEmbed';
import { LightboxGallery } from '@/components/portfolio/LightboxGallery';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props { 
  params: Promise<{ project: string }> 
}

export async function generateStaticParams() {
  return getProjects().map(p => ({ project: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { project } = await params;
  const data = getProjectBySlug(project);
  if (!data) return { title: 'Project Not Found | Extendia' };
  return {
    title: `${data.title} | Extendia Portfolio`,
    description: `${data.title} project images in ${data.location}. Representative gallery.`,
    alternates: { canonical: `/portfolio/${data.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { project } = await params;
  const data = getProjectBySlug(project);
  
  if (!data) notFound();
  
  return (
  <main id="main-content" aria-label="Project gallery" className="container mx-auto py-16">
      <header className="mb-10 max-w-5xl">
        <h1 className="text-3xl font-semibold mb-4">{data.title}</h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">Service: {data.serviceType.replace('-', ' ')} • Location: {data.location}</p>
        {data.virtualTour && (
          <div className="mb-8">
            <VirtualTourEmbed url={data.virtualTour} title={data.title} />
            <p className="mt-2 text-xs text-slate-500">Interactive 360° virtual tour (opens full-screen on click inside).</p>
          </div>
        )}
      </header>
      <LightboxGallery images={data.images} className="mb-12" />
      <div className="mt-4">
        <Link href="/portfolio" className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" aria-label="Back to all portfolio projects">← Back to portfolio</Link>
      </div>
    </main>
  );
}
