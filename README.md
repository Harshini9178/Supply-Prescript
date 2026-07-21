# SupplyPrescript — Frontend

Frontend for **SupplyPrescript**, a closed-loop prescriptive analytics system.
Built by Member 4 (Frontend Lead) as part of the Axlero Solutions team project.

## Stack

- React (Vite)
- Charts (planned: Recharts / Chart.js)
- REST API integration with backend (FastAPI)

## Project Structure

```
src/
  components/   # Reusable UI components (Navbar, Hero, ...)
  assets/       # Static assets
  App.jsx       # Root component
  main.jsx      # Entry point
```

## Getting Started

```bash
npm install
npm run dev
```

## Week 1 — Day 2: React Setup

- Scaffolded project with Vite + React
- Replaced default Vite boilerplate with a branded starting layout (Navbar, Hero)
- Set up a `components/` folder for reusable UI pieces
- Verified dev server runs locally with no errors

## Week 1 — Day 4: Navigation

- Installed and configured `react-router-dom`
- Wrapped the app in `BrowserRouter` (`main.jsx`)
- Added routes for Dashboard, Inventory, Insights, and Reports (`pages/`)
- Converted Navbar links to `NavLink` with active-route styling
- Verified navigation works between all pages with no console errors
- Next: Dashboard Pages content (Day 5)
