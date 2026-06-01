import { skillGroups } from "@/data/portfolioData";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Skills Dashboard</p><h2 className="mt-3 max-w-3xl text-4xl font-black leading-[.96] tracking-[-0.06em] text-white md:text-6xl">Tool stack operating inside Mueed City.</h2></div>
          <div className="glass-panel rounded-3xl p-4 text-sm text-slate-300"><strong className="text-white">5 stack groups</strong><br />Frontend, CMS, ecommerce, marketing, and design.</div>
        </div>
        <div className="grid gap-5 lg:grid-cols-5">
          {skillGroups.map((group, index) => (
            <article key={group.title} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.025] p-5">
              <div className="absolute right-4 top-4 text-5xl font-black text-white/[0.035]">0{index + 1}</div>
              <h3 className="font-black text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => <span key={skill} className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-2 text-xs font-bold text-slate-200 shadow-[0_0_18px_rgba(34,211,238,.08)] transition hover:border-cyan-300/40 hover:bg-cyan-300/10">{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
