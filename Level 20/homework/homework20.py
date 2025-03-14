# 3 task
num1=int(input("Enter first number:"))
num2=int(input("Enter second number:"))
num3=int(input("Enter third number:"))
if num1>=num2 and num1>=num2:
    print(num1, "is the largest number.")
elif num2>=num1 and num2>=num3:
    print(num2, "is the largest number.")
elif num3>=num1 and num3>=num2:
    print(num3, "is the largest number")
# 4 task
score_input=int(input("Enter student's grade(0-100):"))
if 100>score_input>=90:
    print("Students grade is A.")
elif score_input>=80:
    print("Students grade is B.")
elif score_input>=70:
    print("Students grade is C.")
elif score_input>=60:
    print("Students grade is D")
elif score_input<0 or score_input>100:
    print("You entered not valid score.")
else:
    print("Students grade is F")
# 5 task
number_input=float(input("Enter your number:"))
if number_input>0:
    print(number_input, "is positive.")
elif number_input<0:
    print(number_input, "is negative.")
else:
    print(number_input, "is zero.")

# 6 task
num_input1=int(input("Enter first number:"))
num_input2=int(input("Enter second number:"))
sum=0
if num_input1>num_input2:
    for i in range(num_input2, num_input1+1):
        sum+=i
    print("Sum of numbers is ", sum)
elif num_input2>num_input1:
    for i in range(num_input1, num_input2+1):
        sum+=i
    print("Sum of numbers is ", sum)
else:
    print("Something is wrong.")

# 7 task
input=int(input("Enter your number:"))
if input>1:
    is_prime=True
    for i in range(2,int(input**0.5)+1):
        if input%i==0:
            is_prime=False
            break
    if is_prime:
        print(input,"is prime number.")
    else:
        print(input,"is not prime number")
else:
    print(input,"is not prime number")
    
# 8 task
list=["apple","pineapple","watermelon","peach","melon"]
print(list[0])
print(list[2])
print(list[4])

# 9 task
list1=[1,2,3,4,5,True,False,25.5,"cool guy","idk","apple","pineapple","watermelon","peach","melon","1","2","3","4","5"]
for x in range(20):
    print(list1[i])