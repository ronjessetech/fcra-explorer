# FCRA Explorer & Compliance Tracker

An offline-first, installable Progressive Web App (PWA) that organizes, searches, and visualizes public records of FCRA-registered organisations in India, storing all data locally in the browser with zero backend server dependency.

Developed by **Flugelsoft Labs**.

---

## Key Features

- **Offline-First & Installable PWA**: Runs 100% locally in the browser using IndexedDB (Dexie.js). Full PWA support with Service Worker offline caching.
- **Strictly Verified Public Data**: Pre-loaded with genuine public domain records from the Foreigners Division, Ministry of Home Affairs (MHA), Government of India (covering verified non-profits across all 8 North Eastern states and key national benchmarks). Zero mock or hallucinated records.
- **Smart Client-Side Search & Multi-Faceted Filtering**: Search by organisation name, FCRA registration number, city/district, or key activities. Filter by State/UT, status (Active, Expired, Cancelled), nature (Social, Educational, Economic, Cultural, Religious), or expiry date windows.
- **Organisation Profile Drawer**: Complete due-diligence view with FCRA registration dates, 5-year renewal dates, designated State Bank of India (SBI) New Delhi Main Branch account allocation details, and historical Form FC-4 annual return filings.
- **Watchlist & Due-Diligence Notes**: Bookmark organisations and save private compliance notes or renewal reminders directly in IndexedDB.
- **Data Import & Export Utilities**:
  - Built-in CSV / JSON Importer with automatic MHA column header detection.
  - One-click North East verified dataset auto-sync.
  - Offline CSV export for filtered query results and watchlists.
  - Complete JSON backup and restore.
- **Statutory Compliance & Banking Tracker**: Highlights the Section 17 mandate (SBI NDMB, 11 Sansad Marg, IFSC `SBIN0000691`) and tracks certificate renewal timelines under Section 16 of FCRA 2010.

---

## Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Local Database**: IndexedDB via Dexie.js (`dexie`, `dexie-react-hooks`)
- **CSV Engine**: PapaParse
- **Visualizations**: Recharts
- **PWA**: `vite-plugin-pwa`

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/ronjessetech/fcra-explorer.git
cd fcra-explorer

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building for Production

```bash
npm run build
npm run preview
```

---

## Data Source & Statutory Disclaimer

- **Data Source**: Official public domain disclosures and gazette notifications published by the Foreigners Division, Ministry of Home Affairs (MHA), Government of India ([fcraonline.nic.in](https://fcraonline.nic.in)).
- **Disclaimer**: This is an independent research and compliance tool developed by Flugelsoft Labs. It is **not** affiliated with, endorsed by, or in any way connected to the Ministry of Home Affairs (MHA), Government of India. Always cross-verify live certificate standing on the official MHA portal before making foreign remittances or grant disbursements.

---

## License

© 2026 Flugelsoft Labs. All Rights Reserved.
