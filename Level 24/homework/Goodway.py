from turtle import *
def drawing_square(x_coordinate,y_coordinate):
    penup()
    goto(x_coordinate,y_coordinate)
    pendown()
    for i in range(4):
        forward(200)
        left(90)

drawing_square(100,100)
drawing_square(-300,100)
drawing_square(-300,-300)
drawing_square(100,-300)