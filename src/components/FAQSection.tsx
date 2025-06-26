
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      id: "faq-1",
      question: "How long does a typical home extension take?",
      answer: "The timeline varies depending on the project scope. A single-storey extension typically takes 8-12 weeks, while a double-storey extension can take 12-16 weeks. Loft conversions usually take 4-6 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      id: "faq-2",
      question: "Do you handle planning permission applications?",
      answer: "Yes, we handle all aspects of planning permission and building regulations. Our team includes qualified architects and planning consultants who will manage the entire application process, keeping you informed at every stage."
    },
    {
      id: "faq-3",
      question: "What areas do you cover in South West London?",
      answer: "We cover all areas of South West London including Wimbledon, Richmond, Putney, Clapham, Wandsworth, Fulham, Chelsea, Battersea, and surrounding areas. Contact us to confirm if we cover your specific location."
    },
    {
      id: "faq-4",
      question: "How much does a home extension cost?",
      answer: "Costs vary significantly based on size, materials, and complexity. Single-storey extensions typically start from £15,000-£25,000, while double-storey extensions range from £30,000-£60,000. We provide detailed, transparent quotes with no hidden costs."
    },
    {
      id: "faq-5",
      question: "Are you fully insured and certified?",
      answer: "Yes, we are fully insured with £2M public liability insurance and £1M employer's liability insurance. All our tradespeople are qualified and certified, and we're members of relevant trade associations."
    },
    {
      id: "faq-6",
      question: "Can I live in my home during the renovation?",
      answer: "In most cases, yes. We work with you to minimize disruption and can often phase the work to allow you to remain in your home. For major renovations, we'll discuss temporary accommodation options if needed."
    },
    {
      id: "faq-7",
      question: "What warranty do you provide?",
      answer: "We provide a comprehensive 10-year warranty on structural work and a 2-year warranty on all other work. We also offer ongoing maintenance services to keep your extension in perfect condition."
    },
    {
      id: "faq-8",
      question: "Do you provide free quotes?",
      answer: "Yes, we provide free, no-obligation quotes for all projects. Our initial consultation includes a site visit, discussion of your requirements, and a detailed written quote within 48 hours."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-extendia-accent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions about your home extension or renovation project? 
            Here are answers to the most common questions we receive.
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
                  className="bg-white rounded-lg shadow-sm border border-gray-200 px-6 hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-extendia-primary transition-colors duration-300 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+442012345678" 
              className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 focus:ring-2 focus:ring-extendia-accent focus:ring-offset-2"
            >
              Call Us: 020 1234 5678
            </a>
            <a 
              href="mailto:info@extendia.co.uk" 
              className="border-2 border-extendia-primary bg-white text-gray-900 hover:bg-extendia-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 focus:ring-2 focus:ring-extendia-primary focus:ring-offset-2"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
