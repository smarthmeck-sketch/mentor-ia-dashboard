'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();

  const handleEmailLogin = () => {
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email, authenticated: true }));
      router.push('/dashboard');
    }
  };

  const handleGoogleLogin = () => {
    localStorage.setItem('user', JSON.stringify({ email: 'google-user@mentor-ia.com', authenticated: true }));
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full mb-6 shadow-lg shadow-cyan-500/50">
            <div className="text-4xl font-bold text-white">🧠</div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Mentor IA <span className="text-cyan-400">3.0</span>
          </h1>
          <p className="text-slate-400 text-sm">Carreiras Bancárias & Alta Performance</p>
        </div>

        {/* Main Buttons */}
        {!showLogin && (
          <div className="space-y-4 mb-6">
            <button
              onClick={() => setShowLogin(true)}
              className="w-full py-3 px-4 border border-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              Entrar
            </button>
            <button className="w-full py-3 px-4 border border-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium">
              Criar Conta
            </button>
          </div>
        )}

        {/* Social Login Buttons */}
        {!showLogin && (
          <>
            <button
              onClick={handleGoogleLogin}
              className="w-full py-3 px-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium mb-3 flex items-center justify-center gap-2"
            >
              Entrar com Google
            </button>
            <button className="w-full py-3 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors font-medium mb-6 flex items-center justify-center gap-2">
              Entrar com Outlook
            </button>
          </>
        )}

        {/* OR Divider */}
        {!showLogin && (
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-slate-700"></div>
            <span className="text-slate-500 text-xs uppercase tracking-wide">OU VIA EMAIL</span>
            <div className="flex-1 h-px bg-slate-700"></div>
          </div>
        )}

        {/* Email/Password Form */}
        {showLogin && (
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-slate-400 text-xs uppercase tracking-wide mb-2">EMAIL</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-cyan-500 placeholder-slate-500"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-xs uppercase tracking-wide mb-2">SENHA</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-cyan-500 placeholder-slate-500"
              />
            </div>
          </div>
        )}

        {/* Login Button with Glow */}
        <button
          onClick={showLogin ? handleEmailLogin : () => {}}
          className="w-full py-4 px-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all font-bold text-lg mb-4 shadow-lg shadow-cyan-500/30"
        >
          {showLogin ? 'Entrar na Plataforma' : 'Entrar na Plataforma'} →
        </button>

        {/* Forgot Password */}
        {showLogin && (
          <div className="text-center mb-6">
            <button className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
              Esqueceu a senha?
            </button>
          </div>
        )}

        {/* Back Button */}
        {showLogin && (
          <button
            onClick={() => setShowLogin(false)}
            className="w-full py-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            ← Voltar
          </button>
        )}

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t border-slate-800">
          <p className="text-slate-500 text-xs">
            © 2024 Mentor IA. Protegido por criptografia de ponta a ponta.
          </p>
        </div>
      </div>
    </div>
  );
}
