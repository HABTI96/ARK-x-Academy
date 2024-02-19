

//---------------------------------

// app.use((req, res, next)=>{
//     console.log("hostname test=>", req.hostname)
//     console.log("method test=>", req.method)
//     console.log("path (url) test=>", req.url)
//     next()
// })

// --------------------------------
// app.use((req, res, next) => {
//     console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//     next();
// });

//--------------short way --------------
// app.use((req, res, next)=>{
//     console.log("short way")
//     next()
// })

// another way------------------------
// const mdl = (req, res, next)=>{
//     console.log("==>>")
//     next()
// }
// const sec_mdl = (req, res, next)=>{
//     console.log("logged")
//     next()
// }
// app.use(mdl)
//
// we can also put it in app.get()
// app.get("/", sec_mdl, (req, res)=>{
//     res.send("hello")
// })

//-----------------------------

// const mdl = (req, res, next)=>{
//     console.log("==>>")
//     next()
// }
// const sec_mdl =(req, res, next)=>{
//     console.log("logged")
//     next()
// }
// app.use(mdl)
// app.use(sec_mdl)

//---------------------------

// const middelwr = (req, res, next)=>{ // everytime i run it will raised console.log
//     console.log("this is an admin")
//     next() 
// }
// app.use(middelwr)

//-------------------------------
// const express = require("express")

// const app = express()

// const middelwr = (req, res, next)=>{ //
//     console.log("this is an admin")
//     next() 
// }
// app.use(middelwr)

// app.get("/",(req, res)=>{
//     res.send("hello")
// })

// app.listen(3000, ()=>{
//     console.log("running on port")
// })

