'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Instagram, Calendar } from 'lucide-react';
import Countdown from '@/components/Countdown';

export default function ComingSoonModal() {
  // Por ahora, el modal siempre se muestra
  // TODO: Agregar lógica para ocultarlo cuando haya datos cargados

  useEffect(() => {
    console.log('ComingSoonModal renderizado');
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden" 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw', 
        height: '100dvh',
        minHeight: '-webkit-fill-available',
        backgroundColor: 'hsl(var(--primary))',
        zIndex: 99999,
        margin: 0,
        padding: 0
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
      <div className="relative z-10 text-center px-2 sm:px-4 max-w-4xl mx-auto w-full" style={{ paddingTop: 'clamp(1rem, 3vh, 2rem)', paddingBottom: 'clamp(0.5rem, 2vh, 1rem)' }}>
        {/* Cuenta regresiva pequeña arriba - sin marco, más grande en mobile */}
        <div className="flex justify-center mb-1.5 sm:mb-2 px-2">
          <div className="scale-110 sm:scale-100">
            <Countdown targetDate="2025-11-17" />
          </div>
        </div>

        {/* Logo - más grande en mobile */}
        <div className="mb-2 sm:mb-3 flex justify-center">
          <Image
            src="/assets/logo_interno.png"
            alt="Interno Bordo"
            width={350}
            height={175}
            className="object-contain drop-shadow-2xl"
            style={{ width: 'clamp(12rem, 25vw, 18rem)', height: 'auto' }}
            priority
          />
        </div>

        {/* Título "Próximamente" */}
        <h1 className="font-bold text-secondary mb-1.5 sm:mb-2 drop-shadow-2xl px-2" style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}>
          PRÓXIMAMENTE
        </h1>

        {/* Subtítulo */}
        <p className="text-secondary/90 mb-2 sm:mb-3 max-w-2xl mx-auto drop-shadow-lg px-2" style={{ fontSize: 'clamp(0.75rem, 2.5vw, 1rem)' }}>
            Toda la info, acá. Muy pronto.
        </p>

        {/* Card del sorteo - Diseño visual */}
        <div className="mb-2 sm:mb-3 px-2">
          <div className="relative bg-gradient-to-br from-secondary/30 via-secondary/25 to-secondary/20 backdrop-blur-md rounded-xl sm:rounded-2xl border-2 border-secondary/50 shadow-2xl max-w-sm mx-auto overflow-hidden group hover:border-secondary/70 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300" style={{ padding: 'clamp(0.75rem, 2vw, 1.25rem)' }}>
            {/* Efecto de brillo de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Contenido */}
            <div className="relative z-10 flex flex-col items-center" style={{ gap: 'clamp(0.5rem, 1.5vw, 0.75rem)' }}>
              {/* Icono Instagram */}
              <div className="bg-secondary/20 rounded-full border-2 border-secondary/40" style={{ padding: 'clamp(0.4rem, 1.2vw, 0.6rem)' }}>
                <Instagram className="text-secondary" style={{ width: 'clamp(1.25rem, 3.5vw, 1.75rem)', height: 'clamp(1.25rem, 3.5vw, 1.75rem)' }} />
              </div>
              
              {/* Hora destacada */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-0.5">
                  <Calendar className="text-secondary/80" style={{ width: 'clamp(0.75rem, 2vw, 1rem)', height: 'clamp(0.75rem, 2vw, 1rem)' }} />
                  <span className="text-secondary/70 uppercase tracking-wider font-semibold" style={{ fontSize: 'clamp(0.6rem, 1.8vw, 0.75rem)' }}>Sorteo Fixture</span>
                </div>
                <div className="text-secondary/90 font-semibold mb-0.5" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.875rem)' }}>
                  Jueves 13
                </div>
                <div className="font-black text-secondary drop-shadow-lg mb-1" style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)' }}>
                  20:00
                </div>
                <div className="text-secondary/80 font-medium" style={{ fontSize: 'clamp(0.65rem, 1.8vw, 0.8rem)' }}>En vivo</div>
              </div>
              
              {/* Separador decorativo */}
              <div className="bg-secondary/40 rounded-full" style={{ width: 'clamp(2.5rem, 8vw, 3rem)', height: '0.125rem', margin: '0.5rem 0' }} />
              
              {/* Botón Instagram */}
              <a
                href="https://www.instagram.com/internobordo?igsh=YXp0N2F0ZWszMTU0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-secondary text-primary rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ 
                  padding: 'clamp(0.4rem, 1.5vw, 0.6rem) clamp(1rem, 3vw, 1.5rem)',
                  fontSize: 'clamp(0.7rem, 2vw, 0.875rem)'
                }}
              >
                <Instagram style={{ width: 'clamp(0.875rem, 2.5vw, 1rem)', height: 'clamp(0.875rem, 2.5vw, 1rem)' }} />
                <span>@internobordo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Decoración adicional */}
        <div className="flex justify-center gap-1.5 mt-2 sm:mt-3">
          <div className="bg-secondary rounded-full animate-pulse" style={{ width: 'clamp(0.25rem, 1vw, 0.375rem)', height: 'clamp(0.25rem, 1vw, 0.375rem)' }} />
          <div className="bg-secondary rounded-full animate-pulse" style={{ width: 'clamp(0.25rem, 1vw, 0.375rem)', height: 'clamp(0.25rem, 1vw, 0.375rem)', animationDelay: '150ms' }} />
          <div className="bg-secondary rounded-full animate-pulse" style={{ width: 'clamp(0.25rem, 1vw, 0.375rem)', height: 'clamp(0.25rem, 1vw, 0.375rem)', animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}

