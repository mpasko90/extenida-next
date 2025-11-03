'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Landmark, TreePine, Star } from 'lucide-react';
import { PageLayout } from '@/components/layout';
import { companyInfo } from '@/lib/companyInfo';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PutneyAreaContent = () => {
  const services = [
    'Home Extensions',
    'Loft Conversions',
    'Kitchen Renovations',
    'Bathroom Renovations',
    'Planning Permission',
    'Building Regulations'
  ];

  const projects = [
    {
      title: 'Bathroom Conversion Putney',
      location: 'Putney SW15 1PB',
      type: 'Victorian bathroom renovation with modern fixtures',
      value: '£10,000 - £25,000',
      slug: 'bathroom-conversion-putney',
      year: 2022
    },
    {
      title: 'Bathroom Refurbishment Putney',
      location: 'Putney SW15 1PD',
      type: 'Contemporary bathroom redesign',
      value: 'Contact for quote',
      slug: 'bathroom-refurbishment-putney',
      year: 2022
    },
    {
      title: 'Ground Floor Reconfiguration',
      location: 'East Putney',
      type: 'Structural knock-through + remodel',
      value: '£36,000'
    }
  ];

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
            <Landmark className="w-16 h-16 text-extendia-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building in <span className="text-extendia-accent">Putney</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              High-spec extensions & refurbishments across riverside and hillside Putney
            </p>
            <Button asChild className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3">
              <a href="/contact">Get Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Putney */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Extend in Putney?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Putney combines leafy commons, period terraces and strong rail & river connections—an attractive base for families upgrading space & layout through extensions.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[ 'Riverside lifestyle', 'Victorian & Edwardian stock', 'Excellent transport', 'Strong school catchments' ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="w-5 h-5 text-extendia-accent mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/images/wp-content/uploads/2022/11/Quill-Lane-scaled-600x400.jpg"
                alt="Bathroom renovation Putney"
                width={600}
                height={400}
                className="rounded-lg shadow-xl h-auto w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Local Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve in Putney
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert design & build across Putney, West Putney and Roehampton borders.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'West Putney', icon: MapPin, description: 'Period terraces & gardens' },
              { name: 'Putney Heath', icon: TreePine, description: 'Leafy plots & conversions' },
              { name: 'East Putney', icon: MapPin, description: 'Transport-linked homes' }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full" variant="accent">
                  <CardContent className="p-8">
                    <area.icon className="w-8 h-8 text-extendia-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.name}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Putney Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-performance extensions, conversions and renovations for Putney properties.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service}</h3>
                <p className="text-gray-600">Professional {service.toLowerCase()} services in Putney</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recent Putney Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selected design & build projects across Putney.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-2">{project.location}</p>
                    <p className="text-sm text-gray-500 mb-2">{project.type}</p>
                    {'year' in project && <p className="text-xs text-gray-400 mb-2">Completed: {project.year}</p>}
                    <p className="text-lg font-semibold text-extendia-primary">{project.value}</p>
                    {'slug' in project && (
                      <Button asChild variant="link" className="mt-2 p-0 h-auto text-extendia-accent">
                        <a href={`/portfolio/${project.slug}`}>View Project →</a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-extendia-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Putney Home?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Begin with a consultation from our Putney-focused team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-extendia-primary hover:bg-gray-100 px-8 py-3 text-lg">
                <a href={companyInfo.phone.href}>Call: {companyInfo.phone.display}</a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg">
                <a href="/contact">Get Quote</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PutneyAreaContent;
