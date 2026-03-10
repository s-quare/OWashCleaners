import { motion } from 'framer-motion';

const qcSteps = [
  { step: "01", title: "Background Verification", desc: "Every professional is vetted through national ID verification and stringent personality assessments." },
  { step: "02", title: "Technical Certification", desc: "Teams undergo a mandatory 4-week training cycle on chemical handling and surface-specific maintenance." },
  { step: "03", title: "Post-Service Audit", desc: "A mandatory checklist-based inspection is conducted by a site supervisor before the team departs." },
  { step: "04", title: "Continuous Improvement", desc: "Client feedback is processed within 24 hours to refine our SOPs and service quality." }
];

export default function QualityControl() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-off-black">
          Our Standard of Care
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {qcSteps.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
            >
              <div className="text-brand-gold font-bold text-2xl mb-4">{item.step}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}