"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, RadioTower, Sparkles } from "lucide-react";

const chips = ["WordPress", "Shopify", "React", "SEO", "Automation", "UI Design"];

export function HeroSection() {
  const enterCity = () => document.querySelector("#city")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 md:pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[120px]" />
        <div className="absolute right-[-10rem] top-28 h-[30rem] w-[30rem] rounded-full bg-emerald-300/10 blur-[120px]" />
        {Array.from({ length: 42 }).map((_, index) => (
          <span key={index} className="absolute h-1.5 w-1.5 rounded-full bg-cyan-200/50" style={{ left: `${(index * 29) % 100}%`, top: `${8 + ((index * 17) % 82)}%`, animation: `floatDot ${3.8 + (index % 6) * 0.4}s ease-in-out infinite`, animationDelay: `${index * 0.11}s` }} />
        ))}
      </div>

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[.96fr_1.04fr]">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-100 shadow-[0_0_34px_rgba(34,211,238,.14)]">
            <Sparkles size={15} /> Interactive Portfolio 2.0
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.88] tracking-[-0.075em] text-white md:text-7xl xl:text-8xl">
            Explore My Work Like a <span className="text-gradient">Digital City</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            I build websites, Shopify stores, WordPress systems, React experiences, SEO improvements, and automation workflows for businesses that want to grow online.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button onClick={enterCity} className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-cyan-300 px-7 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-emerald-300 hover:shadow-[0_0_42px_rgba(34,211,238,.38)]">
              Enter City <ArrowRight className="transition group-hover:translate-x-1" size={19} />
            </button>
            <a href="#projects" className="inline-flex min-h-14 items-center gap-3 rounded-full border border-white/10 bg-white/[0.055] px-7 font-black text-white backdrop-blur transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
              View Projects <ExternalLink size={18} />
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-2">
            {chips.map((chip, index) => (
              <motion.span key={chip} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + index * 0.06 }} className="rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm font-bold text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,.06)] backdrop-blur">
                {chip}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 28, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.15, duration: 0.85 }} className="command-city-stage relative">
          <div className="glass-panel lux-border relative min-h-[540px] overflow-hidden rounded-[2.5rem] p-5 md:p-7">
            <div className="scan-overlay" />
            <div className="relative z-10 flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-bold text-slate-300"><RadioTower size={16} className="text-cyan-200" /> City Command Preview</span>
              <span className="rounded-full bg-emerald-300/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-200">6+ Projects</span>
            </div>

            <div className="relative z-10 mt-8 h-[380px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-5">
              <div className="absolute inset-0 grid-fade opacity-50" />
              <div className="city-orbit absolute left-1/2 top-[54%] h-[280px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-cyan-300/10 to-emerald-300/5 shadow-[0_50px_90px_rgba(0,0,0,.55)]">
                <span className="road road-x" /><span className="road road-y" /><span className="road road-d" />
                {[
                  "left-[12%] top-[20%] h-36 w-16",
                  "right-[12%] top-[28%] h-24 w-32",
                  "left-[43%] top-[23%] h-32 w-24 rounded-t-full",
                  "left-[24%] bottom-[14%] h-24 w-20",
                  "right-[28%] bottom-[16%] h-28 w-24",
                ].map((cls, index) => (
                  <span key={cls} className={`absolute rounded-xl border border-white/10 bg-gradient-to-br from-slate-700 to-slate-950 shadow-[0_0_28px_rgba(34,211,238,.18)] ${cls}`} style={{ color: index % 2 ? "#34D399" : "#22D3EE" }}>
                    <span className="windows">{Array.from({ length: 12 }).map((_, windowIndex) => <i className="window" key={windowIndex} />)}</span>
                  </span>
                ))}
              </div>
              <div className="absolute bottom-5 left-5 right-5 z-20 grid grid-cols-3 gap-3">
                {["7 Zones", "6 Services", "Available"].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/75 p-3 text-center text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur">{item}</div>)}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-2xl backdrop-blur md:block">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">System</p>
            <p className="mt-1 font-black text-white">Built with Next.js + React</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
