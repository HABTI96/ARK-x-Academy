
function narcissistic(value) {
    let k = value.toString()
    let arr = k.split("")
    let new_arr=[]
    for (let i = 0;i <arr.length;i++){
        // sum = sum + parseInt(arr[i])
        new_arr.push(parseInt(arr[i])**arr.length)
    }
    let sum = 0
    for (let i = 0;i<new_arr.length;i++){
        sum = sum + new_arr[i]
    }
    if (sum == value){
        return true
    }
    return false
}
console.log(narcissistic(153))