# 3 სავარჯიშო
num1=int(input("Enter first number:"))
num2=int(input("Enter second number:"))
if num1>num2:
    print(num1,"is greater than",num2)
elif num1==num2:
    print("Both are equal")
else:
    print(num2,"is greater than",num1)

# 4 სავარჯიშო
num3=int(input("Enter a number:"))
if num3%2==1:
    print(num3,"is an odd number.")
else:
    print(num3,"is an even number")

# 5 სავარჯიშო
num4=int(input("Enter number:"))
if num4>0:
    print("Given number is positive")
else:
    print("Given number is negative")

# 6 სავარჯიშო
num5=int(input("Enter number:"))
if num5%5==0:
    print(num5,"is divisible by 5")
else:
    print(num5,"is not divisible by 5")

# 7 სავარჯიშო
for i in range(5):
    num6=int(input("Enter a number:"))
    if num6%2==1:
        print(num6,"is an odd number.")
    else:
        print(num6,"is an even number")

# 8 სავარჯიშო
incorrect_password=0
correct_password="Goa best"
while True:
    input_password=input("Enter your password:")
    if input_password==correct_password:
        print("Your password was right")
        print("Number of incorrect password:",incorrect_password)
        break
    else:
        incorrect_password+=1
        print("Try again")

# 9 სავარჯიშო
number1=float(input("Enter first number:"))
operator=input("Enter operator(+,-,*,/):")
number2=float(input("Enter second number:"))
if operator=='+':
    print(number1+number2)
elif operator=='-':
    print(number1-number2)
elif operator=='*':
    print(number1*number2)
elif operator=='/':
    if number2!=0:
        print(number1/number2)
    else:
        print("You can't divide by 0.")
else:
    print("Error. Maybe you entered not a number or invalid operator")