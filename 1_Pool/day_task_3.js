

for (let i = 1; i <= 4; i++){
    for(let j = 3; j >= i; j--){
        process.stdout.write(` `);
    }


    for(let j = 1; j <= i; j++){
        if (j >= 2)
        {
            process.stdout.write(`*`);
        }
        process.stdout.write(`*`);
    }
    console.log("")
}
console.log("   |")
//  1234567
//1    *      1     
//2   ***     3  
//3  *****    5 
//4 *******   7  
