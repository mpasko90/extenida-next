"use client";

import { motion } from "framer-motion";
import { HeroSection, ServicesSection, TestimonialsSection, FAQSection } from "@/components/sections";

/**
 * Strona główna (Next.js App Router)
 * Zachowuje dotychczasowy wygląd i strukturę.
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
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
    </motion.div>
  );
}
