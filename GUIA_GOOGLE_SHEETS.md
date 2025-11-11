# 📊 Guía para Configurar Google Sheets CSV

Esta guía te ayudará a crear y publicar las hojas de cálculo de Google Sheets como CSV públicos para que el sitio web pueda leerlos.

## 📋 Paso 1: Crear el Google Sheet

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea un nuevo archivo llamado "Interno Bordo - Datos"
3. Crea **5 pestañas** con los siguientes nombres:
   - `Equipos`
   - `Partidos`
   - `Resultados`
   - `Goleadores`
   - `Vallas`

## 📝 Paso 2: Configurar las Pestañas

### Pestaña "Equipos"
Encabezados en la primera fila:
```
id | nombre | escudo_url | grupo
```

Ejemplo de datos:
```
1 | Los Tigres | https://ejemplo.com/logo.png | A
2 | Los Leones | | A
3 | Las Águilas | | B
```

### Pestaña "Partidos"
Encabezados en la primera fila:
```
id | fecha | hora | cancha | local_id | visitante_id
```

Ejemplo de datos:
```
1 | 2025-01-15 | 16:00 | Cancha 1 | 1 | 2
2 | 2025-01-15 | 18:00 | Cancha 1 | 3 | 4
```

**Formato de fecha:** `YYYY-MM-DD` (ej: 2025-01-15)
**Formato de hora:** `HH:mm` (ej: 16:00)

### Pestaña "Resultados"
Encabezados en la primera fila:
```
partido_id | goles_local | goles_visitante | observaciones | pts_ajuste_local | pts_ajuste_visitante
```

Ejemplo de datos:
```
1 | 3 | 2 | | 0 | 0
2 | 1 | 1 | | 0 | 0
```

**Nota:** Los campos `pts_ajuste_local` y `pts_ajuste_visitante` son opcionales. Úsalos para ajustar puntos por sanciones.

### Pestaña "Goleadores"
Encabezados en la primera fila:
```
jugador | equipo_id | goles
```

Ejemplo de datos:
```
Juan Pérez | 1 | 15
Carlos López | 2 | 12
Miguel Ángel | 3 | 11
```

### Pestaña "Vallas"
Encabezados en la primera fila:
```
equipo_id | arq_nombre | goles_recibidos
```

Ejemplo de datos:
```
1 | Martín González | 8
2 | Pablo Rodríguez | 10
3 | Lucas Fernández | 12
```

## 🔗 Paso 3: Publicar cada Pestaña como CSV

Para cada pestaña, sigue estos pasos:

1. **Haz clic en la pestaña** que quieres publicar (ej: "Equipos")
2. Ve a **Archivo** > **Publicar en la web** (o **Compartir** > **Publicar en web**)
3. En el menú desplegable, selecciona la pestaña correcta (ej: "Equipos")
4. En "Formato", selecciona **"Valores separados por comas (.csv)"**
5. Haz clic en **"Publicar"**
6. **Copia la URL** que aparece (será algo como: `https://docs.google.com/spreadsheets/d/ABC123/export?gid=0&format=csv`)

### ⚠️ IMPORTANTE: IDs de Pestañas (gid)

Cada pestaña tiene un ID único llamado `gid`. Para obtenerlo:

1. Haz clic en la pestaña
2. Mira la URL en el navegador, debería verse algo como:
   ```
   .../edit#gid=0
   ```
3. El número después de `gid=` es el ID de esa pestaña
4. Usa ese número en la URL del CSV: `&gid=0` (reemplaza `0` con el número correcto)

### URLs de Ejemplo

Si tu Sheet ID es `ABC123` y los `gid` son:
- Equipos: `gid=0`
- Partidos: `gid=123456789`
- Resultados: `gid=987654321`
- Goleadores: `gid=111222333`
- Vallas: `gid=444555666`

Tus URLs serían:
```
https://docs.google.com/spreadsheets/d/ABC123/export?gid=0&format=csv
https://docs.google.com/spreadsheets/d/ABC123/export?gid=123456789&format=csv
https://docs.google.com/spreadsheets/d/ABC123/export?gid=987654321&format=csv
https://docs.google.com/spreadsheets/d/ABC123/export?gid=111222333&format=csv
https://docs.google.com/spreadsheets/d/ABC123/export?gid=444555666&format=csv
```

## ⚙️ Paso 4: Configurar las Variables de Entorno

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Pega las URLs de cada CSV:

```env
NEXT_PUBLIC_CSV_EQUIPOS="https://docs.google.com/spreadsheets/d/ABC123/export?gid=0&format=csv"
NEXT_PUBLIC_CSV_PARTIDOS="https://docs.google.com/spreadsheets/d/ABC123/export?gid=123456789&format=csv"
NEXT_PUBLIC_CSV_RESULTADOS="https://docs.google.com/spreadsheets/d/ABC123/export?gid=987654321&format=csv"
NEXT_PUBLIC_CSV_GOLEADORES="https://docs.google.com/spreadsheets/d/ABC123/export?gid=111222333&format=csv"
NEXT_PUBLIC_CSV_VALLAS="https://docs.google.com/spreadsheets/d/ABC123/export?gid=444555666&format=csv"
```

3. **Reinicia el servidor de desarrollo** después de guardar:
   ```bash
   # Detén el servidor (Ctrl+C) y vuelve a iniciarlo:
   npm run dev
   ```

## ✅ Paso 5: Verificar que Funciona

1. Abre el sitio en http://localhost:3000
2. Las páginas deberían mostrar los datos de tu Google Sheet
3. Si no ves datos, verifica:
   - Que las URLs estén correctas
   - Que los encabezados de las columnas coincidan exactamente
   - Que los CSV estén publicados como "Cualquiera con el enlace puede ver"

## 🔄 Actualización Automática

Los datos se actualizan automáticamente cada **2 minutos** (revalidate: 120 segundos). No necesitas hacer rebuild del sitio cuando actualices los datos en Google Sheets.

## 🚨 Troubleshooting

### No se ven los datos
- Verifica que los CSV estén publicados correctamente
- Abre la URL del CSV directamente en el navegador para verificar que funciona
- Revisa la consola del navegador (F12) para ver errores

### Error 403 (Forbidden)
- Asegúrate de que el Sheet esté configurado como "Cualquiera con el enlace puede ver"
- Ve a **Compartir** > **Configuración de acceso** > **Cualquiera con el enlace**

### Datos no se actualizan
- Espera 2 minutos (tiempo de revalidate)
- O reinicia el servidor de desarrollo

### Formato de fecha/hora incorrecto
- Fecha debe ser: `YYYY-MM-DD` (ej: 2025-01-15)
- Hora debe ser: `HH:mm` (ej: 16:00)
- Sin espacios adicionales

## 📌 Consejos

1. **Mantén los IDs consistentes:** Usa los mismos `id` y `equipo_id` en todas las pestañas
2. **Campos opcionales:** `escudo_url`, `cancha`, `observaciones`, y `pts_ajuste_*` pueden dejarse vacíos
3. **Orden de datos:** No importa el orden en las hojas, el sitio ordenará automáticamente
4. **Datos mock:** Si no configuras las URLs, el sitio usará datos de ejemplo en desarrollo

