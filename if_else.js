//operators 
// <, >, <=, >=, ==, !=, ===, !==

const temperature = 45
if (temperature === 40) {
    console.log("less than 50");
}
else {
    console.log("temperature is greater than 50");
}

const score = 200
if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

const balance = 1000
if (balance < 2000) console.log("true");  // single line if.

// nested if else

const num = 800

if (num < 500) {
    console.log("num less than 500");
}
else if (num < 700) {
    console.log("num less than 700");
}
else if (num < 900) {
    console.log("num less than 900");
}
else {
    console.log("num less than 1200");
}

// logical operator

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to by course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


// Nullish Coalescing Operator (??): null undefined

val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20
val5 = null ?? undefined

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);


// Terniary Operator
// syntax : condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");