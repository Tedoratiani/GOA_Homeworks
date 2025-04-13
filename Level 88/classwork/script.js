function sumNumbers(...numbers) {
     let total = 0;
    for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
    }
  return total;
  }
  
console.log(sumNumbers(1, 2, 3)); 
console.log(sumNumbers(10, 20, 30, 40)); 
console.log(sumNumbers(5))




const  me = {
    name: "თეოდორე",
    age: 15
  };
  
  const kidevme = {
    city: "თბილისი",
    country: "საქართველო"
  };
const ormagadme = {
    ...me,
    ...kidevme
};
  
console.log(ormagadme);


const xilibrat = ["ვაშლი", "ბანანი"];
const bostneulibrat = ["კარტოფილი", "პომიდორი"];

const sajmeli = [...xilibrat, ...bostneulibrat];

console.log(sajmeli);