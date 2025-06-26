
import { motion } from "framer-motion";
import { MapPin, Trophy, TreePine } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Wimbledon = () => {
  return (
    <PageLayout 
      title="Home Extensions in Wimbledon" 
      description="Professional home extension and renovation services in Wimbledon, South West London."
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
            <Trophy className="w-16 h-16 text-extendia-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building in <span className="text-extendia-accent">Wimbledon</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Championship-quality home extensions in prestigious Wimbledon
            </p>
            <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3">
              Get Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Trophy className="w-8 h-8 text-extendia-accent mb-4" />
                <CardTitle>Prestigious Area</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">High-end extensions befitting Wimbledon's prestigious reputation</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TreePine className="w-8 h-8 text-extendia-accent mb-4" />
                <CardTitle>Village Character</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Preserving the unique village atmosphere of Wimbledon</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MapPin className="w-8 h-8 text-extendia-accent mb-4" />
                <CardTitle>Common Views</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-606">Making the most of views across Wimbledon Common</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Wimbledon;
