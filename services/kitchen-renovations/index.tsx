import { motion } from "framer-motion";
import { ChefHat, Sun, Ruler, Lightbulb, Clock, Award } from "lucide-react";
import PageLayout from "../../components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const KitchenRenovations = () => {
  const benefits = [
    {
      icon: ChefHat,
      title: "Expert Design",
      description: "Custom kitchen layouts optimized for your cooking and entertaining needs."
    },
    {
      icon: Sun,
      title: "Natural Light",
      description: "Maximize natural light with strategic window placement and open-plan designs."
    },
    {
      icon: Ruler,
      title: "Space Planning",
      description: "Efficient use of space with ergonomic workflow considerations."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Efficient project management with clear timelines and milestones."
    }
  ];

  const styles = [
    {
      title: "Modern Open-Plan",
      description: "Contemporary designs perfect for family living and entertaining."
    },
    {
      title: "Traditional Shaker",
      description: "Classic styles ideal for period properties and timeless appeal."
    },
    {
      title: "Sleek Contemporary",
      description: "Minimalist designs with clean lines and high-tech appliances."
    },
    {
      title: "Industrial Chic",
      description: "Urban style with exposed elements and professional-grade features."
    }
  ];

  const areaFeatures = [
    {
      area: "Kingston Upon Thames",
      features: [
        "Victorian kitchen modernization",
        "Side return kitchen extensions",
        "Period property expertise",
        "Family-focused designs"
      ]
    },
    {
      area: "Richmond",
      features: [
        "Heritage property specialists",
        "Luxury kitchen installations",
        "Garden-view kitchens",
        "High-end appliance fitting"
      ]
    },
    {
      area: "Putney",
      features: [
        "Modern riverside properties",
        "Open-plan solutions",
        "Contemporary designs",
        "Urban living spaces"
      ]
    },
    {
      area: "Wimbledon",
      features: [
        "Premium kitchen designs",
        "High-specification finishes",
        "Smart home integration",
        "Luxury entertaining spaces"
      ]
    }
  ];

  return (
    <PageLayout
      title="Kitchen Renovations South West London | Extenida"
      description="Expert kitchen renovation services in South West London. From modern open-plan to traditional designs, crafted for your lifestyle."
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
              Kitchen Renovations in <span className="text-extendia-accent">South West London</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transform your kitchen into a stunning space that combines style with functionality.
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
            <p className="text-lg text-gray-600">Creating dream kitchens with expertise and innovation</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kitchen Styles</h2>
            <p className="text-lg text-gray-600">
              Choose from our range of beautiful kitchen designs
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
              Kitchen solutions tailored to your local area
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
              Ready to Transform Your <span className="text-extendia-accent">Kitchen?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation and design ideas for your dream kitchen.
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

export default KitchenRenovations;
