const name = "krina"
const repoCount = 30

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hello world')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);  // count the length
console.log(gameName.toUpperCase());   // change lower case to uper case
console.log(gameName.charAt(7));       // find the Character using index no.
console.log(gameName.indexOf('w'));    // count the index number

// substring (starting point - ending point)
const newString = gameName.substring(0, 3)
console.log(newString);


const newStringOne = "   krina    "
console.log(newStringOne);
console.log(newStringOne.trim());  // remove the space

const url = "https://krina.com/krina%23javascript"   // replace the world
console.log(url.replace('%23', '_'))

console.log(url.includes('is this'))  // fine the world is present or not

console.log(gameName.split('l'));   // sepret the string 


