import { motion } from 'framer-motion';

export default function TrustStrip() {
  const features = [
    { icon: 'bi-shield-check', title: 'Vetted Professionals', desc: 'Background-checked, trained experts.' },
    { icon: 'bi-clock-history', title: 'On-Time Delivery', desc: 'Reliable service, every time.' },
    { icon: 'bi-flower1', title: 'Eco-Friendly', desc: 'Safe for kids, pets, and staff.' },
  ];

  return (
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
  );
}