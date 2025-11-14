export interface Kpi {
  title: string;
  value: string;
  subtitle?: string;
}

export interface LineData {
  name: string;
  value: number;
}

export interface BarData {
  label: string;
  value: number;
}

export interface HeatmapData {
  day: string;
  value: number;
}

export interface CriticalTopic {
  id: number;
  topic: string;
  subject: string;
  score: number;
  lastStudied: string;
  nextReview: string;
}

export interface TripodStep {
  label: string;
  desc: string;
  icon: string;
}

export interface DashboardData {
  kpis: Kpi[];
  performanceLine: LineData[];
  subjectsBar: BarData[];
  heatmap: HeatmapData[];
  criticalTopics: CriticalTopic[];
  tripodSteps: TripodStep[];
}

export function getDashboardData(): DashboardData {
  return {
    kpis: [
      { title: 'Desempenho Geral', value: '74%', subtitle: '+3% vs semana passada' },
      { title: 'Revisões hoje', value: '5', subtitle: '2 atrasadas' },
      { title: 'Tópicos fracos', value: '7', subtitle: 'Priorize amarelos' },
      { title: 'Horas na semana', value: '6h30', subtitle: 'Meta: 8h' },
      { title: 'Pontos de XP', value: '1.240', subtitle: '+120 hoje' },
    ],
    performanceLine: [
      { name: 'Seg', value: 62 },
      { name: 'Ter', value: 68 },
      { name: 'Qua', value: 71 },
      { name: 'Qui', value: 69 },
      { name: 'Sex', value: 74 },
      { name: 'Sáb', value: 78 },
      { name: 'Dom', value: 80 },
    ],
    subjectsBar: [
      { label: 'Português', value: 82 },
      { label: 'Matemática', value: 58 },
      { label: 'Raciocínio Lógico', value: 64 },
      { label: 'Vendas', value: 76 },
      { label: 'TI', value: 69 },
    ],
    heatmap: [
      { day: '2025-11-10', value: 3 },
      { day: '2025-11-11', value: 2 },
      { day: '2025-11-12', value: 1 },
    ],
    criticalTopics: [
      { id: 1, topic: 'Matemática Financeira', subject: 'Matemática', score: 45, lastStudied: '2025-11-12', nextReview: '2025-11-15' },
      { id: 2, topic: 'Regra de Três', subject: 'Raciocínio Lógico', score: 52, lastStudied: '2025-11-11', nextReview: '2025-11-14' },
      { id: 3, topic: 'Constituição Federal', subject: 'Direito', score: 60, lastStudied: '2025-11-09', nextReview: '2025-11-13' },
      { id: 4, topic: 'Informática Básica', subject: 'TI', score: 50, lastStudied: '2025-11-10', nextReview: '2025-11-13' },
      { id: 5, topic: 'Gramática', subject: 'Português', score: 65, lastStudied: '2025-11-11', nextReview: '2025-11-14' },
    ],
    tripodSteps: [
      {
        label: 'Revisão',
        desc: 'Revisar tópico com ciclo R3 – Atendimento ao Cliente – Prioridade Alta',
        icon: '🔁',
      },
      {
        label: 'Reforço',
        desc: 'Matemática Financeira – 48% acertos – foco em juros compostos',
        icon: '🧱',
      },
      {
        label: 'Novo tópico',
        desc: 'Economia – Inflação e índices de preços',
        icon: '✨',
      },
    ],
  };
}
