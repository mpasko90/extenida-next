"use client";

import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout";


/**
 * About Us page (Next.js App Router)
 * Maintains the current layout and structure.
 */
export default function AboutPage() {
  

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-extendia-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Extendia
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              Trusted experts in home extensions, loft conversions, and renovations across South West London for over 15 years.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ...pozostała zawartość About... */}
    </PageLayout>
  );
}
