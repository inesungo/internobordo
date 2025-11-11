'use client';

import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Shield } from 'lucide-react';
import { getData } from '@/lib/data';
import TablaGoleadores from '@/components/TablaGoleadores';
import TablaVallas from '@/components/TablaVallas';

export default function EstadisticasPage() {
  const [category, setCategory] = useState<'Masculino' | 'Femenino'>('Masculino');
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
          <h1 className="text-3xl font-bold text-primary mb-2">Estadísticas</h1>
          <p className="text-base text-muted-foreground">
            Goleadores y arqueros menos vencidos del torneo
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

          <TabsContent value="Masculino" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-3">
                  <Target className="h-8 w-8 text-secondary" />
                  Tabla de Goleadores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TablaGoleadores goleadores={data.goleadores} equipos={data.equipos} categoria="Masculino" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-3">
                  <Shield className="h-8 w-8 text-accent" />
                  Arqueros Menos Vencidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TablaVallas vallas={data.vallas} equipos={data.equipos} categoria="Masculino" />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="Femenino" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-3">
                  <Target className="h-8 w-8 text-secondary" />
                  Tabla de Goleadoras
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TablaGoleadores goleadores={data.goleadores} equipos={data.equipos} categoria="Femenino" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-3">
                  <Shield className="h-8 w-8 text-accent" />
                  Arqueras Menos Vencidas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TablaVallas vallas={data.vallas} equipos={data.equipos} categoria="Femenino" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}


