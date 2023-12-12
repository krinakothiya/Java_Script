let score = "50"

console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

// undefined  (this is not covert in num)
let a = "33abc"
let b = Number(a)
console.log(typeof b)
console.log(b)  // not a number(NaN) 

//null
let x = null
let y = Number(x)
console.log(y)

// boolean
let c = true
let d = Number(c)
console.log(d)

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


// convert in Boolean

let isLoggedIn = "krina"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "name" => true


// convert in string

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
