// let arr = [5,6,8,3,10,8]

// // function sum(numbers){
// //     let sm = 0
// //     for (let i = 0; i < arr.length; i++)
// //     {
// //         sm = sm + arr[i]
// //     }
// //     console.log(sm)
// // }

// // function countEven(numbers){
// //     let count = 0
// //     for(let i = 0; i < arr.length; i++)
// //     {
// //         if (arr[i] % 2 == 0)
// //         {
// //             count++
// //         }
// //     }
// //     console.log(count)
// // }

// // function double(numbers){
// //     new_arr = []
// //     for (let i = 0 ; i < arr.length; i++)
// //     {
// //         new_arr.push(arr[i]*2)
// //     }
// //     console.log(new_arr)
// // }

function sockMerchant(array){
let count = 0;
array = array.sort()
count = 0
for (let i = 0 ;i < array.length-1; i++){
    if (array[i] == array[i+1]){
        count++
        i++
    }
}
console.log(count)
} 
sockMerchant([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]); // 4
sockMerchant([1, 2, 1, 2, 1, 3, 2]); // 2
sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]); // 3
sockMerchant([1, 2, 3, 4, 5, 6, 7, 8, 9]); // 0

















        // function sockMerchant(array){
        //     let count = 0
        //     let h = 0
        //     for (let i = 0; i < array.length; i++){
        //         for (let j = i + 1; j < array.length; j++){
        //             if (array[i] == array[j])
        //             {
        //                 console.log("=",array[i])
        //                 console.log("===",array[j])
        //                 h = 1
        //             }
        //         }
        // }