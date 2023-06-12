'use strict';

// task 1
console.log('task1');

function checkSpam(...rest) {
    
      return rest.some((str) => {
        return str.toLowerCase().includes('xxx')  ||
         str.toLowerCase().includes('viagra');
    })
    
}

console.log(checkSpam('buy ViAgRa now'));
console.log(checkSpam('free xxxxxx'));
console.log(checkSpam('innocent rabbit'));


// task 2
console.log('task2');


function isLetterNumber(char) {
    return (char.toLowerCase() !== char.toUpperCase() || !isNaN(char));
}



function isPalindrome(str) {
    
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
console.log(isPalindrome('Namman'));
console.log(isPalindrome('2002'));

