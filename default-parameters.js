// To not get error or undefined:
1.
function add(first, second){
    console.log(first, second);
    if(second === undefined){
        second = 0;
    }
    const total = first + second;
    return total;
}
// const result = add(10);
// console.log(result);

2.
function add(first, second){
    second = second || 0;
    const total = first + second;
    return total;
}
// const result = add(10);
// console.log(result);

3.
function add(first, second = 2){
    const total = first + second;
    return total;
}
const result = add(10);
console.log(result);
