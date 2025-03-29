// შექმენით ობიექტი, სადაც შეინახავთ თქვენს პირად მონაცემებს(სახელი, გვარი, ასაკი). შეინახეთ ის ლოკალურ ბაზაში, 
// შემდეგ წამოიღეთ და დაბეჭდეთ მისი რომელიმე კუთვნილება, შემდეგ შეუცვალეთ ამ ობიექტს სახელის კუთვნილება და 
// განაახლეთ ლოკალური ბაზა.
// ობიექტის შექმნა
let object = {
    name: "თეოდორე",
    surname: "რატიანი",
    age: 15,
    saveTo: function() {
        localStorage.setItem('personData', JSON.stringify(this));
    },
    get: function() {
      const personData = localStorage.getItem('personData');
      if (personData) {
        return JSON.parse(personData);
      }
      return null;
    },
    updateName: function(newName) {
      this.name = newName;
      this.saveTo();
    }
};
object.saveTo();
let migebuli = object.get();
  if (migebuli) {
    console.log(` ${migebuli.name} ${migebuli.surname}, ${migebuli.age}`);
  }
  migebuli.updateName("დავით");
  console.log(` ${migebuli.name} ${migebuli.surname}, ${migebuli.age} `);
  