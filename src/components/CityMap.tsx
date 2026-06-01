"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, Layers3, Radio, Rocket } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import type { Building } from "@/types";
import { buildings, projects } from "@/data/portfolioData";
import { BuildingNode } from "./BuildingNode";
import { ProjectModal } from "./ProjectModal";

export function CityMap() {
  const [selected, setSelected] = useState<Building | null>(null);
  const [hovered, setHovered] = useState<Building | null>(null);
  const selectedProjects = useMemo(() => selected ? projects.filter((project) => selected.projectIds.includes(project.id)) : [], [selected]);

  return (
    <section id="city" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-x-0 top-28 h-[34rem] bg-cyan-300/5 blur-[120px]" />
      <div className="section-shell relative">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Interactive City Map</p>
            <h2 className="mt-3 max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">The main portfolio is a navigable digital city.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">Move across premium districts, inspect service buildings, and open project command panels without leaving the city experience.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel lux-border rounded-[2rem] p-5">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-500">Current Zone</p>
            <h3 className="mt-2 text-2xl font-black text-white">{hovered?.name ?? "Move across the city"}</h3>
            <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">{hovered?.category ?? "Hover a building to identify the service district. Click any district to open a detailed command panel."}</p>
          </motion.div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
          <motion.div initial={{ opacity: 0, y: 34, rotateX: 8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }} className="hidden md:block">
            <div className="command-city-stage relative min-h-[760px] rounded-[3rem] border border-white/10 bg-slate-950/35 p-5 shadow-[0_40px_140px_rgba(0,0,0,.55)]">
              <div className="absolute inset-0 grid-fade rounded-[3rem] opacity-35" />
              <div className="city-platform absolute inset-8 overflow-visible rounded-[3rem]">
                <span className="city-depth-edge" />
                <span className="road road-x" /><span className="road road-y" /><span className="road road-d" /><span className="road road-z" />
                {Array.from({ length: 58 }).map((_, index) => <span key={index} className="absolute h-1.5 w-1.5 rounded-full bg-cyan-200/50" style={{ left: `${(index * 19) % 92 + 4}%`, top: `${(index * 37) % 82 + 8}%`, animation: `pulseGlow ${2.4 + (index % 7) * 0.35}s infinite`, animationDelay: `${index * 0.07}s` }} />)}
                {buildings.map((building) => <BuildingNode key={building.id} building={building} onSelect={setSelected} onHover={setHovered} />)}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 md:hidden">
            {[...buildings].sort((a, b) => a.position.mobileOrder - b.position.mobileOrder).map((building) => <BuildingNode key={building.id} building={building} onSelect={setSelected} compact />)}
          </div>

          <motion.aside initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-panel lux-border h-max rounded-[2rem] p-5">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200"><Cpu size={22} /></div>
              <div><p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">City Command Panel</p><h3 className="font-black text-white">Mueed OS</h3></div>
            </div>
            <div className="grid gap-3">
              <CommandMetric icon={<Layers3 size={18} />} label="Total Projects" value="6+" />
              <CommandMetric icon={<Rocket size={18} />} label="Services" value="6" />
              <CommandMetric icon={<Activity size={18} />} label="Status" value="Available" />
              <CommandMetric icon={<Radio size={18} />} label="Core Stack" value="WP / Shopify / React" />
            </div>
            <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Built with</p>
              <p className="mt-2 font-black text-cyan-100">Next.js + React + Framer Motion</p>
            </div>
          </motion.aside>
        </div>
      </div>
      <ProjectModal building={selected} projects={selectedProjects} onClose={() => setSelected(null)} />
    </section>
  );
}

function CommandMetric({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-slate-950/55 p-4">
      <span className="flex items-center gap-3 text-sm font-bold text-slate-400"><span className="text-cyan-200">{icon}</span>{label}</span>
      <strong className="text-right text-white">{value}</strong>
    </div>
  );
}
