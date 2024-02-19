const express =require("express")
const app = express()

app.use(express.json());

let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 15, name: 'DJI Mavic Air 2', price: 700 },
];

app.get("/products/search",(req, res)=>{
    const min = req.query.minPrice
    const max = req.query.maxPrice
    const u = products.filter(x=>x.price >= min && x.price <= max)
    res.send(u)
})
// methode 2
// app.get("/products/:id", (req, res)=>{
//     const p_id = req.params.id
//     const x = parseInt(p_id) - 1 
//     const find_p = products[x]
//     res.send(find_p)
// })
// methode 1
app.get ("/products/:id", (req, res)=>{
    const p_id = req.params.id
    let mp = products.filter(x => x.id == p_id)
    res.send(mp[0])
})
app.put("/products/:id",(req,res)=> {
    const url_id = req.params.id
    let ndx_id = parseInt(url_id) - 1
    const {name, price} = req.body
    products[ndx_id].name = name
    products[ndx_id].price = price
    res.send("it was updated")
})
app.post("/products",(req, res)=>{
    const g = req.body
    products.push(g)
    res.status(201).send("added")
})
app.get("/products", (req,res)=>{
    res.json(products)
})
app.delete("/products/:id",(req, res)=>{
    const url_id = req.params.id
    const ndx = parseInt(url_id) - 1
    products.splice(ndx, 1)
    res.send("it was deleted")
})
app.listen(3000,()=>{
    console.log("running on 3000 ")
})
