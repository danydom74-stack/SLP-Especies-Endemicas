/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { EndemismSection } from './components/EndemismSection';
import { SpeciesSection } from './components/SpeciesSection';
import { HabitatSection } from './components/HabitatSection';
import { ThreatsSection } from './components/ThreatsSection';
import { ConservationSection } from './components/ConservationSection';
import { Footer } from './components/Footer';
import { SpeciesModal } from './components/SpeciesModal';
import { Species } from './types';

export default function App() {
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F3E9D5] text-[#403B32] selection:bg-[#285744] selection:text-[#F3E9D5] flex flex-col font-nunito">
      
      {/* Top Bar Navigation */}
      <Header />

      {/* Main Content Sections (Bloques 01 - 06) */}
      <main className="flex-1">
        
        {/* Bloque 01: Inicio — La riqueza que vive aquí */}
        <HeroSection
          onExploreSpecies={() => handleScrollToSection('especies')}
          onExploreHabitats={() => handleScrollToSection('habitats')}
        />

        {/* Bloque 02: ¿Qué es una especie endémica? */}
        <EndemismSection />

        {/* Bloque 03: Archivo de especies */}
        <SpeciesSection
          onSelectSpecies={(species) => setSelectedSpecies(species)}
        />

        {/* Bloque 04: Explora los hábitats de San Luis Potosí */}
        <HabitatSection
          onSelectSpecies={(species) => setSelectedSpecies(species)}
        />

        {/* Bloque 05: Lo que amenaza su existencia */}
        <ThreatsSection
          onGoToSpecies={() => handleScrollToSection('especies')}
        />

        {/* Bloque 06: Protejamos lo que nos hace únicos */}
        <ConservationSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Species Technical Dossier Modal */}
      <SpeciesModal
        species={selectedSpecies}
        onClose={() => setSelectedSpecies(null)}
      />

    </div>
  );
}
