// Basic 13

// 1. Print1To255
function print1To255(){
    for(let i=0; i <= 255; i++){
        console.log(i);
    }
}
// 2. Print Odds 1-255
function printOdd(){
    for(let i=0; i<=255; i+=2){
        console.log(i);
    }
}
// 3. Print Ints and Sum 0-255
function printIntAndSum(){
    let sum = 0;
    for(let i=0; i<=255; i++){
        sum += i;
        console.log("i = "+i);
        console.log("Sum: "+sum);
    }
}
// 4. Iterate and Print Array
function iterateAndPrintArr(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
// 5. Find and Print Max
function findAndPrintMaX(arr){
    let max = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max) max=arr[i];
    }
    console.log(max);
}
// 6. Get and Print Average
function getAndPrintAvg(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    console.log(sum/arr.length);
}
// 8. Square the Values
function squareTheValuesOneLiner(arr){
    return arr.map(value => value*value);
}
function squareTheValues(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    console.log(arr);
}
// 9. Greater than Y
    function greaterThanY(arr){
        let count = 0;
        for(let i=0; i<arr.length; i++){
            if(arr[i] > y){
                count++;
                console.log(arr[i]);
                console.log(count);
            }
        }
    }


