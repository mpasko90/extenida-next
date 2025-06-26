
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const TermsOfService = () => {
  return (
    <PageLayout 
      title="Terms of Service" 
      description="Terms of service for Extendia - the terms and conditions for using our services."
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
            <FileText className="w-16 h-16 text-extendia-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms of <span className="text-extendia-accent">Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              The terms and conditions governing our professional building services.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p>By engaging our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Provided</h2>
                <p>Extendia provides professional building services including home extensions, loft conversions, kitchen and bathroom renovations, and related construction services.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Agreements</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All projects are subject to separate written agreements</li>
                  <li>Quotations are valid for 30 days unless otherwise specified</li>
                  <li>Changes to project scope may affect pricing and timelines</li>
                  <li>Payment terms will be specified in individual project agreements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranties and Guarantees</h2>
                <p>We provide comprehensive warranties on our workmanship and materials as specified in individual project agreements. Details of warranty terms will be provided upon project commencement.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p>Our liability is limited as set forth in individual project agreements. We maintain appropriate insurance coverage for all our construction activities.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p>For questions about these Terms of Service, please contact us at info@extendia.com or call us at 020 1234 5678.</p>
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

export default TermsOfService;
