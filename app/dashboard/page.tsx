import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import KpiCard from '@/components/KpiCard';
import LineChartCard from '@/components/LineChartCard';
import BarChartCard from '@/components/BarChartCard';
import TripodTimeline from '@/components/TripodTimeline';
import HeatmapCard from '@/components/HeatmapCard';
import CriticalTopicsTable from '@/components/CriticalTopicsTable';
import { getDashboardData } from '@/lib/mockData';

export default async function DashboardPage() {
  const { kpis, performanceLine, subjectsBar, heatmap, criticalTopics, tripodSteps } = getDashboardData();

  return (
    <div className="flex min-h-screen bg-background text-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <DashboardHeader title="Dashboard" activePeriod="7 dias" />
        <main className="flex-1 px-4 py-8 space-y-6 overflow-auto">
          <section className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {kpis.map((kpi) => (
              <KpiCard key={kpi.title} {...kpi} />
            ))}
          </section>
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <LineChartCard title="Performance ao longo do tempo" subtitle="% de acertos diários" data={performanceLine} />
            </div>
            <BarChartCard title="Desempenho por matéria" data={subjectsBar} />
          </section>
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <TripodTimeline steps={tripodSteps} />
            <div className="space-y-6">
              <HeatmapCard data={heatmap} />
              <CriticalTopicsTable topics={criticalTopics} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
