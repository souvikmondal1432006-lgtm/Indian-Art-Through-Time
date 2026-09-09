import { Search, X, RotateCcw } from 'lucide-react'
import { ArtForm, Region } from '../types'
import { artifacts } from '../data/artifacts'
import { periods } from '../data/periods'
import { matchesRegion, matchesArtForm } from '../utils/filterHelpers'

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
  const activePeriod = periods.find((p) => p.id === filters.periodId)

  const clearAll = () => {
    onChange({ query: '', periodId: null, region: null, artForm: null })
  }

  const handleRegionClick = (val: Region | null) => {
    if (val && filters.periodId) {
      // If active era has no works for this region, reset era to show all region works
      const hasMatchInEra = artifacts.some(
        (a) => a.periodId === filters.periodId && matchesRegion(a, val)
      )
      if (!hasMatchInEra) {
        onChange({ ...filters, region: val, periodId: null })
        return
      }
    }
    onChange({ ...filters, region: val })
  }

  const handleArtFormClick = (val: ArtForm | null) => {
    if (val && filters.periodId) {
      // If active era has no works for this art form, reset era to show all art form works
      const hasMatchInEra = artifacts.some(
        (a) => a.periodId === filters.periodId && matchesArtForm(a, val)
      )
      if (!hasMatchInEra) {
        onChange({ ...filters, artForm: val, periodId: null })
        return
      }
    }
    onChange({ ...filters, artForm: val })
  }

  return (
    <div id="filters" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-5 pb-1">
      {/* Search Input Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
        <input
          type="text"
          value={filters.query}
          onChange={(e) => onChange({ ...filters, query: e.target.value })}
          placeholder="Search artworks, artists, traditions, regions..."
          className="w-full bg-[#FCFAF7] border border-[#DCD1BE] hover:border-gold focus:border-terracotta rounded-none pl-11 pr-11 py-3 font-body text-sm text-charcoal placeholder:text-charcoal-muted/60 focus:outline-none focus:ring-1 focus:ring-terracotta shadow-subtle transition-colors"
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

      {/* Filter Chips Bar — Clean Rectangular Editorial Style */}
      <div className="bg-[#FBF8F2] border border-[#E7DEC8] p-4 space-y-3 shadow-subtle">
        {/* Tradition / Art Form Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="font-body text-[11px] uppercase tracking-widest text-charcoal-muted font-medium w-24 shrink-0">
            Art Form:
          </span>
          <div className="flex gap-1.5 overflow-x-auto pb-1 timeline-rail flex-1">
            {ART_FORM_OPTIONS.map((opt) => {
              const isActive = filters.artForm === opt.value
              return (
                <button
                  key={opt.label}
                  onClick={() => handleArtFormClick(opt.value)}
                  className={`px-3 py-1.5 text-[11px] font-body uppercase tracking-wider transition-all duration-150 whitespace-nowrap border ${
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
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2.5 border-t border-[#EFE8DC]">
          <span className="font-body text-[11px] uppercase tracking-widest text-charcoal-muted font-medium w-24 shrink-0">
            Region:
          </span>
          <div className="flex gap-1.5 overflow-x-auto pb-1 timeline-rail flex-1">
            {REGION_OPTIONS.map((opt) => {
              const isActive = filters.region === opt.value
              return (
                <button
                  key={opt.label}
                  onClick={() => handleRegionClick(opt.value)}
                  className={`px-3 py-1.5 text-[11px] font-body uppercase tracking-wider transition-all duration-150 whitespace-nowrap border ${
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

      {/* Active Filter Chips & Status Indicator */}
      <div className="flex flex-wrap items-center justify-between gap-3 mt-3 text-xs font-body text-charcoal-muted px-1">
        <div className="flex flex-wrap items-center gap-2">
          <span>
            Showing <strong className="font-medium text-charcoal">{resultCount}</strong> of {artifacts.length} masterworks
          </span>

          {/* Active Era Tag if filtering by era */}
          {activePeriod && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#EDE4D5] border border-[#D5C9B3] text-charcoal text-[11px]">
              <span>Era: <strong>{activePeriod.shortLabel}</strong></span>
              <button
                onClick={() => onChange({ ...filters, periodId: null })}
                className="hover:text-terracotta ml-0.5"
                title="Remove era filter"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filters.region && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#EDE4D5] border border-[#D5C9B3] text-charcoal text-[11px]">
              <span>Region: <strong>{filters.region}</strong></span>
              <button
                onClick={() => onChange({ ...filters, region: null })}
                className="hover:text-terracotta ml-0.5"
                title="Remove region filter"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filters.artForm && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#EDE4D5] border border-[#D5C9B3] text-charcoal text-[11px]">
              <span>Form: <strong>{filters.artForm}</strong></span>
              <button
                onClick={() => onChange({ ...filters, artForm: null })}
                className="hover:text-terracotta ml-0.5"
                title="Remove art form filter"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filters.query && (
            <span className="text-charcoal-soft">
              matching "<em>{filters.query}</em>"
            </span>
          )}
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="inline-flex items-center gap-1 text-xs font-body text-terracotta hover:text-terracotta-dark font-medium tracking-wide uppercase transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>RESET ALL FILTERS</span>
          </button>
        )}
      </div>
    </div>
  )
}
