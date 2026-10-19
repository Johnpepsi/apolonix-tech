export default function SiteMock() {
  return (
    <div
      aria-hidden="true"
      className="w-full max-w-md overflow-hidden rounded-2xl border border-edge bg-white shadow-[12px_12px_0_0_rgba(47,91,255,0.16)]"
    >
      <div className="flex items-center gap-1.5 border-b border-edge bg-mist px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-edge" />
        <span className="h-2.5 w-2.5 rounded-full bg-edge" />
        <span className="h-2.5 w-2.5 rounded-full bg-edge" />
        <span className="ml-3 h-5 flex-1 rounded-md bg-white" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="h-3 w-20 rounded bg-ink" />
          <span className="flex gap-2">
            <span className="h-2 w-8 rounded bg-edge" />
            <span className="h-2 w-8 rounded bg-edge" />
            <span className="h-2 w-8 rounded bg-edge" />
          </span>
        </div>
        <div className="mt-8 space-y-3">
          <span className="block h-5 w-4/5 rounded bg-ink" />
          <span className="block h-5 w-3/5 rounded bg-ink" />
          <span className="block h-2.5 w-full rounded bg-edge" />
          <span className="block h-2.5 w-5/6 rounded bg-edge" />
        </div>
        <span className="mt-6 inline-block h-9 w-28 rounded-lg bg-cobalt" />
        <div className="mt-8 grid grid-cols-3 gap-3">
          <span className="aspect-square rounded-xl bg-cobalt/15" />
          <span className="aspect-square rounded-xl bg-mint/25" />
          <span className="aspect-square rounded-xl bg-mist" />
        </div>
      </div>
    </div>
  );
}
