// Breakup with var
// no more use of var
// const: do not allow it to reassign

let money = 25;
money = 35;
console.log(money);

const bird = 'Tiya Pakhi';
// bird = 'Moyna Pakhi';
const massage = bird +'potas potas';
console.log(massage);

const numbers = [12, 89, 65, 45];
// reassign is not allowed in const
numbers = [77, 86, 80, 60];
// const e kintu push kore jay
numbers.push(123);
// numbers er index diye kono man set kora jay
numbers[1] = 90;
console.log(numbers);

const student = {
    name:'mofiz',
    address: 'Rangpur'
}
// eivabe change kora jay na:
student = {name: 'Mafazzol'};
// Eivabe change kore jay:
student.name = 'Mofazzol';

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    sum = sum + number;
    // console.log(number);
}
// Console jodi loop er bahire hoy, to let o const er belay kaj kore na. kintu var e somoy kore
console.log(number);