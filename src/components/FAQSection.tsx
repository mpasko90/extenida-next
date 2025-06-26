import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const FAQSection = () => {
  const faqs = [
    {
      id: "cost-extension",
      question: "How much does a house extension cost in South West London?",
      answer: "The cost of a house extension in South West London typically ranges from £1,800 to £3,000 per square metre, depending on the size, specification, and location. Contact us for a free, detailed quote tailored to your project in Kingston, Putney, Richmond, Surbiton, Twickenham, or Wimbledon."
    },
    {
      id: "planning-permission",
      question: "Do I need planning permission for a loft conversion or extension?",
      answer: "Most loft conversions and some extensions fall under permitted development, but it depends on your property and local council. We offer full planning support and can advise you on the best route for your project in South West London."
    },
    {
      id: "guarantee",
      question: "Do you offer a guarantee on your building work?",
      answer: "Yes, all our work comes with a 10 year guarantee for your peace of mind. We are fully insured and Checkatrade verified."
    },
    {
      id: "free-quote",
      question: "How do I get a free quote for my project?",
      answer: "Simply contact us via our online form or call us. We offer free, no-obligation quotes for all building projects in South West London."
    },
    {
      id: "timeline",
      question: "How long does a typical extension or renovation take?",
      answer: "Most house extensions take 10-16 weeks, while loft conversions are usually completed in 6-10 weeks. We provide a detailed timeline and keep you updated throughout the project."
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-extendia-primary/80 via-gray-900/90 to-extendia-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Frequently Asked <span className="text-extendia-accent">Questions</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto drop-shadow-md">
            Everything you need to know about house extensions, loft conversions, and renovations in South West London. If you have more questions, just ask!
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={faq.id} 
                  className="bg-white/5 rounded-lg shadow-sm border border-extendia-accent/30 px-6 hover:shadow-md transition-shadow duration-300 focus-within:ring-2 focus-within:ring-extendia-accent"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-extendia-accent transition-colors duration-300 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-extendia-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/90 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <Link href="/contact" className="inline-block bg-extendia-accent text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-extendia-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white transition-all duration-300" aria-label="Contact Extendia for a free building consultation in South West London">
            Contact Us for a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
