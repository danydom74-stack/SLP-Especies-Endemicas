import { RegionInfo, ThreatItem } from '../types';

export const REGIONS_DATA: RegionInfo[] = [
  {
    id: 'altiplano',
    name: 'Altiplano Potosino',
    subtitle: 'Matorrales, pastizales y zonas áridas',
    province: 'Altiplanicie o Mesa del Centro',
    climate: 'Seco, semiseco y templado con lluvias en verano',
    vegetation: 'Matorral xerófilo (desértico micrófilo y rosetófilo), pastizales naturales y biznagales',
    altitudeRange: '1,700 - 2,500 msnm',
    description: 'Extensas llanuras intermontanas, mesetas y cerros áridos. Es el hogar de la mayor diversidad de cactáceas del continente y de colonias emblemáticas de fauna de pastizal como el perrito llanero.',
    keyFeatures: [
      'Alberga relictos de pastizal natural de gran valor biológico',
      'Zona de alta radiación solar y temperaturas con amplia oscilación térmica diaria',
      'Localidades clave: Venegas, Real de Catorce, Matehuala, Charcas',
      'Suelo predominantemente calcáreo y poco profundo'
    ],
    associatedSpeciesIds: ['perrito-llanero', 'peotillo', 'culebra-sorda', 'aguila-real'],
    color: '#D6AD4E'
  },
  {
    id: 'zona-media',
    name: 'Zona Media',
    subtitle: 'Bosques, valles fértiles y manantiales',
    province: 'Transición entre Altiplanicie y Sierra Madre Oriental',
    climate: 'Semicálido y templado subhúmedo',
    vegetation: 'Matorral submontano, bosques de encino en laderas, vegetación riparia y humedales kársticos',
    altitudeRange: '900 - 1,800 msnm',
    description: 'Territorio de transición ecológica donde convergen planicies semiáridas con manantiales de aguas cristalinas alimentadas por cavernas subterráneas, como la emblemática Laguna de la Media Luna.',
    keyFeatures: [
      'Manantiales termales kársticos con peces endémicos del estado',
      'Valles intermontanos fértiles rodeados de serranías con encinares',
      'Localidades clave: Rioverde, Ciudad Fernández, Rayón, San Ciro de Acosta',
      'Punto de confluencia de rutas migratorias de aves neotropicales'
    ],
    associatedSpeciesIds: ['flor-de-mayo', 'culebra-sorda'],
    color: '#B85F40'
  },
  {
    id: 'sierra-madre',
    name: 'Sierra Madre Oriental',
    subtitle: 'Bosques templados, mesófilos y sierras plegadas',
    province: 'Sierra Madre Oriental',
    climate: 'Templado húmedo a semifrío en las cumbres con neblinas frecuentes',
    vegetation: 'Bosques de pino, encino, oyamel y relictos de bosque mesófilo de montaña',
    altitudeRange: '1,500 - 3,180 msnm',
    description: 'Cordillera escarpada con cañones profundos, farallones rocosos y densa cobertura vegetal. Actúa como barrera orográfica reteniendo la humedad proveniente del Golfo de México.',
    keyFeatures: [
      'Refugio de especies de afinidad boreal y centroamericana',
      'Presencia de áreas naturales protegidas clave como ANP El Potosí',
      'Alta presencia de orquídeas silvestres (Laelia speciosa) y aves forestales',
      'Sitio de anidación preferente para el águila real en farallones rocosos'
    ],
    associatedSpeciesIds: ['ardilla-peters', 'mirlo-pinto', 'flor-de-mayo', 'aguila-real'],
    color: '#285744'
  },
  {
    id: 'huasteca',
    name: 'Huasteca Potosina',
    subtitle: 'Selvas, ríos caudalosos, cascadas y cuevas',
    province: 'Llanura Costera del Golfo Norte y piedemonte oriental',
    climate: 'Cálido húmedo y subhúmedo con lluvias torrenciales en verano',
    vegetation: 'Selva mediana subperennifolia, selva baja caducifolia, vegetación riparia y vegetación cavernícola',
    altitudeRange: '50 - 900 msnm',
    description: 'Una de las regiones biológicamente más ricas de México. Ríos de aguas turquesa, imponentes sótanos kársticos (como las Golondrinas y las Huahuas) y densa selva que alberga felinos y fauna tropical.',
    keyFeatures: [
      'Sistemas subterráneos de cuevas que albergan peces ciegos cavernícolas únicos',
      'Cuencas fluviales de los ríos Santa María, Tampaón y Gallinas',
      'Localidades clave: Aquismón, Xilitla, Ciudad Valles, Tamasopo',
      'Refugio de fauna mayor como jaguar, tigrillo (Leopardus wiedii) y nutria de río'
    ],
    associatedSpeciesIds: ['flor-de-mayo'],
    color: '#1E4D3B'
  }
];

export const PROVINCES_DATA = [
  {
    number: 'I',
    name: 'Altiplanicie o Mesa del Centro',
    shortSummary: 'Amplas llanuras, mesetas, sierras y lomeríos. En distintas áreas predominan ambientes áridos y matorrales.',
    detail: 'Ocupa la mayor porción centro-occidental del estado. Se caracteriza por cuencas cerradas, suelos aluviales y matorrales xerófilos con precipitaciones medias de 300 a 500 mm anuales.',
    icon: 'mountain'
  },
  {
    number: 'II',
    name: 'Sierra Madre Oriental',
    shortSummary: 'Sierras y laderas de relieve accidentado, con condiciones ambientales que cambian según la altitud y la ubicación.',
    detail: 'Franja montañosa que cruza el estado de noroeste a sureste. Provoca el fenómeno de sombra orográfica: laderas orientales sumamente húmedas y laderas occidentales áridas.',
    icon: 'trees'
  },
  {
    number: 'III',
    name: 'Llanura Costera del Golfo Norte',
    shortSummary: 'Comprende el extremo oriental del estado y forma parte de la transición hacia ambientes tropicales de la vertiente del Golfo.',
    detail: 'Planicies bajas y lomeríos suaves surcados por los grandes ríos de la Huasteca, con suelos profundos y clima tropical cálido.',
    icon: 'waves'
  }
];

export const THREATS_DATA: ThreatItem[] = [
  {
    id: 'fragmentacion',
    number: '01',
    title: 'Pérdida y fragmentación del hábitat',
    description: 'Cuando un ambiente natural se transforma o queda dividido en islas aisladas por caminos, desmontes o cercados, las especies pierden rutas de paso, refugios y zonas de cortejo.',
    exampleSLP: 'Afecta críticamente a las colonias del perrito llanero en pastizales de Venegas y a la ardilla de Peters al cortar la continuidad del dosel en bosques serranos.',
    affectedSpeciesHint: 'Perrito llanero · Ardilla de Peters'
  },
  {
    id: 'cambio-suelo',
    number: '02',
    title: 'Cambio de uso del suelo y actividades humanas',
    description: 'La conversión acelerada de matorrales y pastizales nativos hacia agricultura intensiva de riego o desarrollos urbanos elimina la cobertura vegetal originaria.',
    exampleSLP: 'Desmonte de áreas de pastizal nativo en el Altiplano y tala clandestina en laderas de la Sierra de Álvarez.',
    affectedSpeciesHint: 'Cactáceas como el Peotillo · Pastizales nativos'
  },
  {
    id: 'trafico-especies',
    number: '03',
    title: 'Tráfico ilegal de especies y saqueo silvestre',
    description: 'La extracción de organismos vivos de su hábitat para comercio clandestino o coleccionismo privado merma drásticamente las poblaciones reproductoras silvestres.',
    exampleSLP: 'Saqueo de cactáceas globosas del Altiplano (Peotillo) y recolecta ilegal masiva de orquídeas en floración (Laelia speciosa) para venta ambulante.',
    affectedSpeciesHint: 'Peotillo · Flor de mayo · Reptiles'
  },
  {
    id: 'otras-presiones',
    number: '04',
    title: 'Otras presiones ambientales e incendios',
    description: 'Incendios no controlados en épocas de estiaje, sequías prolongadas agravadas por el cambio climático, introducción de especies exóticas y contaminación de acuíferos.',
    exampleSLP: 'Incendios de copa en bosques de pino-encino de la Sierra Madre y sobreexplotación de mantos freáticos en valles agrícolas.',
    affectedSpeciesHint: 'Aves forestales (Mirlo pinto) · Fauna riparia'
  }
];
