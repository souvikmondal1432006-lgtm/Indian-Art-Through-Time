export default function Footer() {
  return (
    <footer className="bg-charcoal text-parchment/80">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-lg text-parchment-light mb-3">
            Indian Art Through Time
          </h3>
          <p className="font-body text-sm leading-relaxed text-parchment/60">
            Interactive Digital Humanities Project
            <br />
            Created for CLA-I · CO1 — Interactive Timeline with Artifacts
          </p>
        </div>

        <div>
          <h4 className="font-body text-xs uppercase tracking-wider text-gold-light mb-3">
            Sources & References
          </h4>
          <ul className="font-body text-sm text-parchment/60 space-y-1.5 leading-relaxed">
            <li>Archaeological Survey of India (ASI) — site and monument records</li>
            <li>UNESCO World Heritage List — Sanchi, Ajanta, Ellora, Konark, Khajuraho</li>
            <li>National Museum, New Delhi — Indus Valley and Mauryan collections</li>
            <li>Victoria and Albert Museum — South Asian miniature painting collection</li>
            <li>Wikimedia Commons — public domain and openly licensed photography</li>
          </ul>
        </div>

        <div>
          <h4 className="font-body text-xs uppercase tracking-wider text-gold-light mb-3">
            Credits & Image Attribution
          </h4>
          <p className="font-body text-sm text-parchment/60 leading-relaxed">
            Historical and pre-modern artifact photographs are sourced from Wikimedia
            Commons under public domain or open licences; individual credits appear in
            each artifact's detail panel. Works by artists who died within the last 60
            years, and all contemporary artworks, are intentionally not reproduced here
            because they remain under copyright — those entries show a placeholder
            instead of an image.
          </p>
        </div>
      </div>

      <div className="border-t border-parchment/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 font-body text-xs text-parchment/40">
          Built with React, TypeScript and Tailwind CSS. Content is provided for
          educational purposes; approximate dates are marked "c." (circa) where exact
          dating is not established by inscription or record.
        </div>
      </div>
    </footer>
  )
}
