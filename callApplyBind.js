//call
// const person1 = {
//     firstName : "shivam" ,
//     lastName : "shekhar" ,
// }

// const person2 = {
//     fullName : function(city, country) {
//         console.log(`${this.firstName} ${this.lastName} lives in ${city} in ${country}` )
//     }
// }
// console.log(person2.fullName.call(person1,"new delhi","india"))

//apply --> just parameters paased as array
// const person1 = {
//     firstName : "shivam" ,
//     lastName : "shekhar" ,
// }

// const person2 = {
//     fullName : function(city, country) {
//         console.log(`${this.firstName} ${this.lastName} lives in ${city} in ${country}` )
//     }
// }
// console.log(person2.fullName.apply(person1,["new delhi","india"]))


//bind --> passing arguments in future or later
// const person1 = {
//     firstName : "shivam" ,
//     lastName : "shekhar" ,
// }

// const person2 = {
//     fullName : function(city, country) {
//         console.log(`${this.firstName} ${this.lastName} lives in ${city} in ${country}` )
//     }
// }

// const bound = person2.fullName.bind(person1)

// bound("new delhi","india")
// bound("washington", "usa")
// bound("london", "uk")





