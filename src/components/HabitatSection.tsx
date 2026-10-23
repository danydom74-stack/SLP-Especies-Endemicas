import React, { useState } from 'react';
import { Mountain, Trees, Waves, Compass, Info, ArrowUpRight, Sun, Droplets } from 'lucide-react';
import { REGIONS_DATA, PROVINCES_DATA } from '../data/habitatData';
import { SPECIES_DATA } from '../data/speciesData';
import { Species } from '../types';

interface HabitatSectionProps {
  onSelectSpecies: (species: Species) => void;
}

export const HabitatSection: React.FC<HabitatSectionProps> = ({ onSelectSpecies }) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('altiplano');
  const [selectedProvinceTab, setSelectedProvinceTab] = useState<number>(0);

  const selectedRegion = REGIONS_DATA.find((r) => r.id === selectedRegionId) || REGIONS_DATA[0];

  const regionSpecies = SPECIES_DATA.filter((s) =>
    selectedRegion.associatedSpeciesIds.includes(s.id)
  );

  return (
    <section id="habitats" className="py-16 bg-[#FAF6ED] border-y border-[#403B32]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold text-[#B85F40] uppercase tracking-wider block mb-1">
            SECCIÓN 04 · GEOGRAFÍA Y PAISAJES
          </span>
          <h2 className="font-boogaloo text-4xl sm:text-5xl text-[#285744] tracking-wide mb-3">
            EXPLORA SAN LUIS POTOSÍ
          </h2>
          <p className="text-base text-[#403B32]/85 font-nunito leading-relaxed">
            La diversidad natural de San Luis Potosí está estrechamente ligada a su variado relieve, clima, tipos de suelo y exposición a los vientos húmedos del Golfo de México. En el estado conviven desiertos y matorrales áridos, bosques templados de montaña y exuberantes selvas tropicales.
          </p>
        </div>

        {/* 3 Provincias Fisiográficas (CONABIO) */}
        <div className="mb-14 p-6 sm:p-8 bg-[#F3E9D5] rounded-2xl border border-[#403B32]/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#285744] uppercase tracking-wider">
                CLASIFICACIÓN CONABIO · ESTUDIO DE ESTADO
              </span>
              <h3 className="font-boogaloo text-2xl sm:text-3xl text-[#285744]">
                TRES GRANDES PROVINCIAS FISIOGRÁFICAS
              </h3>
            </div>
            
            {/* Province tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#FAF6ED] rounded-lg border border-[#403B32]/10 overflow-x-auto">
              {PROVINCES_DATA.map((prov, idx) => (
                <button
                  key={prov.number}
                  onClick={() => setSelectedProvinceTab(idx)}
                  className={`px-3 py-1.5 text-xs font-bold font-nunito rounded-md transition-all whitespace-nowrap cursor-pointer ${
                    selectedProvinceTab === idx
                      ? 'bg-[#285744] text-[#F3E9D5] shadow-xs'
                      : 'text-[#403B32]/70 hover:text-[#403B32]'
                  }`}
                >
                  {prov.name.split(' ')[0]} {prov.number}
                </button>
              ))}
            </div>
          </div>

          {/* Active Province Detail Card */}
          <div className="bg-[#FAF6ED] p-5 sm:p-6 rounded-xl border border-[#403B32]/15">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#285744]/10 text-[#285744] flex items-center justify-center shrink-0">
                {selectedProvinceTab === 0 && <Mountain className="w-6 h-6" />}
                {selectedProvinceTab === 1 && <Trees className="w-6 h-6" />}
                {selectedProvinceTab === 2 && <Waves className="w-6 h-6" />}
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#B85F40] text-[#F3E9D5] text-[10px] font-mono font-bold rounded">
                    PROVINCIA {PROVINCES_DATA[selectedProvinceTab].number}
                  </span>
                  <h4 className="font-boogaloo text-2xl text-[#285744]">
                    {PROVINCES_DATA[selectedProvinceTab].name}
                  </h4>
                </div>
                <p className="text-sm font-semibold text-[#403B32] font-nunito">
                  {PROVINCES_DATA[selectedProvinceTab].shortSummary}
                </p>
                <p className="text-xs sm:text-sm text-[#403B32]/80 font-nunito leading-relaxed">
                  {PROVINCES_DATA[selectedProvinceTab].detail}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map & Regional Exploration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Map & Region Buttons */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-boogaloo text-2xl text-[#285744]">
                REGIONES NATURALES
              </h3>
              <span className="text-xs font-mono text-[#403B32]/60">Haz clic para explorar</span>
            </div>

            {/* Stylized Interactive Map of SLP */}
            <div className="bg-[#F3E9D5] p-5 rounded-xl border border-[#403B32]/20 relative shadow-xs">
              <svg
                viewBox="0 0 400 340"
                className="w-full h-auto drop-shadow-sm"
                aria-label="Mapa ilustrado de regiones de San Luis Potosí"
              >
                {/* Background contours and lines */}
                <path
                  d="M 50,60 Q 150,30 250,50 T 360,110 T 380,240 T 260,310 T 90,260 Z"
                  fill="#EAE0CB"
                  stroke="#403B32"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                />

                {/* Region 1: Altiplano Potosino (North / West) */}
                <path
                  d="M 65,70 L 160,50 L 220,110 L 170,180 L 80,180 Z"
                  fill={selectedRegionId === 'altiplano' ? '#D6AD4E' : '#E5D6AD'}
                  stroke="#403B32"
                  strokeWidth={selectedRegionId === 'altiplano' ? '2.5' : '1.5'}
                  className="cursor-pointer transition-all hover:opacity-90"
                  onClick={() => setSelectedRegionId('altiplano')}
                />
                <text x="110" y="120" fontSize="12" fontWeight="bold" fill="#403B32" className="pointer-events-none font-mono">
                  ALTIPLANO
                </text>

                {/* Region 2: Sierra Madre Oriental (Spine) */}
                <path
                  d="M 220,110 L 290,130 L 250,230 L 170,180 Z"
                  fill={selectedRegionId === 'sierra-madre' ? '#285744' : '#6A9280'}
                  stroke="#403B32"
                  strokeWidth={selectedRegionId === 'sierra-madre' ? '2.5' : '1.5'}
                  className="cursor-pointer transition-all hover:opacity-90"
                  onClick={() => setSelectedRegionId('sierra-madre')}
                />
                <text x="210" y="170" fontSize="11" fontWeight="bold" fill={selectedRegionId === 'sierra-madre' ? '#FAF6ED' : '#1C1917'} className="pointer-events-none font-mono">
                  SIERRA MADRE
                </text>

                {/* Region 3: Zona Media (Center transition) */}
                <path
                  d="M 170,180 L 250,230 L 210,290 L 110,240 L 80,180 Z"
                  fill={selectedRegionId === 'zona-media' ? '#B85F40' : '#D99F89'}
                  stroke="#403B32"
                  strokeWidth={selectedRegionId === 'zona-media' ? '2.5' : '1.5'}
                  className="cursor-pointer transition-all hover:opacity-90"
                  onClick={() => setSelectedRegionId('zona-media')}
                />
                <text x="140" y="240" fontSize="11" fontWeight="bold" fill="#403B32" className="pointer-events-none font-mono">
                  ZONA MEDIA
                </text>

                {/* Region 4: Huasteca Potosina (East / Southeast) */}
                <path
                  d="M 290,130 L 370,160 L 350,270 L 250,230 Z"
                  fill={selectedRegionId === 'huasteca' ? '#1E4D3B' : '#4E836E'}
                  stroke="#403B32"
                  strokeWidth={selectedRegionId === 'huasteca' ? '2.5' : '1.5'}
                  className="cursor-pointer transition-all hover:opacity-90"
                  onClick={() => setSelectedRegionId('huasteca')}
                />
                <text x="290" y="210" fontSize="12" fontWeight="bold" fill="#FAF6ED" className="pointer-events-none font-mono">
                  HUASTECA
                </text>

                {/* Compass Rose */}
                <g transform="translate(60, 280) scale(0.65)">
                  <circle cx="20" cy="20" r="18" fill="#FAF6ED" stroke="#403B32" strokeWidth="1" />
                  <path d="M 20,4 L 24,18 L 20,16 L 16,18 Z" fill="#B85F40" />
                  <path d="M 20,36 L 24,22 L 20,24 L 16,22 Z" fill="#403B32" />
                  <text x="17" y="0" fontSize="9" fontWeight="bold" fill="#B85F40">N</text>
                </g>
              </svg>

              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#403B32]/70">
                <span>Esquema regional de zonificación biológica</span>
                <span>SLP · CONABIO</span>
              </div>
            </div>

            {/* Region Selection Buttons */}
            <div className="grid grid-cols-2 gap-2">
              {REGIONS_DATA.map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => setSelectedRegionId(reg.id)}
                  className={`p-3 rounded-lg border text-left font-nunito transition-all cursor-pointer ${
                    selectedRegionId === reg.id
                      ? 'bg-[#285744] text-[#F3E9D5] border-[#285744] shadow-xs'
                      : 'bg-[#FAF6ED] text-[#403B32] hover:bg-[#F3E9D5] border-[#403B32]/15'
                  }`}
                >
                  <div className="text-xs font-bold leading-tight">{reg.name}</div>
                  <div className="text-[11px] opacity-80 truncate">{reg.subtitle}</div>
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Active Region Dossier Details */}
          <div className="lg:col-span-7 bg-[#F3E9D5] p-6 sm:p-8 rounded-2xl border border-[#403B32]/20 shadow-xs space-y-6">
            
            {/* Header of Active Region */}
            <div className="border-b border-[#403B32]/15 pb-4">
              <span className="text-xs font-mono font-bold text-[#B85F40] uppercase tracking-wider">
                PROVINCIA ASOCIADA: {selectedRegion.province}
              </span>
              <h3 className="font-boogaloo text-3xl sm:text-4xl text-[#285744] mt-1">
                {selectedRegion.name}
              </h3>
              <p className="font-nunito text-sm font-semibold text-[#403B32]/80 mt-0.5">
                {selectedRegion.subtitle}
              </p>
            </div>

            {/* Physical parameters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-nunito">
              <div className="p-3 bg-[#FAF6ED] rounded-lg border border-[#403B32]/10">
                <span className="text-[10px] uppercase font-bold text-[#403B32]/60 block mb-0.5">Clima</span>
                <span className="font-semibold text-[#403B32]">{selectedRegion.climate}</span>
              </div>

              <div className="p-3 bg-[#FAF6ED] rounded-lg border border-[#403B32]/10">
                <span className="text-[10px] uppercase font-bold text-[#403B32]/60 block mb-0.5">Altitud</span>
                <span className="font-semibold text-[#403B32]">{selectedRegion.altitudeRange}</span>
              </div>

              <div className="p-3 bg-[#FAF6ED] rounded-lg border border-[#403B32]/10">
                <span className="text-[10px] uppercase font-bold text-[#403B32]/60 block mb-0.5">Vegetación dominante</span>
                <span className="font-semibold text-[#403B32]">{selectedRegion.vegetation}</span>
              </div>
            </div>

            {/* Narrative description */}
            <p className="text-sm sm:text-base text-[#403B32]/90 font-nunito leading-relaxed">
              {selectedRegion.description}
            </p>

            {/* Key highlights list */}
            <div>
              <h4 className="text-xs font-mono uppercase font-bold text-[#285744] tracking-wider mb-2">
                Puntos destacados del entorno
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#403B32]/85 font-nunito">
                {selectedRegion.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#B85F40] font-bold">›</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Associated species in this region */}
            <div className="pt-4 border-t border-[#403B32]/15">
              <h4 className="text-xs font-mono uppercase font-bold text-[#285744] tracking-wider mb-3">
                Especies documentadas asociadas a esta región:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {regionSpecies.map((sp) => (
                  <button
                    key={sp.id}
                    onClick={() => onSelectSpecies(sp)}
                    className="flex items-center justify-between p-2.5 bg-[#FAF6ED] hover:bg-[#FAF0E6] rounded-lg border border-[#403B32]/15 transition-all text-left cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded overflow-hidden bg-[#EAE0CB] shrink-0 border border-[#403B32]/10">
                        <img
                          src={sp.image}
                          alt={sp.commonName}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#285744] group-hover:text-[#B85F40] transition-colors leading-tight">
                          {sp.commonName}
                        </div>
                        <div className="font-serif-botanical italic text-[11px] text-[#403B32]/70 leading-tight">
                          {sp.scientificName}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#403B32]/50 group-hover:text-[#B85F40] shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Scientific Caution Alert */}
            <div className="p-3.5 bg-[#FAF6ED] rounded-lg border border-[#B85F40]/30 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#B85F40] shrink-0 mt-0.5" />
              <p className="text-xs text-[#403B32]/80 font-nunito italic leading-normal">
                <strong>Precaución metodológica:</strong> La delimitación de una región geográfica no implica que las especies se distribuyan homogéneamente en toda ella. Los registros corresponden a microhábitats específicos y localidades documentadas.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
