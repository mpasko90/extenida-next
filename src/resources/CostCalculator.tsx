
import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Home, ArrowUp, ChefHat, Bath } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CostCalculator = () => {
  const [projectType, setProjectType] = useState("");
  const [size, setSize] = useState("");
  const [quality, setQuality] = useState("");
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
        baseCost = 1500;
        break;
      case "bathroom":
        baseCost = 2000;
        break;
      default:
        baseCost = 1500;
    }

    // Quality multiplier
    let qualityMultiplier = 1;
    switch (quality) {
      case "standard":
        qualityMultiplier = 1;
        break;
      case "premium":
        qualityMultiplier = 1.3;
        break;
      case "luxury":
        qualityMultiplier = 1.6;
        break;
    }

    const totalEstimate = baseCost * sizeNum * qualityMultiplier;
    setEstimate(totalEstimate);
  };

  return (
    <PageLayout 
      title="Cost Calculator" 
      description="Get an instant estimate for your home extension, loft conversion, or renovation project."
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
            <Calculator className="w-16 h-16 text-extendia-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cost <span className="text-extendia-accent">Calculator</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Get an instant estimate for your home improvement project. Our calculator provides ballpark figures to help you plan your budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Project Details</CardTitle>
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
                      placeholder="e.g., 25"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="quality">Quality Level</Label>
                    <Select value={quality} onValueChange={setQuality}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select quality level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="luxury">Luxury</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={calculateCost} 
                    className="w-full bg-extendia-accent hover:bg-extendia-accent/90"
                    disabled={!projectType || !size || !quality}
                  >
                    Calculate Cost
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-6 bg-extendia-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Estimated Cost</CardTitle>
                </CardHeader>
                <CardContent>
                  {estimate > 0 ? (
                    <div className="text-center">
                      <div className="text-4xl font-bold text-extendia-accent mb-4">
                        £{estimate.toLocaleString()}
                      </div>
                      <p className="text-gray-600 mb-6">
                        This is an estimated range based on typical projects. Actual costs may vary based on specific requirements, location, and market conditions.
                      </p>
                      <Button className="bg-extendia-primary hover:bg-extendia-primary/90 text-white">
                        Get Accurate Quote
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500">
                      <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Fill in the details above to get your cost estimate</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Cost Breakdown Info */}
              <Card className="mt-6 p-6">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">What's Included?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Materials and labor</li>
                    <li>• Building regulations compliance</li>
                    <li>• Project management</li>
                    <li>• Basic finishes (varies by quality level)</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">
                    *Additional costs may apply for planning permission, structural work, or premium finishes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CostCalculator;
