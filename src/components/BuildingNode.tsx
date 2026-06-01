"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import type { Building } from "@/types";

export function BuildingNode({ building, onSelect, onHover, compact = false }: { building: Building; onSelect: (building: Building) => void; onHover?: (building: Building | null) => void; compact?: boolean }) {
  const handleSelect = () => {
    if (building.id === "contact-hq") {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    onSelect(building);
  };

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 38, scale: 0.86 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: building.position.mobileOrder * 0.07, ease: "easeOut" }}
      whileHover={{ y: compact ? -6 : -18, scale: 1.045 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleSelect}
      onMouseEnter={() => onHover?.(building)}
      onMouseLeave={() => onHover?.(null)}
      className={compact ? "group relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-5 text-left shadow-2xl outline-none transition hover:border-cyan-300/30 focus-visible:ring-2 focus-visible:ring-cyan-300" : `building-button group absolute z-10 flex flex-col items-center outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${building.position.desktop}`}
      aria-label={`${building.id === "contact-hq" ? "Scroll to" : "Open"} ${building.name}`}
      style={{ color: building.accent } as CSSProperties}
    >
      {compact ? (
        <div className="relative z-10 flex items-center gap-4">
          <BuildingShape building={building} compact />
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-500">City zone 0{building.position.mobileOrder}</p>
            <h3 className="mt-1 text-xl font-black text-white">{building.name}</h3>
            <p className="mt-1 text-sm font-semibold" style={{ color: building.accent }}>{building.category}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{building.description}</p>
          </div>
        </div>
      ) : (
        <>
          <span className="iso-label pointer-events-none mb-4 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-white opacity-80 backdrop-blur transition group-hover:-translate-y-2 group-hover:opacity-100">
            {building.name}
          </span>
          <BuildingShape building={building} />
        </>
      )}
    </motion.button>
  );
}

function BuildingShape({ building, compact = false }: { building: Building; compact?: boolean }) {
  const windowCount = building.kind === "mall" ? 24 : building.kind === "automation" ? 0 : 18;
  return (
    <span className={`building-shape ${building.kind} ${compact ? "shrink-0" : ""}`} style={{ boxShadow: `0 0 54px ${building.glow}` }}>
      {building.kind !== "signal" && <span className="building-roof" />}
      <span className="building-side" />
      {building.kind === "lab" && <span className="lab-orbit" />}
      {building.kind === "signal" && <span className="signal-rings" />}
      {building.kind === "studio" && <span className="signboard">DESIGN</span>}
      {building.kind === "automation" && <span className="status-grid">{Array.from({ length: 9 }).map((_, index) => <i key={index} />)}</span>}
      {building.kind === "hq" && <span className="hq-crown">HQ</span>}
      {windowCount > 0 && <span className="windows" aria-hidden="true">{Array.from({ length: windowCount }).map((_, index) => <i key={index} className="window" style={{ animationDelay: `${(index % 7) * 0.18}s` }} />)}</span>}
    </span>
  );
}
