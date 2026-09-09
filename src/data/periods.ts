import { Period } from '../types'

// Note on dating: Indian art history does not move in a single straight line.
// Several traditions below overlap in time and region, and dates are given as
// sensible approximate ranges rather than precise facts, following the scholarly
// convention of "c." (circa) for anything not fixed by inscription or record.

export const periods: Period[] = [
  {
    id: 'prehistoric',
    name: 'Prehistoric & Ancient',
    shortLabel: 'Prehistoric',
    dateRange: 'c. 30,000 BCE – 1500 BCE',
    sortYear: -30000,
    accent: 'charcoal',
    blurb:
      "India's earliest surviving art: rock shelters painted over tens of thousands of years, and the planned cities of the Indus Valley Civilisation with their seals, sculpture and craftwork.",
    didYouKnow: [
      'The rock shelters at Bhimbetka were painted continuously from the Mesolithic era into historic times — some are over 10,000 years old, others were touched up a few centuries ago.',
      'The Indus Valley Civilisation covered a larger area than ancient Egypt and Mesopotamia combined, yet its script still has not been deciphered.',
      'Indus Valley seals were probably used to stamp trade goods — copies of them have turned up as far away as Mesopotamia.',
    ],
    majorArtForms: ['Rock painting', 'Terracotta figurines', 'Seal carving', 'Bronze casting'],
    materials: ['Natural mineral pigments', 'Fired clay', 'Steatite', 'Bronze (lost-wax casting)'],
    themes: ['Hunting and daily life', 'Animals and herding', 'Ritual and fertility symbols', 'Early urban administration'],
    regionsInvolved: ['Central India', 'North India', 'West India'],
    developments: [
      'First known figurative art in the subcontinent',
      'Earliest use of the lost-wax bronze casting technique',
      'Standardised weights, seals and town planning in Indus cities',
    ],
  },
  {
    id: 'mauryan',
    name: 'Mauryan & Early Buddhist',
    shortLabel: 'Mauryan',
    dateRange: 'c. 3rd century BCE – 1st century BCE',
    sortYear: -300,
    accent: 'gold',
    blurb:
      'State-sponsored art under Emperor Ashoka and the spread of Buddhist monuments — pillars, stupas and rock edicts built to carry an imperial and moral message across the subcontinent.',
    didYouKnow: [
      "The Lion Capital of Ashoka's pillar at Sarnath was adopted as independent India's national emblem in 1950, more than 2,200 years after it was carved.",
      'Ashokan pillars were often cut from a single block of sandstone, polished to a mirror-like sheen using a technique that is still not fully understood.',
      'The stone railings and gateways at Sanchi were added by patrons over more than two centuries — the monument grew gradually rather than being built at once.',
    ],
    majorArtForms: ['Architecture', 'Sculpture', 'Religious Art'],
    materials: ['Chunar sandstone', 'Polished stone', 'Stone relief carving'],
    themes: ['Buddhist teaching (jataka tales)', 'Imperial authority', 'Animal symbolism', 'Dhamma (moral law)'],
    regionsInvolved: ['North India', 'Central India'],
    developments: [
      'First large-scale state patronage of religious monuments',
      'Introduction of monumental stone architecture in place of earlier wood and brick',
      'Stupa form established as the core structure of Buddhist worship',
    ],
  },
  {
    id: 'classical',
    name: 'Classical Age',
    shortLabel: 'Classical',
    dateRange: 'c. 200 BCE – 650 CE',
    sortYear: 300,
    accent: 'terracotta',
    blurb:
      'Often called a golden age: rock-cut cave complexes, refined narrative painting and a mature sculptural language developed under the Satavahanas, Vakatakas and Guptas, spreading Buddhist, Hindu and Jain imagery alike.',
    didYouKnow: [
      'The Ajanta caves were abandoned for over a thousand years and rediscovered by chance in 1819 by a British officer, John Smith, out on a tiger hunt.',
      'Gupta-period sculpture became the visual reference point that later Southeast Asian art — in Cambodia, Thailand and Indonesia — drew on for centuries.',
      'Many Ajanta murals were painted using only natural pigments on a mud-and-dung plaster base, yet the colours have survived over 1,500 years in a humid climate.',
    ],
    majorArtForms: ['Painting', 'Sculpture', 'Architecture', 'Religious Art'],
    materials: ['Rock-cut stone', 'Natural pigment on plaster', 'Terracotta', 'Stone and metal sculpture'],
    themes: ['Jataka and Buddhist narrative', 'Hindu deities', 'Courtly and monastic life', 'Idealised human form'],
    regionsInvolved: ['North India', 'Central India', 'West India', 'South India', 'Northeast India'],
    developments: [
      'Mature narrative wall painting appears for the first time at scale',
      'Standardisation of iconography for Hindu, Buddhist and Jain deities',
      'Cave-cut architecture reaches its most refined stage',
    ],
  },
  {
    id: 'medieval',
    name: 'Medieval Temple-Building Era',
    shortLabel: 'Medieval',
    dateRange: 'c. 800 – 1300 CE',
    sortYear: 1000,
    accent: 'indigo',
    blurb:
      'Regional dynasties — Chola, Hoysala, Chandela, Ganga, Karkota and eastern kingdoms — competed through architecture, raising temple complexes of extraordinary scale and casting bronze sculpture of exceptional technical refinement.',
    didYouKnow: [
      'The Chola bronze image of Nataraja was made using the lost-wax method, meaning every single bronze is unique — the mould is destroyed in the casting process.',
      "The Konark Sun Temple was designed as a colossal stone chariot, complete with 24 carved wheels that double as functioning sundials.",
      'Some Chola temple towers were engineered so precisely that their shadows barely fall on the ground at midday during the equinox.',
    ],
    majorArtForms: ['Architecture', 'Sculpture', 'Religious Art'],
    materials: ['Granite', 'Sandstone', 'Bronze (lost-wax casting)', 'Laterite', 'Limestone ashlar'],
    themes: ['Temple as cosmic diagram', 'Dynastic patronage and prestige', 'Dance and devotion', 'Solar and astronomical symbolism'],
    regionsInvolved: ['North India', 'South India', 'East India', 'Central India', 'Northeast India'],
    developments: [
      'Dravidian and Nagara temple architecture reach full maturity',
      'Bronze sculpture becomes a major independent art form, not just temple furniture',
      'Temple complexes function as economic and administrative centres, not only religious ones',
    ],
  },
  {
    id: 'mughal',
    name: 'Mughal & Rajput Courts',
    shortLabel: 'Mughal Era',
    dateRange: 'c. 1526 – 1857 CE',
    sortYear: 1650,
    accent: 'gold',
    blurb:
      'Painting flourished across several courts at once rather than in one line of descent — imperial Mughal workshops, and the independent Rajput and Pahari courts of Rajasthan and the Himalayan foothills, each with a distinct visual voice.',
    didYouKnow: [
      'Mughal painting workshops (karkhanas) often had a single picture worked on by several specialists — one artist for faces, another for landscape, another for colour.',
      'Rajput and Pahari painting were not a "later stage" of Mughal art — they developed alongside it, sometimes sharing artists who moved between courts.',
      'Kangra painting is named after a small hill kingdom in present-day Himachal Pradesh, where a refined, lyrical style flourished in the 18th century under royal patronage.',
    ],
    majorArtForms: ['Painting', 'Architecture', 'Textile'],
    materials: ['Opaque watercolour and gouache on paper', 'Gold leaf', 'Handmade paper (wasli)', 'Marble and red sandstone (architecture)'],
    themes: ['Courtly life and portraiture', 'Krishna devotional poetry (Rajput/Pahari)', 'Hunting and battle scenes', 'Literary and epic illustration'],
    regionsInvolved: ['North India', 'West India', 'Northeast India'],
    developments: [
      'Miniature painting becomes a major courtly art form across multiple simultaneous centres',
      'Persian, Central Asian and indigenous Indian styles blend into new regional idioms',
      'Illustrated manuscripts become prestige objects commissioned by rulers',
    ],
  },
  {
    id: 'regional',
    name: 'Regional & Folk Traditions',
    shortLabel: 'Regional & Folk',
    dateRange: 'Centuries-old, practised continuously to the present',
    sortYear: 1400,
    accent: 'terracotta',
    blurb:
      'Traditions such as Madhubani, Warli, Kalamkari and Tanjore painting are not stops on a single timeline — they developed within their own communities over centuries, often in parallel with courtly and religious art, and many remain living practices today.',
    didYouKnow: [
      'Warli painting uses only white pigment (rice paste) on a mud base and was traditionally practised by women of the Warli tribe of Maharashtra for ritual occasions, not for sale.',
      'Madhubani painting only reached a wider audience after a severe drought in Bihar in 1966, when women were encouraged to paint on paper to sell instead of just on their walls.',
      'Kalamkari gets its name from "kalam" (pen) and "kari" (work) — the finest lines are drawn with a bamboo or date-palm pen dipped in natural dye, not printed.',
    ],
    majorArtForms: ['Folk Art', 'Tribal Art', 'Textile', 'Painting'],
    materials: ['Natural dyes and pigments', 'Rice paste', 'Cotton cloth (kalamkari, tanjore base)', 'Gold foil and gems (Tanjore)', 'Cane and bamboo'],
    themes: ['Rural and tribal daily life', 'Regional deities and epics', 'Nature, harvest and fertility', 'Community ritual and celebration'],
    regionsInvolved: ['East India', 'West India', 'South India', 'Central India', 'Northeast India'],
    developments: [
      'Community-based, often women-led artistic transmission across generations',
      'Survival and adaptation of pre-courtly visual traditions into the present day',
      'Later recognition and market growth through 20th-century revival efforts and GI (Geographical Indication) status',
    ],
  },
  {
    id: 'colonial',
    name: 'Colonial & Early Modern',
    shortLabel: 'Colonial',
    dateRange: 'c. 1757 – 1947 CE',
    sortYear: 1880,
    accent: 'indigo',
    blurb:
      'Exposure to European academic painting, print technology and colonial patronage reshaped Indian art, provoking both hybrid new styles and a nationalist search for a distinctly "Indian" visual identity.',
    didYouKnow: [
      'Raja Ravi Varma set up one of India\'s first oleograph printing presses, which meant his paintings of gods and goddesses could be mass-produced and hung in ordinary homes for the first time.',
      'The Bengal School deliberately rejected Western oil-painting technique in favour of the wash technique, partly as a statement against colonial academic art training.',
      'Kalighat painting began as souvenir art sold to pilgrims outside the Kalighat temple in Calcutta, using quick brush strokes designed for speed and volume, not preciousness.',
    ],
    majorArtForms: ['Painting', 'Modern Art', 'Religious Art'],
    materials: ['Oil on canvas', 'Watercolour wash', 'Lithograph and oleograph print', 'Ink on paper'],
    themes: ['Mythology reimagined for a mass audience', 'Nationalism and swadeshi identity', 'Urban and everyday satire (Kalighat)', 'East-West stylistic fusion'],
    regionsInvolved: ['East India', 'South India', 'West India'],
    developments: [
      'Print technology creates the first genuinely mass-market Indian visual culture',
      'Formal art schools and academies are established for the first time',
      'A self-conscious nationalist art movement emerges seeking an alternative to European academic style',
    ],
  },
  {
    id: 'contemporary',
    name: 'Contemporary',
    shortLabel: 'Contemporary',
    dateRange: '1947 CE – present',
    sortYear: 1980,
    accent: 'charcoal',
    blurb:
      'Since independence, Indian artists have worked across an enormous range of styles and materials, engaging with global modern and contemporary art movements while continuing to draw on classical, folk and regional visual languages.',
    didYouKnow: [
      'The Progressive Artists\' Group, formed in Bombay in 1947, deliberately broke away from both revivalist nationalist art and colonial academic style to pursue an independent modern idiom.',
      'Several contemporary Indian artists now sell works internationally for record prices at auction houses such as Christie\'s and Sotheby\'s.',
      'Folk art traditions like Madhubani and Warli have moved into contemporary gallery and public-art spaces, showing that "traditional" and "contemporary" are not opposites in Indian art.',
    ],
    majorArtForms: ['Modern Art', 'Painting', 'Sculpture'],
    materials: ['Oil and acrylic on canvas', 'Mixed media and installation', 'Digital and new media', 'Sculpture in varied materials'],
    themes: ['Post-independence identity', 'Globalisation and diaspora', 'Abstraction and experimentation', 'Reinterpretation of tradition'],
    regionsInvolved: ['North India', 'South India', 'East India', 'West India', 'Central India', 'Northeast India'],
    developments: [
      'Formation of independent modern art collectives after 1947',
      'Growing international market and recognition for Indian contemporary artists',
      'Increasing dialogue between folk, tribal and contemporary gallery practice',
    ],
  },
]

export const periodById = (id: string): Period | undefined => periods.find((p) => p.id === id)
