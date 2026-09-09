import { useEffect, useState } from 'react'
import { sounds } from '../utils/audioChimes'

interface Spark {
  id: number
  x: number
  y: number
}

export default function ClickSparkEffect() {
  const [sparks, setSparks] = useState<Spark[]>([])

  useEffect(() => {
    let idCounter = 0

    const handleClick = (e: MouseEvent) => {
      // Create ripple coordinates
      const newSpark = {
        id: ++idCounter,
        x: e.clientX,
        y: e.clientY,
      }

      setSparks((prev) => [...prev.slice(-8), newSpark])

      // Play soft scroll/parchment sound on click
      sounds.playScrollClick()

      // Clean up spark after animation duration
      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== newSpark.id))
      }, 700)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="absolute"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Outer golden ripple ring */}
          <div className="w-12 h-12 rounded-full border-2 border-gold/70 animate-spark-ring" />
          {/* Inner Diya spark burst */}
          <div className="absolute inset-0 m-auto w-3 h-3 rounded-full bg-amber-300 blur-[1px] animate-spark-dot" />
        </div>
      ))}
    </div>
  )
}
