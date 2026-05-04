import cv2 as cv 

img = cv.imread('hands.jpeg')

cv.imshow('hands', img)

cv.waitKey(0)
