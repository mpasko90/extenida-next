"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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

  const awards = [
    {
      icon: Award,
      image: "/images/awards/2023-Architecture-Awards-Logo.png",
      title: "Most Experienced Construction Company",
      year: "2023",
      organization: "Architecture Awards (Build Review)",
      description: "Celebrated for our extensive industry experience, proven project management expertise, and consistent delivery of exceptional building and renovation projects in London.",
      link: "https://www.build-review.com/winners/extendia/"
    },
    {
      icon: Trophy,
      image: "/images/awards/Ready_Best_of_Houzz_Service_2023.webp",
      title: "Best of Houzz Service",
      year: "2023",
      organization: "Houzz",
      description: "Awarded to top-rated professionals on Houzz for exceptional service quality and client satisfaction throughout the year.",
      link: "https://www.houzz.co.uk/professionals/design-build-firms/extendia-pfvwgb-pf~2163000585"
    },
    {
      icon: Trophy,
      image: "/images/awards/Ready_Best_of_Houzz_Service_2022.webp",
      title: "Best of Houzz Service",
      year: "2022",
      organization: "Houzz",
      description: "Recognized for consistently delivering high-quality service and maintaining outstanding client relationships on the Houzz platform.",
      link: "https://www.houzz.co.uk/professionals/design-build-firms/extendia-pfvwgb-pf~2163000585"
    }
  ];

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

        {/* Awards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={prefersReducedMotion ? {} : { 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Modern Light Card with Award Image */}
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-8 hover:bg-white/90 hover:border-extendia-accent/20 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl">
                
                {/* Award Image */}
                <div className="relative z-10 mb-8 flex items-center justify-center">
                  <motion.div 
                    className="h-32 flex items-center justify-center"
                    whileHover={prefersReducedMotion ? {} : { 
                      scale: 1.05,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    {award.image && award.link ? (
                      <a 
                        href={award.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:opacity-90 transition-opacity duration-300"
                        aria-label={`View ${award.title} ${award.year} award details`}
                      >
                        <Image 
                          src={award.image} 
                          alt={`${award.title} ${award.year}`}
                          width={180}
                          height={120}
                          className="max-h-full max-w-full object-contain"
                          style={{
                            width: 'auto',
                            height: 'auto'
                          }}
                        />
                      </a>
                    ) : award.image && (
                      <Image 
                        src={award.image} 
                        alt={`${award.title} ${award.year}`}
                        width={180}
                        height={120}
                        className="max-h-full max-w-full object-contain"
                        style={{
                          width: 'auto',
                          height: 'auto'
                        }}
                      />
                    )}
                  </motion.div>
                </div>

                {/* Award Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-extendia-accent/10 text-extendia-accent text-sm font-semibold rounded-full border border-extendia-accent/20">
                      {award.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-extendia-primary mb-2 group-hover:text-extendia-accent transition-colors duration-500">
                    {award.link ? (
                      <a 
                        href={award.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline decoration-extendia-accent decoration-2 underline-offset-4"
                        aria-label={`View ${award.title} ${award.year} award details`}
                      >
                        {award.title}
                      </a>
                    ) : award.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-gray-600 mb-3">
                    {award.organization}
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {award.description}
                  </p>
                </div>

                {/* Geometric decorative element */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-extendia-accent/20 transform rotate-45 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Link indicator */}
                {award.link && (
                  <div className="absolute bottom-4 right-4 text-extendia-accent opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

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
