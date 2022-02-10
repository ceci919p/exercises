/* "use strict";
//references and copies

let person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

let person2 = {
  firstName: "other Peter",
  age: 28,
  student: false,
};

let person3 = person1;

person3.firstName = "Changed";

person3 = person2;

person2.firstName = "Also changed";

person1 = person3;
 */

const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};

const student2 = {
  firstName: "Harry",
  lastName: "Potter",
};

if (student1 == student2) {
  console.log("They are the same!");
} else {
  console.log("They are not...");
}

/* student1.firstName = "Potty";
console.log(student1);
console.log(student2); */

student1.firstName = student2.firstName;
student1.lastName = student2.lastName;
console.log(student1);
console.log(student2);
