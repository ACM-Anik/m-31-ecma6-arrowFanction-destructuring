// To make multi line
// 1. Ordinary
const multiLine = 'First line text \n' +
'Second line of the text \n' +
'Third line of the text \n' +
'Fourth line of the text';

// 2. Use of backtick
const newMultiLine = `First line text
Second line of the text 
Third line of the text 
Fourth line of the text`;
console.log(newMultiLine);



const a = 20;
const b = 30;
const summary = 'sum of:' + a + 'and' + b + 'is:' + (a+b);
// backtick
const newSummary = `Sum of ${a} and ${b} is: ${a+b}`;

const numbers = [38, 45, 67, 20];
const sumNumbers = `Sum of ${a} and ${numbers.length} is: ${a+b}`;