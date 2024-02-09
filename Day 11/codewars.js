function group(arr) {
let in_arr = []
    for(let i = 0; i < arr.length; i++){
        let new_arr = []
        for(let j = 0; j < arr.length; j++){
        if (arr[i] == arr[j]){
            new_arr.push(arr[j])
        }
        }
        in_arr.push(new_arr)
    }
    const uniqueArrays = new Set();
    const result = in_arr.filter((array) => {
    const arrayString = JSON.stringify(array);
    if (!uniqueArrays.has(arrayString)) {
    uniqueArrays.add(arrayString);
    return true;
    }
    return false;
});
    // return result;

// console.log(result)
}

group([3, 2, 6, 2, 1, 3])
// group([3, 2, 6, 2])