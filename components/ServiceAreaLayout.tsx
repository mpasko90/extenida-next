"use client";

import React, { type ElementType } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Shield, Calendar, Users, Building, MapPin, Star, Clock, Phone,
         HomeIcon, Wrench, ShieldCheck, TrendingUp, Heart, Lightbulb, Leaf } from "lucide-react";

interface ServiceAreaPageProps {
  serviceName: string;
  areaName: string;
  serviceTitle: string;
  serviceDescription: string;
  benefitsList: {
    title: string;
    description: string;
    icon?: string;
  }[];
  areaSpecifics: {
    title: string;
    description: string;
    icon?: string;
  }[];
  trustIndicators?: {
    icon: string;
    title: string;
    description: string;
    metric?: string;
  }[];
  projectExamples?: {
    title: string;
    description: string;
    image?: string;
    location?: string;
    cost?: string;
    duration?: string;
  }[];
  faqItems?: {
    question: string;
    answer: string;
  }[];
  compliance?: {
    planningInfo: string;
    buildingRegs: string;
    conservationArea?: string;
    certifications?: string;
    insurance?: string;
    warranty?: string;
  };
}

// Icon mapping function for dynamic icon assignment
const getIcon = (iconName: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    'HomeIcon': HomeIcon,
    'Building': Building,
    'Wrench': Wrench,
    'ShieldCheck': ShieldCheck,
    'Clock': Clock,
    'Phone': Phone,
    'CheckCircle': CheckCircle,
    'TrendingUp': TrendingUp,
    'Heart': Heart,
    'Lightbulb': Lightbulb,
    'Leaf': Leaf,
    'Award': Award,
    'Shield': Shield,
    'Calendar': Calendar,
    'Users': Users,
    'MapPin': MapPin,
    'Star': Star,
  };
  return iconMap[iconName] || CheckCircle;
};

export default function ServiceAreaLayout({
  serviceName,
  areaName,
  serviceTitle,
  serviceDescription,
  benefitsList,
  areaSpecifics,
  trustIndicators = [],
  projectExamples = [],
  faqItems = [],
  compliance,
}: ServiceAreaPageProps) {
  const iconMap = {
    CheckCircle,
    Award,
    Shield,
    Calendar,
    Users,
    Building,
    MapPin,
    Star,
    Clock,
    Phone,
  };

  const getIcon = (iconName?: string) => {
    if (!iconName) return CheckCircle;
    return iconMap[iconName as keyof typeof iconMap] || CheckCircle;
  };
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-extenida-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {serviceTitle} in <span className="text-extendia-accent">{areaName}</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">{serviceDescription}</p>
            <Button className="bg-extendia-accent hover:bg-extenida-accent/90 text-white px-8 py-3">
              Get Free Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us in {areaName}?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsList.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      {benefit.icon && (
                        <div className="flex-shrink-0 p-2 bg-extendia-accent/10 rounded-lg">
                          {React.createElement(getIcon(benefit.icon), {
                            className: "w-6 h-6 text-extendia-accent",
                            "aria-hidden": "true"
                          })}
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Specifics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{areaName} Specific Solutions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areaSpecifics.map((specific, index) => (
              <motion.div
                key={specific.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{specific.title}</h3>
                    <p className="text-gray-600">{specific.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      {trustIndicators.length > 0 && (
        <section className="py-16 bg-gray-50" aria-labelledby="trust-indicators-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="trust-indicators-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven track record of excellence in {areaName}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={indicator.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      {indicator.icon && (
                        <div className="flex justify-center mb-4">
                          <div className="p-3 bg-extendia-primary/10 rounded-full">
                            {React.createElement(getIcon(indicator.icon), {
                              className: "w-8 h-8 text-extendia-primary",
                              "aria-hidden": "true"
                            })}
                          </div>
                        </div>
                      )}
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{indicator.title}</h3>
                      <p className="text-gray-600 mb-4">{indicator.description}</p>
                      {indicator.metric && (
                        <div className="text-2xl font-bold text-extendia-accent">{indicator.metric}</div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Examples Section */}
      {projectExamples.length > 0 && (
        <section className="py-16" aria-labelledby="project-examples-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="project-examples-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Recent Projects in {areaName}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See our latest work in your area
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectExamples.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                    {project.image && (
                      <div className="aspect-video overflow-hidden">
                        <Image 
                          src={project.image} 
                          alt={`${project.title} - ${project.location || areaName}`}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
                        {project.location}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      {project.cost && (
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-extendia-primary">
                            {project.cost}
                          </Badge>
                          {project.duration && (
                            <span className="text-sm text-gray-500">{project.duration}</span>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqItems.length > 0 && (
        <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Common questions about our services in {areaName}
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-6"
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compliance Information */}
      {compliance && (
        <section className="py-12 bg-extendia-primary text-white" aria-labelledby="compliance-heading">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 id="compliance-heading" className="text-2xl font-bold mb-4">
                Fully Compliant & Insured
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {compliance.certifications && (
                  <div className="text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2" aria-hidden="true" />
                    <h3 className="font-semibold mb-2">Certifications</h3>
                    <p className="text-sm opacity-90">{compliance.certifications}</p>
                  </div>
                )}
                {compliance.insurance && (
                  <div className="text-center">
                    <ShieldCheck className="w-8 h-8 mx-auto mb-2" aria-hidden="true" />
                    <h3 className="font-semibold mb-2">Insurance</h3>
                    <p className="text-sm opacity-90">{compliance.insurance}</p>
                  </div>
                )}
                {compliance.warranty && (
                  <div className="text-center">
                    <Award className="w-8 h-8 mx-auto mb-2" aria-hidden="true" />
                    <h3 className="font-semibold mb-2">Warranty</h3>
                    <p className="text-sm opacity-90">{compliance.warranty}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-extenida-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project in <span className="text-extendia-accent">{areaName}</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-extendia-accent hover:bg-extenida-accent/90 text-white px-8 py-3">
                <a href="/contact">Get Free Quote</a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3">
                <a href="tel:+442039165670">Call: 020 3916 5670</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
