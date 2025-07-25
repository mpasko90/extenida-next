'use client';

import { motion } from "framer-motion";
import { MapPin, Trophy, TreePine, Star } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WimbledonPage() {
  const services = [
    "Home Extensions",
    "Loft Conversions", 
    "Kitchen Renovations",
    "Bathroom Renovations",
    "Planning Permission",
    "Building Regulations"
  ];

  const projects = [
    {
      title: "Victorian Semi Extension",
      location: "Wimbledon Village",
      type: "Double storey extension",
      value: "£75,000"
    },
    {
      title: "Edwardian Loft Conversion",
      location: "South Wimbledon",
      type: "Dormer conversion",
      value: "£45,000"
    },
    {
      title: "Modern Kitchen Renovation",
      location: "Raynes Park",
      type: "Kitchen renovation",
      value: "£28,000"
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
            <Trophy className="w-16 h-16 text-extendia-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building in <span className="text-extendia-accent">Wimbledon</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Championship-standard home extensions and renovations in prestigious Wimbledon
            </p>
            <Button asChild className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3">
              <a href="/contact">Get Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Wimbledon */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Wimbledon for Your Home Extension?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Wimbledon combines historic charm with modern convenience, making it one of South West London&apos;s most sought-after locations for property development.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Excellent transport links",
                  "Top-rated schools",
                  "Beautiful green spaces",
                  "Strong property values"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="w-5 h-5 text-extendia-accent mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/api/placeholder/600/400"
                alt="Wimbledon home extension"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Local Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve in Wimbledon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Wimbledon Village to South Wimbledon, we provide expert home extension services throughout the area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Wimbledon Village", icon: MapPin, description: "Historic heart with period properties" },
              { name: "South Wimbledon", icon: TreePine, description: "Family-friendly residential area" },
              { name: "Raynes Park", icon: MapPin, description: "Victorian and Edwardian homes" }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-8">
                    <area.icon className="w-8 h-8 text-extendia-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.name}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Wimbledon Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive home improvement services tailored to Wimbledon properties.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service}</h3>
                <p className="text-gray-600">Professional {service.toLowerCase()} services in Wimbledon</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recent Wimbledon Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we&apos;ve transformed homes across Wimbledon.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-2">{project.location}</p>
                    <p className="text-sm text-gray-500 mb-4">{project.type}</p>
                    <p className="text-lg font-semibold text-extendia-primary">{project.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-extendia-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Wimbledon Home?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Get your project started with a consultation from our local experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-extendia-primary hover:bg-gray-100 px-8 py-3 text-lg">
                <a href="tel:+442012345678">Call: 020 1234 5678</a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg">
                <a href="/contact">Get Quote</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
