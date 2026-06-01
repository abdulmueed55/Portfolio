import { processSteps } from "@/data/portfolioData";

export function ProcessSection() {
  return (
    <section id="process" className="py-24">
      <div className="section-shell">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-200">Work Process</p>
        <h2 className="mt-3 text-4xl font-black tracking-[-0.055em] text-white md:text-6xl">From idea to launch</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <span className="text-5xl font-black text-white/10">0{index + 1}</span>
              <h3 className="mt-4 text-2xl font-black text-white">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
