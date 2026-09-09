import { Artifact, Period } from '../types'
import HorizontalTimeline from './HorizontalTimeline'
import VerticalTimelineMobile from './VerticalTimelineMobile'

interface Props {
  periods: Period[]
  allFilteredArtifacts: Artifact[]
  activePeriodId: string | null
  onSelectEra: (id: string | null) => void
  onOpenArtifact: (artifact: Artifact) => void
}

export default function TimelineSection({
  periods,
  allFilteredArtifacts,
  activePeriodId,
  onSelectEra,
  onOpenArtifact,
}: Props) {
  return (
    <section id="timeline" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-3 pb-8">
      {/* Desktop & Tablet: Horizontal Chronological & Multi-Track Timeline */}
      <div className="hidden md:block">
        <HorizontalTimeline
          periods={periods}
          artifacts={allFilteredArtifacts}
          activePeriodId={activePeriodId}
          onSelectEra={onSelectEra}
          onOpenArtifact={onOpenArtifact}
        />
      </div>

      {/* Mobile: Clean Vertical Chronological Timeline */}
      <div className="block md:hidden">
        <VerticalTimelineMobile
          periods={periods}
          artifacts={allFilteredArtifacts}
          activePeriodId={activePeriodId}
          onSelectEra={onSelectEra}
          onOpenArtifact={onOpenArtifact}
        />
      </div>
    </section>
  )
}
