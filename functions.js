// function add two number
// function sum(a,b){
//     console.log("inside the sum function")
//     return a+b
// }
//     let add = sum(3,5)
//     console.log(add)

//factorial of a number
// function fact(num){
//     if(num==0 || num ==1){
//         return 1
//     }
//      result = 1
//     for(i=1;i<=num;i++){
//         result = result*i   
//     }
//     return result
// }
// console.log(fact(3))

// function is also called as first class citizen because -->
//   * we can assign it as a variable --> func cannot be called directly
//   * can be passed as an argument
//   * func can be returned from a func

//assign as a variable     --> func cannot be called directly
const helloFunc = function greet(){        //func name is optonal means func without any name called as ANONYMOUS function
    console.log("hello students")
}
helloFunc()

//passed as an argument to a function
// function operate(a,b,fn){
//     console.log(fn(a,b))
// }
// function sum2(a,b){
//     return a+b
// }
//  operate(5,6,sum2)

//func can be returned from a func
// function greet_students(){
//     console.log("hello from outer")
//     return function(){
//         console.log("hello from inner")
//         return function(){
//             console.log("hello from innermost")
//         }
//     }
// }
// greet_students()()() //number of round brackets=number of nested functions

//js is a silent language for eg.
// function sum(a,b){
//     return a+b
// }
// console.log(sum(5,6,2))   // here 2 gets ignored

// //this is a sum function which can add any number of arguments
// function sum(){
//     console.log(arguments)
// }
// sum(5,6)
// sum(3,4,5,6)

//this is a sum function which can add any number of arguments
// function sum(){
//     console.log(arguments)

//     let sum = 0
//     for(i=0;i<arguments.length;i++){
//         sum =sum + arguments[i]
//     }
//     return sum
// }
// console.log(sum(5,6))
// console.log(sum(5,6,7,8))