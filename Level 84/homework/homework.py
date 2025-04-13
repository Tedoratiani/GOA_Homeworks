# 1) მოიძიეთ ინფორმაცია abstractmethod'ზე
# აბსტრაქტული მეთოდი არის დაგეგმილი მოქმედება,რომელიც წერია მშობელ კლასში მაგრამ არ უწერია როგორ უნდა შესრულდეს.
# თუ როგორ გაკეთდება ეს ფუქნცია/მოქმედება უკვე შვიეულ კლასებში ეწერება.
# 2) ჩამოწერეთ რა გავიარეთ კლასებში და ახსენით თითეული პუნქტი დეტალურად

# კლასი (class)---ობიექტზე ორიენტირებული პროგრამირების საწყისი სტრუქტურა. ქმნის "შაბლონს" ობიექტისთვის.
# ობიექტი (object)---კლასის საფუძველზე შექმნილი კონკრეტული ინსტანსი, თავისი ატრიბუტებითა და მეთოდებით.
# ატრიბუტი (attribute)---ობიექტის ცვლადი, რომელიც აღწერს მის თვისებებს self.name
# მეთოდი (method)---ფუნქცია, რომელიც კლასის შიგნითაა და მუშაობს ობიექტზე def speak(self)
# class variable---ცვლადი, რომელიც გაზიარებულია ყველა ობიექტზე 
# inheritance (მემკვიდრეობა)---შვილი კლასი იღებს მშობლის თვისებებს/ფუნქციებს
# multiple inheritance---ერთი კლასი იღებს მემკვიდრეობას რამდენიმე მშობლისგან
# multilevel inheritance---მემკვიდრეობის ჯაჭვი – A ---- B ------ C
# super()---მშობელი კლასის ფუნქციის გამოძახება შვილი კლასიდან
# abstract class---კლასები, რომლებიც შეიცავენ მინიმუმ ერთ @abstractmethod-ს და არ იწარმოება უშუალოდ

# 3) გააკეთეთ multiple inheritance'ს მაგალითი
class Teacher:
    def teach(self):
        return "Teaching"
class Writer:
    def write(self):
        return "Writing books"
class Person(Teacher, Writer):
    def introduce(self):
        return "I have lot of talents."

person = Person()
print(person.introduce())  
print(person.teach())      
print(person.write())

# 4) გააკეთეთ multilevel inheritance'ს მაგალითი
class Vehicle:
    def start(self):
        return "Vehicle started."
class Car(Vehicle): 
    def drive(self):
        return "Car is driving."
class ElectricCar(Car):  
    def charge(self):
        return "Charging battery..."

electricCar = ElectricCar()
print(electricCar.start())  
print(electricCar.drive())   
print(electricCar.charge())

# 5) დაწერეთ კოდი სადაც გამოიყენებთ super() ფუნქციას
class Human:
    def __init__(self, name):
        self.name = name
    def greet(self):
        return f"Hello, I'm {self.name}"
class Student(Human):
    def __init__(self, name, studentid):
        super().__init__(name)  
        self.studentid = studentid

    def greet(self):
        basehello = super().greet()
        return f"{basehello}, and my student ID is {self.studentid}"

student = Student("Teodore", "Moswavle123")
print(student.greet())
