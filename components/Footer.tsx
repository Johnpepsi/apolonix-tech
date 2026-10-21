export default function Footer() {
  return (
    <footer className="bg-ink py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cobalt font-display text-xs font-bold text-white">
            AT
          </span>
          <span className="font-display text-base font-bold text-white">Apolonix Tech</span>
        </div>
        <p className="text-sm text-white/70">
          Web design &amp; development. © {new Date().getFullYear()} Apolonix Tech.
        </p>
      </div>
    </footer>
  );
}
