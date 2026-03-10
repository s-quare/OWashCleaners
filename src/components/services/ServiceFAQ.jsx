import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    q: "Are your cleaning agents safe?",
    a: "Yes. We use eco-friendly, non-toxic, and biodegradable agents that are safe for children, pets, and workplace environments.",
  },
  {
    q: "Do you provide all equipment?",
    a: "Absolutely. Our teams arrive fully equipped with industrial-grade vacuums, polishers, and specialized tools for every task.",
  },
  {
    q: "How are your staff vetted?",
    a: "Every team member undergoes a rigorous background check, professional training, and certification process.",
  },
  {
    q: "What is your turnaround time?",
    a: "Depending on the scale, we offer same-day, next-day, and scheduled maintenance contracts to fit your timeline.",
  },
];

export default function ServiceFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-20 px-6 md-px-12 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-off-black">
        FAQs
      </h2>
      <div className="space-y-4">
        {faqData.map((item, i) => (
          <div
            key={i}
            className="border border-slate-200 rounded-2xl p-6 overflow-hidden"
          >
            <button
              className="flex cursor-pointer justify-between items-center w-full font-bold text-lg text-left"
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              aria-expanded={activeIndex === i}
            >
              {item.q}
              <span className="text-2xl text-brand-gold ml-4">
                {activeIndex === i ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence>
              {activeIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="text-slate-600 mt-4 leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
