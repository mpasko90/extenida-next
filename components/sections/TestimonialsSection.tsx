"use client";
import * as React from "react";
import { motion as m } from "framer-motion";
import { GoogleReviewsWidget } from "@/components/widgets/GoogleReviewsWidget";

const TestimonialsSection: React.FC = () => {
  return (
    <section data-testid="testimonials-section" className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Dotted subtle background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" className="fill-gray-400/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      {/* Use full-bleed wrapper while keeping inner content padded */}
      <div className="max-w-[2000px] mx-auto px-2 sm:px-4 md:px-6 relative z-10 w-full">
        <m.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.55 }} 
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-800">
            Trusted by Homeowners Across London
          </h2>
          <p className="mt-5 text-lg text-gray-700 max-w-3xl mx-auto">
            Our commitment to craftsmanship and communication is reflected in what our clients say about working with us.
          </p>
        </m.div>

        {/* Google Reviews Widget */}
        <div className="relative">
          <GoogleReviewsWidget />
        </div>
      </div>
      
      <div className="w-full h-8 bg-gradient-to-b from-transparent to-gray-100/30 blur-md opacity-80 pointer-events-none" aria-hidden="true" />
    </section>
  );
};

export default TestimonialsSection;
