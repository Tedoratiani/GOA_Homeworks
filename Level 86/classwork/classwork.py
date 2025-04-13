# 1) შექმენით Abstract Clasess მაგალითი
# 2) შექმენით polymorphism'ის მაგალითი
# 3) ახსენით როგორ მუშაობს თითოეული მათგანი~

# #1
from abc import ABC, abstractmethod
class Animal(ABC):
    @abstractmethod
    def make_sound(self):
        pass
class Dog(Animal):
    def make_sound(self):
        print ("Woof")
        
class Cat(Animal):
    def make_sound(self):
        print("Meow")

dog=Dog()
cat=Cat()
dog.make_sound()
cat.make_sound()


# #2

class Bird:
    def fly(self):
        print("Bird is flying")

class Airplane:
    def fly(self):
        print("Airplane is flying")

def make_it_fly(flyable):
    flyable.fly()


bird = Bird()
airplane = Airplane()

make_it_fly(bird) 
make_it_fly(airplane)






# abstract
# აბსტრაქტული კლასი, რეალურად, მოქმედებს როგორც სქემა, რომელსაც სხვა კლასები უნდა მიჰყვნენ. 
# ანუ აბსტრაქტული კლასი არის ლიდერი, რომელიც გვთავაზობს რაღაც იდეას, მაგრამ არ გვეუბნება დეტალებს.
#  იგი მხოლოდ გვეუბნება, რა უნდა გაკეთდეს, მაგრამ როგორ უნდა გაკეთდეს, ამას კონკრეტული კლასები განსაზღვრავენ, 
# რომლებიც აბსტრაქტულ კლასზე დაყრდნობით იბადებიან.

# polymorphism
# როცა ორ სხვადასხვა ტიპის ობიექტს აქვს იგივე სახელის მეთოდი, მაგრამ ისინი სხვადასხვა გზით მოქმედებენ, ეს ნიშნავს, 
# რომ ერთი და იგივე ფუნქცია  იმუშავებს სხვადასხვანაირად, თუმცა მაინც იგივე სახელი ექნება.
# შეიძლება წარმოგიდგინო, რომ ორი მეგობარი (ორივე სხვადასხვანაირი პიროვნება) ყველასთვის ერთსა და იმავე სათამაშოობას 
# თამაშობს (როგორც "წაკითხვა"), მაგრამ მათი სტილი სრულიად განსხვავებულია:
# ერთი მეგობარი შეიძლება წიგნს  ხმამაღლა და ემოციებით კითხულობდეს.
# მეორე მეგობარი კი შეიძლება წიგნის მკაფიოდ და მშვიდად კითხულობდეს.



class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def get_info(self):
        return f"Student: {self.name}, Age: {self.age}"

class School:
    def __init__(self, name):
        self.name = name
        self.students = []

    def add_student(self, student):
        self.students.append(student)

    def show_students(self):
        for student in self.students:
            print(student.get_info())

student1 = Student("გიორგი", 18)
student2 = Student("ნინო", 17)

school = School("თბილისის სკოლა")

school.add_student(student1)
school.add_student(student2)

school.show_students()