import { Artifact } from '../types'
import { periodById } from '../data/periods'
import ImageWithFallback from './ImageWithFallback'
import { MapPin, ArrowUpRight, Palette, Landmark } from 'lucide-react'
import { sounds } from '../utils/audioChimes'

interface Props {
  artifact: Artifact
  onOpen: () => void
}

export default function ArtifactCard({ artifact, onOpen }: Props) {
  const period = periodById(artifact.periodId)

  const handleClick = () => {
    sounds.playTempleBell(580)
    onOpen()
  }

  // Short excerpt from cultural significance or historical context
  const excerpt =
    artifact.culturalSignificance.length > 125
      ? artifact.culturalSignificance.slice(0, 125).trim() + '...'
      : artifact.culturalSignificance

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => sounds.playScrollClick()}
      className="group cursor-pointer bg-[#FDFBF7] border border-[#D5C2A5]/70 hover:border-gold rounded-lg overflow-hidden shadow-sm hover:shadow-[0_16px_36px_-10px_rgba(43,36,28,0.22),0_0_20px_rgba(180,134,44,0.25)] transition-all duration-300 flex flex-col w-full relative"
    >
      {/* Decorative Gold Inset Filigree on Top Border */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent group-hover:via-terracotta transition-all duration-300" />

      {/* Image Gallery Frame */}
      <div className="relative aspect-[16/11] overflow-hidden bg-gradient-to-b from-[#1C1714] to-[#2B231D] flex items-center justify-center">
        <ImageWithFallback
          src={artifact.image}
          alt={artifact.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Ambient Dark Gradient vignette for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-black/30 pointer-events-none" />

        {/* Top Floating Era & Region Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          <span className="bg-charcoal/90 text-gold-light border border-gold/30 text-[11px] font-display font-medium px-2.5 py-1 rounded shadow-sm backdrop-blur-md">
            {period?.shortLabel}
          </span>
          <span className="bg-black/60 text-parchment/90 text-[11px] font-body px-2.5 py-1 rounded backdrop-blur-md flex items-center gap-1 border border-white/10">
            <MapPin className="w-3 h-3 text-gold" />
            {artifact.region}
          </span>
        </div>

        {/* Hover Inspect Banner */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
          <span className="bg-gold text-charcoal text-xs font-display font-semibold px-3 py-1.5 rounded shadow-lg inline-flex items-center gap-1">
            Open Folio
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Card Body with Substantive Curatorial Information */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Approximate Date & Medium Chip */}
          <div className="flex items-center gap-2 flex-wrap mb-2 text-xs font-body text-terracotta-dark">
            <span className="font-semibold">{artifact.dateRange}</span>
            <span className="text-charcoal/30">·</span>
            <span className="bg-terracotta/10 text-terracotta-dark px-2 py-0.5 rounded text-[11px] font-medium">
              {artifact.artForm}
            </span>
          </div>

          {/* Masterwork Title */}
          <h3 className="font-display font-semibold text-lg text-charcoal leading-snug group-hover:text-terracotta transition-colors duration-200">
            {artifact.name}
          </h3>

          {/* Material & Medium */}
          <div className="mt-2 flex items-start gap-1.5 text-xs text-charcoal-soft/80 font-body">
            <Palette className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
            <span className="line-clamp-1 italic">{artifact.medium}</span>
          </div>

          {/* Curatorial Story Excerpt */}
          <p className="mt-3 text-xs text-charcoal-soft/90 font-body leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>

        {/* Card Footer */}
        <div className="mt-4 pt-3 border-t border-charcoal/10 flex items-center justify-between text-xs font-body text-charcoal-soft/70">
          <span className="text-[11px] inline-flex items-center gap-1">
            <Landmark className="w-3 h-3 text-terracotta" />
            {artifact.relatedTraditions[0] || 'Classical Lineage'}
          </span>
          <span className="font-display font-medium text-terracotta text-xs group-hover:underline flex items-center gap-0.5">
            Details →
          </span>
        </div>
      </div>
    </div>
  )
}
