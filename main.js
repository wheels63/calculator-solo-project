let total = 0;
let operator = "";

// operators
document.querySelector("#subtraction").addEventListener("click",minus)
document.querySelector("#addition").addEventListener("click", addition)
document.querySelector("#multiplication").addEventListener("click", multiplication)
document.querySelector("#division").addEventListener("click", division)
document.querySelector("#reset").addEventListener("click", reset)

function minus() {
  operator = "-"
  document.querySelector("#placeToShowOperators").innerText = "-";
  // document.querySelector("#placeToShow").innerText = total;
}

function addition() {
  operator = "+";
  document.querySelector("#placeToShowOperators").innerText = "+";
}

function multiplication() {
  operator = "x";
  document.querySelector("#placeToShowOperators").innerText = "x";
}

function division() {
  operator = "/";
  document.querySelector("#placeToShowOperators").innerText = "%";
}
function reset() {
  operator = "";
  total = 0;
  document.querySelector("#placeToShowNumbers").innerText = "The calculator is reset";
}

// numbers
document.querySelector("#one").addEventListener("click", one)
document.querySelector("#two").addEventListener("click", two)
document.querySelector("#three").addEventListener("click", three)
document.querySelector("#four").addEventListener("click", four)
document.querySelector("#five").addEventListener("click", five)
document.querySelector("#six").addEventListener("click", six)
document.querySelector("#seven").addEventListener("click", seven)
document.querySelector("#eight").addEventListener("click", eight)
document.querySelector("#nine").addEventListener("click", nine)

function one() {
  document.querySelector("#placeToShowNumbers").innerText = total;
}
function two() {
  document.querySelector("#placeToShowNumbers").innerText = total;
}
function three() {
  document.querySelector("#placeToShowNumbers").innerText = total;
}

// i click on button
// if no operator is in place, and the total is zero. 

// what the hell is this?
// just to get my github points up. that's why i'm doing this. 

// okay nov 14th, until i get git to work on my new computer i'm giong to have to do this hack haha