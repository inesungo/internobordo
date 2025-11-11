'use client';

import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import NavBar from '@/components/NavBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { getData } from '@/lib/data';
import ListaPartidos from '@/components/ListaPartidos';

export default function FixturePage() {
  const [category, setCategory] = useState<'Masculino' | 'Femenino'>('Masculino');
  const [estadoFiltro, setEstadoFiltro] = useState<'todos' | 'proximos' | 'finalizados'>('todos');
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      const tournamentData = await getData();
      setData(tournamentData);
    }
    loadData();
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <NavBar />
        <div className="container mx-auto px-4 py-12">
          <p className="text-center">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-primary mb-2 flex items-center gap-3">
            <Calendar className="h-8 w-8 text-secondary" />
            Fixture del Torneo
          </h1>
          <p className="text-base text-muted-foreground">
            Consulta todos los partidos programados y resultados
          </p>
        </div>

        <Tabs defaultValue="Masculino" className="animate-scale-in">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <TabsList className="grid w-full md:w-auto grid-cols-2">
              <TabsTrigger value="Masculino" onClick={() => setCategory('Masculino')}>
                Masculino
              </TabsTrigger>
              <TabsTrigger value="Femenino" onClick={() => setCategory('Femenino')}>
                Femenino
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <Button
                variant={estadoFiltro === 'todos' ? 'default' : 'outline'}
                className={estadoFiltro === 'todos' ? 'bg-secondary text-primary' : ''}
                onClick={() => setEstadoFiltro('todos')}
              >
                Todos
              </Button>
              <Button
                variant={estadoFiltro === 'proximos' ? 'default' : 'outline'}
                className={estadoFiltro === 'proximos' ? 'bg-secondary text-primary' : ''}
                onClick={() => setEstadoFiltro('proximos')}
              >
                Próximos
              </Button>
              <Button
                variant={estadoFiltro === 'finalizados' ? 'default' : 'outline'}
                className={estadoFiltro === 'finalizados' ? 'bg-secondary text-primary' : ''}
                onClick={() => setEstadoFiltro('finalizados')}
              >
                Finalizados
              </Button>
            </div>
          </div>

          <TabsContent value="Masculino">
            <ListaPartidos
              partidos={data.partidos}
              resultados={data.resultados}
              equipos={data.equipos}
              categoria="Masculino"
              estadoFiltro={estadoFiltro}
            />
          </TabsContent>

          <TabsContent value="Femenino">
            <ListaPartidos
              partidos={data.partidos}
              resultados={data.resultados}
              equipos={data.equipos}
              categoria="Femenino"
              estadoFiltro={estadoFiltro}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}


