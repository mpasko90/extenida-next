"use client";

// Simplified HIP section: header + embedded PDF from public/hip.pdf

"use client";

import Image from "next/image";

const HIPSection = () => {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-gray-900/90 via-extendia-primary/80 to-extendia-accent/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Extendia Guarantee That The Investment You Are About To Make In Your
            Home is&nbsp;100% Risk Free.
          </h2>

          {/* Embedded PDF as an image */}
          <a
            href="https://hip.insure/"
            target="_blank"
            rel="noopener noreferrer"
            title="View HIP Insurance details"
            className="block w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white group"
          >
            <Image
              src="/hip.png"
              alt="HIP Certificate"
              width={800}
              height={1132} // Assuming A4 ratio
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <div className="mt-12 space-y-8 text-white">
            <h3 className="text-xl md:text-2xl font-semibold">
              To Back Up Our Promise And Safeguard Your Protection From The
              Minute you Say Yes.
            </h3>
            <h3 className="text-xl md:text-2xl font-semibold">
              Extendia have partnered with HIP Insurance to protect you, and
              here is why we chose to work with HIP!
            </h3>
            <blockquote className="max-w-4xl mx-auto border-l-4 border-extendia-accent pl-6 italic text-left">
              <p className="font-bold text-lg md:text-xl">
                &quot;HIP Safeguarding customers’ interests and have built up an
                outstanding reputation for trust, honesty and support, whilst
                raising the bar for standards within our industry. HIP protect
                our customers’ investments and properties by accrediting only
                carefully selected professional trades people with a proven
                history of delivering excellent customer satisfaction.&quot;
              </p>
            </blockquote>
            <h3 className="text-xl md:text-2xl font-semibold">
              Extendia Have Met The Criteria To Offer The HIP Guarantee, So You
              Are In Safe Hands.
            </h3>
            <h3 className="text-xl md:text-2xl font-semibold">
              But Don&apos;t Just Take Our Word For It....
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HIPSection;
