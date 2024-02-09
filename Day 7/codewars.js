function digitalRoot(n) {
    let a = n.toString().split("")
    sum = 0
    sr = ""
    for (let i = 0; i < a.length; i++){
        sum = sum + parseInt(a[i])
        if (i >= 1){
            sr = sr + " + " + a[i]
        }
    }
    if (sum < 10) return sum
    else if (sum >= 10){
        digitalRoot(sum)
        return sum
    }
}

console.log(digitalRoot(456))

