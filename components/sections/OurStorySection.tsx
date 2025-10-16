"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const OurStorySection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gray-100" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
        <div className="absolute left-0 top-40 w-72 h-72 bg-extendia-accent/10 rounded-full blur-3xl" />
        <div className="absolute right-40 bottom-40 w-80 h-80 bg-extendia-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Column */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/wp-content/uploads/2021/05/About_us_extendia.jpg"
                alt="Patryk and Michal Peplinski, founders of Extendia"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-extendia-primary/50 to-transparent opacity-20" />
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-extendia-accent to-transparent opacity-40 rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-tl from-extendia-primary to-transparent opacity-30" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-extendia-primary mb-6">
              Our <span className="text-extendia-accent">Story</span>
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Extendia was founded in 2020 by brothers Patryk and Michal Peplinski. With over 30 years of combined experience in the construction industry, they set out to create something better - a company built on trust, quality, and a genuine commitment to its clients.
              </p>
              
              <p>
                Having witnessed firsthand the common frustrations customers face when dealing with other firms, from poor communication to disappointing results, Patryk and Michal knew things could be different. Extendia was born out of that belief: a fresh approach to construction where the client always comes first.
              </p>
            </div>

            {/* Values grid removed as per request */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
