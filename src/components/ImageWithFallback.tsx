import { useState } from 'react'
import { ImageOff } from 'lucide-react'

interface Props {
  src: string
  alt: string
  className?: string
}

/**
 * Renders an image, but falls back to a textured ornamental placeholder if the
 * source is empty or fails to load (e.g. a stale external URL, or a work that
 * is intentionally not reproduced for copyright reasons).
 */
export default function ImageWithFallback({ src, alt, className = '' }: Props) {
  const [errored, setErrored] = useState(false)
  const showFallback = !src || errored

  if (showFallback) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-terracotta/20 via-parchment-dark to-gold/20 text-charcoal-soft overflow-hidden ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="paisley-corner absolute inset-0 opacity-40 pointer-events-none" />
        <ImageOff className="w-8 h-8 opacity-40 relative" strokeWidth={1.5} />
        <span className="text-xs font-body text-center px-4 opacity-70 max-w-[220px] relative">
          Image not shown — see attribution notes
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={className}
    />
  )
}
