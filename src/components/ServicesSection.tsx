import { Blocks, Code2, Palette, Search, ShoppingBag, Workflow } from "lucide-react";
import { services } from "@/data/portfolioData";

const iconMap = { Blocks, ShoppingBag, Code2, Search, Palette, Workflow };

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="section-shell">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Service Buildings Section</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-black leading-[.96] tracking-[-0.06em] text-white md:text-6xl">Premium service blocks built like city infrastructure.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <article key={service.title} className="service-building group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.075] to-white/[0.025] p-6 text-white transition hover:-translate-y-2 hover:border-cyan-300/35" style={{ color: index % 2 ? "#34D399" : "#22D3EE" }}>
                <div className="absolute right-5 top-5 flex gap-1.5">{[0, 1, 2].map((dot) => <span key={dot} className="h-2 w-2 rounded-full bg-current opacity-50 group-hover:opacity-100" />)}</div>
                <div className="grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-slate-950/65 text-current shadow-[0_0_28px_rgba(34,211,238,.16)]"><Icon size={26} /></div>
                <div className="mt-8 h-20 rounded-2xl border border-white/10 bg-slate-950/45 p-3">
                  <div className="h-3 w-2/3 rounded-full bg-current opacity-35" />
                  <div className="mt-3 h-3 w-1/2 rounded-full bg-current opacity-20" />
                </div>
                <h3 className="mt-6 text-2xl font-black text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
