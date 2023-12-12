// Immediately Invoked Function Expressions (IIFE) : 
//use for avoid a globle scope polution.

(function iife() {
    //named IIFE
    console.log("DB CONNECTED")
})();

// write two iife in one code then ; are use to close first iifi, otherwise give a error.

((name) => {
    //un named IIFE
    console.log(`Hello, Good Morning ${name}`)
})("krina");