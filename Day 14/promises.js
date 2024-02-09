async function sub(a,b){
    return new Promise((resolve)=>{
        resolve(a-b)
    })
}
async function get_op(){//it respects the order (excut line by line)
    const result = await sub(8,4)
    console.log("before sub")
    console.log(result)
    console.log("after sub")
}
get_op()


//-----------async and await--------------

// async function sub(a,b){
//     return new Promise((resolve)=>{
//         resolve(a-b)
//     })
// }
// async function get_op(){//it respects the order (excut line by line)
//     const result = await sub(8,4)
//     console.log("before sub")
//     console.log(result)
//     console.log("after sub")
// }
// get_op()

//-------------Promise (then and catch)--------------

// console.log("before the sum")
// function add(a,b){
//     return  new Promise((resolve)=>{
//         resolve(a+b)
//     })
// }
// add(5, 10).then(sum=>{
//     console.log("the sum is ",sum)
// })

// console.log("after the sum")

//-----------Promise (then and catch)------------

// function txt(a,b){
    //     return  new Promise((resolve)=>{
        //         resolve(a+b)
//     })
// }
// txt(5, 20).then(sum=>{
    //     console.log("the sum is ",sum)
    // })

//-----------Promise (then and catch)------------

// function azerty(){
//     return new Promise((resolve)=>{
//     resolve("it works!")
//     })
// }

// console.log("before")
// azerty().then((usr)=>{
//     console.log(usr)
// }).catch(err=>{
//     console.log(err)
// })
// console.log("after")