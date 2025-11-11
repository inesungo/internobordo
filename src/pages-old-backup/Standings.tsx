import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Standings = () => {
  const [category, setCategory] = useState<"Masculino" | "Femenino">("Masculino");

  const standingsMasculino = {
    serieA: [
      { pos: 1, team: "Los Tigres", pts: 18, pj: 8, pg: 6, pe: 0, pp: 2, gf: 24, gc: 10 },
      { pos: 2, team: "Los Leones", pts: 16, pj: 8, pg: 5, pe: 1, pp: 2, gf: 20, gc: 12 },
    ],
    serieB: [
      { pos: 1, team: "Las Águilas", pts: 14, pj: 8, pg: 4, pe: 2, pp: 2, gf: 18, gc: 14 },
      { pos: 2, team: "Los Pumas", pts: 12, pj: 8, pg: 3, pe: 3, pp: 2, gf: 15, gc: 15 },
    ],
  };

  const standingsFemenino = {
    serieA: [
      { pos: 1, team: "Las Leonas", pts: 21, pj: 8, pg: 7, pe: 0, pp: 1, gf: 28, gc: 8 },
      { pos: 2, team: "Las Águilas", pts: 18, pj: 8, pg: 6, pe: 0, pp: 2, gf: 22, gc: 10 },
    ],
    serieB: [
      { pos: 1, team: "Las Panteras", pts: 15, pj: 8, pg: 5, pe: 0, pp: 3, gf: 20, gc: 15 },
      { pos: 2, team: "Las Tigres", pts: 13, pj: 8, pg: 4, pe: 1, pp: 3, gf: 16, gc: 14 },
    ],
  };

  const playoffBracket = {
    cuartos: [
      { team1: "1° Serie A", team2: "2° Serie B" },
      { team1: "1° Serie B", team2: "2° Serie A" },
      { team1: "1° Serie C", team2: "2° Serie D" },
      { team1: "1° Serie D", team2: "2° Serie C" },
    ],
    semis: [
      { team1: "Ganador Q1", team2: "Ganador Q2" },
      { team1: "Ganador Q3", team2: "Ganador Q4" },
    ],
    final: { team1: "Ganador SF1", team2: "Ganador SF2" },
  };

  const renderTable = (data: typeof standingsMasculino.serieA) => (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">Pos</TableHead>
            <TableHead>Equipo</TableHead>
            <TableHead className="text-center">PJ</TableHead>
            <TableHead className="text-center">PG</TableHead>
            <TableHead className="text-center">PE</TableHead>
            <TableHead className="text-center">PP</TableHead>
            <TableHead className="text-center">GF</TableHead>
            <TableHead className="text-center">GC</TableHead>
            <TableHead className="text-center font-bold">PTS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((team) => (
            <TableRow key={team.pos} className="hover:bg-muted/50">
              <TableCell className="font-bold text-primary">{team.pos}</TableCell>
              <TableCell className="font-semibold">{team.team}</TableCell>
              <TableCell className="text-center">{team.pj}</TableCell>
              <TableCell className="text-center">{team.pg}</TableCell>
              <TableCell className="text-center">{team.pe}</TableCell>
              <TableCell className="text-center">{team.pp}</TableCell>
              <TableCell className="text-center">{team.gf}</TableCell>
              <TableCell className="text-center">{team.gc}</TableCell>
              <TableCell className="text-center font-bold text-primary">{team.pts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-primary mb-4 flex items-center gap-3">
            <Trophy className="h-12 w-12 text-secondary" />
            Tabla de Posiciones
          </h1>
          <p className="text-xl text-muted-foreground">
            Consulta las posiciones generales y por serie
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

          <TabsContent value="Masculino" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Serie A</CardTitle>
                </CardHeader>
                <CardContent>{renderTable(standingsMasculino.serieA)}</CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Serie B</CardTitle>
                </CardHeader>
                <CardContent>{renderTable(standingsMasculino.serieB)}</CardContent>
              </Card>
            </div>

            {/* Playoff Bracket */}
            <Card className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-primary/30 shadow-xl animate-fade-in">
              <CardHeader className="pb-4 md:pb-8">
                <CardTitle className="text-2xl md:text-4xl text-center font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Cuadro de Play-offs
                </CardTitle>
                <p className="text-center text-muted-foreground mt-2 text-sm md:text-base">Camino hacia el campeonato</p>
              </CardHeader>
              <CardContent className="pb-8 md:pb-12">
                {/* Desktop Layout */}
                <div className="hidden lg:block overflow-x-auto">
                  <div className="min-w-[1000px] py-8 px-4">
                    <div className="flex justify-between items-center gap-12">
                      {/* Cuartos de Final */}
                      <div className="flex-1 space-y-14">
                        <div className="text-center mb-8">
                          <div className="inline-block bg-primary/10 px-6 py-2 rounded-full border border-primary/30">
                            <h3 className="text-sm font-bold text-primary uppercase tracking-wide">Cuartos de Final</h3>
                          </div>
                        </div>
                        {playoffBracket.cuartos.map((match, idx) => (
                          <div key={idx} className="space-y-3 animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="group bg-gradient-to-r from-card to-card/50 border-2 border-primary/20 rounded-xl px-5 py-4 text-center hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300">
                              <div className="font-bold text-sm group-hover:text-primary transition-colors">{match.team1}</div>
                            </div>
                            <div className="text-center">
                              <span className="inline-block bg-muted px-3 py-1 rounded-full text-xs font-bold text-muted-foreground">VS</span>
                            </div>
                            <div className="group bg-gradient-to-r from-card to-card/50 border-2 border-primary/20 rounded-xl px-5 py-4 text-center hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300">
                              <div className="font-bold text-sm group-hover:text-primary transition-colors">{match.team2}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Semifinales */}
                      <div className="flex-1 space-y-36">
                        <div className="text-center mb-8">
                          <div className="inline-block bg-secondary/10 px-6 py-2 rounded-full border border-secondary/30">
                            <h3 className="text-sm font-bold text-secondary uppercase tracking-wide">Semifinales</h3>
                          </div>
                        </div>
                        {playoffBracket.semis.map((match, idx) => (
                          <div key={idx} className="space-y-3 animate-scale-in" style={{ animationDelay: `${(idx + 4) * 0.1}s` }}>
                            <div className="group bg-gradient-to-r from-secondary/10 to-card border-2 border-secondary/30 rounded-xl px-6 py-5 text-center hover:border-secondary/60 hover:shadow-xl hover:scale-105 transition-all duration-300">
                              <div className="font-bold group-hover:text-secondary transition-colors">{match.team1}</div>
                            </div>
                            <div className="text-center">
                              <span className="inline-block bg-muted px-3 py-1 rounded-full text-xs font-bold text-muted-foreground">VS</span>
                            </div>
                            <div className="group bg-gradient-to-r from-secondary/10 to-card border-2 border-secondary/30 rounded-xl px-6 py-5 text-center hover:border-secondary/60 hover:shadow-xl hover:scale-105 transition-all duration-300">
                              <div className="font-bold group-hover:text-secondary transition-colors">{match.team2}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Final */}
                      <div className="flex-1">
                        <div className="text-center mb-8">
                          <div className="inline-block bg-accent/10 px-6 py-2 rounded-full border border-accent/30">
                            <h3 className="text-sm font-bold text-accent uppercase tracking-wide flex items-center justify-center gap-2">
                              <Trophy className="h-4 w-4" />
                              Final
                            </h3>
                          </div>
                        </div>
                        <div className="flex items-center justify-center" style={{ minHeight: "400px" }}>
                          <div className="space-y-4 w-full animate-scale-in" style={{ animationDelay: "0.6s" }}>
                            <div className="relative group">
                              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                              <div className="relative bg-card border-2 border-accent/40 rounded-2xl px-8 py-8 text-center shadow-2xl hover:shadow-accent/20 transition-all duration-300">
                                <div className="font-bold text-xl mb-3 group-hover:text-accent transition-colors">{playoffBracket.final.team1}</div>
                                <div className="flex items-center justify-center gap-2 my-4">
                                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-muted-foreground"></div>
                                  <span className="inline-block bg-accent/20 px-4 py-1.5 rounded-full text-xs font-bold text-accent">VS</span>
                                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-muted-foreground"></div>
                                </div>
                                <div className="font-bold text-xl mt-3 group-hover:text-accent transition-colors">{playoffBracket.final.team2}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden space-y-8 py-4">
                  {/* Cuartos de Final */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full border border-primary/30">
                        <h3 className="text-xs font-bold text-primary uppercase tracking-wide">Cuartos de Final</h3>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {playoffBracket.cuartos.map((match, idx) => (
                        <div key={idx} className="space-y-2 animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                          <div className="bg-gradient-to-r from-card to-card/50 border-2 border-primary/20 rounded-lg px-4 py-3 text-center">
                            <div className="font-bold text-sm">{match.team1}</div>
                          </div>
                          <div className="text-center">
                            <span className="inline-block bg-muted px-2 py-0.5 rounded-full text-xs font-bold text-muted-foreground">VS</span>
                          </div>
                          <div className="bg-gradient-to-r from-card to-card/50 border-2 border-primary/20 rounded-lg px-4 py-3 text-center">
                            <div className="font-bold text-sm">{match.team2}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Semifinales */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="inline-block bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/30">
                        <h3 className="text-xs font-bold text-secondary uppercase tracking-wide">Semifinales</h3>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {playoffBracket.semis.map((match, idx) => (
                        <div key={idx} className="space-y-2 animate-scale-in" style={{ animationDelay: `${(idx + 4) * 0.1}s` }}>
                          <div className="bg-gradient-to-r from-secondary/10 to-card border-2 border-secondary/30 rounded-lg px-4 py-3 text-center">
                            <div className="font-bold text-sm">{match.team1}</div>
                          </div>
                          <div className="text-center">
                            <span className="inline-block bg-muted px-2 py-0.5 rounded-full text-xs font-bold text-muted-foreground">VS</span>
                          </div>
                          <div className="bg-gradient-to-r from-secondary/10 to-card border-2 border-secondary/30 rounded-lg px-4 py-3 text-center">
                            <div className="font-bold text-sm">{match.team2}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Final */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="inline-block bg-accent/10 px-4 py-1.5 rounded-full border border-accent/30">
                        <h3 className="text-xs font-bold text-accent uppercase tracking-wide flex items-center justify-center gap-2">
                          <Trophy className="h-3 w-3" />
                          Final
                        </h3>
                      </div>
                    </div>
                    <div className="max-w-sm mx-auto animate-scale-in" style={{ animationDelay: "0.6s" }}>
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl blur opacity-30"></div>
                        <div className="relative bg-card border-2 border-accent/40 rounded-xl px-6 py-6 text-center shadow-xl">
                          <div className="font-bold text-lg mb-2">{playoffBracket.final.team1}</div>
                          <div className="flex items-center justify-center gap-2 my-3">
                            <div className="h-px w-6 bg-gradient-to-r from-transparent to-muted-foreground"></div>
                            <span className="inline-block bg-accent/20 px-3 py-1 rounded-full text-xs font-bold text-accent">VS</span>
                            <div className="h-px w-6 bg-gradient-to-l from-transparent to-muted-foreground"></div>
                          </div>
                          <div className="font-bold text-lg mt-2">{playoffBracket.final.team2}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="Femenino" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Serie A</CardTitle>
                </CardHeader>
                <CardContent>{renderTable(standingsFemenino.serieA)}</CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Serie B</CardTitle>
                </CardHeader>
                <CardContent>{renderTable(standingsFemenino.serieB)}</CardContent>
              </Card>
            </div>

            {/* Playoff Bracket Femenino */}
            <Card className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-primary/30 shadow-xl animate-fade-in">
              <CardHeader className="pb-4 md:pb-8">
                <CardTitle className="text-2xl md:text-4xl text-center font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Cuadro de Play-offs
                </CardTitle>
                <p className="text-center text-muted-foreground mt-2 text-sm md:text-base">Camino hacia el campeonato</p>
              </CardHeader>
              <CardContent className="pb-8 md:pb-12">
                {/* Desktop Layout */}
                <div className="hidden lg:block overflow-x-auto">
                  <div className="min-w-[1000px] py-8 px-4">
                    <div className="flex justify-between items-center gap-12">
                      {/* Cuartos de Final */}
                      <div className="flex-1 space-y-14">
                        <div className="text-center mb-8">
                          <div className="inline-block bg-primary/10 px-6 py-2 rounded-full border border-primary/30">
                            <h3 className="text-sm font-bold text-primary uppercase tracking-wide">Cuartos de Final</h3>
                          </div>
                        </div>
                        {playoffBracket.cuartos.map((match, idx) => (
                          <div key={idx} className="space-y-3 animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="group bg-gradient-to-r from-card to-card/50 border-2 border-primary/20 rounded-xl px-5 py-4 text-center hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300">
                              <div className="font-bold text-sm group-hover:text-primary transition-colors">{match.team1}</div>
                            </div>
                            <div className="text-center">
                              <span className="inline-block bg-muted px-3 py-1 rounded-full text-xs font-bold text-muted-foreground">VS</span>
                            </div>
                            <div className="group bg-gradient-to-r from-card to-card/50 border-2 border-primary/20 rounded-xl px-5 py-4 text-center hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300">
                              <div className="font-bold text-sm group-hover:text-primary transition-colors">{match.team2}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Semifinales */}
                      <div className="flex-1 space-y-36">
                        <div className="text-center mb-8">
                          <div className="inline-block bg-secondary/10 px-6 py-2 rounded-full border border-secondary/30">
                            <h3 className="text-sm font-bold text-secondary uppercase tracking-wide">Semifinales</h3>
                          </div>
                        </div>
                        {playoffBracket.semis.map((match, idx) => (
                          <div key={idx} className="space-y-3 animate-scale-in" style={{ animationDelay: `${(idx + 4) * 0.1}s` }}>
                            <div className="group bg-gradient-to-r from-secondary/10 to-card border-2 border-secondary/30 rounded-xl px-6 py-5 text-center hover:border-secondary/60 hover:shadow-xl hover:scale-105 transition-all duration-300">
                              <div className="font-bold group-hover:text-secondary transition-colors">{match.team1}</div>
                            </div>
                            <div className="text-center">
                              <span className="inline-block bg-muted px-3 py-1 rounded-full text-xs font-bold text-muted-foreground">VS</span>
                            </div>
                            <div className="group bg-gradient-to-r from-secondary/10 to-card border-2 border-secondary/30 rounded-xl px-6 py-5 text-center hover:border-secondary/60 hover:shadow-xl hover:scale-105 transition-all duration-300">
                              <div className="font-bold group-hover:text-secondary transition-colors">{match.team2}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Final */}
                      <div className="flex-1">
                        <div className="text-center mb-8">
                          <div className="inline-block bg-accent/10 px-6 py-2 rounded-full border border-accent/30">
                            <h3 className="text-sm font-bold text-accent uppercase tracking-wide flex items-center justify-center gap-2">
                              <Trophy className="h-4 w-4" />
                              Final
                            </h3>
                          </div>
                        </div>
                        <div className="flex items-center justify-center" style={{ minHeight: "400px" }}>
                          <div className="space-y-4 w-full animate-scale-in" style={{ animationDelay: "0.6s" }}>
                            <div className="relative group">
                              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                              <div className="relative bg-card border-2 border-accent/40 rounded-2xl px-8 py-8 text-center shadow-2xl hover:shadow-accent/20 transition-all duration-300">
                                <div className="font-bold text-xl mb-3 group-hover:text-accent transition-colors">{playoffBracket.final.team1}</div>
                                <div className="flex items-center justify-center gap-2 my-4">
                                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-muted-foreground"></div>
                                  <span className="inline-block bg-accent/20 px-4 py-1.5 rounded-full text-xs font-bold text-accent">VS</span>
                                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-muted-foreground"></div>
                                </div>
                                <div className="font-bold text-xl mt-3 group-hover:text-accent transition-colors">{playoffBracket.final.team2}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden space-y-8 py-4">
                  {/* Cuartos de Final */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="inline-block bg-primary/10 px-4 py-1.5 rounded-full border border-primary/30">
                        <h3 className="text-xs font-bold text-primary uppercase tracking-wide">Cuartos de Final</h3>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {playoffBracket.cuartos.map((match, idx) => (
                        <div key={idx} className="space-y-2 animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                          <div className="bg-gradient-to-r from-card to-card/50 border-2 border-primary/20 rounded-lg px-4 py-3 text-center">
                            <div className="font-bold text-sm">{match.team1}</div>
                          </div>
                          <div className="text-center">
                            <span className="inline-block bg-muted px-2 py-0.5 rounded-full text-xs font-bold text-muted-foreground">VS</span>
                          </div>
                          <div className="bg-gradient-to-r from-card to-card/50 border-2 border-primary/20 rounded-lg px-4 py-3 text-center">
                            <div className="font-bold text-sm">{match.team2}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Semifinales */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="inline-block bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/30">
                        <h3 className="text-xs font-bold text-secondary uppercase tracking-wide">Semifinales</h3>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {playoffBracket.semis.map((match, idx) => (
                        <div key={idx} className="space-y-2 animate-scale-in" style={{ animationDelay: `${(idx + 4) * 0.1}s` }}>
                          <div className="bg-gradient-to-r from-secondary/10 to-card border-2 border-secondary/30 rounded-lg px-4 py-3 text-center">
                            <div className="font-bold text-sm">{match.team1}</div>
                          </div>
                          <div className="text-center">
                            <span className="inline-block bg-muted px-2 py-0.5 rounded-full text-xs font-bold text-muted-foreground">VS</span>
                          </div>
                          <div className="bg-gradient-to-r from-secondary/10 to-card border-2 border-secondary/30 rounded-lg px-4 py-3 text-center">
                            <div className="font-bold text-sm">{match.team2}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Final */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="inline-block bg-accent/10 px-4 py-1.5 rounded-full border border-accent/30">
                        <h3 className="text-xs font-bold text-accent uppercase tracking-wide flex items-center justify-center gap-2">
                          <Trophy className="h-3 w-3" />
                          Final
                        </h3>
                      </div>
                    </div>
                    <div className="max-w-sm mx-auto animate-scale-in" style={{ animationDelay: "0.6s" }}>
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl blur opacity-30"></div>
                        <div className="relative bg-card border-2 border-accent/40 rounded-xl px-6 py-6 text-center shadow-xl">
                          <div className="font-bold text-lg mb-2">{playoffBracket.final.team1}</div>
                          <div className="flex items-center justify-center gap-2 my-3">
                            <div className="h-px w-6 bg-gradient-to-r from-transparent to-muted-foreground"></div>
                            <span className="inline-block bg-accent/20 px-3 py-1 rounded-full text-xs font-bold text-accent">VS</span>
                            <div className="h-px w-6 bg-gradient-to-l from-transparent to-muted-foreground"></div>
                          </div>
                          <div className="font-bold text-lg mt-2">{playoffBracket.final.team2}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Standings;
