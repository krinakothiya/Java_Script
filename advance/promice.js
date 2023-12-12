// create variable :
const promiseOne = new Promise(function (resolve, reject) {
    //Do an async(asynchronous ) task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log("Asynchronous task 1 is compelete")
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed and resolve")
})

//second method promise :

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Asynchronous task 2 is compelete : ")
        resolve()
    }, 1000);
}).then(function () {
    console.log("promise 2 conumed : ");
})


// enter object in resolve :
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 2000)
})
promiseThree.then((user) => {
    console.log(user);
})

// use reject and chain method :

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "krina", passworrd: "1234" })
        }
        else {
            reject("ERROR: Something went wrong")
        }
    }, 2000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))    //it`s run any time false or true.


// use async await method :

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", passworrd: "1234" })
        }
        else {
            reject("ERROR: JS went wrong")
        }
    }, 2000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()



