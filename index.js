// task 1
console.log('task1');

/* const users = [
    {
        name: 'John',
        lastName: 'Doe',
        age: 18,
        email: 'meil@com'
    },
    {
        name: 'Jane',
        lastName: 'Doe',
        age: 20,
        email: 'meil@com'
    },
    {
        name: 'Josh',
        lastName: 'Doe',
        age: 17,
        email: 'meil@com'
    },
    {
        name: 'Jake',
        lastName: 'Doe',
        age: 21,
        email: 'meil@com'
    },
    {
        name: 'Jackson',
        lastName: 'Doe',
        age: 17,
        email: 'meil@com'
    },
]


const adultUsers = users.map(user => {

    if (user.age >= 18) {
        return {
            fullname: `${user.name} ${user.lastName}`,
            age: user.age,
            email: user.email
        }
    }

}) 

function deleteEmpty(arr) {              // ???????

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'undefined') {
            arr.splice(i, 1);
        }
    }
    return arr;

}

console.log(deleteEmpty(adultUsers)); */


// task 2
console.log('task2');

/* const arr = [2, 5, 9, 4, 3, 4, 7];

const increase = arr.sort((num1, num2) => {
    return num1 - num2;
})

console.log(increase);


const decrease = arr.sort((num1, num2) => {
    return num2 - num1;
})

console.log(decrease); */


// task 3
console.log('task3');

/* const arr = [2, 5, 9, 4, 3, 4, 7, 6];

const even = arr.filter(elem => {
    return elem % 2 === 0;
})

console.log(even); */


// task 4
console.log('task4');

/* const arr = [1, 2, 5, 9, 4, 3, 4, 7, 6];

const evenSumElem = arr.reduce((sum, elem) => {

    return elem % 2 === 0 ? sum + elem : sum;
   
}, 0)

console.log(evenSumElem); */


// task 5
console.log('task5');

/* const catArray = [
    {
        name: 'Murzik',
        color: 'black',
        weight: 3,
        age: 2
    },
    {
        name: 'Murka',
        color: 'grey',
        weight: 5,
        age: 3
    },
    {
        name: 'Barsik',
        color: 'red',
        weight: 2,
        age: 1
    },
    {
        name: 'Cookie',
        color: 'brown',
        weight: 5,
        age: 2
    },
    {
        name: 'Stus',
        color: 'grey',
        weight: 2,
        age: 5
    },
    {
        name: 'Fagot',
        color: 'black',
        weight: 5,
        age: 3
    },
    {
        name: 'Kit',
        color: 'pink',
        weight: 2,
        age: 1
    },

];

const catName = catArray.map(elem => {
    return {name: elem.name};
})

console.log(catName); */
