// task 1  (modified)
console.log('task 1');

let date = new Date();
let min = date.getMinutes();

if (min >= 0 && min <= 15) {
    console.log('first quarter');
} else if (min > 15 && min <= 30) {
    console.log('second quarter');
} else if (min > 30 && min <= 45) {
    console.log('third quarter');
} else if (min > 45 && min <= 59) {
    console.log('fourth quarter');
}

console.log(min);


// task 2
console.log('task 2');

const num1 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const num2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

if (num1 > num2) {
    console.log('first num: ' + num1);
} else {
    console.log('second num: ' + num2);
}

console.log('first: ' + num1, 'second: ' + num2);

// task 3 (modified)
console.log('task 3');

;(function isLeap(year) {
    let date = new Date(year, 2, 0);
    let days = date.getDate();

    if (days === 29) {
        console.log('this year is leap');
    } else {
        console.log('this year is not leap');
    }
})(2023);


// task 4
console.log('task 4');

const num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const rangeStart = 25;
const rangeEnd = 70;

if (num >= rangeStart && num <= rangeEnd) {
    console.log('is in the range');
} else {
    console.log('out of range');
}

console.log('random number: ' + num);


// task 5
console.log('task 5');

function isItPossible(people, pens, notebooks) {
    console.log(pens >= people && notebooks >= people);
}

isItPossible(10, 15, 15);

// task 6
console.log('task 6');

function getTicketPrice(age, benefit) {
    let res;

    if (age < 6) {
        res = 0;
    } else if (age >= 6 && age <=12) {
        res = 10;
    } else if (age > 12) {
        res = 20;
    }

    if (benefit === 'yes') {
        res /= 2;
    }

    return res;
}

console.log(getTicketPrice(12, 'yes') + '$');
