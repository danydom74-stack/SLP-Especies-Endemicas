export type EndemismType = 
  | 'Endémica de México'
  | 'Nativa de San Luis Potosí'
  | 'Distribución por verificar'
  | 'Endémica regional';

export type ConservationRisk = 
  | 'En peligro de extinción (P)'
  | 'Sujeta a protección especial (Pr)'
  | 'Amenazada (A)'
  | 'Preocupación menor (LC)'
  | 'Por verificar en NOM-059';

export interface Species {
  id: string;
  commonName: string;
  scientificName: string;
  category: 'Fauna' | 'Flora';
  group: 'Mamífero' | 'Ave' | 'Reptil' | 'Cactácea' | 'Orquídea' | 'Anfibio';
  image: string;
  imageAlt: string;
  fieldPlateNumber?: string;
  shortDescription: string;
  badgeLabel: string;
  endemismType: EndemismType;
  riskStatus: ConservationRisk;
  iucnStatus?: string;
  distributionSLP: string;
  distributionGeneral: string;
  habitatDescription: string;
  ecologicalRole: string;
  documentedThreats: string;
  sourceCitation: string;
  consultationDate: string;
  registeredLocations?: string[];
  keyNotes?: string;
}

export interface RegionInfo {
  id: string;
  name: string;
  subtitle: string;
  province: string;
  climate: string;
  vegetation: string;
  altitudeRange: string;
  description: string;
  keyFeatures: string[];
  associatedSpeciesIds: string[];
  color: string;
}

export interface ThreatItem {
  id: string;
  number: string;
  title: string;
  description: string;
  exampleSLP: string;
  affectedSpeciesHint: string;
}
