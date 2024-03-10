const mongoose = require('mongoose');

mongoose
  .connect("mongodb://localhost:27017/pvrtest")
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));  

const Product = mongoose.model('products',{
    name:String,
    price:Number
})

async function create(){
    const usr = await Product.create({ name: "OPPO 9", price: 400 });
    await usr.save()
    console.log(usr)
}
// create()

async function Delete(){
    // await Product.findOneAndDelete({_id:"65df130388045cd0bb6e5ddb"})
    await Product.deleteOne({_id:"65df13f577c25dad092cadda"})
}
// Delete()

async function update(){
    await Product.updateOne({_id:"65df127c953baadb3a7ba9ee"},{$set:{name:"OPPO 5"}})
}
// update()

async function run(){
    // const usr = await Product.find({price:{$lt:350}}) // look for price that less than 350
    
    // const usr = await Product.find({
    //     $or:[{price:410},{price:350}] // it will display only the products have those 2 prices
    // })

    // const usr = await Product.find({
    //     $and:[{name:"samsung"},{price:410}] //it will display if the object contains those 2 elements
    // })

    // const usr = await Product.find({price:{$lt:560,$gt:400}}) // it will give a field between 400 and 560 

    // const usr = Product.find()
    // .sort({ price: 1 })
    // .skip(2)
    // .then((users) => {
    //     console.log(users);
    // });//find and sort price ascending if we put -1 it will be sorted descending  

    // Product.find()
    // .limit(2) 
    // .then((users) => {//find only 2 first element
    //     console.log(users);
    // });

    // Product.aggregate([
    //     {
    //       $group: {
    //         _id: "$age",
    //         count: { $sum: 1 },
    //       },
    //     },
    //   ]).then((users) => {
    //     console.log(users);
    //   });

    // Product.aggregate([
    //     {
    //       $group: {// we put the value of 'price' in '_id'
    //         _id: "$price",
    //         count: { $sum: 1 },//count of users for each group
    //       },
    //     },
    //   ]).then((users) => {
    //     console.log(users);
    //   });

    // Product.aggregate([
    //     {
    //       $group: {
    //         _id: "",
    //         averageAge: { $avg: "$price" }//will calc the average of all products
    //       }
    //     }
    //   ]).then((user) => {
    //     console.log(user);
    //   });
    
    // console.log(usr)
}


run()