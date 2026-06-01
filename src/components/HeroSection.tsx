"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, RadioTower } from "lucide-react";

const badges = ["WordPress", "Shopify", "React", "SEO", "Automation", "UI Design"];

export function HeroSection() {
  const enterCity = () => document.querySelector("#city")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 md:pt-40">
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 28 }).map((_, index) => (
          <span key={index} className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/50" style={{ left: `${(index * 37) % 100}%`, top: `${12 + ((index * 19) % 72)}%`, animation: `floatDot ${4 + (index % 5)}s ease-in-out infinite`, animationDelay: `${index * 0.15}s` }} />
        ))}
      </div>

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.04fr_.96fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" /> Loading Mueed City…
          </motion.div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-slate-400">Mueed City · An Interactive Portfolio by Abdul Mueed</p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.065em] text-white md:text-7xl lg:text-8xl">
            Explore My Work Like a <span className="text-gradient">Digital City</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            I build websites, Shopify stores, WordPress systems, React experiences, SEO improvements, and automation workflows for businesses that want to grow online.
          </p>
          <p className="mt-4 max-w-2xl text-slate-400">
            Explore my work through a digital city of websites, stores, automation systems, and creative solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={enterCity} className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-cyan-300 px-6 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-emerald-300 hover:shadow-[0_0_34px_rgba(34,211,238,.35)]">
              Enter City <ArrowRight className="transition group-hover:translate-x-1" size={19} />
            </button>
            <a href="#projects" className="inline-flex min-h-14 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 font-black text-white transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
              View Projects <ExternalLink size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <motion.span key={badge} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + index * 0.07 }} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-300">
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92, rotateX: 8 }} animate={{ opacity: 1, scale: 1, rotateX: 0 }} transition={{ delay: 0.15, duration: 0.85 }} className="glass-panel relative min-h-[430px] overflow-hidden rounded-[2rem] p-6">
          <div className="absolute inset-0 grid-fade opacity-50" />
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
          <div className="relative z-10 flex items-center justify-between text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><RadioTower size={16} className="text-cyan-300" /> City Preview</span>
            <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-emerald-200">Built with React + Next.js</span>
          </div>
          <div className="relative z-10 mt-10 rounded-[2rem] border border-white/10 bg-slate-950/55 p-6 shadow-2xl">
            <div className="city-platform relative mx-auto h-[260px] max-w-[520px] rotate-[-2deg] overflow-hidden rounded-[2rem] border border-white/10">
              <span className="road road-x" /><span className="road road-y" /><span className="road road-d" />
              {['left-[14%] top-[20%] h-28 w-14','right-[15%] top-[26%] h-20 w-24','left-[44%] top-[34%] h-24 w-20','left-[24%] bottom-[16%] h-20 w-16','right-[28%] bottom-[14%] h-24 w-20'].map((cls, i) => (
                <span key={cls} className={`absolute rounded-xl border border-white/10 bg-slate-800 shadow-[0_0_30px_rgba(34,211,238,.16)] ${cls}`} style={{ color: i % 2 ? '#34D399' : '#22D3EE' }}>
                  <span className="windows">{Array.from({ length: 9 }).map((_, w) => <i className="window" key={w} />)}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="relative z-10 mt-5 grid grid-cols-3 gap-3 text-center">
            {["7 Zones", "6 Projects", "24/7 Ready"].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-sm font-black text-white">{item}</div>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
