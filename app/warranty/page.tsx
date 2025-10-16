"use client";

import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout";

const WarrantyPage = () => {
  return (
    <PageLayout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Warranty</h1>
            <p className="text-white/80 mb-10">Last updated: October 2025</p>

            <div
              className="prose prose-lg max-w-none prose-invert text-white/90 leading-relaxed
                         prose-headings:text-white prose-headings:tracking-tight
                         prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-12 md:prose-h3:mt-14 prose-h3:mb-5 prose-h3:pt-1
                         prose-p:my-6 md:prose-p:my-7 prose-p:text-white/90
                         prose-ul:list-disc prose-ul:pl-6 prose-ul:my-6 md:prose-ul:my-7
                         prose-ol:my-6 md:prose-ol:my-7
                         prose-li:my-2 prose-li:leading-relaxed prose-li:marker:text-white/60 prose-li:text-white/90
                         prose-strong:text-white prose-a:text-white prose-a:underline prose-a:decoration-white/40 hover:prose-a:decoration-white"
            >
        <p>This guarantee is issued by Buildclock Limted t/a EXTENDIA hereinafter referred to as “the Installer,” in relation to the supply and installation of kitchen components and associated works.</p>
        <br />
        
        <h3>1. Workmanship Guarantee</h3><br />
        <p>The Installer guarantees that all installation work undertaken is free from defects in workmanship for a period of 3 years from the date of completion.</p>
        <br />
        
        <h3>2. Product Guarantee</h3><br />
        <p>The Installer guarantees that all products supplied as part of the installation are covered by the manufacturer’s warranty for a period of up to 10 years, subject to the specific terms provided by the manufacturer.</p>
        <br />
        
        <h3>3. Exclusions</h3><br />
        <p>This guarantee does not cover:</p>
        <br />
        <ul className="space-y-3 md:space-y-4">
          <li>General wear and tear, cosmetic damage, or changes in appearance due to natural aging.</li>
          <li>Damage caused by improper use, neglect, accidents, or misuse (e.g., excessive heat, water damage, or improper cleaning products).</li>
          <li>Any modifications or repairs carried out by third parties after installation.</li>
          <li>Issues arising from subsidence, structural movement, or changes in the building fabric.</li>
          <li>Appliance faults outside of the manufacturer’s warranty.</li>
          <li>Damage caused by moisture or water ingress due to lack of maintenance (e.g., failure to reseal worktops or maintain silicone seals).</li>
          <li>Any electrical, gas, or plumbing work carried out by a third party that affects the installation.</li>
        </ul>
        <br />
        
        <h3>4. Making a Claim</h3><br />
        <p>To make a claim under this guarantee, the customer must:</p>
    <br />
    <ul className="space-y-3 md:space-y-4">
      <li>Notify the Installer in writing within 14 days of discovering the defect.</li>
      <li>Provide proof of purchase and installation completion date.</li>
      <li>Allow the Installer reasonable access to inspect and assess the reported issue.</li>
    </ul>
        <br />
        <p>If a valid claim is made within the guarantee period, the Installer will take appropriate action to rectify the issue within a reasonable timeframe. If the defect is due to a product failure covered under a manufacturer’s warranty, the Installer will assist in facilitating the claim where possible.</p>

        <br />
        <h3>5. Limitations of Liability</h3><br />
        <p>The Installer’s liability under this guarantee is strictly limited to the repair or replacement of defective workmanship or products. Under no circumstances shall the Installer be liable for any indirect, incidental, or consequential damages, including but not limited to loss of use, inconvenience, or costs incurred by the customer for alternative arrangements.</p>
        <p>This guarantee is in addition to the customer’s statutory rights and does not affect any rights granted by consumer protection laws.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WarrantyPage;
