// const emp = {
//     name : "vishwa",
//     age : 20,
//     salary : 1000,
//     address : {
//         city : "gurgaon",
//         country : "india"
//     }
// }

//list of all the keys in the given object
// console.log(Object.keys(emp))

//list of all the values in the given object
// console.log(Object.values(emp))

//list of all the key value pairs
// console.log(Object.entries(emp))

//assign values in new object
// emp_new = Object.assign({},emp,{role : "developer"})   // {} -->new empty object jisme emp wali purani object dalegi or role name ka new key and value dalega
// console.log(emp_new)

// add new key value in existing object
// emp.help = "help"
// console.log(emp)


//freeze  --> no modification, no addition, no deletion
// const person = {
//     name : "shivam",
//     age : 20
// }
// console.log(person)
// Object.freeze(person)    //Object is now freezed and can't be changed 

// person.name = "sakshi"
// console.log(person)

// person.hobby = "cricket"  //you cannot add and delete elements when freeze used
// console.log(person)

// console.log(Object.isFrozen(person))    //to check object is frozen or not


// seal --> allow modification, no addition, no deletion
// const person2 = {
//         name : "shivam",
//         age : 20,
//         salary :8000
//      }
// console.log(person2)
// Object.seal(person2)

// person2.name = "sakshi" // addition not allowed
// console.log(person2)

// delete person2.name  //deletion not allowed
// console.log(person2)

//need to check if particular key is present in object or not
// console.log(Object.hasOwn(person2,"name"))
// console.log(Object.hasOwn(person2,"company"))

// console.log(Object.getOwnPropertyNames(person2))  //similar to object.keys(person)
// console.log(Object.getOwnPropertyDescriptors(person2)) 


//iterate over the value
// const person = {
//     name : "shivam",
//     age : 19,
//     salary : 7000
// }
// Object.defineProperties(person,{
//     salary : {
//         value : 7000,
//     enumerable : false
//     }
// })

// for (k in person){
//     console.log(k)
// }

// console.log(Object.getOwnPropertyDescriptors(person)) 



