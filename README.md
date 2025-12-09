This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# 🌦️ Next.js Weather Dashboard

Aplicación web de pronóstico del tiempo desarrollada con **Next.js 14**, **TypeScript** y **Arquitectura Limpia**. Consume la API de Open-Meteo en tiempo real con soporte para múltiples idiomas (i18n).

## 📋 Requisitos Previos

* **Node.js**: v18.17.0 o superior.
* **Gestor de paquetes**: npm, yarn o pnpm.

## 🚀 Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Clonar el repositorio**
    ```bash
    git clone <URL_DE_TU_REPOSITORIO>
    cd <NOMBRE_DE_LA_CARPETA>
    ```

2.  **Instalar dependencias**
    ```bash
    npm install
    # o si usas yarn: yarn install
    ```

3.  **Iniciar servidor de desarrollo**
    ```bash
    npm run dev
    ```

4.  **Ver la aplicación**
    Abre tu navegador en [http://localhost:3000](http://localhost:3000)

> **Nota:** No se requiere configuración de variables de entorno (`.env`) ni API Keys, ya que Open-Meteo es de acceso público.

## 🛠️ Stack Tecnológico

* **Framework:** Next.js (App Router)
* **Lenguaje:** TypeScript
* **Estilos:** CSS-in-JS (Nativo)
* **Datos:** Open-Meteo API

## 📂 Estructura del Proyecto

El código sigue una arquitectura modular para facilitar la escalabilidad:

```text
app/
├── components/    # Componentes UI reutilizables
├── hooks/         # Lógica de negocio (Custom Hooks)
├── types.ts       # Definiciones de TypeScript (Interfaces)
├── constants.ts   # Configuración y Traducciones
└── page.tsx       # Vista Principal