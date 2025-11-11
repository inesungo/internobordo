# Campeonato Interno · Club Seminario

Sitio web para el seguimiento del torneo interno de fútbol del Club Seminario, conectado a datos públicos en Google Sheets mediante CSV.

## 🚀 Tecnologías

- **Next.js** (App Router) con TypeScript
- **Tailwind CSS** + shadcn/ui
- **PapaParse** para parseo de CSV
- **Day.js** para manejo de fechas

## 📋 Estructura del Proyecto

```
/app                 # Páginas Next.js App Router
  /fixture          # Fixture de partidos
  /tabla            # Tabla de posiciones
  /estadisticas     # Goleadores y arqueros menos vencidos
  /equipos          # Listado de equipos
/src
  /components        # Componentes React reutilizables
  /lib
    types.ts         # Tipos TypeScript
    csv.ts           # Helper para fetch CSV
    data.ts          # Loader de datos del torneo
    standings.ts     # Builder de tabla de posiciones
```

## 🔧 Configuración

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar Google Sheets CSV

📖 **Guía completa:** Lee [GUIA_GOOGLE_SHEETS.md](./GUIA_GOOGLE_SHEETS.md) para instrucciones detalladas paso a paso.

**Resumen rápido:**

El proyecto se conecta a 5 pestañas de Google Sheets que deben exportarse como CSV públicos:

1. **Equipos**: Lista de equipos participantes
2. **Partidos**: Calendario de partidos
3. **Resultados**: Resultados de partidos jugados
4. **Goleadores**: Tabla de goleadores
5. **Vallas**: Arqueros menos vencidos

**Pasos básicos:**
1. Crea un Google Sheet con 5 pestañas (una por cada tipo de dato)
2. Publica cada pestaña como CSV (Archivo > Publicar en la web)
3. Copia las URLs generadas
4. Pégala en `.env.local`

### 3. Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
cp .env.example .env.local
```

Edita `.env.local` con las URLs de tus CSVs:

```env
NEXT_PUBLIC_CSV_EQUIPOS="https://docs.google.com/spreadsheets/d/.../export?gid=0&format=csv"
NEXT_PUBLIC_CSV_PARTIDOS="https://docs.google.com/spreadsheets/d/.../export?gid=1&format=csv"
NEXT_PUBLIC_CSV_RESULTADOS="https://docs.google.com/spreadsheets/d/.../export?gid=2&format=csv"
NEXT_PUBLIC_CSV_GOLEADORES="https://docs.google.com/spreadsheets/d/.../export?gid=3&format=csv"
NEXT_PUBLIC_CSV_VALLAS="https://docs.google.com/spreadsheets/d/.../export?gid=4&format=csv"
```

**Nota**: Si no configuras las URLs, el sitio usará datos mock en desarrollo.

## 📊 Estructura de Pestañas Google Sheets

### Equipos
| id | nombre | escudo_url | grupo |
|----|--------|------------|-------|
| 1  | Los Tigres | https://... | A |

### Partidos
| id | fecha | hora | cancha | local_id | visitante_id |
|----|-------|------|--------|----------|--------------|
| 1  | 2025-01-15 | 16:00 | Cancha 1 | 1 | 2 |

### Resultados
| partido_id | goles_local | goles_visitante | observaciones | pts_ajuste_local | pts_ajuste_visitante |
|------------|-------------|-----------------|---------------|------------------|---------------------|
| 1 | 3 | 2 | | 0 | 0 |

### Goleadores
| jugador | equipo_id | goles |
|---------|-----------|-------|
| Juan Pérez | 1 | 15 |

### Vallas
| equipo_id | arq_nombre | goles_recibidos |
|-----------|------------|-----------------|
| 1 | Martín González | 8 |

## 🏃 Desarrollo

```bash
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
npm run build
npm start
```

## 📦 Deploy (Vercel)

El proyecto está optimizado para deploy en Vercel con ISR (Incremental Static Regeneration):

1. Conecta tu repo a Vercel
2. Agrega las variables de entorno en Vercel Dashboard
3. El sitio se revalidará automáticamente cada 2 minutos (`revalidate: 120`)

### Variables de entorno en Vercel

Agrega las mismas variables que en `.env.local`:
- `NEXT_PUBLIC_CSV_EQUIPOS`
- `NEXT_PUBLIC_CSV_PARTIDOS`
- `NEXT_PUBLIC_CSV_RESULTADOS`
- `NEXT_PUBLIC_CSV_GOLEADORES`
- `NEXT_PUBLIC_CSV_VALLAS`

## 🔄 Actualización de Datos

Los datos se actualizan automáticamente cada 2 minutos mediante ISR. No es necesario hacer rebuild para ver cambios en los CSVs.

## 📝 Rutas Disponibles

- `/` - Página principal con estadísticas rápidas y próximos partidos
- `/fixture` - Fixture completo del torneo
- `/tabla` - Tabla de posiciones
- `/estadisticas` - Goleadores y arqueros menos vencidos
- `/equipos` - Listado de equipos participantes

## 🎨 Diseño

El diseño mantiene el estilo original de Lovable con:
- Colores del Club Seminario (bordo y amarillo)
- Componentes shadcn/ui
- Responsive design
- Animaciones suaves

## ⚠️ Notas

- Los campos numéricos vacíos en CSV se normalizan a 0
- Los partidos sin resultado se muestran como "Pendiente"
- La tabla de posiciones se calcula automáticamente desde partidos y resultados
- Se soportan ajustes de puntos por sanciones (`pts_ajuste_*`)
test
