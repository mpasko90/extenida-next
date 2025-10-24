"use client";

import { useState, FormEvent } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { companyInfo } from "../../lib/companyInfo";

interface ContactFormProps {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  showContactInfo?: boolean;
  layout?: "split" | "stacked"; // 'split' = info left + form right, 'stacked' = info above form
}

const business = {
  name: companyInfo.name,
  phone: companyInfo.phone,
  email: { address: companyInfo.email, href: `mailto:${companyInfo.email}` },
  serviceArea: "South West London & surrounding areas",
  registeredOffice: companyInfo.registeredOfficeFormatted,
};

export const ContactForm = ({
  title = "Get Your Quote",
  subtitle = "Tell us about your project and we'll provide a detailed quote within 24 hours.",
  showContactInfo = true,
  layout = "split",
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    company: "", // honeypot
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [startTime] = useState(Date.now());

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Please provide more details about your project";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");
    try {
      const submissionTime = Date.now() - startTime;
      const payload = {
        ...formData,
        source: "contact-page",
        t: submissionTime,
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send form");
      setSubmitStatus("success");
      setSubmitMessage(
        "Thank you for your message! We'll contact you within 24 hours with your quote."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        company: "",
      });
    } catch (err) {
      setSubmitStatus("error");
      setSubmitMessage(
        err instanceof Error
          ? err.message
          : "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const InfoBlock = showContactInfo ? (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-3">Get in Touch</h3>
        <p className="text-slate-200 mb-4 text-sm sm:text-base">
          Ready to transform your home? Contact us for a free consultation and
          detailed quote.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5">
        <div className="flex items-start space-x-4">
          <Phone className="w-5 h-5 text-extendia-primary mt-1" />
          <div>
            <h4 className="font-semibold text-white">Phone</h4>
            <p className="text-slate-200">
              <a href={business.phone.href}>{business.phone.display}</a>
            </p>
            {/* <p className="text-sm text-slate-400">Available 8 AM - 6 PM</p> */}
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Mail className="w-5 h-5 text-extendia-primary mt-1" />
          <div>
            <h4 className="font-semibold text-white">Email</h4>
            <p className="text-slate-200">
              <a href={business.email.href}>{business.email.address}</a>
            </p>
            {/* <p className="text-sm text-slate-400">We respond within 4 hours</p> */}
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <MapPin className="w-5 h-5 text-extendia-primary mt-1" />
          <div>
            <h4 className="font-semibold text-white">Registered Office</h4>
            <p className="text-slate-200 whitespace-pre-line">
              {business.registeredOffice}
            </p>
            {/* <p className="text-sm text-slate-400">Service area: {business.serviceArea}</p> */}
          </div>
        </div>
        {/* <div className="flex items-start space-x-4">
          <Clock className="w-5 h-5 text-extendia-primary mt-1" />
          <div>
            <h4 className="font-semibold text-white">Response Time</h4>
            <p className="text-slate-200">Quotes within 24 hours</p>
            <p className="text-sm text-slate-400">Emergency support available</p>
          </div>
        </div> */}
      </div>
    </div>
  ) : null;

  const showHeadingsInForm = !(showContactInfo && layout === "split");
  const FormPanel = (
    <div className="bg-white/95 dark:bg-slate-900/70 backdrop-blur rounded-xl shadow-xl border border-slate-200/60 dark:border-slate-700 p-5 sm:p-6 md:p-8">
      {showHeadingsInForm && title && (
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {title}
        </h2>
      )}
      {showHeadingsInForm && subtitle && (
        <p className="text-slate-600 dark:text-slate-300 mb-6">{subtitle}</p>
      )}
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-lg">
          {submitMessage}
        </div>
      )}
      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 rounded-lg">
          {submitMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="hidden">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div className="space-y-5 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white text-slate-900 dark:bg-slate-800/60 border-slate-300 dark:border-slate-600 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:ring-extendia-primary/60 focus-visible:ring-2"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white text-slate-900 dark:bg-slate-800/60 border-slate-300 dark:border-slate-600 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:ring-extendia-primary/60 focus-visible:ring-2"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder={business.phone.display}
                value={formData.phone}
                onChange={handleChange}
                className="bg-white text-slate-900 dark:bg-slate-800/60 border-slate-300 dark:border-slate-600 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:ring-extendia-primary/60 focus-visible:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Project Type
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="block w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800/60 px-3 py-2 text-slate-900 dark:text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-extendia-primary/60"
              >
                <option value="">Select project type</option>
                <option value="House Extension">House Extension</option>
                <option value="Loft Conversion">Loft Conversion</option>
                <option value="House/Flat Renovation">
                  House/Flat Renovation
                </option>
                <option value="Bathroom Renovation">Bathroom Renovation</option>
                <option value="Kitchen Renovation">Kitchen Renovation</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >
              Project Details *
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Please tell us about your project..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-white text-slate-900 dark:bg-slate-800/60 border-slate-300 dark:border-slate-600 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:ring-extendia-primary/60 focus-visible:ring-2"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.message}
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isSubmitting}
              // TODO: change to extendia-accent
              className="bg-extendia-accent hover:bg-extendia-accent/90 text-white px-8 py-3 font-semibold"
            >
              {isSubmitting ? "Sending..." : "Contact Us"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );

  if (layout === "stacked") {
    return (
      <div className="space-y-12">
        {InfoBlock}
        {FormPanel}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
      {showContactInfo && (
        <div className="lg:col-span-1 self-start">{InfoBlock}</div>
      )}
      <div className={showContactInfo ? "lg:col-span-2" : "lg:col-span-3"}>
        {FormPanel}
      </div>
    </div>
  );
};

export default ContactForm;
