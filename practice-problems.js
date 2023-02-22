// Practice Problem 1

// 1) Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(12, 15, 10);
console.log(result);


// 2) Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.
const mySelf = `I am a web developer.
I love coding.
I love to eat Khichori.
`;
console.log(mySelf);

// 3) Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

const numbers = (num1, num2 = 10) => num1 + num2;
 const sum = numbers(12);
 console.log(sum);


// Practice Problem 2

// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the name of your friends
// b) Check if the length of each element is even, push elements with even length to a new array and return the result 
// Print the result.
const evenOdd = (friends) => {
    let even = [];
    for(let i = 0; i < friends.length; i++){
        let element  = friends[i];
        if(element.length % 2 === 0){
            even.push(element);
        }
    }
    return even;
}
const myFriends = ["Joy", "Joyrup", "Shanto", "Raihan", "Nayeem","Rafiq", "Pias", "Hasib"];
const evenName = evenOdd(myFriends);
console.log(evenName);


// Practice Problem 3

// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.
const toSquare = (numbers) =>{
    let sum = 0;
    let average = 0;
    for (let i = 0; i < numbers.length; i++){
        const squared = Math.pow(numbers[i], 2);
        sum = sum + squared;
        average = (sum / numbers.length).toFixed(2);
         
    }
   console.log(sum);
    return average ;
}
const numberArray = [10, 20, 30, 40, 50, 60];
const average = toSquare(numberArray); 
console.log(average);



// Practice Problem 4

// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the result
// Print the result.




// Common DOM Related interview questions:

// 1. What is DOM?
// 2. What are the different ways to get an element from DOM?
// 3. What’s the difference between an Event Handler and an Event Listener?
// 4. What does “event bubbling” mean in JavaScript?
// 5. Can you explain the different types of events available in JavaScript?
// 6. What’s the difference between event.preventDefault() and event.stopPropagation() ?



// Common ES6 interview questions:

// 1. What is ES6? Have you ever used anything from ES6?
// 2. Explain the difference between var, let and const.
// 3. What is the arrow function, and how to create it?
// 4. Give an example of an Arrow function in ES6? List down its advantages.
// 5. Discuss spread operator in ES6 with an example.
// 6. What do you understand about default parameters?
// 7. What are template literals in ES6?
// 8. Tell us the difference between arrow and regular function.


// To get more interview questions search “Common JavaScript

// ES6 Interview Questions” on Google.