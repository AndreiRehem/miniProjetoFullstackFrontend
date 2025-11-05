import React from "react";
import TextType from "../components/shared/TextType";
import MetaBalls from "@/components/shared/MetaBalls";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full">
      <div className="text-center mb-4">
        <TextType
          text={[
            "Bem-vindo(a) de volta ao Codey.IA ",
            "Continue sua jornada de código com a gente",
            "Conecte-se e comece a criar!",
          ]}
          typingSpeed={60}
          pauseDuration={1200}
          showCursor={true}
          cursorCharacter="_"
          className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg tracking-wide"
        />
      </div>

      {/* 🧩 Card principal */}
      <div className="flex bg-gray-800 backdrop-blur-md rounded-xl shadow-2xl max-w-5xl w-full border border-gray-700/60 overflow-hidden">
        {/* 📝 COLUNA ESQUERDA: LOGIN */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6 text-white text-center sm:text-left">
            Login
          </h1>

          <form className="space-y-4">
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
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <div className="mb-6">
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
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-400 text-gray-950 font-semibold py-2 rounded-lg transition duration-300 ease-in-out hover:cursor-pointer hover:bg-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-[1.01]"
            >
              Entrar
            </button>
          </form>

          <div className="mt-4 text-center">
            <a
              href="cadastro"
              className="text-sm text-white hover:text-emerald-400"
            >
              Não possui uma conta? Cadastre-se
            </a>
          </div>
        </div>

        <div className="hidden md:flex relative w-1/2 items-center justify-center">
          <MetaBalls
            color="#ffffff"
            cursorBallColor="#00ffff"
            cursorBallSize={2}
            ballCount={18}
            animationSize={30}
            enableMouseInteraction={true}
            enableTransparency={true}
            hoverSmoothness={0.08}
            clumpFactor={1}
            speed={0.1}
          />

          {/* brilho leve por cima */}
          <div className="absolute inset-0 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
