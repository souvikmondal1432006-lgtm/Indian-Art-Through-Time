import { Artifact, Period } from '../types'
import ArtifactCard from './ArtifactCard'

interface Props {
  periods: Period[]
  artifacts: Artifact[]
  activePeriodId: string | null
  onOpenArtifact: (artifact: Artifact) => void
}

export default function VerticalTimelineMobile({
  periods,
  artifacts,
  activePeriodId,
  onOpenArtifact,
}: Props) {
  // Sort artifacts chronologically
  const sortedArtifacts = [...artifacts].sort((a, b) => a.sortYear - b.sortYear)

  return (
    <div className="relative bg-[#FBF8F2] border border-[#E7DEC8] rounded-sm p-4 sm:p-6 shadow-subtle">
      {/* Mobile Title */}
      <div className="pb-4 border-b border-[#E7DEC8] mb-6">
        <span className="text-[10px] font-body uppercase tracking-[0.2em] text-terracotta font-semibold">
          Mobile Exhibition View
        </span>
        <h2 className="font-display text-2xl text-charcoal font-medium mt-1">
          Chronological Exhibition Flow
        </h2>
        <p className="text-xs text-charcoal-muted font-body mt-1">
          Scroll vertically through South Asian artistic evolution from 30,000 BCE to the contemporary era.
        </p>
      </div>

      {/* Vertical Spine */}
      <div className="relative pl-6 sm:pl-8 space-y-8">
        {/* Continuous Vertical Wire */}
        <div className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-[2px] bg-gradient-to-b from-gold via-terracotta to-charcoal/40" />

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
                  className={`absolute -left-[27px] sm:-left-[35px] top-4 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                    isEraActive
                      ? 'bg-terracotta border-terracotta ring-4 ring-terracotta/20 scale-125'
                      : 'bg-[#FCFAF7] border-[#8C7E6F]'
                  }`}
                />

                {/* Card Item */}
                <div className="mb-2">
                  <span className="text-[11px] font-body text-terracotta font-medium tracking-wide">
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
