
//taught by vishwa sir in revision class
/*

//eg1
const promiseFromSimran = new Promise((resolve,reject) => {     // (resolve,reject) is a callback func with parameters resolve,reject   //new Promise means we created a new object

    let parentsDecision = false     //true/false triggers the then and catch methods
    if(parentsDecision){
        resolve("Yaay, shaadi ki taiyaari kro")
    }else {
        reject("Papa ne IAS dhoondh liya h")
    }



});

promiseFromSimran
.then((message)=>{     //message is a callback function   // message = resolve
    console.log("messag from my girl : " + message)
    console.log("my life is set")
})
.catch((msg)=>{         //msg is a callback function  // msg = reject
    console.log("message from my girl : " + msg)
    console.log("where is my tinder")
})
*/





//Promise.all
/*
const dost1promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("dost1 is ready to come")
        }else{
            reject("dost1 is not coming")
        }
    },3000)
})

const dost2promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("dost2 is ready to come")
        }else{
            reject("dost2 is not coming")
        }
    },1000)
})

const dost3promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("dost3 is ready to come")
        }else{
            reject("dost3 is not coming")
        }
    },2000)
})


//only if all of them come then i will marry else not

const friendpromise = [dost1promise,dost2promise,dost3promise]

Promise.all(friendpromise).then(result =>{
    console.log(result)
    console.log("i will marry")
}).catch(message =>{
    console.log(message)
    console.log("since all my friend didnt come i will not marry")
})

*/


//Promise.any
/*
const gf1promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("gf1 is ready to come")
        }else{
            reject("gf1 is not coming")
        }
    },3000)
})

const gf2promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("gf2 is ready to come")
        }else{
            reject("gf2 is not coming")
        }
    },1000)
})

const gf3promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("gf3 is ready to come")
        }else{
            reject("gf3 is not coming")
        }
    },2000)
})

//any of them come then i will marry

const gfpromise = [gf1promise,gf2promise,gf3promise]

Promise.any(gfpromise).then((result) =>{
    console.log(result)
    console.log("my valentine is confirmed")
}).catch(message =>{
    console.log(message)
    console.log("kitne aur relationships bnau")
})
*/




//Promise.resolve
// const motherpromise = Promise.resolve("mummy never lies")
// promise.then(response => console.log(response))



//Promise.reject
// const tinderpromise = Promise.reject("mera katne wala h")
// promise.catch(response => console.log(response))
















/* taught by akshay mittal */

// const promise = new Promise(function(resolve,reject){
// console.log("start loader")
// if(Math.random() >0.5){
//     resolve({city : "delhi", temp : "39"});  //data
// } else{
//     reject({code : 402,message: "data not found"});  //error
// }})


// promise  //chaining of promise methods
// .then(response => console.log(response))  //promise.then for showing result
// .catch(error => console.log(error))  //promise.catch for showing error
// .finally(()=>{
//     console.log("stop loader")  //sab task complete hone ke baa ka display
// })



//Promise.all    //like AND opearator agar sabhi resoved ya reject h tabhi run krega

// const promise1 = new Promise(function(resolve){
//     resolve("first");
// })
// const promise2 = new Promise(function(resolve){
//     resolve("second");
// })
// const promise3 = new Promise(function(resolve){
//     resolve("third");
// })

// const allpromises = [promise1,promise2,promise3];

// Promise
// .all(allpromises)
// .then(res => console.log(res))  //promise.then for showing result




// or example of above
// const promise1 = new Promise(function(resolve){
//     resolve("first");
// })
// const promise2 = new Promise(function(resolve,reject){   //here this will lead to trigger catch method
//     reject("second");
// })
// const promise3 = new Promise(function(resolve){
//     resolve("third");
// })

// const allpromises = [promise1,promise2,promise3];

// Promise
// .all(allpromises)
// .then(res => console.log(res)) 
// .catch(error => console.log(error))  //this case works
// .finally(()=>{
//     console.log("stop loader")
// })




//Promise.any  //display the first successful result

// const promise1 = new Promise(function(resolve,reject){
//     reject("first");
// })
// const promise2 = new Promise(function(resolve){   
//     resolve("second");
// })
// const promise3 = new Promise(function(resolve){
//     resolve("third");
// })

// const anypromises = [promise1,promise2,promise3];

// Promise
// .any(anypromises)
// .then(res => console.log(res)) 





//Promise.resolve
// const promise = Promise.resolve("success")
// promise.then(response => console.log(response))



//Promise.reject
// const promise = Promise.reject("failed")
// promise.catch(response => console.log(response))




//interview ques

//given two prommises promise1 and promise2 , return a neew promise. proimise1 an promise2 will both resolve with a number .The returned promise should be resolved with the sum of two numbers.

// const promise1 = Promise.resolve(5)
// const promise2 = Promise.resolve(10)

// const promise = new Promise(function(resolve){
//         let num1,num2
//         promise1.then(res =>{
//             num1 =res

//             if(num1 && num2){
//                 resolve(num1 + num2)
//             }
//         })

//         promise2.then(res =>{
//             num2 =res

//             if(num1 && num2){
//                 resolve(num1 + num2)
//             }
//         })
// })
// promise.then(res => console.log(res))

//another method

//given two promises promise1 and promise2 , return a neew promise. proimise1 an promise2 will both resolve with a number .The returned promise should be resolved with the sum of two numbers.

// const promise1 = Promise.resolve(5)
// const promise2 = Promise.resolve(10)

// const promise = new Promise(function(resolve){
//        Promise.all([promise1,promise2]).then(res => {
//         resolve(res.reduce((sum,num)=> sum +num))
//        })
//     })
// promise.then(res => console.log(res))


