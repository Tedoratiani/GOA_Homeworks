// Bubbling არის  როდესაც მოვლენები პირველ რიგში შვილეულ-target ელემენტზე ხდება, 
// ხოლო შემდეგ იგი გადადის  parent ელემენტებზე. მაგალითად, თუ ღილაკზე დააჭირე, 
// მოვლენას დაიწყებს ღილაკი, შემდეგ კი მისი მშობელი ელემენტი.

// Capturing  არის პროცესი, როდესაც მოვლენები 
// პირველად paretn ელემენტიდან იწყება და მიდის შვილეულებზე. ანუ, როდესაც შეექმნება მოვლენა, 
// იგი პირველი გადის parent ელემენტებზე, სანამ საბოლოოდ თავის target ელემენტს მიაღწევს.

 // Bubbling 
 document.getElementById("button").addEventListener("click", function() {
    alert("Button clicked! (Bubbling)");
});

document.getElementById("parrent").addEventListener("click", function() {
    alert("parrent clicked! (Bubbling)");
});

// Capturing 
document.getElementById("parrent").addEventListener("click", function() {
    alert("parrent clicked! (Capturing)");
}, true);

document.getElementById("button").addEventListener("click", function() {
    alert("Button clicked! (Capturing)");
}, true);