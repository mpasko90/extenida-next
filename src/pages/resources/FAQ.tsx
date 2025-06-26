
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does a typical house extension take?",
      answer: "Most single-storey extensions take 8-12 weeks, while double-storey extensions typically take 12-16 weeks. Timeline depends on size, complexity, and weather conditions."
    },
    {
      question: "Do I need planning permission for my extension?",
      answer: "Many extensions fall under Permitted Development Rights, but this depends on size, location, and existing extensions. We provide free planning assessments to determine requirements."
    },
    {
      question: "What's the cost per square meter for an extension?",
      answer: "Costs typically range from £1,500-£2,500 per square meter depending on specification, location, and complexity. We provide detailed quotes after initial consultation."
    },
    {
      question: "Can I stay in my home during construction?",
      answer: "In most cases, yes. We work to minimize disruption and can often maintain access to essential areas. We'll discuss living arrangements during your consultation."
    },
    {
      question: "What warranties do you provide?",
      answer: "We provide comprehensive warranties: 10 years structural, 2 years on workmanship, and manufacturer warranties on all materials and installations."
    }
  ];

  return (
    <PageLayout 
      title="Frequently Asked Questions" 
      description="Common questions about home extensions, loft conversions, and building projects answered by our experts."
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
            <HelpCircle className="w-16 h-16 text-extendia-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-extendia-accent">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Get answers to common questions about home extensions and renovations
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-extendia-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQ;
