import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentor IA – Painel Analítico',
  description: 'Dashboard de estudos e desempenho para concursos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="dark">
      <body className="bg-[#050814] text-gray-100">
        {children}
      </body>
    </html>
  );
}
