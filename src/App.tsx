import { useMemo, useState } from 'react'
import Hero from './components/Hero'
import StatsSection from './components/StatsSection'
import FilterControls, { FilterState } from './components/FilterControls'
import TimelineSection from './components/TimelineSection'
import ArtifactModal from './components/ArtifactModal'
import CompareArtworks from './components/CompareArtworks'
import ArtisticThreads from './components/ArtisticThreads'
import Footer from './components/Footer'
import { artifacts } from './data/artifacts'
import { periods } from './data/periods'
import { Artifact } from './types'
import { matchesRegion, matchesArtForm } from './utils/filterHelpers'

const initialFilters: FilterState = {
  query: '',
  periodId: null,
  region: null,
  artForm: null,
}

export default function App() {
  const [filters, setFilters] = useState<FilterState>(initialFilters)
  const [openArtifactId, setOpenArtifactId] = useState<string | null>(null)
  const [compareTarget, setCompareTarget] = useState<Artifact | null>(null)

  const handleSelectEra = (id: string | null) => {
    setFilters((f) => ({ ...f, periodId: id }))
  }

  const filteredArtifacts = useMemo(() => {
    const q = filters.query.trim().toLowerCase()
    return artifacts.filter((a) => {
      if (filters.periodId && a.periodId !== filters.periodId) return false
      if (!matchesRegion(a, filters.region)) return false
      if (!matchesArtForm(a, filters.artForm)) return false
      if (q) {
        const haystack = [
          a.name,
          a.region,
          a.artForm,
          a.traditionTrack,
          a.thematicThread,
          a.medium,
          a.technique,
          a.dateRange,
          a.shortDescription,
          a.institutionalSource,
          periods.find((p) => p.id === a.periodId)?.name ?? '',
        ]
          .join(' ')
          .toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [filters])

  // Ordered flat list chronologically
  const orderedList = useMemo(() => {
    return [...filteredArtifacts].sort((a, b) => a.sortYear - b.sortYear)
  }, [filteredArtifacts])

  const openArtifact = orderedList.find((a) => a.id === openArtifactId) ?? artifacts.find((a) => a.id === openArtifactId) ?? null
  const openIndex = openArtifact ? orderedList.indexOf(openArtifact) : -1

  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
  }

  const gotoRelative = (delta: number) => {
    if (openIndex === -1 || orderedList.length === 0) return
    const nextIndex = (openIndex + delta + orderedList.length) % orderedList.length
    setOpenArtifactId(orderedList[nextIndex].id)
  }

  const handleCompareFromModal = (art: Artifact) => {
    setCompareTarget(art)
    setTimeout(() => {
      document.getElementById('compare')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-[#FAF6EF] relative selection:bg-terracotta/20 text-charcoal">
      <Hero onExplore={scrollToTimeline} />
      <StatsSection />

      <FilterControls
        filters={filters}
        onChange={setFilters}
        resultCount={filteredArtifacts.length}
      />

      <TimelineSection
        periods={periods}
        allFilteredArtifacts={orderedList}
        activePeriodId={filters.periodId}
        onSelectEra={handleSelectEra}
        onOpenArtifact={(a) => setOpenArtifactId(a.id)}
      />

      {/* Artistic Threads - 4 Thematic Continuities */}
      <ArtisticThreads onOpenArtifact={(a) => setOpenArtifactId(a.id)} />

      {/* Compare Two Artworks - Comparative Matrix */}
      <CompareArtworks
        initialArtifactA={compareTarget}
        onOpenArtifact={(a) => setOpenArtifactId(a.id)}
      />

      <Footer />

      {openArtifact && (
        <ArtifactModal
          artifact={openArtifact}
          currentIndex={openIndex >= 0 ? openIndex + 1 : 1}
          totalCount={orderedList.length > 0 ? orderedList.length : artifacts.length}
          onClose={() => setOpenArtifactId(null)}
          onPrev={() => gotoRelative(-1)}
          onNext={() => gotoRelative(1)}
          onCompare={handleCompareFromModal}
        />
      )}
    </div>
  )
}
