/**
 * Project catalog for the portfolio.
 *
 * HOW TO ADD A NEW POST:
 * 1. Copy the TEMPLATE below and paste at the TOP of PROJECT_DATA.
 * 2. Put images in assets/projects/<id>/desktop/, /tablet/, /mobile/ (or flat paths).
 * 3. Set "pinned": true to keep it first with a pin icon.
 * 4. Save and refresh. Open via #project/<id>
 *
 * Screenshots:
 *   screenshotsDesktop / screenshotsTablet / screenshotsMobile — preferred
 *   Toggle shows only for devices that have images (2+ needed).
 *   Legacy "screenshots" array is treated as desktop.
 *
 * Field order matches the detail page:
 *   Screenshots → About → Features → Tech Stack → Related
 *
 * TEMPLATE:
 * {
 *   "id": "slug",
 *   "title": "Project name",
 *   "image": "assets/projects/slug/desktop/01.png",
 *   "screenshotsDesktop": [
 *     "assets/projects/slug/desktop/01.png"
 *   ],
 *   "screenshotsTablet": [
 *     "assets/projects/slug/tablet/01.png"
 *   ],
 *   "screenshotsMobile": [
 *     "assets/projects/slug/mobile/01.png"
 *   ],
 *   "about": "Short about text for the detail page.",
 *   "features": ["Feature one", "Feature two"],
 *   "stack": ["Next.js", "Typescript"],
 *   "relatedLinks": [
 *     { "label": "LinkedIn post", "url": "https://…" }
 *   ],
 *   "blurb": ["Card line 1", "Card line 2"],
 *   "liveUrl": "https://…",
 *   "githubUrl": "https://github.com/…",
 *   "category": "Developer Tools",
 *   "date": "2026-03",
 *   "pinned": false
 * }
 */
window.PROJECT_DATA = [
  {
    "id": "mockdata",
    "title": "MockData",
    "image": "assets/projects/MockData/Desktop/01.png",
    "screenshotsDesktop": [
      "assets/projects/MockData/Desktop/01.png",
      "assets/projects/MockData/Desktop/02.png",
      "assets/projects/MockData/Desktop/03.png",
      "assets/projects/MockData/Desktop/04.png",
      "assets/projects/MockData/Desktop/05.png",
      "assets/projects/MockData/Desktop/06.png",
      "assets/projects/MockData/Desktop/07.png",
      "assets/projects/MockData/Desktop/08.png",
      "assets/projects/MockData/Desktop/09.png",
      "assets/projects/MockData/Desktop/10.png",
      "assets/projects/MockData/Desktop/10-2.png",
      "assets/projects/MockData/Desktop/11.png",
      "assets/projects/MockData/Desktop/12.png",
      "assets/projects/MockData/Desktop/13.png",
      "assets/projects/MockData/Desktop/14.png",
      "assets/projects/MockData/Desktop/15.png",
      "assets/projects/MockData/Desktop/16.png",
      "assets/projects/MockData/Desktop/17.png",
      "assets/projects/MockData/Desktop/18.png"
    ],
    "screenshotsTablet": [
      "assets/projects/MockData/Tablet/01.png",
      "assets/projects/MockData/Tablet/02.png",
      "assets/projects/MockData/Tablet/03.png",
      "assets/projects/MockData/Tablet/04.png",
      "assets/projects/MockData/Tablet/05.png",
      "assets/projects/MockData/Tablet/06.png"
    ],
    "screenshotsMobile": [
      "assets/projects/MockData/Mobile/01.png",
      "assets/projects/MockData/Mobile/02.png",
      "assets/projects/MockData/Mobile/03.png",
      "assets/projects/MockData/Mobile/04.png",
      "assets/projects/MockData/Mobile/05.png",
      "assets/projects/MockData/Mobile/06.png"
    ],
    "about": "Fake REST APIs with real JSON, a docs-first playground for frontends, demos, and prototypes. Hit live endpoints, get predictable seeded responses, try auth flows, then wire the same URLs into your UI. No backend scaffolding required.",
    "features": [
      "10 live resources: Auth, Users, Posts, Comments, Albums, Photos, Todos, Products, Notifications, Countries",
      "Temporary API: paste your own JSON and get a short-lived public REST URL (/api/t/…), no account",
      "Fake Data Generator: schema-driven fake JSON at /generator; copy, download, or Create API",
      "Image Generator: placeholder SVG or real photos by URL at /image/{w}/{h}",
      "Playground: in-browser request runner with state across SPA navigation",
      "Full CRUD with pagination, search, filters, plus ?delay= and ?status= mock controls",
      "Persian data via ?lang=fa (Iranian names and copy); English by default",
      "OpenAPI 3.1 at /openapi.json; shared demo DB resets automatically once per day",
      "JSON Workbench (in development): format, validate, diff, and transform JSON in the browser"
    ],
    "stack": [
      "Next.js 16",
      "Typescript",
      "Tailwind CSS",
      "Drizzle ORM",
      "Zod",
      "Neon Postgres"
    ],
    "relatedLinks": [],
    "blurb": [
      "Fake REST APIs with live JSON for docs, playground, and ready-to-use endpoints for frontend prototyping.",
      "10 live resources with full CRUD, auth flows, pagination, search, and mock controls.",
      "Temporary API, Fake Data Generator, Image Generator, and in-browser Playground.",
      "Persian data via ?lang=fa; OpenAPI 3.1; shared demo DB resets once per day."
    ],
    "liveUrl": "https://mockdata.ir",
    "githubUrl": "",
    "category": "Developer Tools",
    "date": "2026-09-08",
    "pinned": false
  },
  {
    "id": "endpoints",
    "title": "Endpoints",
    "image": "assets/projects/Endpoints/01.png",
    "screenshotsDesktop": [
      "assets/projects/Endpoints/01.png",
      "assets/projects/Endpoints/02.png"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [],
    "about": "A lightweight, local-first HTTP API client for developers. Open the app and send requests with no account, database, or cloud sync. Your data stays in the browser via IndexedDB.",
    "features": [
      "Request builder with params, auth, headers, body, and tests",
      "Multi-tab editor with collections, folders, history, and environments",
      "Response viewer for JSON, headers, cookies, HTML, images, and binary data",
      "JSON → Typescript type generation",
      "Secure server proxy with SSRF protection, rate limits, and redirect validation",
      "Import/export for cURL, OpenAPI 3.x, Postman, and Endpoints backups",
      "Dark/light themes and workspace reset"
    ],
    "stack": [
      "Next.js 16",
      "Typescript",
      "Tailwind CSS",
      "shadcn/ui",
      "Vitest"
    ],
    "relatedLinks": [],
    "blurb": [
      "A lightweight, local-first HTTP API client for developers. Open the app and send requests with no account, database, or cloud sync.",
      "Request builder, multi-tab collections, folders, history, and environments.",
      "Import/export for cURL, OpenAPI, Postman, and Endpoints backups.",
      "Secure server proxy with SSRF protection; data stays in the browser via IndexedDB."
    ],
    "liveUrl": "https://endpoints.ir",
    "githubUrl": "",
    "category": "Developer Tools",
    "date": "2026-09-15",
    "pinned": true
  },

  /* ---------- DEMO / FILTER TEST PROJECTS (safe to delete) ---------- */
  {
    "id": "demo-pulseboard",
    "title": "PulseBoard",
    "image": "assets/projects/MockData/Desktop/02.png",
    "screenshotsDesktop": ["assets/projects/MockData/Desktop/02.png"],
    "screenshotsTablet": [],
    "screenshotsMobile": [],
    "about": "Demo dashboard for analytics widgets and live KPI cards. Built to test portfolio filtering.",
    "features": ["KPI cards", "Date range filters", "Export CSV"],
    "stack": ["Next.js 16", "Typescript", "Recharts", "Tailwind CSS"],
    "relatedLinks": [],
    "blurb": [
      "Analytics dashboard with live KPI cards and chart widgets.",
      "Date filters, CSV export, and responsive layout."
    ],
    "liveUrl": "",
    "githubUrl": "",
    "category": "Dashboards",
    "date": "2026-08-12",
    "pinned": false
  },
  {
    "id": "demo-shopkit",
    "title": "ShopKit",
    "image": "assets/projects/MockData/Desktop/03.png",
    "screenshotsDesktop": ["assets/projects/MockData/Desktop/03.png"],
    "screenshotsTablet": [],
    "screenshotsMobile": [],
    "about": "Demo storefront with product grid, cart drawer, and checkout skeleton.",
    "features": ["Product grid", "Cart drawer", "Stripe-ready checkout UI"],
    "stack": ["React", "Typescript", "Tailwind CSS", "Zustand"],
    "relatedLinks": [],
    "blurb": [
      "Lightweight storefront UI with cart drawer and product filters.",
      "Zustand state and Tailwind styling for rapid iteration."
    ],
    "liveUrl": "",
    "githubUrl": "",
    "category": "E-commerce",
    "date": "2026-07-20",
    "pinned": false
  },
  {
    "id": "demo-formforge",
    "title": "FormForge",
    "image": "assets/projects/Endpoints/01.png",
    "screenshotsDesktop": ["assets/projects/Endpoints/01.png"],
    "screenshotsTablet": [],
    "screenshotsMobile": [],
    "about": "Demo form builder with schema validation and multi-step flows.",
    "features": ["Multi-step forms", "Zod schemas", "Accessible inputs"],
    "stack": ["Next.js 16", "Typescript", "React Hook Form", "Zod", "shadcn/ui"],
    "relatedLinks": [],
    "blurb": [
      "Schema-driven multi-step forms with React Hook Form and Zod.",
      "Accessible inputs styled with shadcn/ui."
    ],
    "liveUrl": "",
    "githubUrl": "",
    "category": "Developer Tools",
    "date": "2026-06-03",
    "pinned": false
  },
  {
    "id": "demo-notiz",
    "title": "Notiz",
    "image": "assets/projects/MockData/Desktop/05.png",
    "screenshotsDesktop": ["assets/projects/MockData/Desktop/05.png"],
    "screenshotsTablet": [],
    "screenshotsMobile": [],
    "about": "Demo notes app with markdown preview and local persistence.",
    "features": ["Markdown editor", "Folders", "Local-first sync"],
    "stack": ["React", "Javascript", "IndexedDB", "Tailwind CSS"],
    "relatedLinks": [],
    "blurb": [
      "Local-first notes app with markdown preview and folders.",
      "Persists drafts in IndexedDB without a backend."
    ],
    "liveUrl": "",
    "githubUrl": "",
    "category": "Productivity",
    "date": "2026-05-18",
    "pinned": false
  },
  {
    "id": "demo-orbitcms",
    "title": "Orbit CMS",
    "image": "assets/projects/MockData/Desktop/06.png",
    "screenshotsDesktop": ["assets/projects/MockData/Desktop/06.png"],
    "screenshotsTablet": [],
    "screenshotsMobile": [],
    "about": "Demo headless CMS admin with content collections and media library.",
    "features": ["Collections", "Media library", "Role-based UI"],
    "stack": ["Next.js 16", "Typescript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    "relatedLinks": [],
    "blurb": [
      "Headless CMS admin for collections and media management.",
      "Prisma + PostgreSQL with a clean Tailwind UI."
    ],
    "liveUrl": "",
    "githubUrl": "",
    "category": "CMS",
    "date": "2026-04-09",
    "pinned": false
  },
  {
    "id": "demo-streamline",
    "title": "Streamline Chat",
    "image": "assets/projects/Endpoints/02.png",
    "screenshotsDesktop": ["assets/projects/Endpoints/02.png"],
    "screenshotsTablet": [],
    "screenshotsMobile": [],
    "about": "Demo realtime chat UI with rooms, presence, and optimistic messages.",
    "features": ["Rooms", "Presence indicators", "Optimistic sends"],
    "stack": ["React", "Typescript", "Socket.io", "Zustand", "Tailwind CSS"],
    "relatedLinks": [],
    "blurb": [
      "Realtime chat UI with rooms and presence indicators.",
      "Socket.io client with Zustand for optimistic updates."
    ],
    "liveUrl": "",
    "githubUrl": "",
    "category": "Messaging",
    "date": "2026-03-22",
    "pinned": false
  },
  {
    "id": "demo-atlasmaps",
    "title": "Atlas Maps",
    "image": "assets/projects/MockData/Desktop/08.png",
    "screenshotsDesktop": ["assets/projects/MockData/Desktop/08.png"],
    "screenshotsTablet": [],
    "screenshotsMobile": [],
    "about": "Demo map explorer with markers, clusters, and search.",
    "features": ["Marker clusters", "Place search", "Dark map theme"],
    "stack": ["Next.js 16", "Typescript", "Mapbox", "Tailwind CSS"],
    "relatedLinks": [],
    "blurb": [
      "Interactive map explorer with clusters and place search.",
      "Mapbox GL powered views with a dark theme."
    ],
    "liveUrl": "",
    "githubUrl": "",
    "category": "Maps",
    "date": "2026-02-14",
    "pinned": false
  },
  {
    "id": "demo-ledgerlite",
    "title": "LedgerLite",
    "image": "assets/projects/MockData/Desktop/09.png",
    "screenshotsDesktop": ["assets/projects/MockData/Desktop/09.png"],
    "screenshotsTablet": [],
    "screenshotsMobile": [],
    "about": "Demo expense tracker with categories, charts, and CSV import.",
    "features": ["Categories", "Monthly charts", "CSV import"],
    "stack": ["React", "Typescript", "Recharts", "Zod", "Vite"],
    "relatedLinks": [],
    "blurb": [
      "Simple expense tracker with categories and monthly charts.",
      "CSV import and Zod validation on the client."
    ],
    "liveUrl": "",
    "githubUrl": "",
    "category": "Finance",
    "date": "2026-01-28",
    "pinned": false
  }
];
