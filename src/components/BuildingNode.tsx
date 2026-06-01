"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import type { Building } from "@/types";

export function BuildingNode({ building, onSelect, onHover, compact = false }: { building: Building; onSelect: (building: Building) => void; onHover?: (name: string | null) => void; compact?: boolean }) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: building.position.mobileOrder * 0.05 }}
      whileHover={{ y: -12, scale: 1.035 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onSelect(building)}
      onMouseEnter={() => onHover?.(building.name)}
      onMouseLeave={() => onHover?.(null)}
      className={compact ? "group relative w-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left shadow-2xl outline-none transition hover:border-white/20 focus-visible:ring-2 focus-visible:ring-cyan-300" : `group absolute z-10 flex flex-col items-center outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${building.position.desktop}`}
      aria-label={`Open ${building.name} details`}
      style={{ color: building.accent } as CSSProperties}
    >
      {compact ? (
        <div className="flex items-center gap-5">
          <BuildingShape building={building} small />
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">Zone {building.position.mobileOrder}</p>
            <h3 className="mt-1 text-xl font-black text-white">{building.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{building.description}</p>
          </div>
        </div>
      ) : (
        <>
          <span className="pointer-events-none mb-3 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white opacity-75 backdrop-blur transition group-hover:-translate-y-1 group-hover:opacity-100">
            {building.name}
          </span>
          <BuildingShape building={building} />
        </>
      )}
    </motion.button>
  );
}

function BuildingShape({ building, small = false }: { building: Building; small?: boolean }) {
  return (
    <span className={`building-shape ${building.kind} ${small ? "scale-75" : ""}`} style={{ boxShadow: `0 0 42px ${building.glow}` }}>
      <span className="windows" aria-hidden="true">
        {Array.from({ length: building.kind === "mall" ? 12 : 15 }).map((_, index) => <i key={index} className="window" />)}
      </span>
    </span>
  );
}
