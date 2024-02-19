const express = require("express")
const app = express()
app.use(express.json());

const prdct_rt = require("./product_rout/prd_rout") //require the router
app.use("/", prdct_rt)

app.listen(3000,()=>{
    console.log("running on 3000 ")
})
