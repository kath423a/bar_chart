"use strict";

document.addEventListener("DOMContentLoaded", init);

const model = [6, 2, 4, 5, 30, 22, 1, 7, 19, 22, 5, 11, 15, 8, 27, 24, 14, 9, 3, 16, 26, 17, 27, 6, 12, 18, 3, 0, 10, 20, 14, 29, 10, 13, 2, 11, 23, 9, 12, 23];

function init() {
  console.log("init");

  loop();
}

function loop() {
  console.log("loop");

  setTimeout(loop, 1000);
  displayData();
  modifyModel();
  getNumberOfCustomers();
}

function getNumberOfCustomers() {
  console.log("getNumberOfCustomers");

  //FAKE gives a completely random number
  return Math.floor(Math.random() * 32);

  displayData();
  modifyModel();
}

function displayData() {
  console.log("displayData");

  //Clear the container first
  document.querySelector("#bars").innerHTML = "";

  for (let i = 0; i <= 40; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = (model[i] / 32) * 100 + "%";
    document.querySelector("#bars").append(bar);
  }

  //Add the current number of customers to the bar-chart:
  const queueSize = getNumberOfCustomers();

  modifyModel();
}

function modifyModel() {
  console.log("modifyModel");

  model.shift();
  model.push(queueSize);
}
