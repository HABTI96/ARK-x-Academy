

// // let array = [11, 9, 13, 8, 5, 6];

// function binarySearch(arr, target) {
//     let left_ndx = 0
//     let right_ndx = arr.length - 1

// while (left_ndx <= right_ndx) {
//     let middle_ndx = Math.floor((left_ndx + right_ndx) / 2)
//     if (target === arr[middle_ndx]) {
//     return middle_ndx
//     }
//     if (target < arr[middle_ndx]) {
//     right_ndx = middle_ndx - 1
//     } else {
//     left_ndx = middle_ndx + 1
//     }
// }
// return "it does not found"
// }
// console.log(binarySearch([1,10, 15, 20, 30], 10)) 


// function linearSearch(array, target) {
//     for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//         return i
//         }
//     }  
//     return "it doesn't found"
// }
// console.log(linearSearch([1,10, 15, 20, 30], 15))


// function selection(arr){
//     for (let i = 0; i < arr.length; i++)
//     {
//         let idx = i
//         for (let j = i + 1; j < arr.length; j++)
//         {
//             if (arr[j] < arr[idx]) {
//                 idx = j 
//             }
//         }
//         if (idx !== i) 
//         {
//             let tmp = arr[idx]
//             arr[idx] = arr[i]
//             arr[i] = tmp
//         }
//         // console.log("--------",arr)
//     }
//     console.log(arr)
// }
// selection(arr)


// bubble sort


// function BubbleSort(arr){

//     for (let i = 0; i < arr.length ;i++){
//         for (let j = 0; j < arr.length; j++){
//             if (arr[j] >= arr[j + 1]){
//                 let tmp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j + 1] = tmp
//         }
//     }
// }
// console.log(arr)
// }
// BubbleSort(arr)

































// function insertsort(arr) {
//     for (let i = 1; i <arr.length; i++) {
//         let crnt = arr[i];
//         let j = i-1;
//         while (j >=0 && arr[j]>crnt){
//         arr[j+1] = arr[j];
//         j--;
//         console.log(arr)
//     }
//     arr[j+1]=crnt;}
//     return arr;
// }
// console.log(insertsort(arr));
