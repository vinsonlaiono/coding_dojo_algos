// Print all the values from  1 to n
function printvals(n) {
    if (n === 0) return;
    printvals(n - 1);
    console.log(n);
}
// Return the sigma of 1 to n
function sigmaN(n) {
    if (n === 0) return n;
    return n + sigmaN(n - 1);
}
// Return the factorial of 1 to n
function factorial(n) {
    if (n === 1) return n;
    return n * factorial(n - 1);
}

// Return the fibonacci value of n
// O(n^2) time | O(n) space -- Recursive
function fibonacciI(n) {
    if (n === 1 || n === 0) return n;
    return fibonacciI(n - 1) + fibonacciI(n - 2);
}

// O(n) time | O(n) space -- Recursive w/ memoization
function fibonacciII(n, hashMap = { 1: 0, 2: 1 }) {
    if (n in hashMap) {
        return hashMap[n];
    } else {
        hashMap[n] = fibonacciII(n - 1, hashMap) + fibonacciII(n - 2, hashMap);
        return hashMap[n];
    }
}

// O(n) space | O(1) time --- Iterative solution
function fibonacciIII(n) {
    lastTwo = [0, 1];
    counter = 3;
    while (counter <= n) {
        nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter += 1;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
}
