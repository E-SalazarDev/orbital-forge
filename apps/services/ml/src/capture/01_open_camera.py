import cv2 as cv
import numpy as np


img = cv.imread('./img/hands1.jpg')

if img is None:
    print("No se pudo cargar la imagen. Revisa la ruta ./img/hands1.jpg")
    exit()

cv.imshow("hands", img)

# Convertimos a HSV
hsv = cv.cvtColor(img, cv.COLOR_BGR2HSV)

# Rango de color de piel
lower_skin = np.array([0, 40, 60])
upper_skin = np.array([25, 255, 255])

# Crear máscara
mask = cv.inRange(hsv, lower_skin, upper_skin)

# Aplicar máscara a la imagen original
resultado = cv.bitwise_and(img, img, mask=mask)

# Suavizar la máscara para limpiar ruido
mask_blur = cv.blur(mask, (7, 7))

# Convertir a blanco y negro
ret, thresh = cv.threshold(mask_blur, 0, 255, cv.THRESH_BINARY)

# =========================
# DETECTAR CONTORNO REAL
# =========================

contours, _ = cv.findContours(
    thresh,
    cv.RETR_EXTERNAL,
    cv.CHAIN_APPROX_SIMPLE
)

img_contour = img.copy()

if contours:
    # Tomamos el contorno más grande
    hand_contour = max(contours, key=cv.contourArea)

    # Dibujar contorno de la mano
    cv.drawContours(
        img_contour,
        [hand_contour],
        -1,
        (0, 255, 0),
        3
    )

    # Calcular área
    area = cv.contourArea(hand_contour)
    print("Área detectada:", area)

else:
    print("No se detectó ningún contorno.")

# Mostrar resultados
# cv.imshow("Mask", mask)
cv.imshow("Result", resultado)
# cv.imshow("Thresh", thresh)
cv.imshow("Contorno real de la mano", img_contour)

cv.waitKey(0)
cv.destroyAllWindows()