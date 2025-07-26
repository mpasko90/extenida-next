"use client";

import { motion } from "framer-motion";
import { HeroSection, WhyChooseUsSection, ServicesSection, TestimonialsSection, AwardsSection, FAQSection } from "@/components/sections";

/**
 * Home page (Next.js App Router)
 * Maintains the current layout and structure.
 */
export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <main className="pt-20">
        <HeroSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <TestimonialsSection />
        <AwardsSection />
        <FAQSection />
      </main>
    </motion.div>
  );
}
