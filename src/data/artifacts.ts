import { Artifact } from '../types'

export const artifacts: Artifact[] = [
  // --- PREHISTORIC & ANCIENT ---
  {
    id: 'bhimbetka',
    name: 'Bhimbetka Rock Shelters',
    periodId: 'prehistoric',
    dateRange: 'c. 30,000 BCE – historic era (repainted over millennia)',
    sortYear: -30000,
    region: 'Central India',
    artForm: 'Painting',
    medium: 'Mineral pigments (red ochre, white limestone, green chalcedony) on sandstone rock',
    image: '/images/bhimbetka.jpg',
    imageAlt: 'Mesolithic ochre rock paintings of animals and hunting scenes at Bhimbetka, Madhya Pradesh',
    imageAttribution: 'Photograph: Wikimedia Commons (Creative Commons Attribution-Share Alike). UNESCO World Heritage Site.',
    historicalContext:
      'Discovered in 1957 by archaeologist V. S. Wakankar in the Vindhyan hills of Madhya Pradesh, the Bhimbetka shelters preserve an astonishing chronicle of human existence spanning the Upper Paleolithic, Mesolithic, Chalcolithic, and early historic eras. Over 750 rock shelters dot the sandstone ridge.',
    culturalSignificance:
      'Bhimbetka provides the earliest tangible evidence of human artistic impulse in the Indian subcontinent. It proves that prehistoric hunter-gatherers and pastoralists developed symbolic visual vocabularies, musical dance ceremonies, and sacred relationship with fauna millennia before urbanization.',
    visualCharacteristics:
      'Energetic, dynamic silhouettes of wild bison, tigers, boars, rhinos, and elephants rendered in natural haematite red and bone-white. Stick-like human figures participate in ritual group dances, community hunts with spears and bows, and domestic scenes.',
    importance:
      'It anchors the bedrock of Indian visual art, demonstrating continuous creative reuse of sacred spaces across 30,000 years and establishing motifs that still resonate in modern indigenous tribal art like Warli and Gond.',
    relatedTraditions: ['Warli painting', 'Pachmarhi rock art', 'Central Indian Tribal art'],
  },
  {
    id: 'dancing-girl',
    name: 'Dancing Girl of Mohenjo-daro',
    periodId: 'prehistoric',
    dateRange: 'c. 2500 BCE',
    sortYear: -2500,
    region: 'West India',
    artForm: 'Sculpture',
    medium: 'Bronze (lost-wax casting / cire perdue)',
    image: '/images/dancing-girl.jpg',
    imageAlt: 'Small bronze statuette of a standing young woman with hand on hip, from Mohenjo-daro',
    imageAttribution: 'National Museum, New Delhi / Photograph: Wikimedia Commons (Public Domain).',
    historicalContext:
      'Excavated in 1926 by British archaeologist Ernest Mackay from HR area of Mohenjo-daro (Indus Valley Civilisation). Standing just 10.5 cm tall, this masterpiece of prehistoric metallurgy astonished archaeologists who had not anticipated such sculptural sophistication in Bronze Age South Asia.',
    culturalSignificance:
      'The statuette demonstrates mastery over the lost-wax casting technique (cire perdue), which remains the foundational method for traditional Indian metal casting to this day. It offers a rare glimpse into bronze age ornamentation, body adornment, and female status in Harappan society.',
    visualCharacteristics:
      'A confident young woman standing in a relaxed, rhythmic tribhanga-like pose. Her left arm is adorned nearly up to the shoulder with 24 bangles, resting on her thigh, while her right hand rests proudly on her hip with head slightly tilted back and hair gathered in an intricate bun.',
    importance:
      `Archaeologist Sir Mortimer Wheeler remarked: "She's about fifteen years old, but she stands there with bangles all the way up her arm and nothing else... perfectly confident of herself and the world." It marks the earliest masterpiece of dynamic human characterization in Asian sculpture.`,
    relatedTraditions: ['Priest-King of Mohenjo-daro', 'Chola Bronze casting', 'Dokra lost-wax crafts'],
  },
  {
    id: 'pashupati-seal',
    name: 'Pashupati Seal',
    periodId: 'prehistoric',
    dateRange: 'c. 2500 – 2000 BCE',
    sortYear: -2400,
    region: 'West India',
    artForm: 'Sculpture',
    medium: 'Carved steatite (soapstone) treated with alkali and baked',
    image: '/images/pashupati-seal.jpg',
    imageAlt: 'Small square steatite seal depicting a horned seated yogic figure surrounded by wild animals',
    imageAttribution: 'National Museum, New Delhi / Photograph: Wikimedia Commons (Public Domain).',
    historicalContext:
      'Discovered during the 1928–29 excavations at Mohenjo-daro by Sir John Marshall. Harappan seals were used by administrative and merchant guilds to stamp wet clay tags (sealings) on sacks of trade goods bound for Mesopotamia and the Persian Gulf.',
    culturalSignificance:
      'John Marshall famously identified the figure as a "proto-Shiva", highlighting the seated yogic asana (Mulabandhasana), horned buffalo headdress, and sovereign dominion over beasts (Pashupati, "Lord of Animals"). While scholarly debates continue regarding Harappan religion, it remains a central bridge in the study of Indian meditative traditions.',
    visualCharacteristics:
      'A tricephalic or horned deity seated cross-legged on a low dais. Flanking the deity are four wild beasts: an elephant and tiger on the right, and a rhinoceros and water buffalo on the left, with two antelopes beneath the throne. Carved in precise intaglio with undeciphered Indus pictograms along the top border.',
    importance:
      'It exemplifies the extraordinary miniature lapidary skill of Indus artisans, able to achieve microscopic anatomical precision on a stone tablet barely 3.4 cm across.',
    relatedTraditions: ['Dancing Girl of Mohenjo-daro', 'Vedic Rudra iconography', 'Shaivite sculpture'],
  },
  {
    id: 'priest-king',
    name: 'Priest-King of Mohenjo-daro',
    periodId: 'prehistoric',
    dateRange: 'c. 2000 – 1900 BCE',
    sortYear: -2000,
    region: 'West India',
    artForm: 'Sculpture',
    medium: 'Low-fired steatite (soapstone) with traces of red pigment',
    image: '/images/priest-king.jpg',
    imageAlt: 'Steatite bust of a bearded dignitary wearing a trefoil-patterned shawl',
    imageAttribution: 'National Museum of Pakistan / Photograph: Wikimedia Commons (Public Domain).',
    historicalContext:
      'Unearthed in 1927 by D. K. Dikshit in the DK-B area of Mohenjo-daro. Measuring 17.5 cm high, this miniature portrait bust was discovered within a domestic quarter with brick drains and thick walls, likely the private residence of an Indus aristocrat or high administrator.',
    culturalSignificance:
      'The sculpture represents the political and ritual authority of the Indus Valley Civilisation. The trefoil motif on his cloak has direct astronomical parallels in contemporaneous Mesopotamian and Minoan symbolism, signifying high religious status or astral sovereignty.',
    visualCharacteristics:
      'A serene, dignified man with a neatly trimmed beard, shaved upper lip, and carefully combed hair bound with a fillet (diadem) centered with an inlaid circular medallion. His left shoulder is draped with a ceremonial cloak decorated with raised trefoils once inlaid with red paste, while his right arm bears an armband.',
    importance:
      'It is the only surviving formal monumental portrait from the Indus civilization, capturing an aura of meditative authority and sophisticated royal textile fashion 4,000 years ago.',
    relatedTraditions: ['Dancing Girl of Mohenjo-daro', 'Harappan Terracotta Figurines', 'Sumerian statuary'],
  },

  // --- MAURYAN & EARLY BUDDHIST ---
  {
    id: 'sanchi-stupa',
    name: 'The Great Stupa at Sanchi',
    periodId: 'mauryan',
    dateRange: 'c. 3rd century BCE – 1st century CE',
    sortYear: -250,
    region: 'Central India',
    artForm: 'Architecture',
    medium: 'Sandstone masonry, carved stone gateways (toranas) and balustrades',
    image: '/images/sanchi-stupa.jpg',
    imageAlt: 'The hemispherical Great Stupa dome at Sanchi with intricately carved torana gateways',
    imageAttribution: 'Photograph: Wikimedia Commons (Creative Commons Attribution-Share Alike). UNESCO World Heritage Site.',
    historicalContext:
      'Originally commissioned by Emperor Ashoka the Great in the 3rd century BCE over relics of the Buddha, Sanchi was monumentalized and expanded during the Sunga and Satavahana eras. Wealthy guilds of ivory carvers from Vidisha carved the four majestic toranas (gateways) around 1st century BCE.',
    culturalSignificance:
      'Sanchi is the quintessential Buddhist architectural archetype and the oldest intact stone monument in India. The circumambulatory path (pradakshina patha) embodies cosmological cycles, where worshippers walk clockwise around the sacred cosmic axis.',
    visualCharacteristics:
      'A colossal hemispherical anda (dome) crowned by a harmika and three-tiered stone chhatra (royal parasol). The four toranas are covered with dense relief carvings of Jataka tales, celestial yakshis (tree goddesses), and aniconic representations of the Buddha (represented as footprints, empty throne, Bodhi tree, and wheel of law).',
    importance:
      'It represents the golden age of aniconic Buddhist art and demonstrates how narrative relief sculpture was mobilized to inspire and instruct thousands of pilgrims across ancient Silk and Spice routes.',
    relatedTraditions: ['Ashokan Pillar / Lion Capital', 'Bharhut Stupa', 'Amaravati Stupa', 'Ajanta Caves'],
  },
  {
    id: 'ashokan-pillar',
    name: 'Lion Capital of Ashoka, Sarnath',
    periodId: 'mauryan',
    dateRange: 'c. 250 BCE',
    sortYear: -250,
    region: 'North India',
    artForm: 'Sculpture',
    medium: 'Monolithic polished Chunar sandstone with mirror-like finish',
    image: '/images/ashokan-pillar.jpg',
    imageAlt: 'Four-lion capital standing back-to-back atop an abacus with the Ashoka Chakra, Sarnath',
    imageAttribution: 'Sarnath Archaeological Museum / Photograph: Wikimedia Commons (Public Domain). State Emblem of India.',
    historicalContext:
      'Erected by Emperor Ashoka around 250 BCE at Deer Park in Sarnath, marking the precise sanctified ground where Gautama Buddha delivered his first sermon (the Dhammacakkappavattana Sutta) after attaining enlightenment.',
    culturalSignificance:
      'Adopted on 26 January 1950 as the official National Emblem of the Republic of India. The Ashoka Chakra at its center occupies the middle band of the Indian National Flag, symbolizing cosmic righteousness, moral law (Dharma), and continuous progress.',
    visualCharacteristics:
      'Four majestic Asiatic lions seated back-to-back facing the four cardinal directions. The circular abacus beneath them is carved in high relief with four animals associated with the Buddha\'s life (elephant, horse, bull, and lion) separated by four spoked wheels (chakras), resting upon an inverted lotus.',
    importance:
      'Exhibits the legendary "Mauryan polish" — a mirror-like vitreous glaze on Chunar sandstone achieved through techniques so sophisticated that modern stone carvers cannot replicate it.',
    relatedTraditions: ['The Great Stupa at Sanchi', 'Didarganj Yakshi', 'Rampurva Bull Capital'],
  },
  {
    id: 'didarganj-yakshi',
    name: 'Didarganj Yakshi',
    periodId: 'mauryan',
    dateRange: 'c. 3rd – 2nd century BCE',
    sortYear: -200,
    region: 'East India',
    artForm: 'Sculpture',
    medium: 'Highly polished Chunar sandstone',
    image: '/images/didarganj-yakshi.jpg',
    imageAlt: 'Polished sandstone sculpture of a life-sized female figure holding a fly-whisk (chauri)',
    imageAttribution: 'Bihar Museum, Patna / Photograph: Wikimedia Commons (Creative Commons).',
    historicalContext:
      'Discovered in October 1917 washed up on the banks of the Ganges River at Didarganj, Patna (ancient Pataliputra, imperial capital of the Mauryan Empire). It is one of the grandest standalone life-size statues preserved from early historic India.',
    culturalSignificance:
      'Represents a Yakshi (nature deity of fecundity, protection, and earth wealth) in the form of a royal chauri (fly-whisk) bearer. It shows the translation of indigenous fertility cults into imperial court art.',
    visualCharacteristics:
      'Stands 1.62 meters tall with sensuous, classical Indian female proportions: broad hips, narrow waist, heavy beaded necklaces, elaborate lower drapery with pleated folds, and a fly-whisk held with poise in her right hand. The entire surface shimmers with radiant Mauryan polish.',
    importance:
      'It established the ideal aesthetic canon of Indian feminine beauty and sculptural grace that endured through Kushan, Gupta, and Medieval temple sculpture.',
    relatedTraditions: ['Lion Capital of Ashoka', 'Bharhut Yakshis', 'Kushan Mathura Sculpture'],
  },
  {
    id: 'gandhara-buddha',
    name: 'Standing Buddha of Gandhara',
    periodId: 'mauryan',
    dateRange: 'c. 1st – 2nd century CE (Kushan Empire)',
    sortYear: 100,
    region: 'North India',
    artForm: 'Sculpture',
    medium: 'Carved gray-blue schist stone',
    image: '/images/gandhara-buddha.jpg',
    imageAlt: 'Life-sized standing statue of Buddha wearing Hellenistic flowing drapery',
    imageAttribution: 'Tokyo National Museum / Wikimedia Commons (Public Domain).',
    historicalContext:
      'Produced in the ancient kingdom of Gandhara (Peshawar basin and northern Punjab) during the cosmopolitan Kushan dynasty under King Kanishka. Gandhara sat at the supreme nexus of the Silk Road connecting India, China, Rome, and Persia.',
    culturalSignificance:
      'Represents one of the earliest anthropomorphic depictions of the Buddha in human form. It is the defining monument of Greco-Buddhist art, synthesizing Greek Apollo-like facial ideals with profound Indian Buddhist metaphysical iconography.',
    visualCharacteristics:
      'The Buddha stands with calm transcendence, right hand raised in the abhaya mudra (gesture of fearlessness). He wears a monastic robe (sanghati) carved with deep, rhythmic Hellenistic folds resembling a Roman toga. His wavy locks are gathered in an ushnisha (cranial bump of wisdom), framed by a radiant circular halo.',
    importance:
      'Gandharan sculptural aesthetics profoundly influenced the spread of Mahayana Buddhist imagery across Central Asia into China, Korea, and Japan.',
    relatedTraditions: ['Mathura Standing Buddha', 'Bamiyan Buddhas', 'Ajanta Cave Murals'],
  },

  // --- CLASSICAL AGE ---
  {
    id: 'ajanta',
    name: 'Ajanta Cave Paintings (Bodhisattva Padmapani)',
    periodId: 'classical',
    dateRange: 'c. 2nd century BCE – 6th century CE (Vakataka Golden Age)',
    sortYear: 450,
    region: 'West India',
    artForm: 'Painting',
    medium: 'Mineral tempera on clay, cow dung, straw and lime plaster over basalt rock',
    image: '/images/ajanta.jpg',
    imageAlt: 'Mural painting of the serene Bodhisattva Padmapani holding a blue lotus in Cave 1, Ajanta',
    imageAttribution: 'Archaeological Survey of India / Wikimedia Commons (Public Domain). UNESCO World Heritage Site.',
    historicalContext:
      'A horseshoe gorge of 30 rock-hewn caves in Maharashtra, sponsored by the Vakataka King Harishena in the late 5th century CE. Abandoned after the collapse of the dynasty, Ajanta was reclaimed by jungle until an accidental rediscovery by British officer John Smith during a tiger hunt in 1819.',
    culturalSignificance:
      'Ajanta contains the supreme surviving corpus of ancient Asian painting. The Padmapani ("Lotus Bearer") in Cave 1 embodies karuna (infinite compassion) toward all sentient beings, having renounced personal nirvana to alleviate worldly suffering.',
    visualCharacteristics:
      'The Bodhisattva stands in a gentle tribhanga pose holding a blooming blue lotus (nilotpala). Shading techniques (vartana) create soft dimensional volume, three-quarter facial orientation, elongated lotus eyes, and an opulent jeweled crown with pearls and sapphires.',
    importance:
      'Ajanta established the classical grammar of Indian painting described in ancient treatise texts like the Chitrasutra of the Vishnudharmottara Purana, influencing Buddhist murals from Dunhuang (China) and Sigiriya (Sri Lanka) to Horyu-ji (Japan).',
    relatedTraditions: ['Bagh Caves', 'Sigiriya Frescoes', 'Ellora Caves', 'Mughal miniature painting'],
  },
  {
    id: 'ellora',
    name: 'Kailasa Temple, Ellora (Cave 16)',
    periodId: 'classical',
    dateRange: 'c. 756 – 774 CE (Rashtrakuta Dynasty)',
    sortYear: 760,
    region: 'West India',
    artForm: 'Architecture',
    medium: 'Monolithic rock-cut basalt (excavated top-down from living mountain rock)',
    image: '/images/ellora.jpg',
    imageAlt: 'Colossal monolithic Kailasa Temple excavated downwards from basalt cliff at Ellora',
    imageAttribution: 'Photograph: Wikimedia Commons (Creative Commons). UNESCO World Heritage Site.',
    historicalContext:
      'Commissioned by Rashtrakuta King Krishna I in the 8th century CE to recreate Shiva\'s Himalayan celestial abode Mount Kailasa. The entire temple was carved entirely top-down from the cliffside in a single excavation campaign, removing an estimated 200,000 tonnes of basalt rock.',
    culturalSignificance:
      'Widely regarded as the greatest single monolithic rock-cut monument in human history. Ellora brings together Hindu, Buddhist, and Jain sanctuaries side-by-side, testifying to ancient India\'s philosophical tolerance and syncretic creative vigor.',
    visualCharacteristics:
      'A free-standing, multi-story temple complex measuring 45 meters deep, 30 meters wide, and 30 meters high. It features a grand gateway (gopura), nandi mandapa, assembly hall, sanctum with Dravidian shikhara, and immense life-sized sculpted elephants supporting the temple plinth.',
    importance:
      'The architects worked in "negative space" — with zero room for error, as any broken stone could never be replaced or patched. An inscription by an ancient architect records: "Oh, how was it that I made it? It is a wonder!"',
    relatedTraditions: ['Ajanta Caves', 'Elephanta Cave Shiva Trimurti', 'Mamallapuram Shore Temple'],
  },
  {
    id: 'gupta-buddha',
    name: 'Sarnath Standing Buddha',
    periodId: 'classical',
    dateRange: 'c. 5th century CE (Gupta Empire)',
    sortYear: 475,
    region: 'North India',
    artForm: 'Sculpture',
    medium: 'Chunar sandstone with diaphanous wet-drapery treatment',
    image: '/images/gupta-buddha.jpg',
    imageAlt: 'Serene standing Gupta Buddha in translucent robe with halo, Sarnath',
    imageAttribution: 'National Museum, New Delhi / Wikimedia Commons (Public Domain).',
    historicalContext:
      'Crafted during the zenith of the Gupta Empire (often termed the Golden Age of Classical Indian Civilization) under Kumargupta or Budhagupta in the workshops of Sarnath and Mathura.',
    culturalSignificance:
      'Gupta sculptural style synthesized the spiritual intensity of earlier schools into an ethereal, transcendent equilibrium. The Buddha\'s gaze turned inward expresses the highest state of meditative equanimity (samadhi).',
    visualCharacteristics:
      'The robe (sanghati) clings to the body with absolute transparency like wet silk, revealing idealized anatomical contours. The serene face has downcast eyes shaped like lotus petals, smooth snail-shell curls, elongated earlobes, and a richly ornamented floral halo (prabhamandala) carved with celestial gandharvas.',
    importance:
      'The Gupta Buddha became the definitive sacred prototype adopted by Buddhist sculptures across Southeast Asia, including Dvaravati (Thailand), Pagan (Myanmar), and Borobudur (Indonesia).',
    relatedTraditions: ['Gandhara Buddha', 'Mathura Bodhisattvas', 'Sultanganj Bronze Buddha'],
  },
  {
    id: 'shore-temple',
    name: 'Shore Temple & Descent of the Ganges, Mamallapuram',
    periodId: 'classical',
    dateRange: 'c. 700 – 728 CE (Pallava Dynasty)',
    sortYear: 710,
    region: 'South India',
    artForm: 'Architecture',
    medium: 'Dressed granite stone masonry perched on the Bay of Bengal coast',
    image: '/images/shore-temple.jpg',
    imageAlt: 'Granite stone towers of the Shore Temple overlooking the waves of Mamallapuram',
    imageAttribution: 'Photograph: Wikimedia Commons (Creative Commons). UNESCO World Heritage Site.',
    historicalContext:
      'Built under Pallava King Narasimhavarman II (Rajasimha) at the bustling port city of Mamallapuram (Mahabalipuram), where merchant fleets departed for Sri Lanka, Java, and the Khmer Empire.',
    culturalSignificance:
      'One of the oldest structural (free-standing stone masonry) temples in Southern India, marking the transition from rock-cut cave rathas to monumental stone architecture that would define Dravidian style for the next millennium.',
    visualCharacteristics:
      'Twin pyramidal vimana towers rising right on the oceanic coastline, housing sanctums dedicated to Shiva and reclining Vishnu (Anantashayana). The perimeter wall is crowned with 50 sculpted monolithic Nandi bulls facing the sea, built to withstand millennia of salt-air monsoon winds.',
    importance:
      'Served as a luminous navigational beacon for ancient mariners and stands as the fountainhead of South Indian temple architecture.',
    relatedTraditions: ['Pancha Rathas', 'Kailasanathar Temple Kanchipuram', 'Brihadisvara Temple'],
  },
  {
    id: 'daparbatia',
    name: 'Da Parbatia Sculpted Doorframe, Tezpur',
    periodId: 'classical',
    dateRange: 'c. 5th – 6th century CE (Gupta Influence)',
    sortYear: 550,
    region: 'Northeast India',
    artForm: 'Architecture',
    medium: 'Carved sandstone temple ruins with river goddess reliefs',
    image: '/images/daparbatia.jpg',
    imageAlt: 'Ancient sandstone temple doorframe depicting river goddesses Ganga and Yamuna at Da Parbatia, Assam',
    imageAttribution: 'Archaeological Survey of India / Wikimedia Commons (Public Domain).',
    historicalContext:
      'Discovered near Tezpur in the Brahmaputra Valley of Assam, this exquisite doorframe is the oldest surviving monument of stone architecture and plastic art in Northeast India, carved when the Kamarupa kingdom was in active cultural communication with the imperial Gupta heartland.',
    culturalSignificance:
      'Proves that classical Gupta aesthetic canons and sacred iconography extended far into the northeastern reaches of the subcontinent, adapting to regional stylistic grace.',
    visualCharacteristics:
      'The door jambs feature life-sized, gracefully poised depictions of the sacred river goddesses Ganga (on her makara) and Yamuna (on her tortoise) holding lotus garlands. Above them, celestial garland bearers (vidyadharas) and floral foliage swirl in intricate low relief.',
    importance:
      'A supreme foundational artifact establishing the antiquity of stone sculpture in Assam and linking ancient Kamarupa to the pan-Indian classical aesthetic.',
    relatedTraditions: ['Gupta Sarnath Buddha', 'Deogarh Dashavatara Temple', 'Assam Kamakhya Art'],
  },

  // --- MEDIEVAL TEMPLE-BUILDING ERA ---
  {
    id: 'nataraja',
    name: 'Chola Bronze of Nataraja (Lord of Dance)',
    periodId: 'medieval',
    dateRange: 'c. 10th – 12th century CE',
    sortYear: 1000,
    region: 'South India',
    artForm: 'Sculpture',
    medium: 'Bronze / Panchaloha (five-metal alloy) via lost-wax casting',
    image: '/images/nataraja.jpg',
    imageAlt: 'Sculpture of Shiva Nataraja performing the cosmic dance of creation and destruction within a ring of flames',
    imageAttribution: 'LACMA Collection / Wikimedia Commons (Public Domain).',
    historicalContext:
      'Cast under the imperial Chola dynasty of Tamil Nadu (specifically under Queen Sembiyan Mahadevi and Emperor Rajaraja Chola I). These sacred bronzes were utsava murtis — processional deities carried through temple streets amid bells, incense, and hymns.',
    culturalSignificance:
      'Considered by art historians and physicists alike (including Fritjof Capra and Carl Sagan) as the ultimate artistic visual metaphor of modern astrophysics and cosmic rhythm: the continuous five activities (Panchakritya) of creation, preservation, destruction, illusion, and liberation.',
    visualCharacteristics:
      'Shiva dances in the ananda tandava inside a circular aureole of flames (prabha mandala). Upper right hand holds the damaru (drum of primal sound/creation); upper left holds agni (fire of transformation); lower right is in abhaya mudra (fearlessness); lower left points down to the lifted foot of refuge. His right foot stamps out Apasmara (the dwarf demon of ignorance).',
    importance:
      'French sculptor Auguste Rodin praised the Nataraja as one of the finest plastic expressions of movement in the history of world art.',
    relatedTraditions: ['Brihadisvara Temple', 'Pallava Bronzes', 'South Indian Temple arts'],
  },
  {
    id: 'brihadisvara',
    name: 'Brihadisvara Temple, Thanjavur',
    periodId: 'medieval',
    dateRange: '1010 CE (Chola Empire)',
    sortYear: 1010,
    region: 'South India',
    artForm: 'Architecture',
    medium: 'Monolithic granite blocks stacked without binding mortar',
    image: '/images/brihadisvara.jpg',
    imageAlt: 'Soaring 66-meter granite vimana tower of the Brihadisvara Temple, Thanjavur',
    imageAttribution: 'Photograph: Wikimedia Commons (Creative Commons). UNESCO World Heritage Site.',
    historicalContext:
      'Completed in 1010 CE by the great conqueror Emperor Rajaraja Chola I to commemorate imperial victories and celebrate Lord Shiva as Peruvudaiyar. The surrounding region of Thanjavur has no natural granite quarries; massive stones were transported over 50 kilometers on barges and rollers.',
    culturalSignificance:
      'The crowning jewel of the Great Living Chola Temples (UNESCO). It served as the spiritual, cultural, and financial nucleus of the Chola maritime empire, employing hundreds of dancers, musicians, accountants, and bronze masters.',
    visualCharacteristics:
      'The central vimana tower rises 66 meters into the sky across 16 stepped tiers. It is capped by an 80-tonne monolithic octagonal granite dome (kumbam), hoisted to the peak via an earthen ramp several kilometers long. Guarding the entrance is a colossal 20-tonne monolithic Nandi bull.',
    importance:
      'Stands as one of the tallest architectural marvels of the medieval world, engineered with interlocking stone joints that have withstood severe earthquakes for over a millennium.',
    relatedTraditions: ['Gangaikonda Cholapuram', 'Shore Temple Mamallapuram', 'Chola Bronzes'],
  },
  {
    id: 'konark',
    name: 'Konark Sun Temple',
    periodId: 'medieval',
    dateRange: 'c. 1250 CE (Eastern Ganga Dynasty)',
    sortYear: 1250,
    region: 'East India',
    artForm: 'Architecture',
    medium: 'Chlorite, khondalite, and laterite stone with iron dowels',
    image: '/images/konark.jpg',
    imageAlt: 'Massive carved stone wheel of the Surya Sun Chariot temple at Konark, Odisha',
    imageAttribution: 'Photograph: Wikimedia Commons (Creative Commons). UNESCO World Heritage Site.',
    historicalContext:
      'Commissioned by King Narasimhadeva I of the Eastern Ganga Dynasty on the shores of the Bay of Bengal to honor the solar deity Surya. European sailors historically nicknamed it the "Black Pagoda" because its magnetic tower guided ships along the Odishan coast.',
    culturalSignificance:
      'The entire temple is conceived as a cosmic sun chariot. The 24 monumental carved wheels represent the 24 fortnights of the solar year, each functioning as a high-precision sundial that measures time down to minutes using the shadow cast on its inner spokes.',
    visualCharacteristics:
      'Seven rearing galloping stone horses pull the colossal 24-wheeled chariot. Every square inch of the temple plinth and natamandira (dance hall) is carved with intricate friezes of musicians, courtly processions, battle parades, mythic beasts (gajasimhas), and celebrated erotic figures.',
    importance:
      'Nobel laureate Rabindranath Tagore famously observed of Konark: "Here the language of stone surpasses the language of human art."',
    relatedTraditions: ['Jagannath Temple Puri', 'Lingaraja Temple Bhubaneswar', 'Khajuraho Temples'],
  },
  {
    id: 'khajuraho',
    name: 'Khajuraho Temple Complex (Kandariya Mahadeva)',
    periodId: 'medieval',
    dateRange: 'c. 950 – 1050 CE (Chandela Dynasty)',
    sortYear: 1000,
    region: 'Central India',
    artForm: 'Architecture',
    medium: 'Light yellow sandstone dry-masonry with mortise-and-tenon joints',
    image: '/images/khajuraho.jpg',
    imageAlt: 'Curvilinear spires of Kandariya Mahadeva temple clustered like Himalayan peaks, Khajuraho',
    imageAttribution: 'Photograph: Wikimedia Commons (Creative Commons). UNESCO World Heritage Site.',
    historicalContext:
      'Built by the Chandela Rajput dynasty in the Bundelkhand region of Madhya Pradesh. Out of an original cluster of 85 temples, 25 survive today across Hindu and Jain denominations, preserved by dense surrounding teak forests after the fall of the Chandelas.',
    culturalSignificance:
      'Represents the zenith of Nagara (North Indian) temple architecture. The temples celebrate the complete holistic spectrum of human existence: spiritual transcendence, martial valor, musical joy, and sensuous romance (kama) as integrated facets of cosmic harmony.',
    visualCharacteristics:
      'The shikhara of Kandariya Mahadeva rises 31 meters in 84 miniature replica towers (urushringas), mimicking the rhythm of Mount Meru. Over 800 fluidly sculpted statues adorn its exterior bands, depicting celestial nymphs (surasundaris), gods, and celebrated mithuna (amorous) couples.',
    importance:
      'Demonstrates unparalleled mastery in depicting the human body in dynamic, twisting contrapposto poses with anatomical vitality and joyful exuberance.',
    relatedTraditions: ['Konark Sun Temple', 'Modhera Sun Temple', 'Dilwara Jain Temples'],
  },
  {
    id: 'hoysala',
    name: 'Hoysaleswara Temple, Halebidu',
    periodId: 'medieval',
    dateRange: 'c. 1121 – 1160 CE (Hoysala Empire)',
    sortYear: 1150,
    region: 'South India',
    artForm: 'Architecture',
    medium: 'Dark chloritic schist (soapstone) allowing microscopic filigree carving',
    image: '/images/hoysala.jpg',
    imageAlt: 'Intricately carved soapstone star-shaped plinth and friezes of Hoysaleswara Temple, Halebidu',
    imageAttribution: 'Photograph: Wikimedia Commons (Creative Commons). UNESCO World Heritage Site.',
    historicalContext:
      'Built during the reign of King Vishnuvardhana Hoysala at Dorasamudra (modern Halebidu, Karnataka). Hoysala artisans like Mallitamma and Dasoja were celebrated royal masters who signed their personal sculptures on temple stones.',
    culturalSignificance:
      'Part of the Sacred Ensembles of the Hoysalas inscribed as a UNESCO World Heritage Site in 2023. Soapstone is soft when quarried, allowing jewelers\' precision, before hardening under atmospheric exposure.',
    visualCharacteristics:
      'A stellate (star-shaped) ground plan with twin sanctums. The exterior base features eight continuous horizontal tiers of reliefs: charging elephants, lions, floral scrolls, cavalry horses, epics (Mahabharata and Ramayana), mythical beasts (makaras), and hamsas (swans), running over 200 meters without repeating a single figure.',
    importance:
      'Represents the absolute summit of intricate decorative stone carving in world architecture, where stone was handled like ivory and sandalwood.',
    relatedTraditions: ['Chennakeshava Temple Belur', 'Somnathpura Keshava Temple', 'Chalukyan architecture'],
  },
  {
    id: 'martand-sun-temple',
    name: 'Martand Sun Temple of Kashmir',
    periodId: 'medieval',
    dateRange: 'c. 8th century CE (Karkota Dynasty)',
    sortYear: 750,
    region: 'North India',
    artForm: 'Architecture',
    medium: 'Monumental limestone ashlar masonry and colonnaded peristyle courtyard',
    image: '/images/martand-sun-temple.jpg',
    imageAlt: 'Monumental stone ruins and fluted colonnades of Martand Sun Temple framed by Kashmiri mountains',
    imageAttribution: 'Archaeological Survey of India / Wikimedia Commons (Creative Commons).',
    historicalContext:
      'Commissioned by Emperor Lalitaditya Muktapida of the Karkota dynasty of Kashmir, whose empire stretched across North India and parts of Central Asia. Built on an elevated plateau overlooking the Kashmir valley and snowcapped Pir Panjal peaks.',
    culturalSignificance:
      'One of the grandest examples of Kashmiri classical architecture, uniting Greco-Gandharan colonnaded peristyles, Roman-like triangular pediments, and classical Hindu Nagara proportions dedicated to Surya.',
    visualCharacteristics:
      'A massive central sanctuary framed by a courtyard of 84 fluted columns and trefoil-arched niches housing reliefs of Vishnu, Surya, and river goddesses. The precision of the interlocking limestone blocks reflects exceptional geometric engineering.',
    importance:
      'Demonstrates that medieval North India possessed its own distinct monumental stone temple idiom that bridged Gandharan Hellenistic architectural forms with imperial Indian solar devotion.',
    relatedTraditions: ['Avantipur Temple', 'Konark Sun Temple', 'Modhera Sun Temple'],
  },
  {
    id: 'unakoti',
    name: 'Unakoti Colossal Rock Carvings',
    periodId: 'medieval',
    dateRange: 'c. 7th – 9th century CE',
    sortYear: 800,
    region: 'Northeast India',
    artForm: 'Sculpture',
    medium: 'Bas-relief carving on living sandstone cliffs and waterfalls',
    image: '/images/unakoti.jpg',
    imageAlt: 'Colossal 30-foot bas-relief head of Shiva Unakotiswara carved into a forested cliff at Unakoti, Tripura',
    imageAttribution: 'Archaeological Survey of India / Wikimedia Commons (Creative Commons). Tentative UNESCO Heritage.',
    historicalContext:
      'Nestled in the lush Raghunandan hills of northern Tripura, Unakoti ("one less than a crore" in Bengali) is an ancient Shaivite pilgrimage sanctuary surrounded by waterfalls and dense rainforest.',
    culturalSignificance:
      'Represents a monumental meeting ground of classical Shaivite iconography and indigenous tribal rock-carving traditions. Legend recounts that Shiva rested here with 99,99,999 deities on his way to Varanasi, turning them to stone at sunrise.',
    visualCharacteristics:
      'The central colossus, the Unakotiswara Kal Bhairava, stands 30 feet tall with a majestic embroidered headdress stretching another 10 feet into the rock face. Flanked by two colossal female deities and three gigantic Ganeshas carved directly into river rocks.',
    importance:
      'The largest rock-cut relief gallery in Northeast India, illustrating how forest sanctuaries in ancient borderlands developed monumental sacred sculpture.',
    relatedTraditions: ['Ellora Caves', 'Elephanta Island', 'Pilak Buddhist Ruins of Tripura'],
  },
  {
    id: 'nalanda',
    name: 'Nalanda Mahavihara & Pala Bronzes',
    periodId: 'medieval',
    dateRange: 'c. 5th – 12th century CE (Gupta & Pala Dynasties)',
    sortYear: 850,
    region: 'East India',
    artForm: 'Architecture',
    medium: 'Red brick monastic ruins, stupa towers, and cast bronze votive sculptures',
    image: '/images/nalanda.jpg',
    imageAlt: 'Imposing red brick monastic ruins and terraced stupas of Nalanda Mahavihara, Bihar',
    imageAttribution: 'Archaeological Survey of India / Wikimedia Commons (Creative Commons). UNESCO World Heritage Site.',
    historicalContext:
      'The premier international residential university of the ancient and medieval world, flourishing for over 700 years under Gupta and Pala kings. Scholars from China (Xuanzang), Korea, Japan, Tibet, and Sumatra lived, studied, and cast bronze icons here.',
    culturalSignificance:
      'The intellectual and artistic epicenter of Vajrayana and Mahayana Buddhism. Nalanda\'s ateliers developed the renowned Pala bronze style, which directly fathered the metallurgical traditions of Tibet, Nepal, Myanmar, and Java.',
    visualCharacteristics:
      'Stupendous red-brick architecture across 14 hectares, with monolithic Chaitya stupa 3 rising in tiered terraces adorned with stucco Buddha figures. Pala bronzes produced here feature dark, radiant patinas, exquisite flame aureoles, and refined silver inlay.',
    importance:
      'Represents the highest pinnacle of ancient higher education and sacred art production, serving as the cultural beacon that transmitted Indian philosophical art across Asia.',
    relatedTraditions: ['Vikramashila University', 'Sarnath Buddhas', 'Tibetan Thangka & Bronzes'],
  },

  // --- MUGHAL & RAJPUT COURTS ---
  {
    id: 'mughal-miniature',
    name: 'Mughal Miniature Painting (Akbarnama & Court Masterpieces)',
    periodId: 'mughal',
    dateRange: 'c. 1560 – 1650 CE',
    sortYear: 1600,
    region: 'North India',
    artForm: 'Painting',
    medium: 'Opaque watercolour, powdered lapis lazuli, crushed gold leaf on wasli handmade paper',
    image: '/images/mughal-miniature.jpg',
    imageAlt: 'Dynamic Mughal imperial miniature depicting Emperor Akbar on a royal hunt with court entourage',
    imageAttribution: 'Victoria and Albert Museum / Wikimedia Commons (Public Domain).',
    historicalContext:
      'Emperor Akbar (r. 1556–1605) established imperial ateliers (tasvir khanas) uniting master artists from Safavid Persia (Mir Sayyid Ali, Abd al-Samad) with indigenous Indian painters (Basawan, Daswanth, Govardhan). Later refined under Jahangir and Shah Jahan into poetic realism.',
    culturalSignificance:
      'Mughal painting revolutionized South Asian manuscript art by blending Persian lyricism, European atmospheric perspective, and Indian naturalist warmth and vivid primary palettes into a celebrated cosmopolitan aesthetic.',
    visualCharacteristics:
      'Crowded diagonal compositions, jewel-like mineral colors, intricate architectural pavilions with arabesque tiles, individualized psychological portraiture, and delicate squirrel-hair brushwork depicting sheer muslins and embroidered silks.',
    importance:
      'Set an imperial visual benchmark that transformed courtly art across Rajasthan, the Deccan Sultanates, and the Punjab Hills.',
    relatedTraditions: ['Hamzanama Folios', 'Rajput Miniature painting', 'Deccani Miniature painting'],
  },
  {
    id: 'hamzanama',
    name: 'Hamzanama Folio (Adventures of Amir Hamza)',
    periodId: 'mughal',
    dateRange: 'c. 1562 – 1577 CE',
    sortYear: 1570,
    region: 'North India',
    artForm: 'Painting',
    medium: 'Gouache and gold leaf on fine cotton fabric backed with paper',
    image: '/images/hamzanama.jpg',
    imageAlt: 'Heroic high-action Hamzanama folio painting on cotton cloth depicting mythical heroes and demons',
    imageAttribution: 'Brooklyn Museum / Wikimedia Commons (Public Domain).',
    historicalContext:
      'Akbar\'s earliest and most monumental artistic project, taking 15 years and over 100 artists to produce 1,400 colossal folios (each measuring roughly 68 x 53 cm) illustrating the fantastical chivalric adventures of Amir Hamza.',
    culturalSignificance:
      'Marked the birth of the distinctive Mughal school. Unlike typical miniature albums, these oversized paintings were held aloft by storytellers while reciting heroic Persian and Hindustani epics before the imperial court.',
    visualCharacteristics:
      'Explosive physical action, mythical beasts, swirling turquoise clouds, roaring oceans, and towering fortresses rendered with vibrant vermilion, indigo, and verdigris pigments on sized cotton cloth.',
    importance:
      'The experimental crucible where young Indian painters infused Persian courtly forms with Indian emotional drama and bodily movement.',
    relatedTraditions: ['Akbarnama', 'Razmnama (Persian Mahabharata)', 'Baburnama'],
  },
  {
    id: 'rajput-miniature',
    name: 'Rajput (Mewar & Kishangarh) Miniature Painting',
    periodId: 'mughal',
    dateRange: 'c. 1650 – 1800 CE',
    sortYear: 1700,
    region: 'West India',
    artForm: 'Painting',
    medium: 'Natural mineral pigments and burnished gold on multi-layered wasli paper',
    image: '/images/rajput-miniature.jpg',
    imageAlt: 'Vibrant Rajasthani Rajput miniature depicting royal court procession and celebration with bold colors',
    imageAttribution: 'National Museum, New Delhi / Wikimedia Commons (Public Domain).',
    historicalContext:
      'Thrived in the royal courts of Rajasthan, including Mewar (Udaipur), Kishangarh, Bundi, Kota, and Jodhpur. While aware of Mughal court techniques, Rajput artists maintained a distinct spiritual aesthetic rooted in Hindu devotional (Bhakti) poetry and solar pride.',
    culturalSignificance:
      'Rajput painting expresses intense spiritual and poetic emotional states (rasa). The celebration of Radha and Krishna transformed divine cosmic love into personal courtly lyricism, epitomized by artist Nihal Chand\'s iconic Kishangarh "Bani Thani" (India\'s Mona Lisa).',
    visualCharacteristics:
      'Flat planes of glowing saturated yellow, scarlet, and midnight blue. Highly stylized facial profiles with lotus-petal eyes, arched eyebrows, vibrant floral borders, and symbolic landscapes echoing romantic monsoon clouds and blooming lotus ponds.',
    importance:
      'Showcases how regional kingdoms retained distinctive cultural autonomy and poetic philosophy during imperial epochs.',
    relatedTraditions: ['Pahari Kangra Miniatures', 'Ragamala Paintings', 'Phad Scroll Paintings'],
  },
  {
    id: 'ragamala',
    name: 'Ragamala Miniatures (Visualizing Indian Classical Ragas)',
    periodId: 'mughal',
    dateRange: 'c. 16th – 18th century CE',
    sortYear: 1680,
    region: 'North India',
    artForm: 'Painting',
    medium: 'Opaque watercolour with poetic verses inscribed in Devanagari along top borders',
    image: '/images/ragamala.jpg',
    imageAlt: 'Ragamala miniature depicting a heroine in a forest pavilion symbolizing a musical raga mode',
    imageAttribution: 'Metropolitan Museum of Art / Wikimedia Commons (Public Domain).',
    historicalContext:
      'Created across Rajasthan, Malwa, and the Deccan. "Ragamala" literally translates to "Garland of Melodies" — an unprecedented cross-modal artistic fusion where classical musical scales (ragas and raginis) were personified as divine lovers, seasons, and emotional temperaments.',
    culturalSignificance:
      'Represents a unique synthesis of Indian classical music (Sangita), classical poetry (Kavya), and visual painting (Chitra). A viewer would look upon the painting, read the Sanskrit or Braj Bhasha dhyana verse, and mentally evoke the music and its corresponding time of day.',
    visualCharacteristics:
      'Each painting captures a precise mood: Raga Megha features rain clouds and dancing peacocks for the monsoon; Raga Deepak evokes intense summer flames; Bhairavi portrays a maiden worshipping at a Shiva lingam at sunrise.',
    importance:
      'One of the world\'s most sophisticated synesthetic art forms, translating acoustic intervals and emotional bhava into color palettes and poetic vignettes.',
    relatedTraditions: ['Rajput Miniatures', 'Pahari Miniatures', 'Indian Classical Sangeet'],
  },
  {
    id: 'pahari-miniature',
    name: 'Pahari (Kangra & Basohli) Miniature Painting',
    periodId: 'mughal',
    dateRange: 'c. 1750 – 1820 CE',
    sortYear: 1790,
    region: 'North India',
    artForm: 'Painting',
    medium: 'Mineral tempera, beetle-wing iridescent collage, and gold on handmade paper',
    image: '/images/pahari-miniature.jpg',
    imageAlt: 'Delicate Kangra miniature of Radha and Krishna sheltered under an umbrella in a lush green valley',
    imageAttribution: 'National Museum, New Delhi / Wikimedia Commons (Public Domain).',
    historicalContext:
      'Flourished in the serene hill states of the Himalayan foothills (modern Himachal Pradesh, Jammu, and Uttarakhand), especially Kangra, Guler, Basohli, and Chamba, reaching its poetic peak under Raja Sansar Chand of Kangra.',
    culturalSignificance:
      'Pahari painting is celebrated for its unmatched lyrical tenderness and romantic pastoral beauty. It illustrated Jayadeva\'s Gita Govinda and the Bhagavata Purana with profound emotional intimacy.',
    visualCharacteristics:
      'Early Basohli works used blazing yellow backgrounds and real iridescent green beetle wings for jewels. Later Kangra paintings feature soft pastel landscapes, gentle undulating hills, blooming flowering trees, moonlight reflections on streams, and women with delicate refined profiles and flowing garments.',
    importance:
      'Historian Ananda Coomaraswamy praised Pahari painting as one of the purest expressions of the Indian spirit, blending landscape naturalism with spiritual romance.',
    relatedTraditions: ['Rajput Painting', 'Mewar Miniatures', 'Mughal ateliers'],
  },
  {
    id: 'rang-ghar',
    name: 'Rang Ghar & Ahom Royal Architecture',
    periodId: 'mughal',
    dateRange: '1746 CE (Ahom Dynasty)',
    sortYear: 1746,
    region: 'Northeast India',
    artForm: 'Architecture',
    medium: 'Fired red brick, indigenous cement mortar (sticky Bora rice, duck eggs, and snail lime)',
    image: '/images/rang-ghar.jpg',
    imageAlt: 'Two-story red brick royal amphitheater with inverted royal longboat roof at Sivasagar, Assam',
    imageAttribution: 'Archaeological Survey of India / Wikimedia Commons (Creative Commons).',
    historicalContext:
      'Constructed by Ahom King Swargadeo Pramatta Singha in Rupahi Pathar, Sivasagar (Assam). The Ahom dynasty ruled Assam with unbroken sovereignty for 600 years (1228–1826), successfully repelling numerous imperial Mughal invasions.',
    culturalSignificance:
      'One of the oldest surviving royal sports amphitheaters in Asia. The Ahom kings and nobility sat in the upper pavilion to watch traditional Bihu bullfights, elephant duels, and martial celebrations.',
    visualCharacteristics:
      'A two-storied oval pavilion whose roof is shaped like an inverted Ahom royal war-boat (charaighar), topped with a sculpted pair of makaras. Constructed using a legendary indigenous organic mortar made of Bora rice paste, duck eggs, and powdered fish scales that has endured earthquakes for three centuries.',
    importance:
      'Celebrates the indigenous engineering and architectural independence of the Ahom kingdom, showcasing an architectural form unique to Assam.',
    relatedTraditions: ['Talatal Ghar', 'Kareng Ghar', 'Assamese Vernacular Architecture'],
  },

  // --- REGIONAL & FOLK TRADITIONS ---
  {
    id: 'madhubani',
    name: 'Madhubani (Mithila) Painting',
    periodId: 'regional',
    dateRange: 'Centuries-old domestic tradition; globally recognized from 1966 onward',
    sortYear: 1966,
    region: 'East India',
    artForm: 'Folk Art',
    medium: 'Natural plant pigments (soot, turmeric, indigo, kusum flower) with bamboo twigs and nibs',
    image: '/images/madhubani.jpg',
    imageAlt: 'Vibrant Madhubani painting with double black outlines depicting deities, nature, and fish motifs',
    imageAttribution: 'Photograph: Wikimedia Commons (Creative Commons). UNESCO GI Heritage.',
    historicalContext:
      'Practiced for generations by women in the Mithila region of northern Bihar and Nepal. Traditionally painted directly on the mud-plastered walls of bridal chambers (Kohbar) and courtyards for weddings and harvest festivals.',
    culturalSignificance:
      'A matriarchal art form passed down from mother to daughter across millennia. It was brought to global notice during the 1966 drought when artists like Sita Devi, Ganga Devi, and Mahasundari Devi transferred their wall paintings onto handmade paper to generate community livelihood.',
    visualCharacteristics:
      'Distinguished by sharp black double-line borders filled with diagonal hatching, bright natural pigments, large almond-shaped eyes with stylized profiles, and horror vacui — no empty space is left unfilled, adorned with birds, turtles, fish, and sacred Kadamba trees.',
    importance:
      'Holds Geographical Indication (GI) status and represents one of India\'s most empowering examples of indigenous women artists achieving international gallery renown.',
    relatedTraditions: ['Warli Painting', 'Pattachitra', 'Kalighat Painting'],
  },
  {
    id: 'warli',
    name: 'Warli Tribal Painting',
    periodId: 'regional',
    dateRange: 'Ancient Adivasi roots; documented and celebrated from 1970s',
    sortYear: 1970,
    region: 'West India',
    artForm: 'Tribal Art',
    medium: 'White rice-flour paste with water and gum on cow dung and red geru earth background',
    image: '/images/warli.jpg',
    imageAlt: 'Warli tribal painting showing spiral Tarpa dance with geometric human figures on mud background',
    imageAttribution: 'Photograph: Wikimedia Commons (Creative Commons). UNESCO GI Heritage.',
    historicalContext:
      'Created by the indigenous Warli tribe inhabiting the Sahyadri mountains near the Maharashtra-Gujarat border. Traditionally painted by suvasinis (married women) on the mud walls of village huts to celebrate weddings (Lagna) and harvests (Bhavada).',
    culturalSignificance:
      'Warli art communicates animistic reverence for Mother Nature (Palghat, the goddess of fertility) without formal written scripts. Legendary artist Jivya Soma Mashe revolutionized the tradition in the 1970s by painting everyday tribal life on canvas for international museums.',
    visualCharacteristics:
      'Utterly minimalist geometric vocabulary: two inverted triangles touching at their tips represent the human torso, a circle represents the sun or moon, and lines form limbs. Human chains spiral outwards in the iconic Tarpa dance, mirroring the cosmic flow of life and community solidarity.',
    importance:
      'Exemplifies pure rhythmic abstraction and sustainable natural art that preserves prehistoric sensibilities in contemporary culture.',
    relatedTraditions: ['Bhimbetka Rock Shelters', 'Pithora Painting', 'Gond Art'],
  },
  {
    id: 'kalamkari',
    name: 'Kalamkari Textile Art',
    periodId: 'regional',
    dateRange: 'c. 16th – 17th century CE onward (Golconda & Vijayanagara)',
    sortYear: 1600,
    region: 'South India',
    artForm: 'Textile',
    medium: 'Hand-drawn natural vegetable dyes (indigo, madder, myrobalan) on treated cotton cloth',
    image: '/images/kalamkari.jpg',
    imageAlt: 'Detailed Kalamkari cotton textile hanging painted with mythological narratives in organic earth dyes',
    imageAttribution: 'National Handicrafts and Handlooms Museum / Wikimedia Commons (Public Domain).',
    historicalContext:
      'Originated in Andhra Pradesh and Telangana ("kalam" = bamboo pen, "kari" = craftsmanship). Two famous schools evolved: Srikalahasti (sacred temple hangings hand-drawn with bamboo pens) and Machilipatnam (block-printed textiles exported worldwide through Golconda ports).',
    culturalSignificance:
      'Kalamkari textiles served as painted temple canopies and narrative scroll backdrops for wandering minstrels singing the Ramayana and Mahabharata. During the 17th century, Kalamkari "chintz" sparked a global revolution in European interior and fashion design.',
    visualCharacteristics:
      'Rich earthy tones derived exclusively from nature: fermented iron rust and jaggery for deep black outlines, alum for red, fermented indigo leaves for blue, and pomegranate peel for mustard yellow, set with milk baths to fix color permanently into cotton fibers.',
    importance:
      'Showcases India\'s historic supremacy in textile chemistry, mordant dyeing, and sustainable artisan cloth making.',
    relatedTraditions: ['Pattachitra', 'Mata ni Pachedi', 'Tanjore Painting'],
  },
  {
    id: 'tanjore',
    name: 'Tanjore (Thanjavur) Gold Foil Painting',
    periodId: 'regional',
    dateRange: 'c. 16th – 18th century CE (Nayaka & Maratha rule)',
    sortYear: 1700,
    region: 'South India',
    artForm: 'Painting',
    medium: 'Teakwood board, gesso relief work (sukku), 22-carat pure gold leaf, and Jaipur gemstones',
    image: '/images/tanjore.jpg',
    imageAlt: 'Tanjore icon painting of a deity with raised gold foil relief and embedded gemstones',
    imageAttribution: 'Government Museum, Chennai / Wikimedia Commons (Public Domain).',
    historicalContext:
      'Originated in Thanjavur under the patronage of the Vijayanagara Nayakas and later the Maratha King Serfoji II (1798–1832). Created by traditional guild communities like the Jinigara and Raju artists for temple altars and royal shrines.',
    culturalSignificance:
      'Tanjore paintings are sacred icons designed to gleam in the dim lamp-lit sanctums (garbhagrihas) of South Indian temples and home puja rooms, radiating divine effulgence (tejas).',
    visualCharacteristics:
      'Iconic depictions of child Krishna (Navaneetha Krishna), Ganesha, or Lakshmi. Figures have plump, cherubic faces with large almond eyes. The architecture features ornate carved arches (prabhavalis) executed in high-relief gesso overlaid with hammered pure 22K gold foil and inlaid semi-precious stones and glass.',
    importance:
      'A brilliant hybrid of three-dimensional relief sculpture, jewelry making, and religious painting that remains a living devotional craft.',
    relatedTraditions: ['Mysore Painting', 'Kalamkari Art', 'Chola Bronzes'],
  },
  {
    id: 'pattachitra',
    name: 'Pattachitra of Odisha',
    periodId: 'regional',
    dateRange: 'c. 12th century CE – present',
    sortYear: 1200,
    region: 'East India',
    artForm: 'Folk Art',
    medium: 'Treated layered tussar silk or cotton cloth with conch-shell white, lampblack, and vegetable gum',
    image: '/images/pattachitra.jpg',
    imageAlt: 'Detailed Odishan Pattachitra cloth scroll illustrating scenes of Lord Jagannath with intricate floral borders',
    imageAttribution: 'Photograph: Wikimedia Commons (Creative Commons). UNESCO GI Heritage.',
    historicalContext:
      'Deeply bound to the cult of Lord Jagannath in Puri, Odisha. During the annual Anasara period (the 15-day ritual quarantine of Jagannath before Rath Yatra), traditional Chitrakar artists in the heritage village of Raghurajpur paint sacred replacement icons (Anasara Patti) for devotees.',
    culturalSignificance:
      'Pattachitra is recognized as one of the most rigorously codified folk painting styles in South Asia, preserving canonical mudras, facial proportions, and pigment preparation documented in ancient palm-leaf manuscripts.',
    visualCharacteristics:
      'Crisp, razor-sharp black brushstrokes, vibrant primary red, yellow, and white colors, ornate foliate border bands (patti), and dynamic mythological tableaus illustrating the Dasavatara, Krishna Leela, and Jagannath tri-deities.',
    importance:
      'Shows how sacred temple rituals support an entire living artisan village, keeping medieval scroll-painting traditions vibrant in modern times.',
    relatedTraditions: ['Madhubani Painting', 'Kalighat Painting', 'Kalamkari Textiles'],
  },
  {
    id: 'phad',
    name: 'Phad Scroll Painting of Rajasthan',
    periodId: 'regional',
    dateRange: 'Traditional medieval epic tradition; documented from 14th century',
    sortYear: 1400,
    region: 'West India',
    artForm: 'Folk Art',
    medium: 'Handwoven khadi cloth scroll treated with rice starch and painted with natural stone pigments',
    image: '/images/phad.jpg',
    imageAlt: 'Elaborate 30-foot long Phad cloth scroll painting depicting the life of folk deity Pabuji with warrior epics',
    imageAttribution: 'Tropenmuseum Collection / Wikimedia Commons (Creative Commons).',
    historicalContext:
      'Originating in Shahpura, Rajasthan, Phad paintings are mammoth scrolls (up to 30 feet long) used as mobile temples by nomadic Bhopa and Bhopi bard-priests who sing and dance the epic stories of folk heroes Pabuji and Devnarayan under night skies.',
    culturalSignificance:
      'Phad operates as an entire mobile theatrical performance. The Bhopa sings and plays the ravanahatha (stringed violin), while his wife illuminates specific painted scenes on the scroll with an oil diya lamp as the story unfolds.',
    visualCharacteristics:
      'Densely packed compositions featuring hundreds of figures, battle horses, royal tents, and desert beasts. Figures are painted strictly in profile with large eyes; hierarchical scaling is used where deities and kings appear largest and attendants smallest.',
    importance:
      'A supreme example of mobile community performance art, linking visual painting, oral poetry, and sacred folklore into an unbroken nomadic ritual.',
    relatedTraditions: ['Pattachitra of Odisha', 'Cheriyal Scroll Painting', 'Warli Tribal Art'],
  },
  {
    id: 'majuli-masks',
    name: 'Majuli Mask-Making & Neo-Vaishnavite Sattras',
    periodId: 'regional',
    dateRange: 'c. 15th – 16th century CE onward (Saint Srimanta Sankardev)',
    sortYear: 1550,
    region: 'Northeast India',
    artForm: 'Folk Art',
    medium: 'Bamboo armature, cane, clay from the Brahmaputra, cow dung, and natural earth pigments',
    image: '/images/majuli-masks.jpg',
    imageAlt: 'Handcrafted theatrical mask of mythological figures from the island of Majuli, Assam',
    imageAttribution: 'Photograph: Wikimedia Commons (Creative Commons). UNESCO GI Heritage.',
    historicalContext:
      'Originating in the river island of Majuli (the world\'s largest inhabited river island on the Brahmaputra), this tradition was instituted by the saint-reformer Srimanta Sankardev and preserved in historic monasteries (Sattras like Natun Samaguri Sattra).',
    culturalSignificance:
      'The masks (Mukha) are sacred theatrical instruments used in Bhaona (dance-drama enacted during festivals). They personify gods, demons (Ravana, Kumbhakarna), and animal avatars (Narasimha, Garuda) with mobile jaws and expressive eyes.',
    visualCharacteristics:
      'Constructed from split bamboo woven into hollow 3D armatures, layered with clay-soaked cotton cloth and cow dung, then painted with organic mineral dyes (Hengul for red, Haital for yellow). Some masks cover only the face (Mukh Mukha), while others are colossal full-body puppets (Cho Mukha).',
    importance:
      'Recently awarded Geographical Indication (GI) status; a vibrant living community craft where sacred performance and sculptural masking coalesce.',
    relatedTraditions: ['Chhau Mask Dance', 'Kathakali Masks', 'Assamese Bhaona Theater'],
  },

  // --- COLONIAL & EARLY MODERN ---
  {
    id: 'kalighat',
    name: 'Kalighat Patua Painting',
    periodId: 'colonial',
    dateRange: 'c. 1830 – 1930 CE',
    sortYear: 1870,
    region: 'East India',
    artForm: 'Folk Art',
    medium: 'Watercolour washes and sweeping black ink contours on mill-made paper',
    image: '/images/kalighat.jpg',
    imageAlt: 'Expressive Kalighat watercolor painting of goddess with swift fluid brushstrokes and minimal shading',
    imageAttribution: 'Victoria and Albert Museum / Wikimedia Commons (Public Domain).',
    historicalContext:
      'Emerged around the sacred Kalighat Kali Temple in Calcutta (colonial capital of British India). Traditional rural scroll painters (patuas) migrated to the booming metropolis and adapted their style to produce rapid, affordable souvenir art for pilgrims and urbanites.',
    culturalSignificance:
      'Kalighat art was the first Indian genre to chronicle and satirize contemporary urban colonial life — poking fun at anglicized "babus", hypocritical priests, fashionable dandy elites, and domestic scandals.',
    visualCharacteristics:
      'Brilliant calligraphic brush economy: figures are defined in single, uninterrupted, sweeping black outlines with soft wash shading that imparts plump, rounded volume with breathtaking speed and effortless kinetic grace.',
    importance:
      'Pioneered modern Indian urban satire and directly inspired masters of modernism like Fernand Léger in Paris and Jamini Roy in Bengal.',
    relatedTraditions: ['Bengal School of Art', 'Jamini Roy', 'Madhubani Painting'],
  },
  {
    id: 'ravi-varma',
    name: 'Raja Ravi Varma — "Shakuntala" & Mythological Oleographs',
    periodId: 'colonial',
    dateRange: 'c. 1870 – 1900 CE',
    sortYear: 1890,
    region: 'South India',
    artForm: 'Painting',
    medium: 'Oil on canvas; mass-reproduced through chromolithography (oleographs)',
    image: '/images/ravi-varma.jpg',
    imageAlt: 'Famous oil painting Shakuntala looking back under pretext of removing a thorn, by Raja Ravi Varma',
    imageAttribution: 'Sri Chitra Art Gallery, Thiruvananthapuram / Wikimedia Commons (Public Domain).',
    historicalContext:
      'Raja Ravi Varma (1848–1906), a prince of the royal house of Kilimanoor in Travancore (Kerala), learned European academic oil-painting techniques and applied them to classical Sanskrit literature and Hindu epics. In 1894, he founded the Ravi Varma Lithographic Press in Ghatkopar, Mumbai.',
    culturalSignificance:
      'Democratized art across India. Before his printing press, fine art was reserved for royal palaces and temple sanctums; his color lithographs made images of Saraswati, Lakshmi, and epic heroes accessible to ordinary households across the subcontinent.',
    visualCharacteristics:
      'Flawless European academic realism — chiaroscuro lighting, photographic anatomical proportion, realistic fabric drape of silk sarees and pearl jewelry — infused with authentic Indian romantic sentiment (Sringara rasa).',
    importance:
      'Permanently shaped the visual consciousness of modern Indian religion, theater, cinema, and popular culture.',
    relatedTraditions: ['Bengal School of Art', 'Tanjore Painting', 'Early Indian Cinema (Dadasaheb Phalke)'],
  },
  {
    id: 'bengal-school',
    name: 'Bengal School — "Bharat Mata" by Abanindranath Tagore',
    periodId: 'colonial',
    dateRange: '1905 CE',
    sortYear: 1905,
    region: 'East India',
    artForm: 'Modern Art',
    medium: 'Watercolour wash on paper (blending Japanese wash and Mughal miniature techniques)',
    image: '/images/bengal-school.jpg',
    imageAlt: 'Atmospheric watercolor painting of Bharat Mata as an ascetic saffron-robed four-armed spiritual goddess',
    imageAttribution: 'Rabindra Bharati Society, Kolkata / Wikimedia Commons (Public Domain).',
    historicalContext:
      'Painted in 1905 during the turbulent Swadeshi movement opposing Lord Curzon\'s colonial partition of Bengal. Abanindranath Tagore (nephew of Rabindranath Tagore) and E. B. Havell founded the Bengal School of Art at the Government College of Art, Calcutta.',
    culturalSignificance:
      'A watershed moment of anti-colonial cultural renaissance. The Bengal School consciously rejected Western academic oil painting, seeking inspiration from Ajanta murals, Mughal-Rajput miniatures, and Japanese wash masters like Okakura Kakuzo and Yokoyama Taikan.',
    visualCharacteristics:
      'Depicts India personified not as an aggressive warrior, but as a serene young ascetic woman clad in saffron robes standing on lotus petals. Her four hands hold the four fundamental gifts of national self-reliance: Anna (food/grain sheaves), Vastra (cloth), Shiksha (manuscript/learning), and Diksha (japa mala/spiritual wisdom).',
    importance:
      'Provided the visual soul for the Indian independence struggle and launched the first pan-Asian modern art movement in the East.',
    relatedTraditions: ['Kalighat Painting', 'Santiniketan Kala Bhavana', 'Ajanta Cave Paintings'],
  },
  {
    id: 'jamini-roy',
    name: 'Jamini Roy — Folk-Modernist Revolution',
    periodId: 'colonial',
    dateRange: 'c. 1920s – 1950s CE',
    sortYear: 1935,
    region: 'East India',
    artForm: 'Modern Art',
    medium: 'Tempera using natural earth, soot, and chalk pigments on hand-woven cloth and woven mats',
    image: '/images/jamini-roy.jpg',
    imageAlt: 'Bold folk-modernist tempera painting by Jamini Roy with expressive outlines and flat earth colors',
    imageAttribution: 'National Gallery of Modern Art, New Delhi / Wikimedia Commons (Public Domain).',
    historicalContext:
      'Trained in British academic oil realism at the Government Art College in Calcutta, Jamini Roy (1887–1972) had a profound creative epiphany in the early 1920s. He renounced Western oil paints and elite patronage to return to the indigenous visual roots of rural Bengali village patuas.',
    culturalSignificance:
      'Roy demonstrated that true modernism did not require imitating Paris or London; authentic modernism could be forged through radical simplification of indigenous folk language. He is honored as one of India\'s official "Nine National Treasure Artists".',
    visualCharacteristics:
      'Deliberately flat planes of warm ochre, vermilion, indigo, and chalk white. Monumental sweeping dark outlines, oversized almond eyes extending to temple edges, and affectionate depictions of rural mothers and children, Santhal villagers, and temple dancers.',
    importance:
      'Proved that the simplicity of indigenous folk art holds universal modern power, laying the foundation for 20th-century Indian post-colonial expression.',
    relatedTraditions: ['Kalighat Patua Art', 'Madhubani Painting', 'Bengal School'],
  },
  {
    id: 'amrita-shergil',
    name: 'Amrita Sher-Gil — "Three Girls / Hill Women"',
    periodId: 'colonial',
    dateRange: 'c. 1934 – 1941 CE',
    sortYear: 1937,
    region: 'North India',
    artForm: 'Modern Art',
    medium: 'Oil on canvas with luminous post-impressionist color planes',
    image: '/images/amrita-shergil.jpg',
    imageAlt: 'Portrait of Three Girls in traditional Indian dress with soulful melancholic expressions, by Amrita Sher-Gil',
    imageAttribution: 'National Gallery of Modern Art, New Delhi / Wikimedia Commons (Public Domain). National Treasure of India.',
    historicalContext:
      'Born in Budapest to a Sikh aristocrat father and Hungarian opera singer mother, Amrita Sher-Gil (1913–1941) trained at the École des Beaux-Arts in Paris before returning to India in 1934. She famously declared: "I can only paint in India. Europe belongs to Picasso, Matisse, Braque... India belongs only to me."',
    culturalSignificance:
      'Widely celebrated as the "Frida Kahlo of India", Sher-Gil transformed Indian modern art by capturing the quiet dignity, inner sorrow, and silent resilience of Indian rural women with heartbreaking empathy rather than orientalist exoticism.',
    visualCharacteristics:
      'Sumptuous, flat planes of burnt sienna, deep saffron, plum, and emerald. Broad sculptural modeling inspired by Ajanta murals, coupled with European post-impressionist color harmonies that highlight the expressive eyes and solemn postures of her subjects.',
    importance:
      'Recognized as a National Art Treasure whose works cannot be legally exported from India. She is the pioneer who bridged Western oil painterly technique with authentic Indian soul.',
    relatedTraditions: ['Paul Gauguin', 'Ajanta Murals', 'Progressive Artists\' Group'],
  },

  // --- CONTEMPORARY ERA ---
  {
    id: 'contemporary-indian-art',
    name: 'Modern & Contemporary Indian Art (PAG & Living Vanguard)',
    periodId: 'contemporary',
    dateRange: '1947 CE – present',
    sortYear: 1980,
    region: 'West India',
    artForm: 'Modern Art',
    medium: 'Oil, acrylic, bronze, multimedia installations, digital media, and monumental public sculpture',
    image: '/images/contemporary-indian-art.jpg',
    imageAlt: 'Iconic facade and gallery space of Jehangir Art Gallery, historic center of Progressive Artists Group in Mumbai',
    imageAttribution: 'Jehangir Art Gallery / Wikimedia Commons (Creative Commons).',
    historicalContext:
      'In December 1947, mere months after Indian independence, the revolutionary Progressive Artists\' Group (PAG) was founded in Bombay by M. F. Husain, F. N. Souza, S. H. Raza, K. H. Ara, and H. A. Gade, followed by V. S. Gaitonde and Tyeb Mehta. They shattered colonial and revivalist constraints to build an unapologetic secular modernism.',
    culturalSignificance:
      'From post-independence cubist and tantric abstractions (Raza\'s Bindu, Gaitonde\'s zen canvases) to major global events like the Kochi-Muziris Biennale, Indian contemporary artists engage with globalization, gender, environmental ecology, and indigenous revival.',
    visualCharacteristics:
      'Encompasses explosive energetic brushwork (Husain\'s galloping horses), mystical geometrical focal points (Raza\'s geometric Mandalas), radical figurative existentialism (Souza and Tyeb Mehta), and monumental multi-sensory installations by Subodh Gupta, Bharti Kher, and Shilpa Gupta.',
    importance:
      'Positions Indian visual culture at the very vanguard of the international contemporary art dialogue, while maintaining an umbilical philosophical continuity with 10,000 years of aesthetic heritage.',
    relatedTraditions: ['Progressive Artists\' Group', 'Santiniketan', 'Kochi-Muziris Biennale', 'Madhubani & Warli Revivals'],
  },
]

export const totalArtifacts = artifacts.length
