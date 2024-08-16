//Q1: create a variable of type string and try to add a number to it
var a = "neha";
var b = 37;
var c = a + b;
console.log(c);

//Q2: Use typeof operator to find the datatype of the string in last questioon

console.log(typeof a);

//Q3: Create a const object in js. Can you change it to hold a number later? ANS: NO

const obj = {
    name: "neha", // key can be withoud double qoute
    section: 1,
    isPrincipal: false
}

// obj = "neha"; // SyntaxError: Identifier 'a' has already been declared


//Q4: Try to find a new key to the const object in problem3. Were you able to do it? AND  =  yes

obj['friend'] = "surbhi";
obj['name'] = "Nidhi";
// cons['name'] = "Nidhi"; // alt shift downarrow

console.log(obj);

//Q5: Write a JS progra, to create a word-meaning dictionary of 5 words.

const dict = {
    appreciate: "to be grateful for something",
    riffraff: "a group of people regarded as disreputable or worthless",
    harmony: "a state of agreement or of peaceful existence together",
    confront: "to think about, or to make somebody think about, something that is difficult or unpleasant",
    obsession: "the state in which you can only think about one person or thing so that you cannot think of anything else"

}

console.log(dict);
console.log(dict.appreciate);
console.log(dict['harmony']);