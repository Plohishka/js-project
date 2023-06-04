/* function greet(language) {
    return langs[language] || langs['english'];
    // return (language in langs) ? langs[language]: langs['english'];
}

const langs = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
}

console.log(greet('italian')); */


// task 1
/* console.log('task1');

const rectangleArea = (height, width) => height * width;
console.log(rectangleArea(5, 10)); */

// task 2
/* console.log('task2');

const p = Math.PI;
const circumference = (diameter) => (diameter *  p).toFixed(1);
console.log(circumference(5)); */

// task 3
/* console.log('task3');

const p = Math.PI;
const cylinderVolume = (diameter, height) => Math.round(p * ((diameter / 2) ** 2) * height);
console.log(cylinderVolume(3, 5));  */


// task 4
/* console.log('task4');

function range(num1, num2) {
    const arr = [];

    for (let i = num1; i <= num2; i++) {
        if (i % 5 === 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(range(1, 30)); */


// task 5
/* console.log('task5');

function fizzBuzz() {
    
    for (let i = 1; i <= 100; i++) {

      
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else  if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz') 
        } else {
            console.log(i);

        }

    }

}

fizzBuzz(); */



// task 6
/* console.log('task6');


function func(a, b, c) {
    let d = b * b - 4 * a * c;
    let arr = [];


    if (d < 0) {
        console.log('no roots');
    } else if (d === 0) {
        arr.push(-b / (2 * a));
    } else if (d > 0) {
        arr.push((-b + Math.sqrt(d)) / (2 * a));
        arr.push((-b - Math.sqrt(d)) / (2 * a));
    }

    return arr;
}

console.log(func(-8, 56, -98)); */