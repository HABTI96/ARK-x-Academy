
//---------------------------------
//---------------------------------
//---------------------------------

//---------------------------------
// with post() we use app.use(ewpress.json()) if we wanna add something from body
//---------------------------------
// http://localhost:3000/products/search?minPrice=700&maxPrice=1000
//-----------------------------------------------

// app.get('/users/:id', (req, res) => { // will display everything after/users/....
//     const userId = req.params.id;
//     res.send(userId)
// });

//-----------------------------------------------

// const arr = ["simo","habti"]

// app.get("/users",(req,res)=>{
//     // res.send("home page",apps)
//     if (arr.length == 0){
//         res.send("no users found")
//     }
//     res.send(arr)
// })

//-----------------------------------------------

// app.get(/a/,(req,res)=> { // will match everyword has "a" like "/arr" "/ba" "/mga" ...
//     res.send("hello  habti")
// })

//-----------------------------------------------

// app.get("/hey(mohammed)?habti",(req,res)=>{ // we can use either '/heyhabti' or '/heymohammedhabti'
//     res.send("hello mohammed habti")
// })

//-----------------------------------------------
// app.get("/mr*habti",(req,res)=>{ // whatever you creat between mr  and habti it will wrok
//     res.send("home page")
// })
// ------------- IMPORTANT (nodemon) ---------------------
// go to package.json then to scripts
// then change "test": "echo \"Error: no test specified\" && exit 1"
// by "start":"nodemon namefile.js" // you can change "start" by "dev" but use "use run start"
// the last step is npm run start 
// ---------------------------------------------

//-----------------------------------------------
// const express = require('express');
// const app = express();

// app.get("/users", (req, res)=>{
//     res.send({data:"here is your data"})
// })
// app.post("/users", (req, res)=>{
//     res.send({data:"data created"})
// })

// app.put("/users", (req,res)=>{
//     res.send({data:"user updated"})
// })

// app.delete("/users",(req,res)=>{
//     res.send({data:"user deleted"})
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })