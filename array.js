
const mixedArray = [1, "apple", true, { name: "John" }];
console.log(mixedArray[3])   // print value using index no.
console.log(mixedArray.length)  // find a length of array

// Array methods
const array = new Array(0, 1, 2, 3, 4)
array.push(6)       //  Add an element to the end
console.log(array)

array.pop()        // Remove the last element
console.log(array)


const fruits = ["apple", "banana", "cherry", "orange", "Grapes"]
fruits.unshift(6)            // add an element at beginning
console.log(fruits)

fruits.shift()               // remove element at the beginning
console.log(fruits)

console.log(fruits.includes("orange"))  // use to check an element is includes or not.
console.log(fruits.indexOf("apple"))    // find a index no. of element.


// Slice, Splice
const number = [0, 1, 2, 3, 4, 5]

console.log("A : ", number);
const myn1 = number.slice(2, 5)  // create a new array using strting point and ending point (ending point is not consider)
console.log(myn1);

const myn2 = number.splice(1, 3)   // create a two new array. and remove a element from amin array and add a second array.
console.log("B : ", number);
console.log(myn2);


// **** Array2 ****

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// using push operation to mearge two array is return second array is inside of Array first.
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


const allHeros = marvel_heros.concat(dc_heros)   // mearge two array element and create a new array
console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros]  // mearge more than two  array
console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)     //  It reduces the depth of nested arrays and create a new array.
console.log(real_another_array);


console.log(Array.isArray("krina"))   // check this is array or not.(return a true or false)
console.log(Array.from("krina"))      // conver a elemnt in array

// like a from
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));   