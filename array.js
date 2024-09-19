//array define  --> BEST WAY
// let arr = [1,2,3,4,5]
// console.log(arr[1],arr[2])
// //array length prints
// console.log("length is",arr.length)

//2nd way of defining array
// fruits= Array("apple","banana","orange")
// console.log(fruits)

//3rd way of defining array --> constructor way
// vegetables = new Array("potato","tomato","brinjal")
// console.log(vegetables)

//delete elements from array   --> we should not use delete because it create empty space in between
// delete vegetables[1]
// console.log(vegetables)


/* how to iterate array

  By using for loop
*/

// let arr = [1,2,3,4,5]
// for(i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// function sum_arr(arr){
//         sum =0 
//         for(i=0;i<arr.lenght;i++){
//             sum = sum + arr[i]
//         }
//         return sum
// }
// console.log(sum_arr(1,2,3,4,5))


//ques
// function sum_arr(arr){
//     sum = 0
//     for(i=0;i<arr.length;i++){
//         sum =sum +arr[i]
//     }
//     return sum
// }
// console.log(sum_arr([3, 4, 5, 6, 7]));


//to iterate array elements directly
// arr = [1,2,3,4,5]
// for(let val of arr){        //it is for each loop
//     console.log(val)
// }


