// Basic 13

// 1. Print1To255
function print1To255() {
    for (let i = 0; i <= 255; i++) {
        console.log(i);
    }
}
// 2. Print Odds 1-255
function printOdd() {
    for (let i = 0; i <= 255; i += 2) {
        console.log(i);
    }
}
// 3. Print Ints and Sum 0-255
function printIntAndSum() {
    let sum = 0;
    for (let i = 0; i <= 255; i++) {
        sum += i;
        console.log('i = ' + i);
        console.log('Sum: ' + sum);
    }
}
// 4. Iterate and Print Array
function iterateAndPrintArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// 5. Find and Print Max
function findAndPrintMaX(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    console.log(max);
}
// 6. Get and Print Average
function getAndPrintAvg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum / arr.length);
}
// 8. Square the Values
function squareTheValuesOneLiner(arr) {
    return arr.map(value => value * value);
}
function squareTheValues(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    console.log(arr);
}
// 9. Greater than Y
function greaterThanY(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
            console.log(arr[i]);
            console.log(count);
        }
    }
}

// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.

function ZeroOutArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) arr[i] = 0;
    }
    return arr;
}
// arr[i] < 0 ? arr[i]=0 : arr[i] = arr[i]

// 11. Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.
function PrintMaxMinAverageArrayVals(arr) {
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
        min = Math.max(min, arr[i]);
        sum += arr[i];
    }
    return [max, min, sum / arr.length];
}

// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

function ShiftArrayValsLeft(arr) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;
    return arr;
}

// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringForArrayNegativeVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) arr[i] = 'Dojo';
    }
    return arr;
}
