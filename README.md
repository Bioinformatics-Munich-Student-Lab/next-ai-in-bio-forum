# Next AI in Bio Forum 2026

A beautiful, fast event website for the Next AI in Bio Forum 2026, hosted at TUM Audimax in Munich on September 12, 2026.

Built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**, echoing the visual language of [BMSL.org](https://bmsl.org).

## Quick Start

### Installation

```bash
npm install
```

### Development

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Updating Event Information

All event content is centralized in the `content/` folder for easy maintenance:

- **`content/event.ts`** — Static event facts (title, date, venue, hosts, tagline, etc.)
- **`content/speakers.ts`** — Speaker lineup with details and status (`revealed` or `tbd`)
- **`content/agenda.ts`** — Full day schedule with times, titles, and types

### Adding a Revealed Speaker

1. Open `content/speakers.ts`
2. Find the speaker object with status `"tbd"` and the matching `topic`
3. Update it to status `"revealed"` and fill in:
   - `name`
   - `affiliation`
   - `title`
   - `bio`
   - `photoUrl` (URL to headshot, e.g., from a CDN or GitHub)

Example:

```typescript
{
  id: 'clinical-trial-prediction',
  topic: 'Clinical Trial Outcome Prediction',
  topicNumber: 4,
  status: 'revealed',  // ← Change from 'tbd'
  name: 'Dr. Jane Smith',
  affiliation: 'Stanford University',
  title: 'Research Scientist',
  bio: 'Jane focuses on ML approaches to predicting clinical trial outcomes...',
  talkTime: '14:00 – 15:00',
  photoUrl: 'https://example.com/jane-smith.jpg',
}
```

4. Commit and push. Vercel auto-deploys.

### Adding a New Speaker Photo

Photos should be hosted externally (e.g., GitHub, Cloudinary, or BMSL's CDN). Update the `photoUrl` field in the speaker object.

## Project Structure

```
app/
├── layout.tsx          # Root layout with fonts & metadata
├── page.tsx            # Home page (all sections in one scrolling page)
├── globals.css         # Global styles + Tailwind
content/
├── event.ts            # Event constants
├── speakers.ts         # Speaker data
└── agenda.ts           # Agenda timeline
components/
├── Header.tsx
├── Hero.tsx
├── About.tsx
├── Topics.tsx
├── Speakers.tsx
├── Agenda.tsx
├── Location.tsx
├── Hosts.tsx
├── CTABand.tsx
├── Footer.tsx
└── SectionEyebrow.tsx  # Reusable § label component
```

## Design Language

The site borrows BMSL's refined visual language:

- **Fonts**: Geist (sans), Geist Mono (captions), Instrument Serif (display)
- **Palette**: Grayscale-first (gray-900, gray-500, gray-400 for text), white backgrounds, subtle `#98958a` and `#c9c6ba` accents, blue CTA buttons (`bg-blue-500`)
- **Sections**: Each section prefixed with a `§ 0X — Label` eyebrow in mono
- **Layout**: `max-w-7xl` centered container, generous vertical whitespace, `tracking-tight`

## Deployment

The site is configured to deploy on **Vercel**:

1. Connect the repo to Vercel via [vercel.com](https://vercel.com)
2. Attach a custom domain (e.g., `nextai.bio`)
3. Updates to main branch auto-deploy

## Environment Variables

None required for development or production. The site is fully static.

## SEO & Social

Open Graph and Twitter metadata is pre-filled in `app/layout.tsx` using event data from `content/event.ts`. Update `metadataBase` once a custom domain is assigned.

## Troubleshooting

### Port 3000 already in use

```bash
npm run dev -- -p 3001
```

### Type errors

Ensure TypeScript version matches (`^7.0.2`). Run:

```bash
npx tsc --noEmit
```

## Contributing

- Keep all event data in `content/` files, not hardcoded in components
- Use the provided Tailwind utility classes and semantic color names (`text-gray-900`, etc.) for consistency
- Test responsive layout at mobile/tablet/desktop before pushing

## License

© 2026 Bioinformatics Munich Student Lab (BMSL). See LICENSE for details.

---

**Questions?** Check the [plan file](/.claude/plans/so-i-am-a-memoized-garden.md) for full design rationale.
