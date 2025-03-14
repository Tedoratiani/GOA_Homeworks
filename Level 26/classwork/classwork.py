def calculator(num1,num2,operator):
    if operator=="+":
        print(num1+num2)
    elif operator=="-":
        print(num1-num2)
    elif operator=="*":
        print(num1*num2)
    elif operator=="/":
        if num2!=0:
            print(num1/num2)
        else:
            print("You can't divide by zero.")
    else:
        print("Invalid operator.")
input_num1=int(input("first number:"))
input_num2=int(input("second number:"))
input_operator=input("operator:")
calculator(input_num1,input_num2,input_operator)

def greet(name):
    print("გამარჯობა",name)
greet("თეოდორე")
greet(input("ჩაწერეთ თვენი სახელი:"))

def manual_range(start,end,step):
   
    for i in range(start,end,step):
        if i%2!=1:
            print(i)
        else:
            print("It is not am even number")

manual_range(12,100,4)
manual_range(34,345,20)
manual_range(12,4444,56)
manual_range(1723,5,-34)
manual_range(123,345,23)
manual_range(1,200,10)

def manual_len(list):
    lenght=0
    for a in list:
        lenght+=1
    print("The lenght is", lenght)

list=[1,2,3,4,5,6,7,8,9,10]
manual_len(list)            