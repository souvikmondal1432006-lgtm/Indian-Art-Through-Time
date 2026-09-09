import { Artifact, Region, ArtForm } from '../types'

export const REGION_ALIASES: Record<string, string[]> = {
  'South India': [
    'south india',
    'south',
    'southern india',
    'tamil nadu',
    'karnataka',
    'kerala',
    'andhra pradesh',
    'telangana',
    'mamallapuram',
    'thanjavur',
    'halebidu',
  ],
  'North India': [
    'north india',
    'north',
    'northern india',
    'kashmir',
    'delhi',
    'punjab',
    'uttar pradesh',
    'himachal',
    'sarnath',
    'gandhara',
    'kangra',
  ],
  'East India': [
    'east india',
    'east',
    'eastern india',
    'bihar',
    'bengal',
    'odisha',
    'kolkata',
    'konark',
    'didarganj',
    'nalanda',
    'madhubani',
    'kalighat',
  ],
  'West India': [
    'west india',
    'west',
    'western india',
    'maharashtra',
    'gujarat',
    'rajasthan',
    'goa',
    'indus valley',
    'mohenjo-daro',
    'ajanta',
    'ellora',
    'warli',
  ],
  'Central India': [
    'central india',
    'central',
    'madhya pradesh',
    'chhattisgarh',
    'bhimbetka',
    'sanchi',
    'khajuraho',
  ],
  'Northeast India': [
    'northeast india',
    'northeast',
    'north-east',
    'assam',
    'tripura',
    'meghalaya',
    'unakoti',
    'majuli',
    'tezpur',
    'daparbatia',
  ],
}

/**
 * Checks if an artifact matches the selected region filter with alias and location tolerance.
 */
export function matchesRegion(artifact: Artifact, selectedRegion: Region | null): boolean {
  if (!selectedRegion) return true
  if (artifact.region === selectedRegion) return true

  const aliases = REGION_ALIASES[selectedRegion]
  if (!aliases) return false

  const target = `${artifact.region} ${artifact.specificLocation || ''} ${artifact.name}`.toLowerCase()
  return aliases.some((alias) => target.includes(alias))
}

/**
 * Checks if an artifact matches the selected art form filter.
 */
export function matchesArtForm(artifact: Artifact, selectedArtForm: ArtForm | null): boolean {
  if (!selectedArtForm) return true
  if (artifact.artForm === selectedArtForm) return true

  // Support Modern Art matching Modern / Contemporary
  if (selectedArtForm === 'Modern Art') {
    return (
      artifact.artForm === 'Modern Art' ||
      artifact.periodId === 'contemporary' ||
      (artifact.traditionTrack === 'Painting' && artifact.periodId === 'colonial')
    )
  }

  // Support Folk Art / Tribal Art matching
  if (selectedArtForm === 'Folk Art') {
    return artifact.artForm === 'Folk Art' || artifact.traditionTrack === 'Folk / Regional'
  }

  return artifact.artForm === selectedArtForm
}
