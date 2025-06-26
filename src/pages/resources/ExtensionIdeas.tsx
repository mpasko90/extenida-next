
import { motion } from "framer-motion";
import { Lightbulb, Home, ArrowRight, Heart } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ExtensionIdeas = () => {
  const extensionIdeas = [
    {
      title: "Kitchen Extension with Bi-fold Doors",
      description: "Open up your kitchen to the garden with stunning bi-fold doors and create a seamless indoor-outdoor living space.",
      image: "/placeholder.svg",
      category: "Kitchen Extensions",
      features: ["Bi-fold doors", "Open plan design", "Natural light", "Garden access"]
    },
    {
      title: "Double-Height Side Return",
      description: "Maximize space and light with a double-height side return extension, perfect for Victorian terraced houses.",
      image: "/placeholder.svg",
      category: "Side Returns",
      features: ["Double height", "Structural glazing", "Skylights", "Modern design"]
    },
    {
      title: "Wrap-Around Extension",
      description: "Combine side return and rear extension for maximum space gain and transformation of your ground floor.",
      image: "/placeholder.svg",
      category: "Wrap-Around",
      features: ["Maximum space", "Open plan living", "Multiple zones", "Garden integration"]
    },
    {
      title: "Single-Storey Rear Extension",
      description: "Classic rear extension to expand your kitchen and dining area with connection to the garden.",
      image: "/placeholder.svg",
      category: "Rear Extensions",
      features: ["Cost effective", "Quick build", "Garden views", "Natural light"]
    },
    {
      title: "Two-Storey Extension",
      description: "Add significant space with a two-storey extension including additional bedroom and expanded living areas.",
      image: "/placeholder.svg",
      category: "Two-Storey",
      features: ["Extra bedroom", "Extended living", "Maximum value", "Future-proof"]
    },
    {
      title: "Glass Box Extension",
      description: "Ultra-modern glass extension with minimal framework for maximum light and contemporary design.",
      image: "/placeholder.svg",
      category: "Modern",
      features: ["Structural glazing", "Minimal frame", "Contemporary", "Light-filled"]
    }
  ];

  return (
    <PageLayout 
      title="Extension Ideas" 
      description="Explore inspiring home extension ideas and designs for your South West London property."
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
            <Lightbulb className="w-16 h-16 text-extendia-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Extension <span className="text-extendia-accent">Ideas</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Get inspired by our collection of beautiful home extensions and find the perfect design for your property.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ideas Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extensionIdeas.map((idea, index) => (
              <motion.div
                key={idea.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <div className="relative h-48 bg-gray-200 rounded-t-lg overflow-hidden">
                    <img 
                      src={idea.image} 
                      alt={idea.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-extendia-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                        {idea.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{idea.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{idea.description}</p>
                    <div className="space-y-2">
                      {idea.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-gray-500">
                          <Heart className="w-3 h-3 text-extendia-accent mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full mt-4 text-extendia-accent hover:text-extendia-accent/80">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Create Your <span className="text-extendia-accent">Dream Extension?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your vision and create a bespoke extension design that perfectly suits your home and lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg">
                Book Design Consultation
              </Button>
              <Button variant="outline" className="border-extendia-primary text-extendia-primary hover:bg-extendia-primary hover:text-white px-8 py-3 text-lg">
                View Our Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ExtensionIdeas;
