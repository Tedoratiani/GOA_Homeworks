// 1
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sumAll(5, 10, 15)); 
  console.log(sumAll(1, 2, 3, 4, 5)); 


const me = {
    name: "tedo",
    age: 16,
    job: "students",
    city: "tbilisi"
  };
  
const { name, age, ...rest } = me;
  
  console.log(name); 
  console.log(age); 
  console.log(rest);

const [first, second, ...left] = [1, 2, 3, 4, 5];

console.log(first); 
console.log(second); 
console.log(left)

//  2
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];
console.log(array2); 


const obj1 = { name: "ana", age: 17 };
const obj2 = { ...obj1, city: "zugdidi" };
console.log(obj2);



const pirveli = { name: "gio", age: 18 };
const copy = { ...pirveli };
console.log(copy); 
console.log(copy === pirveli);

// 3
const shen = {
    saxeli: "zuka",
    gvari: 15,
    job: "students"
  };
  const shen1 = { ...person };
  
  const { saxeli, ...racdarcha } = person;
  
  console.log(shen1); 
  console.log(saxeli); 
  console.log(racdarcha)

// 4
// LocalStorage არის მეხსიერების ერთგვარი შესაძლებლობა, რომელიც სარეგისტრაციო მონაცემების ან სხვა ინფორმაციის შენახვას 
// საშუალებას აძლევს თქვენს ბრაუზერს, ასე რომ მონაცემები იქნება ხელმისაწვდომი, როცა გვერდი დაიტვირთება ან დაბრუნდება,
//  რადგან LocalStorage არ ქრება, როდესაც ბრაუზერი იხურება.
