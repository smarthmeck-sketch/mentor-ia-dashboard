'use client';

import { DashboardHeader } from '@/components/DashboardHeader';
import { KpiCard } from '@/components/KpiCard';
import { LineChartCard } from '@/components/LineChartCard';
import { BarchartCard } from '@/components/BarchartCard';
import { CriticalTopicsTable } from '@/components/CriticalTopicsTable';

// Mock data
const mockStudentsData = [
  { month: 'Jan', students: 120, active: 95 },
  { month: 'Feb', students: 150, active: 120 },
  { month: 'Mar', students: 180, active: 145 },
  { month: 'Apr', students: 210, active: 170 },
  { month: 'May', students: 250, active: 195 },
  { month: 'Jun', students: 280, active: 220 }
];

const mockCourseData = [
  { name: 'Python Basics', students: 150, completion: 85 },
  { name: 'Web Development', students: 120, completion: 72 },
  { name: 'Data Science', students: 95, completion: 68 },
  { name: 'Machine Learning', students: 80, completion: 45 },
  { name: 'React Masterclass', students: 110, completion: 78 }
];

const mockTopics = [
  { topic: 'Variables & Types', success_rate: 62 },
  { topic: 'Functions & Scope', success_rate: 58 },
  { topic: 'Async Programming', success_rate: 45 },
  { topic: 'API Integration', success_rate: 52 },
  { topic: 'Database Queries', success_rate: 40 }
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <DashboardHeader />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* KPI Cards Section */}
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

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <LineChartCard
            title="Crescimento de Alunos"
            data={mockStudentsData}
            dataKey1="students"
            dataKey2="active"
            color1="#3b82f6"
            color2="#10b981"
          />
          <BarChartCard
            title="Desempenho por Curso"
            data={mockCourseData}
            dataKey="completion"
            color="#8b5cf6"
          />
        </div>


        {/* Critical Topics Table */}
        <div className="grid grid-cols-1 gap-6">
          <CriticalTopicsTable
            title="Tópicos Críticos - Taxa de Sucesso"
            topics={mockTopics}
          />
        </div>
      </div>
    </div>
  );
}
