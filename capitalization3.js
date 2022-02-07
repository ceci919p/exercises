"use strict";

//hint: use substring toUpperCase, toLowerCase and string concatenation

//const myName = "peTer";

//const myName = "CeciLIe";

const myName = "CEciLIe";

console.log(myName.charAt(0).toUpperCase() + myName.substring(1).toLowerCase());

//const myNameTwo = "PETER";
const myNameTwo = "CECILIE";

console.log(
  myNameTwo.substring(0, 2).toLowerCase() +
    myNameTwo.charAt(2).toUpperCase() +
    myNameTwo.substring(3).toLowerCase()
);
