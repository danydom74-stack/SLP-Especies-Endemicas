import React from 'react';
import { ArrowRight, Mountain, Compass, ShieldAlert } from 'lucide-react';

interface HeroSectionProps {
  onExploreSpecies: () => void;
  onExploreHabitats: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreSpecies,
}) => {
  return (
    <section id="inicio" className="relative pt-6 pb-14 lg:py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top location tag (removed the cluttered stamp box as requested) */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF6ED] border border-[#285744]/20 rounded-full text-xs font-nunito font-bold text-[#285744] tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#B85F40]" />
            San Luis Potosí · Biodiversidad y especies endémicas
          </div>
        </div>

        {/* 2-Column Split: Content & Clean Landscape Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headlines & Short Spanish Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#B85F40] font-nunito mb-1.5">
              EXPEDIENTE NATURAL
            </p>
            
            <h1 className="font-boogaloo text-4xl sm:text-5xl lg:text-6xl text-[#285744] leading-[1.08] tracking-tight mb-4 text-balance">
              LA VIDA QUE NOS HACE ÚNICOS
            </h1>

            <p className="text-sm sm:text-base text-[#403B32]/90 leading-relaxed font-nunito mb-6">
              Descubre la riqueza natural de San Luis Potosí. Desde zonas áridas hasta bosques y selvas, conoce las especies endémicas de nuestro estado y las acciones para protegerlas.
            </p>

            {/* Action Button */}
            <div>
              <button
                onClick={onExploreSpecies}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#285744] hover:bg-[#1E4435] text-[#F3E9D5] font-boogaloo text-lg rounded-lg shadow-xs hover:shadow transition-all group cursor-pointer"
              >
                <span>EXPLORAR ESPECIES</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Clean Simple Landscape Illustration (No text inside image) */}
          <div className="lg:col-span-6">
            <div className="p-2 sm:p-3 bg-[#FAF6ED] rounded-xl shadow-xs border border-[#403B32]/15">
              <div className="overflow-hidden rounded-lg aspect-16/10 bg-[#EFE3C7]">
                <img
                  src="/images/hero/hero_potosi.jpg"
                  alt="Paisaje de sierras y vegetación de San Luis Potosí en acuarela"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Curatorial Strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#403B32]/15">
          <div className="p-3.5 bg-[#FAF6ED] rounded-lg border border-[#403B32]/10 flex items-center gap-3">
            <div className="p-2 rounded bg-[#285744]/10 text-[#285744] shrink-0">
              <Mountain className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] uppercase font-bold text-[#403B32]/60 font-nunito">Relieve</p>
              <p className="text-xs sm:text-sm font-bold text-[#285744] font-nunito">3 Provincias Fisiográficas</p>
            </div>
          </div>

          <div className="p-3.5 bg-[#FAF6ED] rounded-lg border border-[#403B32]/10 flex items-center gap-3">
            <div className="p-2 rounded bg-[#D6AD4E]/20 text-[#967420] shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] uppercase font-bold text-[#403B32]/60 font-nunito">Ecosistemas</p>
              <p className="text-xs sm:text-sm font-bold text-[#285744] font-nunito">4 Regiones Biogeográficas</p>
            </div>
          </div>

          <div className="p-3.5 bg-[#FAF6ED] rounded-lg border border-[#403B32]/10 flex items-center gap-3">
            <div className="p-2 rounded bg-[#B85F40]/10 text-[#B85F40] shrink-0">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] uppercase font-bold text-[#403B32]/60 font-nunito">Norma Oficial</p>
              <p className="text-xs sm:text-sm font-bold text-[#285744] font-nunito">NOM-059-SEMARNAT-2010</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
