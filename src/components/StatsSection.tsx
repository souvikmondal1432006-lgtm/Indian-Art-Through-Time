import { artifacts } from '../data/artifacts'
import { periods } from '../data/periods'
import { History, Landmark, Map, Sparkles } from 'lucide-react'

export default function StatsSection() {
  const regions = new Set(artifacts.map((a) => a.region))
  const artForms = new Set(artifacts.map((a) => a.artForm))

  const stats = [
    { icon: <History className="w-4 h-4 text-terracotta" />, label: 'Historical Epochs', value: periods.length, sub: '30,000 BCE to Present' },
    { icon: <Landmark className="w-4 h-4 text-gold" />, label: 'Masterworks Documented', value: artifacts.length, sub: 'National & UNESCO Heritage' },
    { icon: <Map className="w-4 h-4 text-terracotta-dark" />, label: 'Subcontinent Regions', value: regions.size, sub: 'North, South, East, West & Northeast' },
    { icon: <Sparkles className="w-4 h-4 text-gold" />, label: 'Living Traditions', value: artForms.size, sub: 'Sculpture, Murals, Textiles & Craft' },
  ]

  return (
    <section className="border-b border-[#E7DEC8] bg-[#F4EDE2]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[#FCFAF7] border border-[#DFD5C2] p-4 sm:p-5 shadow-subtle hover:border-gold transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                {s.icon}
                <span className="font-body text-[10px] sm:text-[11px] text-charcoal-muted font-medium uppercase tracking-widest">
                  {s.label}
                </span>
              </div>
              <div className="font-display font-normal text-4xl sm:text-5xl text-charcoal tracking-tight">
                {String(s.value).padStart(2, '0')}
              </div>
              <div className="font-body text-[11px] text-charcoal-muted mt-1 font-light">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
