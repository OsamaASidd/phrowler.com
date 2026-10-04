# QA Report — phrowler.com

**Pass:** 1 (full site) · **Date:** 2026-10-01 · **Scope:** Full UI/UX QA + engagement review, all routes
**Tested against:** source inspection of `app/`, `components/`, `lib/data.ts`, `app/globals.css` (static review — pair with a manual `npm run dev` pass at mobile/tablet/desktop before closing items out)

Paste the sections below to your development bot as-is. Each item has enough detail to implement without further clarification; anything that needs a judgment call is marked **[QUESTION]** instead of prescribed.

---

## Summary

| Severity | Count |
|---|---|
| Blocker | 1 |
| High | 6 |
| Medium | 9 |
| Low | 5 |

**Shippable as-is? No.** The contact form — the site's only conversion path — does not currently submit anywhere real. Fix FUNC-1 before anything else ships.

The engagement gap is real but not a "redesign" problem: the design system (type scale, spacing, color, card pattern) is already consistent and clean. The site reads flat because every section uses the *same* card/CTA/heading pattern back-to-back with zero motion, no social proof, and no imagery — not because the visual language is wrong. The ENG section below is scoped to add life without introducing a new design language.

---

## Functional

### FUNC-1 [Blocker] Contact form posts to a placeholder endpoint
**Where:** [.env.local:4](.env.local#L4), consumed in [app/contact/page.tsx:10-11](app/contact/page.tsx#L10-L11)
**What's wrong:** `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is still set to `https://formspree.io/f/REPLACE_ME`. Every form submission on the live contact page currently posts to a nonexistent Formspree form and silently fails (Formspree returns an error page/404, the user sees no confirmation, and the inquiry is lost).
**Expected:** A real Formspree form ID (or equivalent) configured in the production environment, with a submission that actually reaches an inbox.
**Suggested fix:** Create the Formspree form, set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in the real deployment environment (Vercel/host env vars — `.env.local` is gitignored and local-only), and verify with a live test submission before calling this closed. Do not mark this resolved from reading the code — confirm an actual email arrives.

### FUNC-2 [High] No in-page success/error state after contact form submit
**Where:** [app/contact/page.tsx:68-146](app/contact/page.tsx#L68-L146)
**What's wrong:** The form is a plain HTML `action`/`method="POST"` submit. On success, Formspree redirects the browser to its own generic thank-you page (off-site), and there's no visible error state if the submission fails (network error, Formspree down, required-field mismatch beyond browser-native validation).
**Expected:** Submitting succeeds or fails inside the Phrowler site, with a confirmation message that matches the site's design.
**Suggested fix:** Convert to a client component, submit via `fetch()` to the Formspree endpoint with `Accept: application/json`, and swap the form for an inline success message (reusing the existing card/border visual language) on success, or an inline error message with a retry prompt on failure. This also fixes FUNC-1's blast radius — a broken endpoint becomes visible instead of silently eating leads.

### FUNC-3 [High] No custom 404 page
**Where:** no `app/not-found.tsx` exists (confirmed via repo scan)
**What's wrong:** Any broken/mistyped URL — including a stale link you fix later, or a bad catalog slug — falls through to Next's default unstyled 404, which breaks the site's visual identity entirely and gives the visitor no path back in.
**Expected:** A branded 404 with the header/footer intact and a way back to the homepage or contact.
**Suggested fix:** Add `app/not-found.tsx` using `Container`, the existing heading/body type scale, and a `Button` back to `/`. Keep copy short and on-brand rather than a generic "page not found."

### FUNC-4 [Medium] Dynamic catalog slugs have no guaranteed 404 behavior verified
**Where:** [app/erp/[slug]/page.tsx](app/erp/[slug]/page.tsx), [app/ai/[slug]/page.tsx](app/ai/[slug]/page.tsx) (not read in this pass — verify directly)
**What's wrong:** Unverified in this static pass whether an unknown slug (e.g. `/erp/not-a-real-service/`) calls `notFound()` or throws/renders blank. Needs a manual check.
**Suggested fix:** Confirm both `[slug]/page.tsx` files call `notFound()` from `next/navigation` when `lib/data.ts` has no matching entry, so FUNC-3's 404 page actually gets used rather than a raw exception.

### FUNC-5 [Medium] `NavDropdown` has no keyboard Escape-to-close
**Where:** [components/NavDropdown.tsx:14-54](components/NavDropdown.tsx#L14-L54)
**What's wrong:** The dropdown opens on `group-hover`/`group-focus-within` but has no `onKeyDown` handler for `Escape`, and no explicit way to close it via keyboard once open other than tabbing all the way through its ~10+ links.
**Suggested fix:** Convert to a small client component with local `open` state, close on `Escape` and on `blur` leaving the subtree, and keep the existing hover behavior as a progressive enhancement.

### FUNC-6 [Medium] `MobileNav` doesn't lock body scroll or trap focus while open
**Where:** [components/MobileNav.tsx:11-132](components/MobileNav.tsx#L11-L132)
**What's wrong:** When the mobile menu is open, the page behind it still scrolls (menu panel uses `absolute`, not a scroll-locked overlay), and there's no focus trap — a screen-reader or keyboard user can tab out of the open menu into page content that's visually hidden behind it. There's also no click-outside-to-close.
**Suggested fix:** Add `overflow-hidden` to `<body>` (via a `useEffect` toggling a class, or `document.body.style.overflow`) while `open`, add a click-outside handler (or a full-screen backdrop `<div>` that closes on click), and move focus to the first nav link on open / back to the toggle button on close.

---

## Responsive

### RESP-1 [Medium] Hero "Before/After" card likely cramped at small-to-mid mobile widths
**Where:** [app/page.tsx:57-87](app/page.tsx#L57-L87)
**What's wrong:** `grid-cols-2` with a `border-l pl-6` divider inside a card that itself sits in a `md:grid-cols-2` parent — at widths just under 375px this nests two 2-column grids with no mobile-specific stacking, which risks the "Before"/"After" lists becoming too narrow to read comfortably (3-4 word wraps per line).
**Suggested fix:** Verify at 320-375px in a real browser; if cramped, stack Before/After vertically below `sm:` instead of keeping the 2-up grid at all widths.

### RESP-2 [Low] `NavDropdown` panel is a fixed 600px width with no viewport clamp
**Where:** [components/NavDropdown.tsx:22](components/NavDropdown.tsx#L22)
**What's wrong:** `w-[600px]` centered via `-translate-x-1/2` under the nav item. On narrower desktop/laptop viewports (e.g. a 1024-1100px window, which is still `md:` and above so the desktop nav — not MobileNav — renders), this can overflow the viewport edge depending on where the trigger sits in the header.
**Suggested fix:** Add `max-w-[calc(100vw-3rem)]` alongside the fixed width, or clamp with `min(600px, calc(100vw-3rem))`.

---

## Accessibility

### A11Y-1 [High] Mobile menu toggle and dropdown lack full keyboard/SR parity (see FUNC-5, FUNC-6)
Tracked above — listed here because both are accessibility defects, not just UX polish.

### A11Y-2 [Medium] No skip-to-content link
**Where:** [app/layout.tsx:43-56](app/layout.tsx#L43-L56)
**What's wrong:** Keyboard users must tab through the entire header (logo, 5 nav items, 2 dropdowns' worth of hidden links when focused, "Start a project" button) before reaching page content on every single page load.
**Suggested fix:** Add a visually-hidden-until-focused "Skip to content" link as the first child of `<body>`, pointing to a `id="main"` on the `<main>` element.

### A11Y-3 [Low] Decorative logo image has empty alt but isn't the only image reference — verify no meaningful images rely on filename-as-alt
**Where:** [components/Logo.tsx:16-19](components/Logo.tsx#L16-L19)
**What's wrong:** This one is actually correct (`alt=""` + `aria-hidden="true"` on a decorative logomark next to visible "Phrowler" text) — flagging only so it's not "fixed" incorrectly by an automated a11y linter that flags all empty `alt`s. No action needed; documented so the dev bot doesn't churn on it.

### A11Y-4 [Low] Stat values use only visual size/weight to convey meaning, no unit context for screen readers
**Where:** [app/page.tsx:92-105](app/page.tsx#L92-L105)
**What's wrong:** `"16+"` next to `"Big clients kept compliant on e-invoicing"` reads fine visually but a screen reader announces them as two disconnected text nodes with no programmatic association beyond DOM order.
**Suggested fix:** Low priority — DOM order already makes this understandable in practice. Only worth fixing if an accessibility audit tool flags it; not worth a structural change on its own.

---

## Content

### CONTENT-1 [Low] CTA section headline/body pattern repeats near-verbatim on every page
**Where:** [app/page.tsx:194-205](app/page.tsx#L194-L205), [components/CatalogHub.tsx:65-74](components/CatalogHub.tsx#L65-L74), [components/CatalogDetail.tsx:112-121](components/CatalogDetail.tsx#L112-L121), [app/work/page.tsx:79-88](app/work/page.tsx#L79-L88)
**What's wrong:** Every page ends with the identical layout (`h2` + `Button` in a flex row) and near-identical copy ("Have a... deadline", "Don't see your...", "Ready to scope...", "Something like this..."). A visitor browsing 2-3 pages in one session sees the same block four times, which reads as repetitive rather than reinforcing. This is a content/IA note as much as a visual one — flagged here because it compounds the "flat" feeling noted in ENG-1.
**Suggested fix:** Keep the pattern (it works structurally) but vary tone/angle per page type — e.g. the Work page CTA could reference the specific case study just scrolled past; the catalog-hub CTA already does this reasonably well ("Don't see your exact system"). Low-effort copy pass, not a structural change.

---

## Performance

### PERF-1 [Medium] `Logo.tsx` uses a plain `<img>` instead of `next/image`
**Where:** [components/Logo.tsx:16-20](components/Logo.tsx#L16-L20)
**What's wrong:** `phrowler-logo.png` (221KB source file) is loaded via raw `<img>` at a 36x36px display size with no `next/image` optimization, sizing, or format negotiation — the browser may fetch significantly more bytes than a 36px square needs, on every single page since it's in the header.
**Suggested fix:** Swap to `next/image` with explicit `width={36} height={36}`. Note the existing `<svg>` animated ring overlay sits in the same wrapper via `absolute inset-0` — preserve that stacking when converting.

### PERF-2 [Low] No `loading.tsx` for any route
**Where:** no `app/loading.tsx` or nested `loading.tsx` files exist
**What's wrong:** All routes are presumably static/fast given no data fetching was found, so this is low-impact today — flagging only so it's revisited if any route later adds async data fetching (e.g. a CMS-backed case-studies list), where a missing loading state would then cause a jarring blank-to-content jump.
**Suggested fix:** No action needed now. Revisit if/when server-side data fetching is added.

---

## SEO

No findings this pass — `layout.tsx` metadata, `sitemap.ts`, and `robots.ts` are present and per-page `metadata` exports look complete and non-empty across the pages reviewed. Re-check `app/erp/[slug]/page.tsx` and `app/ai/[slug]/page.tsx` for per-service metadata (not read this pass) to confirm dynamic pages also export unique `title`/`description` rather than inheriting the hub page's.

---

## Engagement & Visual Interest

This is the "make the site engaging" ask. The structural findings above are bugs; these are additive — they make an already-clean design system feel alive instead of static. None of these require a new visual language: same colors, same type scale, same card pattern. Ordered by impact-to-effort ratio, highest first.

### ENG-1 [High] Zero motion anywhere except two hover states and a hidden 36px logo animation
**Where:** site-wide; the only existing motion is the `CatalogHub` card hover lift ([components/CatalogHub.tsx:47](components/CatalogHub.tsx#L47)), the `CatalogDetail` related-card hover lift, and an animated gradient ring in the header logo ([components/Logo.tsx:42-49,77-83](components/Logo.tsx#L42-L49)) that's 36px square and easy to miss entirely.
**What's wrong:** Every section on every page (hero, stats, pillars, featured work, principles, catalog grids) renders fully-formed with no entrance animation, so scrolling through a page feels like flipping through a PDF rather than browsing a live site. For a business pitching "AI automation" and "systems that talk to each other," the site itself feels static and disconnected — the opposite of the pitch.
**Suggested fix:** Add a lightweight scroll-reveal to section-level elements (hero content, each `<section>`'s heading+body, card grids staggered per-item) — e.g. `opacity-0 translate-y-4` initial state transitioning to visible via `IntersectionObserver` in a small shared client component (`<Reveal>` wrapping children), or CSS-only via the `animation-timeline: view()` scroll-driven animation if browser support target allows. Keep durations short (200-350ms) and respect `prefers-reduced-motion` (`@media (prefers-reduced-motion: reduce)` disabling all of the above) — this is a hard requirement, not optional, given WCAG 2.3.3.

### ENG-2 [High] No client logos or testimonials despite the copy repeatedly claiming "16+ Big clients" and "Tier-1 clients"
**Where:** [app/page.tsx:33-39](app/page.tsx#L33-L39) (stats section), [app/about/page.tsx:59-61](app/about/page.tsx#L59-L61), `lib/data.ts` `stats` array
**What's wrong:** The site asserts significant client credibility (stats, About page copy) but shows zero evidence of it — no logos, no quotes, no named outcomes beyond the case-studies list (which itself doesn't name clients by recognizable brand, only by generic descriptors based on what's visible in `work/page.tsx`). For a consulting site, social proof is usually the single highest-leverage engagement/conversion lever available, ahead of animation or visual polish.
**Suggested fix:** **[QUESTION for the business owner, not the dev bot]** — can any client names/logos be disclosed (NDA-permitting), or can 2-3 anonymized but specific testimonial quotes be sourced (e.g. "cut invoice processing from 3 days to same-day — Finance Director, Tier-1 manufacturer")? Once content exists, add a logo strip or testimonial row between the Stats and Pillars sections on the homepage using the existing `border-b border-border` section rhythm.

### ENG-3 [Medium] Stats are static text with no visual distinction from body copy weight
**Where:** [app/page.tsx:92-105](app/page.tsx#L92-L105)
**What's wrong:** Four stats sit in a plain `flex-wrap` row with number + label — functional but low-impact. A count-up-on-scroll-into-view treatment is a well-worn but genuinely effective engagement pattern for exactly this kind of stat row, and it's cheap to add given the numbers are already simple integers (`5+`, `16+`, `4`, `45K+`).
**Suggested fix:** Animate the numeric portion counting up from 0 when the section enters the viewport (pairs naturally with the `<Reveal>` component from ENG-1 — trigger the count-up on the same intersection event). Keep the `+`/`K` suffix static, animate only the digits. Respect `prefers-reduced-motion` by rendering the final value immediately when motion is disabled.

### ENG-4 [Medium] No imagery or illustration anywhere on the site — entirely text, borders, and line icons
**Where:** site-wide; confirmed via `public/assets/` (only the founder's résumé PDF and the logo PNG exist) and no `next/image` usage found in any page component
**What's wrong:** A systems-integration/AI consultancy selling trust in a solo-founder business has no founder photo, no product/dashboard screenshots, no architecture diagrams of the "before/after" story the hero already tells in text. The hero's Before/After card ([app/page.tsx:57-87](app/page.tsx#L57-L87)) is the single best candidate on the site for a visual — it's already structured as a comparison, which is exactly the kind of content a simple diagram or screenshot outperforms text for.
**Suggested fix:** **[QUESTION]** — lowest-effort first step: add a founder headshot to the About page (the "The engineer behind Phrowler" section at [app/about/page.tsx:46-83](app/about/page.tsx#L46-L83) currently has no visual anchor at all in its `md:col-span-3` column). Higher-effort but higher-impact: a simple before/after system diagram (disconnected boxes → connected boxes, using the existing icon set and brand colors) replacing or supplementing the text-only hero card.

### ENG-5 [Medium] No dark mode — site ignores OS/browser color-scheme preference entirely
**Where:** [app/globals.css:1-13](app/globals.css#L1-L13)
**What's wrong:** `:root` defines only one palette with no `@media (prefers-color-scheme: dark)` block and no `color-scheme` meta/CSS property. A visitor with system dark mode gets a hard-coded light site regardless, including the white `--background: #faf8f4` flashing on load for users expecting dark.
**Suggested fix:** **[QUESTION for priority]** — this is a nice-to-have, not a defect (plenty of marketing sites ship light-only intentionally). If wanted: define a dark palette as a second block gated on `prefers-color-scheme: dark`, reusing the same CSS custom-property names so no component code changes. Given the brand's warm cream/terracotta palette, a true dark variant needs real design attention (not just inverted values) — scope as a separate pass rather than bundling into this one.

### ENG-6 [Low] Card pattern (`rounded-xl border border-border bg-background p-6 shadow-sm`) is reused identically across ~6 different content types with no visual hierarchy between them
**Where:** pillar cards ([app/page.tsx:121-123](app/page.tsx#L121-L123)), featured-work cards ([app/page.tsx:170-172](app/page.tsx#L170-L172)), catalog cards ([components/CatalogHub.tsx:47](components/CatalogHub.tsx#L47)), module cards ([components/CatalogDetail.tsx:76-78](components/CatalogDetail.tsx#L76-L78)), case-study cards ([app/work/page.tsx:35-37](app/work/page.tsx#L35-L37))
**What's wrong:** Consistency is good, but zero variation means nothing on any page visually signals "this is the important one." Every card competes equally for attention.
**Suggested fix:** Low priority, cosmetic — e.g. give the homepage's two pillar cards (the site's actual top-level offering) a slightly heavier treatment (subtle brand-tinted border or background) to distinguish them from the denser catalog/case-study grids one level down. Don't over-apply — reserve emphasis for genuinely the most important 1-2 elements per page.

---

## Re-verification (next pass)

Nothing to re-verify yet — this is pass 1. Next pass should:
1. Confirm FUNC-1 is resolved with a real end-to-end test submission (not a code read)
2. Run `npm run dev` and manually walk every route at 375px/768px/1440px to confirm RESP-1 and RESP-2
3. Confirm `notFound()` behavior per FUNC-4 on both `[slug]` routes
4. Re-check this file's status column after the dev bot's changes land, and update each item to resolved/open before writing new findings
