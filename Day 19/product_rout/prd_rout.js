const express =require("express")
const router = express.Router()
const {get_product, get_product_id, post_product,put_product} = require("../product_cnt/product_cnt_file")

router.get("/products", get_product)
router.get("/products/:id", get_product_id)
router.put("/products/:id", put_product)
router.post("/products", post_product)

module.exports = router