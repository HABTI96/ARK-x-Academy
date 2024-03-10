const mongoose = require('mongoose')

mongoose
.connect("mongodb://localhost:27017/mydb")
.then(()=>console.log("connected to database"))
.catch(err=>console.log("Error:",err))

const userSchema = new mongoose.Schema({
    name:String,
    email:{type:String, lowercase: true},
    age:Number,
    timeCreated:{
        type: Date,
        default:new Date()
    }
}) 

const DataUser = mongoose.model("DAY27DB",userSchema)
async function run(){
    const usr = await DataUser.create({
        name:"fin ark",
        email:"simo@arkx.net",
        age:33,
    })
    console.log(usr)
    usr.save()
}
// run()
//find all of users
async function findUsers(){
    try{
        const usr = await DataUser.find()
        console.log(usr)
    }
    catch (err){
        console.log(err.message)
    }
}
findUsers()
//find one user
// async function findOneUser(){
//     try {
//         const usr = await DataUser.findOne({name:"Mike Ross"})
//         console.log(usr)
//     }
//     catch(err){
//         console.log(err.message)
//     }
// }
// findOneUser()
//update
// async function updateUser(){
//         const usr = await DataUser.updateOne({name:"Mike "},{$set:{email:"mike20@arkx.com"}})
//         if (usr.matchedCount == 0) return console.log("not found")
//         console.log(usr)
// }
// updateUser()
// const date = new Date()
// console.log(date.getDate())
// const minut = date.getMinutes()
// const day = date.getDay()

async function deleteUser(){
    const usr = await DataUser.delete({})
    console.log(usr)
}
// deleteUser()