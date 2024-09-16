// string methods used for string manipulations
// escape sequence characters considered as one character
let stringName = "NeHa Sahoo"
console.log(stringName.length) // length is a property we can use directly
// below are funtions so we have to invoke the funtions
console.log(stringName.toLowerCase())
console.log(stringName.toUpperCase())
console.log(stringName.toLocaleLowerCase())
console.log(stringName.toLocaleUpperCase())
console.log(stringName.toString())

// index of String(starts from 0) - memory location of String chars

console.log(stringName.slice(2,4)) // print between 2 and 4 index
console.log(stringName.slice(2))

console.log(stringName.replace("eHa", "ilu"))

// concat method
let concatString = "Neha"
console.log(concatString.concat(" is and Engineer\n", concatString, " is an Android Developer"))

// trim method

let trimString = "  how are you   "
console.log(trimString.trim())

// Strings are immutable - all above methods return new string in output
// original string will always be same 
let fr = "Raman" + "shivika" + "Aaman"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
// fr[4] = "O" // this is not possible
console.log(fr)

// QuickQuiz: Use a for loop to print a string