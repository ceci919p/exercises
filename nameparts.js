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

//-----FULLNAME FUNCTION EXERCISE

/* function fullName(lastName, firstName, middleName) {
  const theFullName = firstName.concat(" ", middleName, " ", lastName);
  console.log(`fullName: ${theFullName}`);
}

fullName("Potter", "Harry", "James"); */

function fullName(lastName, firstName, middleName) {
  console.log("middleName");
  if (middleName !== undefined) {
    console.log(`${firstName} ${middleName} ${lastName}`);
  } else {
    console.log(`${firstName}  ${lastName}`);
  }
}

fullName("Potter", "Harry", "James"); // "Harry James Potter"

fullName("Potter", "Harry"); // "Harry Potter"

fullName("Harry", "Potter"); // "Potter Harry"

fullName("Potter", "Harry", "James", "Pottypotpot", "Bootybootboot"); // Harry James Potter
