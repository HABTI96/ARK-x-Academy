const express  = require("express")
const app = express()

app.use(express.urlencoded({extended:false}))
app.get("/", (req, res)=>{
	res.send(`<h1>mohammed habti</h1>`)
})

const users = []
app.get("/login", (req, res)=>{
	res.send(`
	<h1> REGISTER </h1>
		<form action = "/login" method="POST">
		<div>	
		<label>email</label>
		<input type = "email" id = "email" name = "email">
	</div>	
	<div>	
		<label>Password</label>
		<input type = "Password" id = "Password" name = "Password">
	</div>
	<button type = "submit">login</button>
		</form>
		<a href = "/register">Register</a>
	`)
})
app.post("/login", (req, res)=>{
	
})
app.get("/register", (req, res)=>{
	res.send(`
	<h1> REGISTER </h1>
		<form action = "/register" method="POST">
	<div>	
		<label>Name</label>
		<input type = "text" id = "name" name = "name">
	</div>
		<div>	
		<label>email</label>
		<input type = "email" id = "email" name = "email">
	</div>	
	<div>	
		<label>Password</label>
		<input type = "password" id = "password" name = "password">
	</div>
	<button type = "submit">Register</button>
		</form>
		<a href = "/login">login</a>
	`)
})
app.post("/register", (req, res)=>{
	users.push({
		name:req.body.name,
		email:req.body.email,
		password:req.body.password
	})
	// console.log(req.body.name)
	console.log(users)
	res.redirect("/login")
	
})
app.listen(3000, ()=>{
	console.log("server is running")
})
