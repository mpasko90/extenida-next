import { motion } from "framer-motion";
import { CheckCircle, Award, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const About = () => {
  const teamMembers = [
    {
      name: "James Richardson",
      role: "Founder & Managing Director",
      experience: "20+ years",
      image: "/placeholder.svg",
      description: "Expert in home extensions and project management with certified qualifications in construction."
    },
    {
      name: "Sarah Thompson",
      role: "Lead Architect",
      experience: "15+ years",
      image: "/placeholder.svg",
      description: "Specializes in space optimization and planning permission applications for South West London."
    },
    {
      name: "Michael Davies",
      role: "Construction Manager",
      experience: "18+ years",
      image: "/placeholder.svg",
      description: "Oversees all building work ensuring quality standards and timely project completion."
    }
  ];

  const certifications = [
    "Registered with Local Authority Building Control",
    "Federation of Master Builders Member",
    "Construction Skills Certification Scheme",
    "£2M Public Liability Insurance",
    "Health & Safety Executive Certified"
  ];

  const serviceAreas = [
    "Wimbledon", "Richmond", "Putney", "Clapham", "Wandsworth", 
    "Fulham", "Chelsea", "Battersea", "Barnes", "Raynes Park",
    "New Malden", "Kingston", "Surbiton", "Twickenham"
  ];

  return (
    <PageLayout 
      title="About Us" 
      description="Learn about Extendia's 15+ years of experience in South West London home extensions, loft conversions, and renovations."
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
              About <span className="text-extendia-accent">Extendia</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transforming South West London homes for over 15 years with expert craftsmanship and personalized service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
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
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008 by James Richardson, Extendia began as a small family business with a simple mission: 
                to help South West London homeowners maximize their living space without the hassle of moving.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as single-storey extensions in Wimbledon has grown into a comprehensive building service 
                covering everything from loft conversions to complete home renovations across South West London.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have completed over 500 successful projects, helping families create the homes 
                of their dreams while adding significant value to their properties.
              </p>
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
                alt="Extendia team working on home extension"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="text-extendia-accent">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Led by experienced professionals with decades of combined expertise in construction, 
              architecture, and project management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-extendia-primary font-semibold mb-2">{member.role}</p>
                    <p className="text-extendia-accent font-medium mb-4">{member.experience}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-extendia-accent mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Certifications & Insurance</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Fully certified and insured for your peace of mind, with all necessary qualifications 
                and memberships to ensure the highest standards of work.
              </p>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={cert} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Service Areas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-extendia-accent mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Service Areas</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                We proudly serve homeowners throughout South West London, with extensive local knowledge 
                and established relationships with local authorities.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-extendia-primary mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-extendia-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-4xl md:text-5xl font-bold text-extendia-accent mb-2">500+</div>
              <div className="text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-extendia-accent mb-2">15+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-extendia-accent mb-2">98%</div>
              <div className="text-lg">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-extendia-accent mb-2">10</div>
              <div className="text-lg">Year Warranty</div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
