// const axios = require("axios")

// const data = axios.get("https://dummyjson.com/users")

// data
// .then((res)=> {
//     console.log(res.data)
// })
// .catch((err) => {
//     console.log(err)
// })


//------------------------------------------------------------
function divide (a, b) {
    if (b === 0) {
        throw new Error('Division by 0 is forbidden');
    }
    return a / b;
}

try {
    console.log("BEGIN");
    const res = divide(1, 0);
    console.log("Result = " + res); // won't execute
} catch(error) {
    console.log("An error has occured: " + error.message);
} finally {
    console.log("END");
}


// Raised the Error -------------------------------------------

// function divide (a, b) {
//     if (b === 0) {
//         throw new Error('Division by 0 is forbidden');
//     }
//     return a / b;
// }

// let x = divide(1, 10); 
// console.log(x)

// Valid Example -------------------------------------------------------

// const myPro = new Promise(function(resolve, reject){
//     const sc = 50
//     if (sc > 20 ) resolve()
//     else{
//         reject()
//     }
// })

// myPro
// .then(() => console.log(":)"))
// .catch(() => console.error("it looks like you have an error"))

// Valid Example -------------------------------------------------------

// const myPro = new Promise(function(resolve, reject){
//     const sc = 5
//     if (sc > 20 ) resolve("Great!!")
//     else{
//         reject("not good")
//     }
// })

// myPro
// .then((msg) => console.log(":)", msg))
// .catch((msg) => console.error("it looks like you have an error =>" ,msg))


// (Promis)Valid Example -------------------------------------------------------

// const myPro = new Promise(function(resolve, reject){
//     const sc = 50
//     if (sc > 20 ) resolve("Great!!")
//     else{
//         reject("not good")
//     }
// })

// myPro
// .then(function(msg){
//     console.log(msg)
// })
// .catch(function(msg){
//     console.error(msg)
// })

// -------------------------------------------------------

// // Create a Promise with resolve and reject
// const myPromise = new Promise(function (resolve, reject) {
//     const success = 15;

//     // Simulate an asynchronous operation
//     if (success < 20) {
//     resolve("Operation successful!");
//     } else {
//     reject("Operation failed!");
//     }
// });

//   // Handle the resolution and rejection  
// myPromise
//     .then(function (message) {
//       // This will be executed if the Promise is resolved
//     console.log(message);
//     })
//     .catch(function (error) {
//       // This will be executed if the Promise is rejected
//     console.error(error);
//     });

// -------------------------------------------------------

// const myPromise = new Promise(function (resolve, reject) {
//     const alright = true;
//         setTimeout(function () { 
//             if (alright) resolve("Everything went well");
//             else reject("Encountered an error");
//         }, 2000)
//     }); 
//     console.log("1");
//     myPromise
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .finally(function () {
//         console.log("Promise completed");
//     });
//     console.log("2");

// Try to understand --------------------------------------
// a(function(usr){
//     b(usr, function(f_b){
//         console.log(f_b)
//     });
// });

// function a(callback){
//     console.log("simo")
// }
// function b(usr, callback){
//     callback("habti")
//     console.log("your txt")
// }



// Callback--------------------------------------
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// function askQuestion(QST , callback){
//     rl.question(QST, function(ANS){
//         callback(ANS)
//     })
// }
// askQuestion("give me a txt: ", function(usr){
//     console.log("your txt is",usr)
//     rl.close()
// })

// B --------------------------------------
// const readline = require('readline')

// const rdl = readline.createInterface({input : process.stdin, output: process.stdout})

// rdl.question("write something: ", function(str){
//     console.log(`you wrote ${str}`)
//     rdl.close();
// })

//  A --------------------------------------

// const readline = require('readline');

// const rdln = readline.createInterface({input: process.stdin, output: process.stdout})

// rdln.question("enter your name : ", function(usr){
//     console.log(`your name is ${usr}`)
//     rdln.close();
// })