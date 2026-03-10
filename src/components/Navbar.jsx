import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  useEffect(()=>{
    if(path !== '/contact') {
      window.scroll(0,0)
    }
  }, [path])
  
  const navLinks = [
    { name: 'Home', path: '/', icon: 'bi-house-door-fill' },
    { name: 'Services', path: '/services', icon: 'bi-grid-3x3-gap-fill' },
    { name: 'About', path: '/about', icon: 'bi-person-fill' },
    { name: 'Contact', path: '/contact', icon: 'bi-chat-fill' },
  ];



  return (
    <header className="sticky top-4 z-50 px-2 xs:px-4 md:px-6">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="mx-auto max-w-2xl bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-3 flex items-center justify-between"
      >
        {/* Logo Section */}
        <Link to="/" className={`flex items-center gap-1 font-bold text-lg ${location.pathname === '/' && 'pointer-none'}`}>
          <img src="/logo.png" alt="OWashCleaners Logo" className="w-6 h-6 object-contain" />
          <span className="text-sm text-zinc-800">OWashCleaners</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-1 sm:gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              title={link.name}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all ${
                location.pathname === link.path 
                  ? 'bg-brand-gold text-white shadow-md pointer-none:' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <i className={`bi ${link.icon}`}></i>
              {/* Drop text on smaller screens, show on larger */}
              <span className="hidden sm:block text-sm font-medium">{link.name}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </header>
  );
}