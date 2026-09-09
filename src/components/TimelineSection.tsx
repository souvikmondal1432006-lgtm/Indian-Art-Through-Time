import { Artifact, Period } from '../types'
import ArtifactCard from './ArtifactCard'
import DidYouKnow from './DidYouKnow'
import { Sparkles, Compass } from 'lucide-react'

interface Props {
  periods: Period[]
  artifactsByPeriod: Map<string, Artifact[]>
  activePeriodId: string | null
  onSelectEra: (id: string | null) => void
  onOpenArtifact: (artifact: Artifact) => void
}

export default function TimelineSection({
  periods,
  artifactsByPeriod,
  activePeriodId,
  onSelectEra,
  onOpenArtifact,
}: Props) {
  const visiblePeriods = periods.filter((p) => (artifactsByPeriod.get(p.id) ?? []).length > 0)

  const handleEraClick = (id: string) => {
    if (activePeriodId === id) {
      onSelectEra(null)
    } else {
      onSelectEra(id)
      setTimeout(() => {
        document.getElementById(`era-${id}`)?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }

  return (
    <section id="timeline" className="max-w-6xl mx-auto px-6 md:px-10 py-12">
      {/* Horizontal timeline rail — the spine of the timeline */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-terracotta text-xs font-display tracking-widest uppercase mb-1">
          <Compass className="w-4 h-4" />
          <span>Interactive Time Travel Rail</span>
        </div>
        <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-1">The Master Chronology</h2>
        <p className="font-body text-sm text-charcoal-soft mb-6 max-w-2xl">
          Navigate the timeline rail to teleport between historical epochs, or scroll down through the unbroken
          lineage of South Asian art. Traditions such as regional & folk arts ran in continuous parallel alongside imperial courts.
        </p>
      </div>

      <div className="relative mb-8 bg-parchment-light/80 p-4 rounded-lg border border-gold/30 shadow-sm">
        <div className="absolute left-6 right-6 top-[34px] h-[2px] bg-gradient-to-r from-gold/20 via-terracotta/40 to-gold/20 pointer-events-none" />
        <div className="timeline-rail flex gap-2 overflow-x-auto pb-2 relative">
          {periods.map((p, idx) => {
            const isActive = activePeriodId === p.id
            return (
              <button
                key={p.id}
                onClick={() => handleEraClick(p.id)}
                className={`flex flex-col items-center shrink-0 px-3 py-1.5 rounded transition-all duration-200 group ${
                  isActive ? 'bg-terracotta/10 shadow-sm' : 'hover:bg-gold/10'
                }`}
              >
                <span
                  className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-terracotta border-terracotta scale-125 shadow-[0_0_10px_rgba(180,89,47,0.6)]'
                      : 'bg-parchment border-charcoal/40 group-hover:border-gold group-hover:scale-110'
                  }`}
                />
                <span
                  className={`mt-2 font-display text-xs whitespace-nowrap transition-colors duration-150 ${
                    isActive ? 'text-terracotta font-semibold' : 'text-charcoal-soft group-hover:text-charcoal'
                  }`}
                >
                  {p.shortLabel}
                </span>
                <span className="text-[10px] text-charcoal-soft/60 font-body hidden sm:block">
                  {p.dateRange.split('–')[0].replace('c. ', '')}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Vertical sequence of era sections */}
      <div className="space-y-20 mt-12">
        {visiblePeriods.length === 0 && (
          <div className="p-12 text-center bg-parchment-light rounded border border-dashed border-charcoal/20">
            <p className="font-display text-lg text-charcoal mb-2">No masterworks match your current filter</p>
            <p className="font-body text-xs text-charcoal-soft">Try resetting the period, region, or art form filters above.</p>
          </div>
        )}

        {visiblePeriods.map((period) => {
          const items = artifactsByPeriod.get(period.id) ?? []
          return (
            <div key={period.id} id={`era-${period.id}`} className="scroll-mt-28">
              {/* Era Header Banner */}
              <div className="border-b border-gold/40 pb-4 mb-6">
                <div className="flex items-baseline gap-3 flex-wrap mb-1">
                  <span className="px-2.5 py-0.5 rounded text-xs font-display bg-charcoal text-gold-light border border-gold/30">
                    Epoch {periods.findIndex((x) => x.id === period.id) + 1} of 8
                  </span>
                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-charcoal">
                    {period.name}
                  </h3>
                  <span className="font-body text-sm text-terracotta-dark font-medium">
                    {period.dateRange}
                  </span>
                </div>
                <p className="font-body text-[0.95rem] text-charcoal-soft max-w-3xl leading-relaxed mt-2">
                  {period.blurb}
                </p>
              </div>

              <div className="mb-6">
                <DidYouKnow period={period} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((artifact) => (
                  <ArtifactCard
                    key={artifact.id}
                    artifact={artifact}
                    onOpen={() => onOpenArtifact(artifact)}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
