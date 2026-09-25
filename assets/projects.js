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
 *   "video": "assets/projects/slug/demo.mp4",
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
    "id": "meetcast",
    "title": "MeetCast",
    "image": "assets/projects/MeetCast/Desktop/01.png",
    "video": "assets/projects/MeetCast/Desktop/01.mp4",
    "screenshotsDesktop": [
      "assets/projects/MeetCast/Desktop/01.png",
      "assets/projects/MeetCast/Desktop/02.png",
      "assets/projects/MeetCast/Desktop/03.png",
      "assets/projects/MeetCast/Desktop/04.png",
      "assets/projects/MeetCast/Desktop/06.png",
      "assets/projects/MeetCast/Desktop/07.png",
      "assets/projects/MeetCast/Desktop/08.png",
      "assets/projects/MeetCast/Desktop/09.png",
      "assets/projects/MeetCast/Desktop/10.png",
      "assets/projects/MeetCast/Desktop/11.png",
      "assets/projects/MeetCast/Desktop/12.png"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [
      "assets/projects/MeetCast/Mobile/01.png"
    ],
    "about": "A real-time video meeting platform built with Next.js, LiveKit, PostgreSQL, and TypeScript. Schedule a room, share an invite, and join with camera, mic, screen share, chat, and basic moderation. Plans control participant counts and meeting duration. Private rooms restrict join to allowlisted account emails.",
    "features": [
      "Create and edit rooms with start/end schedule and invite links",
      "Public or private rooms with email allowlist for private access",
      "HD video, audio, screen share, participant grid, and speaking state",
      "In-room chat, raise hand, and reactions via LiveKit data channel",
      "Host and moderator tools: mute, disable camera, remove, promote/demote",
      "Guest join on public rooms; plan-driven capacity and duration limits",
      "Auth with sessions, password flows, and optional email verification",
      "Billing checkout with Free/Starter/Pro/Business plans",
      "Admin panel for users, rooms, plans, orders, and audit logs"
    ],
    "stack": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "LiveKit",
      "Drizzle ORM",
      "Neon Postgres",
      "Zod",
      "Vitest",
      "pnpm"
    ],
    "relatedLinks": [],
    "blurb": [
      "Real-time video meetings with LiveKit: camera, mic, screen share, and chat.",
      "Scheduled rooms, invite links, private allowlists, and plan-based limits.",
      "Host moderation, auth, billing, and an admin panel on Next.js 16."
    ],
    "liveUrl": "https://meetcast-demo.netlify.app/",
    "githubUrl": "https://github.com/MiladJoodi/MeetCast",
    "category": "Web App",
    "date": "2026-09-25",
    "pinned": true
  },
  {
    "id": "captchakit",
    "title": "CaptchaKit",
    "image": "assets/projects/CaptchaKit/01.png",
    "screenshotsDesktop": [
      "assets/projects/CaptchaKit/01.png"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [],
    "about": "Self-hosted CAPTCHA for React and Next.js with server-side verification. No database, Redis, or external CAPTCHA provider required.",
    "features": [
      "Text, number, math, and image CAPTCHA types",
      "English and Persian (RTL) support",
      "Easy, medium, and hard difficulty",
      "Light and dark themes",
      "Custom styling with classNames and CSS variables",
      "HMAC-signed tokens with expiration",
      "One-time verification and replay protection",
      "Attempt limits and rate limiting",
      "Next.js App Router support"
    ],
    "stack": [
      "React",
      "Next.js",
      "TypeScript",
      "npm"
    ],
    "relatedLinks": [],
    "blurb": [
      "Self-hosted CAPTCHA for React and Next.js with server-side verification.",
      "No database, Redis, or external CAPTCHA provider required.",
      "Text, number, math, and image types with EN/FA RTL support."
    ],
    "demoLinks": [
      { "label": "Live Demo", "url": "https://captchakit.netlify.app/" },
      { "label": "npm", "url": "https://www.npmjs.com/package/captchakit" }
    ],
    "liveUrl": "https://captchakit.netlify.app/",
    "githubUrl": "https://github.com/MiladJoodi/CaptchaKit",
    "category": "Package",
    "date": "2026-03-02",
    "pinned": false
  },
  {
    "id": "skeletonix",
    "title": "Skeletonix",
    "image": "assets/projects/Skeletonix/01.gif",
    "screenshotsDesktop": [
      "assets/projects/Skeletonix/01.gif",
      "assets/projects/Skeletonix/01.png"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [],
    "about": "A lightweight skeleton loader for React and Next.js. Skeletonix provides a typed shimmer component with simple props and no configuration. Styles are injected automatically, so there is no CSS file to import. The package is around 3KB and has zero dependencies.",
    "features": [
      "Smooth shimmer animation",
      "Simple props for text, circle, and block skeletons",
      "Fully typed with TypeScript",
      "Dark mode and custom theme support",
      "Around 3KB with zero dependencies",
      "Automatic style injection with no CSS import",
      "Supports Next.js App Router and Pages Router"
    ],
    "stack": [
      "React",
      "TypeScript",
      "npm"
    ],
    "relatedLinks": [
      { "label": "LinkedIn post", "url": "https://www.linkedin.com/feed/update/urn:li:activity:7441559164042235904/" },
      { "label": "DEV.to article", "url": "https://dev.to/joodi/i-built-a-tiny-skeleton-loader-for-react-2861" },
      { "label": "Medium article", "url": "https://joodi.medium.com/i-built-a-tiny-skeleton-loader-for-react-27c756e0a225" }
    ],
    "blurb": [
      "Lightweight React skeleton loader with typed shimmer and simple props.",
      "Around 3KB, zero dependencies; styles inject automatically.",
      "Works with Next.js App Router and Pages Router."
    ],
    "demoLinks": [
      { "label": "npm", "url": "https://www.npmjs.com/package/skeletonix" }
    ],
    "liveUrl": "",
    "githubUrl": "https://github.com/MiladJoodi/Skeletonix",
    "category": "Package",
    "date": "2026-03",
    "pinned": false
  },
  {
    "id": "persiantime",
    "title": "PersianTime",
    "image": "assets/projects/PersianTime/01.png",
    "screenshotsDesktop": [
      "assets/projects/PersianTime/01.png"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [],
    "about": "A lightweight utility for converting dates and times to Iran's local timezone and Persian calendar format. It accepts ISO strings, JavaScript Date objects, and timestamps, and returns a formatted Persian date and time.",
    "features": [
      "Convert dates to the Persian calendar",
      "Convert time to Iran's local timezone",
      "Accept ISO strings, Date objects, and timestamps",
      "Handle invalid date inputs with clear errors"
    ],
    "stack": [
      "TypeScript",
      "npm"
    ],
    "relatedLinks": [
      { "label": "LinkedIn article", "url": "https://www.linkedin.com/pulse/convert-dates-persian-time-react-joodi--fiflf/" }
    ],
    "blurb": [
      "Convert dates and times to Iran timezone with Persian formatting.",
      "Accepts ISO strings, Date objects, and timestamps.",
      "Lightweight TypeScript utility on npm."
    ],
    "demoLinks": [
      { "label": "npm", "url": "https://www.npmjs.com/package/persiantime" }
    ],
    "liveUrl": "",
    "githubUrl": "https://github.com/MiladJoodi/PersianTime",
    "category": "Package",
    "date": "2025-01-27",
    "pinned": false
  },
  {
    "id": "topersiannumber",
    "title": "ToPersianNumber",
    "image": "assets/projects/ToPersianNumber/01.png",
    "screenshotsDesktop": [
      "assets/projects/ToPersianNumber/01.png"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [],
    "about": "A small utility for converting English digits to Persian numerals. It supports both numbers and numeric strings and is designed for React and Next.js projects with Persian (Farsi) interfaces.",
    "features": [
      "Convert English digits to Persian numerals",
      "Support numbers and numeric strings",
      "Lightweight and simple to use",
      "Useful for Persian (Farsi) localization",
      "Works with React and Next.js projects"
    ],
    "stack": [
      "JavaScript",
      "TypeScript",
      "npm"
    ],
    "relatedLinks": [
      { "label": "LinkedIn article", "url": "https://www.linkedin.com/pulse/convert-numbers-persian-topersiannumber-library-joodi--si3vf/" }
    ],
    "blurb": [
      "Convert English digits to Persian numerals in one call.",
      "Supports numbers and numeric strings for Farsi UIs.",
      "Lightweight helper for React and Next.js on npm."
    ],
    "demoLinks": [
      { "label": "npm", "url": "https://www.npmjs.com/package/topersiannumber" }
    ],
    "liveUrl": "",
    "githubUrl": "https://github.com/MiladJoodi/ToPersianNumber",
    "category": "Package",
    "date": "2025-01-27",
    "pinned": false
  },
  {
    "id": "tokenbox",
    "title": "TokenBox",
    "image": "assets/projects/TokenBox/01.png",
    "video": "assets/projects/TokenBox/01.mp4",
    "screenshotsDesktop": [
      "assets/projects/TokenBox/01.png"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [],
    "about": "TokenBox is a lightweight Chrome extension for fetching and managing API tokens. It lets you save credentials for different roles, get a token with one click, copy only the access token, and reuse the latest token for each role. All data is stored locally using chrome.storage.local.",
    "features": [
      "Define roles with separate credentials",
      "Save and reuse credentials per role",
      "Configure request payloads and reset them to defaults",
      "Get tokens with one click",
      "Copy only the access token from the response",
      "View and reuse the latest token for each role",
      "View the latest API response per role",
      "Edit or delete roles with confirmation",
      "Local-only storage with chrome.storage.local"
    ],
    "stack": [
      "Chrome Extension",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "relatedLinks": [
      { "label": "LinkedIn post", "url": "https://www.linkedin.com/feed/update/urn:li:activity:7402738846926446592/" },
      { "label": "Medium article", "url": "https://joodi.medium.com/a-small-tool-i-built-to-stop-copying-tokens-all-day-ac2cb00a98df" }
    ],
    "blurb": [
      "Lightweight Chrome extension for fetching and managing API tokens.",
      "Save credentials per role, get a token in one click, and reuse the latest token.",
      "All data stays local with chrome.storage.local."
    ],
    "liveUrl": "",
    "githubUrl": "https://github.com/MiladJoodi/TokenBox",
    "category": "Chrome Extension",
    "date": "2025-12-05",
    "pinned": false
  },
  {
    "id": "git-gpt",
    "title": "Git-GPT",
    "image": "assets/projects/GitGPT/01.png",
    "video": "assets/projects/GitGPT/01.mp4",
    "screenshotsDesktop": [
      "assets/projects/GitGPT/01.png",
      "assets/projects/GitGPT/02.mp4"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [],
    "about": "An open-source tool for comparing your GitHub Followers and Following lists to find accounts that don't follow you back. Sign in with GitHub OAuth, review the results, select users, and unfollow them directly from the app. No GitHub password is requested. The crawler version shown in the demo video is not publicly available; if you'd like to see or use that version, feel free to contact me.",
    "features": [
      "Compare Followers and Following lists",
      "Find users who don't follow you back",
      "Select and unfollow multiple users",
      "GitHub OAuth authentication",
      "GitHub REST API for follow management",
      "Server-side crawler with Neon PostgreSQL and a background worker"
    ],
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub REST API",
      "GitHub OAuth"
    ],
    "relatedLinks": [
      { "label": "LinkedIn post", "url": "https://www.linkedin.com/feed/update/urn:li:activity:7501045284332924928/" },
      { "label": "LinkedIn post (crawler)", "url": "https://www.linkedin.com/feed/update/urn:li:activity:7505042017396244480/" }
    ],
    "blurb": [
      "Find and unfollow GitHub users who don't follow you back.",
      "GitHub OAuth only; no password is requested.",
      "Built with Next.js, TypeScript, Tailwind CSS, and the GitHub API."
    ],
    "liveUrl": "https://git-gpt.netlify.app/",
    "githubUrl": "",
    "category": "Developer Tools",
    "date": "2026-09-13",
    "pinned": false
  },
  {
    "id": "vamary",
    "title": "Vamary",
    "image": "assets/projects/Vamary/Desktop/01.png",
    "screenshotsDesktop": [
      "assets/projects/Vamary/Desktop/01.png",
      "assets/projects/Vamary/Desktop/02.png",
      "assets/projects/Vamary/Desktop/03.png",
      "assets/projects/Vamary/Desktop/04.png",
      "assets/projects/Vamary/Desktop/05.png",
      "assets/projects/Vamary/Desktop/06.png",
      "assets/projects/Vamary/Desktop/07.png",
      "assets/projects/Vamary/Desktop/08.png"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [
      "assets/projects/Vamary/Mobile/01.png",
      "assets/projects/Vamary/Mobile/02.png"
    ],
    "about": "A plastic surgery and aesthetic clinic website built with Next.js 16. It includes service pages, case studies with before/after views, doctor profiles, pricing, FAQ, appointment booking, blog, and contact pages. Based on a ThemeForest template by Vamary; the original template is available on ThemeForest.",
    "features": [
      "Responsive clinic website",
      "Service listing and detail pages",
      "Case studies with before/after views",
      "Doctor profiles and team listing",
      "Pricing, FAQ, and appointment booking",
      "Blog listing and article pages",
      "Contact form with map",
      "Smooth animations and responsive layouts"
    ],
    "stack": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Framer Motion",
      "Swiper",
      "React Hook Form",
      "Zod"
    ],
    "relatedLinks": [
      { "label": "ThemeForest template", "url": "https://themeforest.net/item/vamary-plastic-surgery-elementor-template-kit/59038018" }
    ],
    "blurb": [
      "Plastic surgery and aesthetic clinic website with booking and blog.",
      "Services, case studies, doctor profiles, and before/after views.",
      "Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4."
    ],
    "liveUrl": "https://vamary-demo.netlify.app/",
    "githubUrl": "https://github.com/MiladJoodi/Vamary",
    "category": "Web App",
    "date": "2026-07-18",
    "pinned": false
  },
  {
    "id": "jobflow",
    "title": "JobFlow",
    "image": "assets/projects/JobFlow/Desktop/01.png",
    "screenshotsDesktop": [
      "assets/projects/JobFlow/Desktop/01.png",
      "assets/projects/JobFlow/Desktop/02.png",
      "assets/projects/JobFlow/Desktop/03.png",
      "assets/projects/JobFlow/Desktop/04.png",
      "assets/projects/JobFlow/Desktop/05.png"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [
      "assets/projects/JobFlow/Mobile/01.png"
    ],
    "about": "A job search and hiring platform built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4. It includes job search and filtering, company profiles, application tracking, and separate user and employer dashboards.",
    "features": [
      "Job search with keyword, location, and advanced filters",
      "Job details with responsibilities, requirements, and benefits",
      "Application form with resume upload and validation",
      "Save and bookmark jobs with localStorage persistence",
      "Application status tracking",
      "Company profiles with culture info and open positions",
      "Employer dashboard with job posting and pricing plans",
      "Career advice, resume tips, and interview preparation",
      "Responsive layouts with skeleton loading states"
    ],
    "stack": [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Framer Motion",
      "Lucide React"
    ],
    "relatedLinks": [],
    "blurb": [
      "Job search and hiring platform with filters and application tracking.",
      "Company profiles, employer tools, and career resources included.",
      "Built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4."
    ],
    "liveUrl": "https://jobflow-demo.netlify.app/",
    "githubUrl": "https://github.com/MiladJoodi/JobFlow",
    "category": "Web App",
    "date": "2026-03-22",
    "pinned": false
  },
  {
    "id": "quizmaster",
    "title": "QuizMaster",
    "image": "assets/projects/QuizMaster/Desktop/01.png",
    "screenshotsDesktop": [
      "assets/projects/QuizMaster/Desktop/01.png",
      "assets/projects/QuizMaster/Desktop/02.png",
      "assets/projects/QuizMaster/Desktop/03.png",
      "assets/projects/QuizMaster/Desktop/04.png",
      "assets/projects/QuizMaster/Desktop/05.png",
      "assets/projects/QuizMaster/Desktop/06.png"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [
      "assets/projects/QuizMaster/Mobile/01.png",
      "assets/projects/QuizMaster/Mobile/02.png"
    ],
    "about": "A quiz and learning platform for creating, taking, and tracking quizzes. It includes a timed quiz engine, question review, performance analytics, achievements, points, streaks, and a leaderboard. Built with Next.js, React, TypeScript, and Zustand.",
    "features": [
      "Timed quiz engine with pause/resume and auto-submit",
      "Single-choice and multi-select questions with flagging",
      "Tab-switch detection with warnings",
      "Detailed results with per-question review and explanations",
      "Performance tracking with charts and attempt history",
      "Quiz browsing, filtering, and creation",
      "Leaderboard, achievements, points, and streaks",
      "Question bank, categories, profile, settings, and notifications",
      "Dark/light theme support"
    ],
    "stack": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Zustand",
      "Framer Motion",
      "Recharts",
      "React Hook Form",
      "Zod",
      "shadcn/ui",
      "next-themes",
      "Lucide React"
    ],
    "relatedLinks": [],
    "blurb": [
      "Quiz and learning platform with timers, analytics, and achievements.",
      "Leaderboards, streaks, question bank, and dark/light theme.",
      "Built with Next.js 16, React 19, TypeScript, and Zustand."
    ],
    "liveUrl": "https://1quizmaster.netlify.app/",
    "githubUrl": "https://github.com/MiladJoodi/QuizMaster",
    "category": "Web App",
    "date": "2026-03-06",
    "pinned": false
  },
  {
    "id": "zarinpal",
    "title": "ZarinPal",
    "image": "assets/projects/Zarinpal/Desktop/01.png",
    "screenshotsDesktop": [
      "assets/projects/Zarinpal/Desktop/01.png",
      "assets/projects/Zarinpal/Desktop/02.png",
      "assets/projects/Zarinpal/Desktop/03.png",
      "assets/projects/Zarinpal/Desktop/04.png"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [
      "assets/projects/Zarinpal/Mobile/01.png",
      "assets/projects/Zarinpal/Mobile/02.png",
      "assets/projects/Zarinpal/Mobile/03.png"
    ],
    "about": "A responsive payment services dashboard built with Next.js, React, and TypeScript. It includes product, support, FAQ, and contact sections, along with dark mode, animations, and PWA support for offline use and installation. Educational/demo project; not affiliated with the official ZarinPal brand.",
    "features": [
      "Fully responsive layout for desktop and mobile",
      "Dark mode with theme transitions",
      "Installable PWA with offline support",
      "Product grid with hover effects, badges, and icons",
      "FAQ accordion with loading states",
      "Contact form with validation and category selection",
      "Integration section with terminal-style SDK examples",
      "Support categories and office information cards",
      "Reusable components and layouts"
    ],
    "stack": [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Framer Motion",
      "Recharts",
      "next-themes",
      "PWA"
    ],
    "relatedLinks": [
      { "label": "LinkedIn post", "url": "https://www.linkedin.com/feed/update/urn:li:activity:7371545846967943168/" }
    ],
    "blurb": [
      "Responsive payment-services dashboard with dark mode and PWA support.",
      "Products, FAQ, contact, and support sections with smooth animations.",
      "Built with Next.js 15, TypeScript, Tailwind CSS 4, and shadcn/ui."
    ],
    "liveUrl": "https://zarrinpal.netlify.app/",
    "githubUrl": "https://github.com/MiladJoodi/Zarinpal",
    "category": "Web App",
    "date": "2025-09-11",
    "pinned": false
  },
  {
    "id": "wikifront",
    "title": "WikiFront",
    "image": "assets/projects/Wikifront/Desktop/01.png",
    "screenshotsDesktop": [
      "assets/projects/Wikifront/Desktop/01.png"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [
      "assets/projects/Wikifront/Mobile/01.png"
    ],
    "about": "A front-end interview question platform covering topics such as React, TypeScript, CSS, Next.js, and JavaScript. It provides search and category filtering across 2,000+ questions, with a responsive interface focused on fast navigation and easy reading.",
    "features": [
      "Search questions by keyword",
      "Filter questions by category",
      "2,000+ front-end interview questions",
      "Fast and responsive interface",
      "Keyboard-accessible interactions",
      "Minimal UI with shadcn/ui and Radix UI",
      "Questions stored in a JSON file for easy updates",
      "Open-source and easy to customize"
    ],
    "stack": [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Radix UI"
    ],
    "relatedLinks": [
      { "label": "LinkedIn post", "url": "https://www.linkedin.com/feed/update/urn:li:activity:7358106364545576962/" }
    ],
    "blurb": [
      "Front-end interview question platform with search and category filters.",
      "2,000+ questions covering React, Next.js, TypeScript, and more.",
      "Built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4."
    ],
    "liveUrl": "https://wikifront.netlify.app/",
    "githubUrl": "https://github.com/MiladJoodi/Frontend-Interview",
    "category": "Developer Tools",
    "date": "2025-09-10",
    "pinned": false
  },
  {
    "id": "mortgage",
    "title": "Mortgage",
    "image": "assets/projects/Mortgage/Desktop/01.png",
    "screenshotsDesktop": [
      "assets/projects/Mortgage/Desktop/01.png",
      "assets/projects/Mortgage/Desktop/02.png",
      "assets/projects/Mortgage/Desktop/03.png",
      "assets/projects/Mortgage/Desktop/04.png",
      "assets/projects/Mortgage/Desktop/05.png",
      "assets/projects/Mortgage/Desktop/06.png",
      "assets/projects/Mortgage/Desktop/07.png",
      "assets/projects/Mortgage/Desktop/08.png",
      "assets/projects/Mortgage/Desktop/09.png"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [
      "assets/projects/Mortgage/Mobile/01.png",
      "assets/projects/Mortgage/Mobile/02.png"
    ],
    "about": "A full-stack mortgage website with an admin dashboard for publishing content, Clerk authentication, and dual data layers using Mongoose and Prisma with MongoDB. Includes blog posts with path revalidation, dark/light mode, multi-step SurveyJS apply forms, EMI and affordability calculators, and form validation with React Hook Form and Zod.",
    "features": [
      "Admin dashboard to publish content with Clerk authentication",
      "Blog feeds powered by Mongoose and Prisma, with revalidatePath updates",
      "Multi-step mortgage apply forms built with SurveyJS",
      "Homepage EMI calculator plus dedicated EMI and affordability tools with live charts",
      "Form validation with React Hook Form and Zod",
      "Dark and light mode",
      "shadcn/ui components throughout the UI"
    ],
    "stack": [
      "Next.js",
      "TypeScript",
      "Clerk",
      "MongoDB",
      "Mongoose",
      "Prisma",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
      "SurveyJS"
    ],
    "relatedLinks": [
      { "label": "LinkedIn post", "url": "https://www.linkedin.com/feed/update/urn:li:activity:7240008028232572929/" }
    ],
    "blurb": [
      "Full-stack mortgage site with admin publishing and Clerk auth.",
      "Mongoose and Prisma data layers, SurveyJS apply flows, and EMI calculators.",
      "Built with Next.js, TypeScript, MongoDB, and shadcn/ui."
    ],
    "liveUrl": "https://mortgages-hamed.vercel.app/",
    "githubUrl": "https://github.com/MiladJoodi/Mortgages_Hamed",
    "category": "Web App",
    "date": "2024-10-22",
    "pinned": false
  },
  {
    "id": "light-saas",
    "title": "Light SaaS",
    "image": "assets/projects/LightSaas/Desktop/01.jpg",
    "screenshotsDesktop": [
      "assets/projects/LightSaas/Desktop/01.jpg",
      "assets/projects/LightSaas/Desktop/02.jpg",
      "assets/projects/LightSaas/Desktop/03.jpg",
      "assets/projects/LightSaas/Desktop/04.jpg",
      "assets/projects/LightSaas/Desktop/05.jpg",
      "assets/projects/LightSaas/Desktop/06.png"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [
      "assets/projects/LightSaas/Mobile/01.png"
    ],
    "about": "A comprehensive SaaS landing page built from a versatile website UI kit. It includes varied layouts, responsive breakpoints, and engaging 3D elements in diverse styles for a dynamic, visually appealing business site. Design adapted from the Framer SaaS Website UI Kit.",
    "features": [
      "Multiple section layouts for a full SaaS marketing site",
      "Responsive breakpoints for desktop and mobile",
      "Engaging 3D elements and visual accents",
      "Smooth motion with Framer Motion",
      "Design adapted from the Framer SaaS Website UI Kit"
    ],
    "stack": [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "relatedLinks": [
      { "label": "Figma design", "url": "https://www.figma.com/community/file/1347551304372055519/saas-website-ui-kit-framer-website-kit" }
    ],
    "blurb": [
      "SaaS landing page with responsive layouts and 3D visual accents.",
      "Built from a Framer UI kit for a polished marketing experience.",
      "Next.js 14, TypeScript, Tailwind CSS, and Framer Motion."
    ],
    "liveUrl": "https://saas-landing-page-chi-six.vercel.app/",
    "githubUrl": "https://github.com/MiladJoodi/Light-Saas-Landing-Page",
    "category": "Web App",
    "date": "2024-09-21",
    "pinned": false
  },
  {
    "id": "highstorm",
    "title": "HighStorm",
    "image": "assets/projects/HighStorm/Desktop/01.jpg",
    "screenshotsDesktop": [
      "assets/projects/HighStorm/Desktop/01.jpg",
      "assets/projects/HighStorm/Desktop/02.jpg",
      "assets/projects/HighStorm/Desktop/03.jpg",
      "assets/projects/HighStorm/Desktop/04.jpg"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [
      "assets/projects/HighStorm/Mobile/01.jpg"
    ],
    "about": "A responsive marketing landing page built with Next.js and TypeScript. It includes Calendly scheduling, embedded YouTube videos, scroll animations, and an animated particles background.",
    "features": [
      "Responsive landing page",
      "Calendly scheduling integration",
      "Embedded YouTube videos",
      "Scroll animations with AOS",
      "Particles background effect",
      "Reusable UI components with shadcn/ui"
    ],
    "stack": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Calendly",
      "react-youtube",
      "AOS",
      "Particles"
    ],
    "relatedLinks": [],
    "blurb": [
      "Marketing landing page with Calendly, YouTube embed, and particles.",
      "Scroll animations with AOS and shadcn/ui components.",
      "Built with Next.js, TypeScript, and Tailwind CSS."
    ],
    "liveUrl": "https://high-storm.vercel.app/",
    "githubUrl": "https://github.com/MiladJoodi/HighStorm",
    "category": "Web App",
    "date": "2024-04-10",
    "pinned": false
  },
  {
    "id": "photography",
    "title": "Photography",
    "image": "assets/projects/Photography/Desktop/01.jpg",
    "screenshotsDesktop": [
      "assets/projects/Photography/Desktop/01.jpg",
      "assets/projects/Photography/Desktop/02.jpg",
      "assets/projects/Photography/Desktop/03.jpg",
      "assets/projects/Photography/Desktop/04.jpg",
      "assets/projects/Photography/Desktop/05.jpg",
      "assets/projects/Photography/Desktop/06.jpg",
      "assets/projects/Photography/Desktop/07.jpg",
      "assets/projects/Photography/Desktop/08.jpg",
      "assets/projects/Photography/Desktop/09.jpg",
      "assets/projects/Photography/Desktop/10.jpg",
      "assets/projects/Photography/Desktop/11.jpg",
      "assets/projects/Photography/Desktop/12.jpg",
      "assets/projects/Photography/Desktop/13.jpg",
      "assets/projects/Photography/Desktop/14.jpg",
      "assets/projects/Photography/Desktop/15.jpg",
      "assets/projects/Photography/Desktop/16.jpg"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [
      "assets/projects/Photography/Mobile/01.jpg",
      "assets/projects/Photography/Mobile/02.jpg"
    ],
    "about": "A photography portfolio website built with Next.js, Tailwind CSS, and shadcn/ui. It features dark mode, animated sections, counters, and a Swiper-based slider for showcasing work.",
    "features": [
      "Responsive photography portfolio layout",
      "Image slider with Swiper",
      "Scroll and reveal animations with Framer Motion and React Awesome Reveal",
      "Animated counters with React Count Up",
      "Dark mode with next-themes",
      "Icons via Heroicons, React Icons, and Lucide",
      "UI components with shadcn/ui and Radix UI"
    ],
    "stack": [
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Swiper",
      "next-themes",
      "React Count Up",
      "React Awesome Reveal",
      "Radix UI"
    ],
    "relatedLinks": [],
    "blurb": [
      "Photography portfolio site with dark mode and animated sections.",
      "Swiper slider, counters, and reveal animations throughout.",
      "Built with Next.js, Tailwind CSS, and shadcn/ui."
    ],
    "liveUrl": "https://photography-website-alpha.vercel.app/",
    "githubUrl": "https://github.com/MiladJoodi/Photography_Website",
    "category": "Web App",
    "date": "2024-04-13",
    "pinned": false
  },
  {
    "id": "shavaz",
    "title": "Shavaz",
    "image": "assets/projects/Shavaz/Desktop/01.png",
    "screenshotsDesktop": [
      "assets/projects/Shavaz/Desktop/01.png",
      "assets/projects/Shavaz/Desktop/02.png",
      "assets/projects/Shavaz/Desktop/03.png",
      "assets/projects/Shavaz/Desktop/04.png",
      "assets/projects/Shavaz/Desktop/05.png",
      "assets/projects/Shavaz/Desktop/06.png",
      "assets/projects/Shavaz/Desktop/07.png",
      "assets/projects/Shavaz/Desktop/08.png",
      "assets/projects/Shavaz/Desktop/09.png"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [],
    "about": "A Persian RTL e-commerce storefront for beauty and personal care products. Built with Next.js 15, React 19, and TypeScript, with Zustand for cart persistence and demo authentication.",
    "features": [
      "Product catalog with categories, brands, and product details",
      "Shopping cart with persistent state",
      "Checkout UI",
      "Blog listing and article pages",
      "Demo login and registration",
      "User profile",
      "Fully responsive RTL interface",
      "Static export for deployment on Netlify or other static hosts"
    ],
    "stack": [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Swiper",
      "Lucide React"
    ],
    "relatedLinks": [],
    "blurb": [
      "Persian RTL beauty e-commerce storefront with cart and demo auth.",
      "Catalog, checkout UI, blog, and static export for easy hosting.",
      "Built with Next.js 15, React 19, TypeScript, and Zustand."
    ],
    "liveUrl": "https://shavaz.netlify.app/",
    "githubUrl": "https://github.com/MiladJoodi/Shavaz-Front",
    "category": "Web App",
    "date": "2026-04-23",
    "pinned": false
  },
  {
    "id": "travel",
    "title": "Solo Travel",
    "image": "assets/projects/SoloTravel/Desktop/01.jpg",
    "screenshotsDesktop": [
      "assets/projects/SoloTravel/Desktop/01.jpg",
      "assets/projects/SoloTravel/Desktop/02.jpg",
      "assets/projects/SoloTravel/Desktop/03.jpg",
      "assets/projects/SoloTravel/Desktop/04.jpg",
      "assets/projects/SoloTravel/Desktop/05.jpg"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [
      "assets/projects/SoloTravel/Mobile/01.png",
      "assets/projects/SoloTravel/Mobile/02.png"
    ],
    "about": "A responsive travel landing page built with Next.js, TypeScript, and Tailwind CSS. It presents travel destinations and trip ideas through an image-focused layout.",
    "features": [
      "Responsive travel landing page",
      "Destination and trip sections",
      "Image-focused layouts",
      "Reusable UI components",
      "Responsive layouts for desktop and mobile"
    ],
    "stack": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS"
    ],
    "relatedLinks": [],
    "blurb": [
      "Travel landing page with an image-focused layout.",
      "Destination and trip sections for solo travel inspiration.",
      "Built with Next.js, TypeScript, and Tailwind CSS."
    ],
    "liveUrl": "https://travel-website-beta-gold.vercel.app/",
    "githubUrl": "https://github.com/MiladJoodi/Travel_Website",
    "category": "Web App",
    "date": "2024-04-18",
    "pinned": false
  },
  {
    "id": "grocery",
    "title": "Online Grocery",
    "image": "assets/projects/Grocery/Desktop/01.jpg",
    "screenshotsDesktop": [
      "assets/projects/Grocery/Desktop/01.jpg",
      "assets/projects/Grocery/Desktop/02.jpg",
      "assets/projects/Grocery/Desktop/03.jpg",
      "assets/projects/Grocery/Desktop/03.png"
    ],
    "screenshotsTablet": [
      "assets/projects/Grocery/Tablet/01.jpg"
    ],
    "screenshotsMobile": [
      "assets/projects/Grocery/Mobile/01.png",
      "assets/projects/Grocery/Mobile/02.png",
      "assets/projects/Grocery/Mobile/03.png"
    ],
    "about": "An online grocery store built with Next.js 14, Strapi, Tailwind CSS, and shadcn/ui. It combines a responsive storefront with a headless CMS for managing products and content.",
    "features": [
      "Grocery storefront with product listings",
      "Product and category pages",
      "Headless CMS with Strapi",
      "Reusable UI components with shadcn/ui",
      "Responsive layouts for desktop, tablet, and mobile"
    ],
    "stack": [
      "Next.js 14",
      "Strapi",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Lucide"
    ],
    "relatedLinks": [],
    "blurb": [
      "Online grocery storefront with a Strapi headless CMS.",
      "Product and category pages with a responsive storefront UI.",
      "Built with Next.js 14, Tailwind CSS, and shadcn/ui."
    ],
    "liveUrl": "https://online-grocery-store-web.vercel.app/",
    "githubUrl": "https://github.com/MiladJoodi/Online_Glocery_Store_Next.js_Tailwind_Strapi",
    "category": "Web App",
    "date": "2024-09-21",
    "pinned": false
  },
  {
    "id": "snapp",
    "title": "Snapp",
    "image": "assets/projects/Snapp/Desktop/01.jpg",
    "screenshotsDesktop": [
      "assets/projects/Snapp/Desktop/01.jpg",
      "assets/projects/Snapp/Desktop/02.jpg",
      "assets/projects/Snapp/Desktop/03.jpg",
      "assets/projects/Snapp/Desktop/04.jpg",
      "assets/projects/Snapp/Desktop/05.jpg",
      "assets/projects/Snapp/Desktop/06.jpg",
      "assets/projects/Snapp/Desktop/07.jpg",
      "assets/projects/Snapp/Desktop/08.jpg",
      "assets/projects/Snapp/Desktop/09.jpg",
      "assets/projects/Snapp/Desktop/10.jpg"
    ],
    "screenshotsTablet": [],
    "screenshotsMobile": [
      "assets/projects/Snapp/Mobile/01.jpg",
      "assets/projects/Snapp/Mobile/02.jpg",
      "assets/projects/Snapp/Mobile/03.jpg",
      "assets/projects/Snapp/Mobile/04.jpg",
      "assets/projects/Snapp/Mobile/05.jpg",
      "assets/projects/Snapp/Mobile/06.jpg",
      "assets/projects/Snapp/Mobile/07.jpg",
      "assets/projects/Snapp/Mobile/08.jpg",
      "assets/projects/Snapp/Mobile/09.jpg",
      "assets/projects/Snapp/Mobile/10.jpg"
    ],
    "about": "A Snapp-inspired web application built with Next.js and Tailwind CSS. It includes over 30 pages with a responsive Persian UI, covering different sections of the original platform. Educational/demo project; not affiliated with the official Snapp brand.",
    "features": [
      "Built with Next.js 16",
      "Over 30 pages with responsive layouts",
      "Persian RTL interface",
      "Reusable components and page layouts",
      "Tailwind CSS for styling and responsive design"
    ],
    "stack": [
      "Next.js 16",
      "React 19",
      "Tailwind CSS"
    ],
    "relatedLinks": [
      { "label": "LinkedIn post", "url": "https://www.linkedin.com/feed/update/urn:li:activity:7407488927416283137/" }
    ],
    "blurb": [
      "Snapp-inspired web app with over 30 pages and a responsive Persian UI.",
      "Built with Next.js 16, React 19, and Tailwind CSS.",
      "Educational/demo project; not affiliated with the official Snapp brand."
    ],
    "liveUrl": "https://snapp-ui.netlify.app",
    "githubUrl": "https://github.com/MiladJoodi/Snapp",
    "category": "Web App",
    "date": "2025-12-18",
    "pinned": false
  },
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
      "Lucide React"
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
    "relatedLinks": [
      { "label": "LinkedIn post", "url": "https://www.linkedin.com/feed/update/urn:li:activity:7432757083776851968/" }
    ],
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
      "Lucide React"
    ],
    "relatedLinks": [
      { "label": "LinkedIn post", "url": "https://www.linkedin.com/feed/update/urn:li:activity:7441274194195111936/" }
    ],
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
    "relatedLinks": [
      { "label": "LinkedIn post", "url": "https://www.linkedin.com/feed/update/urn:li:activity:7467665418355126272/" }
    ],
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
    "relatedLinks": [
      { "label": "LinkedIn post", "url": "https://www.linkedin.com/feed/update/urn:li:activity:7483474771339374593/" }
    ],
    "blurb": [
      "A modern bilingual (FA/EN) image gallery with masonry layout, lightbox, and accessible UI.",
      "Switch languages for LTR or RTL, then open photos in a full-screen lightbox.",
      "Built with Next.js 16, React 19, Tailwind CSS 4, Framer Motion, and Radix UI."
    ],
    "liveUrl": "https://pixoraa.netlify.app",
    "githubUrl": "https://github.com/MiladJoodi/Pixora",
    "category": "Web App",
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
    "date": "2026-09-24",
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
    "pinned": false
  }
];
