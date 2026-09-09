import { useEffect, useRef } from 'react'
import { sounds } from '../utils/audioChimes'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  decay: number
  color: string
}

export default function SacredGoldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    const particles: Particle[] = []
    const goldPalette = ['#E5C158', '#D4AF37', '#FFDF73', '#C59B27', '#F3E5AB']

    // Spawn subtle glittering gold dust on pointer move
    let lastMoveTime = 0
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now()
      if (now - lastMoveTime < 35) return // Throttle
      lastMoveTime = now

      particles.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8 - 0.2, // gentle rise
        size: Math.random() * 2.2 + 1,
        alpha: 0.6,
        decay: Math.random() * 0.015 + 0.012,
        color: goldPalette[Math.floor(Math.random() * goldPalette.length)],
      })
    }

    // Sacred Lotus Bloom burst on click
    const handleClick = (e: MouseEvent) => {
      sounds.playScrollClick()

      // Spawn 16 petal-like radiating gold embers
      const petalCount = 14
      for (let i = 0; i < petalCount; i++) {
        const angle = (i / petalCount) * Math.PI * 2
        const speed = Math.random() * 2.4 + 1.2
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 3 + 2,
          alpha: 0.9,
          decay: Math.random() * 0.02 + 0.015,
          color: goldPalette[i % goldPalette.length],
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)

    let animId: number
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.alpha -= p.decay

        if (p.alpha <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = p.color
        ctx.shadowBlur = 6
        ctx.shadowColor = '#D4AF37'

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      animId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[99999]"
      style={{ opacity: 0.9 }}
    />
  )
}
