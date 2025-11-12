'use client';

import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-[#0a1929] text-white py-6 sm:py-8 md:py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="font-bold text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">
          © 2025 Club Seminario - Interno Bordo
        </p>
        <p className="text-white/80 text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6">
          Torneo de Fútbol
        </p>
        <Button
          variant="outline"
          size="sm"
          className="border-white bg-white text-[#0a1929] hover:bg-white/90 text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-10"
          onClick={() => window.open('https://www.instagram.com/internobordo?igsh=YXp0N2F0ZWszMTU0', '_blank')}
        >
          <Instagram className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
          Seguinos en Instagram
        </Button>
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
          <p className="text-white/50 text-xs">
            Desarrollado por{' '}
            <span className="text-white/70 font-medium">Ines Ungo</span>
          </p>
          <p className="text-white/50 text-xs mt-2">
            <a 
              href="tel:+59891035863" 
              className="text-white/70 hover:text-white transition-colors"
            >
              +598 91 035 863
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

