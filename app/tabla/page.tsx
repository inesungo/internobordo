'use client';

import { useState, useEffect } from 'react';
import { Trophy } from 'lucide-react';
import NavBar from '@/components/NavBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getData } from '@/lib/data';
import { buildStandings } from '@/lib/standings';
import TablaPosiciones from '@/components/TablaPosiciones';

export default function TablaPage() {
  const [category, setCategory] = useState<'Masculino' | 'Femenino'>('Masculino');
  const [data, setData] = useState<any>(null);
  const [standingsGeneral, setStandingsGeneral] = useState<any[]>([]);
  const [grupos, setGrupos] = useState<string[]>([]);

  useEffect(() => {
    async function loadData() {
      const tournamentData = await getData();
      setData(tournamentData);
    }
    loadData();
  }, []);

  useEffect(() => {
    if (!data) return;

    // Calcular tabla general por categoría
    const general = buildStandings(data.equipos, data.partidos, data.resultados, category);
    setStandingsGeneral(general);

    // Obtener grupos únicos de la categoría
    const equiposCategoria = data.equipos.filter((e: any) => e.categoria === category);
    const gruposUnicos = [...new Set(equiposCategoria.map((e: any) => e.grupo).filter(Boolean))];
    setGrupos(gruposUnicos);
  }, [data, category]);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-primary mb-2 flex items-center gap-3">
            <Trophy className="h-8 w-8 text-secondary" />
            Tabla de Posiciones
          </h1>
          <p className="text-base text-muted-foreground">
            Consulta las posiciones generales y por serie
          </p>
        </div>

        <Tabs defaultValue="Masculino" className="animate-scale-in">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="Masculino" onClick={() => setCategory('Masculino')}>
              Masculino
            </TabsTrigger>
            <TabsTrigger value="Femenino" onClick={() => setCategory('Femenino')}>
              Femenino
            </TabsTrigger>
          </TabsList>

          <TabsContent value="Masculino" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Tabla General</CardTitle>
              </CardHeader>
              <CardContent>
                <TablaPosiciones standings={standingsGeneral} />
              </CardContent>
            </Card>

            {grupos.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {grupos.map((grupo) => {
                  const standingsGrupo = buildStandings(
                    data.equipos,
                    data.partidos,
                    data.resultados,
                    category,
                    grupo
                  );
                  return (
                    <Card key={grupo}>
                      <CardHeader>
                        <CardTitle className="text-xl text-primary">Grupo {grupo}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <TablaPosiciones standings={standingsGrupo} />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </TabsContent>

          <TabsContent value="Femenino" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Tabla General</CardTitle>
              </CardHeader>
              <CardContent>
                <TablaPosiciones standings={standingsGeneral} />
              </CardContent>
            </Card>

            {grupos.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {grupos.map((grupo) => {
                  const standingsGrupo = buildStandings(
                    data.equipos,
                    data.partidos,
                    data.resultados,
                    category,
                    grupo
                  );
                  return (
                    <Card key={grupo}>
                      <CardHeader>
                        <CardTitle className="text-xl text-primary">Grupo {grupo}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <TablaPosiciones standings={standingsGrupo} />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}


