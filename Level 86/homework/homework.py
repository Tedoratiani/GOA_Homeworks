# 1) ახსენით რა არის abstractclasses
# აბსტრაქტული კლასი — ეს არის კლასი, რომელიც არ უნდა იქნეს გამოყენებული პირდაპირ, არამედ გამოიყენება როგორც "შაბლონი" სხვა 
# კლასებისთვის.

# 2) ახსენით რა არის და რას ნიშნავს polymorphism
# პოლიმორფიზმი ნიშნავს, რომ ერთსა და იმავე მეთოდს შეიძლება ჰქონდეს განსხვავებული ქცევა სხვადასხვა კლასში.

# 3) ახსენით რა არის და რას ნიშნავს aggregation
# Aggregation არის ურთიერთობა, სადაც ერთი კლასი შეიცავს სხვა კლასის ობიექტს,მაგრამ ეს ურთიერთობა არაა ძალიან მკაცრი – 
# მაგალითად: ადამიანი და მისი მანქანა – მანქანა ადამიანის "ნაწილი" არაა, უბრალოდ მას ეკუთვნის.

# 4) გააკეთეთ abstractclasses მაგალითი
from abc import ABC, abstractmethod

class Animal(ABC):  
    @abstractmethod
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        return "Woof"

class Cat(Animal):
    def make_sound(self):
        return "Meow"
dog = Dog()
print(dog.make_sound())
# 5) გააკეთეთ polymorphismის მაგალითი
class Bird:
    def move(self):
        return "Flies in the sky"
class Fish:
    def move(self):
        return "Swims in the water"
def show_movement(animal):
    print(animal.move())
eagle = Bird()
shark = Fish()
show_movement(eagle) 
show_movement(shark)

# 6) გააკეთეთ aggreagationის მაგალითი
class Engine:
    def __init__(self, power):
        self.power = power
class Car:
    def __init__(self, brand, engine):
        self.brand = brand
        self.engine = engine  
    def car_info(self):
        return f"{self.brand} with {self.engine.power} HP engine"
engine = Engine(200)
car = Car("Toyota", engine)
print(car.car_info())