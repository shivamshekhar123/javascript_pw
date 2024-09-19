// destructuring is used to extract particular elements and give the some name or property

// const arr = [1,2,3]
// const [one, ,three] = arr  // here one, two, three gets mapped with 1,2,3
// console.log(one)
// console.log(three)

// eg2
// const nums = [1,2,3,4,5]
// const [num1, ,num3, ,num5] = nums
// console.log(num1)
// console.log(num3)
// console.log(num5)


//eg3
// const name = "shivam shekhar"
// const [firstName,lastName] = name.split(" ")
// console.log(firstName)
// console.log(lastName)

//eg4
// const name = "hey"
// const [one, ,three] = name
// console.log(one)
// console.log(three)

//eg5 Set destructuring
// const [num1,num2, ] = new Set([1,2,3])
// console.log(num1)
// console.log(num2)


//eg6
const name = "john Doe"

const person = {}
[person.firstname, person.lastname] = name.split(" ")
console.log(person)










































