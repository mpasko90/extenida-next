import { motion } from "framer-motion";
import { Droplets, Sparkles, Palette, Ruler, Shield, Award } from "lucide-react";
import PageLayout from "../../components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const BathroomRenovations = () => {
  const benefits = [
    {
      icon: Droplets,
      title: "Luxury Design",
      description: "Create stunning, spa-like bathrooms with premium fixtures and finishes."
    },
    {
      icon: Sparkles,
      title: "Quality Materials",
      description: "Using the finest materials for durability and aesthetic appeal."
    },
    {
      icon: Palette,
      title: "Expert Finish",
      description: "Meticulous attention to detail in every installation and finish."
    },
    {
      icon: Shield,
      title: "Full Guarantee",
      description: "10-year warranty on all bathroom renovation work."
    }
  ];

  const styles = [
    {
      title: "Contemporary Luxury",
      description: "Modern designs with clean lines, floating vanities, and minimalist fixtures."
    },
    {
      title: "Period Authentic",
      description: "Traditional styles perfect for Victorian and Edwardian properties."
    },
    {
      title: "Spa Inspired",
      description: "Relaxing atmospheres with premium shower systems and freestanding baths."
    },
    {
      title: "Family Practical",
      description: "Functional designs with ample storage and durable materials."
    }
  ];

  const areaFeatures = [
    {
      area: "Kingston Upon Thames",
      features: [
        "Period property bathroom expertise",
        "Victorian home renovations",
        "Modern family bathrooms",
        "Luxury en-suite additions"
      ]
    },
    {
      area: "Richmond",
      features: [
        "Heritage property specialists",
        "High-end luxury bathrooms",
        "Period feature preservation",
        "Contemporary design integration"
      ]
    },
    {
      area: "Wimbledon",
      features: [
        "Premium bathroom designs",
        "Luxury master en-suites",
        "High-specification finishes",
        "Modern technology integration"
      ]
    },
    {
      area: "Putney",
      features: [
        "Contemporary urban designs",
        "Space-efficient solutions",
        "Riverside property expertise",
        "Modern family bathrooms"
      ]
    }
  ];

  return (
    <PageLayout
      title="Bathroom Renovations South West London | Extenida"
      description="Luxury bathroom renovation services in South West London. Expert designs and installations for modern and period properties."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-extenida-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bathroom Renovations in <span className="text-extendia-accent">South West London</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transform your bathroom into a luxurious sanctuary with our expert renovation services.
            </p>
            <Button className="bg-extendia-accent hover:bg-extenida-accent/90 text-white px-8 py-3">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600">Experience luxury bathroom renovation at its finest</p>
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

      {/* Styles Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bathroom Styles</h2>
            <p className="text-lg text-gray-600">
              Choose from our range of beautiful bathroom designs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {styles.map((style, index) => (
              <motion.div
                key={style.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{style.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{style.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Features Section */}
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
              Bathroom solutions tailored to your local area
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areaFeatures.map((area, index) => (
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
      <section className="py-20 bg-gradient-to-br from-extenida-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your <span className="text-extendia-accent">Bathroom?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation and design ideas for your dream bathroom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-extenida-accent hover:bg-extenida-accent/90 text-white px-8 py-3">
                <a href="/contact">Get Free Quote</a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3">
                <a href="tel:+442039165670">Call: 020 3916 5670</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BathroomRenovations;
