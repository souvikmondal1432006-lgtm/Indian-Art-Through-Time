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
      className={`group cursor-pointer bg-[#FDFBF7] border border-[#E2D8C6] hover:border-gold/80 rounded-none overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col ${
        isCompactHorizontal ? 'w-[285px] shrink-0' : 'w-full'
      }`}
    >
      {/* 55-60% Artwork Frame with 4:3 Aspect Ratio and Dark Neutral Background */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#161311] flex items-center justify-center border-b border-[#EADFCF]">
        <ImageWithFallback
          src={artifact.image}
          alt={artifact.imageAlt}
          className="w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Catalog Number Overlay */}
        <div className="absolute top-2 left-2">
          <span className="font-display text-[11px] font-semibold px-2 py-0.5 bg-[#1C1917]/90 text-gold-light border border-gold/30 tracking-widest uppercase">
            {artifact.catalogNumber}
          </span>
        </div>

        {/* Subtle Art Form Tag */}
        <div className="absolute top-2 right-2">
          <span className="font-body text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#FAF6EF]/90 text-charcoal-soft font-medium backdrop-blur-sm border border-[#D5C9B3]">
            {artifact.artForm}
          </span>
        </div>
      </div>

      {/* Museum Label Content Area */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Catalog Number & Date */}
          <div className="flex items-center justify-between gap-2 text-xs font-body mb-1">
            <span className="font-display font-medium text-terracotta tracking-wide">
              {artifact.dateRange}
            </span>
            <span className="text-[11px] text-charcoal-muted tracking-normal truncate max-w-[120px]">
              {period?.shortLabel}
            </span>
          </div>

          {/* Visually Dominant Serif Title */}
          <h3 className="font-display font-medium text-base text-charcoal group-hover:text-terracotta transition-colors leading-snug uppercase tracking-wide line-clamp-2 min-h-[2.5rem]">
            {artifact.name}
          </h3>

          {/* One-Sentence Description (Line-clamped to 2 lines) */}
          <p className="mt-2 text-xs text-charcoal-soft leading-relaxed line-clamp-2 font-body font-light">
            {artifact.shortDescription}
          </p>
        </div>

        {/* Bottom Region & Explore Prompt */}
        <div className="mt-4 pt-2.5 border-t border-[#EAE1D1] flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wider text-charcoal-muted font-body font-medium">
            {artifact.region}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-body uppercase tracking-wider text-terracotta group-hover:text-terracotta-dark font-medium transition-colors">
            <span>EXPLORE</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-gold" />
          </span>
        </div>
      </div>
    </article>
  )
}
