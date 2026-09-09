import { Search, X, RotateCcw } from 'lucide-react'
import { ArtForm, Region } from '../types'
import { artifacts } from '../data/artifacts'

const ART_FORM_OPTIONS: { label: string; value: ArtForm | null }[] = [
  { label: 'ALL', value: null },
  { label: 'SCULPTURE', value: 'Sculpture' },
  { label: 'PAINTING', value: 'Painting' },
  { label: 'ARCHITECTURE', value: 'Architecture' },
  { label: 'TEXTILE', value: 'Textile' },
  { label: 'FOLK ART', value: 'Folk Art' },
  { label: 'TRIBAL ART', value: 'Tribal Art' },
  { label: 'MODERN / CONTEMPORARY', value: 'Modern Art' },
]

const REGION_OPTIONS: { label: string; value: Region | null }[] = [
  { label: 'ALL', value: null },
  { label: 'NORTH', value: 'North India' },
  { label: 'SOUTH', value: 'South India' },
  { label: 'EAST', value: 'East India' },
  { label: 'WEST', value: 'West India' },
  { label: 'CENTRAL', value: 'Central India' },
  { label: 'NORTHEAST', value: 'Northeast India' },
]

export interface FilterState {
  query: string
  periodId: string | null
  region: Region | null
  artForm: ArtForm | null
}

interface Props {
  filters: FilterState
  onChange: (next: FilterState) => void
  resultCount: number
}

export default function FilterControls({ filters, onChange, resultCount }: Props) {
  const hasActiveFilters = Boolean(filters.query || filters.periodId || filters.region || filters.artForm)

  const clearAll = () => {
    onChange({ query: '', periodId: null, region: null, artForm: null })
  }

  return (
    <div id="filters" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-6 pb-2">
      {/* Search Input Bar */}
      <div className="relative mb-5">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
        <input
          type="text"
          value={filters.query}
          onChange={(e) => onChange({ ...filters, query: e.target.value })}
          placeholder="Search artworks, artists, traditions..."
          className="w-full bg-[#FCFAF7] border border-[#DCD1BE] hover:border-gold focus:border-terracotta rounded-sm pl-11 pr-11 py-3 font-body text-sm text-charcoal placeholder:text-charcoal-muted/60 focus:outline-none focus:ring-1 focus:ring-terracotta shadow-subtle transition-colors"
          aria-label="Search artworks, artists, traditions"
        />
        {filters.query && (
          <button
            onClick={() => onChange({ ...filters, query: '' })}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-muted hover:text-charcoal p-1"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Chips Bar */}
      <div className="bg-[#FBF8F2] border border-[#E7DEC8] rounded-sm p-4 space-y-3.5 shadow-subtle">
        {/* Category Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="font-body text-[11px] uppercase tracking-widest text-charcoal-muted font-medium w-24 shrink-0">
            Tradition:
          </span>
          <div className="flex gap-1.5 overflow-x-auto pb-1 timeline-rail flex-1">
            {ART_FORM_OPTIONS.map((opt) => {
              const isActive = filters.artForm === opt.value
              return (
                <button
                  key={opt.label}
                  onClick={() => onChange({ ...filters, artForm: opt.value })}
                  className={`px-3 py-1 text-xs font-body uppercase tracking-wider rounded-sm transition-all duration-200 whitespace-nowrap border ${
                    isActive
                      ? 'bg-terracotta text-ivory border-terracotta font-medium shadow-sm'
                      : 'bg-[#FCFAF7] text-charcoal-soft border-[#DFD5C2] hover:border-gold hover:text-charcoal'
                  }`}
                >
                  {opt.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Region Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2 border-t border-[#EFE8DC]">
          <span className="font-body text-[11px] uppercase tracking-widest text-charcoal-muted font-medium w-24 shrink-0">
            Region:
          </span>
          <div className="flex gap-1.5 overflow-x-auto pb-1 timeline-rail flex-1">
            {REGION_OPTIONS.map((opt) => {
              const isActive = filters.region === opt.value
              return (
                <button
                  key={opt.label}
                  onClick={() => onChange({ ...filters, region: opt.value })}
                  className={`px-3 py-1 text-xs font-body uppercase tracking-wider rounded-sm transition-all duration-200 whitespace-nowrap border ${
                    isActive
                      ? 'bg-[#2B241F] text-gold-light border-[#2B241F] font-medium shadow-sm'
                      : 'bg-[#FCFAF7] text-charcoal-soft border-[#DFD5C2] hover:border-gold hover:text-charcoal'
                  }`}
                >
                  {opt.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Results Metadata & Reset Button */}
      <div className="flex items-center justify-between mt-3 text-xs font-body text-charcoal-muted px-1">
        <div>
          Showing <span className="font-medium text-charcoal">{resultCount}</span> of {artifacts.length} masterworks
          {filters.artForm && <span> in <strong className="text-terracotta">{filters.artForm}</strong></span>}
          {filters.region && <span> ({filters.region})</span>}
          {filters.query && <span> matching "<em>{filters.query}</em>"</span>}
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="inline-flex items-center gap-1.5 text-xs font-body text-terracotta hover:text-terracotta-dark font-medium tracking-wide uppercase transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>RESET FILTERS</span>
          </button>
        )}
      </div>
    </div>
  )
}

