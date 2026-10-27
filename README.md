# CivicSubmittal

A complete local frontend concept website implementing the selected **Coordination Instrument** direction (option 3).

## Preview

The current local preview runs at http://127.0.0.1:4387/. It is not a public deployment.

For a fresh checkout: `npm ci`, then `npm run dev -- --host 127.0.0.1 --port 4387 --strictPort`.

## Included

- 39 planned routes: home, problem, solutions and three audience pages, product suite and all five product pages, platform, features, coverage and candidate city/type, sources, evaluation, pricing, pilot, demo request, four demo screens, company, contact, trust, official handoffs, resources and four articles, sign-in/access help, draft privacy/terms and 404.
- Lenis smooth scrolling integrated with the GSAP ticker and ScrollTrigger.
- Masked headline reveals, map zoom and caption assembly, architectural-plan reveal, evidence-row stagger, directional section entrances, card hover states, and a pinned horizontal dependency chapter on sufficiently large screens.
- Native scrolling and readable complete layouts for reduced motion, short desktop windows, tablet and mobile. A footer control reduces motion; the operating-system preference is respected.
- Synthetic queue of ten records; filters, empty states, record views, source dialog, revision/review actions, rejected suggestion, activity, reset and watermarked text exports.
- Scope gate, source filters, FAQ disclosures, mobile navigation, keyboard tabs, preview form validation and blank pilot worksheet download.
- Original generated map/drawing/logo assets, local fonts, Phosphor icons, favicon, responsive layouts and draft responsibility notices.

## Concept boundaries

CivicSubmittal is a research-stage concept, not an operating permit service. Philadelphia commercial tenant improvements are only a research candidate; exact category, source effective dates and verifier remain unconfirmed. All demo projects, people, addresses, drawings and comments are fictional. No government affiliation or approval outcome is implied.

The form validates locally and **does not send or store requests**. There is no payment, file upload, account authentication, analytics collection, official portal connection or external messaging. Demo changes are held in component memory and reset on navigation/reload. The $250 packet / $1,000 four-packet figures are proposed validation hypotheses, not active offers or government fees. A local document correction never clears the unresolved source-verification hold.

## Source map

- `src/data.js`: five modules, official source inventory, ten fictional records, research content, route inventory.
- `src/ui.jsx`: navigation, motion, shared visual components, source cards, scope selector, dialogs.
- `src/pages.jsx`: all page layouts, forms and demo interactions.
- `src/styles.css`: visual system, responsive layouts and reduced-motion adaptations.
- `public/assets`: original raster illustrations and brand mark; WebP versions used in the app.
- `qa`: browser captures, route checks and exported sample reports.
- `design-qa.md`: comparison, checks, corrections and remaining scope limitations.

## Build and checks

`npm run build` creates `dist/client`, plus the preserved Sites-compatible worker/package files. `npm run test:sites` checks static assets, SPA routing, missing API/write handling and packaging. No deployment was performed.

For Vercel, serve `dist/client` and configure SPA fallback routing. Connect a real lead service, reviewed privacy/terms and an agreed scope before enabling collection. Do not imply authentication, verified coverage, integrations or successful buyer validation merely by deploying this frontend.

## Asset provenance

The C mark, schematic map, exploded plan stack and fictional tenant drawing were generated for this concept, then optimized locally. They are not copied municipal seals, proprietary plan sets, real boundary data or official permit documents. Product cards and workbench controls are native HTML/React, not pasted generated interface screenshots. Fonts: Inter Tight Variable and IBM Plex Mono, bundled through Fontsource. Icons: Phosphor. Official process links remain external references with unverified project-specific applicability.

## Final Drawing Clasp identity

The approved SVG identity is in `public/brand`. Open `/brand.html` for the logo/favicons gallery and downloadable kit. Header and footer use outlined SVG lockups; `index.html` links SVG/ICO/PNG favicons, Apple touch icon and the web manifest. The historical `/identity.html` now points to the chosen identity. Legacy `?mark=` parameters no longer change the logo.

The brand archive includes color variants, horizontal and stacked signatures, outlined wordmarks, primary and optical micro symbols, favicon exports and usage notes. Rebuild lockups and raster icons with `npm run brand:build` (requires Python/Pillow for ICO output). `scripts/build-brand.py` additionally requires Potrace to reproduce the original raster-to-path tracing.

Final-brand browser evidence and checks live in `qa/final-brand`. The website remains a frontend concept; the final brand does not change its operating status.

## Cinematic introduction — One Address, Many Layers

The homepage opens with a silent nine-second Remotion Player composition: city approach, parcel focus, separated drawing layers, source cards and the Drawing Clasp signature. Lenis then scrolls to the real hero over 1.35 seconds. GSAP reveals the hero only as it enters the viewport. Navigation is fixed, hidden and inert during the intro, then revealed at the hero; other routes retain their normal navigation.

Skip moves to and focuses the hero. Pause/Play and Replay control the actual timeline. Manual scrolling or a backgrounded tab cancels automatic handoff; no scroll lock is used. Reduced motion uses a static composition with a Continue button, no autoplay and no animated scroll. The system motion preference is respected; the existing footer motion preference also applies. All five modules and 39 routes remain intact.

- `src/intro/AtlasFilm.jsx`: frame-driven scenes and responsive composition.
- `src/intro/IntroExperience.jsx`: playback, preload, interruption and handoff controls.
- `src/intro/intro.css`: responsive controls, static alternative and navigation reveal.
- `remotion/index.jsx`: editable desktop/mobile and scene compositions; `npm run intro:studio` opens Studio.
- `qa/intro`: browser captures and source comparison.

The city and transparent drawing assets are original generated illustrations, optimized to about 391 KB combined. They represent no real municipality or live coverage. Playback is an embedded React composition; no MP4 export was requested or generated. Remotion's included license has free and company-license eligibility rules; confirm the acquiring company's eligibility before commercial deployment. The evaluation remains local and unpublished.
