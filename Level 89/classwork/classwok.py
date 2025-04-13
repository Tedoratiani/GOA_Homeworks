# 1
# კომპოზიცია და აგრეგაცია ორივე აღწერს ურთიერთობას ორ კლასს შორის.
# მაგრამ კომპოზიციის დროს თუ წავშლით მთავარ ობიეექტს მაშინ შემდგარი(დამოკიდებული) ობიექტიც წაიშლება.
# აგრეგაციის დროს კი თუ ერთ ობიექტს წავშლით სხვა ობიექტი თავისუფლლად განაგრძობს მუშაობას.
# ეს არის კომპოზიციის მაგალითი სადაც Car ფლობს engines  და თუ ჩვენ გავანადგურენთ Carს მაშინ  Engineიც გაფუჭდება/წაიშლება
class Engine:
    def start(self):
        print("Engine started")

class Car:
    def __init__(self):
        self.engine = Engine()  

    def start(self):
        self.engine.start()

car = Car()
car.start()
# ეს კიდევ აგრეგაციის მაგალითია, სადაც carში engine გარე ობიექტად შემოდის რის გამოც თუ რომელიმეს წავშლიტ მეორე თავვისუფლად 
# განაგრძობს მუშაობას
class Engine:
    def start(self):
        print("Engine started")

class Car:
    def __init__(self, engine):
        self.engine = engine  #

    def start(self):
        self.engine.start()

engine = Engine()
car = Car(engine)
car.start()



# 2


# Instance მეთოდი არის ჩვეულებრივი მეთოდი, რომელიც self არგუმენტით იღებს ობიექტს, და მუშაობს კონკრეტულ ობიექტებზე


# Class მეთოდი იქმნება @classmethod, არგუმენტად იღებს cls, და მუშაობს კლასის დონეზე, ანუ არ სჭირდება ობიექტი

# Static მეთოდი ქმნება @staticmethod , არ იღებს არგუმენტებად არც self და არც cls, და უბრალო ფუქნციაა კლასში რომელსაც
# არაა აქვს უშუალო კავშირი ან ობიექტთან ან კლასთან



# 3
# Multiple inheritance ნიშნავს, რომ ერთი კლასი მემკვიდრეობით იღებს თვისებებს რამდენიმე მშობელი კლასისგან.
# ანუ, ობიექტს შეუძლია ერთდროულად რამდენიმე მეთოდი,ფუქნცია ან ქცევა გადაიბაროს სხვადასხვა მშობლისგან(კლასისგან).

# Multilevel inheritance ნიშნავს, რომ კლასები მემკვიდრეობით გადაეცემიან ლეველების,დონეების მიხედვით, ანუ:
# თუ გვაქვს კლასები A,B,C. A კლასის მემკვიდრე(შვილი) იქნება b კლასი, ხოლო B კლასის მემკვიდრე(შვილი) იქნება C კლასი.
# ასე ჯაჭვურად მიმდინარეობს ეს inheritance.




# 4
# წარმოიდგინე, გვაქვს Student კლასი. მოსწავლეს აქვს ქულა, მაგრამ: არ უნდა შეეძლოს მოსწავლეს თავად ჩაწეროს რაც უნდა 
# (student.grade = 200) და ქულა უნდა იყოს მხოლოდ 0-დან 100-მდე,გარედან მხოლოდ სწავლასთან დაკავშირებული მეთოდებით
#  უნდა გაიზარდოს ან შემცირდეს.ასეთ დროს გამოგვადგება data hiding.

class Student:
    def __init__(self, name):
        self.name = name
        self.__grade = 0  

    def submit(self, score):
        if 0 <= score <= 100:
            self.__grade += score
            if self.__grade > 100:
                self.__grade = 100

    def grade(self):
        return f"{self.__grade/10} არის {self.name}ს ნიშანი"
    
s = Student("თედო")
print(s.grade())  
s.submit(80)
print(s.grade())  
s.submit(100)
print(s.grade())  
s.__grade = 999
print(s.grade())