class SecureNote {
    constructor(content, pin) {
      this._content = content; 
      this._pin = pin; 
    }
    _validatePin(pin) {
      return this._pin === pin;
    }
    updateContent(newContent, pin) {
      if (this._validatePin(pin)) {
        this._content = newContent;
      } else {
        console.log("Invalid pin. Content not updated.");
      }
    }
    getContent(pin) {
      if (this._validatePin(pin)) {
        return this._content;
      } else {
        console.log("Invalid pin. Cannot access content.");
        return null;
      }
    }
  }







  class InventoryItem {
    constructor(name, quantity, cost) {
      this._name = name; 
      this._quantity = quantity; 
      this._cost = cost; 
    }
    _validateQuantityChange(amount) {
      return this._quantity + amount >= 0;
    }
    restock(amount) {
      if (amount < 0) {
        console.log("Cannot restock with negative quantity.");
      } else {
        this._quantity += amount;
      }
    }
    sell(amount) {
      if (this._validateQuantityChange(-amount)) {
        this._quantity -= amount;
      } else {
        console.log("Not enough items to sell.");
      }
    }
    getInfo() {
      return { name: this._name, quantity: this._quantity };
    }
  }
  




  class EmailClient {
    constructor(email, password) {
      this._email = email; 
      this._password = password; 
      this._inbox = []; 
    }
    _validatePassword(password) {
      return this._password === password;
    }
    _receiveEmail(email) {
      this._inbox.push(email);
    }
    login(password) {
      if (this._validatePassword(password)) {
        console.log("Logged in successfully.");
      } else {
        console.log("Invalid password.");
      }
    }
    sendEmail(to, message) {
      console.log(`Sent email to ${to}: ${message}`);
    }
    readInbox() {
      return this._inbox;
    }
  }
  



  class Subscription {
    constructor(userID, plan, paymentMethod) {
      this._userID = userID; 
      this._plan = plan; 
      this._paymentMethod = paymentMethod; 
    }
    _validatePayment(paymentMethod) {
      return this._paymentMethod === paymentMethod;
    }
    upgradePlan(newPlan, paymentMethod) {
      if (this._validatePayment(paymentMethod)) {
        this._plan = newPlan;
        console.log(`Plan upgraded to ${newPlan}.`);
      } else {
        console.log("Invalid payment method. Plan upgrade failed.");
      }
    }
  }
  