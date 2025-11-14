'use client';

interface HeatmapEntry {
  day: string;
  value: number;
}

interface HeatmapCardProps {
  data: HeatmapEntry[];
}

function getBg(value: number) {
  if (value >= 4) return 'bg-indigo-600';
  if (value >= 3) return 'bg-indigo-500';
  if (value >= 2) return 'bg-indigo-400';
  if (value >= 1) return 'bg-indigo-300';
  return 'bg-indigo-200';
}

export default function HeatmapCard({ data }: HeatmapCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6">
      <h2 className="text-sm font-medium mb-4">Mapa de calor de estudos</h2>
      <div className="grid grid-cols-7 gap-1">
        {data.map((d, idx) => (
          <div key={idx} className={`h-4 rounded ${getBg(d.value)}`}></div>
        ))}
      </div>
    </div>
  );
}
