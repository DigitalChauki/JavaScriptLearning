let a = 1;
let b = 2;
let c = 3;
console.log("output 1:> ", 1 + (a+b)/2)
console.log("Done")
console.log("output 2:> ", 1 + (b+c)/2)
console.log("Done")
console.log("output 3:> ", 1 + (c+a)/2)
console.log("without funtion Done")

// making function - concern of sepration
 
function onePlusAvg(x, y) {
    console.log("Done")
    return 1 + (x + y)/2;
}
console.log("output 1:> ", onePlusAvg(5, 3))
console.log("output 1:> ", onePlusAvg(10, 3))

// arrow funtion 

const sum = (p, q) => {
    return p + q;
}
console.log("sum is " + sum( 5, 10))

// function without arguments

const hello = () => {
    console.log("Hey hello")
    return "heyy man"
}

hello();

let output = hello();
console.log("Output of fun> " + output)
