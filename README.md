# Indian Art Through Time — Interactive Timeline

An interactive digital timeline and museum exhibition documenting 40 masterworks
across 8 major periods of Indian art history, each with a detailed catalogue panel,
plus search, era/region/art-form filters, comparative analysis tools, and thematic continuities.

## Tech stack

- React 18 + TypeScript
- Tailwind CSS
- lucide-react icons
- Vite (dev server & build tool)
- No backend — all data lives in `src/data/artifacts.ts` and `src/data/periods.ts`

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data/
    artifacts.ts     # the 22 artifacts (content, dates, images, attribution)
    periods.ts        # the 8 eras (blurbs, compare-era data, did-you-know facts)
  components/
    Hero.tsx
    StatsSection.tsx
    FilterControls.tsx
    TimelineSection.tsx
    ArtifactCard.tsx
    ArtifactModal.tsx
    DidYouKnow.tsx
    CompareEras.tsx
    Footer.tsx
    ImageWithFallback.tsx
  App.tsx
  main.tsx
  index.css
  types.ts
```

## Notes on content and images

- Dates are given as approximate ranges ("c." / circa) wherever exact dating is
  not fixed by inscription or historical record, matching standard scholarly
  practice for Indian art history.
- Regional and folk traditions (Madhubani, Warli, Kalamkari, Tanjore, Rajput,
  Pahari) are deliberately **not** presented as sequential stages of a single
  timeline — the period blurbs and "Compare Eras" tool call out where
  traditions developed in parallel rather than one after another.
- Historical and pre-modern artifact images link to Wikimedia Commons. Because
  exact file names on Commons can change or be renamed over time, each image
  has a graceful fallback: if a link ever breaks, the card shows a styled
  placeholder instead of a broken image icon. **Before submitting, it's worth
  quickly clicking through each artifact card once to confirm the images you
  see match the artifact** — swap in a verified Commons URL in
  `src/data/artifacts.ts` if any don't look right.
- Two entries (Jamini Roy and the Contemporary Indian Art overview) are
  intentionally shown without a photographic reproduction, since those works
  are still under copyright. This is explained in the footer and in each
  entry's attribution line.

## Customising

- Add or edit artifacts in `src/data/artifacts.ts` — each one needs an `id`,
  `periodId` (must match a period in `periods.ts`), and the fields the modal
  displays.
- Add or edit eras in `src/data/periods.ts`.
- Colours, fonts and spacing tokens live in `tailwind.config.js`.
