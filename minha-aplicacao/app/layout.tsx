import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import GradientBackground from "../components/background/GradientBackground";

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: "--font-instrument-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Codey.IA | Assistente de Programação", // Título atualizado
  description: "Assistente virtual de programação Codey.IA.", // Descrição atualizada
};

// 1. Componente Header Simples para o Layout
function AppHeader() {
    return (
        // 1. Fundo do Header: Usando 'bg-gray-900' (preto sólido) OU 'bg-base-dark'
        // 2. Centralização: Adicionado 'flex items-center justify-center' e 'h-16' para altura
        <header className="w-full bg-gray-900 p-4 shadow-lg relative z-20 flex items-center justify-center h-16">
            
            <h1 className="text-2xl font-extrabold text-white">
              <img src="logo.png" alt="Codey.IA Logo" className="inline-block w-13 h-13 mr-2 mb-1" />
                Codey.<span className="text-blue-600 font-black">IA</span>
            </h1>
            
        </header>
    );
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <body
        className={`antialiased font-instrument-sans`}
      >
        {/* 2. ESTRUTURA PRINCIPAL: COLUNA FLEXÍVEL */}
        <div className="flex flex-col h-[100vh] min-h-screen">
            
            {/* O Fundo Gradiente continua como background absoluto */}
            <GradientBackground />
            
            {/* NOVO HEADER */}
            <AppHeader />
            
            {/* 3. CONTEÚDO PRINCIPAL (OCUPA ESPAÇO RESTANTE) */}
            {/* flex-grow faz o conteúdo ocupar todo o espaço vertical restante */}
            <div className="flex w-full flex-grow items-center justify-center relative z-10 p-4">
                {children}
            </div>
            
        </div>
      </body>
    </html>
  );
}