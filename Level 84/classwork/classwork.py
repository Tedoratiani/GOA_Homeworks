class Human:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print(f"{self.name} is my name and i am {self.age} years old.")

class Programmer(Human):

    def code(self):
        print(f"{self.name} is coding in {self.language}.")


class Designer(Human):

    def design(self):
        print(f"{self.name} is designing with {self.tool}.")

class Goaprogrammer(Programmer):
    def coding_study(self):
        print(f"{self.name} is studying coding in the best academy-GOA")

class Goadesigner(Designer):
    def designing_study(self):
        print(f"{self.name} is studying designining in the best academy-GOA")

class Professional(Programmer, Designer):
    def __init__(self, name, age, language, tool):
        Programmer.__init__(self, name, age, language)
        Designer.__init__(self, name, age, tool)

    def work(self):
        self.code()
        self.design()


me1 = Human("Tedo", 15)
me1.introduce()


me2 = Programmer("giorgi", 13, "Python")
me2.introduce()
me2.code()


me3 = Designer("lizi", 28, "Photoshop")
me3.introduce()
me3.design()


me4 = Goaprogrammer("lasha", 17, "GOA")
me4.introduce()
me4.coding_study()


me5 = Goadesigner("mariami", 26, "Goa")
me5.introduce()
me5.designing_study()


me6 = Professional("elene", 17, "Java", "Illustrator")
me6.introduce()
me6.work()