"use client";

// Simplified HIP section: header + embedded PDF from public/hip.pdf

const HIPSection = () => {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Home Improvement Protection (HIP)
          </h2>

          {/* Embedded PDF */}
          <div className="w-full h-[70vh] md:h-[85vh] rounded-xl overflow-hidden shadow ring-1 ring-black/5 bg-white">
            <iframe
              src="/hip.pdf#view=FitH"
              title="HIP Certificate PDF"
              aria-label="HIP Certificate PDF"
              className="w-full h-full"
            />
          </div>

          {/* Fallback link */}
          <p className="mt-4 text-sm text-gray-600 text-center">
            If the document doesn’t load, you can open it in a new tab
            <a href="/hip.pdf" target="_blank" rel="noopener" className="text-extendia-primary font-medium underline ml-1">
              here
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default HIPSection;
