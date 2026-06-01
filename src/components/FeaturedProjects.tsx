import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolioData";

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="section-shell">
        <div className="mb-12 grid gap-5 md:grid-cols-[1fr_420px] md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-200">Featured Project District</p>
            <h2 className="mt-3 text-4xl font-black leading-[.95] tracking-[-0.06em] text-white md:text-6xl">Project modules across the city grid.</h2>
          </div>
          <p className="text-lg leading-8 text-slate-400">Each module uses lightweight CSS visuals instead of broken placeholder images, keeping the experience fast and premium.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.id} className="project-module group rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-white/[0.075] to-white/[0.025] p-3 shadow-2xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/35">
              <div className="relative h-52 overflow-hidden rounded-[1.7rem] border border-white/10" style={{ background: `radial-gradient(circle at 24% 24%, rgba(34,211,238,.42), transparent 22%), radial-gradient(circle at 80% 48%, rgba(52,211,153,.26), transparent 26%), linear-gradient(135deg, #0b1120, #111827 ${42 + index * 4}%, #030712)` }}>
                <div className="absolute inset-0 grid-fade opacity-40" />
                <div className="absolute left-8 top-8 h-20 w-24 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md" />
                <div className="absolute bottom-7 right-8 h-28 w-20 rounded-t-3xl border border-white/10 bg-slate-950/55 shadow-[0_0_35px_rgba(34,211,238,.2)]" />
                <span className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transition group-hover:animate-[shimmer_1.2s_ease]" />
                <span className="absolute bottom-5 left-5 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-cyan-100">Project District 0{index + 1}</span>
              </div>
              <div className="p-4">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">{project.category}</p>
                <h3 className="mt-3 text-2xl font-black text-white">{project.title}</h3>
                <p className="mt-3 min-h-20 leading-7 text-slate-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{project.stack.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-slate-950/55 px-3 py-1.5 text-xs font-bold text-slate-300">{tag}</span>)}</div>
                <div className="mt-6 flex flex-wrap gap-3"><button className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-black text-white transition hover:bg-white/10">View Details <ArrowUpRight size={15} /></button><a href={project.liveUrl} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950">Live Preview <ExternalLink size={15} /></a></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
