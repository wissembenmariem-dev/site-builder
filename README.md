# Site Builder

Content-driven Next.js template for professional services websites. Brand, navigation, copy, services, case studies and contact details live in typed content files; pages, navigation and footer are generated from them. The sample content describes a fictional IT consultancy, Northwind Consulting.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide icons

## Features

- Five pages out of the box: home, services, case studies, about, contact
- Single source of truth in `src/content`: change a service or a case study once and every page, card and footer link follows
- Motion system: scroll and text reveals, magnetic buttons, infinite logo slider, animated counters, custom cursor, all respecting `prefers-reduced-motion`
- Bento grid of featured services with icons resolved from a typed registry
- Accessible contact form with service selection
- Fully static output, typed metadata per page

## Customize

| File | Content |
|---|---|
| `src/content/site.ts` | Brand, contact details, navigation, hero, page copy, calls to action |
| `src/content/services.ts` | Service categories and service catalogue |
| `src/content/caseStudies.ts` | Case studies with results and tags |
| `src/content/icons.ts` | Icon registry used by services and values |
| `src/components/BrandMark.tsx` | Logo mark |
| `src/app/globals.css` | Colour tokens and utilities |

## Structure

```
src
├── app/            routes rendered from the content layer
├── components/
│   ├── motion/     animation primitives
│   ├── sections/   page sections
│   └── ui/         reusable UI components
├── content/        typed site content
└── lib/            helpers
```

## Development

```bash
npm install
npm run dev
npm run build
npm run lint
```

`netlify.toml` is included for one-step deployment on Netlify.

## License

Copyright (c) 2026 Wissem Ben Mariem. All rights reserved. See [LICENSE](LICENSE).
