// function declaration
function add(first , second){
    const total = first + second;
    return total;
}
const result = add(10, 20);
console.log(result);


// function expression
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}

// function expression with anonymous function
const add2 = function(first, second){
    const total = first + second;
    return total;
}


// Make function in short:--
1.
function add3(first, second){
    return first + second;
}
2.
const add4 = function(first, second){
    return first + second;
}
// 3. arrow Function:
const add5 = (first, second) => first + second;

const sum = add5(12, 15);
console.log(sum);

// Interview Question(***): Difference between function declaration, function expression and arrow function?