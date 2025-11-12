# 🔧 Solución: Datos no aparecen en Vercel

## 🎯 Problema
Los datos de Google Sheets no aparecen en la web desplegada en Vercel, aunque el Google Sheets tiene datos.

## ✅ Solución: Configurar Variables de Entorno en Vercel

El problema más común es que **las variables de entorno no están configuradas en Vercel**. Sigue estos pasos:

### Paso 1: Ir al Dashboard de Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Selecciona tu proyecto
3. Ve a **Settings** (Configuración)
4. Haz clic en **Environment Variables** (Variables de Entorno)

### Paso 2: Agregar las Variables de Entorno

Agrega las siguientes variables con las URLs de tus Google Sheets CSV:

```
NEXT_PUBLIC_CSV_EQUIPOS
NEXT_PUBLIC_CSV_PARTIDOS
NEXT_PUBLIC_CSV_RESULTADOS
NEXT_PUBLIC_CSV_GOLEADORES
NEXT_PUBLIC_CSV_VALLAS
NEXT_PUBLIC_CSV_JUGADORES
```

**Formato de cada URL:**
```
https://docs.google.com/spreadsheets/d/TU_SHEET_ID/export?gid=TU_GID&format=csv
```

**Ejemplo:**
```
NEXT_PUBLIC_CSV_EQUIPOS=https://docs.google.com/spreadsheets/d/ABC123xyz/export?gid=0&format=csv
```

### Paso 3: Obtener las URLs de Google Sheets

1. Abre tu Google Sheet
2. Para cada pestaña (Equipos, Partidos, Resultados, etc.):
   - Haz clic en la pestaña
   - Ve a **Archivo** > **Publicar en la web**
   - Selecciona la pestaña correcta en el menú desplegable
   - Selecciona formato **"Valores separados por comas (.csv)"**
   - Haz clic en **"Publicar"**
   - Copia la URL generada

### Paso 4: Verificar que los Sheets sean Públicos

**IMPORTANTE:** Los Google Sheets deben ser públicos para que funcionen:

1. En tu Google Sheet, haz clic en **"Compartir"** (botón azul arriba a la derecha)
2. En "Obtener enlace", selecciona **"Cualquiera con el enlace"**
3. Asegúrate de que el permiso sea **"Lector"** (no "Editor")
4. Guarda los cambios

### Paso 5: Redesplegar en Vercel

Después de agregar las variables de entorno:

1. Ve a la pestaña **Deployments** en Vercel
2. Haz clic en los **3 puntos** del último deployment
3. Selecciona **"Redeploy"**
4. O simplemente haz un nuevo commit y push (Vercel desplegará automáticamente)

## 🔍 Verificar el Problema

Después de desplegar, abre la consola del navegador (F12) en tu sitio web y busca estos mensajes:

### ✅ Si está bien configurado:
```
🔍 Variables de entorno: { equipos: "✓ Configurada", ... }
📊 Datos cargados: { equipos: 5, partidos: 10, ... }
```

### ❌ Si hay problemas:
```
⚠️ No hay URLs de CSV configuradas
⚠️ No se cargaron datos
❌ Error HTTP 403 al obtener CSV
```

## 🚨 Problemas Comunes

### Error 403 (Forbidden)
- **Causa:** El Google Sheet no es público
- **Solución:** Haz el Sheet público (Paso 4 arriba)

### Variables no configuradas
- **Causa:** Las variables no están en Vercel
- **Solución:** Agrega las variables en Vercel (Paso 2 arriba)

### URLs incorrectas
- **Causa:** La URL del CSV está mal formada
- **Solución:** Verifica que la URL tenga el formato correcto:
  ```
  https://docs.google.com/spreadsheets/d/SHEET_ID/export?gid=GID&format=csv
  ```

### GID incorrecto
- **Causa:** El `gid` en la URL no corresponde a la pestaña correcta
- **Solución:** 
  1. Haz clic en la pestaña en Google Sheets
  2. Mira la URL del navegador: `.../edit#gid=123456789`
  3. Usa ese número en la URL del CSV: `&gid=123456789`

## 📝 Checklist

- [ ] Variables de entorno agregadas en Vercel
- [ ] URLs de CSV correctas y completas
- [ ] Google Sheets configurados como públicos
- [ ] Permisos de "Cualquiera con el enlace" como "Lector"
- [ ] Proyecto redesplegado en Vercel
- [ ] Consola del navegador revisada para errores

## 🆘 Si aún no funciona

1. **Abre la consola del navegador** (F12) y copia todos los mensajes de error
2. **Verifica las URLs directamente:** Abre cada URL del CSV en el navegador para ver si descarga el CSV
3. **Revisa los logs de Vercel:** Ve a Deployments > selecciona el deployment > View Function Logs




