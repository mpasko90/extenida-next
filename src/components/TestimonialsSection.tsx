
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      location: "Wimbledon",
      rating: 5,
      text: "Exceptional work on our loft conversion. The team was professional, clean, and delivered exactly what they promised. Our new bedroom is absolutely stunning!",
      project: "Loft Conversion",
      image: "👩‍💼"
    },
    {
      id: 2,
      name: "James Thompson",
      location: "Richmond",
      rating: 5,
      text: "The kitchen extension transformed our home completely. From planning to completion, the communication was excellent and the quality is outstanding.",
      project: "Kitchen Extension",
      image: "👨‍💻"
    },
    {
      id: 3,
      name: "Emily Chen",
      location: "Putney",
      rating: 5,
      text: "Professional service from start to finish. They handled all the planning permissions and the double-storey extension was completed on time and within budget.",
      project: "Home Extension",
      image: "👩‍🎨"
    },
    {
      id: 4,
      name: "Michael Brown",
      location: "Clapham",
      rating: 5,
      text: "Fantastic bathroom renovation! The attention to detail is incredible and they managed to work around our busy family schedule perfectly.",
      project: "Bathroom Renovation",
      image: "👨‍🔧"
    },
    {
      id: 5,
      name: "Rachel Davies",
      location: "Wandsworth",
      rating: 5,
      text: "Couldn't be happier with our side return extension. The space feels twice as big and the quality of workmanship is exceptional.",
      project: "Side Return Extension",
      image: "👩‍🏫"
    },
    {
      id: 6,
      name: "David Wilson",
      location: "Fulham",
      rating: 5,
      text: "From the first consultation to the final cleanup, everything was handled professionally. The project manager kept us informed every step of the way.",
      project: "Full Renovation",
      image: "👨‍💼"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-extendia-accent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what homeowners across South West London 
            have to say about their experience with Extendia.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-extendia-accent/60" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-extendia-accent text-extendia-accent" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-extendia-card/30 rounded-full flex items-center justify-center text-2xl mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                      <p className="text-xs text-extendia-accent font-medium mt-1">
                        {testimonial.project}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-extendia-primary mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-extendia-primary mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-extendia-primary mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
