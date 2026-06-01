"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useEffect } from "react";
import type { Building, Project } from "@/types";

export function ProjectModal({ building, projects, onClose }: { building: Building | null; projects: Project[]; onClose: () => void }) {
  useEffect(() => {
    if (!building) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [building, onClose]);

  return (
    <AnimatePresence>
      {building && (
        <motion.div className="fixed inset-0 z-[70] bg-slate-950/70 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={onClose}>
          <motion.aside onMouseDown={(event) => event.stopPropagation()} initial={{ opacity: 0, x: 80, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 70, scale: 0.96 }} transition={{ type: "spring", stiffness: 180, damping: 24 }} className="glass-panel ml-auto flex h-full w-full max-w-3xl flex-col overflow-hidden rounded-[2rem]">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 p-6 md:p-8">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: building.accent }}>{building.category}</p>
                <h2 id="modal-title" className="mt-2 text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">{building.name}</h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-300">{building.description}</p>
              </div>
              <button onClick={onClose} aria-label="Close details" className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"><X size={20} /></button>
            </div>
            <div className="overflow-y-auto p-6 md:p-8">
              <section>
                <h3 className="text-lg font-black text-white">What I Do</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {building.services.map((service) => <div key={service} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-slate-300">{service}</div>)}
                </div>
              </section>
              <section className="mt-8">
                <h3 className="text-lg font-black text-white">Featured Work</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {projects.map((project, index) => <ProjectMiniCard key={project.id} project={project} index={index} />)}
                </div>
              </section>
              <section className="mt-8">
                <h3 className="text-lg font-black text-white">Tools Used</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {building.tools.map((tool) => <span key={tool} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-bold text-slate-300">{tool}</span>)}
                </div>
              </section>
              <a href="#contact" onClick={onClose} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-300 px-5 font-black text-slate-950 transition hover:bg-emerald-300">Discuss Similar Project</a>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectMiniCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/45">
      <div className="relative h-28 overflow-hidden" style={{ background: `linear-gradient(135deg, rgba(34,211,238,.28), rgba(52,211,153,.16)), radial-gradient(circle at ${30 + index * 12}% 30%, rgba(255,255,255,.26), transparent 24%), #0b1120` }}>
        <span className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ animation: "shimmer 3.5s infinite" }} />
      </div>
      <div className="p-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">{project.category}</p>
        <h4 className="mt-2 font-black text-white">{project.title}</h4>
        <p className="mt-2 text-sm leading-6 text-slate-400">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">{project.stack.slice(0, 3).map((tag) => <span key={tag} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] font-bold text-slate-300">{tag}</span>)}</div>
        <div className="mt-4 flex gap-2"><button className="rounded-full border border-white/10 px-3 py-2 text-xs font-black text-white">View Details</button><a href={project.liveUrl} className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-2 text-xs font-black text-slate-950">Live Preview <ExternalLink size={12} /></a></div>
      </div>
    </article>
  );
}
