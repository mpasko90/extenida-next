
import { motion } from "framer-motion";
import { CheckCircle, Home, Clock, DollarSign, Users } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HomeExtensions = () => {
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

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Free site visit and discussion of your requirements and budget"
    },
    {
      step: 2,
      title: "Design & Planning",
      description: "Architectural plans and planning permission application if required"
    },
    {
      step: 3,
      title: "Building Regulations",
      description: "Full building regulations approval and structural calculations"
    },
    {
      step: 4,
      title: "Construction",
      description: "Professional construction with regular progress updates"
    },
    {
      step: 5,
      title: "Completion",
      description: "Final inspections, snagging, and 10-year warranty provision"
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
    <PageLayout 
      title="Home Extensions" 
      description="Professional home extensions in South West London. Single and double-storey extensions, side returns, and rear extensions."
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
              Home <span className="text-extendia-accent">Extensions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transform your home with professional extensions. Add space, value, and functionality without moving house.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg">
                Get Free Quote
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg">
                View Portfolio
              </Button>
            </div>
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
              Types of <span className="text-extendia-accent">Extensions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of extension options, each designed to maximize space and add value to your property.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extensionTypes.map((type, index) => (
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

      {/* Process Section */}
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
              Our <span className="text-extendia-accent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to completion, we guide you through every step of your home extension project.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-extendia-accent text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
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
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-extendia-accent">Home Extensions?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Home extensions offer an excellent alternative to moving house, allowing you to stay in the area you love 
                while creating the space your family needs.
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
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="/placeholder.svg" 
                alt="Home extension before and after"
                className="rounded-lg shadow-xl"
              />
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
              Ready to Extend Your <span className="text-extendia-accent">Home?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation and quote for your home extension project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg">
                <a href="tel:+442012345678">Call: 020 1234 5678</a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg">
                <a href="/contact">Get Free Quote</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomeExtensions;
