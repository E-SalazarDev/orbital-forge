
npm create vite@latest . -- --template react
Need to install the following packages:
create-vite@9.0.4
Ok to proceed? (y) y


> npx
> create-vite . react

│
◇  Current directory is not empty. Please choose how to proceed:
│  Ignore files and continue
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in C:\Users\Eduardo\Desktop\Dev\Proyectos\orbital-forge\apps\frontend...
│
◇  Installing dependencies with npm...

added 152 packages, and audited 153 packages in 14s

36 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
│
◇  Starting dev server...

> frontend@0.0.0 dev
> vite


  VITE v8.0.8  ready in 404 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help



=====================================
stack
=====================================
Librerías principales del frontend

El frontend de Orbital Forge utiliza un conjunto de librerías seleccionadas cuidadosamente para garantizar rendimiento, escalabilidad y una experiencia visual moderna, especialmente en la integración de gráficos 3D.
=====================================
React Router DOM

Qué es:
Librería de enrutamiento para aplicaciones React.

Uso en el proyecto:
Se utiliza para manejar la navegación entre las distintas secciones de la aplicación, tales como:

Página principal (Home)
Exploración de planetas
Exploración de constelaciones
Creación de sistemas solares
Perfil de usuario

Rol en el sistema:
Permitir una experiencia tipo SPA (Single Page Application), evitando recargas completas de la página.

=====================================
Zustand

Qué es:
Librería ligera para manejo de estado global.

Uso en el proyecto:
Se utiliza para almacenar y compartir estados entre componentes, como:

Estado de la escena 3D
Planeta seleccionado
Sistema solar activo
Estado de interacción de la UI
Configuración del usuario en sesión

Rol en el sistema:
Simplificar el manejo de estado global y evitar el prop drilling.

=====================================
TanStack Query
=====================================
Qué es:
Librería para manejo de peticiones a APIs con cache y sincronización.

Uso en el proyecto:
Se utiliza para:

Consumir la API del backend (Django)
Cachear datos (planetas, constelaciones, sistemas solares)
Manejar estados de carga (loading)
Manejar errores de red
Sincronizar datos automáticamente

Rol en el sistema:
Optimizar el consumo de API y mejorar el rendimiento evitando llamadas innecesarias.

=====================================
Three.js
=====================================
Qué es:
Motor de renderizado 3D basado en WebGL.

Uso en el proyecto:
Se utiliza para construir la representación visual del entorno espacial:

Planetas
Constelaciones
Sistemas solares personalizados
Entorno espacial

Rol en el sistema:
Motor principal de la experiencia visual 3D.

=====================================
@react-three/fiber
=====================================
Qué es:
Integración de Three.js con React.

Uso en el proyecto:
Permite construir escenas 3D utilizando componentes React, facilitando:

Control del renderizado
Integración con el estado de React
Modularidad de la escena

Rol en el sistema:
Actuar como puente entre React y Three.js.

=====================================
@react-three/drei
=====================================
Qué es:
Colección de utilidades para React Three Fiber.

Uso en el proyecto:
Se utiliza para simplificar tareas comunes como:

Iluminación
Controles de cámara
Carga de modelos
Helpers visuales

Rol en el sistema:
Reducir código repetitivo y acelerar el desarrollo de la escena 3D.


=====================================
Tailwind CSS
=====================================
Qué es:
Framework de estilos basado en clases utilitarias.

Uso en el proyecto:
Se utiliza para construir la interfaz visual:

Layout (Flexbox, Grid)
Espaciado
Tipografía
Colores
Diseño responsive

Rol en el sistema:
Crear una interfaz moderna, consistente y eficiente sin complejidad en CSS.

=====================================
Motion
=====================================
Qué es:
Librería de animaciones para React.

Uso en el proyecto:
Se utiliza para animaciones de interfaz como:

Transiciones entre vistas
Apertura y cierre de paneles
Microinteracciones
Animaciones de elementos UI

Rol en el sistema:
Mejorar la experiencia de usuario mediante animaciones suaves.

Nota: No se utiliza para animaciones 3D; esas se manejan directamente con Three.js.

=====================================
clsx
=====================================
Qué es:
Utilidad para manejar clases CSS condicionales.

Uso en el proyecto:
Se utiliza para:

Aplicar clases dinámicas con Tailwind
Manejar estados visuales (activo, seleccionado, hover, etc.)

Rol en el sistema:
Simplificar la lógica de estilos condicionales.


=====================================
lucide-react
=====================================
Qué es:
Librería de íconos moderna y ligera.

Uso en el proyecto:
Se utiliza para:

Íconos de navegación
Botones
Elementos visuales de la interfaz

Rol en el sistema:
Mejorar la claridad visual y la experiencia del usuario.

=====================================
Nota general del stack

El stack del frontend fue seleccionado bajo los siguientes principios:

Mantener alto rendimiento, especialmente en la renderización 3D
Evitar el uso de librerías pesadas innecesarias
Permitir escalabilidad del proyecto
Separar claramente responsabilidades entre:
Lógica de negocio
Renderizado 3D
Interfaz de usuario