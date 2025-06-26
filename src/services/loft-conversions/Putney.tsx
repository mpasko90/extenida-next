import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

const LoftConversionsPutney = () => {
  return (
    <PageLayout 
      title="Loft Conversions in Putney" 
      description="Professional loft conversion services in Putney - riverside property loft specialists."
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
            <ArrowUp className="w-16 h-16 text-extendia-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Loft Conversions in <span className="text-extendia-accent">Putney</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Riverside loft conversions with Thames views in Putney&apos;s
            </p>
            <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3">
              Get Free Quote
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Putney Loft Conversions</h2>
              <p className="text-lg text-gray-600 mb-8">
                Putney&apos;s riverside location offers unique opportunities for loft conversions with stunning Thames views. Our expertise in local building regulations and flood considerations ensures your conversion meets all requirements while maximizing river vistas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LoftConversionsPutney;
