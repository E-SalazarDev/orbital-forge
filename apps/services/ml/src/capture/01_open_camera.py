import cv2
import numpy as np

camera = cv2.VideoCapture(0)

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

    contours, _ = cv2.findContours(mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    if len(contours) > 0:

        mayor = max(contours, key=cv2.contourArea)

        if cv2.contourArea(mayor) > 5000:

            drawing = np.zeros_like(frame)

            cv2.drawContours(drawing, [mayor], 0, (0, 255, 0), 2)

            cv2.imshow("contorno", drawing)

    cv2.imshow("camara original", frame)
    cv2.imshow("mascara piel", mask)

    key = cv2.waitKey(1)
    if key == 27 or key == ord('q'):
        break

camera.release()
cv2.destroyAllWindows()