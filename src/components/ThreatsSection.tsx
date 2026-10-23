import React, { useState } from 'react';
import { AlertOctagon, Split, Tractor, Radio, ShieldAlert, Sparkles, Trees, Eye, CheckCircle, AlertTriangle } from 'lucide-react';
import { THREATS_DATA } from '../data/habitatData';

interface ThreatsSectionProps {
  onGoToSpecies: () => void;
}

export const ThreatsSection: React.FC<ThreatsSectionProps> = ({ onGoToSpecies }) => {
  const [habitatState, setHabitatState] = useState<'conserved' | 'altered'>('conserved');

  return (
    <section id="amenazas" className="py-16 bg-[#F3E9D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold text-[#B85F40] uppercase tracking-wider block mb-1">
            SECCIÓN 05 · PRESIONES ECOLÓGICAS
          </span>
          <h2 className="font-boogaloo text-4xl sm:text-5xl text-[#285744] tracking-wide mb-3">
            LO QUE AMENAZA SU EXISTENCIA
          </h2>
          <p className="text-base text-[#403B32]/85 font-nunito leading-relaxed">
            La biodiversidad de San Luis Potosí enfrenta presiones múltiples que surgen cuando los ambientes naturales se transforman, se fragmentan o sufren sobreexplotación. Comprender estas causas permite diseñar estrategias de conservación reales y fundamentadas.
          </p>
        </div>

        {/* 4 Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {THREATS_DATA.map((threat) => (
            <div
              key={threat.id}
              className="bg-[#FAF6ED] p-5 sm:p-6 rounded-xl border border-[#403B32]/15 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 bg-[#B85F40]/10 text-[#B85F40] font-mono font-bold text-xs rounded">
                    AMENAZA {threat.number}
                  </span>
                  <span className="text-[11px] font-mono text-[#403B32]/60">
                    DIAGNÓSTICO CONABIO
                  </span>
                </div>

                <h3 className="font-boogaloo text-2xl text-[#285744] mb-2 leading-tight">
                  {threat.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#403B32]/85 font-nunito leading-relaxed mb-4">
                  {threat.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#403B32]/10 space-y-1.5 font-nunito text-xs">
                <div className="text-[#403B32]/90">
                  <strong className="text-[#285744]">Ejemplo en SLP: </strong>
                  {threat.exampleSLP}
                </div>
                <div className="text-[11px] font-mono text-[#B85F40]">
                  Especies afectadas: {threat.affectedSpeciesHint}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Comparison Tool: Hábitat Conservado vs Alterado */}
        <div className="bg-[#FAF6ED] p-6 sm:p-8 rounded-2xl border border-[#403B32]/20 shadow-xs mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#285744] uppercase tracking-wider">
                HERRAMIENTA DIDÁCTICA INTERACTIVA
              </span>
              <h3 className="font-boogaloo text-2xl sm:text-3xl text-[#285744]">
                COMPARADOR DE PAISAJES: ¿CÓMO CAMBIA EL ENTORNO?
              </h3>
              <p className="text-xs sm:text-sm text-[#403B32]/80 font-nunito mt-1">
                Compara las condiciones ecológicas de un ecosistema íntegro frente a uno transformado por presiones humanas.
              </p>
            </div>

            {/* Toggle state buttons */}
            <div className="flex items-center p-1 bg-[#F3E9D5] rounded-xl border border-[#403B32]/15 shrink-0">
              <button
                onClick={() => setHabitatState('conserved')}
                className={`px-4 py-2 text-xs font-bold font-nunito rounded-lg transition-all cursor-pointer ${
                  habitatState === 'conserved'
                    ? 'bg-[#285744] text-[#F3E9D5] shadow-xs'
                    : 'text-[#403B32]/70 hover:text-[#403B32]'
                }`}
              >
                Hábitat Conservado
              </button>

              <button
                onClick={() => setHabitatState('altered')}
                className={`px-4 py-2 text-xs font-bold font-nunito rounded-lg transition-all cursor-pointer ${
                  habitatState === 'altered'
                    ? 'bg-[#B85F40] text-[#F3E9D5] shadow-xs'
                    : 'text-[#403B32]/70 hover:text-[#403B32]'
                }`}
              >
                Hábitat Alterado
              </button>
            </div>
          </div>

          {/* Comparative Presentation Panel */}
          <div className={`p-6 rounded-xl border transition-all ${
            habitatState === 'conserved'
              ? 'bg-[#F3E9D5]/60 border-[#285744]/30'
              : 'bg-[#FAF0E6] border-[#B85F40]/30'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-nunito">
              
              {/* Factor 1: Cobertura y Suelo */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold uppercase text-[#403B32]/60 block">
                  Cobertura Vegetal y Suelo
                </span>
                <div className="font-bold text-sm text-[#285744]">
                  {habitatState === 'conserved' ? (
                    <span className="flex items-center gap-1.5 text-emerald-800">
                      <CheckCircle className="w-4 h-4" /> Manto vegetal nativo íntegro
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-[#B85F40]">
                      <AlertTriangle className="w-4 h-4" /> Erosión y desmonte de matorral
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#403B32]/80 leading-relaxed">
                  {habitatState === 'conserved'
                    ? 'Retención natural de humedad, presencia de pastos nativos perennes y cactáceas nodrizas que protegen a plántulas de Peotillo.'
                    : 'Pérdida de la capa superficial de suelo por sobrepastoreo o maquinaria; las cactáceas globosas pierden su microhábitat rocoso.'}
                </p>
              </div>

              {/* Factor 2: Corredores Biológicos */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold uppercase text-[#403B32]/60 block">
                  Conectividad y Desplazamiento
                </span>
                <div className="font-bold text-sm text-[#285744]">
                  {habitatState === 'conserved' ? (
                    <span className="flex items-center gap-1.5 text-emerald-800">
                      <CheckCircle className="w-4 h-4" /> Corredores biológicos abiertos
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-[#B85F40]">
                      <AlertTriangle className="w-4 h-4" /> Aislamiento por caminos y cercas
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#403B32]/80 leading-relaxed">
                  {habitatState === 'conserved'
                    ? 'Fauna como la ardilla de Peters se traslada libremente por las copas de los pinos maduros; las colonias de perrito llanero intercambian genes.'
                    : 'Las poblaciones quedan aisladas en pequeñas islas biológicas, reduciendo su variabilidad genética y haciéndolas vulnerables a extinciones locales.'}
                </p>
              </div>

              {/* Factor 3: Especies Clave */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold uppercase text-[#403B32]/60 block">
                  Respuesta de Especies Potosinas
                </span>
                <div className="font-bold text-sm text-[#285744]">
                  {habitatState === 'conserved' ? (
                    <span className="flex items-center gap-1.5 text-emerald-800">
                      <CheckCircle className="w-4 h-4" /> Poblaciones viables y reproductivas
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-[#B85F40]">
                      <AlertTriangle className="w-4 h-4" /> Presión de saqueo y declive
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#403B32]/80 leading-relaxed">
                  {habitatState === 'conserved'
                    ? 'Polinizadores activos en flores de Laelia speciosa; cadenas tróficas estables entre roedores de pastizal y aves de presa.'
                    : 'Extracción furtiva de orquídeas y cactáceas para venta informal; muerte de serpientes por desinformación.'}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Callout Footer */}
        <div className="p-6 bg-[#FAF6ED] rounded-xl border border-[#285744]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-boogaloo text-xl text-[#285744] mb-1">
              Cada especie necesita una estrategia distinta
            </h4>
            <p className="text-xs sm:text-sm text-[#403B32]/80 font-nunito">
              Una amenaza general no actúa con la misma intensidad sobre todas las formas de vida. Conoce los diagnósticos particulares en cada ficha del archivo.
            </p>
          </div>
          <button
            onClick={onGoToSpecies}
            className="px-4 py-2.5 bg-[#285744] hover:bg-[#1E4435] text-[#F3E9D5] text-xs font-bold font-nunito rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-2xs"
          >
            Ver fichas de especies
          </button>
        </div>

      </div>
    </section>
  );
};
