# Smart Building Admin Dashboard

A responsive Smart Building Admin Dashboard built using Angular 20.  
This project demonstrates enterprise-style dashboard architecture using mock APIs, asynchronous data handling, charts, maps, and responsive UI components.

---

# Features

## Organization Overview
- Statistical KPI cards
- Responsive grid layout
- Icons and badges
- Loading & error states

##  Product Updates
- Timeline/feed style UI
- Release notes display
- Version badges
- Responsive design

## Asset Health Summary
- Building-wise and floor-wise asset data
- Nested accordions/cards
- Energy consumption display

## Interactive Building Map
- Built using Leaflet + OpenStreetMap
- Dynamic markers from mock API
- Popup details on click/hover
- Responsive map layout

## Device Health Analytics
- Chart.js integration
- Device health trend visualization
- Loading spinner support

---

# Tech Stack

- Angular 20
- TypeScript
- HTML5
- CSS3
- Leaflet
- OpenStreetMap
- Chart.js
- ng2-charts

---

# Project Structure

```bash
src/
│
├── app/
│   ├── components/
│   │   ├── overview/
│   │   ├── product-updates/
│   │   ├── asset-health/
│   │   ├── building-map/
│   │   └── device-health/
│   │
│   ├── services/
│   │   └── dashboard.service.ts
│   │
│   └── app.routes.ts
│
├── assets/
│   └── data/
│       ├── overview.json
│       ├── updates.json
│       ├── assets-health.json
│       ├── buildings.json
│       └── device-health.json
│
└── styles.css
```

---

# Installation

Clone the repository:

```bash
git clone <your-github-repo-url>
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
ng serve
```

Open in browser:

```bash
http://localhost:4200
```

---

# Mock API Integration

All dashboard data is stored inside local JSON files located in:

```bash
src/assets/data/
```

Data is fetched asynchronously using the native Fetch API to simulate real-world API architecture.

---

# Simulated Latency

Network delays are simulated using `setTimeout()` to demonstrate loading states and asynchronous UI behavior.

---

# Loading States

The dashboard includes:
- Loading spinners
- Graceful async handling
- Error handling fallback UI

---

# Leaflet Map Integration

Leaflet with OpenStreetMap is used to display building locations dynamically.

Features:
- Marker rendering
- Interactive popups
- Responsive map container
- Health score display

---

# Chart Integration

Device Health Analytics uses:
- Chart.js
- ng2-charts

---

# Responsive Design

The dashboard is fully responsive for:
- Desktop
- Tablet
- Mobile devices

Techniques used:
- CSS Grid
- Flexbox
- Media Queries

---

# Assignment Requirements Covered

Mock API Integration  
Fetch API Usage  
Simulated API Delay  
Loading States  
Error Handling  
Responsive Dashboard UI  
Leaflet Map Integration  
Chart Analytics  
Nested Data Handling  

---

# Author

Md Firoz Ahmad

---

# License

This project is created for interview assignment/demo purposes.
