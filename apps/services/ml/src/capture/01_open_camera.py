import cv2 as cv
import numpy as np
from matplotlib import pyplot as plt

# 1. Cargar la imagen de la mano
img_color = cv.imread('hands.jpeg')

# 2. Convertir a escala de grises y suavizar (Para procesos de intensidad)
img_gray = cv.cvtColor(img_color, cv.COLOR_BGR2GRAY)
img_blur = cv.medianBlur(img_gray, 5)

# --- PROCESO 1: Gaussian Thresholding (Basado en intensidad) ---
th2 = cv.adaptiveThreshold(img_blur, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, \
                           cv.THRESH_BINARY, 11, 2)

# --- PROCESO 2: Segmentación HSV (Basado en color) ---
# Convertimos a HSV para detectar el color de la piel
img_hsv = cv.cvtColor(img_color, cv.COLOR_BGR2HSV)
bajo_piel = np.array([0, 30, 60])
alto_piel = np.array([20, 150, 255])

# Creamos máscara y la invertimos (Fondo blanco, Mano negra)
mascara_piel = cv.inRange(img_hsv, bajo_piel, alto_piel)
mascara_fondo = cv.bitwise_not(mascara_piel)

# 5. Preparar la visualización con Matplotlib
# Mantenemos el orden: Original, El ejemplo que pediste (HSV), y el Gaussian
titles = ['Gris Original', 'Máscara HSV (Fondo)', 'Gaussian Thresholding']
images = [img_gray, mascara_fondo, th2]

plt.figure(figsize=(12, 4))

for i in range(3):
    plt.subplot(1, 3, i+1) 
    plt.imshow(images[i], 'gray')
    plt.title(titles[i])
    plt.xticks([]), plt.yticks([])

plt.show()