
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);

}

for (let i = 0; i <= 10; i++) {
    // const element = i;
    if (i == 6) {
        console.log("6 is best number");
    }
    // console.log(element);
}

// print a Multiplication Table : 
for (let i = 5; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
        // console.log(i + "*" + j + "=" + i * j);
    }
}


// array use in for loop
let myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}


// break and continue : 

for (let i = 0; i < 15; i++) {
    if (i == 6) {
        console.log("Detected 6 and break the code")
        break;      // it is used to exit a loop prematurely. 
    }
    console.log(`value is ${i}`)
}


for (let j = 0; j < 15; j++) {
    if (j == 6) {
        console.log("skip value by continue 6")
        continue;       // used to skip certain iterations based on a condition. (skip value 6 and contine.)
    }
    console.log("value is", j);
}