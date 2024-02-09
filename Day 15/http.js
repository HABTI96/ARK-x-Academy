const http = require("http")
const fs = require("fs")
const server = http.createServer(async (req, res)=>{
    if (req.url === "/weather"){
        const data = await fs.readFileSync("../Day 14/index.txt")
        const data_arr = JSON.parse(data)
        const ndx = Math.floor(Math.random()*data_arr.length)
        const city_name = data_arr[ndx].name

        let lat = data_arr[ndx].lat
        let lng = data_arr[ndx].lng
        let api = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
        const resp = await fetch(api)
        const json = await resp.json()
        
        const temperature = json.current_weather.temperature;
        res.write(`${city_name} temperature is ${temperature}`);
        res.end();
    }
    }
)
server.listen(3000)
console.log("listning on port 3000")





















// const http = require("http")
// const fs = require("fs")
// const server = http.createServer(async (req, res)=>{
//     if (req.url === "/weather"){
//         const data = await fs.readFileSync("../Day 14/index.txt")
//         const data_arr = JSON.parse(data)

//         const ndx = Math.floor(Math.random()*data_arr.length)
//         const city_name = data_arr[ndx].name
        
//         let lat = data_arr[ndx].lat
//         let lng = data_arr[ndx].lng

//         let api = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
//         const resp = await fetch(api)
//         const json =  resp.json()
//         const temperature = json.current_weather.temperature;
//         res.write(`${city_name} temperature is ${temperature}`);
//         res.end();
//     }
//     }
// )
// server.listen(3000)
// console.log("listning on port 3000")