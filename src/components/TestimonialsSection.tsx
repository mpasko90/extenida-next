import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRef } from "react";

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

  // Tablica refów do kart
  const cardRefs = useRef([]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/90 via-extendia-primary/80 to-extendia-accent/10 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute -z-10 inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-extendia-accent/30 to-extendia-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-br from-extendia-card/20 to-extendia-accent/30 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            What Homeowners in <span className="text-extendia-accent">South West London</span> Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto drop-shadow-md">
            Discover why families in Kingston, Putney, Richmond, Surbiton, Twickenham, and Wimbledon trust Extendia for their house extensions, loft conversions, and renovations.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {testimonials.map((testimonial, idx) => {
            // 3D tilt effect handlers
            const handleMouseMove = (e) => {
              const card = cardRefs.current[idx];
              if (!card) return;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateX = ((y - centerY) / centerY) * 8; // max 8deg
              const rotateY = ((x - centerX) / centerX) * -8;
              card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`;
            };
            const handleMouseLeave = () => {
              const card = cardRefs.current[idx];
              if (!card) return;
              card.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
            };
            return (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="h-full"
              >
                <Card
                  ref={el => { cardRefs.current[idx] = el; }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="h-full bg-white/10 backdrop-blur-lg border border-extendia-accent/30 shadow-xl rounded-2xl flex flex-col justify-between focus-within:ring-2 focus-within:ring-extendia-accent group transition-all duration-300 cursor-pointer"
                  style={{ transition: "transform 0.3s cubic-bezier(.25,.8,.25,1)" }}
                  tabIndex={0}
                  aria-label={`Testimonial from ${testimonial.name}, ${testimonial.location}`}
                >
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <Avatar className="w-12 h-12 mr-4">
                        <AvatarFallback className="bg-extendia-accent/90 text-white text-xl">{testimonial.image}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-white drop-shadow-lg text-lg">{testimonial.name}</h4>
                        <Badge className="bg-extendia-accent/90 text-white text-xs font-semibold shadow mt-1" aria-label={`Project: ${testimonial.project}`}>{testimonial.project}</Badge>
                        <p className="text-xs text-white/80 mt-1">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="text-white text-base flex-1 mb-4 drop-shadow-lg font-medium">“{testimonial.text}”</p>
                    <div className="flex items-center gap-1 mt-auto">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} aria-label="star" className="text-extendia-accent text-lg">★</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
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
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white mb-2 drop-shadow">500+</span>
              <Badge className="bg-extendia-accent/80 text-white text-xs font-semibold shadow mb-1">Happy Clients</Badge>
              <span className="text-white/80">Families in South West London</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white mb-2 drop-shadow">4.9/5</span>
              <Badge className="bg-extendia-accent/80 text-white text-xs font-semibold shadow mb-1">Average Rating</Badge>
              <span className="text-white/80">Based on 150+ Reviews</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white mb-2 drop-shadow">15+</span>
              <Badge className="bg-extendia-accent/80 text-white text-xs font-semibold shadow mb-1">Years Experience</Badge>
              <span className="text-white/80">Award-Winning Team</span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full h-8 bg-gradient-to-b from-transparent to-extendia-primary/30 blur-md opacity-80 pointer-events-none" aria-hidden="true"></div>
    </section>
  );
};

export default TestimonialsSection;
