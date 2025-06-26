
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Wrench, Sparkles } from 'lucide-react';

const ProcessTimeline = () => {
  const steps = [
    {
      icon: Users,
      title: "Free Consultation",
      description: "Initial meeting to discuss your vision, requirements, and budget",
      duration: "1-2 hours",
      details: [
        "Site survey and measurements",
        "Design discussion and ideas",
        "Budget planning and options",
        "Timeline overview"
      ]
    },
    {
      icon: CheckCircle,
      title: "Design & Planning",
      description: "Detailed design plans and planning permission if required",
      duration: "1-2 weeks",
      details: [
        "3D design renderings",
        "Material selection",
        "Planning applications",
        "Building regulations approval"
      ]
    },
    {
      icon: Wrench,
      title: "Preparation & Demolition",
      description: "Site preparation and removal of existing bathroom",
      duration: "1-2 days",
      details: [
        "Protective coverings",
        "Careful demolition",
        "Plumbing preparation",
        "Electrical rough-in"
      ]
    },
    {
      icon: Clock,
      title: "Installation",
      description: "Professional installation of your new bathroom",
      duration: "1-4 weeks",
      details: [
        "Plumbing and electrical work",
        "Tiling and waterproofing",
        "Fixture installation",
        "Finishing touches"
      ]
    },
    {
      icon: Sparkles,
      title: "Final Inspection",
      description: "Quality check and handover of your new bathroom",
      duration: "1 day",
      details: [
        "Quality assurance check",
        "Final cleanup",
        "Demonstration of features",
        "Warranty documentation"
      ]
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Bathroom Renovation <span className="text-extendia-accent">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final handover, we ensure a smooth and stress-free bathroom renovation experience.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-32 bg-gray-200 hidden md:block" />
              )}
              
              <div className={`flex items-start gap-6 mb-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-extendia-accent text-white rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>
                
                <div className="flex-1 bg-white rounded-lg shadow-lg p-6 border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <span className="text-sm text-extendia-accent font-medium bg-extendia-accent/10 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
