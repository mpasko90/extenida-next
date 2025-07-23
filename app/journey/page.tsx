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
      <section className="py-20 bg-gradient-to-br from-extendia-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your <span className="text-extendia-accent">Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              From initial consultation to project completion, we guide you through every step of your home transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
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
                  <Card className="border-2 border-extendia-accent/10 hover:border-extendia-accent/30 transition-colors">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-extendia-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                          {step.step}
                        </div>
                        <div className="bg-extendia-primary/10 text-extendia-primary px-3 py-1 rounded-full text-sm font-medium">
                          {step.timeline}
                        </div>
                      </div>
                      <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                        <step.icon className="w-8 h-8 text-extendia-accent" />
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <step.icon className="w-16 h-16 text-gray-400" />
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
