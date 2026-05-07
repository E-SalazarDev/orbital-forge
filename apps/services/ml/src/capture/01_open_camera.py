import cv2 as cv
import numpy as np
from matplotlib import pyplot as plt

# 1. Cargar la imagen
img_color = cv.imread('hands.jpeg')
# Convertimos a RGB para que Matplotlib muestre los colores correctos
img_rgb = cv.cvtColor(img_color, cv.COLOR_BGR2RGB)

# 2. Procesos de Intensidad (Gris y Gaussian)
img_gray = cv.cvtColor(img_color, cv.COLOR_BGR2GRAY)
img_blur = cv.medianBlur(img_gray, 5)
th2 = cv.adaptiveThreshold(img_blur, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, \
                           cv.THRESH_BINARY, 11, 2)

# 3. Proceso HSV
img_hsv = cv.cvtColor(img_color, cv.COLOR_BGR2HSV)
bajo_piel = np.array([0, 30, 60])
alto_piel = np.array([20, 150, 255])

# Creamos la máscara (Mano blanca, fondo negro para findContours)
mascara_piel = cv.inRange(img_hsv, bajo_piel, alto_piel)

# Inversión para el ejemplo visual (Fondo blanco, mano negra)
mascara_fondo = cv.bitwise_not(mascara_piel)

# --- NUEVO: EXTRAER CONTORNOS DESDE LA MÁSCARA HSV ---
# Usamos 'mascara_piel' porque los contornos se buscan sobre objetos blancos
contornos, _ = cv.findContours(mascara_piel, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)

# Dibujamos los contornos sobre una copia de la imagen original
img_con_contornos = img_rgb.copy()
cv.drawContours(img_con_contornos, contornos, -1, (0, 255, 0), 3) # Verde

# 4. Visualización en cuadrícula 2x2
titles = ['Gris Original', 'Gaussian Thresholding', 
          'HSV Máscara (Fondo)', 'HSV Contornos sobre Original']
images = [img_gray, th2, mascara_fondo, img_con_contornos]

plt.figure(figsize=(12, 8))

for i in range(4):
    plt.subplot(2, 2, i+1)
    # Las primeras 3 son escala de grises, la última es color
    if i < 3:
        plt.imshow(images[i], 'gray')
    else:
        plt.imshow(images[i])
    plt.title(titles[i])
    plt.xticks([]), plt.yticks([])

plt.tight_layout()
plt.show()