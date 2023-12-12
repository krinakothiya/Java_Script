// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


const num = 0
if (num) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


const emptyarray = []
if (emptyarray.length === 0) {
    console.log("Array is empty");
}


const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}