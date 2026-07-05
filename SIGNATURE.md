# Law Office of Stephen S. Berowitz — SIGNATURE (v2 rebuild)

- Slug: berowitz-law · Live: https://berowitz-law.vercel.app · Repo: https://github.com/semajzandrews/berowitz-law (private)
- Business: law firm, 299 Glenwood Ave #2, Bloomfield NJ 07003 · (973) 743-7753 · 5.0★ (1 review, cited narrowly)
- Built 07-04-2026 (v1 torn down same day)

## Concept
**"The Engagement Letter."** The entire site is one sheet of counsel — laid-paper
stock (CSS chain-lines) floating on a navy desk, letterpressed name, monogram seal,
a brass rule that draws itself in, and the body written as an actual letter.
Restraint is the design; the craft is in the paper, the rules, and the type.

## Fingerprint
- Type: Bespoke Serif (display) + Amulya (body) — first board use of the pairing
- Palette: paper #f3eee3 · iron-gall navy #1c2a3a · dull brass #8a6a3b/#6e5330
- Signature move (ONE, quiet): the self-drawing brass rule (SVG stroke-dashoffset) under the letterpressed name; letterpress via layered text-shadow
- Skeleton: single-sheet letter — letterhead → letter body (3 paragraphs) → the ask → map as "Enclosure: Directions" → sign-off. No nav (a letter doesn't have one), no images (zero — deliberate; vault untouched)
- Ethics: no practice areas, years, credentials, or testimonials asserted. Copy speaks only to how the office answers the phone. All facts verified lead data.

## Gates
- Contrast: PASS — 0 failures, full-page sweep on paper background
- 375px: PASS — 0 overflow, docWidth 375; call pill collapses to circle
- Images: none used (uniqueness gate n/a); video: not used — motion undercuts legal gravity (documented decision)
- Prod build: clean static prerender

## Inspiration log
1. Typography-for-Lawyers letterhead doctrine — hierarchy of a formal letter as the entire information architecture
2. Letterpress print craft — pressed-into-stock name via layered text-shadow, not decoration
3. Laid/chain-line paper stocks (Crane & Co-style stationery) — reproduced as pure CSS repeating gradient, no image needed

## Performance budget
- Zero images, zero video, 6 woff2 fonts, no motion library (CSS+IO only). Expected Lighthouse 98+.

## Email enrichment
- No public email found (directories list phone/address only). Phone-first outreach.
- Note (flagged, not used on site): public records also associate him with "Shaievitz & Berowitz" — solo framing kept per verified lead data; worth asking him in person which identity he wants the site under.
