"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ManualPage() {
  const steps = [
    {
      title: "1. Create Your Account",
      description: "Sign up on the platform to begin your personalized journey. Ensure your credentials are secure and your email is verified."
    },
    {
      title: "2. Identity Verification",
      description: "Use Google Authentication for a seamless and highly secure connection to the Plooka-InAsist network."
    },
    {
      title: "3. Interactive Assistance",
      description: "Once authenticated, the platform will help you manage your personal tasks, schedules, and workflows with ease."
    },
    {
      title: "4. Secure Session",
      description: "Always remember to sign out when your session is complete to keep your personal data protected at all times."
    }
  ];

  return (
    <main className="relative flex min-h-screen items-center justify-center p-6 bg-transparent font-sans">
      <div className="modern-bg">
        <div className="blob"></div>
        <div className="blob blob-2"></div>
      </div>
      <ThemeToggle />

      <div className="liquid-glass w-full max-w-3xl rounded-[2.5rem] p-12 shadow-2xl border overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-sky-500 to-amber-500 opacity-50"></div>

        <div className="mb-12 flex items-center justify-between border-b border-neutral-100 dark:border-white/5 pb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-sky-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <span className="text-white font-bold text-xl">PI</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-1">System Guide</h1>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Mastering the Plooka-InAsist Platform</p>
            </div>
          </div>
          <Link 
            href="/"
            className="text-sm font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-500 transition-colors"
          >
            Back to Home
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={index} className="space-y-3 relative group">
              <div className="absolute -left-4 top-0 w-1 h-full bg-amber-500/20 rounded-full group-hover:bg-amber-500/50 transition-colors"></div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-amber-600 dark:text-amber-500">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-amber-500/5 p-6 border border-amber-500/10 flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
          <p className="text-xs italic text-amber-600/60 dark:text-amber-500/60">
            Note: This guide is for demonstration purposes. Systems are currently optimized for personal use and maximum privacy.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block rounded-2xl bg-amber-600 px-12 py-4 text-sm font-bold text-white transition-all hover:bg-amber-500 active:scale-[0.98] shadow-lg shadow-amber-600/20"
          >
            I'm Ready to Begin
          </Link>
        </div>
      </div>
    </main>
  );
}
