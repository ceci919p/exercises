"use strict";

console.log("hej");

const bool = true;
console.log(typeof bool);
const num = 41;
console.log(typeof num);
const str = "Peter";
console.log(typeof str);
const obj = {
  cats: 2,
  cars: 1,
};
console.log(typeof obj);
const nothing = null;
console.log(typeof nothing);
let undf;
console.log(typeof undf);
const symbol = Symbol("symbol");
console.log(typeof symbol);

const n1 = 1;
const n2 = 2;

const s1 = "1";
const s2 = "2";

const value = "2";
if (value) {
  console.log("Value is truthy");
} else {
  console.log("Value is falsy");
}
