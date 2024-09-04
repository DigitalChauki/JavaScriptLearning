/*syntax for (initialization; condition; afterthought)
statement*/
// for loop
let str = '';
for (let i = 0; i < 9; i++) {
  str = str + i;
}
console.log(str);

// forin loop - it is used for Arrays also
let obj = {
    neha: 90,
    sony: 80,
    shiva:70
}
 for (let a in obj) {
    console.log("marks of " + a + " is " + obj[a])
 }

 // for of loop - it is used for string and arrays type data
 for (let b of "Neha") {
    console.log(b);
 }