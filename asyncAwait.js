//async is used to make any function asynchronous


/* taught by vishwa sir */

// async function printmessage(){
//     return "hello students"
// }

// console.log(printmessage())  //printmessage()is a promise now

// printmessage().then(msg => console.log(msg))




// function printHelloAfterwait(){

//     //await is always applied to promise
//     setTimeout(() =>{
//         console.log("hello students")
//     },3000)

//     console.log("this line should be the last print")
// }

// printHelloAfterwait()


//i want to print hello after wait
/*
async function printHelloAfterwait(){

    //await is always applied to promise
   let result = await new Promise((resolve,reject)=>{       //await makes codes sync. writte inside it
    setTimeout(() =>{
               resolve("hello students")
         },3000)
   })
   console.log(result)

   console.log("this line should be the last print")
}

console.log("first line")
printHelloAfterwait()       //it is async so js compiler not stop here 
console.log("last line")
*/






















/* taught by akshay sir */


// async function f() {
//     const promise = new Promise(function (resolve) {
//         setTimeout(() => {
//             resolve("response")
//         }, 1000)
//     })

//     const data = await promise
//     console.log("between")
//     console.log(data)
// }
// f() //all the logics in this function