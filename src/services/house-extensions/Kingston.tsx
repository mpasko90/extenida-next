import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";

const HouseExtensionsKingston = () => {
  return (
    <PageLayout 
      title="House Extensions in Kingston" 
      description="Professional house extension services in Kingston Upon Thames - expert builders with local knowledge."
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
              House Extensions in <span className="text-extendia-accent">Kingston</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Expert house extensions in Kingston Upon Thames with local planning knowledge
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kingston House Extensions</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team specializes in house extensions throughout Kingston Upon Thames, understanding the unique character of Victorian and Edwardian properties in the area. We navigate local planning requirements and conservation area considerations with expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HouseExtensionsKingston;
