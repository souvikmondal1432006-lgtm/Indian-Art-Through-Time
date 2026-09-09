import { useState } from 'react'
import { ArrowLeftRight } from 'lucide-react'
import { periods } from '../data/periods'
import { Period, PeriodId } from '../types'

function ColumnList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-4">
      <div className="font-body text-[11px] uppercase tracking-wider text-charcoal-soft/60 mb-1.5">
        {title}
      </div>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="font-body text-sm text-charcoal flex gap-2">
            <span className="text-terracotta">·</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function EraColumn({ period }: { period: Period }) {
  return (
    <div className="bg-parchment-light border border-charcoal/10 rounded-sm p-5 flex-1 min-w-[260px]">
      <h4 className="font-display font-semibold text-lg text-charcoal">{period.name}</h4>
      <p className="font-body text-xs text-terracotta-dark mb-4">{period.dateRange}</p>
      <ColumnList title="Major art forms" items={period.majorArtForms} />
      <ColumnList title="Materials" items={period.materials} />
      <ColumnList title="Themes" items={period.themes} />
      <ColumnList title="Regions" items={period.regionsInvolved} />
      <ColumnList title="Major developments" items={period.developments} />
    </div>
  )
}

export default function CompareEras() {
  const [leftId, setLeftId] = useState(periods[0].id)
  const [rightId, setRightId] = useState(periods[3].id)

  const left = periods.find((p) => p.id === leftId)!
  const right = periods.find((p) => p.id === rightId)!

  return (
    <section className="bg-indigo-deep text-parchment-light">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="font-display text-2xl md:text-3xl mb-2">Compare Eras</h2>
        <p className="font-body text-sm text-parchment/70 mb-8 max-w-2xl">
          Choose any two periods to see how art forms, materials, themes and regional
          activity differed — or overlapped — between them.
        </p>

        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-8">
          <select
            value={leftId}
            onChange={(e) => setLeftId(e.target.value as PeriodId)}
            className="flex-1 bg-parchment-light text-charcoal font-body text-sm rounded-sm px-4 py-3 border border-transparent focus:border-gold outline-none"
            aria-label="Select first era to compare"
          >
            {periods.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>

          <button
            onClick={() => {
              setLeftId(rightId)
              setRightId(leftId)
            }}
            aria-label="Swap eras"
            className="self-center p-2.5 rounded-full bg-parchment-light/10 hover:bg-parchment-light/20 transition-colors shrink-0"
          >
            <ArrowLeftRight className="w-4.5 h-4.5" />
          </button>

          <select
            value={rightId}
            onChange={(e) => setRightId(e.target.value as PeriodId)}
            className="flex-1 bg-parchment-light text-charcoal font-body text-sm rounded-sm px-4 py-3 border border-transparent focus:border-gold outline-none"
            aria-label="Select second era to compare"
          >
            {periods.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <EraColumn period={left} />
          <EraColumn period={right} />
        </div>
      </div>
    </section>
  )
}
