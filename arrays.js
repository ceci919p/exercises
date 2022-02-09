"use strict";

/* const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log(letters[4]);
console.log(letters);

const newArr = letters;
newArr[4] = "*";
console.log(letters[4]);
console.log(letters); */

//array methods 5.5

//create an array
const people = ["Harry", "Ron", "Hermione"];
let result;

//adds an element to the array from the end (use .unshift to add element from the beginning)
result = people.push("Draco");
//removes an element to the array from the end (use .shift to remove element from the beginning)
result = people.pop();
result = people.push("Neville");
result = people.push("Luna");
//returns a shallow copy of a portion of an array into a new array object selected from start to end
//with slice you can remove from an array anywhere
result = people.slice(0, 4);
//method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//with splice you can add to an array anywhere
result = people.splice(1, 0, "Cho");
//replace an element
people[1] = "Ginny";
result = people.push("Fred", "George");
//indexOf = which index element has
//with indexOf you can find a specific element in an array
result = people.indexOf("Fred");
result = people.splice(result, 1);

console.log(result);
console.log(people);

//CONVERT ARRAYS

//split without anything in () will just make the whole sentence one element in an array.
//To make each letter an element you use .split("")
//to make each word an element you use .split(" ")
const str = "abcdefghijklmn";
const arr1 = str.split();
console.log(arr1);
//Array.from will make each letter an element in an array by default
const arr2 = Array.from(str);
console.log(arr2);

//how can we convert an array to a string?

console.log(str.toString());
