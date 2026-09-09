export type Region =
  | 'North India'
  | 'South India'
  | 'East India'
  | 'West India'
  | 'Central India'
  | 'Northeast India'

export type ArtForm =
  | 'Painting'
  | 'Sculpture'
  | 'Architecture'
  | 'Textile'
  | 'Folk Art'
  | 'Tribal Art'
  | 'Religious Art'
  | 'Modern Art'

export type PeriodId =
  | 'prehistoric'
  | 'mauryan'
  | 'classical'
  | 'medieval'
  | 'mughal'
  | 'regional'
  | 'colonial'
  | 'contemporary'

export interface Period {
  id: PeriodId
  name: string
  shortLabel: string
  dateRange: string
  sortYear: number // approximate midpoint or start year (negative = BCE) used for ordering
  blurb: string
  accent: string // tailwind color class fragment, e.g. 'terracotta'
  didYouKnow: string[]
  majorArtForms: string[]
  materials: string[]
  themes: string[]
  regionsInvolved: string[]
  developments: string[]
}

export type TraditionTrack =
  | 'Sculpture'
  | 'Painting'
  | 'Architecture'
  | 'Folk / Regional'
  | 'Textile / Craft'

export type ThematicThread =
  | 'Devotion'
  | 'Nature'
  | 'Power'
  | 'Everyday Life'

export interface ComparisonInfo {
  purpose: string
  themes: string[]
  visualLanguage: string
}

export interface Artifact {
  id: string
  catalogNumber: string
  name: string
  periodId: PeriodId
  dateRange: string
  sortYear: number
  region: Region
  specificLocation?: string
  artForm: ArtForm
  traditionTrack: TraditionTrack
  thematicThread: ThematicThread
  medium: string
  technique: string
  institutionalSource: string
  image: string
  imageAlt: string
  imageAttribution: string
  shortDescription: string
  story: string[]
  whyItMatters: string
  didYouKnow: string
  comparisonData: ComparisonInfo
  // Legacy / fallback fields
  historicalContext?: string
  culturalSignificance?: string
  visualCharacteristics?: string
  importance?: string
  relatedTraditions: string[]
}
