import * as React from "react";
import { motion } from "framer-motion";
import { Ruler, Lightbulb, Hammer, Clock, Award } from "lucide-react";
import PageLayout from "../../components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { companyInfo } from "../../lib/companyInfo";

const HouseExtensions = () => {
  const benefits = [
    {
      icon: Ruler,
      title: "Maximized Space",
      description: "Expert design to make the most of your property's potential across South West London."
    },
    {
      icon: Lightbulb,
      title: "Bespoke Design",
      description: "Tailored solutions that complement local architectural styles from Victorian to modern."
    },
    {
      icon: Hammer,
      title: "Quality Build",
      description: "Superior craftsmanship with attention to detail and high-end materials."
    },
    {
      icon: Clock,
      title: "Efficient Timeline",
      description: "Streamlined process from planning to completion with clear project milestones."
    }
  ];

  const areaSpecialties = [
    {
      area: "Kingston Upon Thames",
      features: [
        "Victorian and Edwardian terraced house extensions",
        "Side return and rear extension expertise",
        "Conservation area compliance",
        "25-30% typical value increase"
      ]
    },
    {
      area: "Richmond",
      features: [
        "Heritage property renovations",
        "Thames-view maximizing designs",
        "Conservation area specialist knowledge",
        "Period-appropriate extensions"
      ]
    },
    {
      area: "Putney",
      features: [
        "Riverside property extensions",
        "Modern design integration",
        "Property value optimization",
        "Local planning expertise"
      ]
    },
    {
      area: "Wimbledon",
      features: [
        "High-end residential extensions",
        "Luxury living space creation",
        "Premium finish standards",
        "Contemporary design solutions"
      ]
    }
  ];

  return (
    <PageLayout
      title="House Extensions South West London | Extendia"
      description="Expert house extension services in South West London. Specializing in Victorian, Edwardian, and modern home extensions with local area expertise."
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
              House Extensions in <span className="text-extendia-accent">South West London</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transform your home with our expert extension services, tailored to your local area&apos;s architecture and requirements.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Extendia?</h2>
            <p className="text-lg text-gray-600">Delivering exceptional house extensions across South West London</p>
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

      {/* Area Specialties Section */}
      <section className="py-20 bg-gray-50">
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
              Understanding the unique characteristics and requirements of each neighborhood
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
              Ready to Start Your <span className="text-extendia-accent">Extension Project?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation and let&apos;s discuss how we can transform your home.
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

export default HouseExtensions;
