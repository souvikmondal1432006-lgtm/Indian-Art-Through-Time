import { Artifact } from '../types'
import { periodById } from '../data/periods'
import ImageWithFallback from './ImageWithFallback'
import { ArrowRight } from 'lucide-react'

interface Props {
  artifact: Artifact
  onOpen: () => void
  isCompactHorizontal?: boolean
}

export default function ArtifactCard({ artifact, onOpen, isCompactHorizontal }: Props) {
  const period = periodById(artifact.periodId)

  return (
    <article
      onClick={onOpen}
      className={`group cursor-pointer bg-[#FDFBF7] border border-[#E2D8C6] hover:border-gold/80 rounded-sm overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col ${
        isCompactHorizontal ? 'w-[290px] shrink-0' : 'w-full'
      }`}
    >
      {/* Thumbnail Artwork Frame */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#161311] flex items-center justify-center border-b border-[#EADFCF]">
        <ImageWithFallback
          src={artifact.image}
          alt={artifact.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Editorial Catalog Number Overlay */}
        <div className="absolute top-2.5 left-2.5">
          <span className="font-display text-xs font-semibold px-2 py-0.5 bg-[#1C1917]/85 text-gold-light border border-gold/30 tracking-wider">
            {artifact.catalogNumber}
          </span>
        </div>

        {/* Tradition Track Badge */}
        <div className="absolute top-2.5 right-2.5">
          <span className="font-body text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#FAF6EF]/90 text-charcoal-soft font-medium backdrop-blur-sm border border-[#D5C9B3]">
            {artifact.traditionTrack}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Date & Period */}
          <div className="flex items-center justify-between gap-2 mb-1.5 text-xs font-body">
            <span className="font-medium text-terracotta tracking-wide">
              {artifact.dateRange}
            </span>
            <span className="text-[11px] text-charcoal-muted tracking-normal truncate max-w-[120px]">
              {period?.shortLabel}
            </span>
          </div>

          {/* Artifact Title */}
          <h3 className="font-display font-medium text-lg text-charcoal group-hover:text-terracotta transition-colors leading-snug line-clamp-1">
            {artifact.name}
          </h3>

          {/* One-Sentence Description */}
          <p className="mt-2 text-xs text-charcoal-soft leading-relaxed line-clamp-2 font-body font-light">
            {artifact.shortDescription}
          </p>
        </div>

        {/* Bottom Explore Button */}
        <div className="mt-3.5 pt-2.5 border-t border-[#EAE1D1] flex items-center justify-between">
          <span className="text-[11px] text-charcoal-muted font-body">
            {artifact.region}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-body uppercase tracking-wider text-terracotta group-hover:text-terracotta-dark font-medium transition-colors">
            <span>EXPLORE</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-gold" />
          </span>
        </div>
      </div>
    </article>
  )
}
