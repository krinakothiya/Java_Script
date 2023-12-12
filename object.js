
//**** object literals ****

const mySym = Symbol("key1")


const JsUser = {
    name: "krina",
    "full name": "krina kothiya",
    [mySym]: "mykey1",
    age: 18,
    location: "ahemdabad",
    email: "krina123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "krina@chatgpt.com"
// Object.freeze(JsUser)                // freez the value. cannot change the value.
JsUser.email = "krina@microsoft.com"
console.log(JsUser.email);


JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



// **** singleton **** 

// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "krina",
            lastname: "kothiya"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "e", 6: "f" }

const A1 = { obj1, obj2 }
const A2 = Object.assign({}, obj1, obj2, obj3)

const A3 = { ...obj1, ...obj2 }
console.log(A1);
console.log(A2);
console.log(A3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));     // give valu in a typeof list.
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));    // this value is avaible or not.


// **** Object de-structure ****

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "krina"
}

course.courseInstructor

const { courseInstructor } = course
console.log(courseInstructor);
