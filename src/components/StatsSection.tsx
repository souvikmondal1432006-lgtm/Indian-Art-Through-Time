import { artifacts } from '../data/artifacts'
import { periods } from '../data/periods'
import { History, Landmark, Map, Sparkles } from 'lucide-react'

export default function StatsSection() {
  const regions = new Set(artifacts.map((a) => a.region))
  const artForms = new Set(artifacts.map((a) => a.artForm))

  const stats = [
    { icon: <History className="w-5 h-5 text-terracotta" />, label: 'Historical Epochs', value: periods.length, sub: 'From 30,000 BCE to Now' },
    { icon: <Landmark className="w-5 h-5 text-gold" />, label: 'Masterworks Documented', value: artifacts.length, sub: 'Curated UNESCO & National Treasures' },
    { icon: <Map className="w-5 h-5 text-terracotta-dark" />, label: 'Geographic Regions', value: regions.size, sub: 'Across the Subcontinent' },
    { icon: <Sparkles className="w-5 h-5 text-amber-600" />, label: 'Living Art Forms', value: artForms.size, sub: 'Painting, Sculpture, Textiles & Architecture' },
  ]

  return (
    <section className="border-y border-gold/20 bg-[#ECE2D0]/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-charcoal">
              Chronology at a Glance
            </h2>
            <p className="font-body text-xs text-charcoal-soft/80 mt-1">
              Quantitative overview of the verified digital humanities archive
            </p>
          </div>
          <div className="h-px flex-1 bg-charcoal/10 mx-4 hidden md:block" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-parchment-light/80 border border-gold/30 rounded-md p-5 shadow-sm hover:border-gold transition-colors">
              <div className="flex items-center gap-2 mb-2">
                {s.icon}
                <span className="font-body text-xs text-charcoal-soft font-medium uppercase tracking-wider">
                  {s.label}
                </span>
              </div>
              <div className="font-display font-semibold text-4xl md:text-5xl text-terracotta">
                {s.value}
              </div>
              <div className="font-body text-xs text-charcoal-soft/70 mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
