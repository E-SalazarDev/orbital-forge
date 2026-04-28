# Orbital Forge ML Service

Este módulo contiene la base de inteligencia artificial para Orbital Forge.

## Objetivo

El primer objetivo es construir un modelo de reconocimiento de gestos para controlar acciones del juego mediante la cámara.

## Gestos iniciales

- open_hand: mover o dirigir nave
- fist: disparar
- pinch: activar escudo
- swipe_left: esquivar a la izquierda
- swipe_right: esquivar a la derecha
- thumbs_up: confirmar acción

## Flujo de trabajo

```text
Webcam
↓
MediaPipe
↓
Landmarks de mano
↓
Preprocesamiento
↓
Dataset CSV
↓
Entrenamiento del modelo
↓
Evaluación
↓
Exportación
↓
Integración con frontend


# Orbital Forge ML Service

Este módulo contiene la implementación de inteligencia artificial del proyecto Orbital Forge.

Su objetivo principal es desarrollar modelos que puedan integrarse al juego web 3D, comenzando con un sistema de reconocimiento de gestos para controlar la nave espacial mediante la cámara.

---

## Propósito

El servicio de ML permite:

- Capturar datos de gestos del usuario
- Procesar y limpiar datasets
- Entrenar modelos de clasificación
- Evaluar modelos
- Ejecutar inferencia en tiempo real
- Exportar modelos para integración con frontend

---

## Flujo de trabajo

```text
Captura de datos
↓
Extracción de landmarks (MediaPipe)
↓
Preprocesamiento
↓
Construcción de dataset
↓
Entrenamiento del modelo
↓
Evaluación
↓
Exportación
↓
Integración en el juego