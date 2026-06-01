"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#030712]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
          aria-label="Loading Mueed City"
        >
          <motion.div className="loading-grid absolute -inset-x-20 bottom-[-18%] h-[70%]" initial={{ opacity: 0, y: 90 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} />
          <div className="scan-overlay" />
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="glass-panel lux-border relative z-10 w-[min(520px,calc(100%-32px))] rounded-[2rem] p-8 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 font-black text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,.32)]">MC</div>
            <h1 className="mt-6 text-3xl font-black tracking-[-0.04em] text-white">Loading Mueed City…</h1>
            <p className="mt-3 text-sm text-slate-400">Calibrating districts, roads, project modules, and command panels.</p>
            <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.45, ease: "easeInOut" }} />
            </div>
            <div className="mt-5 flex justify-center gap-2" aria-hidden="true">
              {[0, 1, 2].map((dot) => <motion.span key={dot} className="h-2 w-2 rounded-full bg-cyan-200" animate={{ opacity: [0.25, 1, 0.25], y: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity, delay: dot * 0.16 }} />)}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
