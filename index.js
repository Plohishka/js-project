'use strict';



class Human {
    constructor(fullName, year, gender) {

    this.fullName = fullName;
    this.year = year;
    this.gender = gender;

    }

    greeting() {
        return this.gender === 'Mr' ? `Hello Mr. ${this.fullName}!` : `Hello Mrs. ${this.fullName}!`;
    }
}

class Student extends Human {
    constructor(fullName, year, gender, admissionYear, recordBook, averageScore) {
    super(fullName, year, gender);

    this.admissionYear = admissionYear;
    this.recordBook = recordBook;
    this.averageScore = averageScore;

    }

    isExcellentStudent() {
        const date = new Date();
        this.averageScore = this.recordBook / (date.getFullYear() - this.admissionYear);
        return this.averageScore >= 90;
    }

}

const people1 = new Human('Anzhelika Plokhykh', 1989, 'Mrs');
const student1 = new Student('Oleksandr Plokhykh', 1989, 'Mr', 2020, 300);

console.log(people1);
console.log(people1.greeting());
console.log(student1);
console.log(student1.isExcellentStudent());
