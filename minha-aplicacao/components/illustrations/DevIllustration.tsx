import React from 'react';
import Image from 'next/image'; // Usando o componente Image do Next.js para otimização

export default function DevIllustration() {
  return (
    <div className="hidden lg:block w-1/2 p-8"> 
      <Image
        src="dev.svg" // O caminho do seu arquivo SVG
        alt="Developer illustration"
        width={500}
        height={500}
        className="object-contain w-full h-auto"
        priority // Para garantir que seja carregado rapidamente
      />
    </div>
  );
}