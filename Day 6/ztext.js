const fs = require('fs');
const path = require('path');

// Function to process files
async function processFiles(files) {
    for (const inputFile of files) {
        try {
            const fileContent = await readFileAsync(inputFile);
            const modifiedContent = manipulateContent(fileContent);

            const outputFileName = generateOutputFileName(inputFile);
            await writeFileAsync(outputFileName, modifiedContent);

            console.log(`File processed: ${inputFile} -> ${outputFileName}`);
        } catch (error) {
            console.error(`Error processing file ${inputFile}: ${error.message}`);
        }
    }
}

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

function writeFileAsync(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

// Example manipulation function (you can customize this)
function manipulateContent(content) {
    // For example, let's add a timestamp to the content
    const timestamp = new Date().toISOString();
    return `${timestamp}\n${content}`;
}

// Helper function to generate an output file name based on the input file
function generateOutputFileName(inputFile) {
    const ext = path.extname(inputFile);
    const baseName = path.basename(inputFile, ext);
    return `${baseName}_modified${ext}`;
}

// Usage example
const filesToProcess = ['file1.txt', 'file2.txt', 'file3.txt'];
processFiles(filesToProcess);
