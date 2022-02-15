"use strict";
/* 
const result = greeting("Cecilie");
function greeting(firstName) {
  return `hello ${firstName}`;
}

console.log(result); //returns "hello Cecilie" */
//you can change cecilie to any name, literally:

/* const result = greeting("any name");
function greeting(firstName) {
  return `hello ${firstName}`;
}

/* console.log(result); //returns "hello anyname" */
/*console.log(greeting("any name")); // returns "hello anyname" as it is the same as result */

//------------function without parameter--------------------------------
/* const result = greeting("any name");
function greeting() {
  return `hello ${firstName}`;
}
console.log(greeting("any name")); */
//gets an error since firstname is not defined when its not a parameter in the function greeting

//------------function called inside a template literal:----------------

/* const txt = `Greeting is ${greeting("A Name")}`;

function greeting(firstName) {
  return `hello ${firstName}`;
}

console.log(txt); //returns greeting is hello a name, it works */

//function called manually

const txt = `Greeting is ${greeting("A Name")}`;

function greeting(firstName) {
  return `hello ${firstName}`;
}

//we dont have a console.log and we have tried calling in it manually.
//the return statement ends function execution and specifies a value to be returned to the function caller.
//therefor you cannot call return manually but you need to call the function -
// as return finds a value to be return to the function caller
//you need to call the function caller (in this case txt)

//---------capitalization with return insted of console.log

/* function capitalize(str) {
  str = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

  return `My name is ${str}`;
}

console.log(capitalize("cecIliE")); */

//---------fullname exercise with return

/* function fullName(lastName, firstName, middleName) {
  if (middleName !== undefined) {
    return { firstName, middleName, lastName };
  } else {
    return `${firstName} ${lastName}`;
  }
}

console.log(fullName("Potter", "Harry", "James"));

console.log(fullName("Potter", "Harry", "James")); // "Harry James Potter"

console.log(fullName("Potter", "Harry")); // "Harry Potter"

console.log(fullName("Harry", "Potter")); // "Potter Harry"

console.log(
  fullName("Potter", "Harry", "James", "Pottypotpot", "Bootybootboot")
); */

//-------------------capitalize 2-------------------------------------------------------------------------------

//our old version without console.log(capitalize(name)):

//storing the result in a variable
const str = "CEciLIE";

//test the function by calling it
const cap = capitalize(str);

function capitalize(str) {
  str = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

  return `${str}`; //should return newly created, corretly capitalized string
}

//then console.log that:
//console.log(cap); //gets me value of cap, "Cecilie", in the capitalized version

//----test the function manually by calling it directly (manually) from the console,
//----and observe the output/input return value

//---------ANSWER: if i call capitalize("PHiLiP") the output will be a corretly capitalized string
//---------ANSWER 2: if i call cap i will get the name "Cecilie" also correctly capitalized

//the function must return the correct string, not log it into the console!
//-------if i remove the console.log(cap); I can still find the value of cap by calling it manually.
//-------The same goes as the function capitalize();

//------------------------------------------------------------------------------------------------------------------

//------- fullname with return 2 (no console.log)

//storing result in a variable:
/* 
const firstName = "Cecilie";
const middleName = "";
const lastName = "Jørgensen";

//test the function by calling it
const getFullName = fullName(lastName, firstName, middleName);

function fullName(lastName, firstName, middleName) {
  //calling the function capitalize to capitalize first letters
  firstName = capitalize(firstName);
  middleName = capitalize(middleName);
  lastName = capitalize(lastName);

  if (middleName !== undefined) {
    return `${firstName} ${middleName} ${lastName}`;
  } else {
    return `${firstName} ${lastName}`;
  }
} */

//then console.log that
//console.log(getFullName);

//--------------------------------------------------------------------------------------------------------------

//-----getNameParts(fullName) 2------

//storing the result in a variable
//const str = "CEciLIE";

//test the function by calling it
//const cap = capitalize(str);

//-----------------------------------------------------------------------------------------

//storing result in a variable:
let fullName = "cecilie jasmin jørgensen";

//test the function by calling it
const getAllNameParts = getNameParts(fullName);

function getNameParts(fullName) {
  //find firstName
  let firstName = fullName.substring(
    fullName.indexOf(0),
    fullName.indexOf(" ")
  );

  //calling the function capitalize to capitalize first letters

  firstName = capitalize(firstName); //doesnt work

  //find middleName

  let middleName = fullName.substring(
    fullName.indexOf(" ") + 1,
    fullName.lastIndexOf(" ")
  );

  //calling the function capitalize to capitalize first letters
  middleName = capitalize(middleName); //doesnt work

  //find lastName
  let lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

  //calling the function capitalize to capitalize first letters

  lastName = capitalize(lastName); //doesnt work

  return { firstName, middleName, lastName };
}

//then console.log that
//console.log(fullName);

//Try to call the fullName function with the result from this function,
//and check if it returns the same (capitalizes) full name as you gave to this function!
//Remember that fullName doesn't take an object,
//so you'll have to split the result into three different variables when calling it.

//-------------ANSWER:

//Optional: Make the capitalization work correctly for names with two or more middle names.
//Do it without modifying the capitalize function. Maybe you can use a split, a loop, and later a join

//------------ANSWER:
