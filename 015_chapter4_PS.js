// Q1 what will the following print in javascript!
console.log("har\"".length)

// Q2 explore the includes, startsWith, endsWith functions of a string
let sentence = "I am neha sahoo"
let word = "neha"
console.log(sentence.includes(word))
console.log(`The Word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence `)
console.log(sentence.startsWith("neha"))
console.log(sentence.endsWith(6))

// Q3 WAP to convert a given string in to lowercase
let lower = "I AM NEHA SAHoo"
console.log(lower.toLowerCase(3))

// Q4 extract the amount of this string( "Please give Rs 1000")

let str = "Please give Rs 1000"
let str2 = "Please give Rs "
console.log(str2.length)
let amount = Number.parseInt(str.slice(15))
console.log(amount)
console.log(typeof(amount))
// Q5 try to change 4th character of a given string, were you able to do it.
// Ans : No
let friend = "Nikita"
friend[3] = "m"
console.log(friend) // friend is not changed, bcz string is immutable 
//it will not throw error though