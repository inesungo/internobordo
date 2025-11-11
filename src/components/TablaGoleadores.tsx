import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Goleador, Equipo } from '@/lib/types';

interface TablaGoleadoresProps {
  goleadores: Goleador[];
  equipos: Equipo[];
  limit?: number;
  categoria?: 'Masculino' | 'Femenino';
}

export default function TablaGoleadores({ goleadores, equipos, limit = 5, categoria }: TablaGoleadoresProps) {
  // Filtrar por categoría si se especifica
  let goleadoresFiltrados = goleadores;
  if (categoria) {
    const equiposCategoria = equipos.filter((e) => e.categoria === categoria).map((e) => e.id);
    goleadoresFiltrados = goleadores.filter((g) => equiposCategoria.includes(g.equipo_id));
  }

  // Agrupar por jugador y equipo_id, sumando los goles
  const goleadoresAgrupados = new Map<string, { jugador: string; equipo_id: string; goles: number }>();
  
  goleadoresFiltrados.forEach((goleador) => {
    const key = `${goleador.jugador}-${goleador.equipo_id}`;
    const existente = goleadoresAgrupados.get(key);
    
    if (existente) {
      existente.goles += goleador.goles;
    } else {
      goleadoresAgrupados.set(key, {
        jugador: goleador.jugador,
        equipo_id: goleador.equipo_id,
        goles: goleador.goles,
      });
    }
  });

  const sorted = Array.from(goleadoresAgrupados.values())
    .sort((a, b) => b.goles - a.goles)
    .slice(0, limit);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="space-y-4">
      {sorted.map((scorer, index) => {
        const equipo = equipos.find((e) => e.id === scorer.equipo_id);
        return (
          <div
            key={`${scorer.jugador}-${scorer.equipo_id}`}
            className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-secondary w-8">{index + 1}</div>
              <Avatar className="h-12 w-12 bg-primary">
                <AvatarFallback className="text-secondary font-bold">
                  {getInitials(scorer.jugador)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-foreground">{scorer.jugador}</p>
                <p className="text-sm text-muted-foreground">{equipo?.nombre || 'Sin equipo'}</p>
              </div>
            </div>
            <div className="text-3xl font-bold text-primary">{scorer.goles}</div>
          </div>
        );
      })}
    </div>
  );
}


