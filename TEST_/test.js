const express = require('express');
const session = require('express-session');

const app = express();

app.use(express.json())
// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'secret-key', // Change this to a random string
    resave: false,
    saveUninitialized: true
  })
);

// Mock user data (you should replace this with your own user authentication logic)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username == username && user.password == password);
  console.log(user)
  if (user) {
    // Store user data in session
    req.session.user = user;
    res.send('Logged in successfully!');
  } else {
    res.status(401).send('Invalid username or password');
  }
});

// Logout route
app.get('/logout', (req, res) => {
  // Destroy the session
  req.session.destroy(err => {
    if (err) {
      console.error('Error destroying session:', err);
      res.sendStatus(500);
    } else {
      res.send('Logged out successfully!');
    }
  });
});

// Protected route
app.get('/profile', (req, res) => {
  // Check if user is logged in
  if (req.session.user) {
    res.send(`Welcome ${req.session.user.username}!`);
  } else {
    res.status(401).send('You are not logged in!');
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
