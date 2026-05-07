import cv2
import numpy as np
import math

# ABRIR IMAGEN DE MANO

import cv2 as cv 

# Si ejecutas desde la carpeta \ml\, la ruta debe ser:
img = cv.imread('hands.jpeg')

cv.imshow('hands', img)
cv.waitKey(0)

x = 100 
y = 50

# acceso a pixeles en numpy es yx , fila, columna 
pixel = img[y, x]
print(f"El valor del píxel en ({x}, {y}) es: {pixel}")