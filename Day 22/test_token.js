const express = require("express")
const jwt = require('jsonwebtoken');
const app = express()

app.use(express.json())

app.post("/login", (req, res)=>{
	const {username , id}= req.body
	const user = {username, id}
	jwt.sign({user}, "my_scrt", (err, token)=>{
		if (err) res.sendStatus(403)
		else {
			res.json({
				username,
				id,
				token
			})
		}
	})
})

function verTkn(req, res, next){
	const bearerHeader = req.headers["auth"]
	if (typeof bearerHeader !== "undefined"){
		const bearer = bearerHeader.split(" ")
		const token = bearer[1]
		req.token = token
		next()
	}
	else{
		res.sendStatus(403)
	}
}
app.get("/protect", verTkn,(req,  res)=>{
	jwt.verify(req.token, "my_scrt", (err, data)=>{
		if (err) res.send("forbdn!!!!")
			else {
				res.json({
					txt:"protected",
					data
				})
			}
	  })
})

app.listen(3000,()=>console.log("is running on port 3000"))

// ------------------------------------------------------------------------------
// code ___
// ------------------------------------------------------------------------------
// const express = require("express")
// const jwt = require('jsonwebtoken');
// const app = express()

// app.post("/login", (req, res)=>{
	// const user = {id:9, name: "simo"}
	// jwt.sign({user}, "my_scrt",(err, token)=>{
		// if (err) res.sendStatus(403)
		// else {
			// {
				// res.json({
				// id:9,
				// name: "simo",
				// token
				// })
			// }
		// }
	// })
// })

// function verTkn(req, res, next){
	// const bearerHeader = req.headers["authorization"]
	// if (typeof bearerHeader !== "undefined"){
		// const bearer = bearerHeader.split(" ")
		// const token = bearer[1]
		// req.token = token
		// next()
	// }
	// else{
		// res.sendStatus(403)
	// }
// }
// app.get("/protect", verTkn,(req,  res)=>{
	// jwt.verify(req.token, "my_scrt", (err, data)=>{
		// if (err) res.send("forbdn!!!!")
			// else {
				// res.json({
					// txt:"protected",
					// data
				// })

			// }
	// })

// })

// app.listen(3000,()=>console.log("is running on port 3000"))
// -----------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// app.post("/posts", verifyTkn,(req, res)=>{
	// jwt.verify(req.token, "my_secret" ,(err, data)=>{
		// if (err) res.sendStatus(403)
		// res.json({
			// msg:"post created",
			// data
		// })
	// })
// })

// function verify (req, res, next){
	// console.log(req.headers)
	// next()
// }
// app.post("/log",verify, (req, res)=>{})

// app.post("/login",(req, res)=>{
    // const user = {
		// id : 8,
		// name:"simo"
	// }
	// jwt.sign({user}, "my_secret", (err, token)=>{
		// res.json({
			// id : 8,
			// name:"simo",
			// token
		// })
	// })
// })

// function verifyTkn (req, res, next){
	// const bearerHeader =  req.headers["authorization"]
	// if (typeof bearerHeader !== 'undefined'){
		// const bearer = bearerHeader.split(" ")
		// const token = bearer[1]
		// req.token = token
		// next()
	// }
	// else{
		// res.sendStatus(404)
	// }
// }
// app.listen(3000,()=>console.log("is running on port 3000"))

//--------------------------------------------------------------

// const express = require("express")
// const jwt = require('jsonwebtoken');
// const app = express()

// app.post("/login",(req, res)=>{
    // const user = {id:9}		  
    // const token = jwt.sign({user}, "my_secret_key")
    // res.json({token: token})
// })

// app.get("/pro",ensuretkn,(req, res)=>{
	// jwt.verify(req.token, "my_secret_key", (err, data)=>{
		// if (err){
			// res.sendStatus(403);
		// }
		// else{
			// res.json({
				// text:"from fnct",
				// data:data
			// })
		// }
	// })
// })

// function ensuretkn(req, res, next){	
	// const bhder = req.headers["auth"]
	// if (typeof bhder !== 'undefined'){
	// const br = bhder.split(" ")
	// req.token = br[1]
	// next()
	// }
	// else{
		// res.sendStatus(403)
	// }
// }
// app.listen(3000,()=>console.log("is running on port 3000"))
