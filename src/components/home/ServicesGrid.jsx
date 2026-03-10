import { motion } from "framer-motion";
import { services } from "../../data/config";
import { Link } from "react-router-dom";

export default function ServicesGrid() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-off-black">
          Our Expert Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-shadow"
            >
              <i
                className={`bi ${service.icon} text-4xl text-brand-gold mb-6 block`}
              ></i>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <Link
          to="/services"
          className="bg-brand-gold px-5 ml-5 py-3 mt-10 font-bold block w-fit rounded-full"
        >
          Explore Services
        </Link>
      </div>
    </section>
  );
}
