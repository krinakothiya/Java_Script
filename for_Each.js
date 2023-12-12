// using array: 
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val) {
    console.log(val);
})
console.log()

coding.forEach(function (item) {
    console.log(item);
})

// forEach cannot return the value
const values = coding.forEach((item) => {
    console.log(item);
    return item
})
console.log(values);

//  using function :
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

// using arrow function :
coding.forEach((item, index, array) => {
    console.log(item, index, array);
})

// object inside array : 
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);
})