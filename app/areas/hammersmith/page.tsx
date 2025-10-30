'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Landmark, Star, MapPin } from 'lucide-react';
import { PageLayout } from '@/components/layout';
import { companyInfo } from '@/lib/companyInfo';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function HammersmithPage() {
  const services = ['Home Extensions','Loft Conversions','Kitchen Renovations','Bathroom Renovations'];
  const projects = [
    { title: 'Riverside Rear Extension', location: 'Hammersmith Riverside', type: 'Rear + reconfiguration', value: '£95,000' },
    { title: 'Mansard Loft', location: 'Brook Green', type: 'Mansard conversion', value: '£55,000' },
    { title: 'Apartment Remodel', location: 'Hammersmith Broadway', type: 'Interior re-fit', value: '£28,000' }
  ];

  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-br from-extendia-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="text-center max-w-4xl mx-auto">
            <Landmark className="w-16 h-16 text-extendia-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Building in <span className="text-extendia-accent">Hammersmith</span></h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">Expert work across riverside streets, Brook Green and town centre.</p>
            <Button asChild className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3"><a href="/contact">Get Consultation</a></Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} transition={{duration:0.8}} viewport={{once:true}}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why build in Hammersmith?</h2>
              <p className="text-lg text-gray-600 mb-6">Riverside conservation areas, mansion blocks and terraced streets require sensitive, compliant design.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Conservation knowledge','Mansion block experience','Efficient layouts','Planning support'].map((f,i)=> (
                  <div key={i} className="flex items-center"><Star className="w-5 h-5 text-extendia-accent mr-2" /><span className="text-gray-700">{f}</span></div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} transition={{duration:0.8}} viewport={{once:true}} className="relative">
              <Image src="/api/placeholder/600/400" alt="Hammersmith home" width={600} height={400} className="rounded-lg shadow-xl h-auto w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas We Serve in Hammersmith</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Riverside, Brook Green, Brackenbury Village and more.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Brook Green', icon: MapPin, description: 'Mansards and flat remodelling' },
              { name: 'Brackenbury Village', icon: MapPin, description: 'Rear extensions' },
              { name: 'Riverside', icon: MapPin, description: 'High-spec refurbishments' }
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Hammersmith Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Extensions, conversions and refurbishments.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s,i)=> (
              <div key={i} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{s}</h3>
                <p className="text-gray-600">Professional {s.toLowerCase()} in Hammersmith</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Hammersmith Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Selected work across W6.</p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((p,i)=> (
              <Card key={i}><CardContent className="p-6"><h3 className="text-xl font-semibold text-gray-900 mb-2">{p.title}</h3><p className="text-gray-600 mb-2">{p.location}</p><p className="text-sm text-gray-500 mb-4">{p.type}</p><p className="text-lg font-semibold text-extendia-primary">{p.value}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-extendia-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}} className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Hammersmith Home?</h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">Book a no‑pressure consultation to explore your options.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-extendia-primary hover:bg-gray-100 px-8 py-3 text-lg"><a href={companyInfo.phone.href}>Call: {companyInfo.phone.display}</a></Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg"><a href="/contact">Get Quote</a></Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
