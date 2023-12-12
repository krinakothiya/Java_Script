let myDate = new Date()

console.log(myDate)

// Formatting Date as a String:
console.log(myDate.toString())           // Get a human-readable string representing the date and time.
console.log(myDate.toDateString())       // Get a string representing the date part.
console.log(myDate.toLocaleString())     // Get a localized date and time string based on the user's locale.
console.log(myDate.toLocaleDateString())     // Get a localize date.
console.log(myDate.toJSON())
console.log(myDate.toTimeString())         // Get a string representing the time part.
console.log(myDate.toUTCString())          // Get a UTC (Coordinated Universal Time) date and time string.


let myCreatedDate = new Date(2023, 0, 23)    // month can start from 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

// milliseconds
let myTimeStamp = Date.now()
console.log(myTimeStamp)  // count a milliseconds that have elapsed since January 1, 1970

console.log(myCreatedDate.getTime())   // count a milliseconds of myCreated date.
console.log(Math.floor(Date.now() / 1000));  // count a secound


let newDate = new Date()

// Getting Date and Time Components
console.log(newDate.getDate())          // Get the year (four digits).
console.log(newDate.getMonth() + 1)    // Get the month (0-based; 0 = January, 11 = December).
console.log(newDate.getDay())         //  Get the day of the month (1-31).
console.log(newDate.getFullYear())    //  Get the day of the week (0 = Sunday, 6 = Saturday).

// the date string with the full weekday name:
console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))