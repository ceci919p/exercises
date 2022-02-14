/* "use strict";

const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};

const animal = Object.create(Animal);
animal.image = "image.jpg";
console.log(animal.image);
console.log(Animal);

window.addEventListener("DOMContentLoaded", start);
function start() {
  presentPet();
}

/* console.log("cecilie");
const firstName = "cecilie";
console.log(firstName); */

/* function sayHello(lastName, firstName) {
  firstName = "cecilie";
  console.log(`Hello ${firstName}`);
} */

/* function presentPet(firstName, animalType, animalName) {
  console.log(
    `My name is ${firstName}, I have a ${animalType} called ${animalName}`
  );
}

let firstName = "Cecilie";

function sayHello(firstName) {
  console.log(`hello ${firstName}`);
}

sayHello(firstName);

let aNumber = 3;
let theThirdNumber = 4;

function addingNumber(aNumber, bNumber) {
  theThirdNumber = 5;
  console.log(aNumber + bNumber + theThirdNumber);
}

addingNumber(2, 4); */

//3 different ways to make functions

//first

sayHello("Cecilie");

function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
}

//second

let sayWhatEver = function (firstName) {
  console.log(`What ever ${firstName}`);
};

//third

let sayHoney = (firstName) => {
  console.log(`Honey ${firstName}`);
};

//keep in mind that sayWhatEver and sayHoney is placed after the function

sayWhatEver("Cecilie");
sayHoney("Cecilie");

let myName = "Cecilie";

sayHello(myName);

function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
}

//let firstName = "Cecilie";
//let animalType = "dog";
//let animalName = "Indy";

function presentPet(firstName, animalType, animalName) {
  console.log(
    `My name is ${firstName}, I have a ${animalType} called ${animalName}`
  );
}

presentPet("Cecilie", "dog", "Indy");
