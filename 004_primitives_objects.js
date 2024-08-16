console.log("I am going to tell about primitives data types and object");
// 7 - nn bb ss u - null, number, boolean, bigint, string, symbol, undefined
let a = null;
let b = 345;
let c = true;
let d = BigInt("573") + BigInt("7");
let e = "Harry";
let f = Symbol("i am a nice symbol")
let g = undefined;
let h;
console.log(a, b, c, d, e, f, g, h);
console.log(typeof h)

// objects in js - key value pair and objects are non-primitive data types

const item = {
    "Neha": true,
    "Surbhi": false,
    "Richa": 67,
    "Sonam": undefined
}
console.log(item["Neha"]);
console.log(item["nidhi"]);
console.log(item["Richa"]);