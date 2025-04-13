// ### 1. **Create a Class with Public Properties**
//    - Define a `Car` class with public properties `make` and `model`. Create an instance and access these properties.
class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  }
  
  const myCar = new Car("Toyota", "Camry");
  console.log(myCar.make);  
  console.log(myCar.model)
// ### 2. **Use Private Properties**
//    - Define a `BankAccount` class where `balance` is a private property. Implement a public method to deposit and withdraw money from the account.
class BankAccount {
    #balance = 0;
    deposit(amount) {
      if (amount > 0) this.#balance += amount;
    }
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
      }
    }
    getBalance() {
      return this.#balance;
    }
  }
  const account = new BankAccount();
  account.deposit(100);
  account.withdraw(40);
  console.log(account.getBalance());
// ### 3. **Static Methods and Properties**
//    - Create a `MathOperations` class with a static method `add()` that adds two numbers. Also, define a static property `PI` representing the value of Pi.
class MathOperations {
    static PI = 3.14159;
    static add(a, b) {
      return a + b;
    }
  }
  console.log(MathOperations.add(5, 10));  
  console.log(MathOperations.PI);         
  
// ### 4. **Use Getters and Setters**
//    - Define a `Rectangle` class with properties `width` and `height`. Use a getter to calculate and return the area of the rectangle. Also, include a setter that ensures width and height are always positive numbers.
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    get area() {
      return this.width * this.height;
    }
  
    set width(value) {
      if (value > 0) this._width = value;
    }
  
    get width() {
      return this._width;
    }
  
    set height(value) {
      if (value > 0) this._height = value;
    }
  
    get height() {
      return this._height;
    }
  }
  
  const rect = new Rectangle(5, 10);
  console.log(rect.area); 
  
// ### 5. **Private Methods**
//    - Create a `User` class where a private method `validatePassword()` checks the strength of the password. The method should only be used internally when setting a password.
class User {
    #password;
  
    setPassword(password) {
      if (this.#validatePassword(password)) {
        this.#password = password;
      } else {
        console.log("Weak password");
      }
    }
  
    #validatePassword(password) {
      return password.length >= 6;
    }
  }
  
  const user = new User();
  user.setPassword("123");   
  user.setPassword("strong123"); 
  
// ### 6. **Private Properties with Getters and Setters**
//    - Define a `Book` class where the title is public, but the number of pages is private. Implement getters and setters to access and modify the number of pages.
class Book {
    constructor(title, pages) {
      this.title = title;
      this.#pages = pages;
    }
  
    #pages;
  
    get pages() {
      return this.#pages;
    }
  
    set pages(value) {
      if (value > 0) {
        this.#pages = value;
      }
    }
  }
  
  const book = new Book("JS Guide", 200);
  console.log(book.title);     
  console.log(book.pages);    
  book.pages = 250;
  console.log(book.pages);    
  
// ### 7. **Static Method for Instance Counting**
//    - Create a `Player` class where each time an instance is created, a static method `getPlayerCount()` keeps track of how many players have been created.
class Player {
    static count = 0;
  
    constructor(name) {
      this.name = name;
      Player.count++;
    }
  
    static getPlayerCount() {
      return Player.count;
    }
  }
  
  const p1 = new Player("Leo");
  const p2 = new Player("Neymar");
  console.log(Player.getPlayerCount()); 
  
// ### 8. **Class Inheritance with Private Properties**
//    - Create a `Vehicle` class with private properties like `speed`. Then, create a `Bike` subclass that can access public methods to modify or retrieve the speed.
class Vehicle {
    #speed = 0;
  
    setSpeed(value) {
      if (value >= 0) {
        this.#speed = value;
      }
    }
  
    getSpeed() {
      return this.#speed;
    }
  }
  
  class Bike extends Vehicle {}
  
  const bike = new Bike();
  bike.setSpeed(40);
  console.log(bike.getSpeed()); 
  
// ### 9. **Static Method for Comparison**
//    - Define a `Student` class with a static method `compareGrades(student1, student2)` that compares the grades of two student instances.
class Student {
    constructor(name, grade) {
      this.name = name;
      this.grade = grade;
    }
  
    static compareGrades(s1, s2) {
      if (s1.grade > s2.grade) return `${s1.name} has higher grade`;
      if (s2.grade > s1.grade) return `${s2.name} has higher grade`;
      return "Both have the same grade";
    }
  }
  
  const stu1 = new Student("tedo", 99);
  const stu2 = new Student("zuka", 85);
  
  console.log(Student.compareGrades(stu1, stu2))
  
