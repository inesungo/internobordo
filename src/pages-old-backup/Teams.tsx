import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Users, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Teams = () => {
  const [category, setCategory] = useState<"Masculino" | "Femenino">("Masculino");

  const teamsMasculino = [
    {
      name: "Los Tigres",
      players: [
        { name: "Juan Pérez", number: 10, position: "Delantero" },
        { name: "Martín González", number: 1, position: "Arquero" },
        { name: "Diego Martínez", number: 7, position: "Mediocampista" },
        { name: "Lucas Ramírez", number: 4, position: "Defensor" },
      ],
    },
    {
      name: "Los Leones",
      players: [
        { name: "Carlos López", number: 9, position: "Delantero" },
        { name: "Pablo Rodríguez", number: 1, position: "Arquero" },
        { name: "Fernando Silva", number: 8, position: "Mediocampista" },
        { name: "Andrés Torres", number: 3, position: "Defensor" },
      ],
    },
  ];

  const teamsFemenino = [
    {
      name: "Las Leonas",
      players: [
        { name: "María García", number: 10, position: "Delantera" },
        { name: "Patricia Morales", number: 1, position: "Arquera" },
        { name: "Ana Torres", number: 7, position: "Mediocampista" },
        { name: "Laura Ruiz", number: 4, position: "Defensora" },
      ],
    },
    {
      name: "Las Águilas",
      players: [
        { name: "Laura Sánchez", number: 9, position: "Delantera" },
        { name: "Gabriela Ruiz", number: 1, position: "Arquera" },
        { name: "Carmen Díaz", number: 8, position: "Mediocampista" },
        { name: "Sofía Castro", number: 3, position: "Defensora" },
      ],
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const renderTeams = (teams: typeof teamsMasculino) => (
    <Accordion type="single" collapsible className="space-y-4">
      {teams.map((team, index) => (
        <AccordionItem 
          key={index} 
          value={`team-${index}`}
          className="border-2 border-primary/20 rounded-lg overflow-hidden bg-card hover:shadow-xl transition-all"
        >
          <AccordionTrigger className="hover:no-underline px-6 py-6 bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all">
            <div className="flex items-center gap-4 flex-1">
              <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-primary">{team.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {team.players.length} Jugadores
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {team.players.map((player, pIndex) => (
                <div
                  key={pIndex}
                  className="relative bg-gradient-to-br from-muted/40 to-muted/20 rounded-lg p-4 hover:from-muted/60 hover:to-muted/40 transition-all hover:scale-105 border border-border group"
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <Avatar className="h-16 w-16 bg-gradient-to-br from-primary to-accent border-2 border-secondary group-hover:scale-110 transition-transform">
                      <AvatarFallback className="text-secondary font-bold text-lg">
                        {getInitials(player.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute top-2 right-2 bg-secondary text-primary font-bold text-xs rounded-full w-7 h-7 flex items-center justify-center shadow-md">
                      {player.number}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm text-foreground leading-tight">{player.name}</p>
                      <p className="text-xs text-muted-foreground mt-1 font-medium">{player.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-primary mb-4 flex items-center gap-3">
            <Users className="h-12 w-12 text-secondary" />
            Equipos
          </h1>
          <p className="text-xl text-muted-foreground">
            Conoce todos los equipos y sus integrantes
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

          <TabsContent value="Masculino">{renderTeams(teamsMasculino)}</TabsContent>

          <TabsContent value="Femenino">{renderTeams(teamsFemenino)}</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Teams;
