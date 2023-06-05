const arr = [3, 6, 8, 2, 3, 5, 1];

////////////////////////////////

/* function average(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(average(arr)); */



/////////////////////////////////
        
/* function average(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }
    return sum / arr.length;
}

console.log(average(arr)); */


/////////////////////////////////


function average(arr) {
    const res = arr.reduce(function(sum, elem) {
        return sum + elem;
    })
    return res / arr.length;
}

console.log(average(arr));




