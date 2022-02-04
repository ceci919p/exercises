"use strict";
/*const longline =
  "A very, very, very, very, VERY! long line of text,\
  that spans across the width of the editor!";

const name = `Peter`;
const drink = `Coca-cola`;

const text = `Hello ${name},
 would you like a ${drink}?`;

console.log(text);
const len = name.length;

console.log(`${name} is ${len} characters long`);

const letter = name[1];
console.log(`The first letter of ${name} is ${letter}`); */

//dumbledore excercise

//what is the total number of characters, including spaces?

const name = "Albus Percival Wulfric Brian Dumbledore";
const total = name.length;
const letter = name[35];
console.log(`the total number of characters is ${total}`);

//what is the character at index 2?

//console.log(`The second letter of ${name} is ${letter}`);

//which character is at index 6?

//console.log(`The sixth letter of ${name} is ${letter}`);

//what is the index of the first D in Dumbledore?

const searchTerm = "D";
const indexOfFirst = name.indexOf(searchTerm);

console.log(
  `The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`
);

//what is the index of the last e in Dumbledore?

const searchTerm2 = "e";

const indexOfLast = name.lastIndexOf(searchTerm2);

console.log(
  `The index of the last "${searchTerm2}" from the beginning is ${indexOfLast}`
);

//strings (5.3) methods

const str1 = " There is   space here \n  ";
//trim removes spacing in the beginning and end plus the newline \n
const str2 = str1.trim();

// const fullName = "Peter Heronimous Lind";
// const firstName = fullName.substring(0, 5);
// const lastName = fullName.substring(17);
// console.log(`firstName is: _${firstName}_`);
// console.log(`lastName is: _${lastName}_`);

//quick exercises with substring

//figure out which values you need in .substring to get these results:
const fullName = "Albus Percival Wulfric Brian Dumbledore";
const firstName = fullName.substring(0, 5);
const lastName = fullName.substring(29);
const middleName = fullName.substring(15, 22);
const ianName = fullName.substring(25, 28);
const busName = fullName.substring(2, 5);

//1. albus
console.log(`lastName is: "${firstName}"`);

//2. Dumbledore
console.log(`lastName is: "${lastName}"`);

//3.Wulfric
console.log(`middleName is: "${middleName}"`);

//4. Wulfric w. spaces
console.log(`middleName is: " ${middleName} "`);
//5.ian
console.log(`name is: "${ianName}"`);

//6. bus
console.log(`name is: "${busName}"`);
