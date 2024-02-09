const http = require("http")
const srv = http.createServer((req,res)=>{
    if (req.url ===  '/users'){
        res.write("im from the part users")
        res.end()
    }
    else if (req.url === '/hello'){
        res.write("hello world")
        res.end()
    }
    else{
        res.write("not found")
        res.end()
    }
})

srv.listen(3000)
console.log("listen on port 3000")


//--------------------------------

// const srv = http.createServer((req,res)=>{
//     if (req.url ===  '/users'){
//         res.write("im from the part users")
//         res.end()
//     }

//     else if (req.url === '/hello'){
//         res.write("hello world")
//         res.end()
//     }
// })

// srv.listen(3000)
// console.log("listen on port 3000")

//--------------------------------

// const http = require('http')
// const server = http.createServer((req, res)=>{
//     if (req.url === '/'){
//         res.write("hello world")
//         res.end()
//     }
// })
// server.listen(3000)
// console.log("listing on port 3000")



//-------------- B --------------------

// const http = require("http")
// const server = http.createServer((req,res)=>{
//     res.write("give it a shot ")
//     res.end()
// })
// server.listen(3000)
// console.log("listining on port 3000")

//-------------- A --------------------

// const http = require('http')
// const server = http.createServer((req, res)=>{
//     res.write("hello there")
//     res.end()
// })
// server.listen(3000)
// console.log("listing on port 3000")

//-------------------
// const srv = http.createServer((req,res)=>{
//     res.write("hello")
//     res.end()
// })

// srv.listen(3000)
// console.log("listen on port 3000")
