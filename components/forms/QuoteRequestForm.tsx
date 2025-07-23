import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';

const QuoteRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    projectType: 'bathroom-refresh',
    investment: '',
    timeline: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted",
      description: "We'll contact you within 24 hours to discuss your bathroom renovation project.",
    });
    console.log('Quote request submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-extendia-accent" />
          Get Your Bathroom Quote
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input 
                id="email" 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input 
                id="phone" 
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
            <div>
              <Label htmlFor="postcode">Postcode *</Label>
              <Input 
                id="postcode" 
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                placeholder="SW15 2QN"
                required 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="projectType">Project Type *</Label>
              <select 
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="bathroom-refresh">Bathroom Refresh</option>
                <option value="complete-renovation">Complete Renovation</option>
                <option value="luxury-suite">Luxury Suite</option>
                <option value="ensuite-addition">Ensuite Addition</option>
              </select>
            </div>
            <div>
              <Label htmlFor="investment">Investment Range</Label>
              <select 
                id="investment"
                name="investment"
                value={formData.investment}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select investment range</option>
                <option value="5000-10000">£5,000 - £10,000</option>
                <option value="10000-20000">£10,000 - £20,000</option>
                <option value="20000-35000">£20,000 - £35,000</option>
                <option value="35000+">£35,000+</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="timeline">Preferred Timeline</Label>
            <select 
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select timeline</option>
              <option value="asap">As soon as possible</option>
              <option value="1-3months">1-3 months</option>
              <option value="3-6months">3-6 months</option>
              <option value="6months+">6+ months</option>
            </select>
          </div>

          <div>
            <Label htmlFor="message">Project Details</Label>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your bathroom renovation ideas, specific requirements, or any questions you have..."
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full bg-extendia-accent hover:bg-extendia-accent/90">
            Get My Quote
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-extendia-accent" />
              <span>020 1234 5678</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-extendia-accent" />
              <span>info@extendia.co.uk</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-extendia-accent" />
              <span>South West London</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteRequestForm;
