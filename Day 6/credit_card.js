function maskify(cc) {
    let str = cc.toString()
    let arr = str.split("")
    for (let i = 0;i < arr.length;i++){
        if (i < arr.length - 4){
            arr[i] = "#"
        }
    }
    let final = arr.join('')
    console.log(final)
    // return final
}


maskify(45564564654655679)

// function maskify(cc) {
//     let s = cc.toString();
//     let str = ""
//     const d = "#"
//     let sec = ""
//     let shw=""
//     for(let k = 0; k < s.length; k++){
//         str = str + d
//         if (k < 1) {
//             sec = s[0]
//             shw = ""
//         }

//         else if (k <= s.length - 4){
//             sec = str
//         }
//         else{
//             shw = shw + s[k]
//         }
//     }
//     console.log(sec+shw)
    // return sec + shw
// }
// maskify(54462389451)