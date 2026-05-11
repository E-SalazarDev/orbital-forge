import cv2 as cv
import numpy as np
from matplotlib import pyplot as plt


img = cv.imread('hands.jpeg')

cv.imshow("hands", img)

# def rescaleFrame(frame, scale=0.75):
#     width = int(frame.shape[1] * scale)
#     height = int(frame.shape[0] * scale)

# convertimos a hsv
hsv = cv.cvtColor(img, cv.COLOR_BGR2HSV)

# definir el rango de color menor
lower_red = np.array([0, 40, 60])
# rango superior de la piel
upper_red = np.array([25,255,255])

# crear la mascara
# Detectar piel en el rango de valores de píxeles inferiores y superiores en el espacio de color HSV
mask = cv.inRange(hsv, lower_red, upper_red)

# aplicar la máscara a la imagen original
resultado  =  cv.bitwise_and(img, img, mask=mask)

# Desenfocar la imagen para mejorar el enmascaramiento.
blurred = cv.blur(resultado, (7,7))

# Thresh: Aplicar la trillada.

ret, thresh = cv.threshold(blurred,0,255,cv.THRESH_BINARY)

# cv.imshow("Mask", mask)
cv.imshow("Result", resultado)
cv.imshow("thresh", thresh)
cv.waitKey(0)
cv.destroyAllWindows()