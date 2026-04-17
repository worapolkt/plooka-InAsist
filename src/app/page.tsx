"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Background Animate Elements
  const [auras, setAuras] = useState<{top: string, left: string, size: string, delay: string}[]>([]);
  const [dots, setDots] = useState<{top: string, left: string, delay: string, duration: string}[]>([]);

  useEffect(() => {
    setMounted(true);
    
    // Generate Random Auras
    const newAuras = Array.from({ length: 5 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${400 + Math.random() * 500}px`,
      delay: `${Math.random() * -20}s` // Negative delay to start mid-animation
    }));
    setAuras(newAuras);

    // Generate Random Tech Dots
    const newDots = Array.from({ length: 40 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * -15}s`,
      duration: `${12 + Math.random() * 10}s`
    }));
    setDots(newDots);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (authMode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      setIsAuthOpen(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setIsAuthOpen(false);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const news = [
    {
      date: "April 14, 2026",
      title: "Plooka-InAsist Alpha Launch",
      description: "We're excited to announce the alpha version of Plooka-InAsist, your new personal assistant platform!"
    },
    {
      date: "April 10, 2026",
      title: "Solar Tech Experience",
      description: "Experience the new background inspired by the aura of the sun and high-tech digital elements."
    }
  ];

  const roadmap = [
    { phase: "Q2 2026", task: "Voice Command Integration", status: "In Progress" },
    { phase: "Q3 2026", task: "Mobile App Beta (iOS & Android)", status: "Planned" },
    { phase: "Q4 2026", task: "AI Memory Persistence", status: "Research" },
    { phase: "Q1 2027", task: "Global Ecosystem Expansion", status: "Vision" }
  ];

  const team = [
    { name: "Plooka Lead", role: "Product Strategy" },
    { name: "InAsist Dev", role: "Lead Engineer" },
    { name: "Design Core", role: "UX/UI Specialist" }
  ];

  return (
    <main className="relative min-h-screen bg-transparent overflow-x-hidden font-sans">
      <div className="modern-bg">
        {/* Constant Solar Core (No JS needed) */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-amber-500/10 dark:bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-sky-500/10 dark:bg-sky-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Randomized Client-Side Elements */}
        {mounted && auras.map((aura, i) => (
          <div 
            key={`aura-${i}`} 
            className="sun-aura" 
            style={{ 
              top: aura.top, 
              left: aura.left, 
              width: aura.size, 
              height: aura.size,
              animationDelay: aura.delay 
            }} 
          />
        ))}

        {mounted && dots.map((dot, i) => (
          <div 
            key={`dot-${i}`} 
            className="tech-dot" 
            style={{ 
              top: dot.top, 
              left: dot.left, 
              animationDelay: dot.delay,
              animationDuration: dot.duration
            }} 
          />
        ))}

        <div className="blob"></div>
      </div>
      <ThemeToggle />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4' : 'py-10'}`}>
        <div className={`mx-auto max-w-5xl transition-all duration-700 px-6 ${scrolled ? 'w-[90%]' : 'w-full'}`}>
          <div className={`flex items-center justify-between rounded-[2rem] transition-all duration-700 px-10 ${
            scrolled 
              ? 'liquid-glass h-16 shadow-2xl shadow-black/5 border-white/20 dark:border-white/10' 
              : 'bg-transparent h-12 border-transparent'
          }`}>
            <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.4em]">
              <a href="#news" className="text-neutral-500 hover:text-amber-600 transition-colors">News</a>
              <a href="#roadmap" className="text-neutral-500 hover:text-amber-600 transition-colors">Roadmap</a>
              <a href="#team" className="text-neutral-500 hover:text-amber-600 transition-colors">Team</a>
            </div>
            
            <div className="flex items-center gap-6">
              <button 
                onClick={() => { setAuthMode("login"); setIsAuthOpen(true); }}
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${
                  scrolled 
                    ? 'px-8 py-2.5 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-black hover:scale-105 shadow-xl' 
                    : 'text-neutral-900 dark:text-white hover:text-amber-600'
                }`}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Modal Overlay */}
      {isAuthOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-md">
          <div className="modal-surface w-full max-w-md rounded-[2.5rem] p-10 relative overflow-hidden animate-modal-in">
            <button 
              onClick={() => setIsAuthOpen(false)}
              className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-8 flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-sky-500 mb-4 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <span className="text-white font-black text-xl">PI</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
                {authMode === "login" ? "Welcome Back" : "Join Platform"}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                {authMode === "login" ? "Sign in to access your dashboard" : "Create your personal account"}
              </p>
            </div>

            {error && (
              <div className="mb-6 rounded-2xl bg-red-500/10 border border-red-500/20 p-4 text-xs font-semibold text-red-600 dark:text-red-400">
                {error}
              </div>
            )}

            <form onSubmit={handleAuth} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button type="submit" disabled={loading} className="btn-primary mt-4 uppercase tracking-widest text-xs">
                {loading ? "Processing..." : authMode === "login" ? "Sign In" : "Register"}
              </button>
            </form>

            <div className="my-8 flex items-center gap-4 text-slate-200 dark:text-slate-800">
              <div className="h-px grow bg-slate-100 dark:bg-slate-800"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">or</span>
              <div className="h-px grow bg-slate-100 dark:bg-slate-800"></div>
            </div>

            <button
              onClick={handleGoogleAuth}
              className="flex w-full items-center justify-center gap-3 rounded-[1.25rem] border-2 border-slate-100 dark:border-white/5 bg-white dark:bg-white/[0.02] py-4 text-sm font-bold text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-white/[0.05] transition-all"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="h-5 w-5" alt="Google" />
              Continue with Google
            </button>

            <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400 font-medium">
              {authMode === "login" ? "New here?" : "Already have an account?"}{" "}
              <button 
                onClick={() => setAuthMode(authMode === "login" ? "register" : "login")}
                className="text-amber-600 dark:text-amber-500 font-bold hover:underline"
              >
                {authMode === "login" ? "Create Account" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 pt-48 pb-20">
        {/* Hero Section */}
        <section className="text-center mb-40 relative">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-[10px] font-black text-amber-600 uppercase tracking-[0.3em]">Alpha 1.0 Live</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-neutral-900 dark:text-white mb-10 leading-[0.85]">
            Personal Assistance<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-sky-500">For Your Journey.</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
            Streamline your personal workflows with a modern, 
            efficient, and private assistance platform designed for the future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => { setAuthMode("register"); setIsAuthOpen(true); }}
              className="px-12 py-6 rounded-[1.5rem] bg-amber-600 text-white font-black hover:bg-amber-500 transition-all shadow-2xl shadow-amber-600/30 w-full sm:w-auto text-lg uppercase tracking-widest"
            >
              Get Started
            </button>
            <Link href="/manual" className="px-12 py-6 rounded-[1.5rem] border-2 border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-white font-black hover:bg-white/5 transition-all w-full sm:w-auto text-lg uppercase tracking-widest backdrop-blur-md">
              System Guide
            </Link>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="mb-48">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-5xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter">News</h2>
            <div className="h-0.5 grow bg-neutral-100 dark:bg-white/5 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {news.map((item, i) => (
              <div key={i} className="liquid-glass p-12 rounded-[3rem] border hover:border-amber-500/30 transition-all group">
                <span className="text-xs font-black text-amber-600 dark:text-amber-500/80 mb-4 block uppercase tracking-[0.3em]">{item.date}</span>
                <h3 className="text-3xl font-black text-neutral-900 dark:text-white mb-6 group-hover:text-amber-600 transition-colors tracking-tight">{item.title}</h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="mb-48">
          <div className="flex items-center gap-6 mb-16 justify-end text-right">
            <div className="h-0.5 grow bg-neutral-100 dark:bg-white/5 rounded-full"></div>
            <h2 className="text-5xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter">Roadmap</h2>
          </div>
          <div className="liquid-glass rounded-[3rem] border overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-50/50 dark:bg-white/5 text-[11px] font-black uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400 border-b-2 border-neutral-100 dark:border-white/5">
                    <th className="px-12 py-8">Phase</th>
                    <th className="px-12 py-8">Milestone</th>
                    <th className="px-12 py-8">Status</th>
                  </tr>
                </thead>
                <tbody className="text-base text-neutral-700 dark:text-neutral-300">
                  {roadmap.map((row, i) => (
                    <tr key={i} className="border-b border-neutral-100 dark:border-white/5 last:border-0 hover:bg-white/60 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="px-12 py-8 font-black text-sky-600 dark:text-sky-400 uppercase tracking-widest">{row.phase}</td>
                      <td className="px-12 py-8 font-bold text-lg">{row.task}</td>
                      <td className="px-12 py-8">
                        <span className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] ${
                          row.status === 'In Progress' ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' :
                          row.status === 'Planned' ? 'bg-sky-500/10 text-sky-600 border border-sky-500/20' :
                          'bg-neutral-500/10 text-neutral-500'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-5xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter">Team</h2>
            <div className="h-0.5 grow bg-neutral-100 dark:bg-white/5 rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-3 gap-10 text-center">
            {team.map((member, i) => (
              <div key={i} className="liquid-glass p-12 rounded-[3rem] border transition-all hover:-translate-y-2 group shadow-xl">
                <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-white/5 dark:to-white/10 flex items-center justify-center border-2 border-neutral-200 dark:border-white/5 group-hover:border-amber-500/50 transition-all shadow-inner">
                  <span className="text-4xl font-black text-neutral-400 dark:text-neutral-800 uppercase">{member.name[0]}</span>
                </div>
                <h4 className="text-2xl font-black text-neutral-900 dark:text-white mb-2 tracking-tight">{member.name}</h4>
                <p className="text-[10px] text-amber-600 dark:text-amber-500 font-black uppercase tracking-[0.3em]">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-neutral-100 dark:border-white/5 py-24 text-center backdrop-blur-sm">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-sky-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <span className="text-white font-black text-sm">PI</span>
          </div>
          <span className="text-xl font-black tracking-[0.4em] uppercase text-neutral-900 dark:text-white">Plooka-InAsist</span>
        </div>
        <p className="text-xs font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">© 2026 Crafted for maximum efficiency.</p>
      </footer>
    </main>
  );
}
