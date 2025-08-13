"use client";

import { useState, FormEvent } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '../../lib/companyInfo';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showContactInfo?: boolean;
}

const business = {
  name: companyInfo.name,
  phone: companyInfo.phone,
  email: { address: companyInfo.email, href: `mailto:${companyInfo.email}` },
  serviceArea: 'South West London & surrounding areas',
  registeredOffice: companyInfo.registeredOfficeFormatted
};

export const ContactForm = ({
  title = 'Get Your Free Quote',
  subtitle = "Tell us about your project and we'll provide a detailed quote within 24 hours.",
  showContactInfo = true
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    company: '' // honeypot
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [startTime] = useState(Date.now());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Please provide more details about your project';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const submissionTime = Date.now() - startTime;
      const payload = { ...formData, source: 'contact-page', t: submissionTime };
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send form');
      setSubmitStatus('success');
      setSubmitMessage("Thank you for your message! We'll contact you within 24 hours with your free quote.");
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', company: '' });
    } catch (err) {
      setSubmitStatus('error');
      setSubmitMessage(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      {showContactInfo && (
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">Get in Touch</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Ready to transform your home? Contact us for a free consultation and detailed quote.</p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Phone className="w-5 h-5 text-extendia-primary mt-1" />
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-100">Phone</h4>
                <p className="text-slate-600 dark:text-slate-400"><a href={business.phone.href}>{business.phone.display}</a></p>
                <p className="text-sm text-slate-500">Available 8 AM - 6 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-5 h-5 text-extendia-primary mt-1" />
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-100">Email</h4>
                <p className="text-slate-600 dark:text-slate-400"><a href={business.email.href}>{business.email.address}</a></p>
                <p className="text-sm text-slate-500">We respond within 4 hours</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-5 h-5 text-extendia-primary mt-1" />
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-100">Registered Office</h4>
                <p className="text-slate-600 dark:text-slate-400">{business.registeredOffice}</p>
                <p className="text-sm text-slate-500">Service area: {business.serviceArea}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-5 h-5 text-extendia-primary mt-1" />
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-100">Response Time</h4>
                <p className="text-slate-600 dark:text-slate-400">Free quotes within 24 hours</p>
                <p className="text-sm text-slate-500">Emergency support available</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={showContactInfo ? 'lg:col-span-2' : 'lg:col-span-3'}>
        <div className="bg-white dark:bg-slate-950 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 p-6 md:p-8">
          {title && <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">{title}</h2>}
            {subtitle && <p className="text-slate-600 dark:text-slate-400 mb-6">{subtitle}</p>}
            {submitStatus === 'success' && <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-lg">{submitMessage}</div>}
            {submitStatus === 'error' && <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-lg">{submitMessage}</div>}
            <form onSubmit={handleSubmit}>
              <div className="hidden">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} tabIndex={-1} autoComplete="off" />
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name *</label>
                    <Input id="name" name="name" type="text" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
                    {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address *</label>
                    <Input id="email" name="email" type="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required />
                    {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                    <Input id="phone" name="phone" type="tel" placeholder={business.phone.display} value={formData.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Project Type</label>
                    <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="block w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100 shadow-sm focus:border-extendia-primary focus:outline-none focus:ring-1 focus:ring-extendia-primary">
                      <option value="">Select project type</option>
                      <option value="Home Extensions">Home Extensions</option>
                      <option value="Loft Conversions">Loft Conversions</option>
                      <option value="Bathroom Renovations">Bathroom Renovations</option>
                      <option value="Kitchen Extensions">Kitchen Extensions</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Project Details *</label>
                  <Textarea id="message" name="message" placeholder="Please tell us about your project..." rows={5} value={formData.message} onChange={handleChange} required />
                  <p className="mt-1 text-xs text-slate-500">The more details you provide, the more accurate quote we can give you.</p>
                  {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
                </div>
                <div className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting} className="bg-extendia-primary hover:bg-extendia-primary/90 text-white px-8 py-3 font-semibold">
                    {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                  </Button>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
