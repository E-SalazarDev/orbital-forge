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