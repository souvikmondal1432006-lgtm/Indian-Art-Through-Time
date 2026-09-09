import { Artifact, Period } from '../types'
import ArtifactCard from './ArtifactCard'

interface Props {
  periods: Period[]
  artifacts: Artifact[]
  activePeriodId: string | null
  onSelectEra: (id: string | null) => void
  onOpenArtifact: (artifact: Artifact) => void
}

export default function VerticalTimelineMobile({
  periods,
  artifacts,
  activePeriodId,
  onSelectEra,
  onOpenArtifact,
}: Props) {
  // Sort artifacts chronologically
  const sortedArtifacts = [...artifacts].sort((a, b) => a.sortYear - b.sortYear)
  const activePeriod = periods.find((p) => p.id === activePeriodId)

  return (
    <div className="relative bg-[#FBF8F2] border border-[#E7DEC8] p-4 sm:p-6 shadow-subtle">
      {/* Mobile Title */}
      <div className="pb-3 border-b border-[#E7DEC8] mb-4">
        <span className="text-[10px] font-body uppercase tracking-[0.2em] text-terracotta font-semibold">
          Mobile Museum View
        </span>
        <h2 className="font-display text-2xl text-charcoal font-medium mt-0.5">
          Chronological Exhibition Flow
        </h2>
        <p className="text-xs text-charcoal-muted font-body mt-1">
          Explore South Asian artistic lineage from 30,000 BCE to the contemporary era.
        </p>
      </div>

      {/* Mobile Era Jumper Bar (Horizontal scrollable) */}
      <div className="mb-5 overflow-x-auto timeline-rail pb-2">
        <div className="flex items-center gap-1.5 min-w-max">
          <button
            onClick={() => onSelectEra(null)}
            className={`px-2.5 py-1 text-[11px] font-body uppercase tracking-wider border ${
              activePeriodId === null
                ? 'bg-charcoal text-ivory border-charcoal font-medium'
                : 'bg-[#FCFAF7] text-charcoal-muted border-[#D5C9B3]'
            }`}
          >
            All Eras
          </button>
          {periods.map((p) => {
            const isActive = activePeriodId === p.id
            return (
              <button
                key={p.id}
                onClick={() => onSelectEra(isActive ? null : p.id)}
                className={`px-2.5 py-1 text-[11px] font-body uppercase tracking-wider border ${
                  isActive
                    ? 'bg-terracotta text-ivory border-terracotta font-medium'
                    : 'bg-[#FCFAF7] text-charcoal-muted border-[#D5C9B3]'
                }`}
              >
                {p.shortLabel}
              </button>
            )
          })}
        </div>
      </div>

      {/* Focused Era Intro if active */}
      {activePeriod && (
        <div className="mb-6 p-4 bg-[#F5EDE1] border-l-2 border-terracotta">
          <span className="text-[10px] uppercase font-body text-terracotta font-semibold tracking-wider block mb-0.5">
            {activePeriod.dateRange}
          </span>
          <h3 className="font-display text-xl text-charcoal font-medium uppercase">
            {activePeriod.name}
          </h3>
          <p className="mt-1.5 text-xs text-charcoal-soft font-body font-light leading-relaxed">
            {activePeriod.blurb}
          </p>
        </div>
      )}

      {/* Vertical Spine */}
      <div className="relative pl-6 sm:pl-8 space-y-6">
        {/* Continuous Vertical Line */}
        <div className="absolute left-2 sm:left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-gold via-terracotta to-charcoal/40" />

        {sortedArtifacts.length === 0 ? (
          <div className="py-12 text-center text-charcoal-muted font-body">
            <p className="font-display text-lg text-charcoal mb-1">No masterworks match this filter</p>
            <p className="text-xs">Try clearing your filters above.</p>
          </div>
        ) : (
          sortedArtifacts.map((artifact) => {
            const period = periods.find((p) => p.id === artifact.periodId)
            const isEraActive = activePeriodId === artifact.periodId

            return (
              <div key={artifact.id} className="relative">
                {/* Timeline Dot on Spine */}
                <div
                  className={`absolute -left-[27px] sm:-left-[35px] top-3.5 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    isEraActive
                      ? 'bg-terracotta border-terracotta ring-4 ring-terracotta/25 scale-110'
                      : 'bg-[#FAF6EF] border-[#8C7E6F]'
                  }`}
                />

                {/* Date tag */}
                <div className="mb-1.5">
                  <span className="text-[11px] font-display text-terracotta font-medium tracking-wide">
                    {artifact.dateRange} · {period?.shortLabel}
                  </span>
                </div>

                <ArtifactCard
                  artifact={artifact}
                  onOpen={() => onOpenArtifact(artifact)}
                />
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
