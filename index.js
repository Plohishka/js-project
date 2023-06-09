'use strict';



const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function func(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i % 2 === 0 && j % 2 === 0) {
                arr[i][j] = 'pp';
            } else if (i % 2 === 0 && j % 2 !== 0) {
                arr[i][j] = 'pn';
            } else if (i % 2 !== 0 && j % 2 === 0) {
                arr[i][j] = 'np';
            } else {
                arr[i][j] = 'nn';
            }
        }
    }
    return arr;
}

console.log(func(arr));

for (let subElem of arr) {
    for (let elem of subElem) {
        console.log(elem);
    }
}
