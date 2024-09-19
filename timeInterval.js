//setInterval(function,time)

// function fetchDataFromAPI(){
//     const date = new Date()
//     console.log('fetching data from API at :',date.toLocaleString() )
// }

// const dataFetchInterval = setInterval(fetchDataFromAPI,3000)
// setTimeout(function () {
//     clearInterval(dataFetchInterval)
//     console.log('data fetching stopped after 15 second.')}, 15000)

//setInterval
// let count = 1
// setInterval(() => {
//     console.log(count++ )
// },1000)

//clearInterval
// let count = 10
// const countdown = () =>{
//     console.log(count--)
//     if(count===0){
//         clearInterval(timer)
//     }
// }
// const timer  = setInterval(countdown,1000)


//setTimeout
// setTimeout(()=>{
//     console.log("hii")  //print "hii" after 3 sec
// },3000)


//clearTimeout
// const timeoutId = setTimeout(() => {
//     console.log("hii") // hii is not get printed because clearTimeout pehle hi run ho jyga
// },3000)

// clearTimeout(timeoutId)
// console.log("timeout has been cleared")



//interview ques
// for(var i=1;i<=16;i=i*2){
//     (function(num){
//         setTimeout(() =>{
//         console.log(num)
//         },3000)
//     })(i)
// }


//interview question
// let count = 0 

// function printCount(){
//     console.log("interval Count:",count)
//     count++
// }

// console.log("Start")

// const intervalId = setInterval(printCount,500)

// setTimeout(function(){
//         clearInterval(intervalId)
//         console.log("Interval stopped")
// },5000)

// console.log("End")









