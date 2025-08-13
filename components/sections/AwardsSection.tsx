"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { awards as AWARDS_DATA } from "@/data/awards";

const AwardsSection = () => {
  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const awards = useMemo(() => AWARDS_DATA, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

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

        {/* Awards Grid (all awards) - 2x2 on small screens, 4 in a row md+ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-8"
        >
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              variants={itemVariants}
              whileHover={prefersReducedMotion ? {} : { y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group relative"
            >
              <div className="relative h-full flex flex-col bg-white/85 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-6 md:p-7 hover:bg-white/95 hover:border-extendia-accent/25 transition-all duration-400 overflow-hidden shadow-lg hover:shadow-extendia-accent/20">
                <div className="relative z-10 mb-6 flex items-center justify-center h-28">
                  {award.image && (
                    <motion.div whileHover={prefersReducedMotion ? {} : { scale: 1.05 }} className="flex items-center justify-center max-h-full">
                      <a
                        href={award.link || '#'}
                        {...(award.link ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        aria-label={`View ${award.title} ${award.year} award details`}
                        className={award.link ? "hover:opacity-90 transition" : "cursor-default"}
                      >
                        <Image
                          src={award.image}
                          alt={`${award.title} ${award.year}`}
                          width={180}
                          height={120}
                          className="object-contain max-h-28 w-auto"
                        />
                      </a>
                    </motion.div>
                  )}
                </div>
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-3 py-1 bg-extendia-accent/10 text-extendia-accent text-xs font-semibold rounded-full border border-extendia-accent/20 tracking-wide">
                      {award.year}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-extendia-primary mb-1 group-hover:text-extendia-accent transition-colors">
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
                  <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2">
                    {award.organization}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">
                    {award.description}
                  </p>
                </div>
                {award.link && (
                  <div className="absolute bottom-3 right-3 text-extendia-accent opacity-50 group-hover:opacity-90 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </div>
                )}
                <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-extendia-accent/25 rotate-45" />
              </div>
            </motion.div>
          ))}
        </motion.div>

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
