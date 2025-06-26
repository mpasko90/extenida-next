
import { motion } from "framer-motion";
import { Home, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortfolioHouseExtensions = () => {
  const projects = [
    {
      title: "Victorian Terrace Extension - Kingston",
      description: "Double-storey rear extension adding 40sqm of living space",
      location: "Kingston Upon Thames",
      type: "Rear Extension",
      completed: "2024"
    },
    {
      title: "Edwardian Side Return - Putney",
      description: "Single-storey side return creating open-plan kitchen-diner",
      location: "Putney",
      type: "Side Return",
      completed: "2023"
    },
    {
      title: "Modern Glass Extension - Richmond",
      description: "Contemporary glass extension with bi-fold doors to garden",
      location: "Richmond",
      type: "Garden Extension",
      completed: "2023"
    }
  ];

  return (
    <PageLayout 
      title="House Extensions Portfolio" 
      description="View our completed house extension projects across South West London."
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
            <Home className="w-16 h-16 text-extendia-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              House Extension <span className="text-extendia-accent">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Showcasing our finest house extension projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-extendia-accent/10 text-extendia-accent px-3 py-1 rounded-full text-sm font-medium">
                        {project.type}
                      </span>
                      <span className="text-gray-500 text-sm">{project.completed}</span>
                    </div>
                    <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{project.location}</span>
                      <Button variant="ghost" className="text-extendia-accent hover:text-extendia-accent/80 p-0">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
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

export default PortfolioHouseExtensions;
