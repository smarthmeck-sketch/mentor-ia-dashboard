import Link from 'next/link';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/trilha', label: 'Trilha de Hoje' },
  { href: '/revisoes', label: 'Revisões' },
  { href: '/topicos', label: 'Tópicos & Desempenho' },
  { href: '/gamificacao', label: 'Gamificação' },
  { href: '/configuracoes', label: 'Configurações' },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-black/40 border-r border-white/5 p-4">
      <div className="text-lg font-semibold mb-8">
        Mentor <span className="text-indigo-400">IA</span>
      </div>
      <nav className="space-y-2 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-3 py-2 rounded-xl hover:bg-white/10"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
