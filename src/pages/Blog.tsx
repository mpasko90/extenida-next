import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const Blog = () => {
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
      slug: "loft-conversion-small-spaces"
    }
  ];

  return (
    <PageLayout 
      title="Blog" 
      description="Expert insights, tips, and guides for home extensions, loft conversions, and renovations in South West London."
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
              Building <span className="text-extendia-accent">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Expert advice, project inspiration, and industry insights to help you with your home improvement journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-extendia-accent/10 text-extendia-accent px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                      <Button variant="ghost" className="text-extendia-accent hover:text-extendia-accent/80 p-0">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest building tips, project inspiration, and industry insights delivered to your inbox.
            </p>
            <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3">
              Subscribe to Newsletter
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
