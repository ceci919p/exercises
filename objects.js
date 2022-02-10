"use strict";

const person1 = {
  firstname: "Peter",
  age: 29,
  student: false,
};

const person1 = {
  firstname: "Cecilie",
  age: 25,
  student: true,
};

console.log(person1.lastName);

person1.lastName = "Lind";

console.log(person1.lastName);

person1.lastName = undefined;

console.log(person1);

console.log(person1.lastName);
console.log(person1.middleName);

delete person1.lastName;
console.log(person1.lastName);

person1.age++;

console.log(person1);

person1 = person2;
console.log(person1);
