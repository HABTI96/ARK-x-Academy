const fs = require('fs');

function writefile(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}
writefile("exmi.txt", "hello there!")
.then(() => {
    console.log("Le fichier a été écrit avec succès.");
})
.catch((err) => {
    console.error("Une erreur s'est produite lors de l'écriture du fichier :", err);
});

module.exports = writefile;
