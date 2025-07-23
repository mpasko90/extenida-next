'use client';

import { motion } from "framer-motion";
import { CheckCircle, Clock, DollarSign } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomeExtensionsPage() {
  const extensionTypes = [
    {
      title: "Single-Storey Extensions",
      description: "Perfect for creating open-plan kitchen-diners or larger living spaces",
      price: "From £15,000",
      duration: "8-12 weeks",
      features: ["Kitchen extensions", "Living room extensions", "Side returns", "Rear extensions"]
    },
    {
      title: "Double-Storey Extensions",
      description: "Maximum space gain with additional bedrooms and living areas",
      price: "From £35,000",
      duration: "12-16 weeks", 
      features: ["Two-floor extensions", "Extra bedrooms", "Additional bathrooms", "Expanded living areas"]
    },
    {
      title: "Side Return Extensions",
      description: "Popular Victorian terrace solution utilizing side passages",
      price: "From £25,000",
      duration: "10-14 weeks",
      features: ["Wider kitchens", "Better natural light", "Open-plan living", "Garden access"]
    }
  ];

  const benefits = [
    "Increase your home's value by 15-20%",
    "Avoid the stress and cost of moving house",
    "Custom design to match your exact needs",
    "Minimal disruption to daily life",
    "Professional project management",
    "10-year structural warranty"
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
              Home <span className="text-extendia-accent">Extensions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Professional home extensions in South West London. Create the space you need without moving house.
            </p>
            <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3">
              Get Your Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Extension Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Extension Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of extension options to transform your home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extensionTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-100 hover:border-extendia-accent/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{type.title}</CardTitle>
                    <p className="text-gray-600">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-extendia-accent" />
                        <span className="font-bold text-extendia-primary">{type.price}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-gray-400" />
                        <span className="text-sm text-gray-600">{type.duration}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-extendia-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Extensions?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-extendia-accent flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
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
              Ready to Extend <span className="text-extendia-accent">Your Home?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a consultation and quote for your home extension project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg">
                Call: 020 1234 5678
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg">
                Get Your Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
