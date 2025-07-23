import { motion } from "framer-motion";
import { Sun, Droplets, Shield, Ruler, Leaf, Award } from "lucide-react";
import PageLayout from "../../components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const PatiosDriveways = () => {
  const benefits = [
    {
      icon: Sun,
      title: "Outdoor Living",
      description: "Create beautiful outdoor spaces perfect for relaxation and entertainment."
    },
    {
      icon: Droplets,
      title: "Drainage Solutions",
      description: "Expert implementation of permeable paving and sustainable drainage systems."
    },
    {
      icon: Shield,
      title: "Quality Materials",
      description: "Premium materials selected for durability and aesthetic appeal."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable solutions with environmentally conscious materials and designs."
    }
  ];

  const styles = [
    {
      title: "Contemporary Patios",
      description: "Modern designs with clean lines and minimalist features."
    },
    {
      title: "Traditional Driveways",
      description: "Classic styles complementing period properties."
    },
    {
      title: "Natural Stone",
      description: "Premium stone paving for timeless elegance."
    },
    {
      title: "Permeable Solutions",
      description: "SUDS-compliant driveways with excellent drainage."
    }
  ];

  const areaFeatures = [
    {
      area: "Kingston Upon Thames",
      features: [
        "Period property complementary designs",
        "Victorian frontage expertise",
        "Heritage area compliance",
        "Family-friendly patio spaces"
      ]
    },
    {
      area: "Richmond",
      features: [
        "Conservation area specialists",
        "Riverside garden patios",
        "Premium natural materials",
        "Heritage property solutions"
      ]
    },
    {
      area: "Putney",
      features: [
        "Urban garden solutions",
        "Contemporary designs",
        "Riverside property expertise",
        "Low-maintenance options"
      ]
    },
    {
      area: "Wimbledon",
      features: [
        "High-end finish options",
        "Large driveway solutions",
        "Premium landscaping",
        "Luxury outdoor spaces"
      ]
    }
  ];

  return (
    <PageLayout
      title="Patios & Driveways South West London | Extenida"
      description="Expert patio and driveway installation in South West London. Quality materials and designs for lasting outdoor spaces."
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
              Patios & Driveways in <span className="text-extendia-accent">South West London</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transform your outdoor space with our expert patio and driveway solutions.
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
            <p className="text-lg text-gray-600">Creating beautiful and practical outdoor spaces</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Options</h2>
            <p className="text-lg text-gray-600">
              Choose from our range of premium paving solutions
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
              Solutions tailored to your local area requirements
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
              Ready to Transform Your <span className="text-extendia-accent">Outdoor Space?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation and quote for your patio or driveway project.
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
    </PageLayout>
  );
};

export default PatiosDriveways;
