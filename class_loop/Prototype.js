// add prototyp in object : 
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.krina = function () {                      //prototype use to join to objects(items)
    console.log(`krina is present in all objects`);
}

heroPower.krina()


// add prototyp in array : 
let myHeros = ["thor", "spiderman"]

Array.prototype.newarray = function () {
    console.log("hello, good morning");
}

// heroPower.newarray()             (give an error)
myHeros.newarray()
myHeros.krina()



// finde trueLength using prototype :

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);    //trime is use to find length and avoid the space
}

anotherUsername.trueLength()
"krina  ".trueLength()
"   javascript   ".trueLength()



//only for know :
// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
