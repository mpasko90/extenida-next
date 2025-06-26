"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Award, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Strona "O nas" (Next.js App Router)
 * Zachowuje dotychczasowy wygląd i strukturę.
 */
export default function AboutPage() {
  const teamMembers = [
    {
      name: "James Richardson",
      role: "Founder & Managing Director",
      experience: "20+ years",
      image: "/placeholder.svg",
      description: "Expert in home extensions and project management with certified qualifications in construction."
    },
    {
      name: "Sarah Thompson",
      role: "Lead Architect",
      experience: "15+ years",
      image: "/placeholder.svg",
      description: "Specializes in space optimization and planning permission applications for South West London."
    },
    {
      name: "Michael Davies",
      role: "Construction Manager",
      experience: "18+ years",
      image: "/placeholder.svg",
      description: "Oversees all building work ensuring quality standards and timely project completion."
    }
  ];

  const certifications = [
    "Registered with Local Authority Building Control",
    "Federation of Master Builders Member",
    "Construction Skills Certification Scheme",
    "£2M Public Liability Insurance",
    "Health & Safety Executive Certified"
  ];

  const serviceAreas = [
    "Wimbledon", "Richmond", "Putney", "Clapham", "Wandsworth", 
    "Fulham", "Chelsea", "Battersea", "Barnes", "Raynes Park",
    "New Malden", "Kingston", "Surbiton", "Twickenham"
  ];

  return (
    <PageLayout 
      title="About Us" 
      description="Learn about Extendia's 15+ years of experience in South West London home extensions, loft conversions, and renovations."
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
              About Extendia
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              Trusted experts in home extensions, loft conversions, and renovations across South West London for over 15 years.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ...pozostała zawartość About... */}
    </PageLayout>
  );
}
