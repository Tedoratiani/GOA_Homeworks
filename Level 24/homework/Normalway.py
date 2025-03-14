from turtle import *
# first square
penup()
goto(100,100)
pendown()
for i in range(4):
    forward(200)
    left(90)
# second square
penup()
goto(-300,100)
pendown()
for i in range(4):
    forward(200)
    left(90)
# third square
penup()
goto(-300,-300)
pendown()
for i in range(4):
    forward(200)
    left(90)
# fourth square
penup()
goto(100,-300)
pendown()
for i in range(4):
    forward(200)
    left(90)