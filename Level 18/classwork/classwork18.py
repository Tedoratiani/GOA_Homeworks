for i in range(0,20,2):
    print(i)
for i in range(1,20,2):
    print(i)

for i in range(10,31):
    if i%2==0:
        print(str(i), "is even")
    else:
        print(str(i), "is odd")
sum=0
num1=int(input("Enter your number:"))
num2=int(input("Enter your number:"))
if num1>num2:
    for i in range(num2,num1):
        if i%2==0:
            print(i)
            sum=sum+i
else:
    for i in range(num1,num2):
        if i%2==1:
            print(i)
            sum=sum+i
print(sum)
sum=0
if num1>num2:
    for i in range(num2,num1):
        if i%2==0:
            print(i)
            sum=sum*i
else:
    for i in range(num1,num2):
        if i%2==1:
            print(i)
            sum=sum*i
print(sum)