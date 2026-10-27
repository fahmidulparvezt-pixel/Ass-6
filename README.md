
# 💪 FitLog — Workout Library

A responsive workout tracking application built with Next.js. Explore exercises, view detailed workout instructions, create your daily workout plan, and save your favorite exercises for later.

## 🔗 Live Demo & Repository

- **Live Demo:** [FitLog](https://ass-6-ecru.vercel.app/)
- **Source Code:** [GitHub Repository](https://github.com/fahmidulparvezt-pixel/Ass-6)


## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Data Persistence:** Browser Local Storage
- **API:** FitLog Workout API

## ✨ Key Features

1. **Responsive workout library** — a 3-column grid of 12 lifts on desktop that
   collapses cleanly down to a single column on mobile, each card showing image,
   muscle-group tags, equipment, and a duration/calories/rating stats row.
2. **Live navbar badges** — the "Plan" and "Saved" pill counters update instantly
   as workouts are added or removed, and link straight to `/my-plan`.
3. **Detailed workout pages** — a two-column layout with a large image, key-specs
   panel, numbered instructions, and "Add to today's plan" / "Save for later"
   actions with toast confirmations.
4. **My Plan dashboard** — live Exercises / Minutes / Calories summary cards,
   tabbed Today's Plan vs. Saved views, mark-as-done and remove actions, and a
   friendly empty state when a list has nothing in it.
5. **Sort, search, and persistence** — sort the library by Duration, Calories, or
   Rating, search by name or tag, and every plan/saved change is written to
   `localStorage` so a reload never loses progress. The plan also enforces a
   five-lift daily cap to match the design brief.

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your computer
- npm (included with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fahmidulparvezt-pixel/Ass-6.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Ass-6
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```
## 📦 Build & Deploy

```bash
npm run build
npm run start
```

Deploy the project to Vercel, Netlify, or Cloudflare Pages by importing this
repository — no extra environment variables are required.

## 📁 Project Structure

```text
Ass-6/
├── app/          # Pages and routes
├── components/   # Reusable UI components
├── context/      # Shared application state
├── lib/          # Utility functions and API helpers
├── public/       # Static assets
├── package.json  # Project scripts and dependencies
└── README.md     # Project documentation
```

