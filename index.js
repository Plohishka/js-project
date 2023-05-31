// task 1
console.log('task1');

const factorial = function (num) {
    let res = 1;

    for (let i = 1; i <= num; i++) {
        res *= i;
    }

    console.log(res);
}

factorial(10);

// task 2
console.log('task 2');

let person = {
    hair: 'blonde',
    eyes: 'brown',
    height: 180,
    weight: 60,
    warmUp: function() {
        console.log('does warm up 2 hours a day');
    },
    run: function() {
        console.log('runs a 42 km marathon');
    }
}

console.log(person.height);
person.run();
person.warmUp();
