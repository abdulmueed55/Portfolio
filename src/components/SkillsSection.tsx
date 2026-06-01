import { skillGroups } from "@/data/portfolioData";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Skills / Tools</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.055em] text-white md:text-6xl">Tool stack powering the city</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
              <h3 className="font-black text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => <span key={skill} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-2 text-xs font-bold text-slate-300 transition hover:border-cyan-300/30 hover:text-white">{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
