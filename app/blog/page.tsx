"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "2024 Home Extension Trends in South West London",
      excerpt: "Discover the latest trends in home extensions, from bi-fold doors to smart home integration.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Extensions",
      slug: "2024-extension-trends"
    },
    {
      title: "Planning Permission: What You Need to Know",
      excerpt: "A comprehensive guide to understanding planning permission requirements for your home project.",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Planning",
      slug: "planning-permission-guide"
    },
    {
      title: "Loft Conversion Ideas for Small Spaces",
      excerpt: "Maximize your loft space with these creative conversion ideas and space-saving solutions.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Loft Conversions",
      slug: "loft-conversion-ideas"
    },
    {
      title: "Kitchen Extension Cost Guide 2024",
      excerpt: "Everything you need to know about kitchen extension costs and budgeting for your project.",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Kitchen Extensions",
      slug: "kitchen-extension-costs"
    },
    {
      title: "Sustainable Building Materials for Home Extensions",
      excerpt: "Explore eco-friendly building materials that are perfect for modern home extensions.",
      date: "2023-12-20",
      readTime: "4 min read",
      category: "Sustainability",
      slug: "sustainable-materials"
    },
    {
      title: "Before and After: Victorian House Extension",
      excerpt: "See how we transformed a Victorian terrace with a stunning rear extension.",
      date: "2023-12-15",
      readTime: "3 min read",
      category: "Case Studies",
      slug: "victorian-extension"
    }
  ];

  return (
    <PageLayout title="Blog" description="Latest insights and tips for home extensions and renovations">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-extendia-primary to-extendia-secondary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Blog & <span className="text-extendia-accent">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Expert advice, latest trends, and real project stories from London's home extension specialists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span className="bg-extenida-accent text-white px-2 py-1 rounded text-xs">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl hover:text-extendia-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                      <Button variant="ghost" size="sm" className="group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Get the latest home extension tips, trends, and project insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-extendia-primary"
              />
              <Button className="bg-extendia-primary hover:bg-extendia-secondary">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
