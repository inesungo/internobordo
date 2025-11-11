import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Shield } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Stats = () => {
  const [category, setCategory] = useState<"Masculino" | "Femenino">("Masculino");

  const scorersMasculino = [
    { name: "Juan Pérez", team: "Los Tigres", goals: 15 },
    { name: "Carlos López", team: "Los Leones", goals: 12 },
    { name: "Miguel Ángel", team: "Las Águilas", goals: 11 },
    { name: "Roberto Silva", team: "Los Pumas", goals: 10 },
    { name: "Diego Martínez", team: "Los Tigres", goals: 9 },
  ];

  const goalkeepersMasculino = [
    { name: "Martín González", team: "Los Tigres", saves: 45, goals: 8 },
    { name: "Pablo Rodríguez", team: "Los Leones", saves: 42, goals: 10 },
    { name: "Lucas Fernández", team: "Las Águilas", saves: 38, goals: 12 },
    { name: "Andrés Castro", team: "Los Pumas", saves: 35, goals: 13 },
  ];

  const scorersFemenino = [
    { name: "María García", team: "Las Leonas", goals: 18 },
    { name: "Laura Sánchez", team: "Las Águilas", goals: 14 },
    { name: "Sofía Ramírez", team: "Las Panteras", goals: 12 },
    { name: "Ana Torres", team: "Las Leonas", goals: 11 },
    { name: "Carmen Díaz", team: "Las Tigres", goals: 9 },
  ];

  const goalkeepersFemenino = [
    { name: "Patricia Morales", team: "Las Leonas", saves: 48, goals: 6 },
    { name: "Gabriela Ruiz", team: "Las Águilas", saves: 44, goals: 8 },
    { name: "Daniela Flores", team: "Las Panteras", saves: 40, goals: 10 },
    { name: "Valeria Castro", team: "Las Tigres", saves: 36, goals: 12 },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-primary mb-4">Estadísticas</h1>
          <p className="text-xl text-muted-foreground">
            Goleadores y arqueros menos vencidos del torneo
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

          <TabsContent value="Masculino" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <Target className="h-8 w-8 text-secondary" />
                  Tabla de Goleadores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scorersMasculino.map((scorer, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-secondary w-8">{index + 1}</div>
                        <Avatar className="h-12 w-12 bg-primary">
                          <AvatarFallback className="text-secondary font-bold">
                            {getInitials(scorer.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-foreground">{scorer.name}</p>
                          <p className="text-sm text-muted-foreground">{scorer.team}</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-primary">{scorer.goals}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <Shield className="h-8 w-8 text-accent" />
                  Arqueros Menos Vencidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {goalkeepersMasculino.map((gk, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-accent w-8">{index + 1}</div>
                        <Avatar className="h-12 w-12 bg-accent">
                          <AvatarFallback className="text-accent-foreground font-bold">
                            {getInitials(gk.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-foreground">{gk.name}</p>
                          <p className="text-sm text-muted-foreground">{gk.team}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-accent">{gk.goals}</p>
                        <p className="text-xs text-muted-foreground">{gk.saves} atajadas</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="Femenino" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <Target className="h-8 w-8 text-secondary" />
                  Tabla de Goleadoras
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scorersFemenino.map((scorer, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-secondary w-8">{index + 1}</div>
                        <Avatar className="h-12 w-12 bg-primary">
                          <AvatarFallback className="text-secondary font-bold">
                            {getInitials(scorer.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-foreground">{scorer.name}</p>
                          <p className="text-sm text-muted-foreground">{scorer.team}</p>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-primary">{scorer.goals}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <Shield className="h-8 w-8 text-accent" />
                  Arqueras Menos Vencidas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {goalkeepersFemenino.map((gk, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-accent w-8">{index + 1}</div>
                        <Avatar className="h-12 w-12 bg-accent">
                          <AvatarFallback className="text-accent-foreground font-bold">
                            {getInitials(gk.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-foreground">{gk.name}</p>
                          <p className="text-sm text-muted-foreground">{gk.team}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-accent">{gk.goals}</p>
                        <p className="text-xs text-muted-foreground">{gk.saves} atajadas</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Stats;
