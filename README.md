# Orbital Forge

Orbital Forge es un juego web 3D de combate espacial donde el jugador puede crear, personalizar y mejorar su nave, participar en misiones en distintos planetas y enfrentarse a enemigos con comportamientos inteligentes. El proyecto integra desarrollo Full Stack, gráficos 3D en navegador, inteligencia artificial, DevOps y MLOps.

---

## Descripción del proyecto

Orbital Forge combina:

- Visualización 3D en tiempo real en navegador
- Backend con lógica de negocio y API REST
- Sistema de progresión tipo RPG
- Sistema de combate espacial
- Inteligencia artificial para control por gestos y comportamiento de enemigos
- Arquitectura escalable con CI/CD, contenedores y pipelines de ML

El objetivo es construir una experiencia interactiva donde el usuario pueda evolucionar su nave y su estilo de juego en un entorno dinámico.

---

## Concepto del juego

El jugador podrá:

- Crear un piloto
- Construir y personalizar una nave espacial
- Equipar armas, escudos, motores y módulos
- Participar en misiones en diferentes planetas o sectores
- Combatir contra enemigos con distintos comportamientos
- Obtener experiencia, recursos y mejoras
- Desbloquear nuevas zonas y niveles
- Controlar acciones mediante gestos con IA

---

## Arquitectura del sistema

El proyecto sigue una arquitectura modular basada en monorepo, separando responsabilidades en frontend, backend, servicios de IA y capa de infraestructura.

```text
                ┌────────────────────────────┐
                │        Frontend 3D         │
                │ React + Three.js + R3F     │
                └────────────┬───────────────┘
                             │
                             ▼
                ┌────────────────────────────┐
                │        Backend API         │
                │ Django + DRF              │
                └────────────┬───────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        ▼                    ▼                    ▼
 PostgreSQL            Redis / Celery         Storage
 datos del juego       tareas async            assets

                             │
                             ▼
                ┌────────────────────────────┐
                │        ML / MLOps          │
                │ modelos de IA              │
                └────────────────────────────┘


Estructura del repositorio

orbital-forge/
├── apps/
│   ├── frontend/        # Juego web 3D
│   └── backend/         # API y lógica de negocio
│
├── services/
│   └── ml/              # Modelos de IA
│
├── infra/               # Docker, despliegue
├── docs/                # Documentación
├── .github/             # CI/CD
│
├── .gitignore
├── README.md
└── LICENSE

Arquitectura del backend

apps/backend/apps/
├── common/
├── users/
├── authentication/
├── pilots/
├── ships/
├── equipment/
├── inventory/
├── missions/
├── combat/
├── planets/
├── progression/
├── economy/
├── leaderboards/
├── ai_engine/
└── media_assets/