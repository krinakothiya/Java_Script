const user = {
    username: "krina",
    price: 399,

    welcomemessage: function () {
        console.log(`${this.username} , welcome to website`)   // this use for saw current context( current object).
        // console.log(this)
    }
}

user.welcomemessage()
user.username = "sam"
user.welcomemessage()

console.log(this)   // it`s give {} empty object


// in this type of function this is not use.
function new1() {
    let username = "krina"
    console.log(this.username);
}
new1()

const new2 = function () {
    let username = "krina"
    console.log(this.username);
}
new2()


// **** Arrow function ****

//syntax
// () => {}

const arrow = () => {
    let username = "krina"
    console.log(this);
}
arrow()

// Explicit Arrow Functions:
const addTwo1 = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo1(7, 8));

// Implicit Arrow Functions:

const addTwo2 = (num1, num2) => num1 + num2  // return keyword and {} are not use in Implicit arrow.
console.log(addTwo2(7, 8));


const name = () => ({ username: "krina" })  // use () parenthesis for Implicit arrow.
console.log(name());