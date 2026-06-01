"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "City", href: "#city" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <header className="fixed left-0 right-0 top-4 z-50 px-4">
        <nav className="section-shell glass-panel lux-border flex items-center justify-between rounded-full px-4 py-3 md:px-5" aria-label="Primary navigation">
          <a href="#home" className="group flex items-center gap-3" aria-label="Mueed City home">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 font-black text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,.25)]">MC</span>
            <span><strong className="block font-black tracking-[-0.04em] text-white">Mueed City</strong><small className="hidden text-[10px] font-black uppercase tracking-[0.22em] text-slate-500 sm:block">Command Portfolio</small></span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="group relative rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.08] hover:text-white">
                <span className="absolute inset-x-4 bottom-1 h-px scale-x-0 bg-cyan-300 transition group-hover:scale-x-100" />{link.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_0_28px_rgba(34,211,238,.32)] md:inline-flex">
            Start Project
          </a>

          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white md:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="section-shell glass-panel mt-2 grid gap-2 rounded-3xl p-3 md:hidden">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-semibold text-slate-200 hover:bg-white/[0.08]">
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </header>
    </>
  );
}
