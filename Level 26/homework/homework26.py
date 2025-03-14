# Sum of Two Numbers: Write a function that takes two numbers as input and returns their sum.
def sumoftwo(num1,num2):
    sum=num1+num2
    print("Sum of given numbers:",sum)

user_num1=int(input("Enter first number:"))
user_num2=int(input("Enter second number:"))
sumoftwo(user_num1,user_num2)

# Even or Odd: Create a function that determines whether a given integer is even or odd.
def Even_or_Odd(number):
    if number%2!=1:
        print("Given number is even")
    elif number==0:
        print("Given number is Zero")
    elif number<0:
        print("Given number is not natural number.")
    else:
        print("Given number is an odd")

user_number=int(input("Give the number:"))
Even_or_Odd(user_number)

# Reverse a String: Implement a function that takes a string and returns it reversed.
def rev_string(string):
    print(string[::-1])

user_string=input("Enter a word:")
rev_string(user_string)

# Find Maximum: Create a function that takes a list of numbers and returns the maximum value.
def maximum(list):
    if len(list)!=0:
        max_value=list[0]
        for num in list:
            if num>max_value:
                max_value=num
    print(max_value)
maximum([1,2,34,5,342,12])

# Factorial: Implement a function to calculate the factorial of a given number.
# ვერ გავიგე
