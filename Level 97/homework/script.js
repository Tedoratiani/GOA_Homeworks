// 1. **Filter Prime Numbers**
//    - Create an array of numbers and use `filter()` to return only the prime numbers.
function prime_number(n){
    if (n<=0)return false;
    if(n===2)return false;
    if(n%2===0)return false;
    for (let i=3;i<=Math.sqrt(n);i+=2){
        if(n%i===0)return false
    }
    return true  
}
const array=[
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50
  ];
const primes=array.filter(prime_number)
console.log(primes)

// 2. **Map to Object Conversion**
//    - Given an array of objects (e.g., users with `id` and `name`), use `map()` to create an array of strings that contains only the names.
const users = [
    { id: 1, name: "tedo" },
    { id: 2, name: "saba" },
    { id: 3, name: "lizi" }
  ];
const names=users.map(user=>user.name)
console.log(names)

// 4. **Filter Objects by Property**
//    - Given an array of objects representing products (each having a `name` and `price`), use `filter()` to return products that are cheaper than a certain value.
const objects=[
  { name: "Book", price: 25 },
  { name: "Headphones", price: 75 },
  { name: "Pen", price: 5 },
  { name: "Keyboard", price: 45 }
]
const cheap=objects.filter(thing=> thing.price<=40)
console.log(cheap)

// 5. **Map Complex Transformations**
//    - Create an array of objects representing books (with `title` and `author`). Use `map()` to return an array of strings in the format: `"Title by Author"`.
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" }
  ];
const text=books.map(book=>`"${book.title}" by ${book.author
}`)
console.log(text)

// 6. **Filter Numbers Based on Multiple Conditions**
//    - Given an array of numbers, use `filter()` to return numbers that are both greater than 10 and divisible by 3.
function sixtask(n){
    if(n>10 && n%3===0){
        return true
    }
}
const ciprebi=[5, 12, 18, 7, 21, 30, 9, 11, 15, 33]
const checked=ciprebi.filter(sixtask)
console.log(checked)

// 7. **Modify Array of Objects (map)**
//    - Given an array of objects representing users with a `name` and `age`, use `map()` to return a new array where all users are considered adults (i.e., add a new `isAdult` property based on their age).
const usersss = [
    { name: "tedo", age: 15 },
    { name: "jina", age: 40 },
    { name: "sandro", age: 45 },
    { name: "data", age: 10 },
    { name: "nia", age: 12 }
  ];
const adults=usersss.map(user=>({
    ...user,
    isAdult: user.age >= 18
}))
console.log(adults)

// 8. **Chaining map and filter**
//    - Create an array of numbers. First, use `filter()` to return numbers greater than 50. Then, use `map()` to halve those numbers.
const ricxvebi=[15,50,234,332,32,555,324,49,124]
const meti50ze=ricxvebi.filter(n=>n>50)
const halves=meti50ze.map(n=>n/2)
console.log(halves)

// 9. **Log Word Frequencies (forEach)**
//    - Create an array of words. Use `forEach()` to create an object that tracks how many times each word appears in the array.
const words = ["apple", "banana", "apple", "cherry", "banana", "banana", "date"];
const frequince={}
words.forEach(a=>{
    frequince[a]=(frequince[a] || 0) + 1;
})
console.log(frequince)

// 10. **Filter Objects by Nested Property**
//    - Given an array of objects representing cars (with nested objects for `brand` and `model`), use `filter()` to return only cars of a specific brand.
const cars = [
    {
      brand: { name: "Toyota", country: "Japan" },
      model: { name: "Corolla", year: 2020 }
    },
    {
      brand: { name: "Ford", country: "USA" },
      model: { name: "Mustang", year: 2021 }
    },
    {
      brand: { name: "BMW", country: "Germany" },
      model: { name: "X5", year: 2022 }
    },
    {
      brand: { name: "Honda", country: "Japan" },
      model: { name: "Civic", year: 2020 }
    }
  ];
const filteredword=cars.filter(word=> word.brand.name==="Toyota")
console.log(filteredword)
