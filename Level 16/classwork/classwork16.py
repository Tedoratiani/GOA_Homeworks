# num1=int(input("Enter your number:"))
# range1=range(num1)
# sum=0
# for i in range1:
#     sum=sum+i
#     print(sum)
# correct_password="Coolguy"
# typepass=input("Enter password:")
# sum=0
# while typepass!=correct_password:
#     print("You are wrong. Try again")
#     sum=sum+1
#     typepass=input("Enter password:")
    
# print("You are right.", "You did", sum, "try.")
my_num=5
guess_number=int(input("Guess number:"))
tries=0
while my_num!=guess_number:
    print("You ar wrong.")
    tries+=1
    guess_number=int(input("Guess number:"))
print("You are right. You needed", tries, "to guess.")