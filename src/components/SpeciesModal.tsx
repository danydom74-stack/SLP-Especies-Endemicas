import React, { useState } from 'react';
import { X, Copy, Check, MapPin, Trees, ShieldAlert, Info } from 'lucide-react';
import { Species } from '../types';

interface SpeciesModalProps {
  species: Species | null;
  onClose: () => void;
}

export const SpeciesModal: React.FC<SpeciesModalProps> = ({
  species,
  onClose,
}) => {
  const [copiedCitation, setCopiedCitation] = useState(false);

  if (!species) return null;

  const handleCopyCitation = () => {
    const text = `${species.scientificName} (${species.commonName}). Expediente Natural · San Luis Potosí. Fuentes: ${species.sourceCitation}. Consultado: ${species.consultationDate}.`;
    navigator.clipboard.writeText(text);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Content - Field Notebook Dossier Paper */}
      <div 
        className="relative bg-[#FAF6ED] w-full max-w-4xl rounded-2xl shadow-2xl border-2 border-[#403B32]/30 overflow-hidden my-auto max-h-[92vh] flex flex-col z-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-species-title"
      >
        {/* Top Field Plate Header Banner */}
        <div className="bg-[#EFE3C7] px-5 py-3 border-b border-[#403B32]/20 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#403B32]">
            <span className="px-2 py-0.5 bg-[#285744] text-[#F3E9D5] rounded text-[11px]">
              {species.fieldPlateNumber || 'EXP-SLP'}
            </span>
            <span className="hidden sm:inline">FICHA TÉCNICA DE BIODIVERSIDAD</span>
            <span>· {species.category.toUpperCase()} / {species.group.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 text-[#403B32] hover:text-[#B85F40] hover:bg-[#E2D4BA] rounded-md transition-colors cursor-pointer"
              aria-label="Cerrar ficha"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Dossier Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          
          {/* Title and Identification Header */}
          <div className="border-b border-[#403B32]/15 pb-4">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 bg-[#285744]/10 text-[#285744] text-xs font-bold font-mono rounded">
                {species.badgeLabel}
              </span>
              <span className="text-xs text-[#403B32]/70 font-mono">
                NOM-059: <strong className="text-[#B85F40]">{species.riskStatus}</strong>
              </span>
              {species.iucnStatus && (
                <span className="text-xs text-[#403B32]/70 font-mono">
                  · UICN: <strong>{species.iucnStatus}</strong>
                </span>
              )}
            </div>

            <h2 id="modal-species-title" className="font-boogaloo text-3xl sm:text-4xl text-[#285744]">
              {species.commonName}
            </h2>
            <p className="font-serif-botanical italic text-lg sm:text-xl text-[#B85F40]">
              {species.scientificName}
            </p>
          </div>

          {/* Grid: Image Plate & Key Quick Attributes */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Naturalist Illustration Card */}
            <div className="md:col-span-6 bg-[#F3E9D5] p-3 rounded-xl border border-[#403B32]/20 shadow-xs">
              <div className="overflow-hidden rounded-lg aspect-4/3 bg-[#EAE0CB] border border-[#403B32]/15">
                <img
                  src={species.image}
                  alt={species.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-[#403B32]/75 px-1">
                <span>Ilustración botánica / faunística</span>
                <span>REG. POTOSÍ</span>
              </div>
            </div>

            {/* Quick Field Highlights */}
            <div className="md:col-span-6 space-y-3 font-nunito">
              <div className="p-3.5 bg-[#F3E9D5]/70 rounded-lg border border-[#403B32]/10">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#285744] mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Distribución en San Luis Potosí</span>
                </div>
                <p className="text-xs sm:text-sm text-[#403B32]/90 leading-relaxed">
                  {species.distributionSLP}
                </p>
              </div>

              <div className="p-3.5 bg-[#F3E9D5]/70 rounded-lg border border-[#403B32]/10">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#285744] mb-1">
                  <Trees className="w-3.5 h-3.5" />
                  <span>Hábitat y Tipo de Vegetación</span>
                </div>
                <p className="text-xs sm:text-sm text-[#403B32]/90 leading-relaxed">
                  {species.habitatDescription}
                </p>
              </div>

              {species.registeredLocations && species.registeredLocations.length > 0 && (
                <div className="p-3 bg-[#EFE3C7]/60 rounded-lg border border-[#403B32]/10">
                  <p className="text-[11px] font-mono font-bold text-[#B85F40] uppercase mb-1">
                    Localidades con registro específico:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {species.registeredLocations.map((loc) => (
                      <span key={loc} className="px-2 py-0.5 bg-[#FAF6ED] text-[11px] text-[#403B32] font-mono rounded border border-[#403B32]/15">
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Detailed Field Information Sections */}
          <div className="space-y-4 font-nunito pt-2 border-t border-[#403B32]/15">
            
            {/* Papel Ecológico */}
            <div className="p-4 bg-[#F3E9D5] rounded-xl border border-[#403B32]/10">
              <h3 className="font-boogaloo text-xl text-[#285744] mb-1 flex items-center gap-2">
                <span>Papel Ecológico en el Ecosistema</span>
              </h3>
              <p className="text-sm text-[#403B32]/90 leading-relaxed">
                {species.ecologicalRole}
              </p>
            </div>

            {/* Amenazas Documentadas */}
            <div className="p-4 bg-[#FAF0E6] rounded-xl border border-[#B85F40]/30">
              <h3 className="font-boogaloo text-xl text-[#B85F40] mb-1 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#B85F40]" />
                <span>Amenazas Documentadas para la Especie</span>
              </h3>
              <p className="text-sm text-[#403B32]/90 leading-relaxed">
                {species.documentedThreats}
              </p>
            </div>

            {/* Scientific Caution Note */}
            {species.keyNotes && (
              <div className="p-3.5 bg-[#F3E9D5]/90 rounded-lg border-l-3 border-[#285744] flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#285744] shrink-0 mt-0.5" />
                <p className="text-xs text-[#403B32]/85 italic">
                  <strong>Nota metodológica:</strong> {species.keyNotes}
                </p>
              </div>
            )}

            {/* Sources & Consultation */}
            <div className="p-3.5 bg-[#EFE3C7]/80 rounded-lg text-xs font-mono text-[#403B32]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border border-[#403B32]/15">
              <div>
                <span className="font-bold text-[#285744]">Fuente documentada: </span>
                {species.sourceCitation}
              </div>
              <div className="text-[11px] text-[#403B32]/60 whitespace-nowrap">
                Consulta: {species.consultationDate}
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="bg-[#EFE3C7] px-5 py-3 border-t border-[#403B32]/20 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleCopyCitation}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold text-[#403B32] hover:text-[#285744] hover:bg-[#FAF6ED] rounded transition-colors cursor-pointer border border-[#403B32]/20"
          >
            {copiedCitation ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedCitation ? '¡Cita copiada!' : 'Copiar cita bibliográfica'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-1.5 bg-[#285744] text-[#F3E9D5] hover:bg-[#1E4435] text-xs font-bold font-nunito rounded transition-colors cursor-pointer"
          >
            Cerrar Ficha
          </button>
        </div>

      </div>
    </div>
  );
};
