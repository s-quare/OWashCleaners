
export default function ServicesHero() {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] py-24 overflow-hidden -mt-16.5">
      <img 
        src="/images/service-hero.jpg" 
        alt="Cleaning services"
        className="absolute inset-0 w-full h-full object-cover z-0 blur-[3px]" 
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="absolute inset-0 gradient-to-r from-black/20 to-black/80 z-20"></div>

      <div className="relative z-30 px-6 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold font-mono mb-6">
          Our Expert Solutions
        </h1>
        <p className="text-sm sm:text-lg text-slate-100 max-w-2xl mx-auto">
          Professional-grade hygiene, restoration, and pest management services 
          tailored for your home and office requirements.
        </p>
      </div>
    </section>
  );
}