"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ManualPage() {
  const steps = [
    {
      title: "1. Access the Platform",
      description: "Log in with your registered credentials to access the secure area. Ensure your email is verified."
    },
    {
      title: "2. Identity Verification",
      description: "For enhanced security, we recommend using Google Authentication as a primary login method."
    },
    {
      title: "3. Explore Dashboard",
      description: "Once logged in, you'll have full access to your personalized dashboard and system analytics."
    },
    {
      title: "4. Secure Session",
      description: "Always remember to sign out of your account when using shared or public workstations."
    }
  ];

  return (
    <main className="relative flex min-h-screen items-center justify-center p-6 bg-transparent">
      <div className="modern-bg"></div>
      <ThemeToggle />

      <div className="glass w-full max-w-3xl rounded-2xl p-12 shadow-2xl border">
        <div className="mb-12 flex items-center justify-between border-b border-neutral-100 dark:border-white/5 pb-8">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">System Guide</h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Everything you need to know to get started.</p>
          </div>
          <Link 
            href="/login"
            className="text-sm font-medium text-amber-600 dark:text-amber-500 hover:text-amber-500 transition-colors"
          >
            Back to Sign In
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-widest text-amber-600 dark:text-amber-500/80">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-amber-500/5 p-5 border border-amber-500/10">
          <p className="text-center text-xs italic text-amber-600/60 dark:text-amber-500/60">
            Note: This guide is for demonstration purposes. System is currently in training mode.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/login"
            className="inline-block rounded-lg bg-amber-600 px-10 py-4 text-sm font-semibold text-white transition-all hover:bg-amber-500 active:scale-[0.98]"
          >
            Acknowledge and Continue
          </Link>
        </div>
      </div>
    </main>
  );
}
