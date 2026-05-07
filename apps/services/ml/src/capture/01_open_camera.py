import cv2 as cv
import numpy as np
from matplotlib import pyplot as plt

# 1. Cargar la imagen de la mano
img_color = cv.imread('hands.jpeg')

# 2. Convertir a escala de grises (Paso CRUCIAL para Thresholding)
img_gray = cv.cvtColor(img_color, cv.COLOR_BGR2GRAY)

# 3. Aplicar un filtro para reducir el ruido (suaviza la imagen)
img_blur = cv.medianBlur(img_gray, 5)

# 4. Aplicar los dos tipos de Umbralizado Adaptativo
# cv.ADAPTIVE_THRESH_MEAN_C: Calcula el promedio de los píxeles vecinos
th1 = cv.adaptiveThreshold(img_blur, 255, cv.ADAPTIVE_THRESH_MEAN_C, \
                           cv.THRESH_BINARY, 11, 2)

# cv.ADAPTIVE_THRESH_GAUSSIAN_C: Calcula una suma pesada (más inteligente)
th2 = cv.adaptiveThreshold(img_blur, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, \
                           cv.THRESH_BINARY, 11, 2)

# 5. Preparar la visualización con Matplotlib
titles = ['Gris Original', 'Mean Thresholding', 'Gaussian Thresholding']
images = [img_gray, th1, th2]

plt.figure(figsize=(12, 4)) # Ajustar tamaño de la ventana

for i in range(3):
    plt.subplot(1, 3, i+1) # 1 fila, 3 columnas
    plt.imshow(images[i], 'gray')
    plt.title(titles[i])
    plt.xticks([]), plt.yticks([]) # Quitar los números de los ejes

plt.show()