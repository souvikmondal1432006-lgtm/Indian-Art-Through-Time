import { useState } from 'react'
import { Artifact, ThematicThread } from '../types'
import { artifacts } from '../data/artifacts'
import ImageWithFallback from './ImageWithFallback'
import { Compass, Sparkles, Flame, Trees, Crown, Users } from 'lucide-react'

interface Props {
  onOpenArtifact: (artifact: Artifact) => void
}

interface ThreadDefinition {
  id: ThematicThread
  title: string
  icon: typeof Flame
  subtitle: string
  evolutionPath: string
  editorialDescription: string
  artifactIds: string[]
}

const THREADS: ThreadDefinition[] = [
  {
    id: 'Devotion',
    title: 'DEVOTION',
    icon: Flame,
    subtitle: 'From Aniconic Relics to Cosmic Dance and Personal Bhakti',
    evolutionPath: 'Indus Meditative Seals → Buddhist Stupas → Classical Icons → Chola Cosmic Bronzes → Bhakti Poetry Miniatures',
    editorialDescription:
      'Sacred expression in Indian art is never static. It moved from early aniconic architectural symbols (footprints, umbrella-crowned stupas) to the transcendent human form of Gupta Buddhas, the cosmic dynamic physics of the Chola Nataraja, and finally the intimate emotional lyricism of Rajput Krishna-Bhakti paintings.',
    artifactIds: ['pashupati-seal', 'sanchi-stupa', 'gupta-buddha', 'nataraja', 'rajput-miniature'],
  },
  {
    id: 'Nature',
    title: 'NATURE',
    icon: Trees,
    subtitle: 'From Rock-Shelter Fauna to Cosmic Ecology and Folk Harmony',
    evolutionPath: 'Rock Art Fauna → Lotus Flora of Ajanta → Kashmiri Sun Temples → Mughal Botanical Realism → Tribal Sacred Cycles',
    editorialDescription:
      'The natural world is treated not as a passive backdrop, but as an active sacred participant. From haematite hunting scenes at Bhimbetka to the blooming blue lotuses of Ajanta, the solar chariots of Konark, and the seasonal moods of Ragamala paintings, nature reflects the inner emotional and cosmological order of humanity.',
    artifactIds: ['bhimbetka', 'ajanta', 'konark', 'ragamala', 'warli'],
  },
  {
    id: 'Power',
    title: 'POWER',
    icon: Crown,
    subtitle: 'From Imperial Edicts to Monumental Temples and Nationalist Resistance',
    evolutionPath: 'Mauryan Imperial Pillars → Monolithic Dynastic Mountains → Chola Granite Vimanas → Mughal Court Chronicles → Anti-Colonial Wash Art',
    editorialDescription:
      'Patronage transformed political authority into permanent visual monuments. Ashoka erected polished sandstone pillars proclaiming moral law; Rashtrakuta and Chola kings carved entire mountains to manifest divine rule; Mughal emperors commissioned illuminated histories; and Bengal School modernists forged visual resistance against British colonial hegemony.',
    artifactIds: ['ashokan-pillar', 'ellora', 'brihadisvara', 'mughal-miniature', 'bengal-school'],
  },
  {
    id: 'Everyday Life',
    title: 'EVERYDAY LIFE',
    icon: Users,
    subtitle: 'From Bronze Age Youth to Matrilineal Rituals and Urban Satire',
    evolutionPath: 'Harappan Secular Bronzes → Temple Festivities & Music → Domestic Marriage Murals → Urban Kalighat Satires → Modernist Human Dignity',
    editorialDescription:
      'Alongside monumental court commissions, Indian art continually celebrated ordinary life, human affection, and folk vitality. From the confident posture of the Mohenjo-daro Dancing Girl to the matrilineal domestic walls of Mithila, the sharp street-level satires of 19th-century Kalighat, and Amrita Sher-Gil’s soulful rural portraits, vernacular humanity remains an enduring compass.',
    artifactIds: ['dancing-girl', 'khajuraho', 'madhubani', 'kalighat', 'amrita-shergil'],
  },
]

export default function ArtisticThreads({ onOpenArtifact }: Props) {
  const [activeThreadId, setActiveThreadId] = useState<ThematicThread>('Devotion')
  const activeThread = THREADS.find((t) => t.id === activeThreadId) || THREADS[0]

  const threadArtifacts = activeThread.artifactIds
    .map((id) => artifacts.find((a) => a.id === id))
    .filter((a): a is Artifact => Boolean(a))

  return (
    <section id="threads" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16">
      {/* Editorial Section Header */}
      <div className="border-b border-[#E7DEC8] pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-terracotta font-medium mb-1 font-body">
          <Compass className="w-3.5 h-3.5 text-gold" />
          <span>Thematic Continuities</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-normal">
          Artistic Threads
        </h2>
        <p className="font-body text-base text-charcoal-muted mt-2 max-w-2xl font-light italic">
          "Across centuries, certain ideas continue to reappear in Indian visual culture."
        </p>
      </div>

      {/* Four Theme Navigation Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {THREADS.map((thread) => {
          const Icon = thread.icon
          const isActive = activeThreadId === thread.id
          return (
            <button
              key={thread.id}
              onClick={() => setActiveThreadId(thread.id)}
              className={`p-4 text-left rounded-sm border transition-all duration-200 flex flex-col justify-between ${
                isActive
                  ? 'bg-[#211B17] text-ivory border-[#211B17] shadow-md scale-[1.02]'
                  : 'bg-[#FDFBF8] text-charcoal border-[#E2D8C6] hover:border-gold hover:bg-[#FAF6EF]'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <span
                  className={`font-display text-lg tracking-wider font-medium ${
                    isActive ? 'text-gold-light' : 'text-charcoal'
                  }`}
                >
                  {thread.title}
                </span>
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? 'text-terracotta-light' : 'text-gold'
                  }`}
                />
              </div>
              <p
                className={`text-[11px] font-body line-clamp-2 leading-relaxed ${
                  isActive ? 'text-[#C9C1B8]' : 'text-charcoal-muted'
                }`}
              >
                {thread.subtitle}
              </p>
            </button>
          )
        })}
      </div>

      {/* Active Thread Exhibition Focus Card */}
      <div className="bg-[#FBF8F2] border border-[#E7DEC8] p-6 sm:p-8 rounded-sm shadow-subtle mb-10">
        <div className="max-w-3xl mb-8">
          <span className="text-[10px] font-body uppercase tracking-widest text-terracotta font-semibold block mb-1">
            Historical Trajectory
          </span>
          <h3 className="font-display font-medium text-2xl text-charcoal mb-2">
            {activeThread.subtitle}
          </h3>

          {/* Chronological Flow Pill */}
          <div className="p-3 bg-[#FAF4EA] border border-gold/30 rounded-sm font-body text-xs text-charcoal-soft font-medium tracking-wide mb-4">
            <span className="text-terracotta uppercase tracking-wider text-[10px] block mb-0.5 font-bold">
              Evolution Path:
            </span>
            {activeThread.evolutionPath}
          </div>

          <p className="font-body text-sm text-charcoal-soft leading-relaxed font-light">
            {activeThread.editorialDescription}
          </p>
        </div>

        {/* Curated Artifact Plates for this Thread */}
        <div>
          <span className="text-[11px] font-body uppercase tracking-widest text-charcoal-muted block mb-4 font-medium">
            Featured Exemplars in this Thread ({threadArtifacts.length} Artworks):
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {threadArtifacts.map((artifact) => (
              <div
                key={artifact.id}
                onClick={() => onOpenArtifact(artifact)}
                className="group cursor-pointer bg-[#FCFAF7] border border-[#DFD3C0] hover:border-gold rounded-sm overflow-hidden p-2.5 transition-all duration-200 shadow-subtle hover:shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] rounded-sm overflow-hidden bg-[#161311] mb-2 border border-[#EBE2D3]">
                    <ImageWithFallback
                      src={artifact.image}
                      alt={artifact.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="font-display text-[10px] text-terracotta font-medium block mb-0.5">
                    Plate {artifact.catalogNumber} · {artifact.dateRange}
                  </span>
                  <h4 className="font-display text-sm font-medium text-charcoal leading-snug line-clamp-1 group-hover:text-terracotta transition-colors">
                    {artifact.name}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-[#EDE4D5] flex items-center justify-between text-[10px] font-body text-charcoal-muted">
                  <span>{artifact.region}</span>
                  <span className="text-gold font-medium">Explore →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
