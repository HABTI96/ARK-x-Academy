const mongoose = require('mongoose');

mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));

// 1) first way
  const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, lowercase: true},
    age: {
        type:Number,
        min:1,
        max:100,
        validate:{
            validator: v=>v%2==0,
            message:props=>`${props.value} is not an even number`
        }
    },
    createdAt: {type:Date ,default:new Date()},
    updatedAt: Date,
    hobbies:[]
});

// createdAt: {type:Date ,default:new Date()}
//default:()=>Date.now()

// 2)- you can put the userSchema code instead of use it separeted
// 3)- you can put only this code: 
//     const User = mongoose.model('User')
const User = mongoose.model('User', userSchema);//create collection or use exisr collection

async function run (){
    try{
        // const usr = await User.findOneAndDelete({_id:"65ddefd8aa9a1731fefeb9a8"})
        const usr = await User.findById("65ddc74da8e20473a0da0c17")
        console.log(usr)
    }
    catch(err){
        console.log(err.message)
    }
}
run()


// User.findOneAndUpdate(
// { email: "admin@arkx.group" },
// { $set: { email: "user@arkx.group", age: 20 } }
// )
// .then((user) => {
//     if (user) console.log("User updated successfully: ", user);
//     else console.log("User not found");
// })
// .catch((error) => console.log("Error fetching users: ", error));




//---------------------------

// const User = mongoose.model('User', userSchema);

// async function run (){
//     try{
//         const usr = await User.create({
//                 name:"habti",
//                 email:"TST@gmail.com",
//                 hobbies:["football", "chess"],
//                 age:26,

//             })  
//         usr.name = "mohammed habti"
//         await usr.save()
//         console.log(usr)
//     }
//     catch(err){
//         console.log(err.message)
//     }
// }

//-------------------------
// async function run (){
//     const usr = await User.create(
//         {
//             name:"habti",
//             email:"tst@gmail.com",
//             hobbies:["football", "chess"],
//             age:27
//         }
//     )
//     usr.name = "mohammed habti"
//     await usr.save()
//     console.log(usr)
// }
// run()
//-------------------------
// async function run (){
//     const usr = await User.create({name:"habti",email:"tst@gmail.com"})
//     usr.name = "mohammed habti"
//     await usr.save()
//     console.log(usr)
// }
// run()
//-------------------------
// const userSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     email: {type: String, required: true, unique: true},
//     age: {type: Number}
// });

// const User = mongoose.model('User', userSchema);

// async function run (){
//     const usr = await User.create({name:"habti",email:"tst@gmail.com"})
//     await usr.save()
//     console.log(usr)
// }
// run()
//-------------------------
// const userSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     email: {type: String, required: true, unique: true},
//     age: {type: Number}
// });
// const User = mongoose.model('User', userSchema);
// first way  
//   const new_user = new User({  // another way to creat const user = await User.create({data})
//     name: "Arkadian",
//     email: "admin@arkx.group",
//     age: 25,
//   });
// new_user
// .save()
// .then((user) => console.log("User created succesfully: ", user))
// .catch((error) => console.log("Error creating user: ", error));

//-------------------------
// const userSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     email: {type: String, required: true, unique: true},
//     age: {type: Number}
// });
// const User = mongoose.model('User', userSchema)
// another way using async/await
// async function run (){
//     const new_user = new User({
//         name: "Arkadian",
//         email: "admin@arkx.group",
//         age: 25,
//       }); 
//     await new_user.save()
//     console.log(new_user)
// }
// run()

