const mongoose = require('mongoose');
const products = require("./products.json")
const creat = require("../controllers/postController")
const pSchema = mongoose.model("listProductModel", {
    name: String,
    price: Number,
    description: String,
    inStock: {
      type:Boolean,
      default:true
    }
  })
creat()
module.exports = pSchema

//   async function creat(){
//     const prd = await dbp.create(products)
//     await prd.save()
//     console.log(prd)
//   }

// creat()
// console.log(products)
