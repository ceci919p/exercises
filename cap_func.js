"use strict";

function capitalize(str) {
  str = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();

  console.log(`My name is ${str}`);
}

capitalize("cecILIe");
