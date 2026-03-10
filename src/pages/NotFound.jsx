import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Bootstrap Icon: Exclamation Circle */}
        <i className="bi bi-exclamation-circle text-7xl text-brand-blue mb-6"></i>
        
        <h1 className="text-5xl font-bold text-off-black mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700 mb-6">
          Oops! This page is squeaky clean.
        </h2>
        <p className="text-slate-500 max-w-md mx-auto mb-8">
          We couldn't find the page you're looking for. It might have been moved or deleted, 
          but our cleaners are still on the job!
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-colors"
        >
          <i className="bi bi-house-door"></i>
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}