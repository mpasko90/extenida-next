import ContactForm from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Home?</h1>
            <p className="text-xl lg:text-2xl text-slate-200 mb-8">Get your free, no-obligation quote within 24 hours</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm lg:text-base">
              <div className="flex items-center space-x-2"><span className="w-5 h-5 text-green-400">✓</span><span>Free Consultation</span></div>
              <div className="flex items-center space-x-2"><span className="w-5 h-5 text-green-400">✓</span><span>24-Hour Response</span></div>
              <div className="flex items-center space-x-2"><span className="w-5 h-5 text-green-400">✓</span><span>No Hidden Costs</span></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Get Your Free Quote Today</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Tell us about your project and we'll provide a detailed, competitive quote with no hidden costs.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
