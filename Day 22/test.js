const jwt = require('jsonwebtoken');
// Secret key for signing and verifying tokens
const secretKey = 'your_secret_key';

// User object (typically fetched from a database)
const user = {
    id: 1,
    username: 'example_user',
    role: 'admin'
};

// Function to generate a JWT token
function generateToken(user) {
    return jwt.sign(user, secretKey, { expiresIn: '1h' });
}

// Function to verify a JWT token
function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (error) {
        // Token verification failed
        return null;
    }
}

// Example usage
const token = generateToken(user);
console.log('Generated JWT token:', token);

// Simulate verifying the token
const decodedToken = verifyToken(token);
if (decodedToken) {
    console.log('Decoded token:', decodedToken);
} else {
    console.log('Token verification failed.');
}

//-------------------------------------------------------------------------------------

// const express = require('express');
// const jwt = require('jsonwebtoken');
// const app = express();

// app.post('/login', (req, res) => {// Validate user credentials (omitted for brevity)
  // const user = { id: 123 }; // Example user object
  // const token = jwt.sign({ user: user.id }, 'secret_key', { expiresIn: '2h' });

  // res.json({ token });
// });

// function ensureToken(req, res, next) {
  // const bearerHeader = req.headers['authorization'];
  // if (typeof bearerHeader !== 'undefined') {
    // const bearerToken = bearerHeader.split(' ')[1];
    // req.token = bearerToken;
    // next();
  // } else {
    // res.sendStatus(403);
  // }
// }

// app.get('/protected', ensureToken, (req, res) => {
  // jwt.verify(req.token, 'secret_key', (err, data) => {
    // if (err) {
      // res.sendStatus(403);
    // } else {
      // res.json({ data });
    // }
  // });
// });

// app.listen(3000, () => console.log('Server running on port 3000'));
//--------------------------------------------------------
// const express = require('express');
// const app = express();

// app.use(express.json());

// const users = [
  // { username: 'alice', password: '123' },
  // { username: 'bob', password: '111' },
// ];

// app.post("/login", (req, res)=>{
	// const {name, password} = req.body
	// const user = users.find(u=>u.username == name && u.password == password)
	// if (user) res.send("success")
	// else res.send("failed")
// })

// app.listen(3000, () => {
  // console.log('Server is running on port 3000');
// });
// -------------------------------------------------------------------------------------------------
// const express = require('express');
// const app = express();

// app.use(express.json());

// const users = [
  // { username: 'alice', password: 'secret_password' },
  // { username: 'bob', password: 'password123' },
// ];

// app.post('/login', (req, res) => {
  // const { username, password } = req.body;
  // const user = users.find(u=>u.username == username && u.password == password)
  
  // if (user) res.send("successfully")
  // else res.send("not found")
// });

// app.listen(3000, () => {
  // console.log('Server is running on port 3000');
// });