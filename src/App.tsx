import { useMemo, useState } from 'react'
import Hero from './components/Hero'
import StatsSection from './components/StatsSection'
import FilterControls, { FilterState } from './components/FilterControls'
import TimelineSection from './components/TimelineSection'
import ArtifactModal from './components/ArtifactModal'
import CompareEras from './components/CompareEras'
import Footer from './components/Footer'
import MedievalIntro from './components/MedievalIntro'
import SacredGoldCanvas from './components/SacredGoldCanvas'
import { artifacts } from './data/artifacts'
import { periods } from './data/periods'
import { Artifact } from './types'
import { Volume2, VolumeX } from 'lucide-react'
import { sounds } from './utils/audioChimes'

const initialFilters: FilterState = {
  query: '',
  periodId: null,
  region: null,
  artForm: null,
}

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true)
  const [soundActive, setSoundActive] = useState<boolean>(true)
  const [filters, setFilters] = useState<FilterState>(initialFilters)
  const [openArtifactId, setOpenArtifactId] = useState<string | null>(null)

  const toggleSound = () => {
    const next = !soundActive
    setSoundActive(next)
    sounds.enabled = next
    if (next) sounds.playTempleBell(528)
  }

  const handleEnterFromIntro = (periodId?: string) => {
    setShowIntro(false)
    if (periodId) {
      setFilters((f) => ({ ...f, periodId, region: null }))
      setTimeout(() => {
        document.getElementById(`era-${periodId}`)?.scrollIntoView({ behavior: 'smooth' })
      }, 200)
    }
  }

  const handleSelectEra = (id: string | null) => {
    setFilters((f) => {
      if (id && f.region) {
        // If current region has no items in this new era, gracefully clear region
        const hasMatches = artifacts.some((a) => a.periodId === id && a.region === f.region)
        if (!hasMatches) {
          return { ...f, periodId: id, region: null }
        }
      }
      return { ...f, periodId: id }
    })
  }

  const filteredArtifacts = useMemo(() => {
    const q = filters.query.trim().toLowerCase()
    return artifacts.filter((a) => {
      if (filters.periodId && a.periodId !== filters.periodId) return false
      if (filters.region && a.region !== filters.region) return false
      if (filters.artForm && a.artForm !== filters.artForm) return false
      if (q) {
        const haystack = [
          a.name,
          a.region,
          a.artForm,
          a.medium,
          a.dateRange,
          a.historicalContext,
          a.culturalSignificance,
          periods.find((p) => p.id === a.periodId)?.name ?? '',
        ]
          .join(' ')
          .toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [filters])

  // Ordered flat list, matching the visual order used in TimelineSection
  const orderedList = useMemo(() => {
    const list: Artifact[] = []
    for (const period of periods) {
      for (const a of filteredArtifacts) {
        if (a.periodId === period.id) list.push(a)
      }
    }
    return list
  }, [filteredArtifacts])

  const artifactsByPeriod = useMemo(() => {
    const map = new Map<string, Artifact[]>()
    for (const period of periods) {
      map.set(
        period.id,
        filteredArtifacts.filter((a) => a.periodId === period.id)
      )
    }
    return map
  }, [filteredArtifacts])

  const openArtifact = orderedList.find((a) => a.id === openArtifactId) ?? null
  const openIndex = openArtifact ? orderedList.indexOf(openArtifact) : -1

  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
  }

  const gotoRelative = (delta: number) => {
    if (openIndex === -1 || orderedList.length === 0) return
    const nextIndex = (openIndex + delta + orderedList.length) % orderedList.length
    setOpenArtifactId(orderedList[nextIndex].id)
  }

  return (
    <div className="min-h-screen bg-[#F7F2E9] relative selection:bg-terracotta/30 text-charcoal">
      {/* Sacred Gold Dust & Lotus Bloom Canvas Interaction System */}
      <SacredGoldCanvas />

      {/* Medieval Opening Gate Animation (shown on open, dismissible, reopenable) */}
      {showIntro && <MedievalIntro onEnter={handleEnterFromIntro} />}

      {/* Floating Audio Control Button */}
      <button
        onClick={toggleSound}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-charcoal/95 text-gold-light border border-gold/40 shadow-2xl backdrop-blur hover:bg-charcoal hover:scale-105 active:scale-95 transition-all"
        title={soundActive ? 'Mute Temple Chimes' : 'Enable Authentic Chimes'}
      >
        {soundActive ? <Volume2 className="w-4 h-4 text-gold animate-pulse" /> : <VolumeX className="w-4 h-4 text-parchment/60" />}
        <span className="text-xs font-display hidden sm:inline">
          {soundActive ? 'Temple Chimes ON' : 'Chimes Muted'}
        </span>
      </button>

      <Hero onExplore={scrollToTimeline} onReopenIntro={() => setShowIntro(true)} />
      <StatsSection />
      <FilterControls
        filters={filters}
        onChange={setFilters}
        resultCount={filteredArtifacts.length}
      />
      <TimelineSection
        periods={periods}
        artifactsByPeriod={artifactsByPeriod}
        activePeriodId={filters.periodId}
        onSelectEra={handleSelectEra}
        onOpenArtifact={(a) => setOpenArtifactId(a.id)}
      />
      <CompareEras />
      <Footer />

      {openArtifact && (
        <ArtifactModal
          artifact={openArtifact}
          onClose={() => setOpenArtifactId(null)}
          onPrev={() => gotoRelative(-1)}
          onNext={() => gotoRelative(1)}
        />
      )}
    </div>
  )
}
