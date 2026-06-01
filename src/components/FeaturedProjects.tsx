import { ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolioData";

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div><p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-200">Featured Projects</p><h2 className="mt-3 text-4xl font-black tracking-[-0.055em] text-white md:text-6xl">Project districts</h2></div>
          <p className="max-w-md text-slate-400">CSS-generated abstract thumbnails keep the experience fast while links can be replaced with real previews anytime.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.id} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl transition hover:-translate-y-2 hover:border-cyan-300/30">
              <div className="relative h-44 overflow-hidden" style={{ background: `radial-gradient(circle at 20% 20%, rgba(34,211,238,.34), transparent 24%), radial-gradient(circle at 80% 40%, rgba(52,211,153,.25), transparent 26%), linear-gradient(135deg, #0b1120, #111827 ${45 + index * 3}%, #050816)` }}>
                <div className="absolute inset-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm" />
                <span className="absolute bottom-6 left-6 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-cyan-100">0{index + 1}</span>
              </div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">{project.category}</p>
                <h3 className="mt-3 text-2xl font-black text-white">{project.title}</h3>
                <p className="mt-3 min-h-20 leading-7 text-slate-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{project.stack.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-slate-950/55 px-3 py-1.5 text-xs font-bold text-slate-300">{tag}</span>)}</div>
                <div className="mt-6 flex flex-wrap gap-3"><button className="rounded-full border border-white/10 px-4 py-2 text-sm font-black text-white transition hover:bg-white/10">View Details</button><a href={project.liveUrl} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950">Live Preview <ExternalLink size={15} /></a></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
