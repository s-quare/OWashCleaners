const values = [
  { icon: "bi-shield-check", title: "Uncompromising Safety", desc: "We use only verified, eco-friendly agents and rigorous safety protocols to protect your space and family." },
  { icon: "bi-people", title: "Vetted Professionals", desc: "Every team member undergoes extensive background checks and technical certification before entering your property." },
  { icon: "bi-graph-up", title: "Scalable Excellence", desc: "Whether it’s a single-room deep clean or a national facility management contract, our quality remains consistent." }
];

export default function CoreValues() {
  return (
    <section className="py-12 bg-white rounded-2xl shadow px-6 max-w-5xl mx-auto">
        <h3 className="font-bold text-center text-4xl mb-10">Our Core Values</h3>
      <div className="grid md:grid-cols-3 gap-12">
        {values.map((v, i) => (
          <div key={i} className="text-center">
            <i className={`bi ${v.icon} text-4xl text-brand-gold mb-4 block`}></i>
            <h3 className="text-xl font-bold mb-2">{v.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}