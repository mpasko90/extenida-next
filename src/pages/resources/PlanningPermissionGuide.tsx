
import { motion } from "framer-motion";
import { FileText, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PlanningPermissionGuide = () => {
  const permissionTypes = [
    {
      title: "Permitted Development",
      description: "Many extensions can be built under permitted development rights without planning permission",
      icon: CheckCircle,
      color: "text-green-500",
      examples: ["Single-storey rear extensions up to 6m (8m for detached)", "Loft conversions with specific restrictions", "Side return extensions within limits"]
    },
    {
      title: "Planning Permission Required",
      description: "Larger or more complex projects require full planning permission",
      icon: FileText,
      color: "text-blue-500",
      examples: ["Extensions exceeding permitted development limits", "Two-storey extensions in many cases", "Properties in conservation areas"]
    },
    {
      title: "Special Considerations",
      description: "Some properties have additional restrictions",
      icon: AlertTriangle,
      color: "text-amber-500",
      examples: ["Listed buildings", "Conservation areas", "Article 4 directions", "Tree preservation orders"]
    }
  ];

  return (
    <PageLayout 
      title="Planning Permission Guide" 
      description="Complete guide to planning permission for home extensions and loft conversions in South West London."
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
              Planning Permission <span className="text-extendia-accent">Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Everything you need to know about planning permission for your home extension or renovation project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Permission Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Types of <span className="text-extendia-accent">Planning Permission</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the different types of planning requirements will help you plan your project timeline and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {permissionTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <type.icon className={`w-8 h-8 ${type.color}`} />
                      <CardTitle className="text-xl text-gray-900">{type.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {type.examples.map((example) => (
                        <li key={example} className="flex items-start text-gray-600">
                          <div className={`w-2 h-2 rounded-full ${type.color.replace('text-', 'bg-')} mt-2 mr-3 flex-shrink-0`}></div>
                          <span className="text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Clock className="w-12 h-12 text-extendia-accent mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Planning <span className="text-extendia-accent">Timeline</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding typical timeframes helps you plan your project effectively.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { phase: "Pre-application", duration: "1-2 weeks", description: "Initial consultation and feasibility assessment" },
                { phase: "Design & Documentation", duration: "2-4 weeks", description: "Architectural drawings and planning documents" },
                { phase: "Planning Application", duration: "8-12 weeks", description: "Council review and decision process" },
                { phase: "Building Regulations", duration: "2-4 weeks", description: "Technical approval for construction details" }
              ].map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-6"
                >
                  <div className="bg-extendia-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{item.phase}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="bg-extendia-primary/10 text-extendia-primary px-4 py-2 rounded-full font-medium">
                    {item.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-extendia-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Help with <span className="text-extendia-accent">Planning Permission?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our experts handle all planning applications and building regulations, making the process stress-free for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg">
                Free Planning Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg">
                Download Planning Checklist
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PlanningPermissionGuide;
