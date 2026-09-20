/**
 * Project catalog for the portfolio.
 *
 * HOW TO ADD A NEW POST:
 * 1. Copy the TEMPLATE below and paste into PROJECT_DATA (order does not matter).
 * 2. Put images in assets/projects/<id>/desktop/, /tablet/, /mobile/ (or flat paths).
 * 3. Set "pinned": true to keep it first with a pin icon.
 * 4. List sorts by date (newest first); pinned still wins over date.
 * 5. Save and refresh. Open via #project/<id>
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
 *   "stack": ["Next.js", "TypeScript"],
 *   "relatedLinks": [
 *     { "label": "LinkedIn post", "url": "https://…" }
 *   ],
 *   "blurb": ["Card line 1", "Card line 2"],
 *   "liveUrl": "https://…",
 *   "githubUrl": "https://github.com/…",
 *   "demoLinks": [
 *     { "label": "Demo (EN)", "url": "https://…" },
 *     { "label": "Demo (FA)", "url": "https://…" }
 *   ],
 *   "githubLinks": [
 *     { "label": "GitHub (EN)", "url": "https://github.com/…" },
 *     { "label": "GitHub (FA)", "url": "https://github.com/…" }
 *   ],
 *   "category": "Developer Tools",
 *   "date": "2026-03",
 *   "pinned": false
 * }
 */
window.PROJECT_DATA = [
  {
    "id": "civora",
    "title": "Civora Dashboard",
    "image": "assets/projects/Civora/Desktop/01.png",
    "screenshotsDesktop": [
      "assets/projects/Civora/Desktop/01.png",
      "assets/projects/Civora/Desktop/02.png",
      "assets/projects/Civora/Desktop/03.png",
      "assets/projects/Civora/Desktop/04.png",
      "assets/projects/Civora/Desktop/05.png",
      "assets/projects/Civora/Desktop/06.png",
      "assets/projects/Civora/Desktop/07.png",
      "assets/projects/Civora/Desktop/08.png",
      "assets/projects/Civora/Desktop/09.png"
    ],
    "screenshotsTablet": [
      "assets/projects/Civora/Tablet/01.png",
      "assets/projects/Civora/Tablet/02.png",
      "assets/projects/Civora/Tablet/03.png",
      "assets/projects/Civora/Tablet/04.png"
    ],
    "screenshotsMobile": [
      "assets/projects/Civora/Mobile/01.png",
      "assets/projects/Civora/Mobile/02.png"
    ],
    "about": "Civora is a construction project management dashboard for tracking projects, progress, and status. It includes 37 routes, interactive charts, team management with CRUD operations, and skeleton loading states. The interface is fully RTL and built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.",
    "features": [
      "Fully RTL Persian UI with Jalali dates and Persian numerals",
      "Dashboard with KPI cards, activity feed, and interactive charts",
      "Contracts, warehouse, operations, and technical office modules",
      "Reports with daily, weekly, and monthly comparison charts",
      "Team chat, news, AI assistant, and help desk",
      "Settings with profile, preferences, and team member CRUD",
      "Fake authentication with role-based login and route protection",
      "Shared DataTable, skeletons, and reusable hub/list page patterns across 37 routes"
    ],
    "stack": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Radix UI",
      "Recharts",
      "Lucide React",
      "Sonner"
    ],
    "relatedLinks": [],
    "blurb": [
      "Construction project management dashboard with a fully RTL Persian UI.",
      "37 routes, interactive charts, team CRUD, and skeleton loading states.",
      "Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui."
    ],
    "liveUrl": "https://civora-dashboard.netlify.app",
    "githubUrl": "https://github.com/MiladJoodi/Civora-Dashboard",
    "category": "Web App",
    "date": "2026-01",
    "pinned": false
  },
  {
    "id": "tariboon",
    "title": "Tariboon",
    "image": "assets/projects/Tariboon/Desktop/01.png",
    "screenshotsDesktop": [
      "assets/projects/Tariboon/Desktop/01.png",
      "assets/projects/Tariboon/Desktop/02.png",
      "assets/projects/Tariboon/Desktop/03.png",
      "assets/projects/Tariboon/Desktop/04.png",
      "assets/projects/Tariboon/Desktop/05.png",
      "assets/projects/Tariboon/Desktop/06.png"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [
      "assets/projects/Tariboon/Mobile/01.png"
    ],
    "about": "A Persian news platform built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. It features a fully RTL interface, dark/light mode, and a complete admin dashboard with CRUD functionality. The project uses structured static data with Zustand and focuses on frontend architecture, state management, and UI quality without a backend.",
    "features": [
      "Fully RTL Persian interface with dark/light mode",
      "Admin dashboard with CRUD for articles, comments, categories, tags, authors, and settings",
      "Public pages for articles, categories, search, archive, authors, tags, about, and contact",
      "Search, filtering, sorting, and pagination",
      "Zustand for client-side state management",
      "Reading progress, share actions, skeleton loading, and analytics charts",
      "Reusable components and structured project architecture"
    ],
    "stack": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Radix UI",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Vercel Analytics"
    ],
    "relatedLinks": [],
    "blurb": [
      "Persian news platform with full RTL, dark/light mode, and a complete admin dashboard.",
      "Structured static data with Zustand; search, filtering, sorting, and pagination.",
      "Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4."
    ],
    "liveUrl": "https://tariboon.netlify.app",
    "githubUrl": "https://github.com/MiladJoodi/Tariboon-News",
    "category": "Web App",
    "date": "2026-02-26",
    "pinned": false
  },
  {
    "id": "tripix",
    "title": "Tripix",
    "image": "assets/projects/Tripix/Desktop/01.jpg",
    "screenshotsDesktop": [
      "assets/projects/Tripix/Desktop/01.jpg",
      "assets/projects/Tripix/Desktop/02.jpg",
      "assets/projects/Tripix/Desktop/03.jpg",
      "assets/projects/Tripix/Desktop/04.jpg",
      "assets/projects/Tripix/Desktop/05.jpg",
      "assets/projects/Tripix/Desktop/06.jpg",
      "assets/projects/Tripix/Desktop/07.jpg",
      "assets/projects/Tripix/Desktop/08.jpg",
      "assets/projects/Tripix/Desktop/09.jpg",
      "assets/projects/Tripix/Desktop/10.jpg",
      "assets/projects/Tripix/Desktop/11.jpg"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [
      "assets/projects/Tripix/Mobile/01.jpg",
      "assets/projects/Tripix/Mobile/02.jpg",
      "assets/projects/Tripix/Mobile/03.jpg"
    ],
    "about": "Tripix is a travel booking platform for bus, train, and flight tickets, built with Next.js 16, React 19, and Tailwind CSS v4. It was not built once, but twice: an English LTR version with a clean modern booking flow, and a fully localized Persian RTL version for Iranian users with Jalali calendar, Persian numerals, Toman currency, and a layout that feels native. Real localization goes beyond text; it shapes layout, behavior, and expectations. Both versions are open source.",
    "features": [
      "Two products, one idea: English (LTR) and Persian (RTL) builds",
      "Multi-transport search for bus, train, and flight in one place",
      "Complete booking flow: Search → Results → Ticket Details → Passenger Info → Review → Confirmation",
      "Smart search with fallback: exact, partial, or suggested results",
      "Filter and sort by price, departure time, stops, and more",
      "Booking management and user profile settings",
      "RTL rebuild (not a translation): flipped layout, adjusted navigation, reversed animations, Tailwind logical properties",
      "Persian localization: Jalali calendar, Persian numerals, Toman currency, Vazirmatn",
      "Smooth Framer Motion animations; recent searches and bookings in localStorage"
    ],
    "stack": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Zustand",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "Lucide React",
      "Sonner"
    ],
    "relatedLinks": [],
    "blurb": [
      "Travel booking platform built twice: English LTR and fully localized Persian RTL.",
      "Same booking flow and stack; RTL rethinks layout, navigation, and animations.",
      "Jalali calendar, Persian numerals, and Toman currency in the Persian version."
    ],
    "demoLinks": [
      { "label": "Demo (EN)", "url": "https://tripix1.netlify.app" },
      { "label": "Demo (FA)", "url": "https://tripix-rtl.netlify.app" }
    ],
    "githubLinks": [
      { "label": "GitHub (EN)", "url": "https://github.com/MiladJoodi/Tripix" },
      { "label": "GitHub (FA)", "url": "https://github.com/MiladJoodi/Tripix-RTL" }
    ],
    "extraLinks": [
      { "text": "Tripix (EN)", "href": "https://github.com/MiladJoodi/Tripix" },
      { "text": "Tripix RTL (FA)", "href": "https://github.com/MiladJoodi/Tripix-RTL" }
    ],
    "liveUrl": "",
    "githubUrl": "",
    "category": "Web App",
    "date": "2026-03-21",
    "pinned": false
  },
  {
    "id": "tapsi",
    "title": "Tapsi Demo",
    "image": "assets/projects/Tapsi/01.jpg",
    "screenshotsDesktop": [
      "assets/projects/Tapsi/01.jpg",
      "assets/projects/Tapsi/02.jpg",
      "assets/projects/Tapsi/03.jpg",
      "assets/projects/Tapsi/04.jpg"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [],
    "about": "A multi-page Next.js application with an RTL Persian UI for a ride-hailing and on-demand delivery platform. Originally based on an HTML/CSS design, then rebuilt and expanded with Next.js and TypeScript as an educational/demo project. Not affiliated with the official Tapsi brand.",
    "features": [
      "Fully responsive RTL Persian UI with Vazir font",
      "Multiple pages for services, pricing, blog, FAQ, contact, careers, and more",
      "Ride-hailing and delivery-focused pages",
      "Contact forms and FAQ",
      "Responsive layouts for desktop and mobile",
      "Structured content and reusable components"
    ],
    "stack": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4"
    ],
    "relatedLinks": [],
    "blurb": [
      "A multi-page Next.js application with an RTL Persian UI for a ride-hailing and on-demand delivery platform.",
      "Originally based on an HTML/CSS design, then rebuilt with Next.js and TypeScript as an educational/demo project.",
      "Not affiliated with the official Tapsi brand."
    ],
    "liveUrl": "https://tapsi1.netlify.app",
    "githubUrl": "https://github.com/MiladJoodi/Tapsi",
    "category": "Web App",
    "date": "2026-06-12",
    "pinned": false
  },
  {
    "id": "pixora",
    "title": "Pixora",
    "image": "assets/projects/Pixora/Desktop/01.png",
    "screenshotsDesktop": [
      "assets/projects/Pixora/Desktop/01.png",
      "assets/projects/Pixora/Desktop/02.png",
      "assets/projects/Pixora/Desktop/03.png"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [
      "assets/projects/Pixora/Mobile/01.png"
    ],
    "about": "A modern bilingual (FA/EN) image gallery with a masonry layout, lightbox, and accessible UI. Users can switch between languages and browse photos in either LTR or RTL mode, then open them in a full-screen lightbox. Built with Next.js 16 App Router and React 19.",
    "features": [
      "Bilingual routes with separate LTR and RTL layouts",
      "Masonry gallery for images with different sizes",
      "Accessible lightbox with keyboard controls",
      "Smooth animations with Framer Motion",
      "Persian typography with Vazir",
      "Lucide icons throughout the interface",
      "Images served from the public directory"
    ],
    "stack": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Framer Motion",
      "Radix UI",
      "Lucide React"
    ],
    "relatedLinks": [],
    "blurb": [
      "A modern bilingual (FA/EN) image gallery with masonry layout, lightbox, and accessible UI.",
      "Switch languages for LTR or RTL, then open photos in a full-screen lightbox.",
      "Built with Next.js 16, React 19, Tailwind CSS 4, Framer Motion, and Radix UI."
    ],
    "liveUrl": "",
    "githubUrl": "",
    "category": "Web Apps",
    "date": "2026-07-16",
    "pinned": false
  },
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
      "TypeScript",
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
      "JSON → TypeScript type generation",
      "Secure server proxy with SSRF protection, rate limits, and redirect validation",
      "Import/export for cURL, OpenAPI 3.x, Postman, and Endpoints backups",
      "Dark/light themes and workspace reset"
    ],
    "stack": [
      "Next.js 16",
      "TypeScript",
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
  }
];
