// ### 1. **BankAccount**
// **Objective**: 
// Create a `BankAccount` class to represent a bank account. You'll need to manage sensitive fields (like balance and PIN) privately while providing public methods to interact with the account.

// **Private Fields**:
// - `#accountNumber`: A string representing the account number.
// - `#balance`: A numeric value representing the account balance.
// - `#pin`: A string representing the security PIN.

// **Private Methods**:
// - `#validatePin(pin)`: A private method to check if the input pin matches the account’s pin.
// - `#setBalance(amount)`: A private method that updates the balance. Should only be accessible by internal methods to prevent unauthorized access.

// **Public Methods**:
// - `constructor(accountNumber, initialBalance, pin)`: Initializes the account with the account number, balance, and pin.
// - `deposit(amount)`: Adds the specified amount to the account balance.
// - `withdraw(amount, pin)`: Allows withdrawal of money if the pin is correct and the balance is sufficient.
// - `checkBalance(pin)`: Returns the balance if the pin is correct.

// **Public Getter/Setter**:
// - `accountNumber`: Getter only, since account number should be read-only once it's set.
// - `pin`: Public setter to allow the user to change the pin, but ensure proper validation or restrictions on how the pin can be changed.

class BankAccount {
    #accountNumber;
    #balance;
    #pin;
    constructor(accountNumber, initialBalance, pin) {
      this.#accountNumber = accountNumber;
      this.#balance = initialBalance;
      this.#pin = pin;
    }
    #validatePin(inputPin) {
      return this.#pin === inputPin;
    }  
    #setBalance(amount) {
      this.#balance = amount;
    }
    deposit(amount) {
      if (amount > 0) {
        this.#setBalance(this.#balance + amount);
      }
    }
    withdraw(amount, pin) {
      if (this.#validatePin(pin)) {
        if (amount <= this.#balance) {
          this.#setBalance(this.#balance - amount);
          return true;
        }
        return false; 
      }
      return false; 
    }
    get accountNumber() {
      return this.#accountNumber;
    }
    set pin(newPin) {
      if (typeof newPin === 'string' && newPin.length === 4) {
        this.#pin = newPin;
      } else {
        throw new Error("PIN must be a 4-digit string.");
      }
    }
    
  
    checkBalance(pin) {
      return this.#validatePin(pin) ? this.#balance : null;
    }
  }
const axali = new BankAccount("321321321", 700, "2009");
console.log(axali.accountNumber); 
axali.deposit(100);
console.log(axali.checkBalance("1234")); 
console.log(axali.withdraw(200, "0000")); 
console.log(axali.withdraw(200, "1234")); 
console.log(axali.checkBalance("1234")); 
axali.pin = "4321";
console.log(axali.checkBalance("4321")); 
  
// ### 2. **UserProfile**
// **Objective**: 
// Design a `UserProfile` class where private fields hold sensitive user information (email, password). You’ll implement validation for updating sensitive data and providing access to non-sensitive data.

// **Private Fields**:
// - `#username`: The user's username.
// - `#email`: The user's email.
// - `#password`: The user's password (hashed or encrypted in real-world applications).

// **Private Methods**:
// - `#validatePassword(password)`: Checks if the entered password matches the stored one.

// **Public Methods**:
// - `constructor(username, email, password)`: Initializes the user profile with the username, email, and password.
// - `updateEmail(newEmail)`: Public method to update the email if it's in a valid format.
// - `updatePassword(newPassword)`: Allows the password to be changed securely.
// - `getUsername()`: Returns the username, a non-sensitive field that can be accessed publicly.

// ---

// ### 3. **Car**
// **Objective**: 
// Create a `Car` class where the engine status, speed, and fuel level are kept private. Only specific methods should be able to interact with these properties.

// **Private Fields**:
// - `#engineStatus`: Boolean indicating whether the car engine is running.
// - `#speed`: Numeric value representing the current speed.
// - `#fuelLevel`: Numeric value for how much fuel is left.

// **Private Methods**:
// - `#startEngine()`: Private method that starts the car's engine.
// - `#consumeFuel(amount)`: Private method that decreases fuel as the car is driven.

// **Public Methods**:
// - `constructor(fuelLevel)`: Initializes the car with the given fuel level and sets the speed and engine status to defaults.
// - `drive(speed)`: Allows the car to drive at a specified speed and decreases fuel accordingly.
// - `refuel(amount)`: Refills the car’s fuel tank by the specified amount.
// - `stop()`: Stops the car, which sets the speed to zero and the engine status to off.

// ---

// ### 4. **LibraryBook**
// **Objective**: 
// Design a `LibraryBook` class where the status of whether a book is checked out or available is private, along with the book's title and author.

// **Private Fields**:
// - `#title`: The title of the book.
// - `#author`: The author of the book.
// - `#isCheckedOut`: Boolean value indicating whether the book is checked out.

// **Private Methods**:
// - `#toggleCheckOutStatus()`: Private method to change the book's checked-out status.

// **Public Methods**:
// - `constructor(title, author)`: Initializes the book with its title and author, setting its availability to available by default.
// - `checkOut()`: Changes the book’s status to checked out if it’s available.
// - `returnBook()`: Marks the book as available again.
// - `getBookInfo()`: Returns the title and author of the book, but not its availability status.

// ---

// ### 5. **SmartLight**
// **Objective**: 
// Create a `SmartLight` class where the brightness, color, and power status are private, and there are validation checks for acceptable ranges.

// **Private Fields**:
// - `#brightness`: Numeric value representing the brightness level (range: 0–100).
// - `#color`: A string representing the color of the light (e.g., `"white"`, `"red"`).
// - `#isOn`: Boolean indicating if the light is on or off.

// **Private Methods**:
// - `#validateBrightness(brightness)`: Private method that ensures brightness is within the valid range (0–100).
// - `#validateColor(color)`: Private method to validate if the color input is valid.

// **Public Methods**:
// - `constructor()`: Initializes the light with default settings (e.g., off, white light, brightness 50).
// - `turnOn()`: Turns the light on.
// - `turnOff()`: Turns the light off.
// - `adjustBrightness(level)`: Adjusts the brightness and ensures it's within the valid range.
// - `changeColor(color)`: Changes the light’s color after validation