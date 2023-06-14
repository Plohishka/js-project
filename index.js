'use strict';

/**
 * Fibonacci sequence
 * @param {number} num1 First number
 * @param {number} num2 Second number
 * @param {number} i Counter (how many iterations)
 * @returns Sequence of numbers
 */

function fibonacci(num1, num2, i) {

    if (num1 < 0 || num2 < 0) {
        throw new RangeError('Number less than zero!')
    }
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof i !== 'number') {
        throw new TypeError('Should be a number!');
    }


    if (i <= 1) {
        return `${num1} ${num2}`;
    } else {
        console.log(`${num1} ${num2}`);

        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        i--;
        return fibonacci(num1, num2, i);
    }
}



/* function fibonacci(num1, num2, end) {
    let sum;

    for (let i = 1; i <= end; i++) {
        console.log(num1, num2);

        sum = num1 + num2;
        num1 = num2;
        num2 = sum;

        if (i >= end - 1) {
            return `${num1} ${num2}`;
        }
}

} */


console.log(fibonacci(0, 1, 10))
// console.log(fibonacci('0', 1, 10)); /*  TypeError */
// console.log(fibonacci(-1, 1, 10)); /* RangeError */
