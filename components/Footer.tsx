import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  WHATSAPP_DISPLAY, 
  WHATSAPP_LINK_HOME, 
  WHATSAPP_LINK,
  WHATSAPP_LINK_PROMO,
  WHATSAPP_LINK_SALES,
  WHATSAPP_LINK_POSITIONING
} from '../constants';
import { Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Determine which WA link to use based on current page
  let waLink = WHATSAPP_LINK;
  if (currentPath === '/' || currentPath === '/1') {
    waLink = WHATSAPP_LINK_HOME;
  } else if (currentPath === '/3') {
    waLink = WHATSAPP_LINK_PROMO;
  } else if (currentPath === '/4') {
    waLink = WHATSAPP_LINK_SALES;
  } else if (currentPath === '/5') {
    waLink = WHATSAPP_LINK_POSITIONING;
  }

  const navLinks = [
    { path: '/', label: '1' },
    { path: '/2', label: '2' },
    { path: '/3', label: '3' },
    { path: '/4', label: '4' },
    { path: '/5', label: '5' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-display font-bold text-white mb-2">Sobat Legalku</h3>
        <p className="text-gray-400 mb-6">Pendirian PT Perorangan untuk UMKM</p>
        
        <a 
          href={waLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xl font-bold text-brand-500 hover:text-brand-400 transition-colors mb-12"
        >
          <Phone size={24} />
          {WHATSAPP_DISPLAY}
        </a>

        {/* Hidden Navigation */}
        <div className="flex justify-center gap-6 mt-12 opacity-30 hover:opacity-100 transition-opacity duration-500">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`text-xs font-mono transition-colors ${
                currentPath === link.path || (link.path === '/' && currentPath === '/1')
                  ? 'text-brand-500 font-bold border-b border-brand-500' 
                  : 'text-gray-600 hover:text-gray-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-xs text-gray-700">
          &copy; {new Date().getFullYear()} Sobat Legalku. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;