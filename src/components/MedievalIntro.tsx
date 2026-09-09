import { useState } from 'react'
import { Sparkles, ArrowRight, Volume2, VolumeX, Landmark } from 'lucide-react'
import { sounds } from '../utils/audioChimes'

interface Props {
  onEnter: (targetPeriodId?: string) => void
}

const timelineHighlights = [
  { id: 'prehistoric', year: '30,000 BCE', label: 'Prehistoric Rock Caves', icon: '🪨' },
  { id: 'mauryan', year: '250 BCE', label: 'Ashokan Pillars & Sanchi', icon: '🏛️' },
  { id: 'classical', year: '450 CE', label: 'Ajanta Murals & Gupta Golden Age', icon: '🎨' },
  { id: 'medieval', year: '1000 CE', label: 'Chola Bronzes & Sun Chariots', icon: '🛕' },
  { id: 'mughal', year: '1600 CE', label: 'Mughal & Rajput Miniatures', icon: '📜' },
  { id: 'regional', year: '1650 CE', label: 'Living Folk & Tribal Traditions', icon: '🪡' },
  { id: 'colonial', year: '1890 CE', label: 'Bengal School & Ravi Varma', icon: '🖌️' },
  { id: 'contemporary', year: '1947 CE', label: 'Modern Masters & Contemporary', icon: '✨' },
]

export default function MedievalIntro({ onEnter }: Props) {
  const [opening, setOpening] = useState(false)
  const [selectedEpoch, setSelectedEpoch] = useState<string | null>(null)
  const [soundOn, setSoundOn] = useState(true)

  const handleStart = (periodId?: string) => {
    setOpening(true)
    if (soundOn) {
      sounds.playRoyalGong()
      setTimeout(() => sounds.playTempleBell(660), 400)
    }
    setTimeout(() => {
      onEnter(periodId)
    }, 900)
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#181310] transition-all duration-1000 ${
        opening ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Antique Wasli Parchment Texture Background */}
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at center, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Royal Manuscript Borders & Jharokha Framing */}
      <div className="absolute inset-4 md:inset-8 border-[3px] border-gold/40 rounded-xl pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.85)]">
        {/* Intricate Filigree Corners */}
        <div className="absolute top-2 left-2 w-10 h-10 border-t-2 border-l-2 border-gold" />
        <div className="absolute top-2 right-2 w-10 h-10 border-t-2 border-r-2 border-gold" />
        <div className="absolute bottom-2 left-2 w-10 h-10 border-b-2 border-l-2 border-gold" />
        <div className="absolute bottom-2 right-2 w-10 h-10 border-b-2 border-r-2 border-gold" />
      </div>

      {/* Top Controls Bar */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
        <button
          onClick={() => {
            const next = !soundOn
            setSoundOn(next)
            sounds.enabled = next
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 border border-gold/40 text-gold-light text-xs hover:bg-gold/20 transition-colors backdrop-blur"
        >
          {soundOn ? <Volume2 className="w-3.5 h-3.5 text-gold" /> : <VolumeX className="w-3.5 h-3.5" />}
          <span className="font-display">{soundOn ? 'Audio On' : 'Muted'}</span>
        </button>

        <button
          onClick={() => handleStart()}
          className="px-3.5 py-1.5 rounded-full bg-white/10 text-parchment/80 hover:text-white hover:bg-white/20 text-xs font-display border border-white/20 transition-colors"
        >
          Skip Intro
        </button>
      </div>

      {/* Main Center Folio */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-8 text-center flex flex-col items-center">
        {/* Sanskrit Royal Seal */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold/10 border border-gold/40 text-gold text-xs font-display tracking-[0.25em] uppercase mb-4 shadow-sm">
          <Sparkles className="w-3 h-3 text-gold" />
          <span>कालातीत कला यात्रा · Timeless Chronology</span>
          <Sparkles className="w-3 h-3 text-gold" />
        </div>

        {/* Main Title */}
        <h1 className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl text-[#FDF8EE] tracking-wide leading-tight mb-4 drop-shadow-md">
          Indian Art Through Time
        </h1>

        <p className="font-body text-sm sm:text-base text-parchment/85 max-w-2xl mx-auto mb-8 leading-relaxed">
          Embark on an interactive voyage across 10,000 years of aesthetic heritage.
          Explore 40 curated masterworks spanning prehistoric rock shelters, sacred Indus bronzes,
          towering medieval vimanas, Mughal imperial folios, and living tribal traditions.
        </p>

        {/* Interactive Kaalchakra / Epoch Quick-Jumper Cards */}
        <div className="w-full max-w-3xl mb-8">
          <div className="text-xs uppercase tracking-widest text-gold/70 font-display mb-3 flex items-center justify-center gap-1.5">
            <Landmark className="w-3.5 h-3.5" />
            <span>Select an Epoch or Unfurl the Full Timeline</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {timelineHighlights.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedEpoch(item.id)
                  handleStart(item.id)
                }}
                className="group p-3 rounded bg-[#241D18]/90 hover:bg-[#342A22] border border-gold/30 hover:border-gold text-left transition-all duration-200 shadow-sm hover:scale-[1.02] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base">{item.icon}</span>
                  <span className="font-display text-[10px] text-gold/90 font-medium">
                    {item.year}
                  </span>
                </div>
                <div className="font-display text-xs text-parchment group-hover:text-gold-light mt-2 leading-snug font-medium line-clamp-2">
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Enter Full Timeline Button */}
        <button
          onClick={() => handleStart()}
          className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#A34B24] via-gold to-[#A34B24] text-[#16120F] font-display font-semibold text-base tracking-wider uppercase shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:shadow-[0_0_50px_rgba(212,175,55,0.7)] hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <span className="flex items-center gap-2">
            <span>Explore Complete Archives</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </button>

        <p className="mt-5 text-[11px] text-parchment/50 font-body">
          Digital Humanities Project · 40 Masterworks across All Subcontinent Regions
        </p>
      </div>
    </div>
  )
}
