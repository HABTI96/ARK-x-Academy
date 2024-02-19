const express = require("express")
const products = require("./new_out.json")
const app = express()
const fs = require("fs")

app.get("/products",(req, res)=>{
    res.send(products)
})
app.use(express.json())

function save_data(){
    const json_str = JSON.stringify(products, null, 2);
    fs.writeFileSync('new_out.json', json_str);
}
app.get("/products/search",(req, res)=>{
    const min = req.query.minPrice
    const max = req.query.maxPrice
    const find_prd = products.filter(x=>x.price >= min && x.price <= max)
    res.send(find_prd)
})
app.get("/products/:id", (req, res)=>{
    const url_id = req.params.id
    const ndx = parseInt(url_id) - 1
    if (ndx > products.length) res.status(404).send("not found")
    res.send(products[ndx])
})
app.post("/products",(req, res)=>{
    const new_obj = req.body
    products.push(new_obj)
    res.send("created!!")
    save_data()
})

app.put("/products/:id",(req, res)=>{
    const id_url = req.params.id
    const ndx = parseInt(id_url) - 1
    const {name, price} = req.body
    products[ndx].name = name
    products[ndx].price = price
    res.send("updated")
    save_data()
})

// app.delete("")
app.listen(3000,()=>{
    console.log("running on port 3000")
})
