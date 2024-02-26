//--------------------------------------------------------------------

const express = require("express")
const session = require("express-session")

const app = express()

app.use(
	session({
		secret: "key that will sign cookie",
		resave: false,
		saveUninitialized:true,
	}))

app.get("/sets", (req, res)=>{
	req.session.firstname = "mohammed"
	req.session.lastname = "habti"
	console.log(req.session)
	console.log("ID :", req.session.id) // it will be shown in 'connect.sid'
	res.send("session var SET")
})

app.get("/gets", (req, res)=>{
	const firstname = req.session.firstname
	const lastname = req.session.lastname
	res.send(`the uesrname ${firstname} - ${lastname}`)
})

app.listen(3000, ()=>{
	console.log("running on port 3000")
})

//--------------------------------------------------------------------
// connect.sid is the session ID stored on the client side in a cookie
//--------------------------------------------------------------------

//--------------------------------------------------------------------

// const express = require("express")
// const session = require("express-session")
// const app = express()

// app.use(
	// session({
		// secret: "key that will sign cookie",
		// resave: false,
		// saveUninitialized:false,
		// maxAge:13000
	// }))

// app.get("/", (req, res)=>{
	// req.session.isAuth = true
	// req.session.username = 'mohammed'
	// console.log(req.session.id) // it will display the ID (notice that the ID is a part of session connect.sid)
	// console.log(req.session) //display session
	// res.send("it works")
	// console.log(Object.keys(req.session).length)// to display the length
// })

// app.get("/get", (req, res)=>{
	// const user = req.session.username
	// res.send(user)
// })

// app.listen(3000, ()=>{
	// console.log("running on port 3000")
// })


//--------------------------------------------------------------------
//--------------------------------------------------------------------
// const express = require("express")
// const session = require("express-session")
// const app = express()

// app.use(
	// session({
		// secret: "key that will sign cookie",
		// resave: false,
		// saveUninitialized:false
	// }))

// app.get("/", (req, res)=>{
	// req.session.isAuth = true
	// console.log(req.session.id) // it will display the ID (notice that the ID is a part of session)
	// console.log(req.session)
	// res.send("it works")
// })

// app.get("/", (req, res)=>{
	// res.send("hello session")
// })

// app.listen(3000, ()=>{
	// console.log("running on port 3000")
// })