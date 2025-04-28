class BankAccount {
    #balance;
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
      }
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
  const myAccount = new BankAccount(1000);
  myAccount.deposit(500);
  myAccount.withdraw(200);
  console.log(myAccount.getBalance());






  class Author {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author; 
    }
  
    printDetails() {
      console.log(`"${this.title}" by ${this.author.name}`);
    }
  }
  
  const author1 = new Author('J.K. Rowling');
  const book1 = new Book('Harry Potter', author1);
  book1.printDetails(); 
  
  



  class Employee {
    #salary;
  
    constructor(name, salary) {
      this.name = name;
      this.#salary = salary;
    }
  
    getSalary() {
      return this.#salary;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    printInfo() {
      console.log(`Name: ${this.name}, Department: ${this.department}, Salary: ${this.getSalary()}`);
    }
  }
  
 
  const manager1 = new Manager('tedo', 5000, 'gayidvebi');
  manager1.printInfo(); 
  