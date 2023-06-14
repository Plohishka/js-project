'use strict';



// task 1
console.log('task1');


/* function factorial(num) {
    let sum = 1;

    for (let i = 1; i <= num; i++) {
        sum *= i;
    }

    return sum;
}

console.log(factorial(5)); */


function factorial(num) {

    /* if (num === 1) {
        return num;
    } else {
        return num * factorial(num - 1);
    } */
    return num === 1 ? num : num * factorial(num - 1);

}

console.log(factorial(5));


////////////////////////////////////////////////////////////////////


// task 2
console.log('task2');


/**
 * Check a character for a string or a number
 * @param {*} char  Character to be tested
 * @returns   true or false
 */


function isLetterNumber(char) {
    return (char.toLowerCase() !== char.toUpperCase() || !isNaN(char));
}


/**
 * Checking a string for a palindrome
 * @param {string} str  The string to be checked
 * @param {number} start  Left row counter
 * @param {number} end  Right row counter
 * @param {*} leftChar  Character coming from the left
 * @param {*} rightChar  Character coming from the right
 * @throws {TypeError}  If the variable (str) is not a string
 * @returns true or false
 */

function isPalindrome(str) {

    if (typeof str !== 'string') {
        throw new TypeError('the variable \'str\' must be a string!');
    }
    
    let start = 0;
    let end = str.length - 1;

    while(start < end) {
        const leftChar = str[start];
        const rightChar = str[end];

        if (!isLetterNumber(leftChar)) {
            start += 1;
            continue;
        }

        if (!isLetterNumber(rightChar))  {
            end += 1;
            continue;
        }

        if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
            return false;
        }

        start += 1;
        end -= 1;
    }

    return true;
}



console.log(isPalindrome('Anna'));
console.log(isPalindrome('Mama'));
console.log(isPalindrome(22));      /* error */
console.log(isPalindrome('Namman'));
console.log(isPalindrome('2002'));



