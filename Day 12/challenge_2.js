const { read } = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let arr=[]
function add(){
    let obj = {}
    rl.question("Enter a name : ", (name)=>{
        rl.question("add your phone : ",(phone)=>{
            arr.push(obj)
        })
    })

}
add()

console.log(arr)