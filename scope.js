function one() {              //{} it`s call a scope     // globle scope 
    const first = "Hello, "

    function two() {     // child function can`t use in parent function.  but parent function is inside of child functio.
        const second = "Good Morning!"
        console.log(first);
    }
    // console.log(second);       // it`s give a error (out side of the function(scope) value can not run)
    two()
}
one()


if (true) {
    const username = "krina"
    if (username === "krina") {
        const website = " google.com"
        console.log(username + website);
    }
}


// ***** second type of function *****

console.log(addone(5))   //in this type function call first.

function addone(num) {
    return num + 1
}


// defind a variable and create a function

// addTwo(5)  // in this type can not call the functin at first (it`s give error)

const addTwo = function (num) {
    return num + 2
}

console.log(addTwo(5))