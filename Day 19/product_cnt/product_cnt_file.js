let products = [
    { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
    { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
    { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
    { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
    { id: 15, name: 'DJI Mavic Air 2', price: 700 },
];

const get_product = (req, res)=>{
    res.send(products)
}

const get_product_id = (req, res)=>{
    const p_id = req.params.id
    let mp = products.filter(x => x.id == p_id)
    res.send(mp[0])
}
const post_product = (req, res)=>{
    const g = req.body
    products.push(g)
    res.status(201).send("added")
}

const put_product = (req, res)=>{
    const url_id = req.params.id
    let ndx_id = parseInt(url_id) - 1
    const {name, price} = req.body
    products[ndx_id].name = name
    products[ndx_id].price = price
    res.send("it was updated")
}

module.exports = {get_product,get_product_id, post_product,put_product}