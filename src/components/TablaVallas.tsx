import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Valla, Equipo } from '@/lib/types';

interface TablaVallasProps {
  vallas: Valla[];
  equipos: Equipo[];
  limit?: number;
  categoria?: 'Masculino' | 'Femenino';
}

export default function TablaVallas({ vallas, equipos, limit = 5, categoria }: TablaVallasProps) {
  // Filtrar por categoría si se especifica
  let vallasFiltradas = vallas;
  if (categoria) {
    const equiposCategoria = equipos.filter((e) => e.categoria === categoria).map((e) => e.id);
    vallasFiltradas = vallas.filter((v) => equiposCategoria.includes(v.equipo_id));
  }

  // Agrupar por arquero y equipo_id, sumando los goles recibidos
  const vallasAgrupadas = new Map<string, { arq_nombre: string; equipo_id: string; goles_recibidos: number }>();
  
  vallasFiltradas.forEach((valla) => {
    const key = `${valla.arq_nombre}-${valla.equipo_id}`;
    const existente = vallasAgrupadas.get(key);
    
    if (existente) {
      existente.goles_recibidos += valla.goles_recibidos;
    } else {
      vallasAgrupadas.set(key, {
        arq_nombre: valla.arq_nombre,
        equipo_id: valla.equipo_id,
        goles_recibidos: valla.goles_recibidos,
      });
    }
  });

  const sorted = Array.from(vallasAgrupadas.values())
    .sort((a, b) => a.goles_recibidos - b.goles_recibidos)
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
      {sorted.map((valla, index) => {
        const equipo = equipos.find((e) => e.id === valla.equipo_id);
        return (
          <div
            key={`${valla.arq_nombre}-${valla.equipo_id}`}
            className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-accent w-8">{index + 1}</div>
              <Avatar className="h-12 w-12 bg-accent">
                <AvatarFallback className="text-accent-foreground font-bold">
                  {getInitials(valla.arq_nombre)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-foreground">{valla.arq_nombre}</p>
                <p className="text-sm text-muted-foreground">{equipo?.nombre || 'Sin equipo'}</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-accent">{valla.goles_recibidos}</div>
          </div>
        );
      })}
    </div>
  );
}


