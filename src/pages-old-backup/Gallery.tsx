import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";

const Gallery = () => {
  const photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-primary mb-4 flex items-center gap-3">
            <Camera className="h-12 w-12 text-secondary" />
            Galería de Fotos
          </h1>
          <p className="text-xl text-muted-foreground">
            Los mejores momentos del Torneo Interno Bordo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
          {photos.map((photo) => (
            <Card
              key={photo}
              className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Camera className="h-16 w-16 text-muted-foreground/30" />
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Más fotos próximamente. ¡Seguí el torneo en nuestras redes sociales!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
