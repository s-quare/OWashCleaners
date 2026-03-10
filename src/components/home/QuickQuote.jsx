import { motion } from "framer-motion";
import { businessInfo } from "../../data/config";

export default function QuickQuote() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden text-center shadow-2xl shadow-brand-gold/20"
        >
          <img src="/images/dettol.avif" className="inset-0 absolute" />

          <div className="relative bg-brand-gold/90 px-8 pt-6 pb-8">
            <h2 className="text-xl md:text-5xl font-bold text-white mb-4">
              Let's Keep Your Space Immaculate
            </h2>
            <p className="text-white/90 text-base mb-6 max-w-lg mx-auto">
              Don't let dirt or pests compromise your comfort. Contact us today
              to book a service, get an estimate for your project or a
              professional consultation.
            </p>

            <a
              href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}?text=Hi%20OWashCleaners,%20I%20would%20like%20to%20request%20your%20services.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white text-brand-gold px-8 py-2 rounded-full font-bold text-sm shadow-lg hover:bg-slate-50 transition-transform hover:scale-105"
            >
              <i className="bi bi-whatsapp text-2xl"></i>
              Chat with Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
