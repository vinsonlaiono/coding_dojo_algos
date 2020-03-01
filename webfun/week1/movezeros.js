// solution I
let moveZeroesI = arr => {
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] === 0) arr.splice(i, 1), arr.push(0);
    }
    return arr;
};

// solution II
var myArray = [0, 1, 5, 0, 3, 0, 4, 7];

let moveZeroesII = arr => {
    console.log('', arr);
    var zeroCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        } else {
            arr[i - zeroCount] = arr[i];
        }
    }
    for (var i = arr.length - 1; i > arr.length - 1 - zeroCount; i--) {
        arr[i] = 0;
    }
    return arr;
};
console.log('' + moveZeroes(myArray));

// solution III
var myArr = [0, 6, 2, 4, 0, 3, 0, 0, 5, 1];
let moveZeroesIII = arr => {
    console.log(arr);
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) count++;
        else {
            let temp = arr[i];
            arr[i] = arr[i - count];
            arr[i - count] = temp;
        }
    }
    return arr;
};
console.log('', moveZeroes(myArr));
