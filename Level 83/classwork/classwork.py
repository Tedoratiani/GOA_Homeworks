#1
class Car:
    def __init__(self,color,brand,power,year):
        self.color=color
        self.brand=brand
        self.power=power
        self.year=year
    
    def drive(self):
        return f"You are driving {self.color} {self.brand}."
    
    def destroy(self):
        return f"You destroyed {self.color} {self.brand}."
    

car1 = Car("yellow", "Toyota", 450, 2025)
car2 = Car("red", "BMW", 700,2005 )
car3 = Car("green", "Mercedes", 300, 2000)


cars = [car1, car2, car3]

for i in cars:
    print(f"This is {i.color} {i.brand} car with {i.power} horse power which was made in {i.year}.")
    print(i.drive())
    print(i.destroy())
    
#2
class Person:
    count = 0 

    def __init__(self, name, age, origin):
        self.name = name
        self.age = age
        self.origin = origin
        Person.count += 1 

    def hello(self):
        return f"hello, I am {self.name}, a {self.age} years old {self.origin}."

    def newage(self):
        self.age += 1
        return f"{self.name} is now a {self.age}."


person1 = Person("Tedo", 15, "Georgian")
person2 = Person("Nino", 16, "Georgian")
person3 = Person("Lizi", 15, "Georgian")


people = [person1, person2,person3]

for i in people:
    print(i.hello())
    print(i.newage())

print(f"There are {Person.count} people.")

#3

#Dunder method არის  მეთოდი პითონში, რომელიც იყენებს ორ underscore ხაზს მეთოდის სახელის გარშემო, მაგალითად __init__ და ა.შ. 
# ამ მეთოდებს პითონი მოიხმობს თავისით, როცა კონკრეტული ოპერაციები ხდება, მაგალითად ობიექტის დაბეჭდვა და სხვა.

#4

# Instance variables არის ცვლადები, რომლებიც კონკრეტულ ობიექტს ეკუთვნის კლასში. მათ გააჩნიათ თითოეული ობიექტის უნიკალურ 
# მონაცემები და შეიძლება მათ შორის იყოს განსხვავება თითოეულ ობიექტში, რომელიც იქმნება კლასისგან.

#5
# Class variables არის ცვლადები, რომლებიც იქმნება კლასის დონეზე და არ არიან შეზღუდულნი კონკრეტულ ობიექტებზე. ისინი საერთო
#  იქნება ყველა ობიექტისთვის, რომელიც ერთი და იმავე კლასიდან არის შექმნილი. განსხვავებით instance variables რომელიც ყველა 
# ობიექტში ცალ-ცალკეა, კლასის ცვლადები ერთნაირია  ყველა ობიექტისთვის.

#6

# Blueprint ობიექტ-oriented programming (OOP) კონტექსტში არის კლასის ცნობა, რომელიც მოქმედებს როგორც ჩვეულებრივი 
# ინსტრუქცია იმისათვის, რომ შეიქმნას ობიექტები. ანუ, კლასი წარმოადგენს blueprint-ს, რომელიც განსაზღვრავს ობიექტების სტრუქტურას, 
#  ატრიბუტებს და მეთოდებს.