// Object destructuring :--
const fish = {
    name: ' King Hilsa',
    address: "Padma",
    color:'silver',
    phone: '01712345678',
    price: 4000
}
// const phone = fish.phone;
// console.log(phone);

const {phone} = fish;
console.log(phone);
// (Objects er khetre same name dite hobe)
const {age, name} = {name:'Almas', age: 56, profession:'makeup artist'}
console.log(age);

const {address} = fish;
console.log(address); 




// Array Destruction:--

const [first, another] = [44, 70, 50, 20];
console.log(first, another);

const nayaks = ['Salman Shah', 'Bapparaj', 'Raj Razzak'];
const [hero, sad, king] = nayaks;
console.log(king);

function getNames(){
    return [ 'Alim', 'Dalim'];
}
const [baba, kaka] = getNames();
console.log(kaka, baba);