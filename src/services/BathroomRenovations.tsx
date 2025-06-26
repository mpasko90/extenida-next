
import { motion } from "framer-motion";
import { CheckCircle, Droplets, Clock, DollarSign, Thermometer, Shield, Award, Star, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import ProcessTimeline from "@/components/ProcessTimeline";
import BathroomGallery from "@/components/BathroomGallery";

const BathroomRenovations = () => {
  const renovationTypes = [
    {
      title: "Bathroom Refresh",
      description: "Update your bathroom with new fixtures and modern styling",
      price: "From £5,000",
      duration: "1-2 weeks",
      features: ["New bathroom suite", "Modern tiling", "LED lighting", "Basic plumbing updates"],
      popular: false
    },
    {
      title: "Complete Bathroom Renovation",
      description: "Full bathroom redesign with layout changes and premium finishes",
      price: "From £12,000",
      duration: "3-4 weeks",
      features: ["Complete redesign", "Layout optimization", "Premium fixtures", "Underfloor heating"],
      popular: true
    },
    {
      title: "Luxury Bathroom Suite",
      description: "High-end bathroom with premium materials and spa-like features",
      price: "From £25,000",
      duration: "4-6 weeks",
      features: ["Luxury fixtures", "Natural stone tiles", "Rainfall shower", "Smart technology"],
      popular: false
    }
  ];

  const features = [
    {
      icon: Droplets,
      title: "Professional Waterproofing",
      description: "Advanced waterproofing systems with 25-year guarantees to prevent moisture damage and ensure longevity."
    },
    {
      icon: Thermometer,
      title: "Heating Solutions",
      description: "Energy-efficient underfloor heating, heated towel rails, and smart thermostats for year-round comfort."
    },
    {
      icon: CheckCircle,
      title: "Premium Fixtures",
      description: "Carefully selected fixtures from leading manufacturers like Villeroy & Boch, Grohe, and Hansgrohe."
    },
    {
      icon: Shield,
      title: "10-Year Warranty",
      description: "Comprehensive warranty covering workmanship and materials, with ongoing support and maintenance."
    },
    {
      icon: Award,
      title: "Award-Winning Design",
      description: "Our designs have won multiple industry awards for innovation, functionality, and aesthetic excellence."
    },
    {
      icon: Star,
      title: "5-Star Service",
      description: "Rated 5 stars by over 500 customers across South West London for quality, reliability, and professionalism."
    }
  ];

  const benefits = [
    "Increase your home's value by up to 5% with a quality bathroom renovation",
    "Improve daily comfort and functionality with modern fixtures and layouts",
    "Reduce water bills by up to 30% with efficient fixtures and smart technology",
    "Create a relaxing, spa-like environment for stress relief and wellbeing",
    "Modern safety features including non-slip surfaces and accessibility options",
    "Professional waterproofing and ventilation to prevent mold and moisture issues",
    "Energy-efficient lighting and heating to reduce running costs",
    "Increased storage solutions to reduce clutter and improve organization"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Putney",
      rating: 5,
      text: "Absolutely delighted with our new bathroom! The team was professional, clean, and completed the work on time. The attention to detail is outstanding."
    },
    {
      name: "Mark Thompson", 
      location: "Richmond",
      rating: 5,
      text: "From design to completion, Extendia exceeded our expectations. Our luxury bathroom is now the highlight of our home."
    },
    {
      name: "Emma Wilson",
      location: "Kingston",
      rating: 5,
      text: "The team transformed our small ensuite into a functional and beautiful space. Highly recommended for anyone in South West London."
    }
  ];

  return (
    <PageLayout 
      title="Bathroom Renovations South West London | Extendia" 
      description="Professional bathroom renovations in South West London. From simple refreshes to luxury spa-style bathrooms. Free consultation, 10-year warranty, 5-star service."
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
              Bathroom <span className="text-extendia-accent">Renovations</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transform your bathroom into a luxurious retreat with our award-winning renovation services across South West London. From simple updates to complete luxury redesigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call: 020 1234 5678
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg">
                Free Consultation
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-extendia-accent">500+</div>
                <div className="text-sm">Bathrooms Renovated</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-extendia-accent">10 Year</div>
                <div className="text-sm">Warranty</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-extendia-accent">5 Star</div>
                <div className="text-sm">Customer Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Renovation Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bathroom Renovation <span className="text-extendia-accent">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of bathroom renovation packages, each designed to transform your space within your budget and timeline.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {renovationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className={`h-full hover:shadow-lg transition-shadow duration-300 relative ${type.popular ? 'border-extendia-accent border-2' : ''}`}>
                  {type.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-extendia-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{type.title}</CardTitle>
                    <p className="text-gray-600">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-extendia-accent">
                        <DollarSign className="w-5 h-5 mr-1" />
                        <span className="font-bold text-lg">{type.price}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-5 h-5 mr-1" />
                        <span>{type.duration}</span>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-extendia-accent hover:bg-extendia-accent/90">
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose <span className="text-extendia-accent">Extendia</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Award-winning bathroom specialists with over 10 years of experience transforming homes across South West London.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-extendia-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <BathroomGallery />

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Benefits Section */}
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
                Benefits of <span className="text-extendia-accent">Professional Renovation</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                A professionally renovated bathroom not only transforms your daily routine but also adds significant 
                value to your property while creating a more comfortable, functional, and energy-efficient space.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={benefit} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
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
                alt="Luxury bathroom renovation before and after"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-extendia-accent">£15k</div>
                  <div className="text-sm text-gray-600">Average project value</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our <span className="text-extendia-accent">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real reviews from real customers across South West London.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your <span className="text-extendia-accent">Bathroom?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your free, no-obligation quote today. Our experts will visit your home, discuss your requirements, and provide a detailed proposal.
            </p>
          </motion.div>

          <QuoteRequestForm />
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
              Create Your Dream <span className="text-extendia-accent">Bathroom Today</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join over 500 satisfied customers across South West London. Professional service, exceptional quality, unbeatable warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call: 020 1234 5678
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg">
                Book Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BathroomRenovations;
