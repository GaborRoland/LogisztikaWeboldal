# LogisztikaWeboldal – SwiftLogix

🌍 **Nyelv / Language:** [🇭🇺 Magyar](README.md) · [🇬🇧 English](README.en.md)

---

A **SwiftLogix** egy modern, B2B logisztikai és ellátásilánc-menedzsment vállalat marketing weboldala, amely [Next.js 14](https://nextjs.org/) (App Router), TypeScript és Tailwind CSS v4 technológiákra épül.

---

## 🌐 Az oldalról

A weboldal célja, hogy bemutassa a SwiftLogix által kínált logisztikai szolgáltatásokat, sikersztorikat és iparági megoldásokat – mindezt modern, reszponzív dizájnnal.

### Főbb funkciók

- 🚚 **Szolgáltatások bemutatása** – Teherszállítás, raktározás & kiszállítás, utolsó mérföldes kézbesítés, ellátásilánc-tanácsadás
- 🏭 **Iparági megoldások** – E-kereskedelem, gyógyszeripar, élelmiszer-ipar, technológia, autóipar, gyártás
- 📝 **Blog** – Logisztikai témájú szakmai cikkek
- 📊 **Esettanulmányok** – Ügyfélsikerek mérhetőkkel alátámasztva
- 👥 **Csapatbemutató** – A vállalat vezető szakértői
- 📬 **Kapcsolatfelvételi űrlap** – Érdeklődési lehetőség

---

## 🛠️ Technológiai stack

| Réteg | Technológia |
|-------|-------------|
| Framework | Next.js 16 (React 19) |
| Nyelv | TypeScript 5.x |
| Stílus | Tailwind CSS 4.x + PostCSS |
| Ikonok | lucide-react |
| Routing | Next.js App Router |
| Renderelés | Server + Client Components |
| SEO | Metadata API, JSON-LD schema markup |
| Linter | ESLint 9 |

---

## 📁 Projektstruktúra

```
LogisztikaWeboldal/
├── public/                         # Statikus eszközök (SVG ikonok)
├── src/
│   ├── app/                        # Next.js App Router oldalak
│   │   ├── layout.tsx              # Gyökérelrendezés (Header, Footer, metadata)
│   │   ├── page.tsx                # Főoldal
│   │   ├── about/                  # Rólunk oldal
│   │   ├── services/               # Szolgáltatások (+ 4 aloldal)
│   │   ├── blog/                   # Blog lista + dinamikus [slug] bejegyzések
│   │   ├── case-studies/           # Esettanulmányok
│   │   ├── industries/             # Iparági megoldások
│   │   ├── contact/                # Kapcsolat oldal
│   │   └── globals.css             # Globális Tailwind stílusok
│   ├── components/                 # Újrafelhasználható React komponensek
│   └── lib/
│       └── data.ts                 # Centralizált tartalomadatok
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🚀 Helyi fejlesztés

### Előfeltételek

- [Node.js](https://nodejs.org/) 18+
- npm 9+

### Telepítés és indítás

```bash
# Függőségek telepítése
npm install

# Fejlesztői szerver indítása (http://localhost:3000)
npm run dev
```

### Éles build

```bash
# Optimalizált production build létrehozása
npm run build

# Production szerver indítása
npm start
```

### Kódminőség

```bash
# ESLint futtatása
npm run lint
```

---

## 📄 Oldalak és útvonalak

| Útvonal | Leírás |
|---------|--------|
| `/` | Főoldal |
| `/about` | Cégbemutató, csapat, értékek |
| `/services` | Szolgáltatások listája |
| `/services/freight-transportation` | Teherszállítás részletei |
| `/services/warehousing-fulfillment` | Raktározás & kiszállítás |
| `/services/last-mile-delivery` | Utolsó mérföldes kézbesítés |
| `/services/supply-chain-solutions` | Ellátásilánc-megoldások |
| `/blog` | Blog bejegyzések listája |
| `/blog/[slug]` | Dinamikus blog bejegyzés oldal |
| `/case-studies` | Ügyfélsikerek és esettanulmányok |
| `/industries` | Iparági megoldások |
| `/contact` | Kapcsolatfelvételi űrlap |

---

## 🔧 Konfiguráció

- **`tsconfig.json`** – TypeScript strict mód engedélyezve; az `@/*` elérési út alias a `./src/*` mappára mutat.
- **`postcss.config.mjs`** – Tailwind CSS v4 PostCSS integráció.
- **`next.config.ts`** – Minimális Next.js konfiguráció.

---

## 📦 Fő függőségek

| Csomag | Verzió | Leírás |
|--------|--------|--------|
| `next` | 16.x | Next.js framework |
| `react` | 19.x | UI könyvtár |
| `lucide-react` | 1.x | SVG ikonkészlet |
| `tailwindcss` | 4.x | Utility-first CSS |
| `typescript` | 5.x | Típusbiztos JavaScript |

---

## 📝 Licenc

Ez a projekt a [MIT licenc](LICENSE) alatt érhető el.
