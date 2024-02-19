const express = require("express")
const router = express.Router()
const {get_user, post_user} = require("../controler/usercontroller")

router.get("/user", get_user)  
router.post("/user", post_user)

module.exports = router