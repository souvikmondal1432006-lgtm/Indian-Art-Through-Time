import { useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowLeftRight } from 'lucide-react'
import { Artifact } from '../types'
import { periodById } from '../data/periods'
import ImageWithFallback from './ImageWithFallback'
import ArtworkImageViewer from './ArtworkImageViewer'

interface Props {
  artifact: Artifact
  currentIndex?: number
  totalCount?: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onCompare?: (artifact: Artifact) => void
}

export default function ArtifactModal({
  artifact,
  currentIndex = 1,
  totalCount = 40,
  onClose,
  onPrev,
  onNext,
  onCompare,
}: Props) {
  const [showImageViewer, setShowImageViewer] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const period = periodById(artifact.periodId)

  useEffect(() => {
    closeButtonRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (showImageViewer) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext, showImageViewer])

  const visualLanguageText =
    artifact.comparisonData?.visualLanguage ||
    artifact.visualCharacteristics ||
    'Distinguished by classical formal balance, distinctive regional iconography, and mastery of material techniques.'

  const counterDisplay = `${String(currentIndex).padStart(2, '0')} / ${String(totalCount).padStart(2, '0')}`

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-2 sm:p-4 md:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="artifact-modal-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      >
        <div className="bg-[#FAF6EF] w-full max-w-5xl rounded-none shadow-modal border border-gold/40 overflow-hidden flex flex-col max-h-[92vh]">
          {/* Top Editorial Exhibition Header */}
          <div className="flex items-center justify-between px-6 py-3.5 bg-[#1C1917] text-ivory border-b border-gold/30">
            <div className="flex items-center gap-3">
              <span className="font-display text-xs uppercase tracking-[0.25em] text-gold-light font-medium">
                Plate {artifact.catalogNumber}
              </span>
              <span className="text-white/20">|</span>
              <span className="text-xs font-body text-[#C4BCB3] truncate max-w-sm">
                {period?.name} ({period?.shortLabel})
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="hidden sm:inline font-mono text-xs text-gold/80">
                {counterDisplay}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Previous / Next Controls */}
              <div className="flex items-center bg-white/10 border border-white/15">
                <button
                  onClick={onPrev}
                  className="px-3 py-1 text-xs font-body text-ivory hover:text-gold hover:bg-white/10 transition-colors flex items-center gap-1"
                  title="Previous Artifact (Left Arrow)"
                  aria-label="Previous artifact"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[11px] uppercase tracking-wider">PREV</span>
                </button>
                <span className="w-px h-3.5 bg-white/20" />
                <button
                  onClick={onNext}
                  className="px-3 py-1 text-xs font-body text-ivory hover:text-gold hover:bg-white/10 transition-colors flex items-center gap-1"
                  title="Next Artifact (Right Arrow)"
                  aria-label="Next artifact"
                >
                  <span className="hidden sm:inline text-[11px] uppercase tracking-wider">NEXT</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Close Button */}
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close exhibition label"
                className="p-1.5 text-ivory/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Main Body: Left Image & Right Exhibition Label */}
          <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#E7DEC8]">
            {/* ============================================================ */}
            {/* LEFT: Large Artwork Frame with Fullscreen Trigger            */}
            {/* ============================================================ */}
            <div className="md:col-span-6 bg-[#161311] p-6 flex flex-col justify-between relative group">
              {/* Clickable Image Stage */}
              <div
                onClick={() => setShowImageViewer(true)}
                className="relative flex-1 min-h-[320px] flex items-center justify-center overflow-hidden cursor-zoom-in border border-gold/20 bg-black/40"
              >
                <ImageWithFallback
                  src={artifact.image}
                  alt={artifact.imageAlt}
                  className="w-full h-full object-contain max-h-[52vh] transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {/* Hover Cue for Fullscreen Viewer */}
                <div className="absolute bottom-3 right-3 bg-[#1C1917]/90 text-ivory text-xs font-body px-3 py-1.5 border border-gold/40 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow-md">
                  <ZoomIn className="w-3.5 h-3.5 text-gold" />
                  <span className="tracking-wide">Inspect High-Res</span>
                </div>
              </div>

              {/* Image Attribution and Provenance Footnote */}
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-body text-ivory/60 leading-relaxed">
                <span className="text-gold font-medium uppercase tracking-wider block mb-0.5">Credit & Licensing</span>
                <p className="line-clamp-2">{artifact.imageAttribution}</p>
              </div>
            </div>

            {/* ============================================================ */}
            {/* RIGHT: Curatorial Museum Label & Detailed Catalogue Entry    */}
            {/* ============================================================ */}
            <div className="md:col-span-6 p-6 md:p-8 overflow-y-auto space-y-6">
              {/* Header: Number, Title, Date, Period */}
              <div>
                <span className="font-display font-semibold text-xs text-terracotta tracking-[0.2em] block mb-1">
                  NO. {artifact.catalogNumber}
                </span>
                <h2
                  id="artifact-modal-title"
                  className="font-display font-medium text-2xl sm:text-3xl text-charcoal leading-tight uppercase tracking-wide"
                >
                  {artifact.name}
                </h2>
                <div className="mt-2.5 flex items-center gap-3 text-sm font-body">
                  <span className="font-semibold text-terracotta">{artifact.dateRange}</span>
                  <span className="text-charcoal/30">·</span>
                  <span className="text-charcoal-soft font-medium">{period?.name}</span>
                </div>
              </div>

              {/* Divider Line */}
              <div className="h-px w-full bg-[#E5DAC8]" />

              {/* Curatorial Metadata Grid */}
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs font-body">
                <div>
                  <span className="uppercase tracking-widest text-[10px] text-charcoal-muted block mb-0.5 font-medium">
                    Region
                  </span>
                  <span className="text-charcoal font-medium">{artifact.region}</span>
                </div>
                <div>
                  <span className="uppercase tracking-widest text-[10px] text-charcoal-muted block mb-0.5 font-medium">
                    Type
                  </span>
                  <span className="text-charcoal font-medium">{artifact.artForm}</span>
                </div>
                <div className="col-span-2">
                  <span className="uppercase tracking-widest text-[10px] text-charcoal-muted block mb-0.5 font-medium">
                    Medium
                  </span>
                  <span className="text-charcoal font-medium">{artifact.medium}</span>
                </div>
                <div className="col-span-2">
                  <span className="uppercase tracking-widest text-[10px] text-charcoal-muted block mb-0.5 font-medium">
                    Technique
                  </span>
                  <span className="text-charcoal font-medium">{artifact.technique}</span>
                </div>
              </div>

              {/* Divider Line */}
              <div className="h-px w-full bg-[#E5DAC8]" />

              {/* The Story: 2-3 Concise Paragraphs */}
              <div>
                <h4 className="font-body text-[11px] uppercase tracking-widest text-terracotta font-semibold mb-2">
                  The Story
                </h4>
                <div className="space-y-2.5 font-body text-sm text-charcoal-soft leading-relaxed font-light">
                  {artifact.story.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Why It Matters */}
              <div className="bg-[#F3ECE0] border-l-2 border-terracotta p-3.5">
                <h4 className="font-body text-[10px] uppercase tracking-widest text-terracotta font-semibold mb-1">
                  Why It Matters
                </h4>
                <p className="font-body text-xs text-charcoal leading-relaxed">
                  {artifact.whyItMatters}
                </p>
              </div>

              {/* Visual Language */}
              <div className="bg-[#FAF6EF] border border-[#E2D8C6] p-3.5">
                <h4 className="font-body text-[10px] uppercase tracking-widest text-charcoal-muted font-semibold mb-1">
                  Visual Language
                </h4>
                <p className="font-body text-xs text-charcoal-soft leading-relaxed">
                  {visualLanguageText}
                </p>
              </div>

              {/* Did You Know? */}
              <div className="bg-[#FAF2E3] border border-gold/30 p-3.5">
                <h4 className="font-body text-[10px] uppercase tracking-widest text-gold font-semibold mb-1">
                  Did You Know?
                </h4>
                <p className="font-body text-xs text-charcoal leading-relaxed italic">
                  "{artifact.didYouKnow}"
                </p>
              </div>

              {/* Institutional Source */}
              <div className="pt-2 border-t border-[#E5DAC8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-body text-charcoal-muted">
                <div>
                  <span className="uppercase tracking-widest text-[10px] block font-medium">Source / Image Credit</span>
                  <span className="text-charcoal font-medium">{artifact.institutionalSource}</span>
                </div>

                {onCompare && (
                  <button
                    onClick={() => {
                      onClose()
                      onCompare(artifact)
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gold/60 hover:border-gold bg-[#FAF6EF] text-charcoal text-xs font-body uppercase tracking-wider font-medium transition-colors"
                  >
                    <ArrowLeftRight className="w-3.5 h-3.5 text-terracotta" />
                    <span>Compare Artwork</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen High-Resolution Image Viewer */}
      {showImageViewer && (
        <ArtworkImageViewer
          artifact={artifact}
          onClose={() => setShowImageViewer(false)}
        />
      )}
    </>
  )
}
