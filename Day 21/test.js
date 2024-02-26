const express = require('express');
const csurf = require('csurf');
const bodyParser = require('body-parser'); // Import bodyParser middleware
const app = express();

// Enable CSRF protection middleware
app.use(csurf({ cookie: true }));

// Use bodyParser middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Update profile route
app.post('/profile', (req, res) => {
  // Validate CSRF token
  if (req.csrfToken() !== req.body._csrf) {
    return res.status(403).send('Invalid CSRF token');
  }
  // Process profile update
  // ...

  res.send('Profile updated successfully');
});

// Render form with CSRF token
app.get('/profile', (req, res) => {
  res.render('profile', { csrfToken: req.csrfToken() });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//----------------------------------------------------------------------------------------------------

// const express = require('express');
// const escapeHtml = require('escape-html');
// const app = express();

// app.get('/api', function(req, res){
  // res.send('<html><body><h1>' + escapeHtml(req.query.userInput) + '</h1></body></html>');
// });
// app.listen(3000, () => console.log('Server running on port 3000'));

// http://localhost:3000/api?userInput=mohammed

// -------------------------------------------------------------------------------------------------
// insecure
// const express = require('express');
// const app = express();

// app.get('/api', function(req, res){
  // Rendering user input directly, leading to XSS vulnerability
  // res.send('<html><body><h1>' + req.query.userInput + '</h1></body></html>');
// });

// app.listen(3000, () => console.log('Server running on port 3000'));

// http://localhost:3000/api?userInput=mohammed
// http://localhost:3000/api?userInput=<script>alert("show message")</script>

//---------------------------------------------------------------------------------------------------

// Secured Node.js and Express server with input validation and sanitization
// const express = require('express');
// const app = express();
// const { body, validationResult } = require('express-validator');
// app.use(express.json())
// Simulated database object
// let database = {};

// app.post('/submit-form', body('username').trim().escape(), (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
    // }
    // User input is validated and sanitized
    // let username = req.body.username;
    // let email = req.body.email;
    
    // Simulating saving data to a 'database'
    // database[email] = { email };
    // database[username] = { username};
    // res.send(`User ${username} registered with email ${email}`);
	// res.send(database[username]);
// });
// app.get("/users", (req, res)=>{
	// res.json(database)
// })

// app.listen(3000, () => console.log('Server running on port 3000'));

//-------------------------------------------------------------------------------------


// Node.js and Express server code demonstrating unsafe data handling for database interaction
// const express = require('express'); 
// const app = express();

// let database = {};

// Middleware to parse request body
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

// app.post('/register', (req, res) => {
  // User input is directly assigned without validation or sanitization
    // let username = req.body.username;
    // let email = req.body.email;

    // Simulating saving data to a 'database'
    // database[email] = { email: email };

    // res.send(`User ${username} registered with email ${email}`);
// });

// app.listen(3000, () => console.log('Server running on port 3000'));
