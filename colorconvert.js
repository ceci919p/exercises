"use strict";

//hexToRGB

/* //convert from hex to integer
let numberAsHex = "f3";
let numberAsInteger = parseInt(numberAsHex, 16); //second argument is the base

console.log("numberAsInteger", numberAsInteger);

//RGBtoHex

//convert from integer to hex
let someNumberAsInteger = 255;
let someBase16NumberAsString = someNumberAsInteger.toString(16);

console.log("someBase16NumberAsString", someBase16NumberAsString);

//simple integer convertion
let simpleNumberAsString = 234;
let simpleNumber = parseInt(simpleNumberAsString);

console.log(simpleNumber); */

//remove #, 2 first letters is red, 2 middle letters is green and last 2 letters is blue
//we need to chop the hex code into 3 strings

//rgbToHex
//int
//string base 16
//remove rgb (beginning)
//use split
//call split on remaining string

//------HexToRGB EXERCISE--------

//let hex = "#ff64c8";

//make an object

//make conversion function

function hexToRgb(hex) {
  //get hex values and convert them to rgb
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  console.log("rgb", r, g, b); // should be 255, 100, 200
  console.log(r); //returns the right value
  console.log(g); //returns the right value
  console.log(b); //returns the right value

  //return it as an object with the right values of rgb
  let rgbColor = { r, g, b };
  console.log(rgbColor);
}

hexToRgb("#ff64c8");

console.log(hexToRgb);

//------RGBtoHex EXERCISE--------

//string base 16
//remove rgb (beginning)
//use slice => extracts a section of a string and returns it as new string
//we use -2 because we need to remove the 2 last numbers from r, 2 from g etc.
//we have "chopped" the hex code into 3 strings

rgbToHex(245, 128, 202);

function rgbToHex(r, g, b) {
  let redColor = r.toString(16).slice(-2);
  let greenColor = g.toString(16).slice(-2);
  let blueColor = b.toString(16).slice(-2);

  let hexColor = { redColor, greenColor, blueColor };
  console.log(`#${redColor}${greenColor}${blueColor}`);
}

rgbToHex(245, 128, 202);

//------cssToRGB EXERCISE--------

function cssToRgb(colorString) {
  let redColor = parseInt(
    colorString.substring(
      colorString.indexOf("(") + 1,
      colorString.indexOf(",")
    )
  );
  let greenColor = parseInt(
    colorString.substring(
      colorString.indexOf(" ") + 1,
      colorString.lastIndexOf(",")
    )
  );
  let blueColor = parseInt(
    colorString.substring(
      colorString.lastIndexOf(",") + 2,
      colorString.lastIndexOf(")")
    )
  );

  let rgbColor = { redColor, greenColor, blueColor };
  console.log(rgbColor);
}

cssToRgb("rgb(245, 128, 202)");

//-----------------------WITH RETURN--------------------

//------------------HEXTORGB--------------------------------------------
//make conversion function

/* function hexToRgb(hex) {
  //get hex values and convert them to rgb
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  //console.log("rgb", r, g, b); // should be 255, 100, 200

  //return it as an object with the right values of rgb
  return { r, g, b };
}

hexToRgb("#ff64c8"); */

//------------------RGBTOHEX--------------------------------------------

/*function rgbToHex(r, g, b) {
  let redColor = r.toString(16).slice(-2);
  let greenColor = g.toString(16).slice(-2);
  let blueColor = b.toString(16).slice(-2);

  let hexColor = { redColor, greenColor, blueColor };

  return `#${redColor}${greenColor}${blueColor}`;
}

rgbToHex(245, 128, 202); */
