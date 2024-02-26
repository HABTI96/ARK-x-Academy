const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json())

const posts = [
	{
		username:"kyle",
		title:"post1"
	},
	{
		username:"simo",
		title:"post2"
	}
]
// app.get('/u', (req, res)=>{
	// res.json(req.user)
// })
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2ltbyIsImlhdCI6MTcwODg5NjY4N30.ydKjdIa9nPKzu8Hm8RHGadYA-6rGZarEtc2cwF1-pJc
app.get('/posts',authenticate,(req, res)=>{
	// res.json(req.user)
	res.json(posts.filter(pst => pst.username == req.user.name))
})

app.post('/login', (req, res)=>{
	const username = req.body.username
	const user = {name: username}
	const Token = jwt.sign(user, "my_scrt")
	res.json(Token)
})
//------------------------------------------------------------
function authenticate(req, res, next){
		const authHeader = req.headers['authorization']
			const token = authHeader && authHeader.split(" ")[1]
			if (token == null) return res.sendStatus(401)
			jwt.verify(token, "my_scrt", (err, data)=>{
				if (err) return res.sendSatus(403) 
				req.user = data
				console.log(data)
				next()
			})
}
//------------------------------------------------------------
app.listen(3000, ()=>{
	console.log("srvr")
})