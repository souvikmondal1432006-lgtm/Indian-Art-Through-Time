import { ArrowDown, Compass, Sparkles } from 'lucide-react'
import { sounds } from '../utils/audioChimes'

interface Props {
  onExplore: () => void
  onReopenIntro: () => void
}

export default function Hero({ onExplore, onReopenIntro }: Props) {
  return (
    <section className="relative overflow-hidden bg-charcoal text-parchment-light">
      {/* Ornamental layered background: mandala rings + lotus-dot texture + noise */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div
        className="absolute -right-40 -top-40 w-[560px] h-[560px] rounded-full opacity-[0.16] pointer-events-none"
        style={{
          background:
            'repeating-radial-gradient(circle at center, #D7B45F 0px, #D7B45F 2px, transparent 2px, transparent 34px)',
        }}
      />
      <div
        className="absolute -left-32 bottom-0 w-[420px] h-[420px] rounded-full opacity-[0.12] pointer-events-none"
        style={{
          background:
            'repeating-radial-gradient(circle at center, #D98052 0px, #D98052 2px, transparent 2px, transparent 28px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="flex items-center gap-3 mb-5">
          <span className="font-display text-xs md:text-sm tracking-widest text-gold-light/90 uppercase inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold animate-pulse" />
            Interactive Digital Humanities Archive · 10,000 BCE to Contemporary
          </span>
        </div>

        <h1 className="font-display font-semibold text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl text-balance max-w-3xl">
          Indian Art Through Time
        </h1>

        <p className="font-body text-lg md:text-xl text-parchment/80 mt-7 max-w-2xl leading-relaxed">
          From prehistoric mineral pigments on Vindhya rock shelters and meditative Indus Valley bronze
          to transcendent Gupta Buddhas, soaring Chola vimanas, Mughal imperial miniatures, and living tribal traditions.
          Explore the unbroken aesthetic continuities of the Indian subcontinent.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
          <button
            onClick={() => {
              sounds.playTempleBell(528)
              onExplore()
            }}
            className="group inline-flex items-center gap-2.5 bg-terracotta hover:bg-terracotta-dark text-parchment-light font-body font-medium text-base px-7 py-3.5 rounded-sm shadow-lift hover:shadow-2xl transition-all duration-200"
          >
            Explore Masterworks
            <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={() => {
              sounds.playRoyalGong()
              onReopenIntro()
            }}
            className="group inline-flex items-center gap-2.5 bg-charcoal/80 hover:bg-gold/20 border border-gold/40 text-gold-light font-display text-sm px-5 py-3 rounded-sm transition-colors duration-200"
          >
            <Compass className="w-4 h-4 text-gold group-hover:rotate-45 transition-transform duration-300" />
            Enter Royal Gateway
          </button>

          <span className="font-body text-sm text-parchment/70 bg-charcoal/60 px-3 py-1.5 rounded border border-white/10">
            34 Masterworks · 8 Epochs · 6 Regions
          </span>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  )
}
