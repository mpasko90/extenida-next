'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Landmark, TreePine, Star } from 'lucide-react';
import { PageLayout } from '@/components/layout';
import { companyInfo } from '@/lib/companyInfo';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const KingstonAreaContent = () => {
  const services = [
    'Home Extensions',
    'Loft Conversions',
    'Kitchen Renovations',
    'Bathroom Renovations',
    'Planning Permission',
    'Building Regulations'
  ];

  const projects = [
    { title: 'Riverside Extension', location: 'Kingston Riverside', type: 'Single storey extension', value: '£68,000' },
    { title: 'Roof Dormer Conversion', location: 'North Kingston', type: 'Dormer loft conversion', value: '£42,000' },
    { title: 'Heritage Kitchen Upgrade', location: 'Kingston Town Centre', type: 'Kitchen renovation', value: '£30,000' }
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
              Building in <span className="text-extendia-accent">Kingston</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Characterful riverside transformations and extensions across Kingston upon Thames
            </p>
            <Button asChild className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3">
              <a href="/contact">Get Consultation</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Kingston */}
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
                Why Invest in a Kingston Property Extension?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Kingston blends historic market town charm with strong transport links and excellent schools—ideal for long-term family living and value growth.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Riverside lifestyle',
                  'Outstanding schools',
                  'Historic architecture',
                  'Strong rental demand'
                ].map((feature, index) => (
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
                src="/api/placeholder/600/400"
                alt="Kingston home extension"
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
              Areas We Serve in Kingston
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From riverside villas to North Kingston family homes—expert design and build across the borough.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Kingston Riverside', icon: MapPin, description: 'Prime riverside properties' },
              { name: 'North Kingston', icon: TreePine, description: 'Period family houses' },
              { name: 'Canbury', icon: MapPin, description: 'Victorian and Edwardian stock' }
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
              Our Kingston Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-service extensions, conversions and refurbishments for Kingston homes.
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
                <p className="text-gray-600">Professional {service.toLowerCase()} services in Kingston</p>
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
              Recent Kingston Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Selected design & build work across Kingston.
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
                    <p className="text-sm text-gray-500 mb-4">{project.type}</p>
                    <p className="text-lg font-semibold text-extendia-primary">{project.value}</p>
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
              Ready to Transform Your Kingston Home?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Start your extension or renovation project with a tailored consultation.
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

export default KingstonAreaContent;
