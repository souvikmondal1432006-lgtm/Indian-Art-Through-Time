import { Search, X, RotateCcw, Sparkles } from 'lucide-react'
import { ArtForm, Region } from '../types'
import { periods } from '../data/periods'
import { artifacts } from '../data/artifacts'
import { sounds } from '../utils/audioChimes'

const artForms: ArtForm[] = [
  'Painting',
  'Sculpture',
  'Architecture',
  'Textile',
  'Folk Art',
  'Tribal Art',
  'Modern Art',
]

const regions: Region[] = [
  'North India',
  'South India',
  'East India',
  'West India',
  'Central India',
  'Northeast India',
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

function Chip({
  label,
  count,
  active,
  onClick,
}: {
  label: string
  count?: number
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={() => {
        sounds.playScrollClick()
        onClick()
      }}
      className={`px-3 py-1.5 rounded-full text-xs font-display border transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
        active
          ? 'bg-terracotta text-parchment-light border-terracotta shadow-md scale-105 font-medium'
          : 'bg-white/70 text-charcoal-soft border-gold/30 hover:border-gold hover:text-charcoal hover:bg-gold/10'
      }`}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span
          className={`text-[10px] px-1.5 py-0.2 rounded-full ${
            active ? 'bg-black/20 text-parchment' : 'bg-charcoal/10 text-charcoal-soft'
          }`}
        >
          {count}
        </span>
      )}
    </button>
  )
}

export default function FilterControls({ filters, onChange, resultCount }: Props) {
  const hasActiveFilters = Boolean(filters.query || filters.periodId || filters.region || filters.artForm)

  const clearAll = () => {
    sounds.playTempleBell(440)
    onChange({ query: '', periodId: null, region: null, artForm: null })
  }

  // Precompute counts for filters
  const eraCounts = periods.reduce((acc, p) => {
    acc[p.id] = artifacts.filter((a) => a.periodId === p.id).length
    return acc
  }, {} as Record<string, number>)

  const regionCounts = regions.reduce((acc, r) => {
    acc[r] = artifacts.filter((a) => a.region === r).length
    return acc
  }, {} as Record<string, number>)

  const artFormCounts = artForms.reduce((acc, f) => {
    acc[f] = artifacts.filter((a) => a.artForm === f).length
    return acc
  }, {} as Record<string, number>)

  return (
    <div id="filters" className="max-w-6xl mx-auto px-6 md:px-10 pt-4 pb-2">
      {/* Search Bar with gold border */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gold" />
        <input
          type="text"
          value={filters.query}
          onChange={(e) => onChange({ ...filters, query: e.target.value })}
          placeholder="Search by masterwork, dynasty, region, material (e.g. lost-wax, sandstone, Chola, Assam)..."
          className="w-full bg-[#FDFBF7] border border-gold/40 rounded-md pl-11 pr-11 py-3.5 font-body text-sm text-charcoal placeholder:text-charcoal-soft/50 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none shadow-sm transition-colors"
          aria-label="Search artifacts"
        />
        {filters.query && (
          <button
            onClick={() => onChange({ ...filters, query: '' })}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-soft/60 hover:text-terracotta"
            aria-label="Clear search"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        )}
      </div>

      <div className="space-y-4 bg-parchment-light/60 p-4 rounded-lg border border-gold/20">
        {/* Era Filters */}
        <div>
          <span className="font-display text-[11px] uppercase tracking-wider text-charcoal-soft/80 block mb-2 font-medium flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-gold" />
            Filter by Historical Epoch
          </span>
          <div className="flex gap-2 overflow-x-auto pb-1.5 -mx-1 px-1 timeline-rail">
            {periods.map((p) => (
              <Chip
                key={p.id}
                label={p.shortLabel}
                count={eraCounts[p.id]}
                active={filters.periodId === p.id}
                onClick={() =>
                  onChange({ ...filters, periodId: filters.periodId === p.id ? null : p.id })
                }
              />
            ))}
          </div>
        </div>

        {/* Region Filters */}
        <div>
          <span className="font-display text-[11px] uppercase tracking-wider text-charcoal-soft/80 block mb-2 font-medium flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-terracotta" />
            Filter by Subcontinent Region
          </span>
          <div className="flex gap-2 overflow-x-auto pb-1.5 -mx-1 px-1 timeline-rail">
            {regions.map((r) => (
              <Chip
                key={r}
                label={r}
                count={regionCounts[r]}
                active={filters.region === r}
                onClick={() => onChange({ ...filters, region: filters.region === r ? null : r })}
              />
            ))}
          </div>
        </div>

        {/* Art Form Filters */}
        <div>
          <span className="font-display text-[11px] uppercase tracking-wider text-charcoal-soft/80 block mb-2 font-medium flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-600" />
            Filter by Art Medium & Tradition
          </span>
          <div className="flex gap-2 overflow-x-auto pb-1.5 -mx-1 px-1 timeline-rail">
            {artForms.map((f) => (
              <Chip
                key={f}
                label={f}
                count={artFormCounts[f]}
                active={filters.artForm === f}
                onClick={() => onChange({ ...filters, artForm: filters.artForm === f ? null : f })}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Results & Clear Filter Row */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-charcoal/10 flex-wrap gap-2">
        <span className="font-display text-sm text-charcoal-soft">
          Showing <strong className="text-terracotta">{resultCount}</strong> of {artifacts.length} masterworks
          {filters.region && <span> in <strong>{filters.region}</strong></span>}
          {filters.periodId && (
            <span> (Era: <strong>{periods.find((p) => p.id === filters.periodId)?.name}</strong>)</span>
          )}
        </span>

        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="font-display text-xs text-terracotta hover:text-terracotta-dark inline-flex items-center gap-1.5 px-3 py-1 rounded bg-terracotta/10 border border-terracotta/20 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset All Filters
          </button>
        )}
      </div>

      {/* Smart Zero Result Suggestion Box */}
      {resultCount === 0 && (
        <div className="mt-4 p-4 rounded-lg bg-amber-50 border border-amber-200/80 text-center">
          <p className="font-display font-medium text-charcoal text-sm">
            No masterworks currently match this specific combination ({filters.region || 'Any region'} + {periods.find(p=>p.id===filters.periodId)?.shortLabel || 'Any era'}).
          </p>
          <div className="mt-2.5 flex items-center justify-center gap-3">
            <button
              onClick={clearAll}
              className="px-4 py-1.5 rounded-sm bg-terracotta text-white font-display text-xs tracking-wider shadow-sm hover:bg-terracotta-dark transition-colors"
            >
              Show All 40 Masterworks
            </button>
            {filters.region && (
              <button
                onClick={() => onChange({ ...filters, periodId: null })}
                className="px-3 py-1.5 rounded-sm bg-white border border-gold text-charcoal font-display text-xs"
              >
                View all in {filters.region}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
