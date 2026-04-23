export default function Logo({ light = false }) {
  return (
    <a href="#/" className="flex items-center gap-3 group">
      <span className={`inline-block w-9 h-9 rounded-sm relative overflow-hidden ${light ? "bg-white" : "bg-ink"}`}>
        <span className={`absolute inset-[6px] border-2 ${light ? "border-ink" : "border-white"}`} />
        <span
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-4 ${
            light ? "bg-ink" : "bg-white"
          }`}
        />
      </span>
      <span className="leading-tight">
        <span className={`block text-[11px] tracking-widest2 en ${light ? "text-white/70" : "text-ink/70"}`}>
          TOMORI
        </span>
        <span className={`block text-base font-bold ${light ? "text-white" : "text-ink"}`}>
          東森テクノロジー
        </span>
      </span>
    </a>
  );
}
