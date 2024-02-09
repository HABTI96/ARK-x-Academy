var num = 19;
if (num < 10){
    console.log("1")
}
else{
    let x = 1
    while (x){
        num = num / 10
        x++
        if (num < 10){
            break
        }
    }
    console.log(x)
}
