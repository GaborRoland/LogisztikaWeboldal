# LogisztikaWeboldal – SwiftLogix

🌍 **Language / Nyelv:** [🇬🇧 English](README.en.md) · [🇭🇺 Magyar](README.md)

---

**SwiftLogix** is a modern B2B logistics and supply-chain management marketing website built with [Next.js](https://nextjs.org/) (App Router), TypeScript, and Tailwind CSS v4.

---

## 🌐 About the project

The website showcases SwiftLogix's logistics services, client success stories, and industry-specific solutions – all wrapped in a modern, responsive design.

### Key features

- 🚚 **Service showcase** – Freight transportation, warehousing & fulfillment, last-mile delivery, supply-chain consulting
- 🏭 **Industry solutions** – E-commerce, pharmaceuticals, food & beverage, technology, automotive, manufacturing
- 📝 **Blog** – Expert articles on logistics trends
- 📊 **Case studies** – Client success stories with measurable results
- 👥 **Team section** – The company's leading experts
- 📬 **Contact form** – Lead-generation enquiry form

---

## 🛠️ Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (React 19) |
| Language | TypeScript 5.x |
| Styling | Tailwind CSS 4.x + PostCSS |
| Icons | lucide-react |
| Routing | Next.js App Router |
| Rendering | Server + Client Components |
| SEO | Metadata API, JSON-LD schema markup |
| Linter | ESLint 9 |

---

## 📁 Project structure

```
LogisztikaWeboldal/
├── public/                         # Static assets (SVG icons)
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── layout.tsx              # Root layout (Header, Footer, metadata)
│   │   ├── page.tsx                # Homepage
│   │   ├── about/                  # About page
│   │   ├── services/               # Services listing (+ 4 detail pages)
│   │   ├── blog/                   # Blog list + dynamic [slug] post pages
│   │   ├── case-studies/           # Case studies
│   │   ├── industries/             # Industry solutions
│   │   ├── contact/                # Contact page
│   │   └── globals.css             # Global Tailwind styles
│   ├── components/                 # Reusable React components
│   └── lib/
│       └── data.ts                 # Centralised content data
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🚀 Local development

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm 9+

### Install and run

```bash
# Install dependencies
npm install

# Start the development server (http://localhost:3000)
npm run dev
```

### Production build

```bash
# Create an optimised production build
npm run build

# Start the production server
npm start
```

### Code quality

```bash
# Run ESLint
npm run lint
```

---

## 📄 Pages and routes

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about` | Company overview, team, values |
| `/services` | Services listing |
| `/services/freight-transportation` | Freight transportation details |
| `/services/warehousing-fulfillment` | Warehousing & fulfillment details |
| `/services/last-mile-delivery` | Last-mile delivery details |
| `/services/supply-chain-solutions` | Supply chain solutions details |
| `/blog` | Blog post listing |
| `/blog/[slug]` | Dynamic individual blog post page |
| `/case-studies` | Client success stories |
| `/industries` | Industry-specific solutions |
| `/contact` | Contact enquiry form |

---

## 🔧 Configuration

- **`tsconfig.json`** – TypeScript strict mode enabled; the `@/*` path alias maps to `./src/*`.
- **`postcss.config.mjs`** – Tailwind CSS v4 PostCSS integration.
- **`next.config.ts`** – Minimal Next.js configuration.

---

## 📦 Key dependencies

| Package | Version | Description |
|---------|---------|-------------|
| `next` | 16.x | Next.js framework |
| `react` | 19.x | UI library |
| `lucide-react` | 1.x | SVG icon set |
| `tailwindcss` | 4.x | Utility-first CSS |
| `typescript` | 5.x | Type-safe JavaScript |

---

## 📝 License

This project is available under the [MIT License](LICENSE).
