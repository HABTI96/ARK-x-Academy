const books = require("./books.json");

function priceOfBook(bookName) {
  let price
  for (let i = 0;i < books.length-1;i++){
    if (bookName == books[i].title){
      price = books[i].price
    }
  }
  return price
}
console.log(priceOfBook("The Book Thief"))

function affordableBooks(budget) {
  let bks = []
  for (let i = 0;i<books.length;i++){
    if (budget > books[i].price){
      bks.push(books[i].title)
    }
  }
return bks
}
// console.log(affordableBooks(10))


function findBookByGenre(genre) {
  let bks = []
  for (let i = 0; i< books.length-1;i++){
    for (let j =0;j < books[i].genres.length;j++){
      if ( books[i].genres[j] == genre ){
        bks.push(books[i].title)
      }
    }
  }
  return bks
}
// console.log(findBookByGenre("Fiction"))

function groupByGenre() {
  let bks = []
  for (let i = 0; i< books.length;i++){
    for (let j =0;j < books[i].genres.length;j++){
      bks.push(books[i].genres[j])
    }
  }
  let mySet = new Set(bks)
  let myArray = Array.from(mySet);
  return myArray
}
// console.log(groupByGenre())

// function sortBooksByPrice() {
//   // write your code here
// }


// (function main() {
//   try {
//     if (priceOfBook("The Alchemist") !== 9.49) {
//       throw new Error("priceOfBook is not working properly.");
//     }
//     if (affordableBooks(10).length !== 6) {
//       throw new Error("xxxxxxxxxxx.");
//     }
//     if (findBookByGenre("Fiction").length !== 7) {
//       throw new Error("findBookByGenre is not working properly.");
//     }
//     if (Object.keys(groupByGenre()).length !== 30) {
//       throw new Error("groupByGenre is not working properly.");
//     }
    // if (sortBooksByPrice()[0].price !== 5.99) {
    //   throw new Error("sortBooksByPrice is not working properly.");
    // }
//     console.log("All tests passed successfully.");
//   } catch (error) {
//     console.log(error);
//   }
// })();