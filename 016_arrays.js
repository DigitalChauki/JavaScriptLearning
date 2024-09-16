/*array - collection of items 
arrays are variables which can hold more than one value
ex. const fruits = ["banana", "apple", "mango"]
const a1 = [7, "neha, false"]
*/

let marks_class_12 = [ 98, 86, 76, 55, 45, false, "Not present"]
console.log(marks_class_12)

// accessing value of array
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])
console.log(marks_class_12[7]) // will be undefined bcz index 7 does not exist

// length of array
console.log("The length of markclass12th is",marks_class_12.length)

marks_class_12[7] = 77 // adding a new value to the array

// arrays are mutable and can be changed
marks_class_12[0] = 55 // changing the value to the array
console.log(marks_class_12)

// In js arrays are objects. The typeof operator on arrays returns object
const n = [1, 5, 6, 7]
console.log("Type of array is: ", typeof(n))

// array can hold many values under a single name

// QuickQuiz - print array elements using for loop by length
