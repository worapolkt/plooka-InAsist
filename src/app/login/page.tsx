"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center p-6 bg-transparent">
      <div className="modern-bg"></div>
      <ThemeToggle />

      <div className="glass w-full max-w-md rounded-2xl p-10 shadow-xl border">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">Sign In</h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Welcome back. Enter your credentials to continue.</p>
        </div>

        {error && (
          <div className="mb-6 rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-xs text-red-600 dark:text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wider text-neutral-500">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-medium uppercase tracking-wider text-neutral-500">Password</label>
              <a href="#" className="text-xs text-amber-600 dark:text-amber-500 hover:text-amber-500 transition-colors">Forgot password?</a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
          >
            {loading ? "Signing in..." : "Continue"}
          </button>
        </form>

        <div className="my-8 flex items-center gap-4 text-neutral-300 dark:text-neutral-800">
          <div className="h-px grow bg-neutral-200 dark:bg-neutral-800"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-600">or</span>
          <div className="h-px grow bg-neutral-200 dark:bg-neutral-800"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-neutral-200 dark:border-white/5 bg-white dark:bg-white/[0.02] py-3 text-sm font-medium text-neutral-700 dark:text-white transition-all hover:bg-neutral-50 dark:hover:bg-white/[0.05]"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            className="h-5 w-5 opacity-80"
            alt="Google"
          />
          Sign in with Google
        </button>

        <div className="mt-10 flex flex-col gap-4 text-center">
          <p className="text-sm text-neutral-500">
            Don't have an account?{" "}
            <a href="#" className="text-amber-600 dark:text-amber-500 hover:underline">Get started</a>
          </p>
          <Link href="/manual" className="text-xs text-neutral-500 dark:text-neutral-600 hover:text-neutral-800 dark:hover:text-neutral-400 transition-colors">
            View System Guide
          </Link>
        </div>
      </div>
    </main>
  );
}
