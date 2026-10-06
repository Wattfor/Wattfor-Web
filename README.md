# Wattfor ⚡

> **High-Converting Websites & Local SEO Management for Trade Contractors**  
> Engineered specifically for electricians, plumbers, HVAC technicians, and roofers.

---

## 📖 Overview

**Wattfor** delivers lightning-fast, high-converting digital storefronts and local search infrastructure for trade contractors. Built to turn local search intent into booked jobs, Wattfor replaces generic agency templates with bespoke, high-performance web architecture and transparent month-to-month pricing.

### Key Highlights
- **WebGL Interactive Hero**: Dynamic 3D Silk background component (`@react-bits/Silk-JS-CSS`) built on Three.js / React Three Fiber.
- **Unified Design System**: Powered exclusively by the **Power Grotesk** typeface with custom brand palette tokens.
- **Glassmorphic Navigation**: Responsive floating header with high-contrast badge branding and smooth scroll adaptation.
- **High-Velocity Performance**: Next.js 16 with Turbopack, static page generation, and optimized SVG assets.
- **Trade-Specific Architecture**: Bento feature breakdowns, blueprint showcase galleries, interactive dispatch modal, and transparent pricing matrices.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & CSS custom `@theme` variables
- **Motion & 3D**: [Framer Motion](https://www.framer.com/motion/), [Three.js](https://threejs.org/) & [@react-three/fiber](https://r3f.docs.pmnd.rs/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Local self-hosted **Power Grotesk** (`woff2`)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 🎨 Brand & Design System

### Color Palette
| Token | Hex | Role |
| :--- | :--- | :--- |
| `--color-brand-navy` | `#02242F` | Deep primary brand background & headline tone |
| `--color-brand-copper` | `#1A6372` | Tech-teal accent & interactive indicator |
| `--color-brand-copper-hover`| `#124C57` | Hover states |
| `--color-brand-sky` | `#CBE1FC` | Soft highlight tint on dark backgrounds |
| `--color-brand-slate` | `#5B6E7B` | Secondary readable metadata & captions |
| `--color-brand-offwhite` | `#E6EBF5` | Clean page canvas & surface tone |

### Typography
- **Primary Typeface**: **Power Grotesk** (Weights 400, 500, 700, 900).
- Loaded via `next/font/local` and `@font-face` definitions in `src/app/globals.css`.

---

## 📂 Project Structure

```
Wattfor/
├── public/
│   ├── fonts/               # Power Grotesk woff2 font files
│   ├── wattfor.svg          # Primary vector logo
│   ├── favicon.ico          # Multi-resolution ICO favicon
│   └── wattfor-icon.png     # Rasterized app icon
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind v4 configuration & theme tokens
│   │   ├── layout.tsx       # Root layout & SEO metadata
│   │   ├── page.tsx         # Primary landing page
│   │   ├── icon.svg         # App Router native vector favicon
│   │   └── favicon.ico      # App Router native ICO favicon
│   ├── components/
│   │   ├── mockups/         # Interactive trade dashboard & code previews
│   │   │   ├── BuildMock.tsx
│   │   │   ├── SignalMock.tsx
│   │   │   └── UpkeepMock.tsx
│   │   ├── sections/        # Sectional landing page components
│   │   │   ├── Hero.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── BentoFeatures.tsx
│   │   │   ├── BlueprintGallery.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── WhyUs.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Social.tsx
│   │   │   ├── Faq.tsx
│   │   │   ├── ClosingCta.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/              # Primitive reusable UI elements (Button, Modal, CircuitBg)
│   │   └── Silk.jsx         # WebGL 3D silk shader background
│   └── lib/
│       └── utils.ts         # Utility helpers (cn / clsx / twMerge)
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v20+
- [pnpm](https://pnpm.io/) (`npm i -g pnpm`)

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/Amani-Ishimwe/Wattfor.git
cd Wattfor
pnpm install
```

### Development Server
Run the local development server with Turbopack:
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) (or the assigned port if 3000 is occupied) in your browser.

### Production Build
Test and compile the production build:
```bash
pnpm build
```

Run the built application locally:
```bash
pnpm start
```

---

## 📄 License

Private repository. All rights reserved by **Wattfor**.
