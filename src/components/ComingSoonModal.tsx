'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Countdown from '@/components/Countdown';

export default function ComingSoonModal() {
  // Por ahora, el modal siempre se muestra
  // TODO: Agregar lógica para ocultarlo cuando haya datos cargados

  useEffect(() => {
    console.log('ComingSoonModal renderizado');
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 bottom-0 z-[99999] flex items-center justify-center overflow-hidden" 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw', 
        height: '100vh',
        backgroundColor: 'hsl(var(--primary))',
        zIndex: 99999
      }}
    >
      {/* Fondo con patrón */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(/assets/foto2.jpeg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
      
      {/* Contenido centrado sin scroll */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto w-full py-0 sm:py-0">
        {/* Cuenta regresiva pequeña arriba - sin marco, más grande en mobile */}
        <div className="flex justify-center mb-2 sm:mb-3 px-2">
          <div className="scale-125 sm:scale-100">
            <Countdown targetDate="2025-11-17" />
          </div>
        </div>

        {/* Logo - más grande en mobile */}
        <div className="mb-3 sm:mb-4 flex justify-center">
          <Image
            src="/assets/logo_interno.png"
            alt="Interno Bordo"
            width={350}
            height={175}
            className="object-contain drop-shadow-2xl w-[300px] h-auto sm:w-[300px] md:w-[350px]"
            priority
          />
        </div>

        {/* Título "Próximamente" */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-2 sm:mb-3 drop-shadow-2xl px-2">
          PRÓXIMAMENTE
        </h1>

        {/* Subtítulo */}
        <p className="text-sm sm:text-base md:text-lg text-secondary/90 mb-4 sm:mb-5 max-w-2xl mx-auto drop-shadow-lg px-2">
            Toda la info, acá. Muy pronto.
        </p>

        {/* Decoración adicional */}
        <div className="flex justify-center gap-2 mt-4 sm:mt-6 md:mt-8">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full animate-pulse" />
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}

