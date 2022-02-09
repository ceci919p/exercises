"use strict";
let max = 23;
let i = 0;

init();

function init() {
  loop();
}

function loop() {
  console.log("i", i);
  i++;
  if (i < max) {
    setTimeout(loop, 1000);
  }
}
