/* "use strict";

const url1 = "https://petlatkea.dk/2021/hogwarts/students.json";
const url2 = "https://petlatkea.dk/2021/hogwarts/families.json";

function start() {
  console.log("1");
  loadFile1();
  console.log("2");
  loadFile2();
  console.log("3");
  useData();
}

function useData() {
  console.log("6");
}

async function loadFile1() {
  const resp = await fetch(url1);
  const data = await resp.json();
  console.log("4");
}

async function loadFile2() {
  const resp = await fetch(url2);
  const data = await resp.json();
  console.log("5");
}

start(); */ //now it console.logs 1,2,3,6,4,5

//what now? what is the order = loadFile1 and loadFile2 => loadFile1

"use strict";

const url1 = "https://petlatkea.dk/2021/hogwarts/students.json";
const url2 = "https://petlatkea.dk/2021/hogwarts/families.json";

async function start() {
  console.log("1");
  await loadFile1();
  console.log("2");
  await loadFile2();
  console.log("3");
  useData();
}

function useData() {
  console.log("6");
}

async function loadFile1() {
  const resp = await fetch(url1);
  const data = await resp.json();
  console.log("4");
}

async function loadFile2() {
  const resp = await fetch(url2);
  const data = await resp.json();
  console.log("5");
}

start();
