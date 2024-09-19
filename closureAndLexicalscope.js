// closure means inner function can reference the elements of outer function even if the outer function stop processing

/* taught by vishwa sir */
/*
function outerFn(){
    let outerVar = "i am from the outer fn"
    function innerFn(){     // This inner function has access to the variables in the outer function due to closure. Specifically, innerFn has access to the outerVar variable.

        console.log(outerVar)
    }
    return innerFn
}

const fn = outerFn()        //fn=innerFn()
fn()  */



//eg

function customerCounter(){
    let count = 0
    return function(){      //this func=counter
        count++
        console.log("new customer count is ",count)
    }
}
let counter = customerCounter()     //counter = inner function
counter()  //count = 1
counter()  //count = 2

























































// function outer(num1){
//     let num2 = 2
//     return function inner(){
//        return num1+num2
//     }
// }

// const closure = outer(10)
// console.log(closure())



// function outer(){
//     let count = 1
//     return function(){
//         return count++
//     }
// }

// let counter = outer()
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())