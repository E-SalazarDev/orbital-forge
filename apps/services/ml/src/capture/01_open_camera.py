# pixel: [220, 170 130]
# matriz de pixeles  frame[0][0] : [220, 170 130]

import cv2

camera = cv2.VideoCapture(0)

while camera.isOpened():
    ret, frame = camera.read()

    if not ret:
        break

    frame = cv2.flip(frame, 1)

    cv2.imshow("camara", frame)

    if cv2.waitKey(1) & 0xFF == 27:
        break

camera.release()
cv2.destroyAllWindows()