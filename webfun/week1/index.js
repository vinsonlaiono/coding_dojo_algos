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
function iterateAndPrintArr(array){
    for(let i=0; i<array.length; i++){
        console.log(array[i]);
    }
}