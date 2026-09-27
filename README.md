# 💪 FitLog — Workout Library

FitLog is a dark, no-nonsense gym companion built for people who want to pick a lift,
lock it into today's plan, and watch the week's work add up. Browse a library of
twelve lifts, open a detail page for full instructions and specs, then build a daily
plan or save moves for later — all tracked live in the navbar.

## 🔗 Links

- **Live site: https://ass-6-ecru.vercel.app/
- **Repository: https://github.com/fahmidulparvezt-pixel/Ass-6

## 🛠️ Technologies Used

- **Next.js 14** (App Router) — routing, server components, data fetching
- **React 18** & **TypeScript** — UI and type safety
- **Tailwind CSS** — styling and responsive layout
- **lucide-react** — icon set
- **Browser `localStorage`** — persists Today's Plan and Saved lists across reloads
- **FitLog Workout API** (`https://api.abcz.workers.dev/api/fitlog`) — workout data

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

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📦 Build & Deploy

```bash
npm run build
npm run start
```

Deploy the project to Vercel, Netlify, or Cloudflare Pages by importing this
repository — no extra environment variables are required.

## 📁 Project Structure

```
app/
  layout.tsx            Root layout: fonts, navbar, footer, providers
  page.tsx               Home page (hero + library)
  not-found.tsx           404 page
  workouts/[id]/page.tsx  Workout detail page
  my-plan/page.tsx        My Plan page
components/               UI building blocks (Navbar, cards, sort dropdown...)
context/                  Plan/Saved state + toast notifications
lib/                      API client and shared types
```
