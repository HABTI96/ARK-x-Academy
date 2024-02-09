//------------Mkdir 'creat folder' ---------

// fs.mkdirSync("new_dir")

// -------------Read dir -------------------
// dir = fs.readdirSync(__dirname)

// console.log(dir)

// -------------rename file----------------

// fs.renameSync("test.js", "test_renamed.js")

// -----------------copyFile----------------------

// fs.copyFileSync('test.js', "test_copy.js")

//-------------------Removing Files------------------

//fs.unlinkSync("test.js")

//-------

// fs.unlink("fs_test.js", (err)=>{
//     if (err) console.log("not found")
//     else{
//         console.log("hello world")
//     }
// })

//----------------ReadFile----------------------

// const fs =require('fs')
// const data = fs.readFileSync("fs_rules.js")
// console.log(data.toString())

//----------------------------------

// fs.readFile("fs_rules.js", "utf8",(err,data)=>{
//     console.log(data)
// })
// read the file by variable 'data' 

//----------------------------------
// fs.readFile("txt.txt", "utf8",(err,data)=>{
//     if (err){
//         console.log("the file is not found")
//     }
//     else{
//         console.log("the file is found and is read",data)
//     }
// })

//------------------creat a file using appendFile-----------------------------
// if the file is found it adds the content to the old file

// const fs =require('fs')
// fs.appendFile("fs_test.js","//hello from fs",()=>{
//     console.log("the file is created")
// })


// const fs =require('fs')
// fs.appendFile("fs_test.js","// using 'backslash n'the third compilation",()=>{
//     console.log("the file is created")
// })

//--------------------creat a file ---------------------------

// try {
//     fs.writeFileSync('example.txt', 'Hello, world!');
//     console.log('Data written to file successfully.');
// } catch (err) {
//     console.error(err);
// }

//----------------------------------------------------
// if the file is found it creats over the old file--------

// const fs = require('fs')
// fs.writeFile("fs_rules.js","//hello from fs",()=>{
//     console.log("the file is created")
// })
