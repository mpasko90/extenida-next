'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Victorian House Extension",
      location: "Wimbledon",
      category: "extension",
      image: "/placeholder.svg",
      beforeImage: "/placeholder.svg",
      description: "Double-storey rear extension adding kitchen-diner and master bedroom suite",
      investment: "£85,000",
      duration: "14 weeks",
      features: ["Open-plan kitchen-diner", "Bi-fold doors to garden", "Master bedroom with ensuite"]
    },
    {
      id: 2,
      title: "Loft Conversion with Dormer",
      location: "Richmond",
      category: "loft",
      image: "/placeholder.svg",
      beforeImage: "/placeholder.svg",
      description: "Full loft conversion creating two bedrooms and family bathroom",
      investment: "£55,000",
      duration: "8 weeks",
      features: ["Two double bedrooms", "Family bathroom", "Built-in storage", "Velux windows"]
    },
    {
      id: 3,
      title: "Modern Kitchen Renovation",
      location: "Putney",
      category: "kitchen",
      image: "/placeholder.svg",
      beforeImage: "/placeholder.svg",
      description: "Complete kitchen redesign with island and premium appliances",
      investment: "£32,000",
      duration: "4 weeks",
      features: ["Quartz worktops", "Kitchen island", "Integrated appliances", "Under-floor heating"]
    },
    {
      id: 4,
      title: "Luxury Bathroom Suite",
      location: "Clapham",
      category: "bathroom",
      image: "/placeholder.svg",
      beforeImage: "/placeholder.svg",
      description: "Master ensuite with walk-in shower and luxury finishes",
      investment: "£18,000",
      duration: "3 weeks",
      features: ["Walk-in rainfall shower", "Heated towel rails", "Underfloor heating", "LED mirror"]
    },
    {
      id: 5,
      title: "Side Return Extension",
      location: "Wandsworth",
      category: "extension",
      image: "/placeholder.svg",
      beforeImage: "/placeholder.svg",
      description: "Single-storey side return extension with glass roof",
      investment: "£65,000",
      duration: "10 weeks",
      features: ["Glass roof panels", "Underfloor heating", "Bi-fold doors", "Kitchen extension"]
    },
    {
      id: 6,
      title: "Whole House Renovation",
      location: "Fulham",
      category: "renovation",
      image: "/placeholder.svg",
      beforeImage: "/placeholder.svg",
      description: "Complete house renovation including extension and loft conversion",
      investment: "£150,000",
      duration: "20 weeks",
      features: ["Full house rewire", "New plumbing", "Loft conversion", "Rear extension"]
    }
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "extension", label: "Extensions" },
    { key: "loft", label: "Loft Conversions" },
    { key: "kitchen", label: "Kitchens" },
    { key: "bathroom", label: "Bathrooms" },
    { key: "renovation", label: "Full Renovations" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <PageLayout>
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
              Our <span className="text-extendia-accent">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Discover our completed projects across South West London, showcasing professional craftsmanship and innovative design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                variant={activeFilter === filter.key ? "default" : "outline"}
                className={activeFilter === filter.key 
                  ? "bg-extendia-accent hover:bg-extendia-accent/90 text-white" 
                  : "border-extendia-primary text-extendia-primary hover:bg-extendia-primary hover:text-white"
                }
              >
                {filter.label}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      width={400}
                      height={256}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button className="bg-white text-extendia-primary hover:bg-gray-100">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 bg-extendia-card text-extendia-primary text-sm rounded-full font-medium">
                        {project.location}
                      </span>
                      <span className="text-extendia-accent font-bold">{project.investment}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>Duration: {project.duration}</span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {project.features.slice(0, 2).map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-extendia-accent rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                      {project.features.length > 2 && (
                        <span className="text-sm text-extendia-primary">
                          +{project.features.length - 2} more features
                        </span>
                      )}
                    </div>
                    
                    <Button variant="outline" className="w-full border-extendia-primary text-extendia-primary hover:bg-extendia-primary hover:text-white">
                      View Full Case Study
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
              Ready to Start Your <span className="text-extendia-accent">Dream Project?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let&apos;s discuss how we can transform your home with the same professional standards and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg">
                <a href="tel:+442012345678">Call: 020 1234 5678</a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg">
                <a href="/contact">Get Your Quote</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
