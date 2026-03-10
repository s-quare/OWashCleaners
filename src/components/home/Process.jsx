import { motion } from 'framer-motion';
import { processSteps } from '../../data/config';

export default function Process() {
  return (
    <section className="py-5 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-off-black">How We Work</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {processSteps.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="text-brand-gold font-bold text-5xl mb-6 opacity-20">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}