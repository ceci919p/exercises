"use strict";
/* 
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

console.log("lastName", lastName); */

//---------NAME PARTS FUNCTION EXERCISE

//let fullName = "Cecilie Jasmin Jørgensen";

function getNameParts(fullName) {
  //find firstName
  const firstName = fullName.substring(
    fullName.indexOf(0),
    fullName.indexOf(" ")
  );

  //find middleName

  const middleName = fullName.substring(
    fullName.indexOf(" ") + 1,
    fullName.lastIndexOf(" ")
  );

  //find lastName
  const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

  console.log(
    `Hello my firstname is ${firstName} and my middlename is ${middleName} and last my lastname is ${lastName}`
  );
}

getNameParts("Cecilie Jasmin Jørgensen");
