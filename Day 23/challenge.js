const express = require("express")
const cookieParser = require("cookie-parser")
const csurf = require("csurf")
const csrfProtection = csurf({cookie : {httpOnly:true}})
const app = express()

app.use(express.urlencoded({extended : false}))

app.use(cookieParser())

app.get("/", csrfProtection, (req, res)=>{
	 res.cookie("simpletest", "qwerty", { httpOnly: true })
     res.send(`<form action="/transfer-money" method="POST">
    <input type="text" name="amount" placeholder="amount">
    <input type="text" name="to" placeholder="Send to...">
    <input type="hidden" name="_csrf" value="${req.csrfToken()}">
    <button>Submit</button>
    </form>`)

})

app.post("/transfer-money", csrfProtection, (req, res)=>{
	if (req.cookies.simpletest == "qwerty") res.send("success")
	else res.send("failed")
})

app.listen(3000)


//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------
// req.csrfToken() // creat csrf token 
//--------------------------------------------------------------------------------------------

// NB:  {httpOnly:true, secure: true, maxAge:12000}  you can add a lot of properties
//----------------------------ADD or UPDATE and display Cookies--------------------------------------

// const express = require("express")
// const cookieParser = require("cookie-parser")
// const app = express()

// app.use(cookieParser())

// app.get("/", (req, res)=>{
	// console.log(req.cookies) // it will display cookies from the browser (f12 : Application=>Cookies)
	// // this is gonna make another cookie or update exist cookie
	// res.cookie("firstName", "mohammed ", {httpOnly:true}) // httpOnly  means it won't be showed in the console in the browser when (document.cookie)
	// res.send("hello world")
// })

// app.listen(3000)


//--------------------------------------------------------------------------------------------
//------------------------------ Display the cookies from the browser----------------------------------------

// const express = require("express")
// const cookieParser = require("cookie-parser")
// const app = express()

// app.use(cookieParser())

// app.get("/", (req, res)=>{      //    req.cookies bring cookies from browser
	// console.log(req.cookies) // it will display cookies from the browser (f12 : Application=>Cookies)
	// console.log(Object.keys(req.cookies)) // it will display only the keys
	// // console.log(Object.keys(req.cookies)[0]) // it will display the first key
	// res.send("hello world")
// })

// app.listen(3000)

//--------------------------------------------------------------------------------------------



// const express = require("express")
// const cookieParser = require("cookie-parser")
// const app = express()

// app.use(cookieParser())

// app.get("/", (req, res)=>{
    // console.log(req.cookies) // it will display cookies from the browser (f12 : Application=>Cookies)
	// res.send("hello world")
// })
