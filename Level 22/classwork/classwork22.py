list=["a","b","c","d","e","f","g","h","i","j"]
num1=int(input("Enter number:"))
if num1>=0 and num1<len(list):
    print(list[num1])
elif num1>=len(list)*-1 and num1<-1:
    print(list[num1])
else:
    print("List is shorter than given number.")

list1=[2,4,6,8,10,12,14,16,18,20]
for i in list1:
    print(i*2)
    print(i/2)
