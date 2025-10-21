"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const HIPSection = () => {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-extendia-primary/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* HIP Approved Badge with Info */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-extendia-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Badge */}
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-extendia-primary to-extendia-accent text-white rounded-2xl px-10 py-8 shadow-lg">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Shield className="w-8 h-8" />
                  </div>
                  <p className="text-sm font-semibold text-center opacity-90 mb-1">
                    THIS COMPANY IS
                  </p>
                  <p className="text-5xl font-bold text-center">
                    HIP
                  </p>
                  <p className="text-xl font-semibold text-center mt-1">
                    APPROVED
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Your Investment is Protected
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  As a <strong className="text-extendia-primary">HIP Approved</strong> company, your deposit and guarantee are fully protected through our deposit and guarantee insurance.
                </p>
                <p className="text-base text-gray-500">
                  This protection is provided at no extra cost to you as part of our commitment to your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HIPSection;
