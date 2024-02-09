function setReducer(input) {
    // let input =input.sort()
    let count = 1
    let arr = []
    for (let i = 0; i < input.length; i++)
    {
        if (input[i] == input[i+1]){
            count++
        }
        else{
            arr.push(count)
            count = 1
        }
    }
    if (arr.length == 1){
        return arr[0]
        // console.log(arr[0])
    }
    else{
        return setReducer(arr)
    }
}
// setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7])
console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7]))
// // setReducer([1, 2, 2, 1, 1, 3, 3, 3])
// setReducer([2,4,4,6,2,1,1,5,6,7,8,8,8,8,9,0,1,1,5,4,4])

    // let f_a = arr.filter(x=> x > 1)
    // let mset = new Set(f_a)
    // let new_arr = Array.from(mset)
    // let f_1 = arr.filter(x=> x == 1)
    // let lst_arr = f_1.concat(new_arr)
    // console.log(lst_arr) 