import React from "react";

export default function CadastroPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full h-screen overflow-hidden">
      {/* 🧩 Card de Cadastro */}
      <div className="flex bg-gray-800/90 backdrop-blur-md rounded-xl shadow-2xl max-w-3xl w-full border border-gray-700/60 overflow-hidden">
        <div className="w-full p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6 text-white text-center sm:text-left">
            Crie sua conta
          </h1>

          <form className="space-y-4">
            {/* E-MAIL */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-white mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="seu@email.com"
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
            </div>

            {/* SENHA */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-bold text-white mb-1"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
            </div>

            {/* CONFIRMAR SENHA */}
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-bold text-white mb-1"
              >
                Confirmar Senha
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="********"
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                required
              />
            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              className="w-full bg-emerald-400 text-gray-950 font-semibold py-2 rounded-lg transition duration-300 ease-in-out hover:cursor-pointer hover:bg-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-[1.01]"
            >
              Cadastrar
            </button>
          </form>

          {/* LINK LOGIN */}
          <div className="mt-4 text-center">
            <a
              href="/"
              className="text-sm text-white hover:text-emerald-400"
            >
              Já possui uma conta? Faça login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
