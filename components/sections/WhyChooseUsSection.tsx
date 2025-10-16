"use client";

import { motion } from "framer-motion";
import { ManageFlower } from "@/components/sections";
import BackgroundVideo from "@/components/layout/BackgroundVideo";

const WhyChooseUsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative py-20 md:py-28 text-white overflow-hidden">
      <BackgroundVideo
        desktopVideo="/videos/Landscape Putney Kitchen.mp4"
        mobileVideo="/videos/Vertical Greenstead Gardens LOGO.mp4"
      />

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Kolumna z tekstem */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-extendia-accent">Extendia?</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-200 max-w-xl mx-auto md:mx-0 !leading-tight mb-4">
              More than an ordinary <strong className="text-extendia-accent">Design & Build...</strong>
            </h3>
            <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto md:mx-0">
              <strong className="font-semibold text-slate-100">Our premium, end to end service</strong> is designed for the <strong className="font-semibold text-slate-100">busy homeowners</strong> and <strong className="font-semibold text-slate-100">property investors</strong> who need a <strong className="font-semibold text-slate-100">simple process without the hassle</strong> of managing the project and sourcing the materials and fixtures.
            </p>
          </motion.div>

          {/* Kolumna z ManageFlower */}
          <motion.div variants={itemVariants} className="flex justify-center items-center">
            <ManageFlower />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUsSection;