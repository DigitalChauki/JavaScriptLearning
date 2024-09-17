let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let numMore = [22, 43, 45, 65, 66]
console.log(num, num.length)
// delete() - array elements can be deleted using the delete operator

delete num[0] // delete is an operator and don't decrease the lenth
console.log(num, num.length)

// concat() - used to join arrays to the given array
let newArray = num.concat(numMore) 
console.log(newArray)

console.log (num, numMore) // original arrays will be same   