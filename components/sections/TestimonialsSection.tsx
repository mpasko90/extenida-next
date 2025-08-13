"use client";
import * as React from "react";
import { motion as m } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { extendiaReviews } from "@/data/extendia-reviews";
import { Star, MapPin, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

// Derive a lean testimonial model (limit number for performance)
const TESTIMONIALS = extendiaReviews.slice(0, 18).map(r => ({
  id: r.id,
  author: r.author,
  quote: r.content.length > 320 ? r.content.slice(0, 317) + "…" : r.content,
  rating: r.rating || 5,
  location: r.location || "London",
  service: r.project || (r.content.toLowerCase().includes("bathroom") ? "Bathroom Renovation" : r.content.toLowerCase().includes("kitchen") ? "Kitchen Project" : r.content.toLowerCase().includes("loft") ? "Loft Conversion" : r.content.toLowerCase().includes("extension") ? "House Extension" : "Home Improvement")
}));

const stats = {
  total: extendiaReviews.length,
  average: extendiaReviews.reduce((s, r) => s + (r.rating || 0), 0) / extendiaReviews.filter(r => r.rating).length
};

const TestimonialsSection: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [index, setIndex] = React.useState(0);
  const [snaps, setSnaps] = React.useState<number[]>([]);

  // Autoplay using Carousel API (lightweight custom loop)
  React.useEffect(() => {
    if (!api) return;
    let raf: number;
    let last = performance.now();
    const interval = 5500;
    const tick = (now: number) => {
      if (!api) return;
      if (now - last > interval) {
        api.scrollNext();
        last = now;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [api]);

  React.useEffect(() => {
    if (!api) return;
    setSnaps(api.scrollSnapList());
    const onSelect = () => setIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => { api.off("select", onSelect); };
  }, [api]);

  const scrollTo = (i: number) => api?.scrollTo(i);
  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
  <section data-testid="testimonials-section" className="py-20 sm:py-24 bg-gradient-to-b from-gray-900/90 via-extendia-primary/80 to-extendia-accent/10 relative overflow-hidden">
      {/* Dotted subtle background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" className="fill-white/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
  {/* Use full-bleed wrapper while keeping inner content padded */}
  <div className="max-w-[2000px] mx-auto px-2 sm:px-4 md:px-6 relative z-10 w-full">
        <m.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Trusted by Homeowners Across London
          </h2>
          <p className="mt-5 text-lg text-white/75 max-w-3xl mx-auto">
            Our commitment to craftsmanship and communication is reflected in what our clients say about working with us.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-6 h-6 ${stats.average > i ? "text-extendia-accent" : "text-white/25"}`} fill="currentColor" />
              ))}
            </div>
            <p className="font-semibold text-white text-xl">
              {stats.average.toFixed(1)}<span className="ml-2 font-normal text-white/60 text-base">based on {stats.total}+ reviews</span>
            </p>
          </div>
        </m.div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start" }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-3 lg:-ml-4">
              {TESTIMONIALS.map((t, i) => (
                <CarouselItem
                  key={t.id}
                  className="pl-2 md:pl-3 lg:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-[20%]"
                >
                  <m.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    className="h-full flex"
                  >
                    <Card className="flex flex-col w-full bg-white/10 backdrop-blur-md border border-white/15 shadow-lg hover:shadow-extendia-accent/10 transition-all duration-300 rounded-2xl group relative overflow-hidden">
                      <CardContent className="p-6 flex flex-col grow">
                        <Quote className="absolute top-4 right-4 w-10 h-10 text-white/10 group-hover:scale-110 transition-transform" />
                        <div className="flex items-center mb-3">
                          {[...Array(5)].map((_, s) => (
                            <Star key={s} className={`w-4 h-4 ${t.rating > s ? "text-extendia-accent" : "text-white/25"}`} fill="currentColor" />
                          ))}
                        </div>
                        <p className="text-white/90 leading-relaxed text-base flex-1 line-clamp-[12]">{t.quote}</p>
                        <div className="pt-5 mt-5 border-t border-white/10">
                          <p className="font-semibold text-white text-sm">{t.author}</p>
                          <div className="flex items-center text-xs text-white/60 mt-1">
                            <MapPin className="w-3.5 h-3.5 mr-1" />
                            <span>{t.location} · {t.service}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </m.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden" />
            <CarouselNext className="hidden" />
          </Carousel>
          {/* Custom nav buttons preserving styling */}
          <button onClick={scrollPrev} aria-label="Previous testimonials" className="absolute left-1 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 shadow transition focus:outline-none focus:ring-2 focus:ring-extendia-accent">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={scrollNext} aria-label="Next testimonials" className="absolute right-1 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 shadow transition focus:outline-none focus:ring-2 focus:ring-extendia-accent">
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="flex justify-center mt-8 gap-2" role="tablist" aria-label="Testimonial slides">
            {snaps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === index}
                role="tab"
                className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-extendia-accent ${i === index ? "w-8 bg-extendia-accent" : "w-2 bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-8 bg-gradient-to-b from-transparent to-extendia-primary/30 blur-md opacity-80 pointer-events-none" aria-hidden="true" />
    </section>
  );
};

export default TestimonialsSection;
