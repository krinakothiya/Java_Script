// **** Number ****

const balance = new Number(100)  // write a value in Number
console.log(balance);

console.log(balance.toString().length);  // convert a no. in to str and find the len of no.

console.log(balance.toFixed(3));   // how many no. disply after the point


const otherNumber = 1123.8966
console.log(otherNumber.toPrecision(3));   // how many no. is diply to the no.
console.log(otherNumber.toPrecision(4));


const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'))   //display numbers in a readable format


// **** MATHS ****

console.log(Math);
console.log(Math.abs(-16));  // convert negative no. to positive 
console.log(Math.round(47.9)); // round of the no.
console.log(Math.ceil(4.2));   // Round up the minimum value
console.log(Math.floor(4.9));  // Round down the maximum value
console.log(Math.min(4, 3, 6, 8));  // find the min value
console.log(Math.max(4, 3, 6, 8));   // find the max value


console.log(Math.random());          // Generates a random value between 0 (inclusive) and 1 (exclusive)

console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)