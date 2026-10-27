# CivicSubmittal design QA

**Final gate: passed for the local frontend concept scope.** No open P0, P1 or P2 findings from this pass. This is not a claim of production service, legal review, verified rule coverage or formal accessibility certification.

## Reference and comparison

The selected source is option 3, **Coordination Instrument**, generated as `exec-aaa84750-7b3b-43d5-87b7-2addc7c2aea6.png`. Its typography, light chalk/charcoal/citron surfaces, three-part map/plan/evidence hero, dark dependency chapter, annotated drawing scene and five product cards define the implementation.

The source and implementation were inspected together. `qa/reference-comparison.jpg` normalizes their hero crops to equal 720px column widths. `qa/home-full-desktop.jpg` and `qa/full-story-contact-sheet.jpg` show the extended homepage, beyond the shorter concept image. The source's reflected-ceiling example and “site to approval” wording were intentionally replaced with the brief's missing life-safety drawing and human handoff. Navigation was expanded to the full IA. The map, exploded plans and floor plan are newly generated original assets; native React controls replace image-generated interface text.

## Verification evidence

- Production build: `npm run build` passed, without the earlier bundle-size warning after vendor chunking.
- Packaging checks: `npm run test:sites` passed **4/4** (assets, SPA fallback, missing API/write behavior, package outputs).
- All **39 planned routes** rendered with a heading at 1440px and 390px. Initial mobile runs during a temporary font-import failure were discarded and rerun after correction.
- Desktop route inventory: `qa/route-audit-desktop.json`; mobile route inventory: `qa/route-audit-mobile.json`.
- Final mobile regression after overflow/sticky refinements: `qa/final-mobile-audit.json` (home, products, sources, pricing, request form, record).
- Tablet checks at 768×1024 covered home, product suite, source inventory, pricing, pilot, request form and record. No page overflow. The hero illustration's deliberate image crop is the only reported local overflow (`qa/route-audit-tablet.json`).
- Final runtime check across resources and home: no new warnings/errors (`qa/final-runtime-logs.json`).
- Representative captures: `qa/home-desktop.jpg`, `qa/mobile-home.jpg`, `qa/product-review-desktop.jpg`, `qa/final-*.jpg`, `qa/record-desktop.jpg`, `qa/record-workbench-desktop.jpg`, `qa/source-evidence-dialog.jpg`, `qa/source-dialog-mobile.jpg`, and `qa/tablet-*.jpg`.

## Motion and layout

The desktop dependency chapter was observed pinned near 80px beneath navigation while its track moved from approximately −18px to −288px as page scroll advanced. The track spans 1788px at the checked 1440px viewport. It has a skip link and returns to normal vertical flow. A sufficiently short desktop window uses a complete static four-column layout. Tablet uses two columns; mobile uses one. Reduced motion removes pinning and shows every step. The pause control was verified to remove the pin spacer. CSS transitions honor the OS reduced-motion preference.

Hero headings rise within masks. The schematic map enters from the left with a bounded zoom; site cards assemble; plans reveal upward; evidence rows enter from the right in sequence. Section entrances use modest directional offsets, and large maps reveal with a bounded zoom. Motion is decorative: no business state changes without a click.

Typography, card density, linework, image crop, Phosphor icon consistency, section backgrounds, navigation, footer and mobile hierarchy were visually inspected. Hero and page headlines stay legible, body text wraps without collisions, and the layouts retain the selected restrained architectural language.

## Interaction checks

- Desktop products menu opens, navigates to Permit Signal and closes. Escape restores focus to its opener.
- Mobile drawer opens, navigates to Permit Review and detaches after route change. It provides a close button, Escape handling, focus containment and nested scroll handling.
- Scope selection for another municipality displays **unavailable**, with no readiness recommendation.
- Source inventory Comparator filter shows two records.
- Queue search finds TI-107; an unmatched query shows an empty state; reset restores records; Blocked filter returns three rows.
- Adding sample LS-101 changes the local packet version but leaves the source-verification hold unresolved.
- Requesting architect review changes local state and explicitly says no message was sent.
- Source dialog shows unknown effective date, unassigned verifier and unverified applicability; it is scrollable on mobile.
- Rejected classification appears in activity. Arrow keys move record tabs. Reset reenables revision and review actions.
- Packet and report downloads contain explicit synthetic/concept labels and no official filing or approval. Sample outputs are retained in `qa/`.
- Report stage counts are 2 / 3 / 3 / 2; task counts are 3 pending / 3 blocked / 3 completed / 1 rejected, matching ten fictional records.
- Empty lead submission is blocked by native required-field validation. A completed fictional example yields **“This request has not been sent.”** No service is connected.
- Sign-in access check reports authentication is unavailable and offers the synthetic demo without credentials.
- Links, buttons, labels, alt text, native details, visible focus, keyboard tabs and reduced motion received a manual check. This was not a full assistive-technology audit.

## Corrected findings

| Severity | Finding | Resolution |
|---|---|---|
| P1 | An attempted narrower font import was unavailable and briefly prevented rendering. | Restored the package's supported Inter Tight import; build and affected browser routes rerun. |
| P2 | Rightward entrance transforms widened mobile pages. | Responsive offsets stay within gutters. Removed main-container clipping so sticky demo labels remain functional. |
| P2 | Horizontal steps could clip when pinning was unavailable or motion was reduced. | Explicit complete static grids at reduced motion, tablet, mobile and short desktop heights. |
| P2 | Resource card links contained a nested official-source link. | Converted wrapper to an article; title and reading CTA are separate links. |
| P2 | The date explainer could become cramped inside a half-width tablet column. | Three compact stacked date cards. |
| P2 | Workflow role rows inherited low-contrast text and could crop their last row. | Explicit foreground colors and compact line spacing. |
| P2 | Other fictional records inherited TI-107's timeline and requirement title. | Record-specific dates, task notes and requirement titles. |
| P2 | Desktop menu Escape targeted a hidden mobile control. | Restore focus to the actual desktop opener. |
| P2 | Contact/demo-request hero CTA linked back to its own route. | Direct in-page form anchor with matching calendar/comment hero visual. |

## Remaining scope limitations

The forms, account access, review requests, source verification and integrations are intentionally frontend previews. There is no public deployment, live analytics, payment, real file collection, production backend or verified municipal coverage. Legal notices are labeled drafts. Domain/trademark clearance, real service setup, security review and rule verification are outside this implementation. No measured customer outcome or buyer commitment is claimed.

## Drawing Clasp finalization

- Selected Drawing Clasp converted to Bezier SVG; all wordmarks outlined. No embedded raster or live-text dependency in 19 SVG assets.
- Shared header/footer finalized; legacy logo switching removed. SVG, ICO, PNG and Apple touch favicons plus manifest installed.
- Browser checked at 1440px and 390px: correct marks, no horizontal overflow, working mobile product navigation.
- Verified active Lenis, GSAP pin progression 01→04, changing track transform, reading progress, skip sequence, interactive walkthrough, actual pointer hover arrow handoff and card index/image/Explore effects.
- Pause removes Lenis and pinning; resume restores motion. Prevented repeated hash scrolling when toggling motion.
- Mobile fallback has no pinning. Runtime warning/error collection empty.
- Evidence: `qa/final-brand/`; production build and four Sites packaging checks pass.

## Cinematic intro QA — 27 October 2026

Source visual truth: `/Users/prajaktagaikwad/.codex/generated_images/01a17e15-e84b-7d51-95a1-7287151e6372/exec-3882bc92-a98d-49d9-b30f-0f1e515457bd.png` (1536 × 1024 storyboard; option 2).
Implementation: `http://127.0.0.1:4387/`; native browser captures in `qa/intro`.
Viewports: 1440 × 900 desktop and 390 × 844 mobile, screenshot pixels equal CSS viewport pixels. Source storyboard panels were cropped, then contained within 720 × 450 comparison cells; desktop captures scaled to the same cell. Different panel aspect ratios are explicitly letterboxed, not treated as pixel-exact references.
Full-view comparison evidence: `qa/intro/source-comparison.jpg`, source left / implementation right, for city, layers and hero. Focused inspection used the full-resolution layer and mobile evidence captures; no separate detail crop needed.

### Findings and iteration history

- [P2, fixed] Drawing planes initially occluded the citron layer. Evidence: `qa/intro/intro-desktop.png`. Reduced plane width, flattened the oblique perspective and increased vertical separation. Re-captured at 56% playback in `qa/intro/layers-desktop-final.png`; all three planes, the citron room and three source annotations are now legible. The combined source comparison confirms the intended visual sequence.
- [P2, fixed] The mobile evidence card touched the bottom controls. Moved its entry position upward from 64% to 60%. Re-captured at the same paused frame in `qa/intro/evidence-mobile-final.png`; the card and controls are separated.
- [P1, fixed] Silent playback initially waited for browser audio permission. Added explicit initially-muted playback. Fresh-load autoplay and completed handoff verified on desktop and mobile.

### Fidelity surfaces

- Typography: existing local Inter Tight Variable and IBM Plex Mono retained; large cinematic display copy intentionally replaces the storyboard's small caption treatment. No clipping in settled desktop/mobile states. Motion masks temporarily clip text during its reveal by design.
- Spacing/layout: three separated planes, mapped site, native evidence cards, clear controls and viewport-height stage. Mobile rearranges the evidence into lower cards. No horizontal overflow on fresh mobile loads or after completed playback. A transient overflow after hot module replacement did not reproduce on fresh navigation.
- Colors: charcoal/ivory city, clay parcel, citron emphasis, warm paper transition. Native controls keep contrast through dark/light scene changes.
- Assets: original city and transparent architectural sheet; approved outlined Drawing Clasp SVG; existing map/drawing assets reused. Geographic imagery remains illustrative. The generated sheet repeats across semantic layers rather than representing three different real plan documents.
- Content: persistent DEMO / synthetic / no-live-coverage disclosures; architect review remains pending; no approval claims. Five products and existing website sections preserved.

### Interaction checks

- Fresh autoplay → actual hero at top 0 → revealed navbar; desktop and mobile captures saved.
- Header hidden and inert during intro; normal header confirmed on `/products`.
- Pause freezes the timeline; Play resumes; manual scroll pauses and cancels subsequent auto-handoff.
- Skip on mobile smoothly reaches hero and moves keyboard focus to `#hero`.
- Reduced-motion control shows a static frame, disables Lenis/GSAP motion and does not auto-scroll. Continue jumps to/focuses hero. Enable motion resumes the full experience when the system preference permits it.
- System reduced-motion branch inspected in source; OS preference emulation was not available in the browser capability set.
- Console errors: none. Remotion's company-license notice is retained; licensing eligibility documented in README.
- Production build and all four Sites packaging tests pass. No production deployment or real data collection performed.

Implementation checklist: assets optimized; controls accessible; desktop/mobile checked; source comparison inspected; original page structure preserved; package rebuilt.

final result: passed

## Quick responsive follow-up — 27 October 2026

Checked 320×740, 768×1024 and 1440×900. Fixed portrait-tablet intro composition by moving its compact breakpoint to 1000px; city framing now keeps the parcel in view and layers use capped widths. Fixed narrow intro evidence cards with proportional widths and bottom anchoring, preventing card/control collisions on shorter screens. Browser evidence: `qa/intro/qa-320-evidence.png`.
Mobile navigation opens and routes to all proposed modules. Product index retains five cards. Home, product index and request-demo have no horizontal overflow at 320px; desktop product grid has none at 1440px. Production build and four packaging tests pass. This is a targeted responsive check, not a new exhaustive audit of all routes.
final result: passed
