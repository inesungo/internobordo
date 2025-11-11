'use client';

import { Trophy, Calendar, Users, Instagram, Camera, Share2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import NavBar from '@/components/NavBar';
import MatchCard from '@/components/MatchCard';
import { getData } from '@/lib/data';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export default function HomePage() {
  const [upcomingMatches, setUpcomingMatches] = useState<any[]>([]);
  const [stats, setStats] = useState({ equipos: 0, partidos: 0, jugadores: 0 });

  useEffect(() => {
    let mounted = true;
    
    async function loadData() {
      try {
        const data = await getData();
        
        if (!mounted) return;
        
        console.log('Datos cargados:', {
          equipos: data.equipos.length,
          partidos: data.partidos.length,
          jugadores: data.jugadores?.length || 0,
          jugadoresData: data.jugadores,
        });
        
        setStats({
          equipos: data.equipos.length,
          partidos: data.partidos.length,
          jugadores: data.jugadores?.length || 0,
        });

        // Obtener próximos partidos (sin resultado)
        const partidosSinResultado = data.partidos
          .filter((p) => !data.resultados.find((r) => r.partido_id === p.id))
          .sort((a, b) => {
            const dateA = dayjs(`${a.fecha} ${a.hora}`);
            const dateB = dayjs(`${b.fecha} ${b.hora}`);
            return dateA.diff(dateB);
          })
          .slice(0, 2);

        const matches = partidosSinResultado.map((p) => {
          const local = data.equipos.find((e) => e.id === p.local_id);
          const visitante = data.equipos.find((e) => e.id === p.visitante_id);
          return {
            homeTeam: local?.nombre || 'TBD',
            awayTeam: visitante?.nombre || 'TBD',
            date: dayjs(p.fecha).format('DD MMM'),
            time: p.hora,
            category: (p.categoria || 'Masculino') as 'Masculino' | 'Femenino',
            status: 'Próximo' as const,
          };
        });

        if (mounted) {
          setUpcomingMatches(matches.length > 0 ? matches : [
            {
              homeTeam: 'Los Tigres',
              awayTeam: 'Las Águilas',
              date: '15 Nov',
              time: '16:00',
              category: 'Masculino' as const,
              status: 'Próximo' as const,
            },
            {
              homeTeam: 'Las Leonas',
              awayTeam: 'Las Panteras',
              date: '15 Nov',
              time: '18:00',
              category: 'Femenino' as const,
              status: 'Próximo' as const,
            },
          ]);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    }
    
    loadData();
    
    return () => {
      mounted = false;
    };
  }, []);

  const sponsors = [
    { name: 'Sponsor 1' },
    { name: 'Sponsor 2' },
    { name: 'Sponsor 3' },
    { name: 'Sponsor 4' },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Carousel */}
      <section className="relative">
        <NavBar />
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {/* Slide 1: Interno Bordo */}
            <CarouselItem>
              <div 
                className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: 'url(/assets/foto2.jpeg)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-accent/60" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
                
                <div className="relative z-30 text-center px-4 animate-fade-in mb-16">
                  <div className="mb-4 flex justify-center">
                    <Image
                      src="/assets/logo_interno.png"
                      alt="Interno Bordo"
                      width={400}
                      height={200}
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link href="/fixture">
                      <Button
                        size="lg"
                        className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg px-8"
                      >
                        Ver Fixture
                      </Button>
                    </Link>
                    <Link href="/tabla">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-secondary text-secondary hover:bg-secondary/10 font-bold text-lg px-8"
                      >
                        Tabla de Posiciones
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Slide 2: Fotos */}
            <CarouselItem>
              <div 
                className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: 'url(/assets/foto1.jpeg)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-accent/60" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
                
                <div className="relative z-10 text-center px-4 animate-fade-in">
                  <Camera className="h-24 w-24 text-secondary mx-auto mb-6 drop-shadow-lg" />
                  <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-4 drop-shadow-lg">
                    ¡NO TE PIERDAS LAS FOTOS!
                  </h2>
                  <p className="text-xl md:text-2xl text-secondary/90 mb-8 max-w-2xl mx-auto">
                    Los mejores momentos del torneo capturados para vos
                  </p>
                  <Button
                    size="lg"
                    className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg px-8"
                  >
                    Ver Galería
                  </Button>
                </div>
              </div>
            </CarouselItem>

            {/* Slide 3: Redes Sociales */}
            <CarouselItem>
              <div 
                className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: 'url(/assets/foto3.jpeg)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-accent/60" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
                
                <div className="relative z-10 text-center px-4 animate-fade-in">
                  <Share2 className="h-24 w-24 text-secondary mx-auto mb-6 drop-shadow-lg" />
                  <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-4 drop-shadow-lg">
                    SEGUÍ EL TORNEO
                  </h2>
                  <p className="text-xl md:text-2xl text-secondary/90 mb-8 max-w-2xl mx-auto">
                    Unite a nuestra comunidad en redes sociales
                  </p>
                  <Button
                    size="lg"
                    className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg px-8"
                    onClick={() => window.open('https://www.instagram.com/internobordo?igsh=YXp0N2F0ZWszMTU0', '_blank')}
                  >
                    <Instagram className="mr-2 h-5 w-5" />
                    Seguinos en Instagram
                  </Button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-secondary/90 text-primary border-0 hover:bg-secondary" />
          <CarouselNext className="right-4 bg-secondary/90 text-primary border-0 hover:bg-secondary" />
        </Carousel>
      </section>

      {/* Quick Stats */}
      <section className="container mx-auto px-4 -mt-32 relative z-10 mb-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Trophy, label: 'Equipos', value: stats.equipos || 0, color: 'text-secondary', suffix: '', href: '/equipos' },
            { icon: Calendar, label: 'Partidos', value: stats.partidos || 0, color: 'text-secondary', suffix: '', href: '/fixture' },
            { icon: Users, label: 'Jugadores', value: stats.jugadores || 0, color: 'text-secondary', suffix: ' ', href: '/equipos' },
          ].map((stat, index) => (
            <Link key={index} href={stat.href} className="block">
              <Card className="bg-card/95 backdrop-blur-sm border-border hover:shadow-xl transition-all animate-scale-in cursor-pointer hover:scale-105">
                <CardContent className="p-6 text-center">
                  <stat.icon className={`h-12 w-12 mx-auto mb-3 ${stat.color}`} />
                  <p className="text-3xl font-bold text-primary mb-1">
                    {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                    {stat.suffix || ''}
                  </p>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Próximos Partidos */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-primary mb-8 flex items-center gap-3">
          <Calendar className="h-10 w-10 text-secondary" />
          Próximos Partidos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingMatches.map((match, index) => (
            <MatchCard key={index} {...match} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/fixture">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Ver Fixture Completo
            </Button>
          </Link>
        </div>
      </section>

      {/* Sponsors */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">Nuestros Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="p-8 flex items-center justify-center">
                <div className="w-full h-24 bg-muted/50 rounded flex items-center justify-center">
                  <p className="text-muted-foreground font-semibold">{sponsor.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-secondary py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-4">© 2025 Club Seminario - Interno Bordo</p>
          <p className="text-secondary/80 mb-6">Torneo de Fútbol</p>
          <Button
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary/10"
            onClick={() => window.open('https://www.instagram.com/internobordo?igsh=YXp0N2F0ZWszMTU0', '_blank')}
          >
            <Instagram className="mr-2 h-5 w-5" />
            Seguinos en Instagram
          </Button>
        </div>
      </footer>
    </div>
  );
}


