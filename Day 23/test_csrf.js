const express = require("express")
const cookiePrsr = require("cookie-parser")
const csurf = require("csurf")

const app = express()

app.use(express.urlencoded({extended:false}));

app.use(cookiePrsr());

const csrfProtect = csurf({cookie:true})

app.get("/", csrfProtect , (req, res)=>{
	res.cookie("csrf-token",req.csrfToken())
	    res.send(`
        <form action="/sub" method="POST">
			<input type="hidden" name="_csrf" value="${req.csrfToken()}">
            <input type="text" name="data"  placeholder="Enter data">
            <button type="submit">Submit</button>
        </form>
    `);
})

app.post('/sub', csrfProtect, (req, res) => {
    res.send('Data submitted successfully!');
});

app.listen(3000, ()=>{console.log("running on 3000")})

//------------------------------------------------------------------------------------------------
// const express = require('express');
// const cookieParser = require('cookie-parser');
// const csurf = require('csurf');

// const app = express();

// Middleware setup
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// CSRF protection middleware setup
// const csrfProtection = csurf({ cookie: true });

//Route to render form with CSRF token
// app.get('/', csrfProtection, (req, res) => {
    // res.cookie('XSRF-TOKEN', req.csrfToken());
    // res.send(`
        // <form action="/submit" method="POST">
            // <input type="hidden" name="_csrf" value="${req.csrfToken()}">
            // <input type="text" name="data" placeholder="Enter data">
            // <button type="submit">Submit</button>
        // </form>
    // `);
	// console.log(req.csrfToken())
// });

//Route to handle form submission
// app.post('/submit', csrfProtection, (req, res) => {
    // res.send('Data submitted successfully!');
// });

// app.listen(3000, () => {
    // console.log('Server is running on port 3000');
// });