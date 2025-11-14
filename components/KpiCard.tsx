"use client";

interface KpiCardProps {
  title: string;
  value: string;
  subtitle?: string;
}

export default function KpiCard({ title, value, subtitle }: KpiCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl px-3 py-3 md:px-4 md:py-4 flex flex-col justify-between">
      <span className="text-[10px] md:text-xs text-slate-400">{title}</span>
      <span className="text-lg md:text-2xl font-semibold mt-1">{value}</span>
      {subtitle && (
        <span className="text-[10px] md:text-xs text-slate-500 mt-1">
          {subtitle}
        </span>
      )}
    </div>
  );
}
