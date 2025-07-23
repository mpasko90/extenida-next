"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    investment: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "020 1234 5678",
      href: "tel:+442012345678"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "info@extendia.co.uk",
      href: "mailto:info@extendia.co.uk"
    },
    {
      icon: MapPin,
      title: "Office",
      detail: "South West London",
      href: "#"
    },
    {
      icon: Clock,
      title: "Hours",
      detail: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      href: "#"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get Your <span className="text-extendia-accent">Quote Today</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Ready to transform your home? Contact our expert team for a consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <info.icon className="w-12 h-12 text-extendia-accent mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                    {info.href.startsWith('#') ? (
                      <p className="text-gray-600">{info.detail}</p>
                    ) : (
                      <a 
                        href={info.href} 
                        className="text-extendia-primary hover:text-extendia-accent transition-colors"
                      >
                        {info.detail}
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Request Your Quote</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-extendia-primary"
                        >
                          <option value="">Select a service</option>
                          <option value="home-extension">Home Extension</option>
                          <option value="loft-conversion">Loft Conversion</option>
                          <option value="kitchen-renovation">Kitchen Renovation</option>
                          <option value="bathroom-renovation">Bathroom Renovation</option>
                          <option value="full-renovation">Full Home Renovation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project..."
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-extendia-primary"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-extendia-accent hover:bg-extendia-accent/90 text-white text-lg py-3"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send My Quote Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Why Choose Extendia?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-extendia-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      No-obligation quotes within 48 hours
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-extendia-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      15+ years experience in South West London
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-extendia-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      10-year warranty on all structural work
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-extendia-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Fully insured with £2M public liability
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
