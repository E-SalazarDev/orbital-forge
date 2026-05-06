import cv2
import numpy as np
import math

camera = cv2.VideoCapture(0)
camera.set(cv2.CAP_PROP_FRAME_WIDTH, 320)
camera.set(cv2.CAP_PROP_FRAME_HEIGHT, 240)

bgSubtractor = cv2.createBackgroundSubtractorMOG2(
    history=100,
    varThreshold=50,
    detectShadows=False
)

print("Calibrando fondo... no muevas la mano por 3 segundos")

calibrado = False
frame_count = 0

while camera.isOpened():
    ret, frame = camera.read()
    if not ret:
        break

    frame = cv2.flip(frame, 1)

    roi = frame[40:230, 40:280]

    fg_mask = bgSubtractor.apply(roi)

    frame_count += 1
    if frame_count < 90:
        cv2.putText(frame, f"Calibrando... {90 - frame_count}", (10, 40),
                    cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0, 255, 255), 2)
        cv2.rectangle(frame, (40, 40), (280, 230), (0, 255, 255), 2)
        cv2.imshow("deteccion primitiva", frame)
        cv2.waitKey(1)
        continue

    hsv = cv2.cvtColor(roi, cv2.COLOR_BGR2HSV)
    lower = np.array([0, 25, 50], dtype="uint8")
    upper = np.array([25, 255, 255], dtype="uint8")
    skin_mask = cv2.inRange(hsv, lower, upper)

    mask = cv2.bitwise_and(fg_mask, skin_mask)

    kernel = np.ones((5, 5), np.uint8)
    mask = cv2.erode(mask, kernel, iterations=1)
    mask = cv2.dilate(mask, kernel, iterations=3)

    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    cv2.rectangle(frame, (40, 40), (280, 230), (255, 255, 0), 2)

    if len(contours) > 0:
        mayor = max(contours, key=cv2.contourArea)

        if cv2.contourArea(mayor) > 2000:
            mayor_ajustado = mayor + np.array([40, 40])

            hull = cv2.convexHull(mayor_ajustado)
            hull_defectos = cv2.convexHull(mayor, returnPoints=False)
            defectos = cv2.convexityDefects(mayor, hull_defectos)

            dedos = 0

            if defectos is not None:
                for i in range(defectos.shape[0]):
                    s, e, f, d = defectos[i][0]

                    profundidad = d / 256.0
                    if profundidad < 10:
                        continue

                    inicio = tuple(mayor[s][0] + np.array([40, 40]))
                    fin    = tuple(mayor[e][0] + np.array([40, 40]))
                    lejos  = tuple(mayor[f][0] + np.array([40, 40]))

                    a = math.dist(fin, inicio)
                    b = math.dist(lejos, inicio)
                    c = math.dist(fin, lejos)

                    denominador = 2 * b * c
                    if denominador == 0:
                        continue

                    coseno = (b**2 + c**2 - a**2) / denominador
                    coseno = max(-1.0, min(1.0, coseno))
                    angulo = math.acos(coseno)

                    if angulo <= math.pi / 2:
                        dedos += 1
                        cv2.circle(frame, lejos, 6, (0, 255, 255), -1)

            dedos = min(dedos + 1, 5)

            cv2.drawContours(frame, [mayor_ajustado], 0, (0, 255, 0), 2)
            cv2.drawContours(frame, [hull], 0, (0, 0, 255), 2)

            cv2.putText(frame, f"Dedos: {dedos}", (10, 40),
                        cv2.FONT_HERSHEY_SIMPLEX, 1.2, (255, 255, 255), 2)

    cv2.imshow("deteccion primitiva", frame)

    key = cv2.waitKey(1)
    if key == 27 or key == ord('q'):
        break

camera.release()
cv2.destroyAllWindows()