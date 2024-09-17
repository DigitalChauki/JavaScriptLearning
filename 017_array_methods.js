// Array methods
let num = [1, 2, 3, 4, 5]
console.log(num, typeof num)
// toString() - convert an array to a string of comma seprated vakyes
let b = num.toString() // be is string now
console.log("toString method> ", b, typeof b)
// join() - joins all the array elements using a separator
let c = num.join("_")
console.log("join method> ", c, typeof c)

// pop() - removes last element from the array
let n = [1, 2, 4]
let len = n.pop()
console.log("pop method> ", len , n) // updates the original array return the popped value like below


// push() - add a new element at the end of the array
let a = [1, 4, 6, 7, 8]
let o = a.push(9) // modifies the original array and returns the new array length
console.log("push method> ", o , a)

// shift() - remove first elements and returns it
let r = num.shift()
console.log("shift method> ", r, num)

//unshift() - adds element to the beginning, return new array length

let us = num.unshift(88)
console.log("unshift method> ", us, num)

