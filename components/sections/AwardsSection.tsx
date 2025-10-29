"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Trophy } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useMemo, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { awards as AWARDS_DATA, AwardEntry } from "@/data/awards";

const AwardsSection = () => {
  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const baseVelocity = -0.5; // Negative for left scroll
  const baseX = useMotionValue(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previewAward, setPreviewAward] = useState<AwardEntry | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [loopWidth, setLoopWidth] = useState(0); // width of one full awards set

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Sort awards chronologically (newest first), robust to ranges like "2022-2024"
  const awards = useMemo(() => {
    const yearNum = (y: string) => {
      const matches = y.match(/\d{4}/g)?.map(Number) ?? [0];
      return Math.max(...matches);
    };
    return [...AWARDS_DATA].sort((a, b) => yearNum(b.year) - yearNum(a.year));
  }, []);
  
  // Duplicate awards for seamless infinite scroll
  const duplicatedAwards = useMemo(() => [...awards, ...awards, ...awards], [awards]);

  // Measure the width of a single loop (we render 3 copies back-to-back)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      // scrollWidth includes all 3 copies
      const total = el.scrollWidth || 0;
      const single = total > 0 ? Math.floor(total / 3) : 0;
      setLoopWidth(single);
    };

    update();

    // Keep it responsive
    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    window.addEventListener('resize', update);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [duplicatedAwards]);

  // Animate continuous scroll
  useAnimationFrame((t, delta) => {
    if (!isDragging && !prefersReducedMotion) {
      const moveBy = baseVelocity * (delta / 16.67); // Normalize to 60fps
      const next = baseX.get() + moveBy;

      if (loopWidth > 0) {
        const min = -loopWidth;
        const max = 0;
        let wrapped = next;
        if (wrapped <= min) wrapped += loopWidth; // wrap when going too far left
        else if (wrapped >= max) wrapped -= loopWidth; // wrap when going too far right
        baseX.set(wrapped);
      } else {
        baseX.set(next);
      }
    }
  });

  // While dragging, also wrap the position to simulate infinite range in both directions
  useEffect(() => {
    if (loopWidth <= 0) return;
    const unsubscribe = baseX.on("change", (latest) => {
      if (!isDragging) return;
      const x = latest as number;
      const min = -loopWidth;
      const max = 0;
      if (x <= min) baseX.set(x + loopWidth);
      else if (x >= max) baseX.set(x - loopWidth);
    });
    return () => unsubscribe();
  }, [baseX, isDragging, loopWidth]);



  return (
    <section className="relative py-20 overflow-hidden">
      {/* Light Background with Geometric Pattern */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"
        animate={prefersReducedMotion ? {} : {
          opacity: [0.98, 1, 0.98]
        }}
        transition={prefersReducedMotion ? {} : {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Sharp Geometric Shapes Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <defs>
            <pattern 
              id="awards-geometric-pattern" 
              x="0" 
              y="0" 
              width="20" 
              height="20" 
              patternUnits="userSpaceOnUse"
            >
              {/* Sharp triangles */}
              <polygon 
                points="10,2 18,16 2,16" 
                fill="rgba(30,41,59,0.04)"
              />
              {/* Diamond shapes */}
              <polygon 
                points="10,8 14,12 10,16 6,12" 
                fill="rgba(255,179,0,0.06)"
              />
              {/* Sharp lines */}
              <path 
                d="M0,0 L20,20 M20,0 L0,20" 
                stroke="rgba(30,41,59,0.03)" 
                strokeWidth="0.5"
              />
            </pattern>
            
            <pattern 
              id="awards-accent-shapes" 
              x="0" 
              y="0" 
              width="40" 
              height="40" 
              patternUnits="userSpaceOnUse"
            >
              {/* Larger geometric accent */}
              <polygon 
                points="20,5 35,20 20,35 5,20" 
                fill="none"
                stroke="rgba(255,179,0,0.08)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          
          <motion.rect 
            width="100%" 
            height="100%" 
            fill="url(#awards-geometric-pattern)"
            animate={prefersReducedMotion ? {} : {
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={prefersReducedMotion ? {} : {
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.rect 
            width="100%" 
            height="100%" 
            fill="url(#awards-accent-shapes)"
            animate={prefersReducedMotion ? {} : {
              opacity: [0.3, 0.5, 0.3],
              x: [0, 10, 0]
            }}
            transition={prefersReducedMotion ? {} : {
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </svg>
      </div>

      {/* Subtle Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/20 z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={prefersReducedMotion ? {} : {
              rotate: [0, 2, -2, 0],
            }}
            transition={prefersReducedMotion ? {} : {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-6"
          >
            <Trophy className="w-16 h-16 text-extendia-primary mx-auto drop-shadow-md" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-extendia-primary drop-shadow-sm mb-4">
            Awards & <span className="text-extendia-accent">Recognition</span>
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence has been recognized with prestigious industry awards and certifications.
            We&apos;re proud to display these official badges that showcase our dedication to quality and customer satisfaction.
          </p>
        </motion.div>

        {/* Infinite Smooth Slider with Drag */}
        <div className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            ref={scrollerRef}
            className="flex gap-6"
            style={{ x: baseX }}
            drag="x"
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            dragElastic={0.05}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          >
            {duplicatedAwards.map((award, index) => (
              <div
                key={`${award.id}-${index}`}
                className="flex-shrink-0 w-[320px] sm:w-[340px] md:w-[360px]"
              >
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                  className="group relative h-full"
                >
                  <Card variant="subtle" className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl">
                    {/* Highlighted media header */}
                    <div className="relative px-6 pt-6 pb-4">
                      {award.image && (
                        <div className="relative rounded-xl border border-gray-200/70 shadow-sm overflow-hidden bg-white">
                          <AspectRatio ratio={16 / 9}>
                            <motion.button
                              type="button"
                              aria-label={`Preview ${award.title} ${award.year}`}
                              whileHover={prefersReducedMotion ? {} : { scale: 1.01 }}
                              className="group/preview w-full h-full"
                              onClick={() => {
                                setPreviewAward(award);
                                setIsPreviewOpen(true);
                              }}
                            >
                              {/* Decorative backdrop */}
                              <div className="absolute inset-0 bg-gradient-to-br from-extendia-accent/5 via-transparent to-extendia-primary/5" />
                              {/* Image */}
                              <div className="relative w-full h-full flex items-center justify-center p-4">
                                <Image
                                  src={award.image}
                                  alt={`${award.title} ${award.year}`}
                                  fill
                                  sizes="(max-width: 768px) 80vw, 360px"
                                  className="object-contain drop-shadow-sm"
                                />
                              </div>
                              {/* Shine + ring on hover */}
                              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300">
                                <div className="absolute inset-0 bg-white/0 group-hover/preview:bg-white/6" />
                                <div className="absolute inset-0 ring-1 ring-extendia-accent/30 rounded-xl" />
                              </div>
                            </motion.button>
                          </AspectRatio>
                        </div>
                      )}
                    </div>

                    <CardContent className="relative z-10 flex flex-col flex-1 pt-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 bg-extendia-accent/10 text-extendia-accent text-xs font-semibold rounded-full border border-extendia-accent/20 tracking-wide">
                          {award.year}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-extendia-primary mb-2 group-hover:text-extendia-accent transition-colors">
                        {award.link ? (
                          <a
                            href={award.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline decoration-extendia-accent decoration-2 underline-offset-4"
                          >
                            {award.title}
                          </a>
                        ) : award.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-gray-600 mb-3">
                        {award.organization}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                        {award.description}
                      </p>
                      <div className="mt-auto flex gap-2">
                        <Button variant="secondary" size="sm" onClick={() => { setPreviewAward(award); setIsPreviewOpen(true); }}>
                          View badge
                        </Button>
                        {award.link && (
                          <Button asChild variant="ghost" size="sm" className="text-extendia-accent">
                            <a href={award.link} target="_blank" rel="noopener noreferrer">Visit</a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                    <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-extendia-accent/25 rotate-45" />
                  </Card>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image Preview Dialog */}
        <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
          <DialogContent className="w-full max-w-3xl">
            {previewAward && (
              <div>
                <DialogHeader>
                  <DialogTitle className="text-extendia-primary">{previewAward.title} – {previewAward.year}</DialogTitle>
                  <DialogDescription>{previewAward.organization}</DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <div className="relative w-full max-h-[70vh] rounded-xl border bg-white overflow-hidden">
                    <AspectRatio ratio={16/9}>
                      {previewAward.image && (
                        <Image
                          src={previewAward.image}
                          alt={`${previewAward.title} ${previewAward.year}`}
                          fill
                          sizes="(max-width: 768px) 90vw, 800px"
                          className="object-contain"
                        />
                      )}
                    </AspectRatio>
                  </div>
                  {previewAward.description && (
                    <p className="mt-4 text-sm text-gray-700">{previewAward.description}</p>
                  )}
                  {previewAward.link && (
                    <div className="mt-4">
                      <Button asChild>
                        <a href={previewAward.link} target="_blank" rel="noopener noreferrer">Open official page</a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Aggregated Multi-Year (e.g., Houzz) */}
  {/* Aggregated multi-year section intentionally removed per request */}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-extendia-primary mb-4">
                Work with an Award-Winning Company
              </h3>
              <p className="text-gray-700 mb-6">
                Join our growing list of satisfied clients who have experienced our award-winning construction and design services.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="relative bg-gradient-to-r from-extendia-accent to-extendia-primary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-extendia-accent/30 transition-all duration-300 border border-gray-100 overflow-hidden group">
                  <span className="relative z-10">Start Your Project Today</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20"
                    initial={{ x: '-100%', opacity: 0 }}
                    whileHover={{ x: '100%', opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
