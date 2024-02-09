
// easy way to export ---------------------------------

// let add = function adder(a, b){
//     console.log(a + b)
// }
// let sub = function subber(a,b){
//     console.log(a - b)
// }

// module.exports = {
//     add:add,
//     sub:sub
// }



// Module 2 ---------------------------------

//==> file_A

// let add = function adder(a, b){
//     console.log(a + b)
// }
// let sub = function subber(a,b){
//     console.log(a - b)
// }
// module.exports.add = add
// module.exports.sub = sub

//==> file_B

// let stuff = require("./main.js")
// stuff.add(5,4)
// stuff.sub(6,2)



// Module---------------------------------

//==> file_A

// let txt = function(name){
//     console.log('hey', name)
// }
// module.exports = txt

//==> file_B

// let txt = require("./file_A.js")
// console.log(txt("habti"))
