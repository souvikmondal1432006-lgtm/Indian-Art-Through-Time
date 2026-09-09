import { useState, useEffect } from 'react'
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'
import { Artifact } from '../types'

interface Props {
  artifact: Artifact
  onClose: () => void
}

export default function ArtworkImageViewer({ artifact, onClose }: Props) {
  const [zoomLevel, setZoomLevel] = useState<number>(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === '+' || e.key === '=') handleZoom(0.25)
      if (e.key === '-' || e.key === '_') handleZoom(-0.25)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => {
      const next = Math.min(Math.max(prev + delta, 1), 3.5)
      if (next === 1) setPosition({ x: 0, y: 0 })
      return next
    })
  }

  const resetZoom = () => {
    setZoomLevel(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return
    setIsDragging(true)
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomLevel <= 1) return
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#0C0A09]/95 text-ivory backdrop-blur-md overflow-hidden select-none"
      role="dialog"
      aria-modal="true"
      aria-label="High-resolution artwork viewer"
    >
      {/* Top Bar with Title and Controls */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161311]/80 backdrop-blur-sm z-20">
        <div className="flex items-center gap-3">
          <span className="font-display text-xs tracking-[0.2em] text-gold-light font-medium uppercase">
            Exhibition Plate {artifact.catalogNumber}
          </span>
          <span className="text-white/20">|</span>
          <span className="font-display text-sm text-ivory font-light italic truncate max-w-md">
            {artifact.name} ({artifact.dateRange})
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom In / Out Controls */}
          <div className="flex items-center gap-1 bg-white/10 rounded-sm p-1 border border-white/10">
            <button
              onClick={() => handleZoom(-0.25)}
              disabled={zoomLevel <= 1}
              className="p-1.5 hover:bg-white/10 disabled:opacity-30 rounded-sm transition-colors text-ivory"
              title="Zoom Out (-)"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-body px-2 text-gold-light min-w-[45px] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => handleZoom(0.25)}
              disabled={zoomLevel >= 3.5}
              className="p-1.5 hover:bg-white/10 disabled:opacity-30 rounded-sm transition-colors text-ivory"
              title="Zoom In (+)"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            {zoomLevel > 1 && (
              <button
                onClick={resetZoom}
                className="p-1.5 hover:bg-white/10 rounded-sm transition-colors text-gold border-l border-white/10 pl-2 ml-1"
                title="Reset Zoom"
                aria-label="Reset zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-sm text-ivory transition-colors ml-2"
            title="Close Viewer (Esc)"
            aria-label="Close viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden ${
          zoomLevel > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-zoom-in'
        }`}
        onClick={() => {
          if (zoomLevel === 1) handleZoom(0.75)
        }}
      >
        <img
          src={artifact.image}
          alt={artifact.imageAlt}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
            transition: isDragging ? 'none' : 'transform 0.25s ease-out',
          }}
          className="max-h-[82vh] max-w-[92vw] object-contain shadow-2xl rounded-sm pointer-events-none select-none"
        />
      </div>

      {/* Bottom Metadata & Source Ribbon */}
      <div className="px-6 py-3 border-t border-white/10 bg-[#161311]/80 backdrop-blur-sm z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-body text-ivory/70">
        <div className="flex items-center gap-2">
          <span className="text-gold font-medium uppercase tracking-wider">Provenance:</span>
          <span>{artifact.institutionalSource}</span>
        </div>
        <div className="text-[11px] text-ivory/50 italic truncate max-w-xl">
          {artifact.imageAttribution}
        </div>
      </div>
    </div>
  )
}
