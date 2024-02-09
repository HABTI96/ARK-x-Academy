const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function prompt(prmt){
    return new Promise((resolve)=>{
        rl.question(prmt,(type_dt)=>{resolve(type_dt)})
    })
}
let arr = []
async function Get_data(){
    let obj = {}
    //-----------------
        const name_user = await prompt("enter your name : ")
        const phone_num = await prompt("enter your phone number : ")
        Object.assign(obj,{Name:name_user})
        Object.assign(obj,{Phone:phone_num})
        arr.push(obj)
    //-----------------
    rl.question("type test : ", async(ansr)=>{
        if (ansr == "1"){
            await Get_data()
        }
        else if (ansr = "2"){
            for (let i = 0;i < arr.length;i++){
                console.log(`Name : ${arr[i].Name} , phone : ${arr[i].Phone}`)
            }
            rl.close()
        }
        else if(ansr == "3"){
            let index = -1;
            rl.question("Look for this name : ",(name)=>{
                for (let i = 0;i < arr.length;i++){
                    if (arr[i].Name == name){
                        index = i
                    }
                    // console.log(arr[i])
                }
            if (index >= 0){
                console.log(`Name : ${arr[index].Name} , phone : ${arr[index].Phone}`)
            }
            else{
                console.log("this name does not exist")
            }
                rl.close()
            })
        }
        else if(ansr =="4"){
            rl.close()
        }
    })
}


Get_data()
