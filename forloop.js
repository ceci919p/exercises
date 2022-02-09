"use strict";

//create loops that console.logs the numbers:

//From 0 to 9
//here the "counter" variable i is declared right in the loop = inline variable declaration
//such variables are visible only inside the loop
/* for (let counter = 0; counter < 10; counter++) {
  console.log(i); // will show 0, 1, 2 etc.
} */

//From 1 to 10
//instead of defining a variable, we could use an existing one
/* let counter = 1;

for (counter = 1; counter < 11; counter++) {
  console.log(counter); // will show 1, 2, 3 etc.
} */

//from 10 to 0, and after 0 it console.logs the text "liftoff"

/* for (let counter = 10; counter > -1; counter--) {
  console.log(counter);
}
console.log("liftoff");
 */

//from 1 to 19, but only counts odd numbers (no if-statement, change the increment!)
/* for (let counter = 1; counter < 20; counter += 2) {
  console.log(counter);
}
 */

//from 1 to 16777216, but doubling each time (2, 4, 8, 16..)
/* for (let counter = 1; counter < 16777217; counter += 0.25) {
  console.log(counter);
} */

/* for (let counter = 1; counter < 16777217; counter *= 2) {
  console.log(counter);
} */

//from 111 to 138, in steps of 3 (meaning the second number is 114 (111+3))

/* for (let counter = 111; counter < 139; counter += 3) {
  console.log(counter);
} */
