"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

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
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="galaxy-bg">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <div className="glass w-full max-w-md rounded-2xl p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold tracking-tight text-white">
          Galaxy Sign In
        </h1>

        {error && (
          <div className="mb-4 rounded-lg bg-red-500/20 p-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-purple-200">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-lg border-white/10 bg-white/5 p-2.5 text-white placeholder-white/30 transition-all focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              placeholder="commander@starship.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border-white/10 bg-white/5 p-2.5 text-white placeholder-white/30 transition-all focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-900 disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Login to Starbase"}
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-white/10"></div>
          <span className="px-3 text-xs text-white/40">OR</span>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            className="h-5 w-5"
            alt="Google"
          />
          Sign in with Google
        </button>

        <p className="mt-8 text-center text-sm text-white/40">
          New cadet?{" "}
          <a href="#" className="font-medium text-purple-400 hover:underline">
            Request Access
          </a>
        </p>
      </div>
    </div>
  );
}
