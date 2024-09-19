//ques1
// const square = (a) =>{
//     console.log("square is")
//     return a*a
// }
// console.log(square(7))

//ques2
const ages = [19,22,19,24,20,25,26,24,25,24]
ages.sort()
console.log(ages)

const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

console.log("Minimum Age:", minAge);
console.log("Maximum Age:", maxAge);


