'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign } from "lucide-react";
import { PageLayout } from "@/components/layout";
import { companyInfo } from '@/lib/companyInfo';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CostCalculatorPage() {
  const [projectType, setProjectType] = useState("");
  const [size, setSize] = useState("");
  const [standard, setStandard] = useState("");
  const [estimate, setEstimate] = useState(0);

  const calculateCost = () => {
    let baseCost = 0;
    const sizeNum = parseInt(size) || 0;

    // Base costs per project type (per sqm)
    switch (projectType) {
      case "extension":
        baseCost = 1800;
        break;
      case "loft":
        baseCost = 1200;
        break;
      case "kitchen":
        baseCost = 1000;
        break;
      case "bathroom":
        baseCost = 800;
        break;
      default:
        baseCost = 1000;
    }

    // Standard multipliers
    const standardMultiplier = {
      basic: 0.8,
      standard: 1.0,
      premium: 1.3,
      luxury: 1.6
    }[standard] || 1.0;

    const total = baseCost * sizeNum * standardMultiplier;
    setEstimate(Math.round(total));
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-extendia-primary to-extendia-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Calculator className="w-16 h-16 text-extendia-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cost <span className="text-extendia-accent">Calculator</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Get an instant estimate for your home improvement project
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-2 border-extendia-accent/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                    <Calculator className="w-8 h-8 text-extendia-accent" />
                    Project Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="project-type">Project Type</Label>
                    <Select value={projectType} onValueChange={setProjectType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="extension">Home Extension</SelectItem>
                        <SelectItem value="loft">Loft Conversion</SelectItem>
                        <SelectItem value="kitchen">Kitchen Renovation</SelectItem>
                        <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="size">Size (square meters)</Label>
                    <Input
                      id="size"
                      type="number"
                      placeholder="e.g. 25"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="standard">Standard Level</Label>
                    <Select value={standard} onValueChange={setStandard}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select standard level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic</SelectItem>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="luxury">Luxury</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={calculateCost}
                    className="w-full bg-extendia-accent hover:bg-extendia-accent/90"
                    disabled={!projectType || !size || !standard}
                  >
                    Calculate Estimate
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-2 border-gray-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                    <DollarSign className="w-8 h-8 text-extendia-accent" />
                    Your Estimate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {estimate > 0 ? (
                    <div className="text-center">
                      <div className="text-5xl font-bold text-extendia-accent mb-4">
                        £{estimate.toLocaleString()}
                      </div>
                      <p className="text-gray-600 mb-6">
                        This is an approximate estimate based on your selections.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <h4 className="font-bold mb-2">Your Project:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Type: {projectType}</li>
                          <li>Size: {size}m²</li>
                          <li>Standard: {standard}</li>
                        </ul>
                      </div>
                      <Button className="w-full bg-extendia-primary hover:bg-extendia-primary/90">
                        Get Accurate Quote
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">
                        Fill in the calculator to see your estimate
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              <strong>Disclaimer:</strong> This calculator provides rough estimates based on average costs. 
              Actual prices may vary significantly depending on specific requirements, site conditions, 
              local factors, and current market rates. For an accurate quote, please contact us for a consultation.
            </p>
          </motion.div>
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
              Need a <span className="text-extendia-accent">Precise Quote?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us for a detailed, accurate quote tailored to your specific project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 text-lg">
                Call: {companyInfo.phone.display}
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-extendia-primary px-8 py-3 text-lg">
                Book Survey
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
