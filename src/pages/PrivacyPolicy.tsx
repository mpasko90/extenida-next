
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const PrivacyPolicy = () => {
  return (
    <PageLayout 
      title="Privacy Policy" 
      description="Privacy policy for Extendia - how we collect, use, and protect your personal information."
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
            <Shield className="w-16 h-16 text-extendia-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy <span className="text-extendia-accent">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              We are committed to protecting your privacy and personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8 text-gray-600">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p>We collect information you provide directly to us, such as when you contact us for a quote, subscribe to our newsletter, or use our services.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and maintain our services</li>
                  <li>To communicate with you about your projects</li>
                  <li>To send you updates and marketing communications (with your consent)</li>
                  <li>To improve our website and services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at privacy@extendia.com or call us at 020 1234 5678.</p>
              </div>

              <div className="text-sm text-gray-500">
                <p>Last updated: January 2024</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
