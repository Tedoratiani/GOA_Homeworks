// ### **1. მემკვიდრეობა – ცხოველის კლასი**
// შექმენი კლასი `Animal`, რომელსაც ექნება მეთოდი `speak`. ამის შემდეგ შექმენი შვილი კლასი `Dog`, რომელიც გადაფარავს `speak` 
// მეთოდს და დაბეჭდავს ძაღლის-specific ტექსტს.

class Animal{
    constructor(name){
        this.name=name
    }
    speak(){
        console.log(`${this.name} make a sound`)
    }
}
class Dog extends Animal{
    constructor(name){
        super(name);
    }
    speak(){
        console.log(`${this.name} barfed`)
    }
}


const dog= new Dog("joni")
dog.speak()

// ---

// ### **2. სტატიკური მეთოდი – მომხმარებლის რაოდენობა**
// შექმენი კლასი `User`, რომელიც ინახავს ყველა შექმნილი მომხმარებლის რაოდენობას. დაამატე სტატიკური მეთოდი, რომელიც აბრუნებს ამ 
// რაოდენობას.

class User{
    static count=0;
    constructor(name){
        this.name=name
        User.count++
    }
    static usercount(){
        return User.count
    }
}
const pirveli=new User("Tedo")
const meore=new User("isev tedo")
console.log(User.usercount())
// ---