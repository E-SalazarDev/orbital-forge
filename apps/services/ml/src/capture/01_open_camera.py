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

    cv2.imshow("camara original", frame)
    cv2.imshow("mascara piel", mask)

    if cv2.waitKey(1) == 27:
        break

camera.release()
cv2.destroyAllWindows()