// arr = [1,2,3,4,5]
// console.log(arr)

// pop is used to delete last element
// arr.pop()
// console.log(arr)

// push is used to insert at last
//  a=arr.push(11)  // remember this thing return the length of modified  array
//  console.log(a)
//  console.log(arr)

// fruits = ["mango","apple","papaya"]
// fruits.pop()
// console.log(fruits)
// fruits.push("watermelon")
// console.log(fruits)

// shift is used to delete element from start
// num = [1,2,3,4,5]
// x = num.shift()
// console.log(x)
// console.log(num)

// unshift is used to add element at start
// let num2 = [5,6,7,8,9]
// let y= num2.unshift(50)  // remember this thing return the length of modified  array
// console.log(y)  
// console.log(num2)


//to concate two arrays
// arr1=[3,4,5]
// arr2=[6,7,8]
//  arr = arr1.concat(arr2)  // we cannot use arr1 + arr2 as  it create a new "string" instead of "array" this is not useful 
// console.log(arr)
// console.log(arr.length)
// console.log(typeof arr)

// JOINS in arrray 
// let fruits = ["apple","banana","carrot"]
// let result = fruits.join() // this will try to convert array into string with  by default seperator comma ,
// let result2 = fruits.join("-") // this will try to convert array into string with custom seperator -
// console.log(result)
// console.log(result2)


//slice in array
// let arr = [5, 7, 3, 8, 4, 2, 1, 6, 9]
// sliced_arr = arr.slice(2,5) // slice array from index 2 to 4 (5th index not included) and it will not impact the original array
// console.log(arr)
// console.log(sliced_arr)
// console.log(arr.slice()) // if no argument, then no action -- entire array will be returned
// console.log(arr.slice(2)) // take out the array starting from 2nd index
// console.log(arr.slice(-4, -1)) // index start from last is -1,-2,-3...


//splice in array 
// let arr = [9,8,7,6,5,4]
// arr.splice(3,1,55) //  (starting index,count of elements to be remove,no. of elements to add)  -- 1st params(starting index) --2nd params(count of elements to be remove) --remaining params(no. of elements to add)
// console.log(arr)


// reverse an array
// let arr = [1,2,3,4,5]
// arr.reverse()
// console.log(arr)

//sort an array --asc
// let arr = [5,6,3,8,1,2]  //ascending order
// arr.sort()
// console.log(arr)

//sort an array --desc
// let arr = [5,6,3,8,1,2]
// arr.sort((a,b)=>b-a)        //b-a for descending and a-b for ascending
// console.log(arr)


//toString -- used to convert array into string similar to joins
// arr = [4,6,2,7,5]
// str = arr.toString()
// console.log(str)
// console.log(typeof str)

// flat used to make single array 
// arr = [2,3,4,[5,6,7]]       // array in array -->single array
// flat_array = arr.flat()
// console.log(flat_array)
// console.log(arr)

// let arr2 = [1,2,3,[4,5,6,[7,8,9,[1,2,3]]]]

// console.log(arr2.flat())       //does 1st level of flatenning
// console.log(arr2.flat(2))  
// console.log(arr2.flat(3))  


//forEach loop
// const nums  = [1,2,3,4,5]
// nums.forEach((number,index,array) => {
//     console.log(number,array[index])
// })

//map --> new array ko map krta h purane array se ,original remain unchanged
// const nums  = [1,2,3,4,5]
// const newNums= nums.map((number,index,array) => {
//     return number *2
// })
// console.log(newNums)


//filter
// const nums  = [1,2,3,4,5]
// const newNums= nums.filter((number,index,array) => {
//     return number%2===0
// })

// console.log(newNums)

// **WE CANNOT USE BREAK STATEMENT IN FOREACH LOOP, MAP, FILTER


//Reduce
// const nums = [1,2,3,4,5]
// const total = nums.reduce((sum,num,index,arr)=>{
//     console.log(`sum = ${sum} & num = ${num}`)
//     sum = sum + num //this runs 4 times
//     return sum
// })
// console.log(total)

//or when we initialise a value in reduce
// const nums = [1,2,3,4,5]
// const total = nums.reduce((sum,num,index,arr)=>{
//     console.log(`sum = ${sum} & num = ${num}`)
//     sum = sum + num  //this runs 5 times
//     return sum
// },0)
// console.log(total)

//interview ques
//Compare and contrast the map and forEach array method. Can you give an example of a practical scenario where the map would be advantageous over other looping methods?
// const products = [
//     {id: 1, name :"laptop", price :999},
//     {id: 2, name :"Phone", price :499},
//     {id: 3, name :"Tablet", price :299}
// ]
// //using map to extract an array of product names
// console.log(products.map(product => product.name))
