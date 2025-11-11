import { Trophy, Calendar, TrendingUp, Users, Instagram, Camera, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Navigation from "@/components/Navigation";
import MatchCard from "@/components/MatchCard";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const upcomingMatches = [
    {
      homeTeam: "Los Tigres",
      awayTeam: "Las Águilas",
      date: "15 Nov",
      time: "16:00",
      category: "Masculino" as const,
      status: "Próximo" as const,
    },
    {
      homeTeam: "Las Leonas",
      awayTeam: "Las Panteras",
      date: "15 Nov",
      time: "18:00",
      category: "Femenino" as const,
      status: "Próximo" as const,
    },
  ];

  const news = [
    {
      title: "¡Arranca el Torneo Interno Bordo 2024!",
      date: "10 Nov 2024",
      excerpt: "Más de 20 equipos participarán en esta nueva edición del torneo más esperado del año.",
    },
    {
      title: "Inauguración con récord de asistencia",
      date: "08 Nov 2024",
      excerpt: "La jornada inaugural superó todas las expectativas con más de 500 espectadores.",
    },
    {
      title: "Nuevos sponsors se suman al torneo",
      date: "05 Nov 2024",
      excerpt: "Importantes marcas locales apoyan el desarrollo del fútbol en el Club Seminario.",
    },
  ];

  const sponsors = [
    { name: "Sponsor 1" },
    { name: "Sponsor 2" },
    { name: "Sponsor 3" },
    { name: "Sponsor 4" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Carousel */}
      <section className="relative overflow-hidden">
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
              <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
                
                <div className="relative z-10 text-center px-4 animate-fade-in">
                  <h1 className="text-6xl md:text-8xl font-bold text-secondary mb-4 drop-shadow-lg">
                    INTERNO BORDO
                  </h1>
                  <p className="text-2xl md:text-3xl text-secondary/90 mb-8">
                    Torneo de Fútbol - Club Seminario
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg px-8"
                      onClick={() => navigate("/fixture")}
                    >
                      Ver Fixture
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-secondary text-secondary hover:bg-secondary/10 font-bold text-lg px-8"
                      onClick={() => navigate("/standings")}
                    >
                      Tabla de Posiciones
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Slide 2: Fotos */}
            <CarouselItem>
              <div className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent/20 to-primary/30">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
                
                <div className="relative z-10 text-center px-4 animate-fade-in">
                  <Camera className="h-24 w-24 text-secondary mx-auto mb-6 drop-shadow-lg" />
                  <h2 className="text-5xl md:text-7xl font-bold text-secondary mb-4 drop-shadow-lg">
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
              <div className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/40 to-accent/30">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
                
                <div className="relative z-10 text-center px-4 animate-fade-in">
                  <Share2 className="h-24 w-24 text-secondary mx-auto mb-6 drop-shadow-lg" />
                  <h2 className="text-5xl md:text-7xl font-bold text-secondary mb-4 drop-shadow-lg">
                    SEGUÍ EL TORNEO
                  </h2>
                  <p className="text-xl md:text-2xl text-secondary/90 mb-8 max-w-2xl mx-auto">
                    Unite a nuestra comunidad en redes sociales
                  </p>
                  <Button
                    size="lg"
                    className="bg-secondary text-primary hover:bg-secondary/90 font-bold text-lg px-8"
                    onClick={() => window.open("https://instagram.com", "_blank")}
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
      <section className="container mx-auto px-4 -mt-20 relative z-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Trophy, label: "Equipos", value: "24", color: "text-secondary" },
            { icon: Calendar, label: "Partidos", value: "156", color: "text-secondary" },
            { icon: Users, label: "Jugadores", value: "400+", color: "text-secondary" },
          ].map((stat, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-xl transition-all animate-scale-in">
              <CardContent className="p-6 text-center">
                <stat.icon className={`h-12 w-12 mx-auto mb-3 ${stat.color}`} />
                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
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
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/fixture")}
            className="border-primary text-primary hover:bg-primary/10"
          >
            Ver Fixture Completo
          </Button>
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
            onClick={() => window.open("https://instagram.com", "_blank")}
          >
            <Instagram className="mr-2 h-5 w-5" />
            Seguinos en Instagram
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
