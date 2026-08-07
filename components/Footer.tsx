export default function Footer() {
  return (
    <footer className="bg-navy py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center border border-gridline/40 font-mono text-[10px] text-slate-soft">
            AT
          </span>
          <span className="font-display text-sm text-paper">Apolonix Tech</span>
        </div>
        <p className="font-mono text-xs text-slate-soft">
          Web design &amp; development. © {new Date().getFullYear()} Apolonix Tech.
        </p>
      </div>
    </footer>
  );
}
