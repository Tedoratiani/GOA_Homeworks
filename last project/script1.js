const meetups = document.getElementById('meetupsval');
const lectures = document.getElementById('lecturesval');
const students = document.getElementById('studentsval');

class Academy{
    constructor(number){
        this.number = number;
    }

    get Info(){
        return this.number
    }
}


const meetupsdisplay = new Academy(12)
meetups.textContent = meetupsdisplay.Info

const lecturesdisplay = new Academy(2)
lectures.textContent = lecturesdisplay.Info

const studentsdisplay = new Academy(1206)
students.textContent = studentsdisplay.Info


const studentssaved = document.getElementById('studentssaved');
class Students{
    constructor(numbers){
        this.numbers = numbers
    }

    get Number(){
        return this.numbers
    }
}


const savedstudentsdisplay = new Students(476);
studentssaved.textContent = savedstudentsdisplay.Number


const image = document.getElementById('moon-icon');
const navbar = document.querySelector('.navbar-header-main');

image.addEventListener('click', () => {
    if (document.body.style.backgroundColor === 'rgb(12, 12, 12)') {
        document.body.style.backgroundColor = 'white';
        navbar.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'rgb(12, 12, 12)';
        document.body.style.color = 'white';
        navbar.style.backgroundColor = 'rgb(12, 12, 12)';
    }
});


