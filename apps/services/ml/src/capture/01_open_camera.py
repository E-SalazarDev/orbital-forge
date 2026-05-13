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

# Detectar contornos
contours, _ = cv.findContours(
    thresh,
    cv.RETR_EXTERNAL,
    cv.CHAIN_APPROX_SIMPLE
)

img_contour = img.copy()

if contours:
    hand_contour = max(contours, key=cv.contourArea)

    area = cv.contourArea(hand_contour)
    print("Área detectada:", area)

    # Contorno real de la mano
    cv.drawContours(
        img_contour,
        [hand_contour],
        -1,
        (0, 255, 0),
        3
    )

    # =========================
    # CONVEX HULL
    # =========================

    hull_points = cv.convexHull(hand_contour)

    cv.drawContours(
        img_contour,
        [hull_points],
        -1,
        (255, 0, 0),
        3
    )

    # =========================
    # CONVEXITY DEFECTS
    # =========================

    hull_indices = cv.convexHull(
        hand_contour,
        returnPoints=False
    )

    defects = cv.convexityDefects(
        hand_contour,
        hull_indices
    )

    if defects is not None:
        for i in range(defects.shape[0]):
            s, e, f, d = defects[i, 0]

            start = tuple(hand_contour[s][0])
            end = tuple(hand_contour[e][0])
            far = tuple(hand_contour[f][0])

            # start y end = puntos del hull
            cv.circle(img_contour, start, 8, (0, 255, 255), -1)
            cv.circle(img_contour, end, 8, (0, 255, 255), -1)

            # far = punto más profundo entre dedos
            cv.circle(img_contour, far, 8, (0, 0, 255), -1)

            # línea entre start y end
            cv.line(img_contour, start, end, (255, 255, 0), 2)

            print("start:", start, "end:", end, "far:", far, "depth:", d)

    else:
        print("No se detectaron defectos convexos.")

else:
    print("No se detectó ningún contorno.")

# Mostrar resultados
cv.imshow("Result", resultado)
cv.imshow("Thresh", thresh)
cv.imshow("Hull y defectos", img_contour)

cv.waitKey(0)
cv.destroyAllWindows()