# Clive Christen — Luxury Perfume House

> *Where Scent Becomes Identity*

A cinematic, scroll-driven luxury fragrance experience built with Next.js 16. Features high-fidelity image-sequence animation, GSAP-powered effects, and a premium editorial design system.

## Author

**Anuj**

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Animation**: Framer Motion + GSAP + ScrollTrigger
- **Styling**: Tailwind CSS v4
- **Scroll**: Locomotive Scroll
- **Language**: TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the experience.

## Structure

```
app/
  page.tsx              → Main scroll experience
  layout.tsx            → Root layout + metadata
  components/
    Navbar.tsx          → Fixed navigation
    HeadphoneScroll.tsx → Image-sequence hero scroll
    ProductShowcase.tsx → Stacked fragrance cards
    ProcessScroll.tsx   → Craft process editorial
    BenefitScroll.tsx   → Olfactory attributes
  essence/              → Maison page
  philosophy/           → Brand story
  rituals/              → Application ateliers
public/
  framers/              → Perfume animation frames (65 × PNG)
```

## Brand

**Clive Christen** is an ultra-luxury fragrance maison founded on the belief that true perfumery is an extension of identity — rare, precise, and entirely personal.

---

© 2025 Clive Christen. All rights reserved.
