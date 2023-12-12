// for of loop

const arr = [1, 2, 3, 4]
for (const num of arr) {
    console.log(num);
}

const greeting = "Hellio world"
for (const greet of greeting) {
    console.log(`each char is ${greet}`);
}


// Map 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
console.log(map)

for (const [key, value] of map) {
    console.log(key, ":-", value);
}


// object in for of loop
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {   // give a error because object is not iterable.
//     console.log(key, ':-', value);
// }