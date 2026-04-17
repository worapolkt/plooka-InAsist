# Plooka-InAsist

A high-end, minimalist personal assistance platform built with Next.js 15, Tailwind CSS v4, and Firebase.

## ✨ Project Highlights

- **Solar Tech Aesthetic:** A premium "Sun-inspired" UI featuring animated solar auras, high-tech floating particles, and fluid background blobs.
- **Liquid Glass Interface:** Sophisticated glassmorphism with high backdrop-blur and saturation for a modern, futuristic feel.
- **Modernized Navigation:** A floating, minimalist navbar that dynamically animates and transforms upon scrolling.
- **Unified Auth Flow:** High-contrast Login and Registration popup modals integrated directly into the landing page for a seamless user experience.
- **Performance Optimized:** Lightweight CSS-driven animations and hydration-safe rendering for maximum speed and stability.
- **Dark/Light Mode:** Full dynamic theming support with a dedicated toggle.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Authentication:** [Firebase Auth](https://firebase.google.com/docs/auth)
- **Theme Management:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 🛠️ Setup Instructions

### 1. Environment Configuration
Create a `.env.local` file in the root directory and insert your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 2. Installation & Development
```bash
npm install
npm run dev
```
Navigate to [http://localhost:3000](http://localhost:3000) to view the platform.

## 📂 Architecture

- `src/app/page.tsx`: The primary landing page featuring the Solar Tech background and Auth Modals.
- `src/app/manual/`: Comprehensive system guide for users.
- `src/app/globals.css`: Core styling for Liquid Glass effects and Solar Aura animations.
- `src/components/`: Reusable UI elements including `ThemeToggle` and `ThemeProvider`.
- `src/lib/firebase.ts`: Optimized Firebase client initialization.

## 📜 License
Personal use demonstration.
