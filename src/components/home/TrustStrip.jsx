import { motion } from "framer-motion";

export default function TrustStrip() {
  const features = [
    {
      icon: "bi-shield-check",
      title: "Vetted Professionals",
      desc: "Background-checked, trained experts.",
    },
    {
      icon: "bi-clock-history",
      title: "On-Time Delivery",
      desc: "Reliable service, every time.",
    },
    {
      icon: "bi-flower1",
      title: "Eco-Friendly",
      desc: "Safe for kids, pets, and staff.",
    },
  ];

  return (
    <>
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-base font-black uppercase tracking-[0.3em] text-brand-gold mb-6">
            OWashCleaners
          </h2>
          <p className="text-sm md:text-base font-medium text-slate-900 leading-relaxed">
            We transform spaces through professional cleaning and advanced pest
            control solutions. Combining precision, reliability, and care, we
            ensure your home and office environments remain pristine and
            protected.
          </p>
        </div>
      </section>

      <section className="pb-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <i className={`bi ${item.icon} text-3xl text-brand-gold`}></i>
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
