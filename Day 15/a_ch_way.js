const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res)=>{
    if (req.url === "/weather"){
        try {
        const data = fs.readFileSync("../Day 14/index.txt")
        const data_arr = JSON.parse(data)

        const ndx = Math.floor(Math.random()*data_arr.length)
        const city_name = data_arr[ndx].name
        
        let lat = data_arr[ndx].lat
        let lng = data_arr[ndx].lng

        let api = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`
        fetch(api)
        .then(resp => resp.json())
        .then(json => {
            const temperature = json.current_weather.temperature;
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.write(`${city_name} temperature is ${temperature}`);
            res.end();
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error fetching weather data");
        });
} catch (error) {
    console.error("Error parsing data:", error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Error parsing data");
}
    }
})
server.listen(3000)
console.log("listning on port 3000")