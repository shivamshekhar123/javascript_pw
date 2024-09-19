// ques1
// let num = 49
// if(num>=90){
//     console.log("A grade")
// }else if(num<90 && num>=70){
//     console.log("B grade")
// }else if(num<70 && num>=50){
//     console.log("C grade")
// }else{
//     console.log("F grade")
// }

//ques2
// const num1=10
// const num2=100
// for(let i =num1+1;i<=num2;i++){
//     console.log(i)
// }

//ques3
// let num=-9
// let result
// result= num>0 ? "positive":num<0? "negative":"zero"
// console.log(num,"is",result)

//ques4
//Comma Operator (,) mainly evaluates its operands from left to right sequentially and returns the value of the rightmost operand. A comma operator is used as a separator for multiple expressions at a place that requires a single expression. When a comma operator is placed in an expression, it executes each expression and returns the rightmost expression.
// for (let a = 0, b =5; a <= 5; a++, b--) { 
// 	console.log(a,b); 
// }


//ques5
// let username = "admin"
// let password = "12345"
// let result

// if(username=="admin" && password == "12345"){
//     console.log("Login Successful")
// }
// else{
//     console.log("Invalid Credentials")
// }

//ques6
// let paymentMethod="credit"
// switch (paymentMethod) {
//     case "credit":
//         console.log(paymentMethod,"processing fee 2%")
//         break;
//     case "debit":
//         console.log(paymentMethod,"processing fee 1.5%")
//         break;
//     case "paypal":
//         console.log(paymentMethod,"processing fee 3%")
//         break;
//     default:
//         console.log("Invalid")
//         break;
// }

//ques7
// let temperature = 10
// let result
// result = temperature>=30 ? "hot":temperature<30 &&temperature>=20 ? "moderate" : temperature<20 && temperature>=10 ? "chilling cold" :"freezing"
// console.log(result)

//ques8
// let i = 1
// let num = 5
// let sum = 0
// do{
//      sum=sum + i
//     i++
//     console.log(sum)
// }while(i<=num)
// console.log("final output",sum)