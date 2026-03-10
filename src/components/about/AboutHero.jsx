import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutHero() {
  const [logoLoaded, setLogoLoaded] = useState(false);

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Logo Section with Spin-In Animation */}
        <div className="flex justify-center md:justify-start w-fit mx-auto">
          <AnimatePresence>
            <motion.img
              src="/logo.png"
              alt="OCleaner Logo"
              className="w-32"
              onLoad={() => setLogoLoaded(true)}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={logoLoaded ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              viewport={{ once: false }}
              transition={{
                duration: 3,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
                type: "spring",
              }}
            />
          </AnimatePresence>
        </div>

        {/* Narrative Text */}
        <div className="text-slate-600 text-lg leading-relaxed">
          <h1 className="text-4xl font-bold mb-6 text-center text-off-black/80">OWashCleaners</h1>

          <p className="mb-6">
            [the OCleaner story goes here. about how the
            company started ago, the initial vision for transforming the
            company, and the core philosophy that drives your
            team today.]
          </p>
          <hr />
          <br />
          <p>
            We are more than just cleaners; we are partners in maintaining the
            health, longevity, and aesthetic integrity of your most valuable
            spaces.
          </p>
        </div>
      </div>
    </section>
  );
}
