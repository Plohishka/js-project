const arr = [1, 7, 2, 4, 3, 4, 5, 6, 9, 6];

function func(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(i, 1);
            }
        }
    }
 
    return arr;
}

const findRepet = func(arr);
const res = findRepet.sort((a, b) => {
    return a - b;
})

console.log(res);
