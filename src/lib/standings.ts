import { Equipo, Partido, Resultado, Standing } from './types';

/**
 * Construye la tabla de posiciones basada en equipos, partidos y resultados
 * @param equipos Lista de equipos
 * @param partidos Lista de partidos
 * @param resultados Lista de resultados
 * @param categoria Filtrar por categoría (opcional)
 * @param grupo Filtrar por grupo (opcional)
 */
export function buildStandings(
  equipos: Equipo[],
  partidos: Partido[],
  resultados: Resultado[],
  categoria?: 'Masculino' | 'Femenino',
  grupo?: string
): Standing[] {
  // Filtrar equipos por categoría y grupo si se especifican
  let equiposFiltrados = equipos;
  if (categoria) {
    equiposFiltrados = equiposFiltrados.filter((e) => e.categoria === categoria);
  }
  if (grupo) {
    equiposFiltrados = equiposFiltrados.filter((e) => e.grupo === grupo);
  }

  // Filtrar partidos por categoría si se especifica
  let partidosFiltrados = partidos;
  if (categoria) {
    partidosFiltrados = partidosFiltrados.filter((p) => p.categoria === categoria);
  }

  // Inicializar estadísticas por equipo
  const statsMap = new Map<string, Standing>();

  equiposFiltrados.forEach((equipo) => {
    statsMap.set(equipo.id, {
      equipo_id: equipo.id,
      nombre: equipo.nombre,
      grupo: equipo.grupo,
      PJ: 0,
      PG: 0,
      PE: 0,
      PP: 0,
      GF: 0,
      GC: 0,
      DG: 0,
      Pts: 0,
    });
  });

  // Procesar cada partido con resultado
  partidosFiltrados.forEach((partido) => {
    const resultado = resultados.find((r) => r.partido_id === partido.id);
    if (!resultado) return; // Partido sin resultado

    const localStats = statsMap.get(partido.local_id);
    const visitanteStats = statsMap.get(partido.visitante_id);

    if (!localStats || !visitanteStats) return;

    // Actualizar partidos jugados
    localStats.PJ++;
    visitanteStats.PJ++;

    // Actualizar goles
    localStats.GF += resultado.goles_local;
    localStats.GC += resultado.goles_visitante;
    visitanteStats.GF += resultado.goles_visitante;
    visitanteStats.GC += resultado.goles_local;

    // Determinar resultado
    if (resultado.goles_local > resultado.goles_visitante) {
      localStats.PG++;
      localStats.Pts += 3;
      visitanteStats.PP++;
    } else if (resultado.goles_local < resultado.goles_visitante) {
      visitanteStats.PG++;
      visitanteStats.Pts += 3;
      localStats.PP++;
    } else {
      localStats.PE++;
      localStats.Pts += 1;
      visitanteStats.PE++;
      visitanteStats.Pts += 1;
    }
  });

  // Calcular diferencia de goles
  statsMap.forEach((stats) => {
    stats.DG = stats.GF - stats.GC;
  });

  // Convertir a array y ordenar
  const standings = Array.from(statsMap.values());

  // Ordenar por: Pts desc, DG desc, GF desc, nombre asc
  standings.sort((a, b) => {
    if (b.Pts !== a.Pts) return b.Pts - a.Pts;
    if (b.DG !== a.DG) return b.DG - a.DG;
    if (b.GF !== a.GF) return b.GF - a.GF;
    return a.nombre.localeCompare(b.nombre);
  });

  return standings;
}


