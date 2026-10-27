# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## CivicSubmittal decisions

The user selected option 3, Coordination Instrument. Preserve the chalk/charcoal/citron palette, oversized Inter Tight typography, IBM Plex Mono annotations, parcel map and exploded drawing visual language. Keep all five products and the full 39-route structure. Lenis and GSAP are required; preserve accessible reduced-motion and mobile fallbacks. The brief's life-safety drawing issue takes priority over stray reflected-ceiling or approval wording in the generated reference. The website is a concept frontend with synthetic records and local-only forms; do not invent production coverage, integrations, accounts, results or customers.

## Refinement feedback — 27 October 2026

The user requested recognizable logo symbols rather than initials or geometric abstractions, more purposeful Lenis/GSAP motion, contextual card/button interactions, brighter varied backgrounds and a new footer. The updated material palette uses paper white, charcoal, citron and clay with an original quiet paper texture. Preserve all five products and all 39 routes. Three logo proposals live at `/identity.html`: Paper Swallow, Drawing Clasp and Gathering Hand were explored. The user has now selected Drawing Clasp; the historical comparison redirects to the final brand kit. Keep reduced-motion, mobile non-pinned fallbacks, real focus states, unchanged synthetic disclosures and local-only form/demo behavior.

## Final brand selection — 27 October 2026

Drawing Clasp is the approved design direction. Use only the vector lockups from `public/brand` in the shared header/footer. The old `?mark=` preview parameter must not switch the brand. `public/brand.html` shows the finalized SVG and favicon kit. Preserve outlined wordmarks, ink/white/citron/black variants, the optical micro-mark, ICO/PNG/Apple touch icons and manifest. `npm run brand:build` regenerates the kit exports; the canonical path master is `public/brand/mark-ink.svg`.

## Intro selection — 27 October 2026
The user selected option 2, One Address, Many Layers. Preserve the cinematic city-to-parcel-to-drawing-layer sequence above the hero. No navbar during intro; reveal it as the hero enters. Keep skip, pause, reduced-motion static state, and manual-scroll cancellation. The nine-second Remotion intro hands off through Lenis; GSAP hero reveals begin on hero entry. Synthetic disclosures remain visible.
