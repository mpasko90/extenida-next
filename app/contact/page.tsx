import ContactForm from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950">
  <section className="flex-1 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <ContactForm showContactInfo layout="split" />
          </div>
        </div>
      </section>
    </main>
  );
}
