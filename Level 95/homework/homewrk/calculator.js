
function calculate(a, b, operation) {
    switch (operation) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        if (b === 0) {
          throw new Error("Cannot divide by zero");
        }
        return a / b;
      default:
        throw new Error("Invalid operation");
    }
  }
  
  module.exports = calculate;  
  function filter(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  module.exports = filter; 