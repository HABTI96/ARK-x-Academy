const express = require("express")
const jwt = require('jsonwebtoken');
const app = express()
const router = require("./routes/postRoutes")

// app.use((req, res,next)=>{ // the log middelware
    // console.log(`methode : ${req.method}`)
    // console.log(`path : ${req.path}`)
    // next()
// })
app.use(express.json())  // for update and add data
// app.use("/api", router) // i made the 'api' as the router
app.use("/", router) // i made the 'api' as the router

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('something went wrong!')
})

app.listen(3000, ()=>{
    console.log("running on 3000")
})






// app.post('/login', (req, res) => {
  // const user = { username: "mohammed habti" }; // Example user object
  // const token = jwt.sign({ user: user.username }, 'secret_key');
  // res.json({ token });
// });


// function ensureToken(req, res, next) {
  // const bearerHeader = req.headers['authorization'];
  // if (typeof bearerHeader !== 'undefined') {const bearerToken = bearerHeader.split(' ')[1];
    // req.token = bearerToken;
    // next();
  // } else {
    // res.sendStatus(404);
  // }
// }

// app.get('/protected', ensureToken, (req, res) => {
  // jwt.verify(req.token, 'secret_key', (err, data) => {
    // if (err) {
      // res.sendStatus(403);
    // } else {
      // res.json({data});
    // }
  // });
// });
