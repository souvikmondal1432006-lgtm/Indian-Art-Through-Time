export default function Footer() {
  return (
    <footer id="sources" className="bg-[#141210] text-[#D0C7BC] border-t border-[#29231E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Col 1: Exhibition Colophon */}
        <div>
          <h3 className="font-display font-medium text-xl text-ivory tracking-wide mb-2">
            INDIAN ART THROUGH TIME
          </h3>
          <p className="font-body text-xs text-[#C5BCB1] mb-3 leading-relaxed">
            A visual journey across centuries of Indian artistic expression.
          </p>
          <div className="inline-flex items-center gap-2 text-[11px] font-body text-gold-light tracking-widest uppercase mb-4">
            <span>Explore</span>
            <span>·</span>
            <span>Discover</span>
            <span>·</span>
            <span>Compare</span>
          </div>
          <p className="font-body text-xs text-[#998E82] leading-relaxed font-light">
            A public digital museum and cultural heritage archive documenting 30,000 years of South Asian visual history across overlapping traditions, materials, and regional schools.
          </p>
        </div>

        {/* Col 2: Institutional Sources & Curatorial Archives */}
        <div>
          <h4 className="font-body text-xs uppercase tracking-[0.2em] text-gold font-medium mb-4">
            Sources & Institutional Archives
          </h4>
          <ul className="font-body text-xs text-[#B8AEA3] space-y-2 leading-relaxed font-light">
            <li className="flex items-baseline gap-2">
              <span className="text-terracotta">·</span>
              <span>Archaeological Survey of India (ASI) — Monument & Excavation Records</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-terracotta">·</span>
              <span>National Museum, New Delhi — Harappan, Mauryan & Bronze Galleries</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-terracotta">·</span>
              <span>UNESCO World Heritage Centre — South Asian Monument Inscriptions</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-terracotta">·</span>
              <span>Ministry of Culture, Government of India — Cultural Heritage Repository</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-terracotta">·</span>
              <span>National Gallery of Modern Art (NGMA) — Modern Masters Collection</span>
            </li>
            <li className="flex items-baseline gap-2">
              <span className="text-terracotta">·</span>
              <span>Victoria and Albert Museum, London — South Asian Manuscripts & Textiles</span>
            </li>
          </ul>
        </div>

        {/* Col 3: Image Credits & Scholarly Dating */}
        <div>
          <h4 className="font-body text-xs uppercase tracking-[0.2em] text-gold font-medium mb-4">
            Image Credits & Scholarly Notes
          </h4>
          <p className="font-body text-xs text-[#B8AEA3] leading-relaxed font-light mb-3">
            Historical artifact photographs are sourced from accredited public domain museum holdings and open cultural archives (Wikimedia Commons, National Museum New Delhi, Archaeological Survey of India).
          </p>
          <p className="font-body text-[11px] text-[#8C8176] leading-relaxed font-light">
            In accordance with art-historical standards, approximate dates are designated with "c." (circa) where exact chronology is unrecorded by epigraphy. Traditions are presented as simultaneous and regional rather than unilinear.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#241F1A] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-body text-[#786E64]">
          <span>© Indian Art Through Time</span>
          <a href="#sources" className="hover:text-gold transition-colors font-medium">
            Sources & Image Credits
          </a>
        </div>
      </div>
    </footer>
  )
}
