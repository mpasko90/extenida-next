"use client";
import Image from 'next/image';
import Link from 'next/link';
import type { PortfolioProject } from '@/data/portfolio';

interface PortfolioGridProps {
  projects: PortfolioProject[];
  className?: string;
}

export function PortfolioGrid({ projects, className = '' }: PortfolioGridProps) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {projects.map(project => {
        const cover = project.images[0];
        return (
          <div
            key={project.slug}
            className="group relative rounded-lg overflow-hidden bg-slate-800 border border-slate-700"
          >
            {cover && (
              <div className="relative aspect-[4/3] bg-slate-700/40">
                <Image
                  src={cover.thumb}
                  alt={cover.alt || project.title}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const imgEl = e.currentTarget as HTMLImageElement;
                    if (imgEl.src !== cover.full) {
                      imgEl.src = cover.full;
                    }
                  }}
                />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
              <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2">{project.title}</h3>
              <p className="text-xs text-blue-300 uppercase tracking-wide">{project.serviceType.replace('-', ' ')} • {project.location}</p>
              <Link href={`/portfolio/${project.slug}`} className="inline-block mt-2 text-xs font-medium text-white/90 hover:text-white underline underline-offset-4">View project</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
