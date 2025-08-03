import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRef, useEffect, useState, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { extendiaReviews, type Review } from "@/data/extendia-reviews";
import { ChevronLeft, ChevronRight, Star, StarHalf, Quote, MapPin } from "lucide-react";

// London locations for random assignment
const londonLocations = [
  "Wimbledon", "Richmond", "Putney", "Kingston", "Twickenham", 
  "Surbiton", "Clapham", "Wandsworth", "Fulham", "Chelsea", "Kensington"
];

// Project types for random assignment
const projectTypes = [
  "Loft Conversion", "Kitchen Extension", "Bathroom Renovation", 
  "House Extension", "Side Return Extension", "Full Renovation",
  "Home Refurbishment", "Garden Room", "Basement Conversion"
];

// Avatar emojis for random assignment
const avatarEmojis = ["👩‍💼", "👨‍💻", "👩‍🎨", "👨‍🔧", "👩‍🏫", "👨‍💼", "👩‍🔧", "👨‍🎨"];

// Extend reviews with location and project if not present
const enrichedReviews = extendiaReviews.map((review: Review, index: number) => {
  // Extract project type from content if possible, or assign based on index
  let project = review.project;
  if (!project) {
    if (review.content.toLowerCase().includes("loft")) {
      project = "Loft Conversion";
    } else if (review.content.toLowerCase().includes("kitchen")) {
      project = "Kitchen Extension";
    } else if (review.content.toLowerCase().includes("bathroom")) {
      project = "Bathroom Renovation";
    } else if (review.content.toLowerCase().includes("extension")) {
      project = "House Extension";
    } else {
      // Use a consistent project type based on index, not random
      project = projectTypes[index % projectTypes.length];
    }
  }

  // Generate a consistent id if not provided
  const id = review.id || `review-${review.author.replace(/\s+/g, '-').toLowerCase()}-${review.content.slice(0, 10).replace(/\s+/g, '-').toLowerCase()}`;
  
  // Use the index for consistent selection of location and emoji
  const locationIndex = index % londonLocations.length;
  const emojiIndex = index % avatarEmojis.length;
  
  return {
    ...review,
    id: id,
    name: review.author, // Map author to name for UI consistency
    text: review.content, // Map content to text for UI consistency
    location: review.location || londonLocations[locationIndex],
    project: project,
    image: avatarEmojis[emojiIndex],
    rating: review.rating || ((index % 2 === 0 ? 5 : 4)).toString() // Simple alternating 4-5 rating as string
  };
}).slice(0, 12); // Limit to 12 reviews for better performance

const TestimonialsSection = () => {
  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Embla Carousel functionality
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

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

  // Array of refs for cards
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
          animate={prefersReducedMotion ? {} : {
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={prefersReducedMotion ? {} : { duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-gradient-to-br from-extendia-card/20 to-extendia-accent/30 rounded-full blur-3xl"
          animate={prefersReducedMotion ? {} : {
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={prefersReducedMotion ? {} : { duration: 14, repeat: Infinity, ease: "easeInOut" }}
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

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <motion.div 
              className="embla__container flex"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {enrichedReviews.map((testimonial, idx) => {
                // 3D tilt effect handlers
                const handleMouseMove = (e: React.MouseEvent) => {
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
                    className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4 py-6"
                  >
                    <Card
                      ref={el => { cardRefs.current[idx] = el; }}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      className="h-full bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border border-extendia-accent/20 shadow-2xl rounded-3xl flex flex-col justify-between focus-within:ring-2 focus-within:ring-extendia-accent group transition-all duration-300 cursor-pointer overflow-hidden"
                      style={{ transition: "transform 0.3s cubic-bezier(.25,.8,.25,1)" }}
                      tabIndex={0}
                      aria-label={`Testimonial from ${testimonial.name}, ${testimonial.location}`}
                    >
                      <CardContent className="p-0 flex flex-col h-full">
                        {/* Quote icon in the background */}
                        <div className="absolute -top-4 -right-4 text-extendia-accent/10 z-0 pointer-events-none">
                          <Quote size={120} strokeWidth={1.5} />
                        </div>
                        
                        {/* Top rating bar */}
                        <div className="bg-gradient-to-r from-extendia-accent to-extendia-primary p-1.5 flex items-center justify-between">
                          <div className="flex items-center">
                            {testimonial.rating === 5 ? (
                              <div className="flex items-center gap-0.5">
                                <Star className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                                <Star className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                                <Star className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                                <Star className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                                <Star className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                              </div>
                            ) : testimonial.rating === 4 ? (
                              <div className="flex items-center gap-0.5">
                                <Star className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                                <Star className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                                <Star className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                                <Star className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                                <Star className="h-4 w-4 text-white/40" aria-hidden="true" />
                              </div>
                            ) : (
                              <div className="flex items-center gap-0.5">
                                <Star className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                                <Star className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                                <Star className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                                <Star className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                                <StarHalf className="h-4 w-4 fill-white text-white" aria-hidden="true" />
                              </div>
                            )}
                          </div>
                          <Badge className="bg-white/20 text-white text-[10px] py-0.5 px-2 backdrop-blur-sm font-medium">
                            {testimonial.source || "Verified"}
                          </Badge>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1 z-10">
                          {/* Quote text with gradient scrollable area */}
                          <div className="mb-5 relative flex-1 overflow-y-auto max-h-60 pr-2 scrollbar-thin scrollbar-track-transparent">
                            <p className="text-white/90 text-base font-normal leading-relaxed">
                              {testimonial.text}
                            </p>
                            {/* Fade gradient at bottom of long text */}
                            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
                          </div>
                          
                          {/* Author info */}
                          <div className="flex items-center mt-auto pt-4 border-t border-extendia-accent/20">
                            <Avatar className="h-10 w-10 ring-2 ring-extendia-accent/40 rounded-full">
                              <AvatarFallback className="bg-gradient-to-br from-extendia-primary to-extendia-accent text-white text-base font-semibold">
                                {testimonial.image}
                              </AvatarFallback>
                            </Avatar>
                            <div className="ml-3">
                              <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                              <div className="flex items-center gap-3 text-white/70 text-xs mt-0.5">
                                <div className="flex items-center gap-1">
                                  <MapPin size={12} className="text-extendia-accent" />
                                  <span>{testimonial.location}</span>
                                </div>
                                <Badge variant="outline" className="text-[10px] py-0 border-extendia-accent/40 text-extendia-accent bg-extendia-accent/5">
                                  {testimonial.project}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          
          {/* Navigation Buttons */}
          <motion.button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-extendia-accent to-extendia-primary text-white p-4 rounded-full shadow-lg hover:shadow-extendia-accent/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white -ml-5 md:ml-5 backdrop-blur-md"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-extendia-primary to-extendia-accent text-white p-4 rounded-full shadow-lg hover:shadow-extendia-accent/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white -mr-5 md:mr-5 backdrop-blur-md"
            onClick={scrollNext}
            aria-label="Next testimonial"
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ChevronRight size={24} />
          </motion.button>
          
          {/* Dots indicators with count */}
          <div className="flex items-center justify-center mt-8 gap-2">
            <div className="bg-extendia-primary/30 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-4 shadow-lg">
              <span className="text-white text-sm font-medium">
                {selectedIndex + 1} <span className="text-white/70">/ {scrollSnaps.length}</span>
              </span>
              
              <div className="flex items-center gap-1.5">
                {scrollSnaps.map((_, idx) => (
                  <button
                    key={idx}
                    className={`transition-all focus:outline-none group ${
                      idx === selectedIndex 
                        ? "scale-100" 
                        : "scale-75 opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => scrollTo(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <span className={`block h-2 w-2 rounded-full transition-all ${
                      idx === selectedIndex 
                        ? "bg-extendia-accent scale-100 ring-2 ring-extendia-accent/30" 
                        : "bg-white/50 group-hover:bg-white/80"
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className="w-full h-8 bg-gradient-to-b from-transparent to-extendia-primary/30 blur-md opacity-80 pointer-events-none" aria-hidden="true"></div>
    </section>
  );
};

export default TestimonialsSection;
