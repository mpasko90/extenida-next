'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Landmark, Star, MapPin, TreePine } from 'lucide-react';
import { PageLayout } from '@/components/layout';
import { companyInfo } from '@/lib/companyInfo';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SurreyAreaContent = () => {
  const services = ['Home Extensions','Loft Conversions','Kitchen Renovations','Bathroom Renovations'];
  const projects = [
    { title: 'Family Rear Extension', location: 'Weybridge', type: 'Kitchen/dining extension', value: '£85,000' },
    { title: 'Dormer Loft', location: 'Esher', type: 'Dormer conversion', value: '£48,000' },
    { title: 'Whole-House Refurbishment', location: 'Epsom', type: 'Interior renovation', value: '£110,000' }
  ];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-extendia-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="text-center max-w-4xl mx-auto">
            <Landmark className="w-16 h-16 text-extendia-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Building in <span className="text-extendia-accent">Surrey</span></h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">High-quality extensions and refurbishments across Surrey towns and villages.</p>
            <Button asChild className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3"><a href="/contact">Get Consultation</a></Button>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} transition={{duration:0.8}} viewport={{once:true}}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why build in Surrey?</h2>
              <p className="text-lg text-gray-600 mb-6">Generous plots, greenbelt considerations and family-centric layouts—Surrey projects benefit from thoughtful design and planning expertise.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Greenbelt experience','Family-first design','High-spec finishes','Planning & building control'].map((f,i)=> (
                  <div key={i} className="flex items-center"><Star className="w-5 h-5 text-extendia-accent mr-2" /><span className="text-gray-700">{f}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} transition={{duration:0.8}} viewport={{once:true}} className="relative">
              <Image src="/api/placeholder/600/400" alt="Surrey home" width={600} height={400} className="rounded-lg shadow-xl h-auto w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Representative Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas We Serve in Surrey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Weybridge, Esher, Epsom, Cobham and surrounding towns.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Weybridge', icon: MapPin, description: 'Rear extensions & kitchens' },
              { name: 'Esher', icon: TreePine, description: 'Lofts and whole-house refurbishments' },
              { name: 'Epsom', icon: MapPin, description: 'Side returns and dormers' }
            ].map((area,i)=> (
              <Card key={i} className="text-center h-full" variant="accent">
                <CardContent className="p-8">
                  <area.icon className="w-8 h-8 text-extendia-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.name}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Surrey Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Extensions, conversions and high-spec refurbishments.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s,i)=> (
              <div key={i} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s}</h3>
                <p className="text-gray-600">Professional {s.toLowerCase()} across Surrey</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Surrey Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Selected design & build work across the county.</p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((p,i)=> (
              <Card key={i}><CardContent className="p-6"><h3 className="text-xl font-semibold text-gray-900 mb-2">{p.title}</h3><p className="text-gray-600 mb-2">{p.location}</p><p className="text-sm text-gray-500 mb-4">{p.type}</p><p className="text-lg font-semibold text-extendia-primary">{p.value}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-extendia-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}} className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Surrey Project?</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">Book a consultation—planning, design and build under one roof.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-extendia-primary hover:bg-gray-100 px-8 py-3 text-lg"><a href={companyInfo.phone.href}>Call: {companyInfo.phone.display}</a></Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg"><a href="/contact">Get Quote</a></Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SurreyAreaContent;
