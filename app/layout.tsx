import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import ComingSoonModal from '@/components/ComingSoonModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Interno Bordo - Club Seminario',
  description: 'Campeonato Interno · Club Seminario',
  icons: {
    icon: '/assets/logo.png',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#7f1d1d' },
    { media: '(prefers-color-scheme: dark)', color: '#7f1d1d' },
  ],
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" style={{ backgroundColor: 'hsl(var(--primary))' }}>
      <body className={inter.className} style={{ backgroundColor: 'hsl(var(--primary))' }}>
        <TooltipProvider>
          <ComingSoonModal />
          {children}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}

