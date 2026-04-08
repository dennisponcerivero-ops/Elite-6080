# Instrucciones de Deploy

## Deploy en Vercel

Este proyecto está configurado para desplegarse correctamente en Vercel con soporte completo para React Router.

### Configuración Incluida

- **public/index.html**: Template HTML para producción
- **src/main.tsx**: Punto de entrada de React para producción
- **vercel.json**: Configuración de rewrites para rutas SPA
- **vite.config.ts**: Configuración de build para Vercel

### Comando de Build

```bash
pnpm run build
```

### Solución al Error 404 en Móvil

El error 404 que aparecía en móvil al acceder directamente a rutas como `/apartment/1` se solucionó con:

1. Configuración de `rewrites` en `vercel.json` para redirigir todas las rutas a `index.html`
2. Creación de un entrypoint de producción separado (`src/main.tsx`)
3. Template HTML en `public/index.html` para el build

### Después del Deploy

Una vez que hagas push de estos cambios a tu repositorio y Vercel haga el deploy automático, las rutas funcionarán correctamente en todos los dispositivos.
