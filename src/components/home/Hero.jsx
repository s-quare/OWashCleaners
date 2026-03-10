import { motion } from "framer-motion";
import { businessInfo } from "../../data/config";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Hero() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  const reveal = () => {
    setTimeout(() => {
      setHeroLoaded(true);
    }, 1000);
  };

  useEffect(() => {
    document.documentElement.style.overflow = heroLoaded ? "auto" : "hidden";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [heroLoaded]);

  return (
    <section className="relative md:pt-17 -top-16.5 w-full h-screen min-h-112.5 max-h-500 flex items-center overflow-hidden">
      {!heroLoaded && (
        <div className="fixed grid place-items-center z-1000 h-screen w-screen bg-white">
          <div>
            <div className="h-10 w-10 mx-auto mb-5 border-5 border-brand-gold/30 border-t-brand-gold rounded-full animate-spin" />
            <p className="text-center text-xl tracking-wider font-bold text-gray-700">
              OWashCleaners
            </p>
          </div>
        </div>
      )}
      {/* Background/Image Layer */}
      {/* Absolute & Full on mobile, becomes side-by-side on lg */}
      <div className="absolute inset-0 lg:relative lg:w-1/2 lg:h-full z-0">
        {/* Overlay only on mobile/md to help text readability */}
        <div className="absolute inset-0 bg-black/50 lg:bg-transparent z-10"></div>
        <div className="absolute h-full w-[60%] bg-linear-to-r from-black/40 to-black/0 lg:bg-transparent z-10"></div>
        <img
          src="/images/hero-cleaning.jpg"
          alt="Cleaning and Pest Control Services"
          className="w-full h-full object-cover lg:rounded-br-[30%] blur-[3px] lg:blur-[0px]"
          onLoad={reveal}
        />
      </div>

      {/* Text Layer */}
      {/* Centered on mobile, standard layout on lg */}
      <div className="relative z-20 w-full px-6 md:px-12 lg:w-1/2 lg:pl-16 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white lg:text-off-black"
        >
          <p className="text-[10px] mb-5 bg-white/50 text-off-black/80 w-fit px-2 py-px rounded-full ">
            <i className="bi bi-leaf text-green-300"></i> 100% Eco-friendly Cleaning
            solutions
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            The New Standard <br /> Of{" "}
            <span className="text-brand-gold">Pristine.</span>
          </h1>
          <p className="text-lg lg:text-slate-600 mb-8 max-w-md">
            Expert cleaning, pest control, and laundry services for homes and
            offices.
          </p>

          <div className="pt-5 flex gap-3 items-center">
            <a
              href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}`}
              className="inline-block text-sm bg-brand-gold text-white px-5 py-3 rounded-xl font-bold shadow-lg hover:bg-[#c6822e] transition-all"
            >
              Book Now
            </a>
            <Link
              to="/services"
              className="inline-block text-sm bg-white text-slate-800 shadow-md px-5 py-3 rounded-xl font-bold hover:bg-[#c6822e] transition-all"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
