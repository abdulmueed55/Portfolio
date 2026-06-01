import { BadgeCheck, BriefcaseBusiness, Code2, Fingerprint, Sparkles } from "lucide-react";

const stats = [
  { icon: BriefcaseBusiness, label: "2+ Years Freelance Experience" },
  { icon: Code2, label: "WordPress / Shopify / React" },
  { icon: BadgeCheck, label: "Client-Focused Delivery" },
  { icon: Sparkles, label: "Design + Development Skills" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <div className="glass-panel lux-border relative overflow-hidden rounded-[2.5rem] p-6 md:p-10">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[.86fr_1.14fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-200">About Abdul Mueed</p>
              <h2 className="mt-3 text-4xl font-black leading-[.96] tracking-[-0.06em] text-white md:text-6xl">Profile command card for a digital problem solver.</h2>
              <div className="mt-8 rounded-[2rem] border border-white/10 bg-slate-950/55 p-5">
                <div className="flex items-center gap-4"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200"><Fingerprint /></div><div><p className="font-black text-white">Abdul Mueed</p><p className="text-sm text-slate-400">Web Developer · WordPress · Shopify · React · SEO</p></div></div>
              </div>
            </div>
            <div>
              <p className="text-xl leading-9 text-slate-300">I’m a web developer and digital problem solver focused on building websites, ecommerce stores, interactive interfaces, and automation systems. My work combines clean design, strong structure, and practical business thinking to help clients improve their online presence.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {stats.map(({ icon: Icon, label }) => <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30"><Icon className="text-cyan-200" /><strong className="mt-4 block text-white">{label}</strong></div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
