'use client';

interface CriticalTopic {
  subject: string;
  topic: string;
  accuracy: number;
  lastStudy: string;
  nextReview: string;
}

interface CriticalTopicsTableProps {
  data: CriticalTopic[];
}

export default function CriticalTopicsTable({ data }: CriticalTopicsTableProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 overflow-x-auto">
      <h2 className="text-sm font-medium mb-4">Top 5 Tópicos Críticos</h2>
      <table className="min-w-full text-xs text-gray-200">
        <thead>
          <tr>
            <th className="px-2 py-1 text-left">Matéria</th>
            <th className="px-2 py-1 text-left">Tópico</th>
            <th className="px-2 py-1 text-left">% Acertos</th>
            <th className="px-2 py-1 text-left">Último estudo</th>
            <th className="px-2 py-1 text-left">Próxima revisão</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="border-t border-white/10">
              <td className="px-2 py-1">{item.subject}</td>
              <td className="px-2 py-1">{item.topic}</td>
              <td className="px-2 py-1">{item.accuracy}%</td>
              <td className="px-2 py-1">{item.lastStudy}</td>
              <td className="px-2 py-1">{item.nextReview}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
