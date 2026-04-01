# 🚀 Orbital Forge

Plataforma web 3D interactiva para explorar el sistema solar, constelaciones y crear sistemas solares personalizados, con integración de control por gestos mediante modelos de aprendizaje automático.

---

## 🌌 Descripción del proyecto

**Orbital Forge** es una aplicación moderna que combina:

* Visualización 3D en tiempo real (WebGL)
* Backend robusto con API REST
* Sistema de autenticación y comunidad
* Modelos de inteligencia artificial para control por gestos
* Arquitectura escalable con CI/CD y contenedores

El objetivo es crear una experiencia inmersiva donde los usuarios puedan:

* Explorar planetas y constelaciones
* Consultar información científica y visual
* Crear sistemas solares personalizados
* Compartirlos con la comunidad
* Interactuar mediante gestos (IA)

---

## 🧱 Arquitectura del sistema

El proyecto sigue una arquitectura **modular basada en monorepo**, separando responsabilidades por capas:

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
 (datos)               (tasks async)          (MinIO/S3)
 
                             │
                             ▼
                ┌────────────────────────────┐
                │      ML / Gestures         │
                │ TensorFlow / ONNX          │
                └────────────────────────────┘
```

---

## 🧩 Estructura del repositorio

```text
orbital-forge/
├── apps/
│   ├── frontend/        # Aplicación web 3D (React + Three.js)
│   └── backend/         # API Django + lógica de negocio
│
├── services/
│   └── ml/              # Modelos de IA para reconocimiento de gestos
│
├── infra/               # Docker, Nginx, scripts de despliegue
├── docs/                # Documentación técnica
├── .github/             # CI/CD (GitHub Actions)
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 🧠 Módulos principales

### 🎨 Frontend (`apps/frontend`)

* Renderizado 3D con Three.js
* Integración con React Three Fiber
* Interfaz futurista interactiva
* Consumo de API backend
* Control por gestos (futuro)

---

### ⚙️ Backend (`apps/backend`)

* API REST con Django y Django REST Framework
* Autenticación (JWT)
* Gestión de usuarios
* Sistemas solares personalizados
* Comunidad (likes, comentarios, favoritos)
* Administración de assets

---

### 🤖 ML / Gestures (`services/ml`)

* Captura de datos de gestos
* Preprocesamiento de landmarks
* Entrenamiento de modelos
* Inferencia en tiempo real
* Exportación a ONNX / TensorFlow.js

---

### 🐳 Infraestructura (`infra`)

* Dockerfiles
* Docker Compose (dev/prod)
* Nginx (reverse proxy)
* Scripts de despliegue

---

### 📄 Documentación (`docs`)

* Arquitectura
* API
* Decisiones técnicas
* ML pipeline
* DevOps

---

## 🛠️ Tecnologías utilizadas

### Frontend

* React
* Vite
* TypeScript
* Three.js
* React Three Fiber
* Drei
* Zustand
* Tailwind CSS

---

### Backend

* Django
* Django REST Framework
* PostgreSQL
* Celery
* Redis

---

### Machine Learning

* TensorFlow / Keras
* NumPy
* OpenCV
* ONNX Runtime

---

### Infraestructura

* Docker
* Docker Compose
* Nginx
* GitHub Actions (CI/CD)

---

## ⚙️ Configuración del entorno

### Backend

```powershell
cd apps/backend

python -m venv venv
venv\Scripts\activate

pip install -r requirements\dev.txt

python manage.py migrate
python manage.py runserver
```

---

### Frontend

```bash
cd apps/frontend

npm install
npm run dev
```

---

## 🔐 Variables de entorno

Cada módulo utiliza su propio archivo `.env`.

Ejemplo backend:

```env
DEBUG=True
SECRET_KEY=change-me

DB_NAME=orbital_forge
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432

REDIS_URL=redis://localhost:6379/0
```

---

## 🚀 CI/CD

El proyecto utiliza GitHub Actions para:

* Validación de código (lint)
* Ejecución de tests
* Build de contenedores Docker
* Despliegue automático (futuro)

Ubicación:

```text
.github/workflows/
```

---

## 📦 Flujo de desarrollo

1. Crear rama desde `main`
2. Desarrollar feature
3. Commit limpio
4. Pull Request
5. CI valida
6. Merge

---

## ⚠️ Buenas prácticas

* No subir:

  * `.env`
  * `venv/`
  * `node_modules/`
  * archivos de datos grandes
* Usar `.env.example`
* Mantener separación de responsabilidades
* Documentar cambios importantes

---

## 🧭 Roadmap

* [ ] Visualización 3D base
* [ ] API de planetas
* [ ] Autenticación
* [ ] Sistemas solares personalizados
* [ ] Comunidad
* [ ] Control por gestos
* [ ] Optimización 3D
* [ ] Deploy en producción

---

## 👨‍💻 Autor

Proyecto desarrollado como parte de un portafolio profesional enfocado en:

* Desarrollo Full Stack
* Visualización 3D Web
* Inteligencia Artificial
* Arquitecturas modernas

---
