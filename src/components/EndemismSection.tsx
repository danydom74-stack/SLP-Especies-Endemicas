import React, { useState } from 'react';
import { MapPin, Sprout, ShieldCheck, HelpCircle, CheckCircle2, AlertCircle } from 'lucide-react';

export const EndemismSection: React.FC = () => {
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);

  return (
    <section id="endemismo" className="py-16 bg-[#FAF6ED] border-y border-[#403B32]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-[#F3E9D5] border border-[#285744]/20 rounded text-xs font-mono font-bold text-[#285744] mb-3">
            SECCIÓN 02 · FUNDAMENTOS BIOLÓGICOS
          </div>
          <h2 className="font-boogaloo text-4xl sm:text-5xl text-[#285744] tracking-wide mb-4">
            ¿QUÉ ES UNA ESPECIE ENDÉMICA?
          </h2>
          <p className="text-base sm:text-lg text-[#403B32]/85 font-nunito leading-relaxed">
            Una especie endémica es aquella cuya distribución natural está <strong className="text-[#285744]">restringida a un territorio determinado</strong>. Ese territorio puede ser un país completo, un estado, una cordillera montañosa, una isla o incluso un sistema único de cuevas.
          </p>
          <p className="text-sm text-[#403B32]/75 font-nunito mt-2">
            El aislamiento geográfico, el clima y los procesos evolutivos hacen que estas especies desarrollen adaptaciones irreemplazables. Cuando su hábitat sufre alteraciones, sus poblaciones completas pueden verse en grave peligro.
          </p>
        </div>

        {/* 3 Main Concept Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          {/* Card 1: Territorio */}
          <div className="bg-[#F3E9D5] p-6 rounded-xl border border-[#403B32]/15 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#285744] text-[#F3E9D5] flex items-center justify-center mb-4 shadow-xs">
              <MapPin className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono font-bold text-[#B85F40] uppercase tracking-wider mb-1">
              CONCEPTO 01
            </span>
            <h3 className="font-boogaloo text-2xl text-[#285744] mb-2">
              TERRITORIO LIMITADO
            </h3>
            <p className="text-sm text-[#403B32]/85 font-nunito leading-relaxed">
              Su presencia en estado silvestre está acotada a una zona geográfica específica. Fuera de ese rango natural, no existe de forma silvestre en ninguna otra parte del mundo.
            </p>
          </div>

          {/* Card 2: Adaptación */}
          <div className="bg-[#F3E9D5] p-6 rounded-xl border border-[#403B32]/15 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#D6AD4E] text-[#403B32] flex items-center justify-center mb-4 shadow-xs">
              <Sprout className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono font-bold text-[#B85F40] uppercase tracking-wider mb-1">
              CONCEPTO 02
            </span>
            <h3 className="font-boogaloo text-2xl text-[#285744] mb-2">
              ADAPTACIÓN AL ENTORNO
            </h3>
            <p className="text-sm text-[#403B32]/85 font-nunito leading-relaxed">
              Forma parte de un ecosistema con condiciones singulares de clima, suelo, altitud y disponibilidad hídrica, estableciendo vínculos esenciales con polinizadores y otras especies locales.
            </p>
          </div>

          {/* Card 3: Conservación */}
          <div className="bg-[#F3E9D5] p-6 rounded-xl border border-[#403B32]/15 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#B85F40] text-[#F3E9D5] flex items-center justify-center mb-4 shadow-xs">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono font-bold text-[#B85F40] uppercase tracking-wider mb-1">
              CONCEPTO 03
            </span>
            <h3 className="font-boogaloo text-2xl text-[#285744] mb-2">
              ALTA PRIORIDAD DE CUIDADO
            </h3>
            <p className="text-sm text-[#403B32]/85 font-nunito leading-relaxed">
              Al contar con un área de distribución reducida, cualquier perturbación local (deforestación, incendios o sobreexplotación) impacta directamente a una fracción sustancial de su población mundial.
            </p>
          </div>

        </div>

        {/* Tipos de Endemismo & Escalas */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="font-boogaloo text-3xl text-[#285744]">
              TIPOS Y ESCALAS DE ENDEMISMO
            </h3>
            <div className="h-0.5 flex-1 bg-[#403B32]/15" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg bg-[#FAF6ED] border border-[#285744]/20 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-[#285744] mb-1">ESCALA LOCAL</div>
                <h4 className="font-boogaloo text-xl text-[#285744] mb-2">Endémica de una región</h4>
                <p className="text-xs sm:text-sm text-[#403B32]/80 font-nunito leading-relaxed mb-3">
                  Su distribución natural es muy estrecha, por ejemplo limitada a valles del Altiplano potosino o a cavernas de la Huasteca.
                </p>
              </div>
              <div className="text-xs italic font-nunito text-[#B85F40] bg-[#F3E9D5] p-2 rounded">
                Ejemplo potosino: Cactácea Peotillo (Pelecyphora aselliformis)
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#FAF6ED] border border-[#285744]/20 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-[#285744] mb-1">ESCALA NACIONAL</div>
                <h4 className="font-boogaloo text-xl text-[#285744] mb-2">Endémica de México</h4>
                <p className="text-xs sm:text-sm text-[#403B32]/80 font-nunito leading-relaxed mb-3">
                  Solo habita dentro de las fronteras de la República Mexicana, aunque puede estar presente en varios estados contiguos.
                </p>
              </div>
              <div className="text-xs italic font-nunito text-[#B85F40] bg-[#F3E9D5] p-2 rounded">
                Ejemplo: Perrito llanero mexicano y Ardilla de Peters
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#FAF6ED] border border-[#285744]/20 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-[#285744] mb-1">ESCALA CONTINENTAL</div>
                <h4 className="font-boogaloo text-xl text-[#285744] mb-2">Distribución amplia</h4>
                <p className="text-xs sm:text-sm text-[#403B32]/80 font-nunito leading-relaxed mb-3">
                  Especies nativas que se encuentran en México y también en otros países del continente americano de forma natural.
                </p>
              </div>
              <div className="text-xs italic font-nunito text-[#B85F40] bg-[#F3E9D5] p-2 rounded">
                Ejemplo: Águila real (Aquila chrysaetos) o Venado cola blanca
              </div>
            </div>
          </div>
        </div>

        {/* Una diferencia importante: Endémica vs Nativa vs En riesgo */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F3E9D5] border border-[#403B32]/20">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-mono uppercase font-bold text-[#B85F40] tracking-wider">
              PRECISIÓN CIENTÍFICA
            </span>
            <h3 className="font-boogaloo text-3xl text-[#285744] mt-1 mb-2">
              UNA DIFERENCIA CRUCIAL QUE DEBEMOS DISTINGUIR
            </h3>
            <p className="text-sm font-nunito text-[#403B32]/85">
              En divulgación ambiental, estos tres términos suelen confundirse erróneamente. De acuerdo con <strong>CONABIO</strong>, no deben utilizarse como sinónimos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#FAF6ED] p-4 rounded-xl border border-[#403B32]/10">
              <span className="text-xs font-mono font-black text-[#285744] block mb-1">01. ENDÉMICA</span>
              <p className="text-sm font-bold text-[#285744] font-nunito mb-1">Restringida al territorio</p>
              <p className="text-xs text-[#403B32]/80 font-nunito">
                Su distribución natural está exclusivamente delimitada a una zona de referencia (país, región o cueva). No vive silvestre en otro sitio.
              </p>
            </div>

            <div className="bg-[#FAF6ED] p-4 rounded-xl border border-[#403B32]/10">
              <span className="text-xs font-mono font-black text-[#D6AD4E] block mb-1">02. NATIVA</span>
              <p className="text-sm font-bold text-[#403B32] font-nunito mb-1">Propia de la región</p>
              <p className="text-xs text-[#403B32]/80 font-nunito">
                Forma parte del ecosistema sin intervención humana, pero su presencia natural puede extenderse a otros estados o países.
              </p>
            </div>

            <div className="bg-[#FAF6ED] p-4 rounded-xl border border-[#403B32]/10">
              <span className="text-xs font-mono font-black text-[#B85F40] block mb-1">03. EN RIESGO</span>
              <p className="text-sm font-bold text-[#B85F40] font-nunito mb-1">Evaluación de conservación</p>
              <p className="text-xs text-[#403B32]/80 font-nunito">
                Tiene una categoría oficial en la <strong>NOM-059-SEMARNAT-2010</strong> (P, A o Pr) o la Lista Roja de la UICN tras estudios demográficos.
              </p>
            </div>
          </div>

          {/* Mini Interactive Concept Checker */}
          <div className="mt-6 pt-6 border-t border-[#403B32]/15">
            <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold text-[#285744]">
              <HelpCircle className="w-4 h-4 text-[#B85F40]" />
              <span>COMPROBADOR DE CONCEPTOS: ¿TODA ESPECIE NATIVA DE SAN LUIS POTOSÍ ES ENDÉMICA?</span>
            </div>
            
            <div className="flex flex-wrap gap-3 items-center">
              <button
                onClick={() => setSelectedQuizAnswer(0)}
                className={`px-4 py-2 rounded-lg text-sm font-bold font-nunito transition-colors cursor-pointer ${
                  selectedQuizAnswer === 0 
                    ? 'bg-[#B85F40] text-white' 
                    : 'bg-[#FAF6ED] text-[#403B32] hover:bg-[#EAE0CB] border border-[#403B32]/20'
                }`}
              >
                A) Sí, si nació en SLP es endémica
              </button>

              <button
                onClick={() => setSelectedQuizAnswer(1)}
                className={`px-4 py-2 rounded-lg text-sm font-bold font-nunito transition-colors cursor-pointer ${
                  selectedQuizAnswer === 1 
                    ? 'bg-[#285744] text-white' 
                    : 'bg-[#FAF6ED] text-[#403B32] hover:bg-[#EAE0CB] border border-[#403B32]/20'
                }`}
              >
                B) No, puede ser nativa y vivir también en otros estados o países
              </button>
            </div>

            {selectedQuizAnswer !== null && (
              <div className={`mt-3 p-3.5 rounded-lg text-xs sm:text-sm font-nunito flex items-start gap-2.5 ${
                selectedQuizAnswer === 1
                  ? 'bg-[#285744]/10 text-[#285744] border border-[#285744]/30'
                  : 'bg-[#B85F40]/10 text-[#B85F40] border border-[#B85F40]/30'
              }`}>
                {selectedQuizAnswer === 1 ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-[#285744] mt-0.5" />
                    <div>
                      <strong>¡Correcto!</strong> El águila real o el venado cola blanca son nativos de San Luis Potosí pero no son endémicos, pues habitan amplias extensiones del continente. Para ser endémica, su presencia debe restringirse estrictamente a esa zona.
                    </div>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 shrink-0 text-[#B85F40] mt-0.5" />
                    <div>
                      <strong>Aclaración importante:</strong> No. Que una planta o animal viva de forma natural en San Luis Potosí no significa que sea endémico. Para considerarse endémico debe tener su distribución geográfica delimitada y no existir de forma natural fuera de ella.
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
