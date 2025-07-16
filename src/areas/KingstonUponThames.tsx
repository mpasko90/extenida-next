import { motion } from "framer-motion";
import { MapPin, Home, Users, TrendingUp } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const KingstonUponThames = () => {
  const areaStats = [
    { label: "Average Property Value", value: "£650,000", icon: Home },
    { label: "Population", value: "43,000", icon: Users },
    { label: "Extension Value Add", value: "25-30%", icon: TrendingUp }
  ];

  const localServices = [
    {
      title: "House Extensions in Kingston",
      description: "Popular Victorian and Edwardian terraced houses perfect for side return and rear extensions.",
      link: "/services/house-extensions/kingston"
    },
    {
      title: "Loft Conversions in Kingston",
      description: "Many properties have excellent loft conversion potential with good ceiling heights.",
      link: "/services/loft-conversions/kingston"
    }
  ];

  return (
    <PageLayout 
      title="Building Services in Kingston Upon Thames" 
      description="Professional home extensions, loft conversions, and renovations in Kingston Upon Thames. Local experts with deep area knowledge."
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
            <MapPin className="w-16 h-16 text-extendia-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Kingston Upon <span className="text-extendia-accent">Thames</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Expert building services in Kingston Upon Thames. We understand the local area, planning requirements, and architectural styles.
            </p>
            <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg">
              Get Free Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Area Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kingston Market Overview</h2>
            <p className="text-lg text-gray-600">Understanding the local property market helps us deliver maximum value</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {areaStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="text-center p-6">
                  <CardContent>
                    <stat.icon className="w-12 h-12 text-extendia-accent mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services in Kingston</h2>
            <p className="text-lg text-gray-600">Specialized services tailored to Kingston&apos;s unique property characteristics</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {localServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Us for Your <span className="text-extendia-accent">Kingston Project?</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>• Deep understanding of Kingston&apos;s Victorian and Edwardian architecture</p>
                <p>• Established relationships with Kingston Council planning department</p>
                <p>• Knowledge of local conservation areas and planning restrictions</p>
                <p>• Experience with typical Kingston property layouts and potential</p>
                <p>• Local supplier network for competitive pricing</p>
                <p>• Completed 50+ projects in Kingston area</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src="/placeholder.svg" 
                alt="Kingston Upon Thames property"
                className="rounded-lg shadow-xl"
                width={400} height={300}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default KingstonUponThames;
