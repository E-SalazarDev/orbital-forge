import cv2
import numpy as np
import math

camera = cv2.VideoCapture(0)
camera.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
camera.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

while camera.isOpened():
    ret, frame = camera.read()

    if not ret:
        break

    frame = cv2.flip(frame, 1)

    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    lower = np.array([0, 48, 80], dtype="uint8")
    upper = np.array([20, 255, 255], dtype="uint8")

    mask = cv2.inRange(hsv, lower, upper)

    kernel = np.ones((3, 3), np.uint8)
    mask = cv2.erode(mask, kernel, iterations=1)
    mask = cv2.dilate(mask, kernel, iterations=1)

    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    if len(contours) > 0:

        mayor = max(contours, key=cv2.contourArea)

        if cv2.contourArea(mayor) > 5000:

            hull = cv2.convexHull(mayor)
            hull_defectos = cv2.convexHull(mayor, returnPoints=False)
            defectos = cv2.convexityDefects(mayor, hull_defectos)

            dedos = 0

            if defectos is not None:
                for i in range(defectos.shape[0]):

                    s, e, f, d = defectos[i][0]

                    inicio = tuple(mayor[s][0])
                    fin    = tuple(mayor[e][0])
                    lejos  = tuple(mayor[f][0])

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
                        cv2.circle(frame, lejos, 8, (0, 255, 255), -1)

            dedos = min(dedos + 1, 5)

            cv2.drawContours(frame, [mayor], 0, (0, 255, 0), 2)
            cv2.drawContours(frame, [hull], 0, (0, 0, 255), 2)

            cv2.putText(frame, f"Dedos: {dedos}", (10, 50),
                        cv2.FONT_HERSHEY_SIMPLEX, 1.5, (255, 255, 255), 3)

    cv2.imshow("deteccion", frame)

    key = cv2.waitKey(1)
    if key == 27 or key == ord('q'):
        break

camera.release()
cv2.destroyAllWindows()