# Solar Platform

A modern, minimalist authentication platform featuring a warm "Solar" aesthetic, built with Next.js 15, Tailwind CSS v4, and Firebase.

## ✨ Features

- **Modern Authentication:** Secure Email/Password and Google Sign-in integration via Firebase Auth.
- **Dynamic Theming:** Seamless Dark and Light mode support with a dedicated toggle.
- **Solar Aesthetic:** A "Warm Sun" inspired UI with subtle amber glows, glassmorphism, and clean typography.
- **Next.js 15 App Router:** Leveraging the latest React features and Server Components.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.
- **System Guide:** A built-in "dummy" manual page at `/manual` to guide users through the platform.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Authentication:** [Firebase Auth](https://firebase.google.com/docs/auth)
- **Theme Management:** [next-themes](https://github.com/pacocoursey/next-themes)

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd Plooka-InAsist
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory and add your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000/login](http://localhost:3000/login) to view the application.

## 📂 Project Structure

- `src/app/login/`: The main Sign-In page.
- `src/app/manual/`: The System Guide page.
- `src/lib/firebase.ts`: Firebase SDK initialization and configuration.
- `src/components/`: Reusable components like `ThemeToggle` and `ThemeProvider`.
- `src/app/globals.css`: Global styles including custom Solar background gradients and Glassmorphism effects.

## 📜 License
This project is for demonstration purposes.
