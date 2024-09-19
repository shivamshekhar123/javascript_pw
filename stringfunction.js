// string is immutable
// const hello = "hello world"
// hello[2] = "h"  //does not work as string is immutable
// console.log(hello)

// at is used to give index value 
// console.log(hello.at(6))  //similar to console.log(hello[6])
// console.log(hello.at(-1))  //also negative indexing allowed

// charAt
// console.log(hello.charAt(6))    //similar to console.log(hello[6])

//endsWith
// console.log(hello.endsWith("ld"))  //true
// console.log(hello.endsWith("or"))
// console.log(hello.endsWith("or",9))  // 9 is position -->true

//startsWith
// console.log(hello.startsWith("he"))  //true
// console.log(hello.startsWith("or"))
// console.log(hello.startsWith("lo",3))  // 9 is position -->true


//include --> element present or not
// console.log(hello.includes("or"))  //true
// console.log(hello.includes("ot"))  //false
// console.log(hello.includes("or",6)) //true

// padding --> create extra space and fill with " .,!,@,etc "
// console.log(hello.padStart(15,"."))  // you can use any thing in place of "."
// console.log(hello.padEnd(15,"."))
// console.log(hello)  // string remains immutable after padding

//repeat
// console.log(hello.repeat(2))

//replace
// console.log(hello.replace("world","universe"))

//replaceAll
// console.log(hello.replaceAll("l","L"))

//slice
// console.log(hello.slice(3,6))
// console.log(hello.slice(3))

//split --> covert string to new array
// console.log(hello.split(" "))
// console.log(hello.split(""))

//substring --> inbetween elements we cannot pass negative inde
// console.log(hello.substring(4,8))   //2nd parameter deals with index

//substr
// console.log(hello.substr(4,5))  //2nd parameter deals with lenght

//loweCase and upperCase
// console.log(hello.toLowerCase())
// console.log(hello.toUpperCase())


//trim
// const hey = "  hey bro  "
// console.log(hey.trimStart())
// console.log(hey.trimEnd())


//date
// let date = new Date()
// console.log(date)
// console.log(Date.now())
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getMonth())
// console.log(date.getHours())
// console.log(date.getFullYear())
// console.log(date.toDateString())


//set --> kind of array but accept only unique value
// const setDemo = new Set()
// setDemo.add("a")
// setDemo.add("b")
// setDemo.add("c")
// console.log(setDemo)
// console.log(setDemo.size)
// setDemo.delete("c")
// console.log(setDemo)
// setDemo.clear() // remove everything in set
// console.log(setDemo)

// console.log(setDemo.entries()) //print all the entries
// console.log(setDemo.size)

// console.log(setDemo.has("b")) // b is present or not
// console.log(setDemo.has("d")) // d is present or not

// console.log(setDemo.values()) //print values
// console.log(setDemo.keys())
// console.log(setDemo.entries())


//create set from an array
// const arr = ['apple','mango','banana','orange','mango']
// const setDemo = new Set(arr)
// console.log(setDemo)

//create array from set
// const setDemo = new Set()
// setDemo.add("a")
// setDemo.add("b")
// setDemo.add("c")
// console.log(Array.from(setDemo))


//map 
// const mapDemo = new Map()
// mapDemo.set("name","john")
// mapDemo.set("age",7)
// mapDemo.set(3,5)  // we can pass any datatype in key instead of string only
// mapDemo.set(false,true)
// console.log(mapDemo)
// mapDemo.delete(false)
// console.log(mapDemo)
// console.log(mapDemo.has(3))  // 3 key is present or not

//convet map to object
// const obj = Object.fromEntries(mapDemo)
// console.log(obj)


