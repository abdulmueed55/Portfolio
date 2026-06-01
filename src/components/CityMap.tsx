"use client";

import { useMemo, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import type { Building } from "@/types";
import { buildings, projects } from "@/data/portfolioData";
import { BuildingNode } from "./BuildingNode";
import { ProjectModal } from "./ProjectModal";

export function CityMap() {
  const [selected, setSelected] = useState<Building | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [soundUi, setSoundUi] = useState(false);
  const selectedProjects = useMemo(() => selected ? projects.filter((project) => selected.projectIds.includes(project.id)) : [], [selected]);

  return (
    <section id="city" className="relative py-24 md:py-32">
      <div className="section-shell">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Interactive City Map</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.055em] text-white md:text-6xl">Choose a building. Enter a skill zone.</h2>
            <p className="mt-4 max-w-2xl text-slate-400">Every district represents a service, toolset, or project category. Hover for the current zone and click to open the command panel.</p>
          </div>
          <div className="glass-panel rounded-3xl p-4 text-sm text-slate-300">
            <div className="flex items-center justify-between gap-5">
              <div><p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Current Zone</p><strong className="text-white">{hovered ?? "City Overview"}</strong></div>
              <button type="button" onClick={() => setSoundUi((v) => !v)} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5" aria-label="Toggle hover sound UI">{soundUi ? <Volume2 size={18} /> : <VolumeX size={18} />}</button>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="city-platform relative h-[680px] overflow-hidden rounded-[3rem] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,.45)]">
            <span className="road road-x" /><span className="road road-y" /><span className="road road-d" />
            {Array.from({ length: 36 }).map((_, index) => <span key={index} className="absolute h-1.5 w-1.5 rounded-full bg-cyan-200/50" style={{ left: `${(index * 23) % 94 + 3}%`, top: `${(index * 41) % 86 + 7}%`, animation: `pulseGlow ${2.5 + (index % 6) * 0.4}s infinite`, animationDelay: `${index * 0.09}s` }} />)}
            {buildings.map((building) => <BuildingNode key={building.id} building={building} onSelect={setSelected} onHover={setHovered} />)}
            <div className="glass-panel absolute bottom-7 left-7 z-20 rounded-3xl p-5">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-500">Command Panel</p>
              <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                <span><strong className="block text-2xl text-white">7</strong><small className="text-slate-400">Zones</small></span>
                <span><strong className="block text-2xl text-white">6</strong><small className="text-slate-400">Projects</small></span>
                <span><strong className="block text-2xl text-white">5+</strong><small className="text-slate-400">Features</small></span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:hidden">
          {[...buildings].sort((a, b) => a.position.mobileOrder - b.position.mobileOrder).map((building) => <BuildingNode key={building.id} building={building} onSelect={setSelected} compact />)}
        </div>
      </div>
      <ProjectModal building={selected} projects={selectedProjects} onClose={() => setSelected(null)} />
    </section>
  );
}
