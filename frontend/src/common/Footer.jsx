import { Link } from "react-router-dom";
import { ShoppingBag, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Cart", path: "/cart" },
    { name: "Contact", path: "/contact" }
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns", href: "/returns" }
  ];

  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          
          {/* BRAND SECTION - Full width on mobile, spans 2 columns? No, keep as is */}
          <div className="col-span-2 lg:col-span-1 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="bg-blue-600 text-white p-2 rounded-xl shadow-sm">
                <ShoppingBag size={20} className="sm:w-[22px] sm:h-[22px]" strokeWidth={1.75} />
              </div>
              <span className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
                ShopEasy
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Premium ecommerce platform for modern shoppers. Fast delivery, secure payments, and a seamless experience.
            </p>
            
            {/* CONTACT INFO */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                <Mail size={14} className="sm:w-4 sm:h-4 text-blue-500" />
                <span className="truncate">support@shopease.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                <Phone size={14} className="sm:w-4 sm:h-4 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                <MapPin size={14} className="sm:w-4 sm:h-4 text-blue-500" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-2 pt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-gray-800 text-gray-400 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-gray-800 text-gray-400 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-gray-800 text-gray-400 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4.5"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="bg-gray-800 text-gray-400 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* QUICK LINKS SECTION */}
          <div>
            <h3 className="text-white text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPPORT LINKS SECTION */}
          <div>
            <h3 className="text-white text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-5">
              Support
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-[10px] sm:text-xs text-center sm:text-left">
              © {currentYear} ShopEase. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-[10px] sm:text-xs transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-[10px] sm:text-xs transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-[10px] sm:text-xs transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;