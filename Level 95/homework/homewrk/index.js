
import calculate from './calculator.js';  
const sum = calculate(5, 3, 'add');
console.log('Sum:', sum);

const difference = calculate(5, 3, 'subtract');
console.log('Difference:', difference);

const product = calculate(5, 3, 'multiply');
console.log('Product:', product);

const quotient = calculate(6, 3, 'divide');
console.log('Quotient:', quotient);

const numbers = [1, 2, 3, 4, 5, 6];


const evenNumbers = filter(numbers, isEven);
console.log('Even Numbers:', evenNumbers);

