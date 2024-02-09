let firstname = "mohammed"
let lastname = "habti"
const PI = 3.14
let radius = 9
let favoriteSuperhero = "Iron-Man"
const favoriteQuote = "Nothing is impossible."

//===========================

let fullName = firstname + ' ' + lastname
let area = (radius ** 2) * PI
let perimeter = 2 * radius * PI
let motivation = `A wise man named ${favoriteSuperhero}: "${favoriteQuote}"` 

//===========================

let a = 3
let b = 10

let tmp = 0;
tmp = a
a = b
b = tmp
console.log("After swapping: a = ", a, " and b = ", b);