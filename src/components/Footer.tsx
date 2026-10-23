import React from 'react';
import { Leaf } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF6ED] border-t border-[#403B32]/20 py-8 text-[#403B32] font-nunito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#285744] text-[#F3E9D5] flex items-center justify-center">
              <Leaf className="w-4 h-4" />
            </div>
            <div>
              <span className="font-boogaloo text-xl text-[#285744] block leading-none">
                Expediente Natural
              </span>
              <span className="text-[11px] uppercase font-bold text-[#B85F40] tracking-wider">
                San Luis Potosí · Biodiversidad y Especies Endémicas
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-[#403B32]/80">
            <a href="#inicio" className="hover:text-[#285744] transition-colors">Inicio</a>
            <a href="#endemismo" className="hover:text-[#285744] transition-colors">Endemismo</a>
            <a href="#especies" className="hover:text-[#285744] transition-colors">Especies</a>
            <a href="#habitats" className="hover:text-[#285744] transition-colors">Hábitats</a>
            <a href="#amenazas" className="hover:text-[#285744] transition-colors">Amenazas</a>
            <a href="#conservacion" className="hover:text-[#285744] transition-colors">Conservación</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
