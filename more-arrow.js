const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;

const result = multiply(7, 8);
// console.log(result);

const addAll = (a, b, c, d, e, f, g, h ) => a+ b + c + d+ e + f + h;


// No parameter arrow function
const getPie = () => 3.14;

// One parameter
const doubleIt = (num) => num * 2;

// One parameter simple version:
const fiveTimes = num => num * 5;

// Multi line arrow function
// if u want to return something, use the return;
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const SecondSum = y + z;
    const multiplyResult = firstSum * SecondSum;
    const result = multiplyResult / 2;
    return result; 
}


