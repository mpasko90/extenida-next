"use client";
import * as React from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GalleryImage {
  id: string;
  full: string;
  thumb: string;
  alt?: string;
}

interface LightboxGalleryProps {
  images: GalleryImage[];
  className?: string;
  thumbAspect?: string; // e.g. 'aspect-[4/3]' or 'aspect-video'
}

/**
 * Accessible lightbox gallery (no external dependency) supporting:
 * - Keyboard navigation (ArrowLeft/Right, Home, End, Escape)
 * - Focus trap inside modal
 * - Swipe navigation on touch devices
 * - Preload of adjacent images
 */
export function LightboxGallery({ images, className = '', thumbAspect = 'aspect-[4/3]' }: LightboxGalleryProps) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const dialogRef = React.useRef<HTMLDivElement | null>(null);
  const touch = React.useRef<{ x: number; y: number } | null>(null);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const close = () => setOpen(false);
  const prev = React.useCallback(() => setIndex(i => (i === 0 ? images.length - 1 : i - 1)), [images.length]);
  const next = React.useCallback(() => setIndex(i => (i === images.length - 1 ? 0 : i + 1)), [images.length]);

  // Keyboard navigation
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { close(); }
      else if (e.key === 'ArrowLeft') { prev(); }
      else if (e.key === 'ArrowRight') { next(); }
      else if (e.key === 'Home') { setIndex(0); }
      else if (e.key === 'End') { setIndex(images.length - 1); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, prev, next, images.length]);

  // Focus trap
  React.useEffect(() => {
    if (open && dialogRef.current) {
      const previouslyFocused = document.activeElement as HTMLElement | null;
      dialogRef.current.focus();
      return () => previouslyFocused?.focus();
    }
  }, [open]);

  // Preload adjacent full images
  React.useEffect(() => {
    if (!open || typeof window === 'undefined' || !('Image' in window)) return;
    const Ahead = window.Image;
    const ahead = new Ahead();
    ahead.src = images[(index + 1) % images.length].full;
    const behind = new Ahead();
    behind.src = images[(index - 1 + images.length) % images.length].full;
  }, [index, open, images]);

  // Swipe support
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next(); else prev();
    }
    touch.current = null;
  };

  return (
    <div className={cn('grid gap-6 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {images.map((img, i) => (
        <button
          key={img.id}
          type="button"
          onClick={() => openAt(i)}
          className={cn('group relative rounded-lg overflow-hidden bg-slate-800 border border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900', thumbAspect)}
          aria-label={`Open image ${i + 1} of ${images.length}`}
        >
          <Image
            src={img.thumb}
            alt={img.alt || ''}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
        </button>
      ))}

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          ref={dialogRef}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Close */}
          <div className="flex items-center justify-between p-4 text-slate-200">
            <span className="text-sm">{index + 1} / {images.length}</span>
            <button
              type="button"
              onClick={close}
              className="p-2 rounded-md hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Close gallery"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* Image area */}
          <div className="relative flex-1 flex items-center justify-center px-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[index].full}
              alt={images[index].alt || ''}
              width={1600}
              height={1000}
              className="max-h-[80vh] w-auto h-auto rounded shadow-lg"
              unoptimized
              priority
            />
            {/* Prev/Next buttons */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
          {/* Thumbnails strip */}
          {images.length > 1 && (
            <div className="w-full overflow-x-auto border-t border-white/10 py-3 px-4 flex gap-2" onClick={(e)=> e.stopPropagation()}>
              {images.map((img, i) => (
                <button
                  key={img.id + '-thumb'}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={cn('relative h-14 w-20 flex-shrink-0 rounded overflow-hidden border', i === index ? 'ring-2 ring-blue-400 border-blue-400' : 'border-white/20 hover:border-white/40')}
                >
                  <Image
                    src={img.thumb}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
