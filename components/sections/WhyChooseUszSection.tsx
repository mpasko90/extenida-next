import { motion } from "framer-motion";
import { ManageFlower } from "@/components/sections";

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
    <section className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
      {/* Tło z wzorem */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-slate-200/40 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      </div>

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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-extendia-primary mb-6">
              Why Choose <span className="text-extendia-accent">Extendia?</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-700 max-w-xl mx-auto md:mx-0">
              We offer a premium, end-to-end service designed for busy homeowners and property investors. Our streamlined process removes the hassle of project management, sourcing materials, and coordinating trades.
            </p>
            <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-xl mx-auto md:mx-0">
              With us, you get peace of mind and exceptional results, all managed under one roof.
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
