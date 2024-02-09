const fs = require('fs');

function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
            reject(err);
            } else {
            resolve(data);
            }
        });
    });
}

readFileAsync('exm.txt')
.then(data => {
console.log(data);
})
.catch(error => {
console.error('Error reading file:', error.message);
});
module.exports = readFileAsync; 