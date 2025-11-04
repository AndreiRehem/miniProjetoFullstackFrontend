import React from 'react';
// Importe o componente da ilustração
import DevIllustration from '../components/illustrations/DevIllustration'; 

export default function LoginPage() {
  return (
    // Card Fundo: Mantido Cinza/Fosco
    <div className="flex bg-gray-700/50 backdrop-blur-md rounded-xl shadow-2xl max-w-5xl w-full border border-gray-500/50 overflow-hidden">
      
      {/* 1. COLUNA ESQUERDA: FORMULÁRIO DE LOGIN */}
      <div className="w-full p-8 flex flex-col justify-center">
        
        <h1 className="text-3xl font-bold mb-6 text-white text-center sm:text-left">Login</h1>
        
        <form className="space-y-4">
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="seu@email.com"
              // Foco ajustado para 'focus:ring-cyan-400' (Azul/Ciano)
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" 
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
              // Foco ajustado para 'focus:ring-cyan-400' (Azul/Ciano)
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
          
          <button
            type="submit"
            // Fundo: 'bg-emerald-400' (Verde Água/Ação)
            // Texto: 'text-gray-950' (Quase Preto, para 'base-dark')
            // Hover: 'hover:bg-cyan-500' (Azul Principal)
            // Sombra: 'hover:shadow-cyan-500/50' (Sombra Azul Principal)
            className="
              w-full 
              bg-emerald-400 
              text-gray-950 
              font-semibold 
              py-2 
              rounded-lg 
              transition 
              duration-300 
              ease-in-out 
              hover:bg-cyan-500 
              hover:text-white
              hover:shadow-lg 
              hover:shadow-cyan-500/50 
              hover:scale-[1.01]
            "
          >
            Entrar
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <a 
            href="cadastro" 
            // Hover: 'hover:text-emerald-400' (Verde Água/Ação)
            className="text-sm text-white hover:text-emerald-400"
          >
            Não possui uma conta? Cadastre-se
          </a>
        </div>
      </div>
      <DevIllustration />
      
    </div>
  );
}