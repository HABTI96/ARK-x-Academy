const express = require("express")
const app = express()
const arr = [
    { id: 1, title: 'Result 1', description: 'Description of Result 1' },
    { id: 2, title: 'Result 2', description: 'Description of Result 2' },
];
// const arr = ["simo","habti"]
app.get('/search', (req, res) => {
    const query = req.query.query;
    // Simulated data retrieval (replace with actual data retrieval logic)
    // const results = searchInDatabase(query); // Assuming searchInDatabase is a function that searches the database based on the query
    const results = arr; // Assuming searchInDatabase is a function that searches the database based on the query
    res.json(arr)
    // Sending the results back to the client
    // res.json({ results }); // Assuming we want to send the results back as JSON
    // res.json(results); // Assuming we want to send the results back as JSON
});


app.listen(3000,()=>{
    console.log("the server is running on port 3000")
})