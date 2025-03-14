for a in range(50):
    print("GOA BEST!!!")

sum=0
while sum!=50:
    print("GOA BEST!!!")
    sum=sum+1

sum1=0
while sum1!=10:
    sum1+=1
    print(sum1)

sum2=0
while sum2<20:
    print(sum2)
    sum2+=2

sum3=10
while sum3>0:
    print(sum3)
    sum3-=1
print("Blast off")

password="somethin123"
guess=input("Enter password:")
while guess!=password:
    print("Try again")
    guess=input("Enter password:") 
print("Correct")

username = 'teodore123'
password = 'Tedo123@'

while True:
    input_name = input("Username: ")
    input_password = input("Password: ")

    if input_name == username and input_password == password:
        break
    else:
        print("Try again:)")

num = int(input("Enter number to make its factorial: "))
factorial = 1
counter = num
while counter > 0:
    factorial *= counter
    counter -= 1
print(factorial)