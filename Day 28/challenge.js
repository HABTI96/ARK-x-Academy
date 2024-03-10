const mongoose = require('mongoose');
const productsList = require('./products.json')

mongoose
  .connect("mongodb://localhost:27017/ChallengeDB")
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));

//----------------------------------------------------------------------------
    const ProductModel = mongoose.model('bigProductsList',{
        name:{
            type:String,
            required:true
        },
    price:{
        type:Number,
        required:true
    },
    description:String,
    inStock:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})

async function run(){
    const usr = await ProductModel.create({name:"azer", price:465})
    // const usr = await ProductModel.create(productsList)
    await usr.save()
    console.log(usr)
}
run()

async function delet(){
    await ProductModel.deleteOne({_id:"65df428b3843dc78080c6deb"})
}
// delet()
//----------------------------
// ProductModel.find()
// .sort({price:-1})
// .then((prdct)=>{console.log(prdct)})

async function sortDescend(){
    const sorted = await ProductModel.find().sort({price:-1})
    console.log(sorted)
}
// sortDescend()

//----------------------------
// ProductModel.find()
//   .limit(5)
//   .then((users) => {
//     console.log(users);
//   });
//----------------------------
async function paginationLimit(){
    const pgn = await ProductModel.find().limit(5)
    console.log(pgn)
}
// paginationLimit()

//----------------------------
//----------------------------
// const pageSize = 2;
// const pageNumber = 3;
// ProductModel.find()
// .skip((pageNumber - 1) * pageSize)
// .limit(pageSize)
//   .then((users) => {
//     console.log(users);
//   });
//----------------------------
//----------------------------

async function aggregate(){
    const agg = await ProductModel.aggregate([{
        $group:{
            _id:"$inStock",
            count:{$sum:1}
        }
    }])
    console.log("products in stock:",agg[0].count)
    // console.log("",agg[1].count)
}
// aggregate()
//-------------------------------------
async function average(){
    const avr = await ProductModel.aggregate([{
        $group:{
            _id:"",
            averagePrice : {$avg:"$price"}
        }
    }])
    console.log("Average Price:",avr[0].averagePrice)
}
// average()
async function sortName(){
    const srt = await ProductModel.find().sort({name:1})
    console.log(srt)
}
// sortName()
