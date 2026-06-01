import { Blocks, Code2, Palette, Search, ShoppingBag, Workflow } from "lucide-react";
import { services } from "@/data/portfolioData";

const iconMap = { Blocks, ShoppingBag, Code2, Search, Palette, Workflow };

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="section-shell">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Services</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.055em] text-white md:text-6xl">Business-ready digital services</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <article key={service.title} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/[0.07]">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,.16)]"><Icon size={24} /></div>
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
