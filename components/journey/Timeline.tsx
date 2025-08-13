"use client";
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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
  alternate?: boolean; // alternate sides on desktop (md+)
  lineColorClass?: string;
  showStepBadge?: boolean; // show step count badge on cards
}


export const Timeline: React.FC<TimelineProps> = ({
  steps,
  id = 'timeline',
  className = '',
  alternate = true,
  lineColorClass = 'before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent',
  showStepBadge = true
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div id={id} className={`relative ${className}`}>
      <div className="relative">
        {/* Timeline list */}
        <ol
          className={`relative space-y-16 sm:space-y-20 pl-6 md:pl-0
          before:absolute before:inset-y-0 before:left-2 md:before:left-1/2 md:before:-translate-x-1/2 before:w-px
          ${lineColorClass}`}
          role="list"
        >
          {steps.map((s, idx) => {
            const delayBase = idx * 0.05;
            return (
              <li
                key={s.step}
                className={`relative md:flex md:items-stretch md:gap-16 group pt-4 md:pt-0 scroll-mt-24 ${alternate ? 'md:even:flex-row-reverse' : ''}`}
                aria-label={`Step ${s.step}: ${s.title}`}
              >
                {/* Bullet marker on the line */}
                <motion.span
                  initial={prefersReducedMotion ? false : { scale: 0.5, opacity: 0 }}
                  whileInView={prefersReducedMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-30% 0px -30% 0px' }}
                  transition={{ type: 'spring', stiffness: 240, damping: 18, delay: delayBase }}
                  className="absolute left-2 md:left-1/2 md:-translate-x-1/2 top-2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 shadow ring-4 ring-extendia-accent/30 flex items-center justify-center"
                  aria-hidden
                >
                  <span className={`block w-2.5 h-2.5 rounded-full bg-gradient-to-br ${s.iconBg || 'from-extendia-primary to-extendia-accent'}`} />
                </motion.span>
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
                  whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
                  transition={{ duration: 0.55, delay: delayBase + 0.05 }}
                  className="md:w-1/2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-7 md:p-8 shadow-sm hover:shadow-md transition-shadow mt-6 md:mt-0"
                >
                  <Card className="bg-transparent border-none shadow-none p-0">
                    <CardContent className="p-0 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className={`shrink-0 bg-gradient-to-br ${s.iconBg || 'from-extendia-primary to-extendia-accent'} text-white rounded-xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow border border-white/10 dark:border-slate-800`}> 
                          <s.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex-1 min-w-0 space-y-2">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 leading-snug">{s.title}</h3>
                            {showStepBadge && (
                              <span className="text-xs font-medium px-2 py-1 rounded-full bg-extendia-accent/10 text-extendia-accent self-start whitespace-nowrap">Step {s.step} / {steps.length}</span>
                            )}
                          </div>
                          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.description}</p>
                          {s.details}
                        </div>
                      </div>
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
