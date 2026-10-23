import React, { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Endemismo', href: '#endemismo' },
    { label: 'Especies', href: '#especies' },
    { label: 'Hábitats', href: '#habitats' },
    { label: 'Amenazas', href: '#amenazas' },
    { label: 'Conservación', href: '#conservacion' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F3E9D5]/95 backdrop-blur-md border-b border-[#403B32]/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark & emblem */}
        <a 
          href="#inicio" 
          className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 rounded-full bg-[#285744] text-[#F3E9D5] flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
            <Leaf className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-boogaloo text-2xl tracking-wide text-[#285744] leading-none">
              Expediente Natural
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#403B32]/70 font-nunito leading-tight">
              San Luis Potosí
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#403B32]/85 font-nunito">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#285744] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#285744]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Mobile menu toggle only */}
        <div className="flex items-center shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#403B32] hover:text-[#285744] rounded-md cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#403B32]/10 bg-[#FAF6ED] px-4 pt-3 pb-5 shadow-lg">
          <div className="flex flex-col gap-2 font-nunito">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-[#403B32] hover:bg-[#EFE3C7] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
