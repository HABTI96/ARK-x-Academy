const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json())

app.post('/login', (req, res) => {
  const user = { username: "mohammed habti" }; // Example user object
  // const token = jwt.sign({ user: user.username }, 'secret_key', { expiresIn: '2h' });
  const token = jwt.sign({ user: user.username }, 'secret_key');
  res.json({ token });
});

function ensureToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(404);
  }
}

app.get('/protected', ensureToken, (req, res) => {
  jwt.verify(req.token, 'secret_key', (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({data});
    }
  });
});

app.get("/", (req, res)=>{
	if (req.token) res.send("token is prsnt")
		else res.send("not found")
})

app.listen(3000, () => console.log('Server running on port 3000'));