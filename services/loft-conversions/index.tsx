import React from 'react';
import { motion } from "framer-motion";
import { Home, Shield, TrendingUp, Users, Award } from "lucide-react";
import PageLayout from "../../components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { companyInfo } from "../../lib/companyInfo";

const LoftConversions = () => {
  const benefits = [
    {
      icon: Home,
      title: "Extra Living Space",
      description: "Create additional bedrooms, home offices, or recreational spaces in your loft."
    },
    {
      icon: TrendingUp,
      title: "Property Value",
      description: "Significantly increase your property's market value with a professional loft conversion."
    },
    {
      icon: Shield,
      title: "Planning Expertise",
      description: "Full support with planning permission and building regulations compliance."
    },
    {
      icon: Users,
      title: "Local Experience",
      description: "Deep understanding of South West London's architectural styles and requirements."
    }
  ];

  const areaSpecialties = [
    {
      area: "Kingston Upon Thames",
      features: [
        "Excellent ceiling heights in period properties",
        "Dormer and hip-to-gable conversions",
        "Conservation area compliant designs",
        "Maximizing natural light with skylights"
      ]
    },
    {
      area: "Richmond",
      features: [
        "Heritage property expertise",
        "Thames views optimization",
        "Period property specialists",
        "Conservation area compliance"
      ]
    },
    {
      area: "Putney",
      features: [
        "Riverside property conversions",
        "Modern design integration",
        "Value-focused solutions",
        "Local planning knowledge"
      ]
    },
    {
      area: "Wimbledon",
      features: [
        "High-end loft conversions",
        "Luxury master suites",
        "Premium materials and finishes",
        "Contemporary design options"
      ]
    }
  ];

  const conversionTypes = [
    {
      title: "Dormer Loft Conversion",
      description: "Perfect for creating maximum headroom and floor space, popular in Victorian and Edwardian houses."
    },
    {
      title: "Hip-to-Gable Conversion",
      description: "Ideal for semi-detached and end-of-terrace properties, maximizing available space."
    },
    {
      title: "Mansard Conversion",
      description: "Suitable for conservation areas and period properties, maintaining architectural character."
    },
    {
      title: "Velux Conversion",
      description: "Cost-effective solution for properties with adequate headroom, minimal external changes."
    }
  ];

  return (
    <PageLayout
      title="Loft Conversions South West London | Extendia"
      description="Professional loft conversion services in South West London. Expert solutions for period and modern properties with local area knowledge."
    >
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
              Loft Conversions in <span className="text-extendia-accent">South West London</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transform your unused loft space into a beautiful living area with our expert conversion services.
            </p>
            <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3">
              Get Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Convert Your Loft?</h2>
            <p className="text-lg text-gray-600">Unlock the potential of your property with a professional loft conversion</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <benefit.icon className="w-12 h-12 text-extendia-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Loft Conversions</h2>
            <p className="text-lg text-gray-600">
              Choose the perfect conversion type for your property
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conversionTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{type.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Specialties Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Local Area Expertise</h2>
            <p className="text-lg text-gray-600">
              Tailored solutions for different areas of South West London
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areaSpecialties.map((area, index) => (
              <motion.div
                key={area.area}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{area.area}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Award className="w-5 h-5 text-extendia-accent mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
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

      {/* CTA Section */}
  <section className="py-20 bg-gradient-to-br from-extendia-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your <span className="text-extendia-accent">Loft Space?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation and expert advice on your loft conversion project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3">
                <a href="/contact">Get Quote</a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3">
                <a href={companyInfo.phone.href}>Call: {companyInfo.phone.display}</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LoftConversions;
