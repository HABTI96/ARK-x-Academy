const fs = require('fs')

const writeFile = require('./chalange2')
const readFileAsync = require('./chlange');

async function processFiles(file){
    try{
        const content = await readFileAsync(file)
        const new_content = convert_upper(content)
        await writeFile("simo.txt", new_content)
        
        console.log("=>>>> DONE")
    }
    catch (err){
        console.log("Error processing,",err.message)
    }
}
function convert_upper(str) {
    return str.toUpperCase()
}
processFiles('exm.txt')

