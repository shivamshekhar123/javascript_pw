//Login
// var admin_credentials ={
//     email : "admin123@gmail.com",
//     password : "admin123"
// }

// function login(email,password) {
//     if (email == admin_credentials.email && password == admin_credentials.password){
//         return "Login Successful"
//     }else if (email == admin_credentials.email && password != admin_credentials.password){
//         return "Password Mismatch"
//     }else {
//         return "Login Failed"
//     }
// }

// console.log(login("admin123@gmail.com","admin123"))
// console.log(login("admin123@gmail.com","admin"))
// console.log(login("admin@gmail.com","admin1"))



// array attendence management system
let students = []

function listOfStudents(){
    return students
}

function addstudents(name){
    students.push(name)
    return `student ${name} is successfully added`
}

function removeStudents(name){
   //Task1: find the index of element to be removed => indexOf
    let elementIndex = students.indexOf(name)

    //Task2: To remove the element from that index => splice
    students.splice(elementIndex,1) //1 means remove one element

    //Task3: To print something
    return `student ${name} removed`
}

console.log(listOfStudents())

console.log(addstudents("shivam"))
console.log(addstudents("shekhar"))
console.log(addstudents("rahul"))
console.log(listOfStudents())

console.log(removeStudents("shivam"))
console.log(listOfStudents())















