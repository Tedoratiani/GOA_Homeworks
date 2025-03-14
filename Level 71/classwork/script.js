// 1) წამოიღეთ ელემენტები getElementsByClassName'ის საშუალებით
let first= document.getElementsByClassName("cool");
console.log(first)

// 2) წამოიღეთ ელემენტი querySelector'ის მეშვეობით (ჯერ id, შემდეგ class)
let second=document.querySelector("#one")
let second1=document.querySelector(".two")
console.log(second)
console.log(second1)
// 3) წამოიღეთ js'ში img და შეუცვალეთ: src და width
let image = document.querySelector("img");
image.src = "img2.jpg"; 
image.width = 400; 

// 4) წამოიღეთ js'ში p და შეუცვალეთ: color, backgroundColor და fontSize
let ptag=document.querySelector("#fourth")
ptag.style.color="red"
ptag.style.backgroundColor="blue"
ptag.style.fontsize="20px"
// 5) js'ის გამოყენებით, შექმენით ახალი p და textNode, შემდეგ textNode ჩასვით პარაგრაფში და პარაგრაფი ჩასვით html'ში მოცემულ div'ში

let newp = document.createElement("p");
let textNode = document.createTextNode("New paragraph");
newp.appendChild(textNode);

let div1 = document.querySelector("div"); 
div1.appendChild(newp); 