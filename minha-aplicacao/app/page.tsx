import React from 'react';
// Importe o componente da ilustração
import DevIllustration from '../components/illustrations/DevIllustration'; 

export default function LoginPage() {
  return (
    <div className="flex bg-gray-700/10 backdrop-blur-md rounded-xl shadow-2xl max-w-5xl w-full border border-gray-500/50 overflow-hidden">
      
      {/* 1. COLUNA ESQUERDA: FORMULÁRIO DE LOGIN */}
      {/* w-full p-8 garante que o formulário ocupe toda a sua metade na grid */}
      <div className="w-full p-8 flex flex-col justify-center">
        
        <h1 className="text-3xl font-bold mb-6 text-white text-center sm:text-left">Login</h1>
        
        <form className="space-y-4"> {/* Adicionado space-y-4 para espaçamento consistente */}
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="seu@email.com"
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue" 
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-bold text-white mb-1">
              Senha
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-white/30 hover:bg-brand-blue text-base-dark font-semibold py-2 rounded-lg transition duration-300 ease-in-out hover:shadow-lg hover:shadow-brand-blue/50 hover:scale-[1.01]"
          >
            Entrar
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <a href="cadastro" className="text-sm text-white hover:text-highlight-aqua">
            Não possui uma conta? Cadastre-se
          </a>
        </div>
      </div>
      <DevIllustration />
      
    </div>
  );
}