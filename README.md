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
