// task 1
console.log('task1');

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

// task 2
console.log('task2');

const arr4 = [1, 2, 3];
arr4.reverse();
console.log(arr4);

// task 3
console.log('task3');

const arr5 = [3, 4, 5];
arr5.push(4, 8, 10);
console.log(arr5);

// task 4
console.log('task4');

const arr6 = ['aaa', 'bbb', 'ccc'];
const last = arr6.pop();
console.log(last);

// task 5
console.log('task5');

const arr7 = ['3', 7, 10];
arr7.unshift(2, 8);
console.log(arr7);

// task 6
console.log('task6');

const arr8 = ['3', 7, 10];
const result = arr8.join(' ');
console.log(result, typeof result);

// task 7
console.log('task7');

const arr = [2, 44, 11, 234, 8, 2, 4, 1];

const res = [];
arr.forEach(elem => res.push(elem + 100));

console.log(res);

