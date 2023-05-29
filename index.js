// task 1
console.log('task1');

function showBiggerNum(num1, num2) {
    const res = num1 > num2 ? num1: num2;
    return res;
}

console.log(showBiggerNum(10, 15));


// task 2
console.log('task2');

const getAverageNum = (num1, num2) => (num1 + num2)/2;
console.log(getAverageNum(12, 10));


// task 3
console.log('task3');

const isEven = function (num) {
    const res = num % 2 === 0 ? true: false;
    return res;
}

console.log(isEven(4));
