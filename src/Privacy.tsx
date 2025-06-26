
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const Privacy = () => {
  return (
    <PageLayout title="Privacy Policy" description="Extendia's Privacy Policy - How we collect, use, and protect your personal information.">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: December 2024</p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you request a quote, 
                contact us, or use our services. This may include your name, email address, phone number, 
                address, and project details.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Provide quotes and respond to your inquiries</li>
                <li>Schedule consultations and site visits</li>
                <li>Communicate about your project</li>
                <li>Send newsletters and updates (with your consent)</li>
                <li>Improve our services</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> info@extendia.co.uk<br />
                <strong>Phone:</strong> 020 1234 5678
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Privacy;
