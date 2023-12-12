function addtwonumber(a, b) {
    console.log(a + b);
}

addtwonumber(10, 23)

//return value
function addTwonumber(c, d) {
    let result = c + d
    return result
    return c + d   //  after a retun code is not valid
}

const result = addTwonumber(3, 4)
console.log("Result : ", result)


function loginUserMessage(username) {
    if (username === undefined) {
        console.log("PLease enter a username")
    }
    else {
        return `${username} just logged in`
    }
}

console.log(loginUserMessage());
console.log(loginUserMessage("krina"));



// ****object and array ****

function calculateCartPrice1(...num1) {
    return num1                             // return a llist value
}

console.log(calculateCartPrice1(200, 400, 300, 100))

function calculateCartPrice(val1, val2, ...num1) {
    return num1                             // return a llist value
}

console.log(calculateCartPrice(200, 400, 300, 100))

// object in function

const user = {
    username: "krina",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `)
}

handleObject(user)
handleObject({
    username: "sam",
    price: 299
})

// array in function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[2]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100, 200, 300, 4000])) 