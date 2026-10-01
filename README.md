# Archisman Portfolio

A responsive personal portfolio built with React and Vite. It presents Archisman's work, skills, hackathon experience, and contact links in a clean, focused single-page experience.

## Features

- Responsive navigation and hero section
- About, skills, projects, hackathons, and contact sections
- Project cards with technology tags and repository links
- Smooth scrolling and lightweight reveal animations
- Centralized content in `src/data/site.js` and `src/data/projects.js`
- Production builds powered by Vite

## Tech Stack

- React 19
- Vite 8
- JavaScript and JSX
- Lucide React for icons
- Oxlint for linting

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/Archisman18/Portfolio.git
cd Portfolio
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the source with Oxlint |

## Project Structure

```text
src/
├── App.jsx                 # Page composition
├── index.css               # Global styles and responsive layout
├── main.jsx                # React entry point
├── components/             # Page sections and navigation
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Hackathons.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
└── data/
    ├── projects.js         # Projects, skills, and hackathon data
    └── site.js              # Personal details and external links
```

## Customizing the Portfolio

1. Update your name, role, biography, email, social links, and resume path in `src/data/site.js`.
2. Add or edit projects, skills, and hackathons in `src/data/projects.js`.
3. Add project images to `src/assets/` or `public/` and reference them from the project data.
4. Adjust colors, spacing, typography, and responsive behavior in `src/index.css`.

If you provide a resume, place it at `public/resume.pdf` so the hero download link works.

## Production Build

Build the site before deployment:

```bash
npm run build
```

The generated files are placed in `dist/` and can be deployed to any static hosting provider such as Vercel, Netlify, or GitHub Pages.
