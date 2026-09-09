import { Artifact } from '../types'
import { periodById } from '../data/periods'
import ImageWithFallback from './ImageWithFallback'
import { ArrowUpRight } from 'lucide-react'

interface Props {
  artifact: Artifact
  onOpen: () => void
}

export default function ArtifactCard({ artifact, onOpen }: Props) {
  const period = periodById(artifact.periodId)

  return (
    <div
      onClick={onOpen}
      className="group cursor-pointer bg-[#FDFBF7] border border-[#DED3C4] hover:border-gold/80 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col w-full"
    >
      {/* Clean Artwork Image Frame */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#1E1916] flex items-center justify-center">
        <ImageWithFallback
          src={artifact.image}
          alt={artifact.imageAlt}
          className="w-full h-full object-cover"
        />

        {/* Subtle Region & Era Pill */}
        <div className="absolute top-2.5 left-2.5 pointer-events-none">
          <span className="bg-charcoal/80 text-gold-light text-[11px] font-display font-medium px-2 py-0.5 rounded backdrop-blur-md border border-gold/20">
            {period?.shortLabel}
          </span>
        </div>

        {/* Clean Hover Cue */}
        <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="bg-charcoal/90 text-gold-light text-xs font-display px-2.5 py-1 rounded backdrop-blur-md inline-flex items-center gap-1 border border-gold/30">
            View
            <ArrowUpRight className="w-3 h-3 text-gold" />
          </span>
        </div>
      </div>

      {/* Clean, Uncluttered Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Region Subheading */}
          <div className="text-[11px] uppercase tracking-wider text-terracotta font-medium mb-1 font-body">
            {artifact.region}
          </div>

          {/* Masterwork Name */}
          <h3 className="font-display font-semibold text-lg text-charcoal leading-snug group-hover:text-terracotta transition-colors line-clamp-1">
            {artifact.name}
          </h3>

          {/* Medium / Materials */}
          <p className="mt-1.5 text-xs text-charcoal-soft/75 font-body line-clamp-1 italic">
            {artifact.medium}
          </p>
        </div>

        {/* Clean Bottom Metadata Line */}
        <div className="mt-3 pt-2.5 border-t border-charcoal/10 flex items-center justify-between text-xs font-body">
          <span className="text-charcoal-soft/80 font-medium">
            {artifact.dateRange}
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded bg-parchment-dark/50 text-charcoal-soft font-medium">
            {artifact.artForm}
          </span>
        </div>
      </div>
    </div>
  )
}
