
import { motion } from "framer-motion";
import { Droplets, Sparkles, Wrench } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Bathrooms = () => {
  const services = [
    {
      icon: <Droplets className="w-8 h-8 text-extendia-accent" />,
      title: "Complete Bathroom Renovations",
      description: "Full bathroom refurbishment with modern fixtures and fittings"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-extendia-accent" />,
      title: "Luxury Bathroom Design",
      description: "Premium bathroom installations with high-end materials"
    },
    {
      icon: <Wrench className="w-8 h-8 text-extendia-accent" />,
      title: "Bathroom Repairs",
      description: "Professional repair services for all bathroom issues"
    }
  ];

  return (
    <PageLayout 
      title="Bathroom Services" 
      description="Professional bathroom renovation and installation services in South West London."
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
              Bathroom <span className="text-extendia-accent">Specialists</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transform your bathroom with our expert renovation services
            </p>
            <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3">
              Get Free Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Bathrooms;
