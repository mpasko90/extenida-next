'use client';

import { motion } from "framer-motion";
import { CheckCircle, Ruler, Award } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LoftConversionsPage() {
  const conversionTypes = [
    {
      title: "Velux Loft Conversion",
      description: "Most cost-effective option using roof windows",
      price: "From £20,000",
      features: ["No planning permission needed", "Quick installation", "Natural light", "Cost-effective"]
    },
    {
      title: "Dormer Loft Conversion", 
      description: "Maximum headroom and floor space",
      price: "From £30,000",
      features: ["Extra headroom", "More floor space", "Traditional windows", "Enhanced property value"]
    },
    {
      title: "Mansard Loft Conversion",
      description: "Maximum space gain with flat roof section",
      price: "From £45,000",
      features: ["Maximum space", "Stunning appearance", "Premium conversion", "Exceptional value add"]
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
              Loft <span className="text-extendia-accent">Conversions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transform your unused loft space into beautiful bedrooms, offices, or living areas.
            </p>
            <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3">
              Get Assessment
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Conversion Types */}
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
              Conversion Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect loft conversion for your home and needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {conversionTypes.map((type, index) => (
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
                    <div className="text-2xl font-bold text-extendia-accent">{type.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Award className="w-16 h-16 text-extendia-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Add Value</h3>
              <p className="text-gray-600">Increase your property value by up to 20% with a professional loft conversion.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <Ruler className="w-16 h-16 text-extendia-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Extra Space</h3>
              <p className="text-gray-600">Create additional bedrooms, office space, or entertainment areas.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <CheckCircle className="w-16 h-16 text-extendia-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">No Moving</h3>
              <p className="text-gray-600">Avoid the stress and costs of moving house - extend up instead!</p>
            </motion.div>
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
              Ready to Convert <span className="text-extendia-accent">Your Loft?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a loft conversion assessment and quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg">
                Call: 020 1234 5678
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg">
                Book Assessment
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
