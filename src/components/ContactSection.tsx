import { Mail, MessageCircle, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-x-0 bottom-0 h-80 bg-emerald-300/5 blur-[120px]" />
      <div className="section-shell relative">
        <div className="glass-panel lux-border grid gap-8 overflow-hidden rounded-[2.5rem] p-6 md:p-10 lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-200">Contact HQ</p>
            <h2 className="mt-3 text-4xl font-black leading-[.96] tracking-[-0.06em] text-white md:text-6xl">Let’s Build Something Powerful Together</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">Have a website, store, or automation idea? Send a message and I’ll help you turn it into a clean, professional digital experience.</p>
            <div className="mt-8 rounded-[2rem] border border-white/10 bg-slate-950/55 p-5">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">HQ Direct Line</p>
              <p className="mt-2 font-black text-white">abdulmueed5666@gmail.com</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 font-black text-white transition hover:border-cyan-300/30"><MessageCircle size={18} /> WhatsApp Me</a>
              <a href="mailto:abdulmueed5666@gmail.com" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 font-black text-white transition hover:border-cyan-300/30"><Mail size={18} /> Email Me</a>
            </div>
          </div>
          <form className="rounded-[2rem] border border-white/10 bg-slate-950/55 p-5 md:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-300">Name<input className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300" placeholder="Your name" /></label>
              <label className="grid gap-2 text-sm font-bold text-slate-300">Email<input type="email" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300" placeholder="you@example.com" /></label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-bold text-slate-300">Project Type<select className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300" defaultValue=""><option value="" disabled>Select a project type</option><option>WordPress Website</option><option>Shopify Store</option><option>React / Next.js</option><option>SEO Audit</option><option>Automation Workflow</option></select></label>
            <label className="mt-4 grid gap-2 text-sm font-bold text-slate-300">Message<textarea className="min-h-40 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300" placeholder="Tell me about your goal, timeline, and website/store details." /></label>
            <button type="submit" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-cyan-300 px-6 font-black text-slate-950 transition hover:-translate-y-1 hover:bg-emerald-300"><Send size={18} /> Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
