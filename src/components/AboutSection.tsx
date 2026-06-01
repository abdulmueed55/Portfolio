import { BadgeCheck, BriefcaseBusiness, Code2, Sparkles } from "lucide-react";

const stats = [
  { icon: BriefcaseBusiness, label: "2+ Years Freelance Experience" },
  { icon: Code2, label: "WordPress / Shopify / React" },
  { icon: BadgeCheck, label: "Client-Focused Delivery" },
  { icon: Sparkles, label: "Design + Development Skills" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-8">
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />
          <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-200">About Abdul Mueed</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.055em] text-white md:text-6xl">A practical builder for modern online businesses.</h2>
        </div>
        <div>
          <p className="text-xl leading-9 text-slate-300">I’m a web developer and digital problem solver focused on building websites, ecommerce stores, interactive interfaces, and automation systems. My work combines clean design, strong structure, and practical business thinking to help clients improve their online presence.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stats.map(({ icon: Icon, label }) => <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"><Icon className="text-cyan-200" /><strong className="mt-4 block text-white">{label}</strong></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
