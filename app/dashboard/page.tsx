'use client';

import { DashboardHeader } from '@/components/DashboardHeader';
import { KpiCard } from '@/components/KpiCard';
import { BarchartCard } from '@/components/BarchartCard';

const mockCourseData = [
  { name: 'Python Basics', students: 150, completion: 85 },
  { name: 'Web Development', students: 120, completion: 72 },
  { name: 'Data Science', students: 95, completion: 68 },
  { name: 'Machine Learning', students: 80, completion: 45 },
  { name: 'React Masterclass', students: 110, completion: 78 }
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <DashboardHeader />

      <div className="container mx-auto px-4 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <KpiCard
            title="Total de Alunos"
            value="280"
            subtitle="+12% vs mês anterior"
          />
          <KpiCard
            title="Cursos Ativos"
            value="5"
            subtitle="+2 novos cursos"
          />
          <KpiCard
            title="Taxa de Conclusão"
            value="72%"
            subtitle="+8% de crescimento"
          />
          <KpiCard
            title="Certificados Emitidos"
            value="156"
            subtitle="+24 este mês"
          />
        </div>

        {/* Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <BarchartCard
            title="Desempenho por Curso"
            data={mockCourseData}
            dataKey="completion"
            color="#8b5cf6"
          />
        </div>
      </div>
    </div>
  );
}
