import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'
import { Period } from '../types'

interface Props {
  period: Period
}

export default function DidYouKnow({ period }: Props) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [period.id])

  const fact = period.didYouKnow[index % period.didYouKnow.length]

  return (
    <div className="flex gap-3.5 bg-gold/10 border border-gold/30 rounded-sm px-5 py-4 max-w-2xl">
      <Sparkles className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={1.75} />
      <div>
        <p className="font-body text-xs uppercase tracking-wider text-terracotta-dark/80 mb-1">
          Did you know?
        </p>
        <p className="font-body text-[0.95rem] text-charcoal leading-relaxed">{fact}</p>
        {period.didYouKnow.length > 1 && (
          <button
            onClick={() => setIndex((i) => (i + 1) % period.didYouKnow.length)}
            className="font-body text-xs text-terracotta hover:text-terracotta-dark mt-2.5"
          >
            Next fact →
          </button>
        )}
      </div>
    </div>
  )
}
