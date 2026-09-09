import { useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, MapPin, Calendar, Palette, Sparkles, BookOpen, Landmark } from 'lucide-react'
import { Artifact } from '../types'
import { periodById } from '../data/periods'
import ImageWithFallback from './ImageWithFallback'

interface Props {
  artifact: Artifact
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function ArtifactModal({ artifact, onClose, onPrev, onNext }: Props) {
  const [zoomed, setZoomed] = useState(false)
  const [activeTab, setActiveTab] = useState<'history' | 'material' | 'significance' | 'legacy'>('history')
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const period = periodById(artifact.periodId)

  useEffect(() => {
    closeButtonRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        zoomed ? setZoomed(false) : onClose()
      }
      if (e.key === 'ArrowLeft') {
        onPrev()
      }
      if (e.key === 'ArrowRight') {
        onNext()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext, zoomed])

  useEffect(() => {
    setZoomed(false)
  }, [artifact.id])

  return (
    <div
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/75 backdrop-blur-md px-0 md:px-6 py-0 md:py-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="artifact-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="bg-[#FCFAF6] w-full md:max-w-5xl md:rounded-xl shadow-2xl min-h-screen md:min-h-0 relative border border-gold/40 overflow-hidden flex flex-col">
        {/* Top Ornate Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3.5 bg-gradient-to-r from-[#211B17] via-[#2F2620] to-[#211B17] text-[#FDF8EE] border-b border-gold/40">
          <div className="flex items-center gap-3">
            <span className="font-display text-xs uppercase tracking-[0.25em] text-gold-light font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              {period?.name} ({period?.shortLabel})
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-xs font-body text-parchment/80 hidden sm:inline">
              {artifact.region}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Previous / Next Arrow Controls */}
            <div className="flex items-center bg-black/40 rounded-full p-0.5 border border-gold/30">
              <button
                onClick={onPrev}
                aria-label="Previous artifact"
                className="p-1.5 rounded-full hover:bg-gold/20 text-parchment hover:text-gold transition-colors"
                title="Previous Artifact (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={onNext}
                aria-label="Next artifact"
                className="p-1.5 rounded-full hover:bg-gold/20 text-parchment hover:text-gold transition-colors"
                title="Next Artifact (Right Arrow)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close"
              className="p-2 rounded-full hover:bg-white/10 text-parchment/80 hover:text-white transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Grid */}
        <div className="grid md:grid-cols-12 gap-0 flex-1">
          {/* Left Column: Image Exhibition Showcase */}
          <div className="md:col-span-6 bg-gradient-to-b from-[#1C1714] to-[#120E0C] relative flex flex-col justify-between p-4 md:p-6 border-b md:border-b-0 md:border-r border-charcoal/15">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[320px] md:min-h-[460px] flex items-center justify-center rounded-lg overflow-hidden border border-white/10 bg-black/30">
              <button
                onClick={() => setZoomed((z) => !z)}
                className="relative w-full h-full flex items-center justify-center overflow-hidden group cursor-zoom-in"
                aria-label="Toggle image zoom"
              >
                <ImageWithFallback
                  src={artifact.image}
                  alt={artifact.imageAlt}
                  className={`max-w-full max-h-full object-contain transition-transform duration-500 ease-out ${
                    zoomed ? 'scale-175 cursor-zoom-out' : 'group-hover:scale-105'
                  }`}
                />

                {/* Floating Zoom Control Pill */}
                <div className="absolute bottom-3 right-3 bg-charcoal/90 text-gold-light border border-gold/40 text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur">
                  {zoomed ? <ZoomOut className="w-3.5 h-3.5 text-gold" /> : <ZoomIn className="w-3.5 h-3.5 text-gold" />}
                  <span>{zoomed ? 'Zoom Out' : 'Enlarge'}</span>
                </div>
              </button>
            </div>

            {/* Image Attribution and Verification Footer */}
            <div className="mt-3 text-[11px] text-parchment/60 flex items-center justify-between border-t border-white/10 pt-2 font-body">
              <span className="line-clamp-1">{artifact.imageAttribution}</span>
              <span className="text-gold/80 font-medium shrink-0 ml-2">Verified Masterwork</span>
            </div>
          </div>

          {/* Right Column: Curatorial Dossier */}
          <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-[calc(100vh-140px)] bg-[#FCFAF6]">
            <div>
              {/* Title & Date */}
              <h2
                id="artifact-modal-title"
                className="font-display font-semibold text-2xl md:text-3xl text-charcoal leading-tight"
              >
                {artifact.name}
              </h2>
              <div className="mt-1 flex items-center gap-2 text-xs font-body text-terracotta-dark font-medium">
                <span>{artifact.dateRange}</span>
                <span>·</span>
                <span>{artifact.artForm}</span>
              </div>

              {/* Quick Metadata Matrix */}
              <div className="grid grid-cols-2 gap-2.5 my-4 p-3.5 rounded bg-[#F4EFE6] border border-gold/30 text-xs font-body">
                <div className="flex items-start gap-2">
                  <Calendar className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase text-charcoal-soft/70 block">Period</span>
                    <strong className="text-charcoal font-display">{period?.name}</strong>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase text-charcoal-soft/70 block">Region</span>
                    <strong className="text-charcoal">{artifact.region}</strong>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Palette className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase text-charcoal-soft/70 block">Medium / Materials</span>
                    <span className="text-charcoal leading-tight line-clamp-1">{artifact.medium}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Landmark className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase text-charcoal-soft/70 block">Primary Lineage</span>
                    <span className="text-charcoal leading-tight line-clamp-1">{artifact.relatedTraditions[0] || 'Classical'}</span>
                  </div>
                </div>
              </div>

              {/* Curatorial Tabs */}
              <div className="flex border-b border-charcoal/15 mb-4 gap-2 text-xs font-display overflow-x-auto pb-1">
                {[
                  { id: 'history', label: 'Historical Context' },
                  { id: 'material', label: 'Technique & Medium' },
                  { id: 'significance', label: 'Philosophy & Meaning' },
                  { id: 'legacy', label: 'Why It Matters' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-1.5 rounded-t transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-b-2 border-terracotta text-terracotta font-semibold bg-terracotta/5'
                        : 'text-charcoal-soft hover:text-charcoal'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content Panels */}
              <div className="text-sm font-body text-charcoal/90 leading-relaxed min-h-[140px]">
                {activeTab === 'history' && (
                  <div>
                    <h4 className="font-display font-semibold text-sm text-terracotta-dark mb-1 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      Archaeological Discovery & Royal Dynasty
                    </h4>
                    <p className="mt-1">{artifact.historicalContext}</p>
                  </div>
                )}

                {activeTab === 'material' && (
                  <div>
                    <h4 className="font-display font-semibold text-sm text-terracotta-dark mb-1 flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5" />
                      Visual Characteristics, Anatomy & Craft Method
                    </h4>
                    <p className="mt-1">{artifact.visualCharacteristics}</p>
                    <div className="mt-3 p-2.5 rounded bg-parchment-dark/40 border border-charcoal/10 text-xs text-charcoal-soft">
                      <strong>Specific Medium:</strong> {artifact.medium}
                    </div>
                  </div>
                )}

                {activeTab === 'significance' && (
                  <div>
                    <h4 className="font-display font-semibold text-sm text-terracotta-dark mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Spiritual, Metaphysical & Cultural Resonance
                    </h4>
                    <p className="mt-1">{artifact.culturalSignificance}</p>
                  </div>
                )}

                {activeTab === 'legacy' && (
                  <div>
                    <h4 className="font-display font-semibold text-sm text-terracotta-dark mb-1 flex items-center gap-1.5">
                      <Landmark className="w-3.5 h-3.5" />
                      World Heritage Place & Lasting Impact
                    </h4>
                    <p className="mt-1">{artifact.importance}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Related Traditions Tags */}
            <div className="mt-6 pt-3 border-t border-charcoal/10">
              <div className="text-[11px] font-display uppercase tracking-wider text-charcoal-soft/70 mb-2">
                Connected Artistic Traditions & Influences
              </div>
              <div className="flex flex-wrap gap-1.5">
                {artifact.relatedTraditions.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-body bg-gold/15 text-charcoal-soft border border-gold/30 px-2.5 py-0.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
