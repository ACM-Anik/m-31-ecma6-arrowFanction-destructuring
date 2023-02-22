// Note: TO get the core value of an array, have to use three dots(...) before the variable.
const max = Math.max(12, 85, 70, 40);
const numbers = [12, 34, 45, 56, 60];
const largest = Math.max(...numbers);
console.log(...numbers);
console.log(largest);

//kono ekti te push ba kichu korle dui jaygay e kaj kore.
//tai dui jaygay kaj korate na caile (...) bebohar korte hobe:   
const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(777);
console.log(numbers);
console.log(numbers2);

// ekline e ekadhik maan jog
const numbers3 = [...numbers];
const numbers4 = [400, 72, ...numbers, 11, 32];



// Quiz
const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari']; 
console.log(newCars);