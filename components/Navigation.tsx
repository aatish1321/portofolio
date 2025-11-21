import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 py-8 mix-blend-difference text-white">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-art font-bold tracking-widest">
            LUMINA
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-12 items-center">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest hover:opacity-50 transition-opacity cursor-hover"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div className={`fixed inset-0 bg-void z-40 flex flex-col items-center justify-center gap-12 transition-all duration-700 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        {NAV_LINKS.map((link, idx) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={() => setIsOpen(false)}
            style={{ transitionDelay: `${idx * 100}ms` }}
            className={`text-5xl font-display font-bold text-transparent text-stroke hover:text-white transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
};