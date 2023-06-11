'use strict';



function likes(...names) {
    let i = names.length - 2;

    switch (names.length) {
        case 0: return "no one likes this"; break;
        case 1: return `${names[0]} likes this`; break;
        case 2: return `${names[0]} and ${names[1]} like this`; break
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`; break;
        default: return `${names[0]}, ${names[1]} and ${i} others like this`;
    }

    /*  if (names.length === 0) {
         return "no one likes this";
     } else if (names.length === 1) {
         return `${names[0]} likes this`;
     } else if (names.length === 2) {
         return `${names[0]} and ${names[1]} like this`;
     } else if (names.length === 3) {
         return `${names[0]}, ${names[1]} and ${names[2]} like this`;
     } else if (names.length >= 4) {
         return `${names[0]}, ${names[1]} and ${i} others like this`;
     } */
}

console.log(likes('Peter', 'John', 'Klark', 'Nick', 'Bob'));


// task 1
console.log('task1');

/* function rest(...rest) {
    return rest;
}

console.log(rest(1, 2, 3, 4, 5, 'a', 'b')); */

// task 2
console.log('task2');

/* function max(...rest) {
    return Math.max(...rest);
}

console.log(max(1, 20, 3, 4, 5)); */

// task 3
console.log('task3');

/* const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {d: 4, e: 5, f: 6};
const obj3 = {...obj1, ...obj2};
console.log(obj3); */

// task 4
console.log('task4');

/* function deleteElem(arr, ...index) {

    for (let i = 0; i < index.length; i++) {
        arr.splice(index[i] - i, 1);
    }

     return arr;
}

console.log(deleteElem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 4, 7)); */


// task 5
console.log('task5');

/* function func(arr, ...rest) {
     let res = [...arr, ...rest];
    return res;
}

console.log(func([1, 2, 3, 4, 5], 6, 7, 8, 9, 10)); */

// task 6
console.log('task6');

const arr = ['a', 'b', 'c', 'd', 'b', 'e', 'c'];
const arr1 = arr;
const arr2 = [];

//          v1
for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < i; j++) {
        if (arr1[j] === arr1[i]) {
            arr1.splice(i, 1);
    }
    }
}
       
//         v2
for (let i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])) {
        arr2.push(arr[i]);
    }
}
//         v3
const arr3 = arr.filter((elem, index, arr) => {
    return arr.indexOf(elem) === index;
})

console.log(arr1);  /* v1 */
console.log(arr2);  /* v2 */
console.log(arr3);  /* v3 */
