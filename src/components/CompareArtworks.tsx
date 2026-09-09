import { useState } from 'react'
import { ArrowLeftRight, Sparkles, BookOpen } from 'lucide-react'
import { artifacts } from '../data/artifacts'
import { periodById } from '../data/periods'
import { Artifact } from '../types'
import ImageWithFallback from './ImageWithFallback'

interface Props {
  initialArtifactA?: Artifact | null
  initialArtifactB?: Artifact | null
  onOpenArtifact?: (artifact: Artifact) => void
}

const FEATURED_PAIRS = [
  {
    name: 'Bronze Metallurgy Evolution: Indus Valley vs. Chola Dynasty',
    idA: 'dancing-girl',
    idB: 'nataraja',
  },
  {
    name: 'Narrative Wall Painting: Buddhist Ajanta vs. Imperial Mughal Court',
    idA: 'ajanta',
    idB: 'mughal-miniature',
  },
  {
    name: 'Sacred Architecture: Early Buddhist Sanchi Stupa vs. Chola Brihadisvara Vimana',
    idA: 'sanchi-stupa',
    idB: 'brihadisvara',
  },
  {
    name: 'Feminine Ideal: Classical Didarganj Yakshi vs. Modernist Amrita Sher-Gil',
    idA: 'didarganj-yakshi',
    idB: 'amrita-shergil',
  },
]

export default function CompareArtworks({
  initialArtifactA,
  initialArtifactB,
  onOpenArtifact,
}: Props) {
  const [artAId, setArtAId] = useState<string>(initialArtifactA?.id || 'dancing-girl')
  const [artBId, setArtBId] = useState<string>(initialArtifactB?.id || 'nataraja')

  const artA = artifacts.find((a) => a.id === artAId) || artifacts[0]
  const artB = artifacts.find((a) => a.id === artBId) || artifacts[1]

  const periodA = periodById(artA.periodId)
  const periodB = periodById(artB.periodId)

  const swapArtworks = () => {
    setArtAId(artB.id)
    setArtBId(artA.id)
  }

  // Generate educational "What Changed?" analysis
  const getEvolutionAnalysis = () => {
    // Specific curated milestones
    if (
      (artA.id === 'dancing-girl' && artB.id === 'nataraja') ||
      (artA.id === 'nataraja' && artB.id === 'dancing-girl')
    ) {
      return (
        <div className="space-y-3 font-body text-sm text-[#38332E] leading-relaxed">
          <p>
            <strong>From Secular Naturalism to Cosmic Philosophy:</strong> Separated by over 3,500 years, both works share the foundational lost-wax bronze casting technique (<em>cire perdue</em>). However, where the Indus Dancing Girl celebrates naturalistic human youth, relaxed bodily asymmetry (<em>tribhanga</em>), and personal adornment in a bronze-age civic community, the Chola Nataraja elevates bronze into the ultimate metaphysical statement.
          </p>
          <p>
            The Chola bronze formalizes religious iconography governed by the <em>Shilpa Shastras</em>—every limb encodes cosmic rhythm: creation (<em>damaru</em> drum), destruction (fire), solace (<em>abhaya</em> mudra), and spiritual transcendence (raised foot). The human figure is no longer merely observed; it has become an instrument of universal theology and state-sponsored royal temple procession.
          </p>
        </div>
      )
    }

    if (
      (artA.id === 'ajanta' && artB.id === 'mughal-miniature') ||
      (artA.id === 'mughal-miniature' && artB.id === 'ajanta')
    ) {
      return (
        <div className="space-y-3 font-body text-sm text-[#38332E] leading-relaxed">
          <p>
            <strong>From Monastic Cave Murals to Courtly Atelier Albums:</strong> The Ajanta frescoes in the basalt caves of Maharashtra functioned as monastic meditative environments, rendered on massive mud-plastered rock walls with mineral tempera to induce spiritual empathy (<em>karuna</em>) and moral reflection.
          </p>
          <p>
            In contrast, Mughal miniature painting under Akbar and Jahangir shifted the artistic center into the imperial royal workshop (<em>karkhana</em>). Painted with squirrel-hair brushes on layered handmade paper (<em>wasli</em>) using opaque gouache and burnished gold leaf, the art form became intimate, portable, documentary, and cosmopolitan—integrating Persian lyricism with European perspective to record sovereign imperial history.
          </p>
        </div>
      )
    }

    if (
      (artA.id === 'sanchi-stupa' && artB.id === 'brihadisvara') ||
      (artA.id === 'brihadisvara' && artB.id === 'sanchi-stupa')
    ) {
      return (
        <div className="space-y-3 font-body text-sm text-[#38332E] leading-relaxed">
          <p>
            <strong>From Hemispherical Reliquary to Soaring Structural Granite Vimana:</strong> The Great Stupa at Sanchi represents the early Buddhist sacred universe—an earthy, solid hemispherical mound designed for exterior circumambulation (<em>pradaksina</em>), devoid of interior halls or anthropomorphic divine statues.
          </p>
          <p>
            Over a millennium later, the Chola Brihadisvara Temple transformed sacred architecture into a 66-meter vertical mountain of interlocking granite. It moved sacred worship into sheltered internal sanctums (<em>garbhagriha</em>) and immense columned mandapas, functioning simultaneously as an imperial treasury, dance conservatory, and cosmic axis of royal sovereignty.
          </p>
        </div>
      )
    }

    // Dynamic synthesis for any chosen pair
    const timeDelta = Math.abs(artB.sortYear - artA.sortYear)
    const earlier = artA.sortYear <= artB.sortYear ? artA : artB
    const later = artA.sortYear <= artB.sortYear ? artB : artA

    return (
      <div className="space-y-3 font-body text-sm text-[#38332E] leading-relaxed">
        <p>
          <strong>Historical Trajectory:</strong> This comparison bridges <em>{earlier.name}</em> ({earlier.dateRange}) with <em>{later.name}</em> ({later.dateRange}), spanning approximately {timeDelta > 0 ? `${timeDelta} years` : 'the same era'} across {earlier.region} and {later.region}.
        </p>
        <p>
          <strong>Technique and Patronage Shift:</strong> Notice how the primary medium shifted from <em>{earlier.medium}</em> to <em>{later.medium}</em>. While the earlier work served {earlier.comparisonData.purpose.toLowerCase()}, the later tradition evolved toward {later.comparisonData.purpose.toLowerCase()}. Stylistically, the aesthetic language progressed from {earlier.comparisonData.visualLanguage} to {later.comparisonData.visualLanguage}.
        </p>
      </div>
    )
  }

  return (
    <section id="compare" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-14">
      {/* Section Header */}
      <div className="border-b border-[#E7DEC8] pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-terracotta font-medium mb-1 font-body">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>Comparative Art History Matrix</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-normal">
          Comparative Analysis of Two Artworks
        </h2>
        <p className="font-body text-sm text-charcoal-muted mt-2 max-w-2xl font-light">
          Select any two masterworks to examine how materials, religious purpose, visual language, and patronage evolved across different centuries and regions.
        </p>
      </div>

      {/* Quick Curated Pairs Selector */}
      <div className="mb-8">
        <span className="font-body text-[11px] uppercase tracking-widest text-charcoal-muted block mb-2 font-medium">
          Curated Historical Pairings:
        </span>
        <div className="flex gap-2 overflow-x-auto pb-1 timeline-rail">
          {FEATURED_PAIRS.map((pair) => (
            <button
              key={pair.name}
              onClick={() => {
                setArtAId(pair.idA)
                setArtBId(pair.idB)
              }}
              className={`px-3 py-1.5 text-xs font-body rounded-sm border whitespace-nowrap transition-colors ${
                (artA.id === pair.idA && artB.id === pair.idB) || (artA.id === pair.idB && artB.id === pair.idA)
                  ? 'bg-terracotta text-ivory border-terracotta font-medium'
                  : 'bg-[#FBF8F2] text-charcoal-soft border-[#DFD5C2] hover:border-gold hover:text-charcoal'
              }`}
            >
              {pair.name}
            </button>
          ))}
        </div>
      </div>

      {/* Selectors Bar */}
      <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center bg-[#FAF6EF] border border-[#E7DEC8] p-4 rounded-sm shadow-subtle mb-8">
        {/* Dropdown A */}
        <div className="md:col-span-5">
          <label className="block text-[10px] font-body uppercase tracking-widest text-charcoal-muted mb-1 font-medium">
            Artwork A (Plate {artA.catalogNumber})
          </label>
          <select
            value={artAId}
            onChange={(e) => setArtAId(e.target.value)}
            className="w-full bg-[#FCFAF7] border border-[#DCD0BE] hover:border-gold rounded-sm px-3.5 py-2.5 font-body text-sm text-charcoal focus:outline-none focus:border-terracotta"
            aria-label="Select first artwork"
          >
            {artifacts.map((a) => (
              <option key={a.id} value={a.id}>
                {a.catalogNumber} · {a.name} ({a.dateRange})
              </option>
            ))}
          </select>
        </div>

        {/* Swap Button */}
        <div className="md:col-span-1 flex justify-center">
          <button
            onClick={swapArtworks}
            className="p-2.5 rounded-full border border-[#DCD0BE] hover:border-gold bg-[#FCFAF7] hover:bg-[#F3ECE0] text-charcoal transition-colors shadow-sm"
            title="Swap Artworks"
            aria-label="Swap artworks"
          >
            <ArrowLeftRight className="w-4 h-4 text-terracotta" />
          </button>
        </div>

        {/* Dropdown B */}
        <div className="md:col-span-5">
          <label className="block text-[10px] font-body uppercase tracking-widest text-charcoal-muted mb-1 font-medium">
            Artwork B (Plate {artB.catalogNumber})
          </label>
          <select
            value={artBId}
            onChange={(e) => setArtBId(e.target.value)}
            className="w-full bg-[#FCFAF7] border border-[#DCD0BE] hover:border-gold rounded-sm px-3.5 py-2.5 font-body text-sm text-charcoal focus:outline-none focus:border-terracotta"
            aria-label="Select second artwork"
          >
            {artifacts.map((a) => (
              <option key={a.id} value={a.id}>
                {a.catalogNumber} · {a.name} ({a.dateRange})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Side-by-Side Comparison Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* ============================================================ */}
        {/* COLUMN A                                                     */}
        {/* ============================================================ */}
        <div className="bg-[#FCFAF7] border border-[#E7DEC8] rounded-sm overflow-hidden shadow-subtle flex flex-col justify-between">
          <div className="p-6">
            {/* Thumbnail Header */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#161311] rounded-sm mb-4 border border-[#EADFCF]">
              <ImageWithFallback
                src={artA.image}
                alt={artA.imageAlt}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2.5 left-2.5 font-display text-xs font-semibold px-2 py-0.5 bg-[#1C1917]/85 text-gold-light border border-gold/30">
                Plate {artA.catalogNumber}
              </span>
            </div>

            <span className="text-xs font-body font-medium text-terracotta uppercase tracking-wider block mb-1">
              {artA.dateRange}
            </span>
            <h3 className="font-display font-medium text-2xl text-charcoal leading-snug">
              {artA.name}
            </h3>
            <p className="text-xs text-charcoal-muted font-body mt-1">
              {periodA?.name}
            </p>

            {/* Matrix Data Rows */}
            <div className="mt-6 space-y-4 border-t border-[#EAE1D1] pt-4 text-xs font-body">
              <div>
                <span className="uppercase tracking-widest text-[10px] text-charcoal-muted block font-medium">
                  Region
                </span>
                <span className="text-charcoal font-medium">{artA.region}</span>
              </div>
              <div>
                <span className="uppercase tracking-widest text-[10px] text-charcoal-muted block font-medium">
                  Medium & Material
                </span>
                <span className="text-charcoal font-medium">{artA.medium}</span>
              </div>
              <div>
                <span className="uppercase tracking-widest text-[10px] text-charcoal-muted block font-medium">
                  Technique
                </span>
                <span className="text-charcoal font-medium">{artA.technique}</span>
              </div>
              <div>
                <span className="uppercase tracking-widest text-[10px] text-charcoal-muted block font-medium">
                  Themes
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {artA.comparisonData.themes.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-[#EDE4D5] rounded-sm text-charcoal-soft text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="uppercase tracking-widest text-[10px] text-charcoal-muted block font-medium">
                  Primary Purpose
                </span>
                <p className="text-charcoal-soft leading-relaxed mt-0.5">{artA.comparisonData.purpose}</p>
              </div>
              <div>
                <span className="uppercase tracking-widest text-[10px] text-charcoal-muted block font-medium">
                  Visual Language
                </span>
                <p className="text-charcoal-soft leading-relaxed mt-0.5">{artA.comparisonData.visualLanguage}</p>
              </div>
            </div>
          </div>

          {onOpenArtifact && (
            <div className="p-4 border-t border-[#EAE1D1] bg-[#F7F2E8]">
              <button
                onClick={() => onOpenArtifact(artA)}
                className="w-full py-2 text-xs font-body uppercase tracking-wider text-charcoal hover:text-terracotta font-medium border border-[#D5C9B3] bg-[#FCFAF7] transition-colors"
              >
                Inspect Artwork Details →
              </button>
            </div>
          )}
        </div>

        {/* ============================================================ */}
        {/* COLUMN B                                                     */}
        {/* ============================================================ */}
        <div className="bg-[#FCFAF7] border border-[#E7DEC8] rounded-sm overflow-hidden shadow-subtle flex flex-col justify-between">
          <div className="p-6">
            {/* Thumbnail Header */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#161311] rounded-sm mb-4 border border-[#EADFCF]">
              <ImageWithFallback
                src={artB.image}
                alt={artB.imageAlt}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2.5 left-2.5 font-display text-xs font-semibold px-2 py-0.5 bg-[#1C1917]/85 text-gold-light border border-gold/30">
                Plate {artB.catalogNumber}
              </span>
            </div>

            <span className="text-xs font-body font-medium text-terracotta uppercase tracking-wider block mb-1">
              {artB.dateRange}
            </span>
            <h3 className="font-display font-medium text-2xl text-charcoal leading-snug">
              {artB.name}
            </h3>
            <p className="text-xs text-charcoal-muted font-body mt-1">
              {periodB?.name}
            </p>

            {/* Matrix Data Rows */}
            <div className="mt-6 space-y-4 border-t border-[#EAE1D1] pt-4 text-xs font-body">
              <div>
                <span className="uppercase tracking-widest text-[10px] text-charcoal-muted block font-medium">
                  Region
                </span>
                <span className="text-charcoal font-medium">{artB.region}</span>
              </div>
              <div>
                <span className="uppercase tracking-widest text-[10px] text-charcoal-muted block font-medium">
                  Medium & Material
                </span>
                <span className="text-charcoal font-medium">{artB.medium}</span>
              </div>
              <div>
                <span className="uppercase tracking-widest text-[10px] text-charcoal-muted block font-medium">
                  Technique
                </span>
                <span className="text-charcoal font-medium">{artB.technique}</span>
              </div>
              <div>
                <span className="uppercase tracking-widest text-[10px] text-charcoal-muted block font-medium">
                  Themes
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {artB.comparisonData.themes.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-[#EDE4D5] rounded-sm text-charcoal-soft text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="uppercase tracking-widest text-[10px] text-charcoal-muted block font-medium">
                  Primary Purpose
                </span>
                <p className="text-charcoal-soft leading-relaxed mt-0.5">{artB.comparisonData.purpose}</p>
              </div>
              <div>
                <span className="uppercase tracking-widest text-[10px] text-charcoal-muted block font-medium">
                  Visual Language
                </span>
                <p className="text-charcoal-soft leading-relaxed mt-0.5">{artB.comparisonData.visualLanguage}</p>
              </div>
            </div>
          </div>

          {onOpenArtifact && (
            <div className="p-4 border-t border-[#EAE1D1] bg-[#F7F2E8]">
              <button
                onClick={() => onOpenArtifact(artB)}
                className="w-full py-2 text-xs font-body uppercase tracking-wider text-charcoal hover:text-terracotta font-medium border border-[#D5C9B3] bg-[#FCFAF7] transition-colors"
              >
                Inspect Artwork Details →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* WHAT CHANGED? - Educational Art-Historical Synthesis        */}
      {/* ============================================================ */}
      <div className="bg-[#FAF4EA] border border-gold/40 p-6 sm:p-8 rounded-sm shadow-subtle">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-4 h-4 text-terracotta" />
          <h3 className="font-display font-medium text-xl sm:text-2xl text-charcoal tracking-wide">
            WHAT CHANGED?
          </h3>
          <span className="text-xs font-body text-charcoal-muted italic">
            Artistic Evolution & Synthesis
          </span>
        </div>

        {getEvolutionAnalysis()}
      </div>
    </section>
  )
}
