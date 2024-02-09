
// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const parsedObject = JSON.parse(jsonString); // from js_str to js_object
// console.log(parsedObject);


// 2- Error handling using 'stack' in catch----------------------------------


// function divide (a, b) {
//     if (b === 0) {
//         throw new Error('Division by 0 is forbidden');
//     }
//     return a / b;
// }

// try {
//     console.log("begin")
//     console.log(divide(4,0))   
// }
// catch (error){
//     console.log("there is Error!!!", error.stack) //show the whole Error and throw new Error msg
// }


// 1- Error handling using 'message' in catch----------------------------------


// function divide (a, b) {
//     if (b === 0) {
//         throw new Error('Division by 0 is forbidden');
//     }
//     return a / b;
// }

// try {
//     console.log("begin")
//     console.log(divide(4,0))   
// }
// catch (error){
//     console.log("there is Error!!!", error.message) //show only the value of throw new Error
// }
// finally{
//     console.log("end")
// }