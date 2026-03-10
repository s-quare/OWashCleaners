import { serviceAreas } from '../../data/config';

export default function ServiceAreas() {
  return (
    <section className="py-20 px-6 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-off-black">Service Coverage</h2>
        <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
          We primarily serve the entire Lagos metropolis, with operational capacity to deploy professional teams <strong>nationwide</strong> for larger projects.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {serviceAreas.coverage.map((area, index) => (
            <span 
              key={index} 
              className="px-4 py-2 cursor-pointer bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-brand-gold hover:text-white transition-colors"
            >
              {area}
            </span>
          ))}
        </div>
        
        <div className="mt-10 p-4 text-xs border border-brand-gold/20 bg-brand-gold/5 rounded-2xl inline-block">
          <i className="bi bi-geo-alt-fill text-brand-gold mr-2"></i>
          <span className="font-semibold text-off-black">{serviceAreas.note}</span>
        </div>
      </div>
    </section>
  );
}