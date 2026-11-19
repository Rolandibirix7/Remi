# Remi — landing page

Landing page promocional responsive creada con React + Vite. Incluye el logo y el banner proporcionados.

## Ejecutar localmente

1. Instala Node.js (18 o superior).
2. En esta carpeta ejecuta:

```bash
npm install
npm run dev
```

3. Abre la dirección local que muestra Vite.

## Configurar la descarga del APK

Copia el instalador de Android dentro de la carpeta `public/` y nómbralo exactamente:

```text
public/remi.apk
```

Los botones principales ya apuntan a `/remi.apk` y descargarán el archivo con el nombre `Remi.apk`. Si el archivo tiene otro nombre, actualiza `APK_FILE` en `src/App.jsx`.

**Importante:** el proyecto no incluye el APK porque todavía no se ha proporcionado. Sin ese archivo, el enlace de descarga devolverá un error 404.

## Publicar

Ejecuta `npm run build`. La carpeta `dist/` resultante puede desplegarse en Vercel, Netlify o cualquier hosting estático compatible.

## Personalización

- Colores y responsive: `src/styles.css`
- Textos y secciones: `src/App.jsx`
- Imágenes: `public/`
