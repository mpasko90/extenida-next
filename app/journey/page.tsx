'use client';

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Phone, Calendar, Home, FileText, Handshake, Hammer } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";

export default function JourneyPage() {
  const journeySteps = [
    {
      step: 1,
      title: "Initial Telephone Consultation",
      description: "We'll discuss your requirements, answer your initial questions, and understand your vision for your home project",
      icon: Phone,
      iconBg: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      title: "Home/Site Survey",
      description: "Our experts will visit your property to assess the site, take measurements, and discuss your ideas in person",
      icon: Home,
      iconBg: "from-indigo-500 to-indigo-600"
    },
    {
      step: 3,
      title: "Written Proposal",
      description: "We'll provide you with a detailed written proposal outlining the scope, materials, costs, and timeframe",
      icon: FileText,
      iconBg: "from-purple-500 to-purple-600"
    },
    {
      step: 4,
      title: "Home/Site Design Meeting",
      description: "Collaborative design session to refine plans and ensure every detail meets your expectations",
      icon: Calendar,
      iconBg: "from-pink-500 to-pink-600"
    },
    {
      step: 5,
      title: "Written Agreement",
      description: "Formalize our partnership with a comprehensive written agreement covering all project aspects",
      icon: Handshake,
      iconBg: "from-red-500 to-red-600"
    },
    {
      step: 6,
      title: "Construction",
      description: "Professional construction with regular updates and quality checks throughout the process",
      icon: Hammer,
      iconBg: "from-amber-500 to-amber-600"
    },
    {
      step: 7,
      title: "Completion",
      description: "Final inspections, handover, and aftercare support to ensure your complete satisfaction",
      icon: CheckCircle,
      iconBg: "from-green-500 to-green-600"
    }
  ];

  // Timeline configuration

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-extendia-primary via-extendia-secondary to-extendia-primary text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-white/25 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your <span className="text-extendia-accent drop-shadow-lg">Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              From initial consultation to project completion, we guide you through every step of your home transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Steps - Vertical Timeline */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-extendia-primary/30 before:to-transparent">
            {journeySteps.map((step, index) => (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Icon */}
                <motion.div 
                  className={`flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gradient-to-br ${step.iconBg} text-white shadow-lg shadow-${step.iconBg.split(" ")[0].replace("from-", "")}/30 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <step.icon className="w-5 h-5" />
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-lg border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-extendia-primary flex items-center gap-2 mb-1">
                      <span className="bg-gradient-to-r from-extendia-primary to-extendia-accent inline-block text-transparent bg-clip-text">{step.title}</span>
                    </h3>
                    <div className="flex items-center mb-3">
                      <span className="bg-extendia-accent/10 text-extendia-accent text-sm font-semibold px-3 py-1 rounded-full">Step {step.step} of 7</span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-extendia-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start <span className="text-extendia-accent">Your Journey?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for your consultation and take the first step towards your dream home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg">
                <a href="tel:+442012345678">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 020 1234 5678
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg">
                <a href="/contact">
                  Book Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
