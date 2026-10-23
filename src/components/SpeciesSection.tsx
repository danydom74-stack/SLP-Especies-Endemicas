import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, AlertTriangle } from 'lucide-react';
import { Species } from '../types';
import { SPECIES_DATA } from '../data/speciesData';

interface SpeciesSectionProps {
  onSelectSpecies: (species: Species) => void;
  searchRef?: React.RefObject<HTMLInputElement | null>;
}

export const SpeciesSection: React.FC<SpeciesSectionProps> = ({
  onSelectSpecies,
  searchRef,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'Todas' },
    { id: 'fauna', label: 'Fauna' },
    { id: 'flora', label: 'Flora' },
    { id: 'endemic', label: 'Endémicas de México' },
    { id: 'risk', label: 'En riesgo (NOM-059)' },
  ];

  const filteredSpecies = useMemo(() => {
    return SPECIES_DATA.filter((species) => {
      const matchesSearch =
        species.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        species.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        species.group.toLowerCase().includes(searchTerm.toLowerCase()) ||
        species.distributionSLP.toLowerCase().includes(searchTerm.toLowerCase());

      if (!matchesSearch) return false;

      if (activeFilter === 'fauna') return species.category === 'Fauna';
      if (activeFilter === 'flora') return species.category === 'Flora';
      if (activeFilter === 'endemic') return species.endemismType === 'Endémica de México';
      if (activeFilter === 'risk') {
        return (
          species.riskStatus.includes('(P)') ||
          species.riskStatus.includes('(Pr)') ||
          species.riskStatus.includes('(A)')
        );
      }

      return true;
    });
  }, [searchTerm, activeFilter]);

  return (
    <section id="especies" className="py-16 bg-[#F3E9D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#403B32]/15">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-[#B85F40] uppercase tracking-wider block mb-1">
              SECCIÓN 03 · CATÁLOGO DE CAMPO
            </span>
            <h2 className="font-boogaloo text-4xl sm:text-5xl text-[#285744] tracking-wide mb-3">
              ARCHIVO DE ESPECIES
            </h2>
            <p className="text-sm sm:text-base text-[#403B32]/85 font-nunito leading-relaxed">
              Conoce algunas de las especies que forman parte de la biodiversidad de San Luis Potosí. Explora sus características, identifica sus ambientes y descubre su estado de conservación.
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-[#403B32]/70 block">
              Mostrando <strong className="text-[#285744]">{filteredSpecies.length}</strong> de {SPECIES_DATA.length} fichas
            </span>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-[#FAF6ED] p-4 rounded-xl border border-[#403B32]/15 shadow-xs mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#403B32]/60 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              ref={searchRef}
              type="text"
              placeholder="Buscar especie (ej. Peotillo, ardilla...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#F3E9D5]/60 border border-[#403B32]/20 rounded-lg text-sm text-[#403B32] placeholder-[#403B32]/50 font-nunito focus:outline-none focus:ring-2 focus:ring-[#285744]/40"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#403B32]/60 hover:text-[#403B32] cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Interactive Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {filterOptions.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3 py-1.5 text-xs font-bold font-nunito rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  activeFilter === f.id
                    ? 'bg-[#285744] text-[#F3E9D5] shadow-xs'
                    : 'bg-[#F3E9D5] text-[#403B32]/80 hover:text-[#403B32] hover:bg-[#EAE0CB] border border-[#403B32]/15'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

        </div>

        {/* Species Cards Grid */}
        {filteredSpecies.length === 0 ? (
          <div className="bg-[#FAF6ED] p-12 text-center rounded-xl border border-[#403B32]/20 my-8">
            <AlertTriangle className="w-10 h-10 text-[#B85F40] mx-auto mb-3" />
            <h3 className="font-boogaloo text-2xl text-[#285744] mb-1">
              No se encontraron especies
            </h3>
            <p className="text-sm text-[#403B32]/80 font-nunito mb-4">
              Intenta con otro término de búsqueda o restablece los filtros.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('all');
              }}
              className="px-4 py-2 bg-[#285744] text-[#F3E9D5] text-xs font-bold font-nunito rounded-lg cursor-pointer"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredSpecies.map((species) => {
              return (
                <div
                  key={species.id}
                  className="bg-[#FAF6ED] rounded-xl border border-[#403B32]/20 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#285744]/40"
                >
                  <div>
                    {/* Visual Plate Header */}
                    <div className="relative aspect-4/3 bg-[#EAE0CB] overflow-hidden border-b border-[#403B32]/15">
                      <img
                        src={species.image}
                        alt={species.imageAlt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Plate number */}
                      {species.fieldPlateNumber && (
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[#FAF6ED]/95 backdrop-blur-xs text-[10px] font-mono font-bold text-[#403B32] rounded border border-[#403B32]/20">
                          {species.fieldPlateNumber}
                        </div>
                      )}

                      {/* Category Label at bottom of image */}
                      <div className="absolute bottom-2 left-2.5 px-2 py-0.5 bg-[#285744]/90 text-[#F3E9D5] text-[10px] font-mono uppercase font-bold rounded">
                        {species.category} · {species.group}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5">
                      {/* Clean unboxed metadata with bullet separator */}
                      <div className="flex items-center gap-1.5 text-xs text-[#B85F40] font-mono font-bold mb-1.5">
                        <span>{species.badgeLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#403B32]/70">{species.riskStatus.split(' ')[0]}</span>
                      </div>

                      <h3 className="font-boogaloo text-2xl text-[#285744] leading-tight mb-0.5">
                        {species.commonName}
                      </h3>

                      <p className="font-serif-botanical italic text-sm text-[#403B32]/80 mb-3">
                        {species.scientificName}
                      </p>

                      <p className="text-xs text-[#403B32]/85 font-nunito leading-relaxed line-clamp-3 mb-4">
                        {species.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-5 pb-5 pt-0">
                    <button
                      onClick={() => onSelectSpecies(species)}
                      className="w-full flex items-center justify-between px-4 py-2.5 bg-[#F3E9D5] hover:bg-[#285744] text-[#285744] hover:text-[#F3E9D5] rounded-lg text-xs font-bold font-nunito tracking-wide transition-all group-hover:bg-[#285744] group-hover:text-[#F3E9D5] cursor-pointer shadow-2xs"
                    >
                      <span>CONSULTAR FICHA COMPLETA</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
