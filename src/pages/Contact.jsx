import { useEffect, useState } from "react";
import { toast } from "sonner";
import ContactForm from "../components/contact/ContactForm";
import { businessInfo } from "../data/config";

export default function Contact() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const navigationUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(businessInfo.address)}`;

  useEffect(() => {
    const target = document.querySelector(".TheMain");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      //--------------
      toast("Interactive Map Available", {
        description: "Scroll up to view map",
        duration: 4000,
      });
    }
  }, []);

  return (
    <div className="relative -top-16.5 min-h-screen">
      {/* 1. Sticky Map Section */}
      <div className="sticky top-0 h-[70vh] w-full z-0 bg-slate-200">
        {/* Loading Spinner */}
        {!isMapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-200 z-20">
            <div className="w-8 h-8 border-4 border-slate-400 border-t-slate-900 rounded-full animate-spin"></div>
          </div>
        )}

        <iframe
          src={businessInfo.embedUrl}
          onLoad={() => setIsMapLoaded(true)}
          className={`w-full h-full transition-opacity duration-700 ${isMapLoaded ? "opacity-90" : "opacity-0"}`}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        />
      </div>

      <main className="TheMain relative z-10 bg-brand-cream pt-16 pb-24 rounded-t-3xl -mt-16 scroll-mt-30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <div>
              <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
                Let's Connect.
              </h1>
              <p className="text-lg text-slate-500 max-w-md leading-relaxed">
                {businessInfo.tagline}
              </p>
            </div>

            <a
              href={navigationUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-900 text-sm text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-brand-gold transition-all shadow-lg active:scale-95"
            >
              <i className="bi bi-cursor-fill text-brand-gold"></i>
              Locate Our Office
            </a>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[
              { label: "Address", value: businessInfo.address },
              { label: "Phone", value: businessInfo.phone },
              { label: "Email", value: businessInfo.email },
            ].map((item, idx) => (
              <div
                key={idx}
                className="space-y-2 border-l-2 border-slate-100 pl-4 hover:border-brand-gold transition-colors"
              >
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">
                  {item.label}
                </h3>
                <p className="text-md font-bold text-slate-800 leading-tight">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <hr className="border-slate-100 mb-20" />

          {/* Form Section */}
          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">
                Send us a message
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Have a specific request or a commercial project? Fill the form
                and our team will reach out as soon as possible.
              </p>
            </div>
            <div className="md:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
