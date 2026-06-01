export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Mueed City — Interactive Portfolio 2.0</p>
        <p className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-slate-300">Built with React + Next.js</p>
      </div>
    </footer>
  );
}
