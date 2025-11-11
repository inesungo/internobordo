import { useState } from "react";
import Navigation from "@/components/Navigation";
import MatchCard from "@/components/MatchCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "lucide-react";

const Fixture = () => {
  const [category, setCategory] = useState<"Masculino" | "Femenino">("Masculino");

  const fixtures = {
    Masculino: [
      {
        homeTeam: "Los Tigres",
        awayTeam: "Las Águilas",
        date: "15 Nov",
        time: "16:00",
        category: "Masculino" as const,
        status: "Próximo" as const,
      },
      {
        homeTeam: "Los Leones",
        awayTeam: "Los Pumas",
        homeScore: 3,
        awayScore: 2,
        date: "10 Nov",
        time: "16:00",
        category: "Masculino" as const,
        status: "Finalizado" as const,
      },
      {
        homeTeam: "Los Halcones",
        awayTeam: "Los Cóndores",
        homeScore: 1,
        awayScore: 1,
        date: "10 Nov",
        time: "18:00",
        category: "Masculino" as const,
        status: "Finalizado" as const,
      },
    ],
    Femenino: [
      {
        homeTeam: "Las Leonas",
        awayTeam: "Las Panteras",
        date: "15 Nov",
        time: "18:00",
        category: "Femenino" as const,
        status: "Próximo" as const,
      },
      {
        homeTeam: "Las Águilas",
        awayTeam: "Las Tigres",
        homeScore: 2,
        awayScore: 0,
        date: "10 Nov",
        time: "14:00",
        category: "Femenino" as const,
        status: "Finalizado" as const,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-primary mb-4 flex items-center gap-3">
            <Calendar className="h-12 w-12 text-secondary" />
            Fixture del Torneo
          </h1>
          <p className="text-xl text-muted-foreground">
            Consulta todos los partidos programados y resultados
          </p>
        </div>

        <Tabs defaultValue="Masculino" className="animate-scale-in">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="Masculino" onClick={() => setCategory("Masculino")}>
              Masculino
            </TabsTrigger>
            <TabsTrigger value="Femenino" onClick={() => setCategory("Femenino")}>
              Femenino
            </TabsTrigger>
          </TabsList>

          <TabsContent value="Masculino">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fixtures.Masculino.map((match, index) => (
                <MatchCard key={index} {...match} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="Femenino">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fixtures.Femenino.map((match, index) => (
                <MatchCard key={index} {...match} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Fixture;
