import { businessInfo } from "../data/config";

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-slate-300 mt-auto pt-16 pb-8 px-6 text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-3 ">
          <div className="sm:flex sm:items-center sm:justify-center sm:gap-3 mb-3">
            <img
              src="/logo.png"
              alt="business logo"
              className="h-20 sm:h-8 mx-auto sm:mx-0 block"
            />
            <h3 className="text-white font-bold text-xl font-mono">
              {businessInfo.name}
            </h3>
          </div>

          <p className="text-sm leading-relaxed">{businessInfo.tagline}</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/services" className="hover:text-brand-gold transition">
                Our Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-brand-gold transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-brand-gold transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Address</h4>
          <div className="space-y-1 text-sm">
            <p>
              <i className="bi bi-geo-alt text-brand-gold"></i>{" "}
              {businessInfo.address}
            </p>
          </div>
        </div>

        {/* Social / CTA */}
        <div>
          <h4 className="text-white font-semibold mb-4">Reach Out</h4>
          <div className='flex gap-3 w-fit mx-auto'>
            {businessInfo.socials.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <i className={`text-2xl ${item.color} ${item.icon}`}></i>
            </a>
          ))}
          </div>
          
        </div>
      </div>

      <div className="mt-12 pt-8 border-t font-bold border-slate-800 text-slate-500 text-xs">
        &copy; {new Date().getFullYear()} {businessInfo.name}. All rights
        reserved.
      </div>
    </footer>
  );
}
