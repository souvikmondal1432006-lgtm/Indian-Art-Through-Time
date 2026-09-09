import { useRef, useState, useEffect } from 'react'
import { Artifact, Period, TraditionTrack } from '../types'
import ArtifactCard from './ArtifactCard'
import { ChevronLeft, ChevronRight, Layers, Clock, ArrowRight, ArrowLeft, Info } from 'lucide-react'

interface Props {
  periods: Period[]
  artifacts: Artifact[]
  activePeriodId: string | null
  onSelectEra: (id: string | null) => void
  onOpenArtifact: (artifact: Artifact) => void
}

const TRADITION_TRACKS: { key: TraditionTrack; label: string; description: string }[] = [
  { key: 'Sculpture', label: 'Sculpture & Metallurgy', description: 'Lost-wax bronzes, monumental stone reliefs, and terracotta figurines' },
  { key: 'Painting', label: 'Painting & Murals', description: 'Mesolithic cave frescoes, classical wall murals, and court miniatures' },
  { key: 'Architecture', label: 'Sacred & Civic Architecture', description: 'Rock-cut excavations, stupas, and monumental temple architecture' },
  { key: 'Folk / Regional', label: 'Folk, Tribal & Living Crafts', description: 'Unbroken community traditions, kalamkari textiles, and ritual arts' },
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
  const [viewMode, setViewMode] = useState<'stream' | 'multitrack'>('stream')

  // Smooth horizontal scroll
  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    const offset = direction === 'left' ? -480 : 480
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

  // Active era object
  const activePeriod = periods.find((p) => p.id === activePeriodId)
  const activeIndex = activePeriod ? periods.indexOf(activePeriod) : -1

  const handlePrevEra = () => {
    if (activeIndex > 0) {
      onSelectEra(periods[activeIndex - 1].id)
    } else if (activeIndex === -1) {
      onSelectEra(periods[periods.length - 1].id)
    }
  }

  const handleNextEra = () => {
    if (activeIndex >= 0 && activeIndex < periods.length - 1) {
      onSelectEra(periods[activeIndex + 1].id)
    } else if (activeIndex === -1) {
      onSelectEra(periods[0].id)
    }
  }

  // Sort artifacts chronologically
  const sortedArtifacts = [...artifacts].sort((a, b) => a.sortYear - b.sortYear)

  // Scroll to active era on change
  useEffect(() => {
    if (!activePeriodId || !scrollContainerRef.current) return
    const eraElement = document.getElementById(`era-anchor-${activePeriodId}`)
    if (eraElement) {
      eraElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [activePeriodId])

  return (
    <div className="relative bg-[#FBF8F2] border border-[#E7DEC8] p-5 sm:p-6 shadow-subtle">
      {/* Header & Controls: Compact spacing without unnecessary empty gap */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E7DEC8]">
        <div>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-terracotta font-medium mb-1 font-body">
            <span className="w-4 h-px bg-terracotta" />
            <span>Interactive Museum Chronology</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl text-charcoal font-normal tracking-wide">
            Chronological Lineage of South Asian Art
          </h2>
        </div>

        {/* View Mode & Directional Controls */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          {/* Overlapping Traditions vs Linear Stream Toggle */}
          <div className="inline-flex p-0.5 bg-[#EDE4D5] text-xs font-body border border-[#DCD0BE]">
            <button
              onClick={() => setViewMode('stream')}
              className={`flex items-center gap-1.5 px-3 py-1.5 transition-colors ${
                viewMode === 'stream'
                  ? 'bg-[#FCFAF7] text-charcoal shadow-sm font-medium border border-[#D5C9B3]'
                  : 'text-charcoal-muted hover:text-charcoal'
              }`}
              title="View masterworks in chronological historical eras"
            >
              <Clock className="w-3.5 h-3.5 text-terracotta" />
              <span>Linear Stream</span>
            </button>
            <button
              onClick={() => setViewMode('multitrack')}
              className={`flex items-center gap-1.5 px-3 py-1.5 transition-colors ${
                viewMode === 'multitrack'
                  ? 'bg-[#FCFAF7] text-charcoal shadow-sm font-medium border border-[#D5C9B3]'
                  : 'text-charcoal-muted hover:text-charcoal'
              }`}
              title="View parallel tracks demonstrating concurrent development of sculpture, painting, and architecture"
            >
              <Layers className="w-3.5 h-3.5 text-gold" />
              <span>Overlapping Traditions</span>
            </button>
          </div>

          {/* Left/Right Buttons */}
          <div className="flex items-center border border-[#DCD0BE] p-0.5 bg-[#FAF6EF]">
            <button
              onClick={() => handleScroll('left')}
              className="p-1.5 hover:bg-[#EAE0D0] text-charcoal-soft transition-colors"
              aria-label="Scroll left"
              title="Scroll Left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-1.5 hover:bg-[#EAE0D0] text-charcoal-soft transition-colors"
              aria-label="Scroll right"
              title="Scroll Right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Visual Chronology Rail: ●──────────────●──────────────●──────────────● */}
      <div className="pt-3 pb-3 overflow-x-auto timeline-rail relative">
        <div className="relative min-w-[960px] px-8 py-2">
          {/* Continuous Chronological Wire — Aligned precisely across the centers of the circle nodes */}
          <div className="absolute left-14 right-14 top-[18px] h-[2px] bg-gradient-to-r from-charcoal/30 via-gold/60 to-charcoal/30 pointer-events-none z-0" />

          {/* Milestone Nodes Row */}
          <div className="relative z-10 flex items-start justify-between">
            {/* Option: View All Eras */}
            <button
              onClick={() => onSelectEra(null)}
              className={`flex flex-col items-center group focus:outline-none transition-all duration-200 ${
                activePeriodId === null ? 'scale-105' : 'hover:scale-105'
              }`}
              style={{ width: '92px' }}
              title="View entire chronological collection across all eras"
            >
              {/* Circle Anchor (Height 20px, center at 10px) */}
              <div className="h-5 flex items-center justify-center">
                <div
                  className={`rounded-full border-2 transition-all duration-300 ${
                    activePeriodId === null
                      ? 'w-5 h-5 bg-charcoal border-[#FAF6EF] ring-4 ring-charcoal/25 shadow-md'
                      : 'w-3.5 h-3.5 bg-[#FCFAF7] border-[#8C7E6F] group-hover:border-gold'
                  }`}
                />
              </div>

              {/* Active Indicator tick */}
              <div className="h-2 flex items-center justify-center">
                {activePeriodId === null && <div className="w-0.5 h-2 bg-charcoal" />}
              </div>

              {/* Title — Cleanly below the wire */}
              <span
                className={`font-display text-xs whitespace-nowrap tracking-wider uppercase transition-colors ${
                  activePeriodId === null ? 'text-charcoal font-bold' : 'text-charcoal-muted group-hover:text-charcoal'
                }`}
              >
                All Eras
              </span>

              {/* Date subtitle */}
              <span className="text-[10px] text-charcoal-muted font-body mt-0.5 whitespace-nowrap">
                30,000 BCE–Now
              </span>
            </button>

            {/* 8 Historical Eras */}
            {periods.map((p) => {
              const isActive = activePeriodId === p.id
              const periodArtifactCount = artifacts.filter((a) => a.periodId === p.id).length

              const compactDate =
                p.id === 'prehistoric'
                  ? '30,000 BCE'
                  : p.id === 'mauryan'
                  ? '3rd c. BCE'
                  : p.id === 'classical'
                  ? '200 BCE'
                  : p.id === 'medieval'
                  ? '800 CE'
                  : p.id === 'mughal'
                  ? '1526 CE'
                  : p.id === 'regional'
                  ? 'Living Arts'
                  : p.id === 'colonial'
                  ? '1757 CE'
                  : p.id === 'contemporary'
                  ? '1947–Now'
                  : ''

              return (
                <button
                  key={p.id}
                  onClick={() => onSelectEra(isActive ? null : p.id)}
                  className={`flex flex-col items-center group focus:outline-none transition-all duration-200 ${
                    isActive ? 'scale-105' : 'hover:scale-105'
                  }`}
                  style={{ width: '100px' }}
                  title={`${p.name} (${p.dateRange}) · Click to filter exhibition to this epoch`}
                >
                  {/* Circle Anchor (Height 20px, center at 10px) */}
                  <div className="h-5 flex items-center justify-center">
                    <div
                      className={`rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? 'w-5 h-5 bg-terracotta border-[#FAF6EF] ring-4 ring-terracotta/30 shadow-md scale-105'
                          : 'w-3.5 h-3.5 bg-[#FCFAF7] border-[#8C7E6F] group-hover:border-terracotta group-hover:bg-terracotta/10'
                      }`}
                    />
                  </div>

                  {/* Active Indicator tick */}
                  <div className="h-2 flex items-center justify-center">
                    {isActive && <div className="w-0.5 h-2 bg-terracotta animate-pulse" />}
                  </div>

                  {/* Title */}
                  <span
                    className={`font-display text-xs whitespace-nowrap tracking-wider uppercase transition-colors ${
                      isActive ? 'text-terracotta font-bold' : 'text-charcoal-soft group-hover:text-charcoal'
                    }`}
                  >
                    {p.shortLabel}
                  </span>

                  {/* Date range subtitle */}
                  <span className="text-[10px] text-charcoal-muted font-body mt-0.5 whitespace-nowrap">
                    {compactDate}
                  </span>

                  {/* Item count badge (when not active) */}
                  {periodArtifactCount > 0 && !isActive && (
                    <span className="text-[9px] px-1.5 py-0.2 bg-[#EDE4D5] rounded-full text-charcoal-soft mt-1 opacity-80 group-hover:opacity-100">
                      {periodArtifactCount}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* DIRECT CONTENT STAGE (No large empty vertical gap)           */}
      {/* ============================================================ */}
      <div className="mt-3 pt-3 border-t border-[#E7DEC8]">
        {sortedArtifacts.length === 0 ? (
          <div className="py-16 text-center text-charcoal-muted font-body">
            <p className="font-display text-xl text-charcoal mb-2">No masterworks found in this view</p>
            <p className="text-xs">
              {activePeriod ? `No works match your current filters within ${activePeriod.name}.` : 'Adjust or reset your active filters.'}
            </p>
            {activePeriodId && (
              <button
                onClick={() => onSelectEra(null)}
                className="mt-4 px-4 py-2 border border-terracotta bg-terracotta text-ivory text-xs font-body uppercase tracking-wider font-medium"
              >
                View all masterworks across all eras
              </button>
            )}
          </div>
        ) : viewMode === 'multitrack' ? (
          /* ============================================================ */
          /* OVERLAPPING TRADITIONS MODE: Parallel Concurrent Tracks      */
          /* ============================================================ */
          <div>
            {/* Curatorial Framework Callout */}
            <div className="mb-6 p-4 bg-[#F5EDE1] border-l-2 border-gold text-xs font-body text-charcoal-soft flex items-start gap-3">
              <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="text-charcoal font-medium uppercase tracking-wider block mb-0.5">
                  Curatorial Framework · Concurrent Traditions
                </strong>
                Indian art history did not move in a single linear succession where one period replaced the other.
                Sculptural metallurgy, cave frescoes, temple architecture, and community folk arts developed
                simultaneously across diverse geographies and patronage traditions over millennia.
              </div>
            </div>

            {/* Draggable Parallel Lanes */}
            <div
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              className={`horizontal-timeline-scroll overflow-x-auto select-none pb-4 ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
            >
              <div className="space-y-6 min-w-max pr-12">
                {TRADITION_TRACKS.map((track) => {
                  const trackItems = sortedArtifacts.filter(
                    (a) =>
                      a.traditionTrack === track.key ||
                      (track.key === 'Folk / Regional' && (a.artForm === 'Folk Art' || a.artForm === 'Tribal Art' || a.artForm === 'Textile'))
                  )

                  if (trackItems.length === 0) return null

                  return (
                    <div key={track.key} className="flex items-stretch gap-6 border-b border-[#EDE4D5] pb-6 last:border-b-0">
                      {/* Tradition Lane Header Pillar */}
                      <div className="w-56 shrink-0 bg-[#F4EDE2] border border-[#DFD3C0] p-4 flex flex-col justify-between sticky left-0 z-10 shadow-sm">
                        <div>
                          <span className="text-[10px] font-body uppercase tracking-widest text-terracotta font-semibold">
                            Tradition Track
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
            </div>
          </div>
        ) : (
          /* ============================================================ */
          /* LINEAR STREAM MODE: Chronological Era-First Flow             */
          /* ============================================================ */
          <div>
            {/* If a specific era is selected: show its editorial introduction */}
            {activePeriod && (
              <div className="mb-5 p-5 sm:p-6 bg-[#F6EFE3] border-l-3 border-terracotta shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-3 text-xs font-body uppercase tracking-[0.2em] text-terracotta font-semibold mb-1">
                      <span>Epoch {String(activeIndex + 1).padStart(2, '0')}</span>
                      <span>·</span>
                      <span>{activePeriod.dateRange}</span>
                    </div>

                    <h3 className="font-display font-medium text-2xl sm:text-3xl text-charcoal tracking-wide uppercase">
                      {activePeriod.name}
                    </h3>

                    <p className="mt-2.5 font-body text-sm text-charcoal-soft leading-relaxed font-light max-w-2xl">
                      {activePeriod.blurb}
                    </p>

                    {/* Materials & Themes pill tags */}
                    <div className="mt-3.5 flex flex-wrap items-center gap-2 text-[11px] font-body text-charcoal-muted">
                      <span className="font-medium text-charcoal-soft uppercase tracking-wider">Major Media:</span>
                      {activePeriod.materials.slice(0, 3).map((mat) => (
                        <span key={mat} className="px-2 py-0.5 bg-[#EDE4D5] border border-[#D5C9B3] text-charcoal">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Previous / Next Era Jumpers */}
                  <div className="flex sm:flex-col gap-2 shrink-0 border-t md:border-t-0 md:border-l border-[#E2D6C2] pt-3 md:pt-0 md:pl-5">
                    <button
                      onClick={handlePrevEra}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#DFD3C0] hover:border-terracotta bg-[#FCFAF7] text-xs font-body uppercase tracking-wider text-charcoal transition-colors"
                      title="Jump to previous historical era"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 text-terracotta" />
                      <span>Prev Era</span>
                    </button>
                    <button
                      onClick={handleNextEra}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#DFD3C0] hover:border-terracotta bg-[#FCFAF7] text-xs font-body uppercase tracking-wider text-charcoal transition-colors"
                      title="Jump to next historical era"
                    >
                      <span>Next Era</span>
                      <ArrowRight className="w-3.5 h-3.5 text-terracotta" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Draggable Chronological Stream of Cards */}
            <div
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              className={`horizontal-timeline-scroll overflow-x-auto select-none pb-4 ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
            >
              {/* If "All Eras" is active: group by era with small divider pillars */}
              {activePeriodId === null ? (
                <div className="flex items-stretch gap-6 min-w-max pr-12 relative py-2">
                  {periods.map((p) => {
                    const eraArtifacts = sortedArtifacts.filter((a) => a.periodId === p.id)
                    if (eraArtifacts.length === 0) return null

                    return (
                      <div
                        key={p.id}
                        id={`era-anchor-${p.id}`}
                        className="flex items-stretch gap-5 border-r border-[#E5DAC8] pr-6 last:border-r-0"
                      >
                        {/* Era Introduction Pillar */}
                        <div className="w-56 shrink-0 bg-[#F4EDE2] border border-[#DFD3C0] p-4 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-body uppercase tracking-widest text-terracotta font-semibold">
                              Historical Epoch
                            </span>
                            <h3 className="font-display font-medium text-lg text-charcoal mt-1 leading-snug">
                              {p.name}
                            </h3>
                            <span className="text-[11px] text-terracotta font-medium block mt-1">
                              {p.dateRange}
                            </span>
                            <p className="text-xs text-charcoal-muted font-body mt-2 leading-relaxed line-clamp-4 font-light">
                              {p.blurb}
                            </p>
                          </div>

                          <button
                            onClick={() => onSelectEra(p.id)}
                            className="mt-4 pt-2 border-t border-[#DFD3C0] text-[11px] font-body text-terracotta hover:text-terracotta-dark font-medium uppercase tracking-wider flex items-center justify-between"
                          >
                            <span>Focus Era</span>
                            <ArrowRight className="w-3 h-3 text-gold" />
                          </button>
                        </div>

                        {/* Era Cards */}
                        <div className="flex items-center gap-5">
                          {eraArtifacts.map((artifact) => (
                            <div key={artifact.id}>
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
                /* Focused Single Era Stream */
                <div className="flex items-center gap-6 min-w-max pr-12 relative py-2">
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gold/40 pointer-events-none" />

                  {sortedArtifacts.map((artifact) => (
                    <div key={artifact.id} className="relative z-10">
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
          </div>
        )}
      </div>

      {/* Footer Navigation Note */}
      <div className="flex items-center justify-between text-[11px] text-charcoal-muted font-body pt-3 border-t border-[#E7DEC8]">
        <span>← Click & drag or use wheel / arrows to explore chronology →</span>
        <span className="italic">
          {activePeriod ? `Showing ${sortedArtifacts.length} works from ${activePeriod.name}` : 'Showing complete chronological lineage'}
        </span>
      </div>
    </div>
  )
}
