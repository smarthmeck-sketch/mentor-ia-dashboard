export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Mentor IA Dashboard</h1>
      <p className="text-lg text-gray-600 mb-8">Painel Analítico da Plataforma Educacional</p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-sm font-semibold text-gray-600">Total de Alunos</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">280</p>
          <p className="text-sm text-green-600 mt-1">+12% vs mês anterior</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-sm font-semibold text-gray-600">Cursos Ativos</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">5</p>
          <p className="text-sm text-green-600 mt-1">+2 novos cursos</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-sm font-semibold text-gray-600">Taxa de Conclusão</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">72%</p>
          <p className="text-sm text-green-600 mt-1">+8% de crescimento</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-sm font-semibold text-gray-600">Certificados Emitidos</h3>
          <p className="text-3xl font-bold text-orange-600 mt-2">156</p>
          <p className="text-sm text-green-600 mt-1">+24 este mês</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Visão Geral</h2>
        <p className="text-gray-600">Seu dashboard está funcionando corretamente! 🎉</p>
        <p className="text-gray-600 mt-2">Componentes disponíveis estão sendo integrados gradualmente.</p>
      </div>
    </div>
  );
}
