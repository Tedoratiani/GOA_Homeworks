#2) slicing არის ლისტის დაყოფა კოდის საშუალებით. ნაჩვენებია ნახაზზე.

#3)
list = [1,2,3,4,5,6,7,8,9,10]
for i in list:
    print(i)

#4)
list1 = ["a","b","c","d","e","f","g","h","i","j"]
num1 = int(input("enter number: "))
num2 = int(input("enter number: "))
if num1 > num2:
    print(list1[num1:num2])
elif num2 > num1:
    print(list1[-num2:-num1])
else:
    print([])

#5)
list2 = [1,2,3,4,5]
print(list2[0])
print(list2[2])
print(list2[-1])

#6)
list3 = ["a","b","c","d","e","f","g","h","i","j"]
print(list3[::-1])

#7)
list4 = ["dog", "cat", "bird", "mouse", "wolf", "bear", "elephant", "camel", "horse", "jaguar"]
print(list4[::2])

#8)
list5 = [1,2,3,4,5]
list5[3] = 100
print(list5)