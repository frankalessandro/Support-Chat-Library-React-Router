# React Router Practice Project

> **Este proyecto forma parte del curso [React Router: Navegación declarativa y framework](https://cursos.devtalles.com/courses/react-router) de Fernando Herrera en Devtalles.**

Este proyecto es una práctica de integración de **React Router v7** en una aplicación moderna construida con **React** y **TypeScript**. Además, se utiliza **TanStack Query** para la gestión eficiente de datos y caché en el frontend, y **v0 ShadCN** junto a **TailwindCSS** para la UI.

## Tecnologías principales

- **React** + **TypeScript**: Desarrollo de interfaces modernas y tipadas.
- **React Router v7**: Manejo avanzado de rutas, layouts anidados y navegación.
- **TanStack Query**: Fetching, caching y sincronización de datos asíncronos.
- **v0 & ShadCN**: Componentes UI modernos y accesibles.
- **TailwindCSS**: Utilidades para estilos rápidos y responsivos.
- **Vite**: Herramienta de desarrollo rápida para proyectos React.

## Características implementadas

### React Router
- **Rutas**: Definición de rutas principales y secundarias.
- **Rutas padres (Nested Routes)**: Layouts anidados para estructurar la navegación.
- **Rutas hijas**: Subrutas dentro de rutas principales.
- **Outlets**: Renderizado de componentes hijos en layouts padres.
- **Segmentación**: Organización de rutas por módulos (auth, chat, etc).
- **useParams**: Acceso a parámetros dinámicos de la URL.
- **Parámetros de rutas**: Rutas dinámicas para chats y detalles.
- **Navegación manual**: Uso de hooks para redirección programática.
- **Link y NavLink**: Navegación declarativa y estilos activos.
- **Suspense y Lazy Load**: Carga diferida de componentes para optimizar el rendimiento.
- **Rutas privadas**: Protección de rutas según autenticación.

### TanStack Query
- **Mutations**: Envío y actualización de datos (por ejemplo, mensajes de chat).
- **Caché**: Almacenamiento y reutilización de datos consultados.
- **Invalidación de queries**: Refresco de datos tras acciones relevantes (logout, mutaciones).
- **Query Client como gestor de estado**: Centralización y control del estado de datos asíncronos.

## Estructura general del proyecto

```
react-router-course/
├── src/
│   ├── app/           # Rutas y layouts principales
│   ├── auth/          # Páginas y layouts de autenticación
│   ├── chat/          # Componentes, layouts y páginas de chat
│   ├── components/    # Componentes UI reutilizables
│   ├── fakeData/      # Datos simulados y utilidades
│   └── ...
├── public/
├── package.json
├── tsconfig.json
└── ...
```

## Instalación y uso

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repo>
   cd react-router-course
   ```
2. **Instala las dependencias:**
   ```bash
   npm install
   ```
3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la app.

## Características principales

- Navegación protegida y pública usando React Router.
- Layouts anidados y rutas dinámicas para chats y autenticación.
- Simulación de datos de usuarios, clientes y mensajes.
- Gestión de estado y fetching de datos con TanStack Query.
- Componentes reutilizables.

---

> Proyecto creado con fines educativos para practicar conceptos modernos de enrutamiento, manejo de datos y UI en React.
