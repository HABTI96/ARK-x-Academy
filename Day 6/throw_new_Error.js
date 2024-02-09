function divide (a, b) {
    if (b === 0) {
        throw new Error('Division by 0 is forbidden');
    }
    return a / b;
}

try {
    console.log("begin")
    console.log(divide(4,0))   
}
catch (error){
    console.log("there is Error!!!", error.message)
}
finally{
    console.log("end")
}


// function fullname(str){
//     if (str != "habti"){
//         throw new Error("it is not the right name")
//     }

//     console.log(str)
// }
// fullname("habtii")