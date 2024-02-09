const myObject = {
    firstName: [11,22,33,{"ss":"habti"}],
    lastName: 'Doe',
    age: 30,
};

// const [firstValue] = Object.values(myObject);
// console.log(`Value of the first property: ${firstValue}`);
console.log(myObject.firstName[3].ss)

// async function fetchUserData() {
// try {
//     const response = await fetch("https://dummyjson.com/users");
//     const json = await response.json();
//     console.log(typeof(json));
// } catch (error) {
//     console.error('Error:', error);
// }
// }
// fetchUserData();
// function processUserData(){
    
// }


//------------------------------------

// async function fetchData() {
// try {
//     const response = await fetch('https://api.example.com/data');
//     // Check if the request was successful (status code 200-299)
//     if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     // Parse the response as JSON
//     const data = await response.json();
//     console.log('Data received:', data);
// } catch (error) {
//     console.error('Error:', error);
// }
// }

// fetchData();


//------------------------------------
// async function getUser(){
//     let response = await fetch("https://dummyjson.com/users")
//     let json = await response.json()
//     // console.log(json)
//     return json
// }
// async function getData(){ //calling
//     await getUser()
//     let response = await fetch("https://dummyjson.com/posts")
//     let json = response.json()
//     // console.log(json)
//     return json
// }

//------------------------------------

// await getUser()
// fetch("https://dummyjson.com/posts") // example
// .then(response => response.json())
// .then(json => {
//     console.log("the request is completed")
// })


// async function getUser(){
//         fetch("https://dummyjson.com/users")
//         .then(response => response.json())
//         .then(json => {
//             return "the request is completed"
//         })
//     }
// getUser()
// .then(()=>{
//     fetch("https://dummyjson.com/posts") // example
//     .then(response => response.json())
//     .then(json => {
//         return "the request is completed"
//     })
// })



// async -----------------------------------------

// async function getUser(){
//     let response = await fetch("https://dummyjson.com/users")
//     let json = await response.json()
//     console.log(json)
//     return json
// }

// or 

// async function getUser(){
//         fetch("https://dummyjson.com/users")
//         .then(response => response.json())
//         .then(json => {
//             return "the requst is completed"
//         })
//     }
// getUser()
// .then(()=>{
//     console.log("==>")
// })

//or

// function getUser(){
//     return new Promise((resolve, reject) => {
//         fetch("https://dummyjson.com/users")
//         .then(response => response.json())
//         .then(json => {
//             resolve("the requst is completed")
//         })
//     })
// }
// getUser()
// .then(()=>{
//     console.log("==>")
// })


// ---------------------------------------

// let p = new Promise (function(resolve, reject){
//     setTimeout(() => {
//         console.log("time = .")
//         resolve()
//     }, 1000);
// })
// p
// .then(function(){
//     console.log("nice")
// }).then(function(){
//     return new Promise( (resolve) => {
//         setTimeout(() => {
//             console.log("habtiiiiiiiii")
//             resolve() // calling the folowing promise
//         }, 1000);
//     })
// }).then(function(){
//     return new Promise( (resolve) => {
//         setTimeout(() => {
//             console.log("################")
//         }, 1000);
//     })
// })



// ---------------------------------------------

// let p = new Promise (function(resolve, reject){
//     setTimeout(() => {
//         console.log("time = .")
//         resolve()
//     }, 1000);
// })
// p
// .then(function(){
//     console.log("nice")
// }).then(function(){
//     return new Promise( (resolve) => {
//         setTimeout(() => {
//             console.log("habtiiiiiiiii")
//         }, 1000);
//     })
// })


// ---------------------------------------------

// let n_p =new Promise(function(resolve, reject){
//     a = 5
//     console.log("first ==> ") // 1
//     setTimeout(() => {
//         console.log("another 'resolve'") //5
//         resolve()
//     }, 1000);
//     if (a == 5){
//         resolve("right code") //4
//     }
//     else{
//         reject("there is a fault")
//     }
// })
// console.log("END") //2 
// n_p.then(function(msg){
//     console.log("great",msg) //4 
// }).catch(function(err){
//     console.log("error",err)
// })
// console.log("END ===") //3

// Destructring ...rest -------------------------------------------

// let arr = [100,20,30,50]

// const [f1, ...rest] = arr

// console.log(rest)

// Destructring objects-------------------------------------------

// let obj = {lastname: "habti", id:13}
// const {lastname, id} = obj;

// console.log(lastname)
// console.log(id)

// Destructring array------------------------------

// let arr = [12,5,100]

// const [n1, n2, n3] = arr
// console.log(n1)
// console.log(n2)
// console.log(n3)

// Reduce() -----------------------------------

// let arr = [10,20,30,40,50]
// //                                                initialize
// let na = arr.reduce((num_1, num_2)=> num_1 + num_2, 0)

// console.log(na)

// Or ---

// let na = arr.reduce((num_1, num_2)=> num_1 + num_2)
// console.log(na)

// Filter() -----------------------------------

// let arr = [2,5,6,7,3,8]
// let flt = arr.filter(function(num){
//     return num > 5
// }
// )

// console.log(flt)

// Or --------

// let arr = [2,5,6,7,3,8]
// let flt = arr.filter(num => num <5)

// console.log(flt)

// Map() -----------------------------------

// let arr = [2,3,5]
// let dbl = arr.map(x => x * 2)

// console.log(dbl)

//-------------------------------------------

// let fct = (num1, num2) => {
//     if (num1 == 2) return num1
//     return num1 * num2
// }
// console.log(fct(3,3))

//-------------------------------------------

// let txt = (fullname)=>{return fullname}

// console.log(txt("mohammed habti"))
//-------------------------------------------

// (one_p) => { return one_p}

// var g = ()=>{return "habti"}

// console.log(g())

//-------------------------------------------

// tst = num =>  {return num}
// or
// tst = num => num
// or
// function tst(num){
//     return num
// }

// console.log(tst(10))
