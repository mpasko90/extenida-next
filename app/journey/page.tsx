'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Phone, Calendar, Home, FileText, Handshake, Hammer } from 'lucide-react';
import { PageLayout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { companyInfo } from '@/lib/companyInfo';
import Timeline, { TimelineStep } from '@/components/journey/Timeline';

const steps: TimelineStep[] = [
  { step: 1, title: 'Initial Telephone Consultation', description: 'Discuss goals, gather high‑level requirements and timeline expectations.', icon: Phone, iconBg: 'from-blue-600 to-blue-500' },
  { step: 2, title: 'Home / Site Survey', description: 'On‑site assessment, measurements, feasibility notes and planning considerations.', icon: Home, iconBg: 'from-indigo-600 to-indigo-500' },
  { step: 3, title: 'Detailed Proposal', description: 'Transparent scope outline: materials ranges, provisional sums, timeline phases.', icon: FileText, iconBg: 'from-purple-600 to-purple-500' },
  { step: 4, title: 'Design & Specification Session', description: 'Collaborative refinement of layouts, structural approach and finishes options.', icon: Calendar, iconBg: 'from-pink-600 to-pink-500' },
  { step: 5, title: 'Formal Agreement', description: 'Clear contract confirming scope, payment schedule, insurances & warranties.', icon: Handshake, iconBg: 'from-red-600 to-red-500' },
  { step: 6, title: 'Construction Phase', description: 'Organised site setup, sequencing, quality checks and proactive communication.', icon: Hammer, iconBg: 'from-amber-600 to-amber-500' },
  { step: 7, title: 'Completion & Aftercare', description: 'Snag resolution, handover pack and responsive post‑completion support.', icon: CheckCircle, iconBg: 'from-green-600 to-green-500' }
];

export default function JourneyPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-extendia-primary via-extendia-secondary to-extendia-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-white/25 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your <span className="text-extendia-accent drop-shadow-lg">Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              From initial consultation to project completion, we guide you through every step of your home transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <Timeline
            steps={steps.map(s => ({
              ...s,
              details: s.step === 3 ? (
                <ul className="text-xs text-slate-500 dark:text-slate-500 grid gap-1 pt-1">
                  <li>• Transparent cost structure</li>
                  <li>• Provisional items highlighted</li>
                  <li>• Indicative programme timeline</li>
                </ul>
              ) : s.step === 6 ? (
                <ul className="text-xs text-slate-500 dark:text-slate-500 grid gap-1 pt-1">
                  <li>• Sequenced trades & supervision</li>
                  <li>• Weekly progress updates</li>
                  <li>• Quality & compliance checks</li>
                </ul>
              ) : undefined
            }))}
            alternate
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-extendia-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start <span className="text-extendia-accent">Your Journey?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for your consultation and take the first step towards your dream home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg">
                <a href={companyInfo.phone.href}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call: {companyInfo.phone.display}
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg">
                <a href="/contact">
                  Book Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
