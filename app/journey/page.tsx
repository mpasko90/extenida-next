'use client';

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Phone, Calendar, Home } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function JourneyPage() {
  const journeySteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Initial consultation to understand your needs, requirements, and vision",
      icon: Phone,
      timeline: "Week 1"
    },
    {
      step: 2,
      title: "Design & Planning",
      description: "Create detailed plans and handle all planning permissions",
      icon: Calendar,
      timeline: "Weeks 2-6"
    },
    {
      step: 3,
      title: "Construction",
      description: "Professional construction with regular updates and quality checks",
      icon: Home,
      timeline: "Weeks 7-16"
    },
    {
      step: 4,
      title: "Completion",
      description: "Final inspections, handover, and aftercare support",
      icon: CheckCircle,
      timeline: "Week 17"
    }
  ];

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

      {/* Journey Steps */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <Card className="relative overflow-hidden bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 group">
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-extendia-primary/5 via-white to-extendia-accent/5"></div>
                    <div className="relative z-10">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="relative">
                            <div className="bg-gradient-to-br from-extendia-primary to-extendia-accent text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                              {step.step}
                            </div>
                            <div className="absolute -inset-1 bg-gradient-to-br from-extendia-primary to-extendia-accent rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                          </div>
                          <div className="bg-gradient-to-r from-extendia-primary/10 to-extendia-accent/10 text-extendia-primary px-4 py-2 rounded-full text-sm font-semibold border border-extendia-primary/20">
                            {step.timeline}
                          </div>
                        </div>
                        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3 group-hover:text-extendia-primary transition-colors duration-300">
                          <step.icon className="w-8 h-8 text-extendia-accent group-hover:text-extendia-primary transition-colors duration-300" />
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg text-gray-700 leading-relaxed">{step.description}</p>
                      </CardContent>
                    </div>
                  </Card>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative w-64 h-48 bg-gradient-to-br from-extendia-primary/10 to-extendia-accent/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-extendia-primary/20">
                    <div className="relative">
                      <step.icon className="w-20 h-20 text-extendia-primary group-hover:text-extendia-accent transition-colors duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-br from-extendia-primary/20 to-extendia-accent/20 rounded-full blur-xl opacity-50"></div>
                    </div>
                  </div>
                </div>
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
