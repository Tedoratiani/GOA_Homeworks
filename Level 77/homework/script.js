// Bubbling არის  როდესაც მოვლენები პირველ რიგში შვილეულ-target ელემენტზე ხდება, 
// ხოლო შემდეგ იგი გადადის  parent ელემენტებზე. მაგალითად, თუ ღილაკზე დააჭირე, 
// მოვლენას დაიწყებს ღილაკი, შემდეგ კი მისი მშობელი ელემენტი.

// Capturing  არის პროცესი, როდესაც მოვლენები 
// პირველად paretn ელემენტიდან იწყება და მიდის შვილეულებზე. ანუ, როდესაც შეექმნება მოვლენა, 
// იგი პირველი გადის parent ელემენტებზე, სანამ საბოლოოდ თავის target ელემენტს მიაღწევს.

const next=document.getElementById("next");
const previous=document.getElementById("pre");
const img=document.getElementById("image");

let i=0;

const images=[
    "Screenshot 2025-03-09 031931.png",
    "Screenshot 2025-03-09 031918.png",
    "Screenshot 2025-03-09 031931.png"
];
next.addEventListener("click", function(){
    i++;
    if (i>images.length-1){
        i=0
    };
    img.src=images[i];
 });
previous.addEventListener("click", function(){
    i--;
    if(i<0){
        i=images.lenght-1
    };
    img.src=images[i];
});

const next1=document.getElementById("next1");
const previous1=document.getElementById("pre1");
const img1=document.getElementById("image1");

let a=0;

const images1=[
    "Screenshot 2025-03-09 031931.png",
    "Screenshot 2025-03-09 031918.png",
    "Screenshot 2025-03-09 031931.png",
    "Screenshot 2025-03-20 120830.png",
    "Screenshot 2025-03-20 121013.png",
];
next.addEventListener("click", function(){
    a++;
    if (a>images1.length-1){
        a=0
    };
    img1.src=images1[a];
 });
previous.addEventListener("click", function(){
    a--;
    if(a<0){
        a=images1.lenght-1
    };
    img1.src=images1[a];
});

const form=document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    console.log("Name:"+name+"   "+"Email:"+email)
})
