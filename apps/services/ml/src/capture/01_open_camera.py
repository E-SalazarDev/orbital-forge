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

# definir el rango de color 
lower_red = np.array([0, 100, 100])

upper_red = np.array([10,255,255])

# crear la mascara
mask = cv.inRange(hsv, lower_red, upper_red)

# aplicar la máscara a la imagen original
resultado  =  cv.bitwise_and(img, img, mask=mask)

cv.imshow("Mask", mask)
cv.imshow("Result", resultado)
cv.waitKey(0)
cv.destroyAllWindows()