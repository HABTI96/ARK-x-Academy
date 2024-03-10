const pSchema = require("../models/post")

async function creat(){
    const product = await pSchema.create({name:"simo",price:1})
    await product.save()
    console.log(product)
}
// creat()
module.exports = creat