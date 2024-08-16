7;
true;
!true;
"hello";
console.log("operators in js")
//Arithmatic operators(+, -, *, /, **(exponent), %, ++, --)
let a = 10;
let b = 4;
console.log("a + b = ", a+b)
console.log("a - b = ", a-b)
console.log("a * b = ", a*b)
console.log("a / b = ", a/b)
console.log("a ** b = ", a**b)
console.log("a % b = ", a%b)

console.log("++a = ", ++a)
console.log("a++ = ", a++)
console.log("--a = ", --a)
console.log("a-- = ", a--)
console.log("a-- = ", a--)
console.log("a = ", a)

//Assignement operators(=, +=, -=, *=, /=, **= )
let asignement = 1;
console.log(asignement);
asignement  += 5; // same as asignement = asignement + 5
console.log(asignement);

asignement  -= 5; // same as asignement = asignement - 5
console.log(asignement);

asignement  *= 5; // same as asignement = asignement * 5
console.log(asignement);

asignement  /= 5; // same as asignement = asignement / 5
console.log(asignement);

// Comparison operators(==, !=, ===, !==, >, >=, <, <=, ?)

let comp1 = 6;
let comp2 = 7;
// let comp2 = "6";
console.log("comp1 == comp2 is ", comp1 == comp2);
console.log("comp1 != comp2 is ", comp1 != comp2);
console.log("comp1 === comp2 is ", comp1 === comp2); // it checks type of value also
console.log("comp1 !== comp2 is ", comp1 !== comp2);

console.log("comp1 > comp2 is ", comp1 > comp2);
console.log("comp1 >= comp2 is ", comp1 >= comp2);
console.log("comp1 < comp2 is ", comp1 < comp2);
console.log("comp1 <= comp2 is ", comp1 <= comp2); 

// Logical operators(&&, ||, !) - it operates on boolean

let x = 5;
let y = 6;

console.log( x<y && x==5);
console.log( x<y || x==5);
console.log( !true);

// we have type operator(typeof()) and bitwise operators also


// comments in JS - if want to write some text for program which is not executable by JS engine

//this is single line comments

/* this is 
multiline
comments */