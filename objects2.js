"use strict";

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

function presentPet(firstName, animalType, animalName) {
  console.log(
    `My name is ${firstName}, I have a ${animalType} called ${animalName}`
  );
}
