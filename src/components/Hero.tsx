import { artifacts } from '../data/artifacts'
import { periods } from '../data/periods'

interface Props {
  onExplore: () => void
}

export default function Hero({ onExplore }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#181513] text-ivory border-b border-[#332B25]">
      {/* Subtle Archival Grain Overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-30 z-10" />

      {/* Museum Artwork Collage in Background — Balanced visibility while preserving typography */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-40">
        <div className="absolute right-0 top-0 w-full h-full flex justify-end items-center gap-4 pr-0 sm:pr-8 translate-x-8 sm:translate-x-0">
          {/* Collage Item 1: Dancing Girl */}
          <div className="w-40 sm:w-56 md:w-64 aspect-[3/4] overflow-hidden border border-gold/30 shadow-2xl rotate-[-4deg] opacity-75">
            <img
              src="/images/dancing-girl.jpg"
              alt="Dancing Girl of Mohenjo-daro"
              className="w-full h-full object-cover grayscale-[0.5] contrast-115 mix-blend-luminosity"
            />
          </div>
          {/* Collage Item 2: Ajanta Padmapani */}
          <div className="w-48 sm:w-64 md:w-72 aspect-[3/4] overflow-hidden border border-gold/40 shadow-2xl translate-y-6 rotate-[2deg] opacity-85">
            <img
              src="/images/ajanta.jpg"
              alt="Ajanta Cave Murals"
              className="w-full h-full object-cover sepia-[0.2] contrast-110 mix-blend-luminosity"
            />
          </div>
          {/* Collage Item 3: Chola Nataraja */}
          <div className="hidden md:block w-60 aspect-[3/4] overflow-hidden border border-gold/30 shadow-2xl -translate-y-8 rotate-[-2deg] opacity-75">
            <img
              src="/images/nataraja.jpg"
              alt="Chola Nataraja Bronze"
              className="w-full h-full object-cover grayscale-[0.4] contrast-115 mix-blend-luminosity"
            />
          </div>
          {/* Collage Item 4: Mughal Miniature */}
          <div className="hidden lg:block w-56 aspect-[3/4] overflow-hidden border border-gold/30 shadow-2xl translate-y-12 rotate-[5deg] opacity-70">
            <img
              src="/images/mughal-miniature.jpg"
              alt="Mughal Court Miniature"
              className="w-full h-full object-cover contrast-110 mix-blend-luminosity"
            />
          </div>
        </div>

        {/* Fine Curatorial Vignette Mask to protect headline readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#181513] via-[#181513]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181513] via-transparent to-[#181513]/50" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-24 md:pt-36 md:pb-32">
        {/* Museum Curatorial Subtitle */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-gold/60" />
          <span className="font-body text-xs uppercase tracking-[0.25em] text-gold font-medium">
            Interactive Digital Museum Exhibition · CLA-I CO1
          </span>
        </div>

        {/* Exhibition Headline */}
        <h1 className="font-display font-light text-5xl sm:text-7xl md:text-8xl tracking-wide text-ivory leading-[0.95] max-w-3xl">
          INDIAN ART
          <br />
          <span className="font-normal italic text-gold-light">THROUGH TIME</span>
        </h1>

        {/* Curatorial Subtitle */}
        <p className="font-body text-base sm:text-lg md:text-xl text-[#C8BFB5] mt-7 max-w-2xl leading-relaxed font-light">
          Explore thousands of years of Indian artistic expression through the objects, places and traditions that shaped its visual history.
        </p>

        {/* Action and Dynamic Metrics */}
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <button
            onClick={onExplore}
            className="group inline-flex items-center gap-3 px-6 py-3.5 border border-gold/50 hover:border-gold bg-[#241F1C]/90 hover:bg-terracotta text-ivory font-body text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-sm"
          >
            <span>EXPLORE THE TIMELINE</span>
            <span className="text-gold-light group-hover:text-ivory transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </button>

          <div className="flex items-center gap-4 text-xs font-body text-[#9E948A] border-l border-[#3D352F] pl-5">
            <span>{artifacts.length} Masterworks</span>
            <span className="w-1 h-1 rounded-full bg-gold/50" />
            <span>{periods.length} Historical Epochs</span>
            <span className="w-1 h-1 rounded-full bg-gold/50" />
            <span>Multilateral Traditions</span>
          </div>
        </div>
      </div>

      {/* Fine Archival Hairline Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  )
}
