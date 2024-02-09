const fs = require('fs');
const filePath = 'input.txt';
const cities = fs.readFile("")

const ndx = Math.floor(Math.random() * cities.length)
const cityName = cities[ndx].name

fs.writeFile(filePath, cityName, (err) => {
    if (err) {
        console.error('Erreur', err);
    } else {
        console.log('the name of city is created.');
    }
});

async function fetchTemperature(city) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current_weather=true`);
    const data = await response.json();
    return data.current_weather.temperature;
}
async function readCityNameFromFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.trim());
            }
        });
    });
}
async function deleteExistingFile(filename) {
    return new Promise((resolve, reject) => {
        fs.unlink(filename, (err) => {
            if (err && err.code !== 'ENOENT') {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}
async function writeTemperatureToFile(city, temperature) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`${city}.txt`,` Temperature in ${city}: ${temperature} C°`, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

async function processCity() {
    try {
        const cityName = await readCityNameFromFile('input.txt');
        const city = cities.find(c => c.name === cityName);
        if (!city) {
            throw new Error('City not found!');
        }
        const temperature = await fetchTemperature(city);
        await deleteExistingFile(`${city.name}.txt`);
        await writeTemperatureToFile(city.name, temperature);
        console.log(`Temperature for ${city.name} written to ${city.name}.txt`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}
processCity();