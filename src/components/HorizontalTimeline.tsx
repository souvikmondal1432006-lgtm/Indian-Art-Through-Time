import { useRef, useState, useEffect } from 'react'
import { Artifact, Period, TraditionTrack } from '../types'
import ArtifactCard from './ArtifactCard'
import { ChevronLeft, ChevronRight, Layers, Clock } from 'lucide-react'

interface Props {
  periods: Period[]
  artifacts: Artifact[]
  activePeriodId: string | null
  onSelectEra: (id: string | null) => void
  onOpenArtifact: (artifact: Artifact) => void
}

const TRADITION_TRACKS: { key: TraditionTrack; label: string; description: string }[] = [
  { key: 'Sculpture', label: 'Sculpture & Metallurgy', description: 'Lost-wax bronzes, monumental stone, and terracotta' },
  { key: 'Painting', label: 'Painting & Murals', description: 'Rock pigments, cave frescoes, miniatures, and washes' },
  { key: 'Architecture', label: 'Sacred & Civic Architecture', description: 'Monolithic rock excavation, structural stone, and stupas' },
  { key: 'Folk / Regional', label: 'Folk, Tribal & Regional Arts', description: 'Unbroken community traditions across rural landscapes' },
  { key: 'Textile / Craft', label: 'Textile & Living Crafts', description: 'Kalamkari, natural dyes, and historical trade weaves' },
]

export default function HorizontalTimeline({
  periods,
  artifacts,
  activePeriodId,
  onSelectEra,
  onOpenArtifact,
}: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [viewMode, setViewMode] = useState<'stream' | 'multitrack'>('multitrack')

  // Smooth horizontal scroll buttons
  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    const offset = direction === 'left' ? -500 : 500
    scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' })
  }

  // Mouse Drag to Scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUpOrLeave = () => {
    setIsDragging(false)
  }

  // Scroll to active era on change
  useEffect(() => {
    if (!activePeriodId || !scrollContainerRef.current) return
    const eraElement = document.getElementById(`h-era-${activePeriodId}`)
    if (eraElement) {
      eraElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [activePeriodId])

  // Sort all artifacts chronologically
  const sortedArtifacts = [...artifacts].sort((a, b) => a.sortYear - b.sortYear)

  return (
    <div className="relative bg-[#FBF8F2] border border-[#E7DEC8] rounded-sm shadow-subtle p-6">
      {/* Top Header & View Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E7DEC8]">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-terracotta font-medium mb-1 font-body">
            <span className="w-4 h-px bg-terracotta" />
            <span>Interactive Horizontal Museum Chronology</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl text-charcoal font-normal">
            Chronological Lineage of South Asian Art
          </h2>
        </div>

        {/* View Mode & Navigation Controls */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <div className="inline-flex p-1 bg-[#EDE4D5] rounded-sm text-xs font-body border border-[#DCD0BE]">
            <button
              onClick={() => setViewMode('multitrack')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm transition-colors ${
                viewMode === 'multitrack'
                  ? 'bg-[#FCFAF7] text-charcoal shadow-sm font-medium border border-[#D5C9B3]'
                  : 'text-charcoal-muted hover:text-charcoal'
              }`}
              title="View concurrent tracks showing how sculpture, painting, and architecture overlapped"
            >
              <Layers className="w-3.5 h-3.5 text-terracotta" />
              <span>Overlapping Traditions</span>
            </button>
            <button
              onClick={() => setViewMode('stream')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm transition-colors ${
                viewMode === 'stream'
                  ? 'bg-[#FCFAF7] text-charcoal shadow-sm font-medium border border-[#D5C9B3]'
                  : 'text-charcoal-muted hover:text-charcoal'
              }`}
              title="View all artworks in a single chronological stream"
            >
              <Clock className="w-3.5 h-3.5 text-gold" />
              <span>Linear Stream</span>
            </button>
          </div>

          <div className="flex items-center gap-1 border border-[#DCD0BE] rounded-sm p-0.5 bg-[#FAF6EF]">
            <button
              onClick={() => handleScroll('left')}
              className="p-2 hover:bg-[#EAE0D0] text-charcoal-soft transition-colors"
              aria-label="Scroll left"
              title="Scroll Left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-2 hover:bg-[#EAE0D0] text-charcoal-soft transition-colors"
              aria-label="Scroll right"
              title="Scroll Right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Epoch Spine Rail — Top Bar Navigation */}
      <div className="pt-4 pb-4 overflow-x-auto timeline-rail relative">
        <div className="relative flex items-center min-w-[1000px] justify-between px-4 py-2">
          {/* Continuous Chronological Spine Wire */}
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-charcoal/20 via-gold/50 to-charcoal/20 pointer-events-none" />

          {periods.map((p) => {
            const isActive = activePeriodId === p.id
            const periodArtifactCount = artifacts.filter((a) => a.periodId === p.id).length
            return (
              <button
                key={p.id}
                onClick={() => onSelectEra(isActive ? null : p.id)}
                className={`relative z-10 flex flex-col items-center group focus:outline-none transition-transform duration-200 ${
                  isActive ? 'scale-105' : 'hover:scale-105'
                }`}
              >
                {/* Milestone Node */}
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-terracotta border-terracotta ring-4 ring-terracotta/20 shadow-md'
                      : 'bg-[#FCFAF7] border-[#8C7E6F] group-hover:border-gold group-hover:bg-gold-light/40'
                  }`}
                />
                <span
                  className={`mt-2 font-display text-xs whitespace-nowrap tracking-wide transition-colors ${
                    isActive ? 'text-terracotta font-semibold' : 'text-charcoal-soft group-hover:text-charcoal'
                  }`}
                >
                  {p.shortLabel}
                </span>
                <span className="text-[10px] text-charcoal-muted font-body">
                  {p.dateRange.split('–')[0].replace('c. ', '')}
                </span>
                {periodArtifactCount > 0 && (
                  <span className="text-[9px] px-1.5 py-0.2 bg-[#EDE4D5] rounded-full text-charcoal-soft mt-0.5">
                    {periodArtifactCount}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Horizontal Draggable Exhibition Canvas */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`horizontal-timeline-scroll overflow-x-auto pt-6 pb-8 select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {sortedArtifacts.length === 0 ? (
          <div className="py-20 text-center text-charcoal-muted font-body">
            <p className="font-display text-xl text-charcoal mb-2">No masterworks found in this view</p>
            <p className="text-xs">Adjust or reset your active filters above.</p>
          </div>
        ) : viewMode === 'multitrack' ? (
          /* ============================================================ */
          /* MULTI-TRACK VIEW: Demonstrating Concurrent Traditions       */
          /* ============================================================ */
          <div className="space-y-8 min-w-max pr-12">
            {TRADITION_TRACKS.map((track) => {
              const trackItems = sortedArtifacts.filter(
                (a) => a.traditionTrack === track.key || (track.key === 'Folk / Regional' && (a.artForm === 'Folk Art' || a.artForm === 'Tribal Art'))
              )

              if (trackItems.length === 0) return null

              return (
                <div key={track.key} className="flex items-stretch gap-6 border-b border-[#EDE4D5] pb-6 last:border-b-0">
                  {/* Track Label Pillar */}
                  <div className="w-56 shrink-0 bg-[#F4EDE2] border border-[#DFD3C0] p-4 rounded-sm flex flex-col justify-between sticky left-0 z-10 shadow-sm">
                    <div>
                      <span className="text-[10px] font-body uppercase tracking-widest text-terracotta font-semibold">
                        Tradition Lane
                      </span>
                      <h3 className="font-display font-medium text-lg text-charcoal mt-1 leading-snug">
                        {track.label}
                      </h3>
                      <p className="text-xs text-charcoal-muted font-body mt-2 leading-relaxed font-light">
                        {track.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#DFD3C0] flex items-center justify-between text-[11px] font-body text-charcoal-soft">
                      <span>{trackItems.length} Masterworks</span>
                      <span className="text-gold font-medium">Overlapping</span>
                    </div>
                  </div>

                  {/* Track Artifact Stream with Horizontal Connector Line */}
                  <div className="flex items-center gap-5 relative pl-2">
                    {/* Lane Thread */}
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-[#DCD0BE] pointer-events-none" />

                    {trackItems.map((artifact) => (
                      <div key={artifact.id} className="relative z-10">
                        <ArtifactCard
                          artifact={artifact}
                          onOpen={() => onOpenArtifact(artifact)}
                          isCompactHorizontal
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          /* ============================================================ */
          /* LINEAR CHRONOLOGICAL STREAM                                 */
          /* ============================================================ */
          <div className="flex items-center gap-6 min-w-max pr-12 relative py-4">
            {/* Horizontal Continuous Wire */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gold/40 pointer-events-none" />

            {sortedArtifacts.map((artifact) => (
              <div
                key={artifact.id}
                id={`h-era-${artifact.periodId}`}
                className="relative z-10"
              >
                <ArtifactCard
                  artifact={artifact}
                  onOpen={() => onOpenArtifact(artifact)}
                  isCompactHorizontal
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Drag Instruction Cue */}
      <div className="flex items-center justify-between text-[11px] text-charcoal-muted font-body pt-2 border-t border-[#E7DEC8]">
        <span>← Click and drag or use wheel to explore timeline →</span>
        <span className="italic">Traditions ran concurrently across different regions of India</span>
      </div>
    </div>
  )
}
