# Sylvia PAES

Base de proyecto en Next.js para un preuniversitario de PAES Comprensión Lectora.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase (preparado)
- Vercel

## Cómo correrlo
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Copia `.env.example` a `.env.local`
3. Completa las variables de Supabase
4. Inicia el proyecto:
   ```bash
   npm run dev
   ```

## Rutas incluidas
- `/login`
- `/dashboard`
- `/dashboard/material`
- `/dashboard/horarios`
- `/dashboard/avisos`
- `/dashboard/pagos`
- `/admin`

## Qué falta para dejarlo productivo
- autenticación real con Supabase Auth
- protección de rutas por rol
- lectura/escritura de base de datos
- subida real de archivos a Supabase Storage
- formularios conectados
- dominio y deploy en Vercel
