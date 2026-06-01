# Mueed City — Interactive Portfolio 2.0

A premium Next.js interactive portfolio for Abdul Mueed, designed as a futuristic digital city where service buildings and project districts showcase WordPress, Shopify, React / Next.js, SEO, design, and automation work.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Validate before deploying

```bash
npm run lint
npm run build
```

## Update content

Most portfolio content is data-driven from `src/data/portfolioData.ts`:

- `projects` controls featured project modules and modal project cards.
- `buildings` controls the interactive city buildings, labels, modal content, tools, and building positions.
- `services`, `skillGroups`, and `processSteps` control the lower-page dashboard sections.

Contact links and form copy live in `src/components/ContactSection.tsx`.
