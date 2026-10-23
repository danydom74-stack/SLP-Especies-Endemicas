import React, { useState, useEffect } from 'react';
import { X, BookOpen, Trash2, ArrowRight, Printer, Check, BookmarkX } from 'lucide-react';
import { Species } from '../types';
import { SPECIES_DATA } from '../data/speciesData';

interface FieldNotebookDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedSpeciesIds: string[];
  onRemoveSpecies: (id: string) => void;
  onOpenSpecies: (species: Species) => void;
}

export const FieldNotebookDrawer: React.FC<FieldNotebookDrawerProps> = ({
  isOpen,
  onClose,
  savedSpeciesIds,
  onRemoveSpecies,
  onOpenSpecies,
}) => {
  const [personalNotes, setPersonalNotes] = useState<{ [key: string]: string }>({});

  // Load notes from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('expediente_slp_notes');
      if (stored) {
        setPersonalNotes(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleNoteChange = (speciesId: string, note: string) => {
    const updated = { ...personalNotes, [speciesId]: note };
    setPersonalNotes(updated);
    try {
      localStorage.setItem('expediente_slp_notes', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  if (!isOpen) return null;

  const savedSpeciesList = SPECIES_DATA.filter((s) => savedSpeciesIds.includes(s.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md sm:max-w-lg bg-[#FAF6ED] h-full shadow-2xl border-l-2 border-[#403B32]/30 flex flex-col z-10 font-nunito">
        
        {/* Header Notebook Strip */}
        <div className="p-5 bg-[#EFE3C7] border-b border-[#403B32]/20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#285744] text-[#F3E9D5] rounded-md">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-boogaloo text-2xl text-[#285744] leading-tight">
                Mi Cuaderno de Campo
              </h3>
              <p className="text-[11px] font-mono text-[#403B32]/70 uppercase">
                {savedSpeciesList.length} registro(s) guardado(s)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#403B32] hover:text-[#B85F40] hover:bg-[#E2D4BA] rounded-md transition-colors cursor-pointer"
            aria-label="Cerrar cuaderno"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notebook Content List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-notebook-grid">
          {savedSpeciesList.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-14 h-14 rounded-full bg-[#EAE0CB] text-[#403B32]/60 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-boogaloo text-2xl text-[#285744] mb-2">
                Tu libreta está vacía
              </h4>
              <p className="text-xs sm:text-sm text-[#403B32]/80 leading-relaxed mb-6">
                Recorre el <strong>Archivo de Especies</strong> y pulsa el ícono de marcapáginas o <em>"Añadir a mi cuaderno"</em> para registrar las especies que desees estudiar o anotar observaciones de campo.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-[#285744] text-[#F3E9D5] text-xs font-bold rounded-lg cursor-pointer"
              >
                Explorar especies ahora
              </button>
            </div>
          ) : (
            savedSpeciesList.map((species) => (
              <div
                key={species.id}
                className="bg-[#FAF6ED] p-4 rounded-xl border border-[#403B32]/20 shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#EAE0CB] overflow-hidden shrink-0 border border-[#403B32]/10">
                      <img
                        src={species.image}
                        alt={species.commonName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-boogaloo text-xl text-[#285744] leading-tight">
                        {species.commonName}
                      </h4>
                      <p className="font-serif-botanical italic text-xs text-[#B85F40]">
                        {species.scientificName}
                      </p>
                      <span className="text-[10px] font-mono text-[#403B32]/60 block mt-0.5">
                        {species.badgeLabel}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveSpecies(species.id)}
                    className="p-1.5 text-[#403B32]/50 hover:text-[#B85F40] transition-colors cursor-pointer"
                    title="Remover del cuaderno"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Personal Field Note Textarea */}
                <div>
                  <label className="text-[10px] font-mono font-bold text-[#285744] uppercase block mb-1">
                    Mis notas de observación o tareas:
                  </label>
                  <textarea
                    rows={2}
                    value={personalNotes[species.id] || ''}
                    onChange={(e) => handleNoteChange(species.id, e.target.value)}
                    placeholder="Escribe tus notas, preguntas para clase o dudas bibliográficas..."
                    className="w-full p-2 bg-[#F3E9D5]/70 border border-[#403B32]/15 rounded text-xs text-[#403B32] font-nunito focus:outline-none focus:ring-1 focus:ring-[#285744]"
                  />
                </div>

                <div className="flex items-center justify-end">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenSpecies(species);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#285744] hover:text-[#B85F40] cursor-pointer"
                  >
                    <span>Ver ficha completa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        {savedSpeciesList.length > 0 && (
          <div className="p-4 bg-[#EFE3C7] border-t border-[#403B32]/20 flex items-center justify-between gap-3 shrink-0">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAF6ED] text-[#403B32] hover:bg-[#FAF0E6] rounded text-xs font-bold border border-[#403B32]/20 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir cuaderno</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-[#285744] text-[#F3E9D5] rounded text-xs font-bold hover:bg-[#1E4435] cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
