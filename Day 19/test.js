const express = require('express');
const app = express()
const user = require("./userRout/userRouter_cnt") //require the router
app.use("/",user)
app.listen(3000, () => {
    console.log('running on port 3000');
});