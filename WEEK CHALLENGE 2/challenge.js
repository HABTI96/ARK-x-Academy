const express = require('express');
const app = express();
const { body, validationResult } = require('express-validator');

let database = {};

app.post('/submit-form', 
body('username').isLength({ min: 5 }).trim().escape(), 
(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }
    let username = req.body.username;
    let email = req.body.email;
    database[email] = { email };
    database[username] = { username};
    res.send(`User ${username} registered with email ${email}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));
