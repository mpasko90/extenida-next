
import { motion } from "framer-motion";
import { CheckCircle, ChefHat, Clock, DollarSign, Lightbulb } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const KitchenRenovations = () => {
  const renovationTypes = [
    {
      title: "Budget Kitchen Refresh",
      description: "Update your kitchen with new doors, worktops, and appliances",
      price: "From £8,000",
      duration: "2-3 weeks",
      features: ["New cabinet doors", "Worktop replacement", "Updated appliances", "Fresh paint & tiles"]
    },
    {
      title: "Complete Kitchen Renovation",
      description: "Full kitchen redesign with new layout and premium finishes",
      price: "From £18,000",
      duration: "4-6 weeks",
      features: ["Complete new kitchen", "Layout redesign", "Premium appliances", "Electrical & plumbing work"]
    },
    {
      title: "Luxury Kitchen Design",
      description: "High-end kitchen with premium materials and custom features",
      price: "From £35,000",
      duration: "6-8 weeks",
      features: ["Bespoke cabinetry", "Quartz/granite worktops", "Premium appliances", "Under-floor heating"]
    }
  ];

  const features = [
    {
      icon: ChefHat,
      title: "Expert Design",
      description: "Professional kitchen design service to maximize space and functionality"
    },
    {
      icon: Lightbulb,
      title: "Modern Lighting",
      description: "LED lighting solutions including under-cabinet and accent lighting"
    },
    {
      icon: CheckCircle,
      title: "Quality Materials",
      description: "Only the finest materials and appliances from trusted suppliers"
    }
  ];

  const process = [
    "Free consultation and design meeting",
    "3D kitchen design and planning",
    "Detailed quote and material selection", 
    "Professional installation",
    "Final inspection and handover"
  ];

  return (
    <PageLayout 
      title="Kitchen Renovations" 
      description="Transform your kitchen with professional renovation services in South West London. From budget refreshes to luxury designs."
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
              Kitchen <span className="text-extendia-accent">Renovations</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Create the heart of your home with our professional kitchen renovation services. From budget updates to luxury designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg">
                Free Design Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg">
                View Kitchen Gallery
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Renovation Types */}
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
              Kitchen Renovation <span className="text-extendia-accent">Options</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you want a simple refresh or a complete transformation, we have kitchen renovation solutions for every budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {renovationTypes.map((type, index) => (
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

      {/* Features Section */}
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
              Why Choose <span className="text-extendia-accent">Our Service</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-extendia-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
                Our Kitchen Renovation <span className="text-extendia-accent">Process</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We follow a proven process to ensure your kitchen renovation runs smoothly from start to finish, 
                with minimal disruption to your daily routine.
              </p>
              <div className="space-y-4">
                {process.map((step, index) => (
                  <div key={step} className="flex items-start">
                    <div className="w-8 h-8 bg-extendia-accent text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 pt-1">{step}</span>
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
                alt="Kitchen renovation process"
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
              Start Your Kitchen <span className="text-extendia-accent">Transformation</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to create your dream kitchen? Contact us for a free design consultation and detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg">
                <a href="tel:+442012345678">Call: 020 1234 5678</a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg">
                <a href="/contact">Free Design Consultation</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default KitchenRenovations;
