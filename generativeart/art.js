"use strict";

//declare variables

const art = document.querySelectorAll(".artwork");

window.addEventListener("load", artworkLoop);

function artworkLoop() {
  //artwork 1

  //start at 100, end at 300 and 20 increment at step
  for (let counter = 100; counter < 300; counter += 20) {
    //both the width and the height of each div must be set to the value of the loop counter when that div is created.
    //we do that with ${counter} = value of the loop counter
    art[0].innerHTML += `<div class="box" style="width:${counter}px; height:${counter}px"></div>`;
  }

  //artwork 2

  for (let counter = 0; counter < 90; counter += 10) {
    //counter += 10 => every loop adds 10
    //console.log(counter);
    //innerHTML gets .artwork2 (with the placement 1 in the array) into the DOM.
    // +=  adds the value of the right operand to a variable and assigns the result to the variable.
    //then we make the div and inside that we add style attribut and transform rotate
    //for every loop we want .artwork2 to rotate the same degrees as the value of counter. This will make a nice artwork shape
    art[1].innerHTML += `<div class="box" style="transform: rotate(${counter}deg)"></div>`;
  }

  //artwork 3

  for (let counter = 0; counter < 200; counter += 10) {
    art[2].innerHTML += `<div class="circle" style="width:${counter}px; height:${counter}px"></div>`;
  }

  //artwork 4

  for (let counter = -90; counter < 90; counter += 20) {
    art[3].innerHTML += `<div class="box" style="transform: translate(${counter}px, ${counter}px)"></div>`;
  }

  //artwork 5

  //in artwork 5 we want to multiply the value of the loop counter with 2
  //we use *= instead of +=
  for (let counter = 1; counter < 512; counter *= 2) {
    art[4].innerHTML += `<div class="circle" style="width:${counter}px; height:${counter}px"></div>`;
  }

  //artwork 6

  for (let counter = -20; counter < 45; counter += 5) {
    art[5].innerHTML += `<div class="circle" style="transform: translateX(${
      counter - 50
    }px) rotate(${counter * 4}deg)"></div>`;
  }

  //artwork 7

  for (let counter = 0; counter < 200; counter += 10) {
    art[6].innerHTML += `<div class="circle" style="width:${counter}px; height:${counter}px; transform: translate(${counter}px, ${
      -counter / 2
    }px)"></div>`;
  }

  //artwork 8

  for (let counter = 50; counter < 200; counter += 10) {
    art[7].innerHTML += `<div class="box" style="width:${counter}px; height:${counter}px; transform: translateX(${
      counter / 2
    }px) rotate(${counter}deg)"></div>`;
  }

  //artwork 9
  //can't make this work with just class="box circle"
  //multiple classes should be aplied when using space to separate the classes.
  //the boxes doesnt show up in the DOM

  for (let counter = 50; counter < 200; counter += 30) {
    art[8].innerHTML += `<div class="box"; style="width:${counter}px; height:${counter}px"></div>`;
    console.log(counter);
    art[8].innerHTML += `<div class="circle"; style="width:${counter}px; height:${counter}px"></div>`;
    console.log(counter);
  }
}

artworkLoop();
