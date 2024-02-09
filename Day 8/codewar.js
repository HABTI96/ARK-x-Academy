
function isIsogram(str){
    // str = str.toLowerCase()
    // let a = str.split("")
    // let r = new Set(a)
    // let newarr = Array.from(r);
    // if (newarr.length == a.length ) return true
    // else return false
    for (let i = 0; i < a.length;i++){
        for (let j = i + 1;j <a.length; j++){
            if (a[i] == a[j]){
                return false
            }
        }
    }
    return true

}
// isIsogram("sasa")
console.log(isIsogram("alma"))