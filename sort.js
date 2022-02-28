"use strict";

//-----simple sort---------------------

const animals = [
  { name: "Mandu", type: "cat" },
  { name: "Mia", type: "cat" },
  { name: "Leeloo", type: "dog" },
  { name: "Freddie", type: "dog" },
];

//filter returns new array that is filter. Sorting just sorts the array. If we are supposed to combine them....

//filter should come first as it returns a new array and then we can sort on the new, filtered array.
//we need to make boolean to return bolean result (true or false)

let filteredArray = animals.filter((animal) => {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
});

console.log("filteredArray", filteredArray);

//and then we would sort it by name

console.log(animals);

function compareName(a, b) {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
}

animals.sort(compareName);
