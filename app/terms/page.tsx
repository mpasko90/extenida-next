'use client';

import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout";
import { companyInfo } from '@/lib/companyInfo';

export default function TermsPage() {
  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: December 2024</p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By using our services or website, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Services</h2>
              <p className="text-gray-600 mb-4">
                Extendia provides building and renovation services including but not limited to home extensions, 
                loft conversions, kitchen renovations, and bathroom renovations in South West London.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quotes and Contracts</h2>
              <p className="text-gray-600 mb-4">
                All quotes are valid for 30 days unless otherwise specified. Work will only commence 
                upon signing of a formal contract and receipt of agreed deposit.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Payment Terms</h2>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Deposit required before work commencement</li>
                <li>Progress payments as agreed in contract</li>
                <li>Final payment due upon completion</li>
                <li>Late payment charges may apply</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Warranties</h2>
              <p className="text-gray-600 mb-4">
                We provide a 5 years warranty on structural work and a 2-year warranty on all other work. 
                Warranties are subject to terms and conditions provided at completion.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Liability</h2>
              <p className="text-gray-600 mb-4">
                Our liability is limited to the value of work performed. We maintain appropriate 
                insurance coverage including public liability and employer&apos;s liability insurance.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cancellation</h2>
              <p className="text-gray-600 mb-4">
                You have the right to cancel within 14 days of signing the contract (cooling-off period). 
                Cancellation terms and any applicable charges will be outlined in your contract.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                <strong>Email:</strong> {companyInfo.email}<br />
                <strong>Phone:</strong> {companyInfo.phone.display}<br />
                <strong>Address:</strong> {companyInfo.registeredOfficeFormatted}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
