import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ServiceDetail({ title, desc, process, icon, image }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imagePath = `/images/services-images/${image}`;

  return (
    <article className="py-12 px-6 md:px-12 max-w-5xl mx-auto border-b border-slate-200">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <i className={`bi ${icon} text-4xl text-brand-gold mb-4 block`}></i>
          <h2 className="text-3xl font-bold text-off-black mb-4">{title}</h2>
          <p className="text-slate-600 mb-6">{desc}</p>
          
          <h3 className="font-semibold text-lg mb-2">Our Process:</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            {process.map((step, i) => <li key={i}>{step}</li>)}
          </ul>
        </div>

        {/* Visual Section with Loading State */}
        <div className="relative h-64 w-full rounded-3xl overflow-hidden bg-slate-200">
          {!isLoaded && (
            <motion.div 
              className="absolute inset-0 bg-slate-400"
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            />
          )}
          <img 
            src={imagePath} 
            alt={title}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>
    </article>
  );
}