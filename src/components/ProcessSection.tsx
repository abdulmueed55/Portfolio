import { processSteps } from "@/data/portfolioData";

export function ProcessSection() {
  return (
    <section id="process" className="py-24">
      <div className="section-shell">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-200">Work Process Timeline</p>
        <h2 className="mt-3 text-4xl font-black leading-[.96] tracking-[-0.06em] text-white md:text-6xl">A mission route from idea to launch.</h2>
        <div className="relative mt-14 grid gap-5 md:grid-cols-4">
          <div className="mission-line absolute left-8 right-8 top-10 hidden h-1 md:block" />
          {processSteps.map((step, index) => (
            <article key={step.title} className="relative rounded-[2rem] border border-white/10 bg-slate-950/55 p-6 backdrop-blur transition hover:-translate-y-2 hover:border-cyan-300/30">
              <span className="grid h-20 w-20 place-items-center rounded-3xl border border-cyan-300/20 bg-cyan-300/10 text-2xl font-black text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,.16)]">0{index + 1}</span>
              <h3 className="mt-6 text-2xl font-black text-white">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
