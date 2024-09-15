// string - collection of characters
/* Strings are used to store and manipulate text 
String can be created using following syntax
String can also be created using signle quotes and double quotes
*/

let name = "Harry bhai"
let singleQuotes = 'neha sahoo'

//let notAllowed = "notAllowed' // don't do this
console.log(name)
console.log(name[0])
console.log(name[1])
console.log(name[2])
// alt shift and bottom click at that line -- copy & paste above line 
console.log("lenght is: ",  name.length)
console.log(singleQuotes)
console.log("lenght is: ",singleQuotes.length)

// modern javascript started
console.log("Modern javascript started")
// Template literals - use backticks instead of quotes to define a string
let boy1 = "Pramod"
let boy2 = "Nikil"
// want to write Nikil is a friend of Pramod
// backtick(``) - click ~ without shift
 let sentence = `${boy2} is a friend of ${boy1}`
 console.log(sentence)

 //String interpolation: we can insert variable directly in a template literal.

//Escape Sequence Characters
let singleQuoteEsc = 'Bana\'na'
console.log(singleQuoteEsc)

let doubleQuoteEsc = "Bana\"na"
console.log(doubleQuoteEsc) 

let newLine = 'Mango\nAam' // add new line 
console.log(newLine)

let tabReturn = 'Mango\tAam' // add new line 
console.log(tabReturn)

let carriageReturn = 'Mango\rAAam' // add new line 
console.log(carriageReturn)
