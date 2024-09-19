// function calculatorFunction(operation,initialValue,numbers){
//     let total = initialValue
//     for(const number of numbers){
//         total = operation(total,number)
//     }
//     return total
// }

// function sum(n1,n2){
//     return n1 + n2
// }

// function multiply(n1,n2){
//     return n1 * n2
// }
// console.log(calculatorFunction(sum,0,[1,3,4]))
// console.log(calculatorFunction(multiply,1,[1,3,4]))

//ques1
// Function to find the index of the first element in an array that satisfies a given condition
// const findIndex = (callback, nums) => {
//     let index = -1; // Initialize index to -1, indicating that no matching element has been found yet
//     for (let i = 0; i < nums.length; i++) {
//         if (callback(nums[i])) {
//             // If the current element satisfies the condition provided by the callback function
//             index = i; // Set the index to the current position
//             break;     // Break out of the loop, as we have found the first matching element
//         }
//     }
//     return index; // Return the index of the first element satisfying the condition (or -1 if none found)
// }

// Example usage:
// const arr = [1, 2, 3, 5, 7, 9];

 // Define a condition function: elements greater than 5
// const condition = (num) => { 
//     return num > 5;
// }

// Call the findIndex function with the condition and the array
// console.log(findIndex(condition, arr)); // Output: 4 (index of the first element greater than 5)










