const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");
const grey = document.querySelector("#grey");
const purple = document.querySelector("#purple");

red.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

blue.addEventListener("dblclick", function () {
  document.body.style.backgroundColor = "blue";
});

green.addEventListener("mouseover", function () {
  document.body.style.backgroundColor = "green";
});

green.addEventListener("mouseout", function () {
  document.body.style.backgroundColor = "black";
});

purple.addEventListener("drag", function () {
  document.body.style.backgroundColor = "purple";
});

grey.addEventListener("dragstart", function () {
  document.body.style.backgroundColor = "silver";
});

grey.addEventListener("dragend", function () {
  document.body.style.backgroundColor = "black";
});
body.addEventListener("offline", function () {
  document.body.backgroundColor = "silver";
});
