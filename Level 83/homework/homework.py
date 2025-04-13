# 1) შექმენით Motorcycle class'ი, 4 attribute'ით და 1 class variable'ით. class variable'მა უნდა დათვალოს რამდენი 
# მოტოციკლეტი გაკეთდა, დანარჩენი თქვენ მოიფიქრეთ, ატრიბუტები რა იქნება და ა.შ
class Motorcycle:
    count=0
    def __init__(self,year,name,horse_power,country,color):
        self.name=name
        self.year=year
        self.horse_power=horse_power
        self.country=country
        self.color=color
        Motorcycle.count+=1
    def start(self):
        return f"{self.name} has started."
    def stop(self):
        return f"{self.name} has stopped."
    def about(self):
        return f"This is {self.name}. It was made in {self.year} in {self.country}. it has {self.horse_power} and is {self.color}" 

motorcycle1=Motorcycle(1999,"kawazaki",600,"germany","red")
motorcycle2=Motorcycle(1923,"noidea",650,"japan","blue")
motorcycle3=Motorcycle(1980,"dontknow",700,"france","green")
motorcycle4=Motorcycle(2003,"naaah",300,"USA","black")

motorcycle=[motorcycle1,motorcycle2,motorcycle3,motorcycle4]
for i in motorcycle:
    print(i.start())
    print(i.stop())
    print(i.about())

print(f"There are {Motorcycle.count} people.")

# 2) გააკეთეთ inheritance'ს მაგალითი ცხოველებზე (3 child class)
class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "sound"
class Dog(Animal):
    def speak(self):
        return "Woof!"
class Cat(Animal):
    def speak(self):
        return "Meow!"
class Cow(Animal):
    def speak(self):
        return "Moo!"
    
# 3) ახსენით როგორ მუშაობს inheritance
# Inheritance ნიშნავს, რომ ერთი კლასი ანუ შვილი იღებს ფუნქციებსა და ატრიბუტებს სხვა კლასისგან ანუ მშობლისგან. 
# შვილი კლასი არამარტო მემკვიდრეობს, არამედ შეუძლია არსებული მეთოდების შეცვლა ან ახლის დამატება.
# მაგალითად, Dog-მა მემკვიდრეობით მიიღო __init__() მშობელი Animal-ისგან და გადაწერა speak() შესაბამისი თვისებით.

# 4) ახსენით რა შემთხვევაში გვჭირდება inheritanceის გამოყენება
# Inheritance გვჭირდება როდესაც: გვაქვს საერთო ლოგიკა რომელიც მრავალი კლასის შემთხვევაში მეორდება.გვსურს კოდების გამეორების 
# თავიდან აცილება.გვსურს ორგანიზებული პროგრამა.გვსურს მემკვიდრეობით მიღება და სპეციფიკური ქცევის
# დამატება, მაგალითად ზოგად კლასში გვაქვს Vehicle, ხოლო შვილებში Car, Motorcycle, Truck.

# 5) მოიძიეთ ინფორმაცია და გაიგეთ რა არის multiple inheritance
# Multiple Inheritance ნიშნავს, რომ ერთი კლასი მემკვიდრეობით იღებს მრავალი მშობელი კლასისგან თვისებებსა და მეთოდებს.Python-ს 
# აქვს მხარდაჭერა Multiple Inheritance-ისთვის, ანუ ერთი შვილი კლასი შეიძლება ერთდროულად გადაიბაროს ფუნქციონალი 
# რამდენიმე კლასისგან.