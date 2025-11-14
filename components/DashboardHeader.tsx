interface DashboardHeaderProps {
  title: string;
  activePeriod: string;
}

export default function DashboardHeader({ title, activePeriod }: DashboardHeaderProps) {
  return (
    <header className="w-full border-b border-white/5 px-4 md:px-8 py-4 flex items-center justify-between bg-black/30 backdrop-blur">
      <div>
        <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
        <p className="text-xs md:text-sm text-slate-400">Visão geral do seu desempenho e trilha de estudos.</p>
      </div>
      <div className="flex items-center gap-4">
        <select className="bg-white/5 border border-white/10 text-xs md:text-sm rounded-xl px-3 py-2 outline-none">
          <option>Hoje</option>
          <option>7 dias</option>
          <option>30 dias</option>
        </select>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-end text-xs">
            <span className="font-medium">Rafael</span>
            <span className="text-emerald-400 flex items-center gap-1">
              Tendência: subindo
              <span>📈</span>
            </span>
          </div>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500" />
        </div>
      </div>
    </header>
  );
}
