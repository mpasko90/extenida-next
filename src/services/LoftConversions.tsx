import { motion } from "framer-motion";
import { CheckCircle, Home, Clock, DollarSign, ArrowUp } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LoftConversions = () => {
  const conversionTypes = [
    {
      title: "Roof Light Conversions",
      description: "Simple conversion using existing roof space with Velux windows",
      price: "From £25,000",
      duration: "4-6 weeks",
      features: ["Velux roof windows", "Insulation upgrade", "New flooring", "Basic electrical work"]
    },
    {
      title: "Dormer Conversions",
      description: "Add dormers to increase headroom and usable floor space",
      price: "From £35,000", 
      duration: "6-8 weeks",
      features: ["Increased headroom", "More natural light", "Additional floor space", "Better proportions"]
    },
    {
      title: "Hip-to-Gable Conversions",
      description: "Maximum space gain by extending the roof to the side wall",
      price: "From £45,000",
      duration: "8-10 weeks",
      features: ["Maximum space utilization", "Multiple rooms possible", "Structural alterations", "Planning permission required"]
    }
  ];

  const suitabilityChecks = [
    "Minimum 2.2m head height at ridge",
    "Adequate floor joists (or strengthening possible)",
    "Safe staircase access route available", 
    "Building regulations compliance possible",
    "No planning restrictions in area"
  ];

  const benefits = [
    "Add 20-30% to your property value",
    "Create additional bedrooms or office space",
    "Utilize existing unused space efficiently",
    "No loss of garden space",
    "Often permitted development (no planning needed)",
    "Relatively quick installation"
  ];

  return (
    <PageLayout 
      title="Loft Conversions" 
      description="Professional loft conversions in South West London. Transform your unused loft space into valuable living areas."
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
              Loft <span className="text-extendia-accent">Conversions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transform your unused loft space into beautiful, functional rooms. Perfect for bedrooms, offices, or playrooms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg">
                Free Loft Survey
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg">
                View Examples
              </Button>
            </div>
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
              Loft Conversion <span className="text-extendia-accent">Options</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer different types of loft conversions to suit your property, budget, and space requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {conversionTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{type.title}</CardTitle>
                    <p className="text-gray-600">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-extendia-accent">
                        <DollarSign className="w-5 h-5 mr-1" />
                        <span className="font-bold">{type.price}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-5 h-5 mr-1" />
                        <span>{type.duration}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
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

      {/* Suitability Check */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <ArrowUp className="w-8 h-8 text-extendia-accent mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Is Your Loft Suitable?</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Not all lofts are suitable for conversion. We check these key factors during our free survey 
                to determine feasibility and provide accurate quotes.
              </p>
              <div className="space-y-4">
                {suitabilityChecks.map((check) => (
                  <div key={check} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{check}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white">
                  Book Free Loft Survey
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="/placeholder.svg" 
                alt="Loft conversion suitability check"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img 
                src="/placeholder.svg" 
                alt="Beautiful loft conversion bedroom"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Benefits of <span className="text-extendia-accent">Loft Conversion</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Loft conversions are one of the most cost-effective ways to add space and value to your home, 
                utilizing space that&apos;s already there but currently unused.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
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
              Transform Your <span className="text-extendia-accent">Loft Today</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Book your free loft survey and discover how we can transform your unused space into valuable living areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg">
                <a href="tel:+442012345678">Call: 020 1234 5678</a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg">
                <a href="/contact">Book Free Survey</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LoftConversions;
