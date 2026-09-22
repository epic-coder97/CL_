# CloseMindLabs — Enterprise Agent Operating System

> India-first, globally deployable. Customer-controlled execution layer for enterprise AI agents with zero data egress.

---

## Overview

**CloseMindLabs** is an infrastructure-agnostic enterprise operating system for autonomous AI agents. Rather than acting as a simple conversational wrapper or SaaS middleman, CloseMindLabs deploys directly inside customer-controlled infrastructure (AWS VPC, GCP, Azure, or air-gapped on-premise data centers).

It provides the governed orchestration, permission gating, audit logging, and transactional safety required to connect enterprise systems of record to frontier intelligence without exposing customer data.

```
+---------------------+     +-----------------------------------+     +---------------------+
|    YOUR SYSTEMS     | --> |       CLOSEMIND OPERATING         | --> |     GOVERNED        |
|  (ERP, DB, CRM, API)|     |  (Permission Gate, State, Audit)  |     |   AI AGENTS         |
+---------------------+     +-----------------------------------+     +---------------------+
```

---

## Core Principles

- **Model Independence**: Route, benchmark, and hot-swap between frontier models (Claude, GPT, Gemini) or private self-hosted weights without rewriting business logic.
- **Zero-Egress Boundary**: Entirely contained within the customer perimeter. Database credentials, internal APIs, and customer PII never leave the tenant.
- **Transactional Safety**: ACID action execution with automated rollbacks, human-in-the-loop approval thresholds, and immutable cryptographic audit logs.
- **System Boundary Constraint**: Strict separation between model inference and database state. Agents interact through governed APIs, never via raw database connections.

---

## Key Features

- **Archival Technical Aesthetic**: Built with a Bell Labs / Dieter Rams-inspired monograph design system featuring warm tactile paper grain, high-contrast monospace typographic hierarchy, and terminal scanline effects.
- **Real-Time Console Thesis Stream**: Dynamic terminal typing telemetry revealing system specifications at 9600 baud cadence.
- **Interactive System Architecture**: Live 3-stage visual topology detailing enterprise input ingestion, the CloseMind operating layer, and governed agent outputs.
- **Zero-Egress Security Specification**: Deep breakdown of perimeter defense, network isolation, VPC peering, and credential vaulting.
- **Design System Matrix**: Full visual component catalogue featuring hardware-inspired toggle switches, tactile terminal keys (`CL_`), and diagnostic badges.

---

## Tech Stack

- **Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (configured via `@import "tailwindcss"`)
- **Animation**: Motion (`motion/react`)
- **Icons**: Lucide React
- **Textures**: Pure procedural SVG/Canvas paper grain and CSS-only CRT scanline overlay

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/closemindlabs.git

# Navigate into the project directory
cd closemindlabs

# Install dependencies
npm install
```

### Development

```bash
# Start the local development server
npm run dev
```

The application will be served locally at `http://localhost:3000`.

### Production Build

```bash
# Type-check and compile static bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
├── public/                 # Static assets and icons
├── src/
│   ├── components/
│   │   ├── PaperGrain.tsx      # Procedural micro-fiber archival paper texture
│   │   └── TerminalThesis.tsx  # Framer Motion terminal streaming component
│   ├── App.tsx             # Main application layout & architecture documentation
│   ├── index.css           # Global typography, Tailwind imports & CRT scanline styling
│   ├── main.tsx            # React application entry point
│   └── types.ts            # Shared TypeScript interfaces and definitions
├── index.html              # HTML5 entry with synchronized OpenGraph metadata
├── metadata.json           # Platform capability declarations
└── package.json            # Scripts and dependencies
```

---

## License

© 2026 CloseMindLabs. All rights reserved.
