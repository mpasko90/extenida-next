"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg?: string; // tailwind gradient classes e.g. from-blue-600 to-blue-500
  details?: React.ReactNode; // optional extra list or content
}

interface TimelineProps {
  steps: TimelineStep[];
  id?: string;
  className?: string;
  showProgress?: boolean;
  alternate?: boolean; // alternate sides on desktop
  lineColorClass?: string;
}

// Utility clamp
const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

export const Timeline: React.FC<TimelineProps> = ({
  steps,
  id = 'timeline',
  className = '',
  showProgress = true,
  alternate = true,
  lineColorClass = 'before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent'
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(1);
  const [percent, setPercent] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    const start = rect.top - viewportH * 0.1; // start tracking a bit earlier
    const end = rect.bottom - viewportH * 0.6; // end before fully out
    const raw = (window.scrollY + viewportH - (containerRef.current.offsetTop + start)) / (end - start);
    setPercent(clamp(raw * 100, 0, 100));

    // Active step based on which element midpoint is in view band
    let current = 1;
    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const b = el.getBoundingClientRect();
      const mid = b.top + b.height / 2;
      if (mid < viewportH * 0.55) current = i + 1;
    });
    setActiveStep(current);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div id={id} className={`relative ${className}`}>      
      <div ref={containerRef} className="relative">
        {/* Optional side progress (desktop) */}
        {showProgress && (
          <aside className="hidden xl:block absolute -left-64 top-0 h-full" aria-label="Timeline progress">
            <div className="sticky top-32 w-56 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400">Progress</span>
                  <span className="text-xs text-slate-500 dark:text-slate-500" aria-live="polite">{activeStep}/{steps.length}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative" aria-hidden>
                  <motion.div
                    initial={false}
                    animate={{ scaleX: percent / 100 }}
                    style={{ transformOrigin: '0% 50%' }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-extendia-primary to-extendia-accent"
                  />
                </div>
                <div className="sr-only" role="progressbar" aria-valuenow={Math.round(percent)} aria-valuemin={0} aria-valuemax={100}>
                  {Math.round(percent)}% complete
                </div>
              </div>
              <nav aria-label="Steps" className="space-y-1 text-sm">
                {steps.map(s => (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => {
                      const el = stepRefs.current[s.step - 1];
                      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`w-full text-left relative px-3 py-2 rounded-md border transition-colors ${activeStep === s.step ? 'bg-white dark:bg-slate-900 border-extendia-accent shadow-sm' : 'border-transparent hover:border-slate-300 dark:hover:border-slate-700'}`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 w-6">{s.step}</span>
                      <span className="truncate text-slate-700 dark:text-slate-300 text-[13px]">{s.title}</span>
                    </span>
                    <AnimatePresence>
                      {activeStep === s.step && (
                        <motion.span layoutId="tlStepActive" className="absolute inset-0 -z-10 rounded-md bg-extendia-accent/5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </nav>
            </div>
          </aside>
        )}

        {/* Timeline list */}
        <ol className={`relative space-y-20 sm:space-y-24 before:absolute before:inset-y-0 before:left-5 md:before:left-1/2 before:w-px ${lineColorClass}`} role="list">
          {steps.map((s, idx) => {
            const delayBase = idx * 0.05;
            const even = s.step % 2 === 0;
            return (
              <li
                key={s.step}
                ref={el => { stepRefs.current[idx] = el; }}
                className={`scroll-mt-28 relative md:flex md:items-stretch md:gap-16 group ${alternate ? 'md:even:flex-row-reverse' : ''}`}
                aria-label={`Step ${s.step}: ${s.title}`}
              >
                {/* Icon */}
                <motion.div
                  initial={prefersReducedMotion ? false : { scale: 0.75, opacity: 0, y: 10 }}
                  whileInView={prefersReducedMotion ? { opacity: 1 } : { scale: 1, opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22, delay: delayBase }}
                  className={`absolute top-2 left-5 md:left-1/2 -translate-x-1/2 bg-gradient-to-br ${s.iconBg || 'from-extendia-primary to-extendia-accent'} shadow-lg text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border border-white/20 dark:border-slate-800 z-10`}
                  aria-hidden
                >
                  <s.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 60 }}
                  whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
                  transition={{ duration: 0.55, delay: delayBase + 0.05 }}
                  className="md:w-1/2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 ml-16 md:ml-0 md:px-10 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Card className="bg-transparent border-none shadow-none p-0">
                    <CardContent className="p-0 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-1">{s.title}</h3>
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-extendia-accent/10 text-extendia-accent self-start">Step {s.step} / {steps.length}</span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.description}</p>
                      {s.details}
                    </CardContent>
                  </Card>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Timeline;
