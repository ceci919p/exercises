"use strict";

//const name = "Peter Heronimous Lind";

//const name = "Cecilie Jasmin Jørgensen";

const name = "Albus Percival Wulfric Brian Dumbledore";

//find firstname

const firstName = name.substring(name.indexOf(0), name.indexOf(" "));

console.log("firstName", firstName);

//find middlename

const middleName = name.substring(name.indexOf(" ") + 1, name.lastIndexOf(" "));

console.log("middleName", middleName);

//find lastname

const lastName = name.substring(name.lastIndexOf(" ") + 1);

console.log("lastName", lastName);
