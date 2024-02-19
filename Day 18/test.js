const express = require("express")
const fs = require("fs")
const obj = require("./new_obj.json")
const app = express()
function save_data(){
    const json_str = JSON.stringify(obj, null, 2);
    fs.writeFileSync('new_obj.json', json_str);
}
app.use((req, res, next) => {
    const time = new Date().toISOString()
    const method = req.method
    const url = req.url
    console.log(`time is ${time} \nmethod ${method} \npath${url}`)
    obj.push({"time":time,"method":method,"url":url})
    save_data()
    next();
});

app.use((req, res, next)=>{
    const time = new Date().toISOString()
    const method = req.method
    const url = req.url
    console.log(`time is ${time} \nmethod ${method} \npath${url}`)
    obj.push({"time":time,"method":method,"url":url})
    save_data()
    next();
})

// app.get("/",(req, res)=>{
//     res.send("hello there ")
// })

app.post("/user",(req, res)=>{
    res.send("created")
})


// app.get('/test-error', (req, res, next) => {
//     next(new Error('Intentional error occurred!//'));
// });
// app.use((err, req, res, next) => {
//     // console.error(err.stack);
//     res.status(500).send('Something___ broke!');
// });

app.listen(3000, ()=>{
    console.log("running on port")
})